export default {
  widgets: [
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
                  buildHookId: '60fafb18b583da3820e82867',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-r46k3845',
                  apiId: '367077bd-ae6c-4be2-8500-9bf06403016b'
                },
                {
                  buildHookId: '60fafb199010f4389959debd',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6opgcitt',
                  apiId: '52b41045-c802-4ae9-a1be-3a317f137c92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaylinjc/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6opgcitt.netlify.app', category: 'apps'}
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
