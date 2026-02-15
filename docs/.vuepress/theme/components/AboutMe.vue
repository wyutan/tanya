<script setup>

</script>

<template>
  <router-link to="/blog/" class="head-social-avatar">
    <div class="about-me-name">
      <p>𝐻𝑒𝓁𝓁𝑜, 𝓃𝒾𝒸𝑒 𝓉𝑜 𝓂𝑒𝑒𝓉 𝓎𝑜𝓊 !👋</p>
      <p class="about-me-card-text-big">你可以叫我 谈呀 .</p>
      <p>是一名努力往全栈方向发展的基础设施工程师。</p>
    </div>
  </router-link>


</template>

<style scoped>
.about-me-name {
  border-radius: 12px;
  justify-content: center;
  padding: 2rem;
  color: #fff;
  background-image: linear-gradient(120deg, var(--vp-c-brand-3), var(--vp-c-brand-soft));
  background-size: 200% 200%;

  > p {
    color: var(--vp-c-text-1);
    margin-top: 0rem;
    margin-bottom: 0rem;
  }
}

.about-me-card-text-big {
  font-size: 2.2rem;   /* 设置为约2倍大小 */
  font-weight: 800;    /* 极粗体 */
  line-height: 1.5;    /* 大字体建议调小行高，视觉更紧凑 */
}
</style>
