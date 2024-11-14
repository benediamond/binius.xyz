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
      items: [
        {
          text: 'Arithmetization Overview',
          link: '/arithmetization/',
        },
        {
          text: 'Multi-Multiset Matching',
          link: '/arithmetization/matching',
        },
      ],
    },
    {
      text: 'Reductions',
      collapsed: false,
      items: [
        {
          text: 'Reductions Overview',
          link: '/cryptography/',
        },
      ],
    },
    {
      text: 'Cryptography',
      collapsed: false,
      items: [
        {
          text: 'Cryptography Overview',
          link: '/cryptography/',
        },
      ],
    }
  ],
})
