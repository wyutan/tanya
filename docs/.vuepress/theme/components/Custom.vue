<script setup lang="ts">
import { ref } from 'vue'
import AboutMeLife from './AboutMeLife.vue'
import AboutMe from "./AboutMe.vue";
import AboutMeText from "./AboutMeText.vue";
import AboutMeSkill from "./AboutMeSkill.vue";
import AboutMeCharacter from "./AboutMeCharacter.vue";
  
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
