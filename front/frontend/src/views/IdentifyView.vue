<template>
  <div class="max-w-4xl mx-auto px-4 py-8 space-y-8">
    <div class="text-center space-y-2">
      <h1 class="text-3xl font-extrabold text-emerald-950">Identificação Inteligente</h1>
      <p class="text-slate-600">Envie a foto do resíduo e a IA orientará como descartar corretamente em Goiânia.</p>
    </div>

    <!-- Seção de Uploader -->
    <ImageUploader @select="onImageSelected" @clear="onImageCleared" />

    <!-- Ação de Envio -->
    <div v-if="selectedFile && !loading && !result" class="text-center">
      <button
        @click="analyzeWaste"
        class="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform active:scale-95"
      >
        Analisar Resíduo com IA
      </button>
    </div>

    <!-- Estado de Loading -->
    <div v-if="loading" class="text-center py-8 space-y-4">
      <div class="inline-block animate-spin rounded-full h-12 w-12 border-4 border-emerald-500 border-t-transparent"></div>
      <p class="text-emerald-800 font-medium">Analisando imagem com o Gemma 4... Por favor, aguarde.</p>
    </div>

    <!-- Erro -->
    <div v-if="errorMessage" class="bg-rose-50 border border-rose-200 text-rose-700 p-4 rounded-xl text-center">
      {{ errorMessage }}
    </div>

    <!-- Resultado -->
    <div v-if="result" class="bg-white rounded-2xl p-6 shadow-xl border border-emerald-100 space-y-6">
      <div class="flex items-center justify-between border-b pb-4">
        <div>
          <span class="text-xs uppercase tracking-wider text-slate-400 font-bold">Material Detectado</span>
          <h2 class="text-2xl font-bold text-slate-800">{{ result.material }}</h2>
        </div>
        <span
          :class="result.recyclable ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'"
          class="px-4 py-1.5 rounded-full text-sm font-semibold"
        >
          {{ result.recyclable ? 'Reciclável' : 'Não Reciclável' }}
        </span>
      </div>

      <div class="space-y-3">
        <h3 class="font-semibold text-slate-700">Como preparar para descarte:</h3>
        <ul class="list-disc list-inside space-y-1 text-slate-600">
          <li v-for="(item, index) in result.preparation" :key="index">{{ item }}</li>
        </ul>
      </div>

      <div class="bg-emerald-50 p-4 rounded-xl space-y-1">
        <span class="text-xs font-bold text-emerald-700 uppercase">Dica Ambiental</span>
        <p class="text-emerald-900 text-sm">{{ result.environmentalTip }}</p>
      </div>

      <div class="pt-4 flex justify-between items-center">
        <router-link to="/points" class="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1">
          Ver pontos de coleta recomendados &rarr;
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ImageUploader from '../components/waste/ImageUploader.vue';
import { WasteService } from '../services/api';
import type { WasteAnalysisResult } from '../types';

const selectedFile = ref<File | null>(null);
const loading = ref(false);
const result = ref<WasteAnalysisResult | null>(null);
const errorMessage = ref<string | null>(null);

function onImageSelected(file: File) {
  selectedFile.value = file;
  result.value = null;
  errorMessage.value = null;
}

function onImageCleared() {
  selectedFile.value = null;
  result.value = null;
  errorMessage.value = null;
}

async function analyzeWaste() {
  if (!selectedFile.value) return;

  loading.value = true;
  errorMessage.value = null;

  try {
    result.value = await WasteService.analyzeImage(selectedFile.value);
  } catch (error: any) {
    errorMessage.value = error.response?.data?.message || 'Falha ao analisar a imagem. Tente novamente.';
  } finally {
    loading.value = false;
  }
}
</script>