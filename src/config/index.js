let environment = require('./'+process.env.NODE_ENV+'/environment')

module.exports = Object.assign({
  app: {
    title: 'Redux Watcher App',
    description: 'Polling APIs with Redux.',
    head: {
      titleTemplate: 'Redux Watcher App',
      meta: [
        {name: 'description', content: 'Polling APIs with Redux.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Redux Watcher'},
        {property: 'og:image', content: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Redux Watcher'},
        {property: 'og:description', content: 'Polling APIs with Redux.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@marcusberro'},
        {property: 'og:creator', content: '@marcusberro'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
