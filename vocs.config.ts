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
          text: 'Arithmetization Techniques',
          link: '/arithmetization/',
        },
        {
          text: 'Multi-Multiset Matching',
          link: '/arithmetization/matching',
        },
      ],
    },
    {
      text: 'Cryptography',
      collapsed: false,
      items: [
        {
          text: 'Cryptographic Reductions',
          link: '/cryptography/',
        },
      ],
    }

  ],
})
