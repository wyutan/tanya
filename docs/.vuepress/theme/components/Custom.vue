<template>
  <div class="container">
    <!-- 添加 v-if="mounted"，只在客户端渲染 Canvas -->
    <canvas v-if="mounted" ref="canvasRef"></canvas>

    <div class="about-me">
      <h1 style="padding: 50px; color: red; background: white;">
        测试页面 - 如果能看到我，说明基础渲染正常
      </h1>
    </div>
  </div>
</template>

<style scoped>
.container {
  z-index: 1;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden !important;
  overflow-y: auto !important;
}

canvas {
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
}

.about-me {
  max-width: 1380px;
  margin: 0 auto;
  width: 90%;
  padding-top: 20px;
}
</style>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { nextTick } from 'vue'

// 添加 mounted 标记
const mounted = ref(false)

// 变量声明
let cometTimer: number | null = null
let animationFrameId: number | null = null

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
const isInitialized = ref(false)

// 清理函数
const cleanup = () => {
  if (animationFrameId !== null) {
    cancelAnimationFrame(animationFrameId)
    animationFrameId = null
  }
  
  if (cometTimer !== null) {
    clearInterval(cometTimer)
    cometTimer = null
  }

  window.removeEventListener('resize', resizeCanvas)
  comets.value = []
  
  if (ctx.value && canvasRef.value) {
    ctx.value.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height)
  }
  
  isInitialized.value = false
}

const initCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) {
    console.warn('Canvas element not found')
    return false
  }

  const context = canvas.getContext('2d')
  if (!context) {
    console.warn('Canvas context not available')
    return false
  }

  ctx.value = context
  resizeCanvas()
  
  window.removeEventListener('resize', resizeCanvas)
  window.addEventListener('resize', resizeCanvas)
  
  return true
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

  const theme = document.documentElement.getAttribute('data-theme')
  let baseColor = "100, 190, 190"
  let baseAlpha = 0.12
  if (theme === 'dark') {
    baseColor = "30, 120, 120"
    baseAlpha = 0.15
  }

  // 水平线
  for (let y = 0; y < canvas.height; y += linesGap) {
    context.beginPath()
    context.moveTo(0, y)
    context.lineTo(canvas.width, y)

    let alpha = baseAlpha
    if (hasMouse) {
      const dy = Math.abs(y - mouseY.value)
      if (dy < radius) {
        alpha = baseAlpha + (1 - dy / radius) * (1 - baseAlpha)
      }
    }

    context.strokeStyle = `rgba(${baseColor}, ${alpha})`
    context.stroke()
  }

  // 垂直线
  for (let x = 0; x < canvas.width; x += linesGap) {
    context.beginPath()
    context.moveTo(x, 0)
    context.lineTo(x, canvas.height)

    let alpha = baseAlpha
    if (hasMouse) {
      const dx = Math.abs(x - mouseX.value)
      if (dx < radius) {
        alpha = baseAlpha + (1 - dx / radius) * (1 - baseAlpha)
      }
    }
    context.strokeStyle = `rgba(${baseColor}, ${alpha})`
    context.stroke()
  }
}

const createComet = () => {
  const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical'
  const maxPosition = direction === 'horizontal'
      ? Math.floor(window.innerHeight / linesGap)
      : Math.floor(window.innerWidth / linesGap)

  const position = Math.floor(Math.random() * maxPosition) * linesGap

  if (comets.value.length < 20) {
    comets.value.push({
      direction,
      position,
      progress: 0,
      speed: Math.random() * 0.005 + 0.002,
    })
  }
}

const drawComet = (comet: Comet) => {
  const context = ctx.value
  const canvas = canvasRef.value
  if (!context || !canvas) return

  const length = 80
  const {direction, position, progress} = comet

  if (direction === 'horizontal') {
    const x = progress * canvas.width
    const y = position

    const gradient = context.createLinearGradient(x - length, y, x, y)
    gradient.addColorStop(0, 'rgba(80, 134, 161, 0)')
    gradient.addColorStop(0.4, 'rgba(80,134,161,0.3)')
    gradient.addColorStop(1, '#4483a2')

    context.strokeStyle = gradient
    context.beginPath()
    context.moveTo(x - length, y)
    context.lineTo(x, y)
    context.stroke()
  } else {
    const x = position
    const y = progress * canvas.height

    const gradient = context.createLinearGradient(x, y - length, x, y)
    gradient.addColorStop(0, 'rgba(80, 134, 161, 0)')
    gradient.addColorStop(0.4, 'rgba(80,134,161,0.3)')
    gradient.addColorStop(1, '#4483a2')

    context.strokeStyle = gradient
    context.beginPath()
    context.moveTo(x, y - length)
    context.lineTo(x, y)
    context.stroke()
  }
}

const animate = () => {
  const canvas = canvasRef.value
  const context = ctx.value
  if (!canvas || !context || !isInitialized.value) return

  context.clearRect(0, 0, canvas.width, canvas.height)
  drawGrid()

  comets.value = comets.value.filter(comet => {
    comet.progress += comet.speed
    drawComet(comet)
    return comet.progress < 1.2
  })

  animationFrameId = requestAnimationFrame(animate)
}

// 初始化函数
const startAnimation = async () => {
  await nextTick()
  
  if (!canvasRef.value) {
    console.error('Canvas ref not available')
    return
  }
  
  const success = initCanvas()
  if (!success) return
  
  isInitialized.value = true
  animate()
  
  if (cometTimer) clearInterval(cometTimer)
  cometTimer = window.setInterval(createComet, 500)
}

onMounted(() => {
  // 先设置 mounted 为 true，让 Canvas 渲染
  mounted.value = true
  // 然后启动动画
  setTimeout(startAnimation, 100)
})

onUnmounted(() => {
  cleanup()
})
</script>
