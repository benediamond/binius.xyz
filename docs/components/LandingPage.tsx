import SVG from 'react-inlinesvg'
import BlueprintIcon from '../public/blueprint-icon.svg'
import PowerButtonIcon from '../public/power-button-icon.svg'
import ChartIcon from '../public/chart-icon.svg'
import BooksIcon from '../public/books-icon.svg'
import ArrowIcon from './ArrowIcon'

const footerShapes = [
  { primary: 'shapes/01.png', alt: ''},
  { primary: 'shapes/02.png', alt: ''},
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: null, alt: null },
  { primary: 'shapes/03.png', alt: ''},
  { primary: 'shapes/04.png', alt: ''},
  { primary: 'shapes/05.png', alt: ''},
  { primary: 'shapes/06.png', alt: ''},
  { primary: 'shapes/07.png', alt: ''},
  { primary: 'shapes/06.png', alt: ''},
  { primary: 'shapes/08.png', alt: ''},
  { primary: 'shapes/09.png', alt: ''},
  { primary: 'shapes/06.png', alt: ''},
  { primary: 'shapes/06.png', alt: ''},
  { primary: 'shapes/10.png', alt: ''},
  { primary: 'shapes/11.png', alt: ''},
  { primary: 'shapes/12.png', alt: ''},
  { primary: 'shapes/06.png', alt: ''},
  { primary: 'shapes/05.png', alt: ''},
  { primary: 'shapes/06.png', alt: ''},
  { primary: 'shapes/07.png', alt: ''},
  { primary: 'shapes/09.png', alt: ''},
  { primary: 'shapes/06.png', alt: ''},
  { primary: 'shapes/08.png', alt: ''},
]

const LandingPage = () => {
  return (
    <div>
      <h1 className="text-center mt-24 mb-6">
        Unlock the full potential of 
        <br className="hidden sm:block" />
        <em> high-performance ZK-proving </em>
        <br className="hidden sm:block" />
         with Binius
        <br className="block sm:hidden" />
      </h1>

      <p className="text-center text-[20px]">
        Explore detailed documentation, benchmarks, and resources
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
        <div className="bg-green p-8 flex flex-col h-full dark:text-slate">
          <img src={BlueprintIcon} alt="Blueprint Icon" className="w-10 h-10 mb-6" />
          <div className="flex flex-col gap-4 flex-grow">
            <h2>Blueprint</h2>
            <p className="mb-4">Learn how Binius proofs are generated and verified</p>
          </div>
          <ArrowIcon />
        </div>

        <div className="bg-orange p-8 flex flex-col h-full dark:text-slate">
          <img src={PowerButtonIcon} alt="Blueprint Icon" className="w-10 h-10 mb-6" />
          <div className="flex flex-col gap-4 flex-grow">
            <h2>Getting Started</h2>
            <p className="mb-4">Learn how to write a SNARK with Binius</p>
          </div>
          <ArrowIcon />
        </div>

        <div className="bg-blue p-8 flex flex-col h-full dark:text-slate">
          <img src={ChartIcon} alt="Blueprint Icon" className="w-10 h-10 mb-6" />
          <div className="flex flex-col gap-4 flex-grow">
            <h2>Benchmarks</h2>
            <p className="mb-4">Explore up-to-date comparative benchmarks</p>
          </div>
            <ArrowIcon />
        </div>

        <div className="bg-red text-white p-8 flex flex-col h-full">
          <img src={BooksIcon} alt="Blueprint Icon" className="w-10 h-10 mb-6" />
          <div className="flex flex-col gap-4 flex-grow">
            <h2>Educational Resources</h2>
            <p className="mb-4">Understand Binius fundamentals and core concepts</p>
          </div>
          <ArrowIcon />
        </div>
      </div>

      <footer className="w-full absolute left-0 mt-2">
        <div className="shape-grid">
          {footerShapes.map((shape, index) => (
            
              <div key={index}>
                {shape.primary &&
                  <img src={shape.primary} alt={shape.alt} className="w-full h-full object-cover" />
                } 
              </div>
            
          ))}
        </div>

        <div className="lp-footer flex py-6 justify-between">
          <p className="text-sm text-gunmetal">&copy; 2024 Binius</p>
          <div className="flex">
            <a href="https://x.com/IrreducibleHW" target="_blank">
              <SVG src="x-icon.svg" className="w-5 h-5 mr-6" />
            </a>
            <a href="https://github.com/IrreducibleOSS" target="_blank">
              <SVG src="github-icon.svg" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
