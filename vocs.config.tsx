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
  markdown: {
    remarkPlugins: [
      remarkMath,
    ],
    rehypePlugins: [
      rehypeKatex,
    ]
  },
  sidebar: [
    {
      text: 'Introduction',
      link: '/introduction',
    },
    {
      text: 'Overview',
      link: '/overview',
    },
    {
      text: 'Arithmetization',
      collapsed: false,
      link: '/arithmetization/',
      items: [
        {
          text: "Background",
          link: "/arithmetization/background"
        },
        {
          text: "Multi-Multiset Matching",
          link: "/arithmetization/matching",
          collapsed: true,
          items: [
            {
              text: "A Toy Example",
              link: "/arithmetization/matching/example"
            },
            {
              text: "Definition of M3",
              link: "/arithmetization/matching/definition"
            },
            {
              text: "Verifying M3 Instances",
              link: "/arithmetization/matching/verifying"
            },
          ]
        },
        {
          text: "M3 Examples",
          link: "/arithmetization/examples",
          collapsed: true,
          items: [
            {
              text: "Lasso Lookup",
              link: "/arithmetization/examples/lasso"
            },
          ]
        },
      ]
    },
    {
      text: 'Reductions',
      collapsed: false,
      link: '/reductions/',
      items: [
        {
          text: "Background",
          link: "/reductions/background",
        },
        {
          text: "Virtual Polynomials",
          link: "/reductions/virtual",
        },
        {
          text: "Zerocheck",
          link: "/reductions/zerocheck",
          collapsed: true,
          items: [
            {
              text: "Univariate Zerocheck",
              link: "/reductions/zerocheck/univariate"
            },
            {
              text: "Standard Zerocheck",
              link: "/reductions/zerocheck/standard"
            }
          ]
        },
        {
          text: "Multiset Check",
          link: "/reductions/multiset",
        },
        {
          text: "GKR-Based Grand Product",
          link: "/reductions/gpa",
        },
        {
          text: "Evalcheck",
          link: "/reductions/evalcheck",
        }
      ],
    },
    {
      text: 'Cryptography',
      collapsed: false,
      link: '/cryptography/',
      items: [
        {
          text: "Batch Evaluation",
          link: "/cryptography/batching",
        },
      ]
    }
  ],
})
