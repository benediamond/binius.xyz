import { defineConfig } from 'vocs'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export default defineConfig({
  title: 'binius.xyz',
  head() {
    return (
      <>
        <script>
          {`
            if (location.pathname !== '/') {
              // Apply immediately before anything else loads
              document.documentElement.style.opacity = '0';
            }
          `}
        </script>
        <style>
          {`
            html {
              transition: opacity 0.2s ease;
            }
            html[data-loading] {
              opacity: 0;
            }
          `}
        </style>
        <script>
          {`
            if (location.pathname !== '/') {
              // Remove the opacity once everything is ready
              window.addEventListener('load', () => {
                requestAnimationFrame(() => {
                  document.documentElement.style.opacity = '1';
                });
              });
            }
          `}
        </script>
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
      text: 'Arithmetization',
      collapsed: false,
      link: '/arithmetization/',
      items: [
        {
          text: 'Multi-Multiset Matching',
          link: '/arithmetization/matching',
        },
      ],
    },
    {
      text: 'Reductions',
      collapsed: false,
      link: '/reductions/',
      items: [
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
        }
      ],
    },
    {
      text: 'Cryptography',
      collapsed: false,
      link: '/cryptography/',
    }
  ],
})
