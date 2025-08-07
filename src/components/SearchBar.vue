<template>
  <form @submit.prevent="performSearch" class="w-full max-w-sm">
    <div class="flex items-center border-b-2 border-indigo-500 py-2">
      <input
        v-model="searchQuery"
        class="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        placeholder="Cari suara..."
        aria-label="Search sound"
      >
      <button
        class="flex-shrink-0 bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
        type="submit"
      >
        Cari
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const searchQuery = ref('');
const router = useRouter();

const performSearch = () => {
  if (searchQuery.value.trim()) {
    // Navigasi ke halaman search dengan query
    router.push({ name: 'search', query: { q: searchQuery.value } });
  }
};
</script>
