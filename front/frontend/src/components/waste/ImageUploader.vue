<template>
  <div class="w-full max-w-xl mx-auto">
    <div
      class="border-2 border-dashed border-emerald-300 hover:border-emerald-500 rounded-2xl p-6 bg-emerald-50/50 text-center transition-colors cursor-pointer flex flex-col items-center justify-center min-h-[220px]"
      @dragover.prevent
      @drop.prevent="handleDrop"
      @click="triggerFileInput"
    >
      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        capture="environment"
        class="hidden"
        @change="handleFileChange"
      />

      <div v-if="!previewUrl" class="space-y-3">
        <div class="w-16 h-16 mx-auto bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
          <i class="fa-solid fa-camera text-2xl"></i>
        </div>
        <p class="font-medium text-emerald-900">Tire uma foto ou selecione do seu dispositivo</p>
        <p class="text-xs text-emerald-600">Formatos aceitos: JPG, PNG, WEBP</p>
      </div>

      <div v-else class="relative w-full">
        <img :src="previewUrl" alt="Preview" class="max-h-64 rounded-xl mx-auto object-contain shadow-md" />
        <button
          @click.stop="clearImage"
          class="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full p-1.5 shadow-md hover:bg-rose-600"
        >
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
  (e: 'select', file: File): void;
  (e: 'clear'): void;
}>();

const fileInput = ref<HTMLInputElement | null>(null);
const previewUrl = ref<string | null>(null);

function triggerFileInput() {
  fileInput.value?.click();
}

function handleFileChange(event: Event) {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    processFile(target.files[0]);
  }
}

function handleDrop(event: DragEvent) {
  if (event.dataTransfer?.files && event.dataTransfer.files[0]) {
    processFile(event.dataTransfer.files[0]);
  }
}

function processFile(file: File) {
  previewUrl.value = URL.createObjectURL(file);
  emit('select', file);
}

function clearImage() {
  previewUrl.value = null;
  if (fileInput.value) fileInput.value.value = '';
  emit('clear');
}
</script>