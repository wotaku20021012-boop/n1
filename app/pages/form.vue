<template>
  <div class="form-panel">
    <h2>相談する（フォーム形式）</h2>

    <form @submit.prevent="submitForm">
      <label>お悩み：</label>
      <input v-model="problem" placeholder="乾燥 / ニキビ など" />

      <label>好みの仕上がり：</label>
      <input v-model="preference" placeholder="ツヤ / マット など" />

      <label>希望の価格帯：</label>
      <input v-model="preference" placeholder="3,000円以内など" />

      <label>好みの仕上がり：</label>
      <input v-model="preference" placeholder="ツヤ / マット など" />

      <button type="submit">送信</button>
    </form>

    <div v-if="result">
      <h3>おすすめ商品</h3>

      <div v-if="Array.isArray(result)">
        <ul>
          <li v-for="item in result" :key="item.id">
            <img :src="item.imageUrl" alt="" />
            {{ item.name }}（{{ item.price }}円）
          </li>
        </ul>
      </div>

      <p v-else>{{ result }}</p>
    </div>
  </div>
       <NuxtLink
  to="/"
  class="home-button"
>
  ホームへ戻る
</NuxtLink>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";

const API = "http://localhost:5215/api/form/submit";

const problem = ref("");
const preference = ref("");
const result = ref(null);

async function submitForm() {
  const res = await axios.post(API, {
    problem: problem.value,
    preference: preference.value,
  });

  result.value = res.data.result;
}
</script>

<style scoped>
.back-btn {
  margin-bottom: 12px;
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
