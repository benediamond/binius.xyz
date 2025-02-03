import { useState, useEffect } from 'react';
import axios from 'axios';

interface Benchmark {
    operation: string;
    count: string;
    prove: string;
    verify: string;
    proofSize: string;
}

interface BenchmarkTableProps {
    benchmarkType: string;
}

// TODO: After CI is setup, change this URL!!
const DATA_URL = 'https://benchmark.binius.xyz/result.json';
const VALID_CATEGORIES = ['trace_gen_time', 'proving_time', 'verification_time', 'proof_size_kib', 'n_ops'];

const nanosecondsToMilliseconds = (ns: number) => (ns / 1000000.0).toFixed(2);
const nanosecondsToSeconds = (ns: number) => (ns / 1000000000.0).toFixed(2);

const validateData = (data: Record<string, Record<string, string>>) => {
    if (Object.keys(data).length === 0) {
        throw new Error('Invalid data: no data found');
    }

    Object.entries(data).forEach(([operation, categories]) => {
        const invalidCategories = Object.keys(categories).filter(cat => !VALID_CATEGORIES.includes(cat));
        if (invalidCategories.length > 0) {
            throw new Error(`Invalid data: ${operation} contains invalid categories: ${invalidCategories.join(', ')}`);
        }
        if (Object.keys(categories).length !== 5) {
            throw new Error(`Invalid data: ${operation} has ${Object.keys(categories).length} categories, expected 5`);
        }
    });
};

const fetchAndProcessData = async (benchmarkTypeExpected: string): Promise<Benchmark[]> => {
    try {
        const { data } = await axios.get(DATA_URL);
        const benchmarks: Record<string, Record<string, string>> = {};

        Object.entries(data).forEach(([key, value]: [string, any]) => {
            const [benchmarkType, operation, category] = key.split('::');
            if (benchmarkType !== benchmarkTypeExpected) return;

            const latencyValue = value.latency?.value;
            if (typeof latencyValue !== 'number') {
                throw new Error(`Invalid data: ${operation}::${category} is not a number`);
            }

            if (!benchmarks[operation]) {
                benchmarks[operation] = {};
            }

            benchmarks[operation][category] = category === 'verification_time'
                ? nanosecondsToMilliseconds(latencyValue)
                : category.endsWith('_time')
                    ? nanosecondsToSeconds(latencyValue)
                    : latencyValue.toString();
        });

        validateData(benchmarks);

        return Object.entries(benchmarks).map(([operation, data]) => ({
            operation,
            count: data.n_ops,
            prove: `${data.trace_gen_time} + ${data.proving_time}`,
            verify: data.verification_time,
            proofSize: data.proof_size_kib
        }));
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.error('Axios error:', error.response?.data || error.message);
            throw new Error(`Failed to fetch benchmark data: ${error.message}`);
        }
        console.error('Error fetching benchmark data:', error);
        throw error;
    }
};

// Component
const BenchmarkTable: React.FC<BenchmarkTableProps> = ({ benchmarkType }) => {
    const [benchmarks, setBenchmarks] = useState<Benchmark[] | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchAndProcessData(benchmarkType)
            .then(setBenchmarks)
            .catch(err => setError(err.message));
    }, [benchmarkType]);

    if (error) return <div>Error loading benchmarks: {error}</div>;
    if (!benchmarks) return <div>Loading...</div>;

    return (
        <table className="vocs_Table">
            <thead>
                <tr className="vocs_TableRow">
                    <th className="vocs_TableHeader">Operation</th>
                    <th className="vocs_TableHeader">Count</th>
                    <th className="vocs_TableHeader">Prove (s)</th>
                    <th className="vocs_TableHeader">Verify (ms)</th>
                    <th className="vocs_TableHeader">Proof Size (KiB)</th>
                </tr>
            </thead>
            <tbody>
                {benchmarks.map((row, index) => (
                    <tr key={index} className="vocs_TableRow">
                        <td className="vocs_TableCell">{row.operation}</td>
                        <td className="vocs_TableCell">{row.count}</td>
                        <td className="vocs_TableCell">{row.prove}</td>
                        <td className="vocs_TableCell">{row.verify}</td>
                        <td className="vocs_TableCell">{row.proofSize}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default BenchmarkTable;