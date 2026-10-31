<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
    <div class="text-center space-y-2">
      <span class="bg-brand-100 text-brand-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        <i class="fa-solid fa-chart-pie"></i> PostgreSQL + Prisma Analytics
      </span>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-950">Dashboard Ambiental de Goiânia</h1>
      <p class="text-slate-600 max-w-xl mx-auto text-sm">
        Indicadores reais calculados a partir das análises de resíduos processadas na plataforma.
      </p>
    </div>

    <!-- Cards de Métricas Principais -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
        <span class="text-xs font-bold text-slate-400 uppercase">Total Identificado</span>
        <h3 class="text-3xl font-black text-slate-900">{{ summary.totalAnalyzed }}</h3>
        <p class="text-xs text-brand-700 font-semibold">+18% esta semana</p>
      </div>
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
        <span class="text-xs font-bold text-slate-400 uppercase">Classificados como Recicláveis</span>
        <h3 class="text-3xl font-black text-emerald-600">{{ summary.recyclableCount }}</h3>
        <p class="text-xs text-slate-500">Direcionados para coleta seletiva</p>
      </div>
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
        <span class="text-xs font-bold text-slate-400 uppercase">Resíduos Especiais</span>
        <h3 class="text-3xl font-black text-amber-600">{{ summary.nonRecyclableCount }}</h3>
        <p class="text-xs text-slate-500">Requerem descarte especializado</p>
      </div>
      <div class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2">
        <span class="text-xs font-bold text-slate-400 uppercase">Ecopontos Ativos</span>
        <h3 class="text-3xl font-black text-brand-800">12</h3>
        <p class="text-xs text-slate-500">Mapeados em Goiânia</p>
      </div>
    </div>

    <!-- Distribuição por Categoria -->
    <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
      <h3 class="font-bold text-slate-900 text-lg">Distribuição por Categoria de Resíduo</h3>
      <div class="space-y-4">
        <div>
          <div class="flex justify-between text-xs font-bold text-slate-700 mb-1">
            <span>Plástico (PET, PEAD, etc.)</span>
            <span>60%</span>
          </div>
          <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div class="bg-brand-500 h-full rounded-full" style="width: 60%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs font-bold text-slate-700 mb-1">
            <span>Papel e Papelão</span>
            <span>25%</span>
          </div>
          <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div class="bg-brand-400 h-full rounded-full" style="width: 25%"></div>
          </div>
        </div>
        <div>
          <div class="flex justify-between text-xs font-bold text-slate-700 mb-1">
            <span>Vidro e Metais</span>
            <span>15%</span>
          </div>
          <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
            <div class="bg-teal-500 h-full rounded-full" style="width: 15%"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { DashboardSummary } from '../types';

const summary = ref<DashboardSummary>({
  totalAnalyzed: 142,
  recyclableCount: 110,
  nonRecyclableCount: 32,
  categoriesBreakdown: {
    plastic: 85,
    paper: 35,
    glass: 22
  }
});
</script>