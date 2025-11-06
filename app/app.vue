<template>
  <main class="page">
    <header class="hero">
      <div class="container">
        <h1 class="title">パーソナルビューティアプリ</h1>
        <p class="subtitle">ユーザー一人一人に寄り添った商品を提案します✨</p>
        <div class="hero-cta">
          <button @click="mode = mode === 'chat' ? 'form' : 'chat'" class="btn">
         {{ mode === 'chat' ? 'フォームで入力する' : 'チャットに戻る' }}
          </button>

        </div>
      </div>
    </header>
    
    
  <section class="container" aria-label="対話エリア" style="margin-top:1.25rem;">
  <h2 class="section-title">相談する</h2>

  <transition name="fade" mode="out-in">
    <component :is="mode === 'chat' ? ChatPanel : ChatForm" @submit="onFormSubmit" />
  </transition>
</section>

    <section class="container features" aria-labelledby="features-heading">
      <h2 id="features-heading" class="section-title">特徴</h2>
      <div class="grid">
        <article class="card">
          <h3>寄り添った商品を提案</h3>
          <p>肌の色や髪の色に合わせて商品を提案</p>
        </article>
        <article class="card">
          <h3>適したメイクをご紹介</h3>
          <p>TPOごとに合ったメイク方法を提案
          </p>
        </article>
        <article class="card">
          <h3>好きが似合うメイクを</h3>
          <p>似合う色や形だけではなく好きなものをに合わせるメイクを提案</p>
        </article>
      </div>
    </section>

    <section class="container quick-links" aria-labelledby="links-heading">
      <h2 id="links-heading" class="section-title">すぐに始める</h2>
      <ul class="links">
        <li><NuxtLink to="/">ホーム</NuxtLink></li>
        <li><NuxtLink to="/about">アバウト</NuxtLink></li>
        <li><NuxtLink to="/contact">問い合わせ</NuxtLink></li>
      </ul>
    </section>

    <footer class="site-footer">
    </footer>
  </main>
</template>


<script setup lang="ts">
import ChatPanel from '../components/ChatPanel.vue'
import ChatForm from '../components/ChatForm.vue'


const mode = ref<'chat' | 'form'>('chat')
const year = new Date().getFullYear()

function onFormSubmit(payload: { problem: string; preference: string }) {
mode.value = 'chat'
  console.log('フォーム送信:', payload)
}

</script>

<style scoped>
/* 基本レイアウト */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* ヒーロー */
.hero {
  padding: 4rem 0;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  text-align: center;
}
.title {
  font-size: 2.25rem;
  margin: 0 0 0.5rem;
}
.subtitle {
  margin: 0 0 1.25rem;
  color: #475569;
}
.hero-cta .btn {
  margin: 0 0.5rem;
}

/* カードグリッド */
.features {
  padding: 2.5rem 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}
.card {
  padding: 1.25rem;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(2,6,23,0.05);
}

/* クイックリンク */
.quick-links {
  padding: 1.5rem 0;
  border-top: 1px solid #eef2f7;
}
.links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0.5rem 0 0;
}

/* フッター */
.site-footer {
  padding: 1.25rem 0;
  border-top: 1px solid #eef2f7;
  text-align: center;
}
.muted {
  color: #64748b;
  margin: 0;
}

/* ボタン簡易スタイル */
.btn {
  display: inline-block;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  color: #0f172a;
  background: #e6eef8;
  border: 1px solid rgba(15,23,42,0.06);
}
.btn.primary {
  background: #0ea5e9;
  color: #fff;
  border: none;
}
.btn.secondary {
  background: transparent;
  color: #0ea5e9;
  border: 1px solid #0ea5e9;
}

/* レスポンシブ微調整 */
@media (max-width: 640px) {
  .title { font-size: 1.5rem; }
  .hero { padding: 2.5rem 0; }
}
</style>