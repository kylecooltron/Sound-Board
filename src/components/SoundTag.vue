<template>
  <span class="sound-tag">{{ label }}</span>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<style scoped>
.sound-tag {
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  border: 2px solid rgba(255, 220, 50, 0.7);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.55);
  color: #ffe84d;
  font-family: inherit;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  user-select: none;
}
</style>
