<template>
  <div class="container" @wheel="skip" @touchmove="skip">
    <!-- タイトル画面 -->
    <transition name="fade">
      <div v-if="phase === 'title'" class="title-screen">
        <h1 class="title">Personal Beauty</h1>
      </div>
    </transition>

    <!-- メニュー画面 -->
    <transition name="fade">
      <div v-if="phase === 'menu'" class="menu-screen">
        <h2 class="menu-title">メニュー</h2>
        <NuxtLink to="/chat" class="btn">チャットへ</NuxtLink>
        <NuxtLink to="/form" class="btn">フォームへ</NuxtLink>
      </div>
    </transition>
  </div>
</template>


<script setup>
import { ref, onMounted } from "vue";

const phase = ref("title");

const goMenu = () => {
  if (phase.value !== "menu") {
    phase.value = "menu";
  }
};

// ⏱ 一定時間で自動遷移
onMounted(() => {
  setTimeout(goMenu, 2000);
});

// 🖱 スクロール・スワイプで即スキップ
const skip = () => {
  goMenu();
};
</script>



<style scoped>
.container {
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

/* --- タイトル画面 --- */
.title-screen {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
}

.title {
  font-size: 56px;
  color: white;
  letter-spacing: 2px;
}

/* --- メニュー画面 --- */
.menu-screen {
  height: 100vh;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.menu-title {
  font-size: 28px;
}

/* ボタン */
.btn {
  padding: 12px 28px;
  background: #4c7fff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-size: 18px;
  transition: 0.2s;
}

.btn:hover {
  background: #2f63d8;
}

/* --- フェードアニメーション --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
