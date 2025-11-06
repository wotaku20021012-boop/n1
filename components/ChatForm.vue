<template>
  <section class="chat-form" aria-label="相談フォーム">
    <form @submit.prevent="onSubmit">
      <div class="field">
        <label>お悩み</label>
        <input v-model="values.problem" placeholder="例：乾燥が気になる" />
      </div>
      <div class="field">
        <label>好み（色や質感）</label>
        <input v-model="values.preference" placeholder="例：ツヤ感が好き" />
      </div>
      <div class="actions">
        <button type="submit" class="btn primary">送信して提案を受ける</button>
      </div>
    </form>
  </section>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const emit = defineEmits<{
  (e: 'submit', payload: { problem: string; preference: string }): void
}>()

const values = reactive({ problem: '', preference: '' })

function onSubmit() {
  emit('submit', { problem: values.problem, preference: values.preference })
  values.problem = ''
  values.preference = ''
}
</script>

<style scoped>
.field { margin-bottom: 0.75rem; }
.field label { display: block; font-size: 0.9rem; margin-bottom: 0.25rem; color: #374151; }
.field input { width: 100%; padding: 0.5rem; border: 1px solid #e6eef8; border-radius: 6px; }
.actions { margin-top: 0.5rem; }
</style>