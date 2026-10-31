<template>
  <div class="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden h-[500px] relative">
    <div id="ecopontos-map" class="w-full h-full z-10"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import type { CollectionPoint } from '../../types';

const props = defineProps<{
  points: CollectionPoint[];
}>();

let map: any = null;
let markersLayer: any = null;

onMounted(() => {
  // @ts-ignore
  if (window.L) {
    // @ts-ignore
    map = L.map('ecopontos-map').setView([-16.6869, -49.2648], 13);
    // @ts-ignore
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    updateMarkers();
  }
});

function updateMarkers() {
  if (!map) return;
  // @ts-ignore
  if (markersLayer) {
    markersLayer.clearLayers();
  }
  // @ts-ignore
  markersLayer = L.layerGroup().addTo(map);

  props.points.forEach(p => {
    // @ts-ignore
    const marker = L.marker([p.latitude, p.longitude])
      .bindPopup(`<b>${p.name}</b><br>${p.address}`);
    markersLayer.addLayer(marker);
  });
}

watch(() => props.points, () => {
  updateMarkers();
}, { deep: true });
</script>