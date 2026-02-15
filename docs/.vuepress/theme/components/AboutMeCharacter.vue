<script setup>

</script>

<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-character">
    <p class="about-me-card-title-normal">𝒸𝒽𝒶𝓇𝒶𝒸𝓉𝑒𝓇</p>
    <div class="about-me-character-content">
      <div class="about-me-character-type">
        <p class="about-me-card-text-big about-me-card-text-color">逻辑学家</p>
        <p class="about-me-card-text-big">INTP-T</p>
      </div>
      <div class="about-me-character-img">
      </div>
    </div>

  </div>
</template>

<style scoped>
.about-me-character {
  padding: 20px;
  border-radius: 20px; /* 让边框圆润一点，更像图片效果 */
  border: 1px solid #e2e8f0; /* 模拟图片的边框线 */

  &:hover .about-me-character-img {
    transform: scale(1.1);
  }
}


.about-me-character-content {
  display: flex;
  justify-content: space-between; /* 💡 关键：让文字在左，图片在右 */
  align-items: flex-end; /* 💡 让文字和图片都在底部对齐 */
  margin-top: 10px;
}

about-me-card-text-big {
  font-size: 2.2rem;   /* 增大字号 */
  font-weight: 800;    /* 加粗 */
  line-height: 1.1;    /* 紧凑行高 */
  margin: 0;           /* 清除默认边距 */
}

.about-me-card-text-color {
  color: #576b95; /* 模拟图片中的紫色/蓝色调 */
}

.type-code {
  color: #333;
  margin-top: 5px; /* 两行文字之间的距离 */
}
  
.about-me-character-type {
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* 文字整体靠下 */
}

.about-me-character-img {
  transition: transform 0.5s;
  width: 120px;      /* 适当调大图片容器宽度 */
  height: 120px;     /* 设置固定高度确保显示 */
  background-image: url("https://www.16personalities.com/static/images/personality-types/avatars/email/large/INTP_male.png");
  background-position: right bottom;
  background-size: contain;
  background-repeat: no-repeat;
}

.about-me-card-title-normal {
  font-style: italic;
  color: #999;
  margin-bottom: 0px;
}
</style>
