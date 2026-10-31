<template>
  <span
    :class="[
      type === 'recyclable' ? 'bg-emerald-100 text-emerald-800 border-emerald-300' : 'bg-amber-100 text-amber-800 border-amber-300',
      'px-3 py-1 rounded-full text-xs font-bold border inline-flex items-center gap-1.5'
    ]"
  >
    <i :class="type === 'recyclable' ? 'fa-solid fa-circle-check text-emerald-600' : 'fa-solid fa-triangle-exclamation text-amber-600'"></i>
    <slot>{{ type === 'recyclable' ? 'Reciclável' : 'Resíduo Especial' }}</slot>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  type: 'recyclable' | 'special';
}>();
</script>