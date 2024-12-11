import { defineConfig } from 'vocs'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export default defineConfig({
  title: 'binius.xyz',
  head() {
    return (
      <>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"></link>
        <script dangerouslySetInnerHTML={{ __html: `
          if (location.pathname !== '/') {
            document.documentElement.style.opacity = '0';
            document.addEventListener('DOMContentLoaded', () => {
              document.documentElement.style.opacity = '1';
              document.documentElement.style.transition = 'opacity 0.1s';
            });
          }
        `}} />
      </>
    )
  },
  logoUrl: {
    light: '/logo-light.svg',
    dark: '/logo-dark.svg',
  },
  markdown: {
    remarkPlugins: [
      remarkMath,
    ],
    rehypePlugins: [
      rehypeKatex,
    ]
  },
  topNav: [
    {
      text: 'Blueprint',
      link: '/blueprint',
      match: '/blueprint'
    },
    {
      text: 'Getting Started',
      link: '/',
      match: '/fix-me'
    },
    {
      text: 'Benchmarks',
      link: '/',
      match: '/fix-me'
    },
    {
      text: 'Educational Resources',
      link: '/',
      match: '/fix-me'
    },
    {
      text: "Abcdefgh.",
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/wevm/vocs/blob/main/src/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: 'https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md',
        },
      ],
    },
  ],
  sidebar: {
    "/blueprint": [
      {
        text: "Introduction",
        link: "/blueprint",
      },
      {
        text: "Overview",
        link: "/blueprint/overview",
      },
      {
        text: "Mathematical Primer",
        link: "/blueprint/primer"
      },
      {
        text: "The PIOP–PCS Boundary",
        link: "/blueprint/boundary"
      },
      {
        text: 'Arithmetization',
        collapsed: false,
        link: '/blueprint/arithmetization/',
        items: [
          {
            text: "Background",
            link: "/blueprint/arithmetization/background"
          },
          {
            text: "Multi-Multiset Matching",
            link: "/blueprint/arithmetization/matching",
            collapsed: true,
            items: [
              {
                text: "A Toy Example",
                link: "/blueprint/arithmetization/matching/example"
              },
              {
                text: "Definition of M3",
                link: "/blueprint/arithmetization/matching/definition"
              },
              {
                text: "Verifying M3 Instances",
                link: "/blueprint/arithmetization/matching/verifying"
              },
              {
                text: "Proving Collatz Orbits",
                link: "/blueprint/arithmetization/matching/collatz"
              },

            ]
          },
          {
            text: "M3 Examples",
            link: "/blueprint/arithmetization/examples",
            collapsed: true,
            items: [
              {
                text: "Lasso Lookup",
                link: "/blueprint/arithmetization/examples/lasso"
              },
              {
                text: "RAM",
                link: "/blueprint/arithmetization/examples/ram"
              },
              {
                text: "Merkle–Patricia Inclusion",
                link: "/blueprint/arithmetization/examples/mpt"
              },
            ]
          },
        ]
      },
      {
        text: 'Reductions',
        collapsed: false,
        link: '/blueprint/reductions/',
        items: [
          {
            text: "Background",
            link: "/blueprint/reductions/background",
          },
          {
            text: "Virtual Polynomials",
            link: "/blueprint/reductions/virtual",
            collapsed: true,
            items: [
              {
                text: "Merging",
                link: "/blueprint/reductions/virtual/merge"
              },
              {
                text: "Shifting",
                link: "/blueprint/reductions/virtual/shift"
              }
            ]
          },
          {
            text: "Zerocheck",
            link: "/blueprint/reductions/zerocheck",
            collapsed: true,
            items: [
              {
                text: "Review",
                link: "/blueprint/reductions/zerocheck/review"
              },
              {
                text: "Univariate Skip",
                link: "/blueprint/reductions/zerocheck/univariate"
              },
              {
                text: "The Rest",
                link: "/blueprint/reductions/zerocheck/rest"
              }
            ]
          },
          {
            text: "Multiset Check",
            link: "/blueprint/reductions/multiset",
          },
          {
            text: "GKR-Based Grand Product",
            link: "/blueprint/reductions/gpa",
          },
          {
            text: "Evalcheck",
            link: "/blueprint/reductions/evalcheck",
          }
        ],
      },
      {
        text: 'Cryptography',
        collapsed: false,
        link: '/blueprint/cryptography/',
        items: [
          {
            text: "Commitment",
            link: "/blueprint/cryptography/commitment",
            collapsed: true,
            items: [
              {
                text: "Error-Correcting Codes",
                link: "/blueprint/cryptography/commitment/codes"
              },
              {
                text: "The Additive NTT",
                link: "/blueprint/cryptography/commitment/additive"
              },
              {
                text: "The Procedure",
                link: "/blueprint/cryptography/commitment/procedure"
              }

            ]
          },
          {
            text: "Ring-Switching",
            link: "/blueprint/cryptography/switching",
          },
          {
            text: "Batch Evaluation",
            link: "/blueprint/cryptography/batching",
          },
        ]
      },
    ],
  },
})
