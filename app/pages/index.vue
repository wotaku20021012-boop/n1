<template>
  <div class="container">
    <h1 class="title">メニュー</h1>

    <div class="menu">
      <NuxtLink to="/chat" class="btn">チャットへ移動</NuxtLink>
      <NuxtLink to="/form" class="btn">フォーム入力へ移動</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;
  background: #f5f5f5;
}

.title {
  font-size: 28px;
  font-weight: bold;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.btn {
  padding: 12px 24px;
  background: #4c7fff;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  transition: 0.2s;
}

.btn:hover {
  background: #2f63d8;
}
</style>
