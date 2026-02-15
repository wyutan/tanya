<script setup lang="ts">
import { ref } from 'vue'
import AboutMeLife from './AboutMeLife.vue'

const message = ref('Hello World!')
</script>

<template>
  <div class="my-custom-content">
    {{ message }}
<hr /> <AboutMeLife />
    
  </div>
</template>

<style scoped>
/* 3. 第三步：你可以给外层容器加点样式，防止组件撑破布局 */
.my-custom-content {
  padding: 20px;
}
</style>
