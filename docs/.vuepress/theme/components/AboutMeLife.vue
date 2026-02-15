<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-life">
    <div style="margin-left: 20px">
      <p class="about-me-card-title-normal">𝐿𝒾𝒻𝑒</p>
      <p class="about-me-card-text-big">我的日常</p>
    </div>
    <div ref="chartRef" class="chart-container"></div>
  </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import * as echarts from 'echarts';

const chartRef = ref(null);

// 示例数据
const lifeData = [
  {name: '工作', value: (400 / 1000).toFixed(2)},
  {name: '游戏', value: (80 / 1000).toFixed(2)},
  {name: '生活', value: (200 / 1000).toFixed(2)},
  {name: '阅读', value: (50 / 1000).toFixed(2)},
  {name: '学习', value: (200 / 1000).toFixed(2)},
  {name: '发呆', value: (70 / 1000).toFixed(2)}
];
onMounted(() => {
  const myChart = echarts.init(chartRef.value);

  const option = {
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        name: '我的日常',
        type: 'pie',
        radius: ['50%', '80%'],
        center: ['50%', '60%'],
        startAngle: 180,
        endAngle: 360,
        data: lifeData
      }
    ]
  };

  myChart.setOption(option);

  // 响应式调整
  window.addEventListener('resize', () => {
    myChart.resize();
  });
});
</script>

<style scoped>

about-me-life {
  padding: 20px;
  border-radius: 20px; /* 让边框圆润一点，更像图片效果 */
  border: 1px solid #e2e8f0; /* 模拟图片的边框线 */

  &:hover .about-me-character-img {
    transform: scale(1.1);
  }
}
  
.about-me-life {
  height: 316px;
  padding: 20px 0;
  overflow: inherit;
}

.chart-container {
  height: 100%;
}

.about-me-card-text-big {
  font-size: 2.5rem;   /* 设置为约2倍大小 */
  font-weight: 800;    /* 极粗体 */
  line-height: 1.5;    /* 大字体建议调小行高，视觉更紧凑 */
}
</style>
