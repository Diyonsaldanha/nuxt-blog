 export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],

  
  css: [
    '~/assets/css/main.css'
  ],
   app: {
    head: {
      title: 'DevBlog | My Portfolio',
      meta: [
        { name: 'description', content: 'Writing about web development and my projects.' }
      ]
    }
  }
})