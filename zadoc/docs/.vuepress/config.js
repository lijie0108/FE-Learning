const sidebar = require("../guide/sidebar");

module.exports = {
  title: '珍爱',
  description: 'API文档',
  dest: './dist',
  port: '7777',
  head: [
      ['link', {rel: 'icon', href: ''}]
  ],
  markdown: {
      lineNumbers: true
  },
  themeConfig: {
      nav: [{
          text: '客户端API', link: '/guide/'
      }],
      sidebar: require('./sidebar'),
      sidebarDepth: 2,
      lastUpdated: 'Last Updated',
      searchMaxSuggestoins: 10,
      serviceWorker: {
          updatePopup: {
              message: "有新的内容.",
              buttonText: '更新'
          }
      },
      editLinks: true,
      editLinkText: '在 GitHub 上编辑此页 ！'
  }
}