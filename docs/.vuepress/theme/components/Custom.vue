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
          <AboutMeSkill/>
        </div>
        <div class="marquee-card">
          <AboutMeLife/>
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
.container {
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow-x: hidden !important;
  overflow-y: hidden !important;
}

canvas {
  z-index: -1;
  position: fixed;
  top: -1px;
  left: -1px;
  pointer-events: none;
  overflow: hidden;
}

.about-me {
  max-width: 1380px;
  margin: 0 auto;
  width: 90%;
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

/* -------------------- 跑马灯边框核心 CSS -------------------- */
.marquee-card {
  position: relative;
  padding: 2px; /* 边框宽度 */
  border-radius: 14px;
  overflow: hidden;
  display: flex;
}

/* 1. 默认状态：五彩跑马灯 */
.marquee-card::before {
  content: '';
  position: absolute;
  width: 200%;
  height: 200%;
  top: -50%;
  left: -50%;
  /* 这里的颜色可以无限增加，形成彩虹效果 */
  background: conic-gradient(
    #ff0000, 
    #ff7f00, 
    #ffff00, 
    #00ff00, 
    #00ffff, 
    #0000ff, 
    #8b00ff, 
    #ff0000
  );
  animation: rotate-border 4s linear infinite;
  z-index: 0;
}

/* 内部遮罩，露出下方的背景网格 */
.marquee-card::after {
  content: '';
  position: absolute;
  inset: 2px; /* 与 padding 保持一致 */
  background: var(--main-card-background); /* 使用你定义的全局背景变量 */
  border-radius: 12px;
  z-index: 1;
  backdrop-filter: blur(10px);
}

/* 确保内部组件显示在最顶层 */
.marquee-card > * {
  position: relative;
  z-index: 2;
  flex: 1;
  background: transparent !important;
  box-shadow: none !important;
  border: none !important;
}

/* 2. 悬停状态：让颜色更亮或旋转更快 */
.marquee-card:hover::before {
  animation-duration: 2s; /* 速度翻倍 */
  /* 悬停时可以换一组更亮的荧光色 */
  background: conic-gradient(
    #00f2ff, 
    #00ff00, 
    #fbff00, 
    #ff00f7, 
    #00f2ff
  );
}

@keyframes rotate-border {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* -------------------- 移动端适配 -------------------- */
@media screen and (max-width: 770px) {
  .about-me { width: 94%; }
  .about-me-3-2-row, .about-me-1-1-row {
    display: flex;
    flex-direction: column;
  }
}

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

[data-theme='dark'] .top-disclaimer {
  background: rgba(213, 55, 55, 0.15);
  color: #ff5f5f;
  border-color: rgba(213, 55, 55, 0.6);
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
  let baseColor = "100, 190, 190"
  let baseAlpha = 0.12
  if (theme === 'dark') {
    baseColor = "30, 120, 120"
    baseAlpha = 0.15
  }
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
  const maxPosition = direction === 'horizontal' ? Math.floor(window.innerHeight / linesGap) : Math.floor(window.innerWidth / linesGap)
  const position = Math.floor(Math.random() * maxPosition) * linesGap
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
  const gradient = direction === 'horizontal' ? context.createLinearGradient(x - length, y, x, y) : context.createLinearGradient(x, y - length, x, y)
  gradient.addColorStop(0, 'rgba(80, 134, 161, 0)'); gradient.addColorStop(1, '#4483a2')
  context.strokeStyle = gradient; context.beginPath()
  if (direction === 'horizontal') { context.moveTo(x - length, y); context.lineTo(x, y) }
  else { context.moveTo(x, y - length); context.lineTo(x, y) }
  context.stroke()
}

const animate = () => {
  const canvas = canvasRef.value; const context = ctx.value
  if (!canvas || !context) return
  context.clearRect(0, 0, canvas.width, canvas.height)
  drawGrid()
  comets.value = comets.value.filter(comet => {
    comet.progress += comet.speed; drawComet(comet)
    return comet.progress < 1.2
  })
  animationFrameId = requestAnimationFrame(animate)
}

onMounted(() => {
  initCanvas(); animate()
  const timer = setInterval(createComet, 500)
  onUnmounted(() => clearInterval(timer))
})

onUnmounted(() => {
  window.removeEventListener('resize', resizeCanvas)
  cancelAnimationFrame(animationFrameId)
})
</script>
