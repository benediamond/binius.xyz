import { defineConfig } from 'vocs'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export default defineConfig({
  title: 'binius.xyz',
  head() {
    return (
      <>
        <style>{`
          .page-loading {
            opacity: 0;
            transition: opacity 0.2s ease;
          }
        `}
        </style>
        <script>
          {`
          if (location.pathname !== '/') {
            document.documentElement.classList.add('page-loading');
            document.addEventListener('DOMContentLoaded', () => {
              requestAnimationFrame(() => {
                document.documentElement.classList.remove('page-loading');
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
