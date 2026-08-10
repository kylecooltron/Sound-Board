<template>
  <div class="search-wrap">
    <span class="search-icon">🔍</span>
    <input
      class="search-input"
      type="search"
      placeholder="Search by title or tag…"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <button v-if="modelValue" class="clear-btn" @click="$emit('update:modelValue', '')">✕</button>
  </div>
</template>

<script setup>
defineProps({ modelValue: { type: String, default: '' } })
defineEmits(['update:modelValue'])
</script>

<style scoped>
.search-wrap {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 560px;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 16px;
  font-size: 1rem;
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 14px 48px 14px 44px;
  border: 2px solid rgba(255, 220, 50, 0.4);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 1rem;
  font-family: inherit;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  -webkit-appearance: none;
}
.search-input::placeholder { color: rgba(255,255,255,0.4); }
.search-input:focus {
  border-color: rgba(255, 220, 50, 0.9);
  box-shadow: 0 0 18px rgba(255, 220, 50, 0.3);
}

.clear-btn {
  position: absolute;
  right: 14px;
  background: none;
  border: none;
  color: rgba(255,255,255,0.5);
  font-size: 1rem;
  cursor: pointer;
  padding: 4px;
  line-height: 1;
}
.clear-btn:hover { color: #fff; }
</style>
