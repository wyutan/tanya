<template>
  <div class="container">
    <canvas ref="canvasRef"></canvas>

    <div class="about-me">
      <div class="top-disclaimer">
        <span class="icon">⚠️</span>
        声明：如该网站内容涉及侵权请联系删除
      </div>
      
      <div class="about-me-3-2-row">
        <AboutMe/>
        <AboutMeText>
          <template #motto>
            <slot name="motto">
              <p class="about-me-card-title-normal">𝓂𝑜𝓉𝓉𝑜</p>
              <p class="about-me-card-text-big about-me-card-text-color">是星辰，是雨雾<br>是闪电，是不羁的灵魂</p>
              <div class="video-wrapper">
                <iframe 
                src="https://www.youtube.com/embed/B5unCXpegAw?start=60" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                class="youtube-iframe"
                >
                </iframe>
              </div>
            </slot>
          </template>
        </AboutMeText>
      </div>

      <div class="about-me-3-2-row">
        <div class="marquee-card">
          <div class="marquee-inner">
             <AboutMeSkill/>
          </div>
        </div>
        <div class="marquee-card">
          <div class="marquee-inner">
             <AboutMeLife/>
          </div>
        </div>
      </div>

      <div class="about-me-1-1-row">
        <AboutMeText>
          <template #motto>
            <slot name="motto">
              <p class="about-me-card-title-normal">𝓈𝓁𝑜𝑔𝒶𝓃</p>
              <p class="about-me-card-text-big about-me-card-text-soft">专业是<span style="color: #3a5ccc">锚</span>，兴趣是<span style="color: #3a5ccc">帆</span>
              </p>
              <p class="about-me-card-text-big">探索的旅程<span style="color: #d53737">永无止境</span></p>
            </slot>
          </template>
        </AboutMeText>
        <AboutMeCharacter/>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 原有基础布局样式保持不变 */
.container { z-index: 1; width: 100%; height: 100%; overflow-x: hidden !important; overflow-y: hidden !important; }
canvas { z-index: -1; position: fixed; top: -1px; left: -1px; pointer-events: none; overflow: hidden; }
.about-me { max-width: 1380px; margin: 0 auto; width: 90%; }
.about-me-3-2-row { margin-top: 20px; display: grid; grid-template-columns: 3fr 2fr; gap: 20px; }
.about-me-1-1-row { margin-top: 20px; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

/* -------------------- 修改后的跑马灯核心 -------------------- */
.marquee-card {
  position: relative;
  padding: 3px; /* 边框粗细 */
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  background: rgba(0,0,0,0.05); /* 边框底色 */
}

/* 多色流光背景 */
.marquee-card::before {
  content: '';
  position: absolute;
  width: 250%; /* 增加宽度确保覆盖 */
  height: 250%;
  top: -75%;
  left: -75%;
  /* 多色渐变：赤橙黄绿青蓝紫 */
  background: conic-gradient(
    #ff0000, #ff7f00, #ffff00, #00ff00, 
    #00ffff, #0000ff, #8b00ff, #ff0000
  );
  animation: rotate-border 6s linear infinite;
  z-index: 0;
}

/* 内部白色背景遮罩层 */
.marquee-inner {
  position: relative;
  z-index: 1;
  flex: 1;
  /* 关键：这里强制设为白色，深色模式下自动切换 */
  background: #ffffff; 
  border-radius: 12px;
  display: flex;
  flex-direction: column;
}

/* 深色模式适配 */
[data-theme='dark'] .marquee-inner {
  background: #1b1c20; /* 对应你 custom.css 中的暗色背景 */
}

/* 确保内部组件不自带边框和背景，防止视觉重叠 */
.marquee-inner > * {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  height: 100%;
}

/* 悬停效果 */
.marquee-card:hover::before {
  animation-duration: 3s; /* 悬停时流光转速加快 */
}

@keyframes rotate-border {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* 移动端处理 */
@media screen and (max-width: 770px) {
  .about-me-3-2-row { display: flex; flex-direction: column; }
}

/* 其他原有样式... */
.top-disclaimer { width: 100%; margin: 20px 0 10px 0; padding: 12px 20px; background: rgba(213, 55, 55, 0.05); border: 1px dashed rgba(213, 55, 55, 0.4); color: #d53737; font-size: 18px; font-weight: bold; border-radius: 8px; display: flex; align-items: center; gap: 10px; backdrop-filter: blur(4px); }
.about-me-card-title-normal { color: var(--vp-c-text-2); font-size: 13px; margin-bottom: 10px; }
.about-me-card-text-big { color: var(--vp-c-text-1); margin: 10px 0; font-size: 36px; font-weight: 700; line-height: 1.1; }
.about-me-card-text-color { background: var(--vp-bg-home-hero-name, linear-gradient(315deg, var(--vp-c-purple-1) 10%, var(--vp-c-brand-2) 75%, var(--vp-c-brand-2) 100%)); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; filter: drop-shadow(0 0 8px rgba(100, 190, 190, 0.3)); font-weight: 800; transition: all 0.3s ease !important; }
</style>

<script setup lang="ts">
/* Script 内容保持不变，同上一个回答 */
import { ref, onMounted, onUnmounted } from 'vue'
import AboutMe from "./AboutMe.vue";
import AboutMeText from "./AboutMeText.vue";
import AboutMeSkill from "./AboutMeSkill.vue";
import AboutMeCharacter from "./AboutMeCharacter.vue";
import AboutMeLife from "./AboutMeLife.vue";
// ... (后面逻辑省略，保持原有 canvas 绘图逻辑即可)
</script>
