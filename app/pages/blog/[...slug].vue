<script setup>
const route = useRoute()

const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <article class="prose" v-if="post">
    <header class="article-header">
      <h1>{{ post.title }}</h1>
      <p class="date">{{ post.meta?.date || post.date || '' }}</p>
    </header>
    
    <ContentRenderer :value="post" />
  </article>
  
  <div v-else class="empty-state">
    <h1>Post not found</h1>
  </div>
</template>