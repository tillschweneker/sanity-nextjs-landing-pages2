export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '620e0b3f3a2a3c00bca19b17',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-2-studio-5j4f2uf2',
                  apiId: '80f69cc9-b40f-40a8-b58c-74bbd431ac0b'
                },
                {
                  buildHookId: '620e0b3f0209a2730475d931',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-2-web-dvshzfdn',
                  apiId: 'd5cc8baf-d4c3-4707-9740-285250e4800c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tillschweneker/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-2-web-dvshzfdn.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
