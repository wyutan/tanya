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
                ></iframe>
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
              <p class="about-me-card-text-big about-me-card-text-soft">专业是<span style="color: #3a5ccc">锚</span>，兴趣是<span style="color: #3a5ccc">帆</span></p>
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
/* 基础容器：确保背景透明，露出底部的 Canvas */
.container {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
}

canvas {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
}

.about-me {
  max-width: 1380px;
  margin: 0 auto;
  width: 90%;
  position: relative;
  z-index: 2;
}

.about-me-3-2-row {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 20px;
}

.about-me-1-1-row {
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

/* -------------------- 跑马灯边框核心 -------------------- */
.marquee-card {
  position: relative;
  padding: 3px; /* 边框粗细 */
  border-radius: 15px;
  overflow: hidden;
  display: flex;
  background: transparent; /* 卡片外部区域保持透明 */
}

/* 旋转的彩色流光层 */
.marquee-card::before {
  content: '';
  position: absolute;
  width: 250%; 
  height: 250%;
  top: -75%;
  left: -75%;
  background: conic-gradient(
    #ff0000, #ff7f00, #ffff00, #00ff00, 
    #00ffff, #0000ff, #8b00ff, #ff0000
  );
  animation: rotate-border 6s linear infinite;
  z-index: 0;
}

/* 内部不透明背景层：只有这里是白色的 */
.marquee-inner {
  position: relative;
  z-index: 1;
  flex: 1;
  background: #ffffff !important; /* 强制白色，遮挡流光 */
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* 深色模式下，内部变为深色，不影响外部透明度 */
[data-theme='dark'] .marquee-inner {
  background: #1b1c20 !important;
}

/* 内部组件处理 */
.marquee-inner > * {
  background: transparent !important;
  border: none !important;
  box-shadow: none !important;
  flex: 1;
}

@keyframes rotate-border {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* -------------------- 其他辅助样式 -------------------- */
.top-disclaimer {
  width: 100%;
  margin: 20px 0 10px 0;
  padding: 12px 20px;
  background: rgba(213, 55, 55, 0.05);
  border: 1px dashed rgba(213, 55, 55, 0.4);
  color: #d53737;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  backdrop-filter: blur(4px);
}

.about-me-card-title-normal { color: var(--vp-c-text-2); font-size: 13px; margin-bottom: 10px; }
.about-me-card-text-big { color: var(--vp-c-text-1); margin: 10px 0; font-size: 36px; font-weight: 700; line-height: 1.1; }

.about-me-card-text-color {
  background: var(--vp-bg-home-hero-name, linear-gradient(315deg, var(--vp-c-purple-1) 10%, var(--vp-c-brand-2) 75%, var(--vp-c-brand-2) 100%));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

@media screen and (max-width: 770px) {
  .about-me-3-2-row, .about-me-1-1-row {
    display: flex;
    flex-direction: column;
  }
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import AboutMe from "./AboutMe.vue";
import AboutMeText from "./AboutMeText.vue";
import AboutMeSkill from "./AboutMeSkill.vue";
import AboutMeCharacter from "./AboutMeCharacter.vue";
import AboutMeLife from "./AboutMeLife.vue";

interface Comet {
  direction: 'horizontal' | 'vertical'
  position: number
  progress: number
  speed: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
const ctx = ref<CanvasRenderingContext2D | null>(null)
const linesGap = 20
const comets = ref<Comet[]>([])
const mouseX = ref(-1)
const mouseY = ref(-1)
let animationFrameId: number

const initCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  ctx.value = canvas.getContext('2d')
  resizeCanvas()
  window.addEventListener('resize', resizeCanvas)
}

const resizeCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas || !ctx.value) return
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}

const drawGrid = () => {
  const canvas = canvasRef.value
  const context = ctx.value
  if (!canvas || !context) return
  context.clearRect(0, 0, canvas.width, canvas.height)
  context.lineWidth = 1
  const radius = 100
  const hasMouse = mouseX.value >= 0 && mouseY.value >= 0
  const theme = document.documentElement.getAttribute('data-theme');
  let baseColor = theme === 'dark' ? "30, 120, 120" : "100, 190, 190"
  let baseAlpha = theme === 'dark' ? 0.15 : 0.12

  for (let y = 0; y < canvas.height; y += linesGap) {
    context.beginPath(); context.moveTo(0, y); context.lineTo(canvas.width, y)
    let alpha = baseAlpha
    if (hasMouse) {
      const dy = Math.abs(y - mouseY.value)
      if (dy < radius) alpha = baseAlpha + (1 - dy / radius) * (1 - baseAlpha)
    }
    context.strokeStyle = `rgba(${baseColor}, ${alpha})`; context.stroke()
  }
  for (let x = 0; x < canvas.width; x += linesGap) {
    context.beginPath(); context.moveTo(x, 0); context.lineTo(x, canvas.height)
    let alpha = baseAlpha
    if (hasMouse) {
      const dx = Math.abs(x - mouseX.value)
      if (dx < radius) alpha = baseAlpha + (1 - dx / radius) * (1 - baseAlpha)
    }
    context.strokeStyle = `rgba(${baseColor}, ${alpha})`; context.stroke()
  }
}

const createComet = () => {
  const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical'
  const maxPos = direction === 'horizontal' ? window.innerHeight : window.innerWidth
  const position = Math.floor(Math.random() * (maxPos / linesGap)) * linesGap
  if (comets.value.length < 20) {
    comets.value.push({ direction, position, progress: 0, speed: Math.random() * 0.005 + 0.002 })
  }
}

const drawComet = (comet: Comet) => {
  const context = ctx.value; const canvas = canvasRef.value
  if (!context || !canvas) return
  const length = 80; const { direction, position, progress } = comet
  const x = direction === 'horizontal' ? progress * canvas.width : position
  const y = direction === 'horizontal' ? position : progress * canvas.height
  const gradient = direction === 'horizontal' 
    ? context.createLinearGradient(x - length, y, x, y) 
    : context.createLinearGradient(x, y - length, x, y)
  gradient.addColorStop(0, 'rgba(80, 134, 161, 0)'); gradient.addColorStop(1, '#4483a2')
  context.strokeStyle = gradient; context.beginPath()
  direction === 'horizontal' ? (context.moveTo(x - length, y), context.lineTo(x, y)) : (context.moveTo(x, y - length), context.lineTo(x, y))
  context.stroke()
}

const animate = () => {
  drawGrid()
  comets.value = comets.value.filter(comet => {
    comet.progress += comet.speed; drawComet(comet); return comet.progress < 1.2
  })
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  initCanvas(); animate()
  const timer = setInterval(createComet, 500)
  window.addEventListener('mousemove', (e) => { mouseX.value = e.clientX; mouseY.value = e.clientY })
  onUnmounted(() => {
    clearInterval(timer)
    window.removeEventListener('resize', resizeCanvas)
    cancelAnimationFrame(animationFrameId)
  })
})
</script>
