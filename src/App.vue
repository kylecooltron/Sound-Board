<template>
  <div class="app">
    <header class="app-header">
      <SearchBar v-model="query" />
    </header>

    <main class="card-grid">
      <SoundCard
        v-for="entry in filtered"
        :key="entry.id"
        :entry="entry"
      />
      <p v-if="filtered.length === 0" class="no-results">No results for "{{ query }}"</p>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SearchBar from './components/SearchBar.vue'
import SoundCard from './components/SoundCard.vue'
import { soundboardData } from './data/soundboard.js'

const query = ref('')

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return soundboardData
  return soundboardData.filter(entry => {
    const titleMatch = entry.title.toLowerCase().includes(q)
    const tagMatch = entry.tags.some(t => t.toLowerCase().includes(q))
    return titleMatch || tagMatch
  })
})
</script>

<style>
/* Reset & base */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  min-height: 100dvh;
  background: #0d0d1a;
  font-family: 'Segoe UI', system-ui, sans-serif;
  color: #fff;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 30%, rgba(80, 30, 180, 0.25) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 70%, rgba(30, 80, 180, 0.2) 0%, transparent 55%);
  pointer-events: none;
  z-index: 0;
}
</style>

<style scoped>
.app {
  position: relative;
  z-index: 1;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 20px 48px;
}

.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 12px;
}

.app-title {
  font-size: clamp(2rem, 7vw, 4rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #ffe84d 0%, #ff9a00 60%, #ff4e50 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 0 20px rgba(255, 180, 0, 0.4));
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.no-results {
  grid-column: 1 / -1;
  text-align: center;
  color: rgba(255,255,255,0.4);
  font-size: 1.1rem;
  padding: 48px 0;
}

@media (max-width: 480px) {
  .card-grid {
    grid-template-columns: 1fr;
  }
  .app {
    padding: 16px 12px 48px;
  }
}
</style>
