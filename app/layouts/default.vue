
<script setup lang="ts">
const colorMode = useColorMode()

const toggleColorMode = () => {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
    <div class="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <header
            class="border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 bg-white/75 dark:bg-gray-900/75 backdrop-blur">
            <UContainer class="flex items-center justify-between h-16">
                <NuxtLink to="/" class="text-xl font-bold">
                     Blogs
                </NuxtLink>

                <nav class="flex items-center gap-4">
                    <UButton variant="ghost" color="gray" to="/blog">Blog</UButton>
                    <UButton variant="ghost" color="gray" to="/about">About</UButton>

                    <div class="h-4 w-px bg-gray-200 dark:bg-gray-800 mx-2" />

                    <UButton :icon="colorMode.value === 'dark' ? 'i-heroicons-moon' : 'i-heroicons-sun'" color="gray"
                        variant="ghost" @click="toggleColorMode" />
                </nav>
            </UContainer>
        </header>

        <main class="flex-grow">
            <slot />
        </main>

        <footer class="border-t border-gray-200 dark:border-gray-800 py-8">
            <UContainer class="flex flex-col md:flex-row items-center justify-between gap-4">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    © {{ new Date().getFullYear() }} Your Name. All rights reserved.
                </p>
                
            </UContainer>
        </footer>
    </div>
</template>
