export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5d29534248cc4461a8605288',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-n3g181g8',
                  apiId: '1e8d4d14-ab5c-4943-8eb7-9a82265d3ebe'
                },
                {
                  buildHookId: '5d29534396b8e853d2f84dfd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ur1jd8ex',
                  apiId: '51268876-d32d-4f84-ad30-aa43eefc82d5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CovetStudio/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ur1jd8ex.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
