

module.exports = {
  dest: 'docs', 
  base:'/guia-taller-bd-tics/',
  title: 'TALLER DE BASE DE DATOS ',
  
  description: 'contenido digital de la asignatura  TALLER DE BASE DE DATOS',
  
  

  
  themeConfig: {
    
    nav: [ 
      /*
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }*/
    ],
    sidebar: [
      '/',
      '/contenido/tema01/',
      '/contenido/Tema02/',
      '/contenido/Tema03/',
      '/contenido/Tema04/',
    ]
    },
  

  
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
