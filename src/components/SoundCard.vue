<template>
  <div class="sound-card" :style="bgStyle" @click.self="play">
    <div class="card-overlay" @click="play" />
    <div class="card-body">
      <h2 class="card-title" @click="play">{{ entry.title }}</h2>
      <div class="card-tags">
        <SoundTag v-for="tag in entry.tags" :key="tag" :label="tag" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import SoundTag from './SoundTag.vue'

const props = defineProps({
  entry: { type: Object, required: true },
})

const bgStyle = computed(() => ({
  backgroundImage: props.entry.image ? `url(${import.meta.env.BASE_URL}${props.entry.image})` : 'none',
}))

let audio = null
const isPlaying = ref(false)

function play() {
  if (audio) {
    audio.pause()
    audio.currentTime = 0
  }
  audio = new Audio(`${import.meta.env.BASE_URL}${props.entry.sound}`)
  isPlaying.value = true
  audio.play()
  audio.addEventListener('ended', () => { isPlaying.value = false })
}
</script>

<style scoped>
.sound-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: #1a1a2e;
  background-size: cover;
  background-position: center top;
  min-height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.6), 0 0 0 2px rgba(255, 220, 50, 0.2);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
}
.sound-card:hover {
  transform: translateY(-4px) scale(1.01);
  box-shadow: 0 8px 36px rgba(0, 0, 0, 0.75), 0 0 0 2px rgba(255, 220, 50, 0.6);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.05) 0%,
    rgba(0, 0, 0, 0.35) 55%,
    rgba(0, 0, 0, 0.85) 100%
  );
}

.card-body {
  position: relative;
  z-index: 1;
  padding: 16px;
  display: flex;
  align-items: flex-end;
  gap: 12px;
}

.card-title {
  flex: 1;
  margin: 0;
  font-size: clamp(1.4rem, 4vw, 2rem);
  font-weight: 900;
  color: #ffffff;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(255, 220, 50, 0.3);
  line-height: 1.1;
  letter-spacing: -0.01em;
}

.card-tags {
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
  flex-shrink: 0;
  max-width: 45%;
}
</style>
