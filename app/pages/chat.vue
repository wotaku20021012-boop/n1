<template>
  <div class="chat-panel">
    <h2>相談する</h2>

    <div class="question-box" v-if="currentQuestion">
      <p class="question">{{ currentQuestion.text }}</p>

      <div class="choices">
        <button
          v-for="(choice, index) in currentQuestion.choices"
          :key="index"
          @click="selectChoice(choice.next)"
        >
          {{ choice.label }}
        </button>
      </div>
    </div>

    <div v-else>
      <p>あなたにおすすめの商品は「{{ result }}」です！ 🎉</p>
      <button @click="reset">もう一度やる</button>
    </div>

    <!-- ▼ ここが追加した【ホームに戻るボタン】 -->
    <div class="back-area">
      <NuxtLink to="/" class="back-btn">🏠 ホームに戻る</NuxtLink>
    </div>
    <!-- ▲ ここまで追加 -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

// 質問データ
const questions = [
  {
    id: 0,
    text: "どんなジャンルの商品をお探しですか？",
    choices: [
      { label: "スキンケア", next: 1 },
      { label: "メイク", next: 2 },
    ],
  },
  {
    id: 1,
    text: "肌のタイプを教えてください",
    choices: [
      { label: "乾燥肌", next: "result1" },
      { label: "脂性肌", next: "result2" },
    ],
  },
  {
    id: 2,
    text: "どんな印象に見せたいですか？",
    choices: [
      { label: "ナチュラル", next: "result3" },
      { label: "華やか", next: "result4" },
    ],
  },
];

const results = {
  result1: "保湿クリーム",
  result2: "皮脂コントロールローション",
  result3: "ナチュラルメイクセット",
  result4: "グロッシーメイクセット",
};

const currentIndex = ref(0);
const result = ref(null);

const currentQuestion = computed(() =>
  typeof currentIndex.value === "number" ? questions[currentIndex.value] : null
);

function selectChoice(next) {
  if (typeof next === "string") {
    result.value = results[next];
    currentIndex.value = null;
  } else {
    currentIndex.value = next;
  }
}

function reset() {
  currentIndex.value = 0;
  result.value = null;
}
</script>

<style scoped>
.chat-panel {
  max-width: 500px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
.question-box {
  background: #f9fbfc;
  border-radius: 8px;
  padding: 16px;
}
.choices button {
  margin: 8px;
  padding: 8px 16px;
  background: #e6f0ff;
  border: 1px solid #b0c4de;
  border-radius: 6px;
  cursor: pointer;
}
.choices button:hover {
  background: #d0e4ff;
}

/* ▼ 追加したスタイル */
.back-area {
  margin-top: 40px;
}

.back-btn {
  display: inline-block;
  padding: 10px 20px;
  background: #eee;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
  border: 1px solid #ccc;
}

.back-btn:hover {
  background: #ddd;
}
</style>
