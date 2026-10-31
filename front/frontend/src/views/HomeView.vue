<template>
  <div class="space-y-16 pb-16">
    <!-- Hero Banner -->
    <div class="relative overflow-hidden bg-gradient-to-b from-brand-50/70 via-white to-slate-50 border-b border-slate-200/60 py-16 md:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6">
          <span class="inline-flex items-center gap-2 bg-brand-100 text-brand-900 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider border border-brand-200">
            <i class="fa-solid fa-leaf text-brand-600"></i> Sustentabilidade & Tecnologia em Goiânia
          </span>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
            A cidade que transforma resíduos em <span class="text-brand-600 underline decoration-brand-300 decoration-wavy">oportunidades</span>.
          </h1>
          <p class="text-lg text-slate-600 leading-relaxed font-normal">
            O <strong>VIRA GYN</strong> conecta a população aos pontos de reciclagem da capital goiana. Tire uma foto do seu resíduo para receber instruções de preparo e o ecoponto ideal em segundos através de Inteligência Artificial.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <router-link to="/identify" class="bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-8 rounded-2xl shadow-xl shadow-brand-600/30 transition-all flex items-center justify-center gap-3 text-base group">
              <span>Identificar meu resíduo agora</span>
              <i class="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </router-link>
            <router-link to="/points" class="bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 font-bold py-4 px-8 rounded-2xl shadow-sm transition-all flex items-center justify-center gap-2 text-base">
              <i class="fa-solid fa-location-dot text-brand-600"></i>
              <span>Ver Ecopontos em Goiânia</span>
            </router-link>
          </div>
        </div>

        <!-- Hero Card Demonstrativo -->
        <div class="lg:col-span-5 relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-brand-400 to-teal-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
          <div class="relative bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xl space-y-6">
            <div class="flex items-center justify-between border-b border-slate-100 pb-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-brand-100 flex items-center justify-center text-brand-700 font-bold">
                  <i class="fa-solid fa-brain"></i>
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 text-sm">Gemma 4 Multimodal</h3>
                  <p class="text-xs text-slate-500">Classificação via visão computacional</p>
                </div>
              </div>
              <span class="bg-emerald-100 text-emerald-800 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span> Ativo
              </span>
            </div>
            <div class="bg-slate-50 rounded-2xl p-4 border border-slate-100 flex items-center gap-4">
              <div class="w-16 h-16 bg-white shadow-sm rounded-xl flex items-center justify-center text-3xl shrink-0 border border-slate-200">
                🥤
              </div>
              <div>
                <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Exemplo de Resíduo</span>
                <h4 class="font-bold text-slate-900 text-base">Garrafa PET Transparente</h4>
                <p class="text-xs text-brand-700 font-semibold mt-0.5">Reciclável • Coleta Seletiva / Ecoponto</p>
              </div>
            </div>
            <div class="space-y-3 text-xs">
              <div class="flex justify-between font-semibold">
                <span class="text-slate-600">Material Predominante:</span>
                <span class="text-slate-900 font-bold">Plástico PET (Cód. 1)</span>
              </div>
              <div class="flex justify-between font-semibold">
                <span class="text-slate-600">Destinação Recomendada:</span>
                <span class="text-slate-900 font-bold">Ecoponto Setor Bueno</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Cards de Contexto e Problema -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div class="text-center max-w-3xl mx-auto space-y-3">
        <h2 class="text-3xl font-extrabold text-slate-950">Por que o VIRA GYN é essencial?</h2>
        <p class="text-slate-600">Transformando desafios ambientais urbanos em soluções tecnológicas acessíveis para todos os cidadãos goianienses.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-xl font-bold">
            <i class="fa-solid fa-triangle-exclamation"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-900">Descarte Incorreto</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Falta de informação sobre reciclabilidade leva materiais nobres para aterros e contamina lotes de resíduos recicláveis.
          </p>
        </div>
        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-bold">
            <i class="fa-solid fa-map-pin"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-900">Dificuldade de Localização</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Munícipes não sabem onde encontrar os Ecopontos da Prefeitura de Goiânia ou cooperativas especializadas para cada material.
          </p>
        </div>
        <div class="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
          <div class="w-12 h-12 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center text-xl font-bold">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <h3 class="text-xl font-bold text-slate-900">Solução Inteligente</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Análise instantânea com Gemma 4 orienta a lavagem, amassamento e separação do lixo, direcionando ao ecoponto exato.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Home page estática focada na proposta de valor e conversão para o identificador
</script>