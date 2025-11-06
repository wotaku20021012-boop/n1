<template>
  <section class="chat-panel" aria-label="チャット">
    <div class="chat-window">
      <div v-for="(m, i) in messages" :key="i" :class="['msg', m.from]">
        <div class="msg-text">{{ m.text }}</div>
      </div>
    </div>

    <form @submit.prevent="send" class="chat-input">
      <input v-model="input" type="text" placeholder="メッセージを入力" aria-label="メッセージ入力" />
      <button type="submit" class="btn primary">送信</button>
    </form>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const messages = ref([
  { from: 'bot', text: 'こんにちは！何をお探しですか？' }
])
const input = ref('')


function send() {
  if (!input.value.trim()) return
  messages.value.push({ from: 'user', text: input.value.trim() })
  const userText = input.value.trim()
  input.value = ''
  setTimeout(() => {
    messages.value.push({ from: 'bot', text: `「${userText}」について提案しますね。少々お待ちください。` })
  }, 500)
}
</script>

<style scoped>
.chat-panel { border: 1px solid #e6eef8; padding: 0.75rem; border-radius: 8px; background: #fff; }
.chat-window { max-height: 240px; overflow-y: auto; padding: 0.5rem; }
.msg { margin-bottom: 0.5rem; }
.msg.bot .msg-text { background: #eef6fb; color: #0a477a; padding: 0.5rem; border-radius: 6px; display: inline-block; }
.msg.user .msg-text { background: #0ea5e9; color: #fff; padding: 0.5rem; border-radius: 6px; display: inline-block; margin-left: 40%; }
.chat-input { display: flex; gap: 0.5rem; margin-top: 0.5rem; }
.chat-input input { flex: 1; padding: 0.5rem; border: 1px solid #dbe7f5; border-radius: 6px; }
</style>