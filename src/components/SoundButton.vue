<template>
  <button
    @click="playSound"
    class="w-full h-24 bg-slate-800 text-white p-2 rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-transform duration-200 transform hover:-translate-y-1 flex items-center justify-center text-center font-semibold"
  >
    {{ title }}
  </button>
</template>

<script setup>
// Komponen ini menerima 'title' dan 'soundUrl' dari parent
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  soundUrl: {
    type: String,
    required: true,
  },
});

// Fungsi untuk memutar suara saat tombol diklik
const playSound = () => {
  if (props.soundUrl) {
    const audio = new Audio(props.soundUrl);
    audio.play();
  }
};
</script>
