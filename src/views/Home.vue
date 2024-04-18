<template>
  <div class="background">
    <div class="home">
      <section class="hero">
        <h1>欢迎来到FoodSaver剩菜盲盒平台</h1>
        <p>探索美味，享受惊喜，共创可持续的美食未来。</p>
      </section>

      <section class="how-it-works">
        <h2>如何工作</h2>
        <p>店主上传剩菜信息，顾客预定美食盲盒，减少浪费的同时发现美味。</p>
      </section>

      <section class="features">
        <h2>平台特色</h2>
        <ul>
          <li>有效减少食物浪费</li>
          <li>发现价值优惠的美味</li>
          <li>支持本地餐馆和小吃店</li>
        </ul>
      </section>

      <section class="get-started">
        <h2>立即加入我们</h2>
        <el-button type="primary" @click="gotoAuth">点击注册账号</el-button>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Home',
  methods: {
    gotoAuth() {
      this.$router.push('/auth')
    }
  },
};
</script>

<style scoped>
.background {
  background-image: url("@/assets/background.webp");
  background-size: cover;
  background-position: center;
}
.home {
  max-width: 30%;
  margin: auto;
  padding: 20px;
}

section {
  text-align: center;
  margin-bottom: 60px;
}

.hero {
  background-image: linear-gradient(135deg, #4c8c4a 0%, #7dd56f 100%);
  color: #ffffff;
  padding: 60px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.how-it-works, .features, .get-started {
  background-color: #f9f9f9;
  padding: 40px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

h1 {
  font-size: 32px;
  margin-bottom: 20px;
}

h2 {
  font-size: 24px;
  margin-bottom: 15px;
}

p {
  font-size: 16px;
  line-height: 1.6;
  max-width: 800px;
  margin: auto;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  font-size: 16px;
  line-height: 2;
}

.el-button {
  margin-top: 20px;
  font-size: 16px;
  padding: 10px 30px;
}
</style>