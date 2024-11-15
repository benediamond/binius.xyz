import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'binius.xyz',
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
