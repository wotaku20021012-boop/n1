<template>
  <section>
    <h2>ようこそ — N1SRC</h2>
    <p>ここはプロジェクトの最初のページです。下のボタンでページA / ページB に移動できます。</p>

    <div class="buttons">
      <NuxtLink to="/page-a" class="btn">ページ A を開く</NuxtLink>
      <NuxtLink to="/page-b" class="btn">ページ B を開く</NuxtLink>
    </div>
  </section>
</template>

<script lang="ts" setup>
// ここに必要なら composition API のロジックを追加
</script>

<style scoped>
h2 { margin-bottom:0.5rem; }
.buttons { display:flex; gap:1rem; margin-top:1.5rem; }
.btn {
  display:inline-block; padding:0.6rem 1rem; background:#2563eb; color:white; border-radius:6px;
  text-decoration:none;
}
.btn:hover { background:#1e40af; }
</style>
