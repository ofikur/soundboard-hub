<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SearchBar from './components/SearchBar.vue';
</script>

<template>
  <div class="min-h-screen font-sans text-slate-200">
    <header class="bg-slate-900/70 backdrop-blur-lg text-white shadow-lg sticky top-0 z-40">
      <div class="container mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <RouterLink to="/" class="text-3xl font-bold tracking-wider hover:text-indigo-400 transition-colors">
          Sound<span class="text-indigo-400">Hub</span>
        </RouterLink>
        <nav class="flex items-center space-x-6 font-semibold">
          <RouterLink to="/" class="py-1 border-b-2 border-transparent hover:border-indigo-400 hover:text-indigo-400 transition-all" active-class="text-indigo-400 border-indigo-400">Trending</RouterLink>
          <RouterLink to="/recent" class="py-1 border-b-2 border-transparent hover:border-indigo-400 hover:text-indigo-400 transition-all" active-class="text-indigo-400 border-indigo-400">Recent</RouterLink>
          <RouterLink to="/best" class="py-1 border-b-2 border-transparent hover:border-indigo-400 hover:text-indigo-400 transition-all" active-class="text-indigo-400 border-indigo-400">Best</RouterLink>
        </nav>
        <div class="w-full md:w-auto">
          <SearchBar />
        </div>
      </div>
    </header>

    <main class="container mx-auto px-6 py-8">
      <RouterView />
    </main>

    <footer class="text-center p-8 mt-10 text-gray-500 text-sm border-t border-slate-800">
        <p>Sounds data obtained from MyInstants via an API by abdipr.</p>
        <p>This project is for educational purposes only.</p>
    </footer>
  </div>
</template>
