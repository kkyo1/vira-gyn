<template>
  <div class="bg-white rounded-3xl border border-brand-200 shadow-xl p-6 sm:p-8 space-y-6">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-slate-100 pb-6 gap-4">
      <div>
        <span class="text-[11px] font-black uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
          Categoria: {{ result.category }}
        </span>
        <h2 class="text-2xl font-black text-slate-900 mt-2">{{ result.material }}</h2>
      </div>
      <StatusBadge :type="result.recyclable ? 'recyclable' : 'special'" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Preparo para descarte -->
      <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
        <h4 class="font-bold text-slate-900 text-sm flex items-center gap-2">
          <i class="fa-solid fa-clipboard-check text-brand-600"></i> Preparo para Descarte
        </h4>
        <ul class="space-y-2 text-xs text-slate-600 list-disc list-inside">
          <li v-for="(step, idx) in result.preparation" :key="idx" class="leading-relaxed">
            {{ step }}
          </li>
        </ul>
      </div>

      <!-- Dica ambiental -->
      <div class="bg-brand-50/70 p-5 rounded-2xl border border-brand-200 space-y-3 flex flex-col justify-between">
        <div>
          <h4 class="font-bold text-brand-950 text-sm flex items-center gap-2">
            <i class="fa-solid fa-lightbulb text-brand-700"></i> Dica Ambiental
          </h4>
          <p class="text-xs text-brand-900 font-medium leading-relaxed mt-2">
            {{ result.environmentalTip }}
          </p>
        </div>
        <div class="pt-3 border-t border-brand-200/60 flex items-center justify-between text-xs">
          <span class="font-bold text-slate-500 uppercase text-[10px]">Ecoponto Indicado:</span>
          <span class="font-bold text-brand-900 bg-white px-2.5 py-1 rounded-md border border-brand-300">
            {{ result.destination }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { WasteAnalysisResult } from '../../types';
import StatusBadge from '../common/StatusBadge.vue';

defineProps<{
  result: WasteAnalysisResult;
}>();
</script>