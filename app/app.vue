<template>
  <div class="layout">
    <SiteHeader />
    <main class="container">
      <NuxtPage />
    </main>
    <footer class="site-footer">
      <p>&copy; {{ new Date().getFullYear() }} My Dev Blog. Built with Nuxt 4.</p>
    </footer>
  </div>
</template>