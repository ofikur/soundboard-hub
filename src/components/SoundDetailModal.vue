<template>
  <div @click="closeModal" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex justify-center items-center p-4">
    <div @click.stop class="bg-slate-800 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden transform transition-all duration-300 scale-95 animate-fade-in-up">
      <div class="p-6">
        <div class="flex justify-between items-start">
          <h2 class="text-2xl font-bold text-white mb-4">{{ sound.title }}</h2>
          <button @click="closeModal" class="text-slate-400 hover:text-white">&times;</button>
        </div>

        <p v-if="sound.description" class="text-slate-300 mb-4">{{ sound.description }}</p>

        <div v-if="sound.tags && sound.tags.length" class="mb-4">
          <h4 class="font-semibold text-slate-400 mb-2">Tags:</h4>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in sound.tags" :key="tag" class="bg-indigo-500/20 text-indigo-300 text-sm font-medium px-3 py-1 rounded-full">
              {{ tag }}
            </span>
          </div>
        </div>

        <div v-if="sound.uploader" class="text-sm text-slate-400">
          Diupload oleh: <span class="font-semibold text-slate-300">{{ sound.uploader.name }}</span>
        </div>
      </div>
       <div class="bg-slate-900/50 p-4 flex justify-end">
          <button @click="closeModal" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            Tutup
          </button>
        </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  sound: {
    type: Object,
    required: true,
  }
});
const emit = defineEmits(['close']);
const closeModal = () => emit('close');
</script>

<style>
/* Animasi sederhana untuk modal */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
.animate-fade-in-up {
  animation: fade-in-up 0.3s ease-out forwards;
}
</style>
