<template>
  <div class="min-h-screen flex flex-col justify-between bg-slate-50 text-slate-800">
    <!-- Top Banner Hackathon -->
    <div class="bg-brand-950 text-brand-100 text-xs py-2 px-4 text-center font-medium flex items-center justify-center gap-2 border-b border-brand-900">
      <span class="inline-block w-2 h-2 rounded-full bg-brand-400 animate-pulse"></span>
      <span>VIRA GYN — Hackathon Goiânia Sustentável</span>
      <span class="hidden md:inline text-brand-400 font-semibold">| Powered by Gemma 4 Multimodal AI & NestJS</span>
    </div>

    <!-- Navigation Header -->
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/85 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <!-- Brand Logo -->
        <router-link to="/" class="flex items-center gap-3 group">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-lg shadow-brand-500/25 group-hover:scale-105 transition-transform">
            <i class="fa-solid fa-recycle text-xl"></i>
          </div>
          <div>
            <div class="flex items-center gap-1.5">
              <span class="text-2xl font-black tracking-tight text-slate-900">VIRA</span>
              <span class="text-2xl font-black tracking-tight text-brand-600">GYN</span>
            </div>
            <p class="text-[11px] text-slate-500 font-semibold tracking-wide uppercase hidden sm:block">Goiânia Circular</p>
          </div>
        </router-link>

        <!-- Navigation Menu -->
        <nav class="hidden md:flex items-center gap-1 bg-slate-100/80 p-1.5 rounded-2xl border border-slate-200/70">
          <router-link to="/" class="px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2" exact-active-class="bg-white text-brand-950 shadow-sm font-bold">
            <i class="fa-solid fa-house text-xs"></i>
            <span>Início</span>
          </router-link>
          <router-link to="/identify" class="px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2" exact-active-class="bg-white text-brand-950 shadow-sm font-bold">
            <i class="fa-solid fa-camera text-xs"></i>
            <span>Identificar Resíduo</span>
          </router-link>
          <router-link to="/points" class="px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2" exact-active-class="bg-white text-brand-950 shadow-sm font-bold">
            <i class="fa-solid fa-map-location-dot text-xs"></i>
            <span>Pontos de Coleta</span>
          </router-link>
          <router-link to="/dashboard" class="px-4 py-2 rounded-xl text-sm transition-all flex items-center gap-2" exact-active-class="bg-white text-brand-950 shadow-sm font-bold">
            <i class="fa-solid fa-chart-pie text-xs"></i>
            <span>Dashboard</span>
          </router-link>
        </nav>

        <!-- CTA Action -->
        <div class="flex items-center gap-3">
          <router-link to="/identify" class="bg-brand-600 hover:bg-brand-700 text-white font-semibold px-5 py-2.5 rounded-2xl shadow-lg shadow-brand-600/20 transition-all transform active:scale-95 flex items-center gap-2 text-sm">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
            <span class="hidden sm:inline">Escanear Foto</span>
            <span class="sm:hidden">Escanear</span>
          </router-link>
        </div>
      </div>
    </header>

    <!-- Main View Dynamic Container -->
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="tab-transition" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <footer class="bg-white border-t border-slate-200 py-8 mt-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 rounded-xl bg-brand-600 text-white flex items-center justify-center text-xs">
            <i class="fa-solid fa-recycle"></i>
          </div>
          <span class="font-bold text-slate-900">VIRA GYN</span>
          <span class="text-slate-400 text-xs">• Goiânia, Goiás, Brasil</span>
        </div>
        <p class="text-xs text-slate-500">
          Desenvolvido com NestJS, Vue.js, PostgreSQL e Gemma 4 para o Hackathon Sustentável.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Layout principal limpo utilizando Vue Router
</script>