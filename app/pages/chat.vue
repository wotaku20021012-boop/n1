<template>
  <div class="chat-panel">
    <h2>相談する（チャット形式）</h2>

    <!-- 質問 -->
    <div v-if="question">
      <p>{{ question.text }}</p>

      <div class="choices">
        <button v-for="opt in options" :key="opt.id" @click="choose(opt)">
          {{ opt.text }}
        </button>
      </div>
    </div>

    <!-- 結果 -->
    <div v-else-if="result.length > 0">
      <h3>おすすめ商品</h3>
      <ul>
        <li v-for="item in result" :key="item.id">
          <img :src="item.imageUrl" alt="" width="200px" height="150px" />
          <strong>{{ item.brand }}</strong><br />
          {{ item.name }}（{{ item.price }}円）
        </li>
      </ul>
      <button @click="reset">もう一度</button>
    </div>
  </div>
      <!-- 戻るボタン -->
    <NuxtLink
  to="/"
  class="home-button"
>
  ホームへ戻る
</NuxtLink>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const question = ref(null);
const options = ref([]);
const result = ref([]);

const API = "http://localhost:5215/api/chat"; 

onMounted(() => loadQuestion(1));

async function loadQuestion(id) {
  const res = await axios.get(`${API}/question/${id}`);
  question.value = res.data.question;
  options.value = res.data.options;
}

async function choose(opt) {
  const res = await axios.get(
    `${API}/next?questionId=${question.value.id}&optionId=${opt.id}`
  );

  if (res.data.nextQuestionId) {
    loadQuestion(res.data.nextQuestionId);
  } else {
    result.value = res.data.result;
    question.value = null;
  }
}

function reset() {
  result.value = [];
  loadQuestion(1);
}
</script>

<style scoped>
.back-btn {
  padding: 6px 12px;
  margin-bottom: 12px;
  background: #ddd;
  border-radius: 6px;
}
.choices button {
  margin: 6px;
  padding: 8px 16px;
}

.home-button {
  display: inline-block;
  padding: 10px 18px;
  background: #4a90e2;
  color: white;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  text-decoration: none;
}

</style>
