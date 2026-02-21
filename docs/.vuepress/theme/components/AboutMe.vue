<script setup>

</script>

<template>
  <router-link to="/about/" class="head-social-avatar">
    <div class="about-me-name">
      <p>𝐻𝑒𝓁𝓁𝑜, 𝓃𝒾𝒸𝑒 𝓉𝑜 𝓂𝑒𝑒𝓉 𝓎𝑜𝓊 !👋</p>
      <p class="about-me-card-text-big">你可以叫我 𝓽𝓪𝓷𝓽𝓪𝓷 .</p>
      <p>是一名努力奔向全栈的基础设施工程师。</p>
      <div></router-link>
    </div>
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
  }
}
</style>
