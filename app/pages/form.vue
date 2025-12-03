<template>
  <div class="form-page">

    <h2 class="title">フォーム入力</h2>

    <!-- ▼ ChatForm コンポーネントを使用 -->
    <ChatForm @submit="handleSubmit" />

    <!-- ▼ ホームに戻るボタン -->
    <div class="back-area">
      <NuxtLink to="/" class="back-btn">🏠 ホームに戻る</NuxtLink>
    </div>

    <!-- ▼ 結果表示 -->
    <div v-if="result" class="result-box">
      <p>あなたにおすすめの商品は「{{ result }}」です！ 🎉</p>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const result = ref<string | null>(null);

function handleSubmit(data: { problem: string; preference: string }) {
  console.log("フォーム送信:", data);

  if (data.problem.includes("乾燥")) {
    result.value = "高保湿クリーム";
  } else if (data.preference.includes("ツヤ")) {
    result.value = "ツヤ系ファンデーション";
  } else {
    result.value = "ベーシックケアセット";
  }
}
</script>

<style scoped>
.form-page {
  max-width: 500px;
  margin: 40px auto;
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 24px;
}

.back-area {
  margin-top: 40px;
  text-align: center;
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

.result-box {
  margin-top: 30px;
  padding: 16px;
  background: #f9fbfc;
  border-radius: 8px;
  border: 1px solid #e4e4e4;
  text-align: center;
}
</style>
