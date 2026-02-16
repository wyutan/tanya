---
title: 关于我
layout: Page
sidebar: false
aside: false
article: false
---

<div class="about-wrapper">
  
  <div class="about-main">

## 👨‍💻 工作经历

<div class="timeline-item">
  <div class="time">2023.5 - 至今</div>
  <div class="role">企业运维</div>
  <div class="desc">负责企业内部基础设施建设与维护。</div>
</div>

<div class="timeline-item">
  <div class="time">2021.8 - 2023.5</div>
  <div class="role">银行运维</div>
  <div class="desc">负责金融数据中心基础设施高可用保障。</div>
</div>

<div class="timeline-item">
  <div class="time">2016.6 - 2021.8</div>
  <div class="role">集成商</div>
  <div class="desc">参与多个大型网络集成项目实施与交付。</div>
</div>

## 📜 专业证书

<div class="cert-container">
  <span class="cert-tag ccie">CCIE R&S</span>
  <span class="cert-tag pmp">PMP</span>
  <span class="cert-tag cka">CKA</span>
  <span class="cert-tag rhce">RHCE</span>
  <span class="cert-tag hcie">HCIE Storage</span>
</div>

  </div>

  <div class="about-sidebar">
    <div class="profile-card">
      <img src="/icon/logo.png" alt="谈呀" class="avatar" />
      
      <div class="name">谈呀</div>
      <div class="title">基础设施工程师</div>
      <div class="location">
        📍 山东 · 烟台
      </div>
      
      <div class="social-links">
        <a href="https://github.com/wyutan" target="_blank" class="social-btn">
          GitHub
        </a>
      </div>
    </div>
  </div>

</div>

<style>
/* 布局容器 */
.about-wrapper {
  display: flex;
  gap: 40px;
  margin-top: 2rem;
  align-items: flex-start;
}

/* 左侧内容区 */
.about-main {
  flex: 1;
  min-width: 0;
}

/* 右侧侧边栏区 */
.about-sidebar {
  width: 280px;
  flex-shrink: 0;
}

/* 手机端适配：改为垂直排列 */
@media (max-width: 768px) {
  .about-wrapper {
    flex-direction: column-reverse;
    gap: 20px;
  }
  .about-sidebar {
    width: 100%;
  }
}

/* --- 卡片样式 --- */
.profile-card {
  padding: 24px;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  text-align: center;
  transition: transform 0.3s;
}
.profile-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 16px;
  border: 4px solid var(--vp-c-bg);
  display: block;
  object-fit: cover;
}

.name {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
}

.title {
  margin-top: 4px;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.location {
  margin-top: 12px;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
}

.social-links {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid var(--vp-c-divider);
}

.social-btn {
  display: inline-block;
  padding: 4px 12px;
  color: var(--vp-c-brand);
  font-weight: 600;
  font-size: 0.9rem;
}

/* --- 时间轴经历样式 --- */
.timeline-item {
  position: relative;
  padding-left: 20px;
  margin-bottom: 24px;
  border-left: 2px solid var(--vp-c-brand);
}
.timeline-item .time {
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  font-family: monospace;
}
.timeline-item .role {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 4px 0;
  color: var(--vp-c-text-1);
}
.timeline-item .desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}

/* --- 证书标签样式 --- */
.cert-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}
.cert-tag {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  transition: all 0.2s;
}
.cert-tag:hover {
  color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-mute);
  cursor: default;
}
</style>
