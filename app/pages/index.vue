<script setup>
// In v3, we query the 'blog' collection we just defined in the config
const { data: posts } = await useAsyncData('blog-posts', () => {
  return queryCollection('blog').all()
})
</script>

<template>
  <div>
    <section class="hero">
      <h1>Hi, I'm a developer.</h1>
      <p>I build things for the web and write about my learnings here.</p>
    </section>

    <div v-if="!posts || posts.length === 0" class="empty-state">
      <p>No posts found. Check your content.config.ts!</p>
    </div>

    <section v-else class="post-grid">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <NuxtLink :to="post.path" class="card-link">
          <span class="date">{{ post.meta?.date || post.date || '' }}</span>
          <h3>{{ post.title }}</h3>
          <p>{{ post.description }}</p>
          <span class="read-more">Read Article &rarr;</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.empty-state {
  text-align: center;
  padding: 3rem;
  background: #fee2e2;
  color: #991b1b;
  border-radius: 8px;
  margin-bottom: 2rem;
}
</style>