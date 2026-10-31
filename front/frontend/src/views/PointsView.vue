<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
    <div class="text-center space-y-2">
      <span class="bg-brand-100 text-brand-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
        <i class="fa-solid fa-map-pin"></i> OpenStreetMap + Leaflet
      </span>
      <h1 class="text-3xl sm:text-4xl font-extrabold text-slate-950">Pontos de Coleta & Ecopontos em Goiânia</h1>
      <p class="text-slate-600 max-w-xl mx-auto text-sm">
        Localize ecopontos oficiais da Prefeitura e cooperativas de reciclagem ativas na capital.
      </p>
    </div>

    <!-- Filtros por Categoria -->
    <div class="flex flex-wrap items-center justify-center gap-2">
      <button
        v-for="cat in pointCategories"
        :key="cat.key"
        @click="selectedCategory = cat.key"
        :class="selectedCategory === cat.key ? 'bg-brand-900 text-white font-bold shadow-md' : 'bg-white text-slate-700 hover:bg-slate-100 font-medium border border-slate-200'"
        class="px-4 py-2 rounded-xl text-xs transition-all flex items-center gap-2"
      >
        <i :class="cat.icon" class="fa-solid"></i>
        <span>{{ cat.label }}</span>
      </button>
    </div>

    <!-- Grid Mapa + Lista -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Mapa Leaflet -->
      <div class="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden h-[500px] relative">
        <div id="ecopontos-map" class="w-full h-full z-10"></div>
      </div>

      <!-- Lista de Pontos -->
      <div class="lg:col-span-5 bg-white rounded-3xl border border-slate-200 shadow-xl p-6 flex flex-col h-[500px]">
        <div class="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
          <h3 class="font-bold text-slate-900 text-base">Locais em Goiânia</h3>
          <span class="text-xs bg-brand-100 text-brand-900 font-extrabold px-2.5 py-0.5 rounded-full">
            {{ filteredPoints.length }} encontrados
          </span>
        </div>
        <div class="space-y-3 overflow-y-auto custom-scrollbar flex-grow pr-1">
          <div
            v-for="point in filteredPoints"
            :key="point.id"
            class="p-4 rounded-2xl bg-slate-50 hover:bg-brand-50/60 border border-slate-200/80 hover:border-brand-300 transition-all cursor-pointer space-y-2"
          >
            <div class="flex justify-between items-start">
              <h4 class="font-bold text-slate-900 text-sm">{{ point.name }}</h4>
              <span class="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">Verificado</span>
            </div>
            <p class="text-xs text-slate-600 flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-brand-600"></i> {{ point.address }}
            </p>
            <div class="flex flex-wrap gap-1 pt-1">
              <span v-for="cat in point.acceptedCategories" :key="cat" class="text-[10px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-medium uppercase">
                {{ cat }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import type { CollectionPoint } from '../types';

const selectedCategory = ref<string>('all');

const pointCategories = [
  { key: 'all', label: 'Todos os Materiais', icon: 'fa-layer-group' },
  { key: 'plastic', label: 'Plástico', icon: 'fa-bottle-water' },
  { key: 'paper', label: 'Papel', icon: 'fa-newspaper' },
  { key: 'glass', label: 'Vidro', icon: 'fa-wine-bottle' },
  { key: 'metal', label: 'Metal', icon: 'fa-can-food' },
  { key: 'electronics', label: 'Eletrônicos', icon: 'fa-laptop' },
];

const points = ref<CollectionPoint[]>([
  {
    id: '1',
    name: 'Ecoponto Setor Bueno',
    address: 'Rua T-36, Setor Bueno, Goiânia - GO',
    latitude: -16.7022,
    longitude: -49.2798,
    acceptedCategories: ['plastic', 'paper', 'glass', 'metal'],
    verified: true,
  },
  {
    id: '2',
    name: 'Ecoponto Parque Amazônia',
    address: 'Praça das Laranjeiras, Parque Amazônia, Goiânia - GO',
    latitude: -16.7325,
    longitude: -49.2612,
    acceptedCategories: ['plastic', 'paper', 'electronics'],
    verified: true,
  },
  {
    id: '3',
    name: 'Cooperativa Recicla Goiânia',
    address: 'Av. Contorno, Centro, Goiânia - GO',
    latitude: -16.6789,
    longitude: -49.2534,
    acceptedCategories: ['plastic', 'metal', 'paper'],
    verified: true,
  }
]);

const filteredPoints = computed(() => {
  if (selectedCategory.value === 'all') return points.value;
  return points.value.filter(p => p.acceptedCategories.includes(selectedCategory.value));
});

onMounted(() => {
  // Inicialização do Leaflet centralizada em Goiânia
  // @ts-ignore
  if (window.L) {
    // @ts-ignore
    const map = L.map('ecopontos-map').setView([-16.6869, -49.2648], 13);
    // @ts-ignore
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    points.value.forEach(p => {
      // @ts-ignore
      L.marker([p.latitude, p.longitude]).addTo(map)
        .bindPopup(`<b>${p.name}</b><br>${p.address}`);
    });
  }
});
</script>