<template>
  <div class="about-me-card-bg vp-blog-post-item about-me-skill">
    <div style="margin-left: 20px">
      <p class="about-me-card-title-normal">𝒮𝓀𝒾𝓁𝓁</p>
      <p class="about-me-card-text-big">我的能力</p>
    </div>
    
    <!-- 第一行向左移动 -->
    <div class="marquee-row first-row">
      <div class="marquee-content">
        <span v-for="(item, index) in technology" :key="index">
          <img :src="item.icon" :alt="item.type" />
        </span>
        <span v-for="(item, index) in technology" :key="index + technology.length">
          <img :src="item.icon" :alt="item.type" />
        </span>
      </div>
    </div>
    
    <!-- 第二行向右移动 -->
    <div class="marquee-row second-row">
      <div class="marquee-content">
        <span v-for="(item, index) in certifications" :key="index">
          <img :src="item.icon" :alt="item.type" />
        </span>
        <span v-for="(item, index) in certifications" :key="index + certifications.length">
          <img :src="item.icon" :alt="item.type" />
        </span>
      </div>
    </div>
    
    <div class="about-me-skill-detail">
      <span v-for="(item, index) in technology" :key="index">
        <img :src="item.icon" :alt="item.type" />
        <span>{{ item.type }}</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const technology = ref([
  {type: 'Route', icon: '/icon/Router.svg'},
  {type: 'Switch', icon: '/icon/Switch.svg'},
  {type: 'FW', icon: '/icon/防火墙.svg'},
  {type: 'WiFi', icon: '/icon/wifi.svg'},
  {type: 'Linux', icon: '/icon/linux.svg'},
  {type: 'Windows', icon: '/icon/windows.svg'},
  {type: 'Zabbix', icon: '/icon/ZABBIX.svg'}, // 确保 public 目录下有这个文件
]);

const certifications = ref([
  {type: 'Cisco', icon: '/icon/cisco.svg'},
  {type: 'PMP', icon: '/icon/pmi_logo.svg'},
  {type: 'Redhat', icon: '/icon/redhat.svg'}, // 确保 public 目录下有这个文件
  {type: 'K8S', icon: '/icon/k8s.svg'}, // 确保 public 目录下有这个文件
  {type: 'Huawei', icon: '/icon/HUAWEI.svg'},
]);
</script>

<style scoped>
.about-me-skill {
  position: relative;
  min-height: 316px;
  padding: 20px 0;
  z-index: 1;
  &:hover .marquee-row {
    opacity: 0;
  }
  &:hover .about-me-skill-detail {
    opacity: 1;
  }
}

.about-me-skill-detail {
  position: absolute;
  top: 100px;
  opacity: 0;
  z-index: 2;
  display: flex;
  padding: 0 20px;
  transition: opacity 0.5s;
  flex-wrap: wrap;
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 6px 6px 0;
    border-radius: 8px;
    padding: 7px;
    font-size: 16px;
    color: var(--vp-c-text-2);
    background-color: var(--home-action-bnt-bg);
    
    /* 图片样式 */
    img {
      width: 24px;
      height: 24px;
      margin-right: 6px;
      object-fit: contain;
    }
  }
}

.marquee-row {
  transition: opacity 0.6s 0.1s;
  width: 105%;
  margin-left: -6px;
  overflow: hidden;
  white-space: nowrap;
  transform: rotateZ(-6deg);
}

.marquee-content {
  display: inline-flex;
  animation: marquee-left 30s linear infinite;
  > span {
    border-radius: 20%;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    background-color: var(--about-me-skill-item-bg);
    width: 80px;
    height: 80px;
    margin: 0 10px;
    
    /* 图片样式 */
    img {
      width: 50px;
      height: 50px;
      object-fit: contain;
    }
  }
}

.first-row {
  margin-top: 20px;
}

.second-row {
  margin-top: 20px;
}

.second-row .marquee-content {
  animation: marquee-right 50s linear infinite;
}

@keyframes marquee-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes marquee-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>
