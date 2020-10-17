export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f8ae3821c1edeccf2b7741e',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-rt729kvd',
                  apiId: 'b8fe6901-fe9c-443e-bdc4-947bf92b95a3'
                },
                {
                  buildHookId: '5f8ae38200a2dfc788db06e1',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-633ermsn',
                  apiId: 'b5fafb1a-8bf6-4dd8-8f5e-8ad8e9110d0b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jasonwillschiu/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-633ermsn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
