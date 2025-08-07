<template>
  <div class="p-4 md:p-8">
    <h1 class="text-4xl font-bold mb-8 text-white text-center tracking-wide">Terbaik Sepanjang Masa 🏆</h1>
    <LoadingSpinner v-if="isLoading" />
    <div v-else-if="sounds.length > 0" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-8">
      <div v-for="sound in sounds" :key="sound.id">
        <SoundCard :sound="sound" @show-details="openDetailModal" />
      </div>
    </div>
    <div v-else class="text-center text-gray-400 mt-10">Gagal memuat suara terbaik atau endpoint sedang bermasalah.</div>

    <SoundDetailModal
      v-if="isModalVisible"
      :sound="selectedSound"
      @close="closeDetailModal"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import SoundCard from '../components/SoundCard.vue';
import LoadingSpinner from '../components/LoadingSpinner.vue';
import SoundDetailModal from '../components/SoundDetailModal.vue';

const sounds = ref([]);
const isLoading = ref(true);
const isModalVisible = ref(false);
const selectedSound = ref(null);

const openDetailModal = (sound) => {
  selectedSound.value = sound;
  isModalVisible.value = true;
};

const closeDetailModal = () => {
  isModalVisible.value = false;
};

const fetchBestSounds = async () => {
  isLoading.value = true;
  try {
    const response = await fetch('/api/best');
    const data = await response.json();
    sounds.value = data.data || [];
  } catch (error) {
    console.error("Gagal mengambil data terbaik:", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchBestSounds);
</script>
