<template>
  <div class="group relative flex flex-col h-48 bg-slate-800/50 rounded-xl shadow-lg transition-all duration-300 hover:bg-slate-800 hover:shadow-indigo-500/40 hover:scale-105">

    <div class="h-28 p-4 flex flex-col justify-start items-center text-center">
      <h3 class="font-bold text-white text-base leading-tight line-clamp-2">
        {{ decodeHtmlEntities(sound.title) }}
      </h3>
    </div>

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-slate-700 group-hover:bg-indigo-600 flex items-center justify-center cursor-pointer transition-all duration-300"
      @click="playSound"
    >
      <PlayIcon class="w-8 h-8 text-white" />
    </div>

    <div class="flex-grow flex justify-center items-end space-x-3 pb-3">
      <button @click="showDetails" title="Lihat Detail" class="p-2 text-slate-400 hover:text-indigo-400 transition-colors">
        <InformationCircleIcon class="w-6 h-6" />
      </button>
      <button @click="downloadSound" title="Download" class="p-2 text-slate-400 hover:text-indigo-400 transition-colors">
        <ArrowDownTrayIcon class="w-6 h-6" />
      </button>
      <button @click="copyLink" title="Salin Link" class="p-2 text-slate-400 hover:text-indigo-400 transition-colors">
        <LinkIcon class="w-6 h-6" />
      </button>
    </div>

    <div v-if="copied" class="absolute bottom-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-fade-in-up">
      Copied!
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PlayIcon, InformationCircleIcon, ArrowDownTrayIcon, LinkIcon } from '@heroicons/vue/24/solid';
// PERUBAHAN DI SINI: Impor fungsi yang baru kita buat
import { decodeHtmlEntities } from '../utils/formatter.js';

const props = defineProps({
  sound: {
    type: Object,
    required: true,
  }
});

const emit = defineEmits(['show-details']);
const copied = ref(false);

const playSound = () => {
  if (props.sound.mp3) {
    const audio = new Audio(props.sound.mp3);
    audio.play();
  }
};

const showDetails = () => {
  emit('show-details', props.sound);
};

const downloadSound = () => {
  const link = document.createElement('a');
  link.href = props.sound.mp3;
  link.download = `${props.sound.title}.mp3`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const copyLink = () => {
  navigator.clipboard.writeText(props.sound.mp3).then(() => {
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  });
};
</script>
