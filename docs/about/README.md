---
title: 关于我
layout: Page
sidebar: false
aside: false
article: false
---

<div class="about-profile-float">
  <img src="/icon/logo.png" alt="谈呀" class="float-avatar" />
  <div class="float-name">谈呀</div>
  <div class="float-title">基础设施工程师</div>
  <div class="float-loc">📍 山东 · 烟台</div>
  <div class="float-links">
    <a href="https://github.com/wyutan" target="_blank">GitHub</a>
  </div>
</div>

## 👨‍💻 工作经历

<div class="timeline-box">
  <div class="t-item">
    <div class="t-time">2023.5 - 至今</div>
    <div class="t-role">企业运维</div>
    <div class="t-desc">负责企业内部基础设施建设与维护。</div>
  </div>
  <div class="t-item">
    <div class="t-time">2021.8 - 2023.5</div>
    <div class="t-role">银行运维</div>
    <div class="t-desc">负责金融数据中心基础设施高可用保障。</div>
  </div>
  <div class="t-item">
    <div class="t-time">2016.6 - 2021.8</div>
    <div class="t-role">集成商</div>
    <div class="t-desc">参与多个大型网络集成项目实施与交付。</div>
  </div>
</div>

## 📜 专业证书

<div class="cert-box">
  <span class="c-tag">CCIE R&S</span>
  <span class="c-tag">PMP</span>
  <span class="c-tag">CKA</span>
  <span class="c-tag">RHCE</span>
  <span class="c-tag">HCIE Storage</span>
</div>

<style>
/* --- 核心布局：浮动卡片 --- */
.about-profile-float {
  /* 默认手机端样式：居中显示在顶部 */
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  margin-bottom: 2rem;
}

/* PC端样式 (宽度大于768px) */
@media (min-width: 768px) {
  .about-profile-float {
    float: right;       /* 关键：让它浮动到右侧 */
    width: 260px;       /* 固定宽度 */
    margin-left: 40px;  /* 左侧留出间距，避免文字紧贴 */
    margin-bottom: 20px;
    margin-top: 0;
  }
}

.float-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 10px;
  border: 4px solid var(--vp-c-bg);
  display: block;
}
.float-name { font-size: 1.5rem; font-weight: bold; margin-bottom: 5px; }
.float-title { color: var(--vp-c-text-2); font-size: 0.9rem; }
.float-loc { margin-top: 10px; font-size: 0.85rem; color: var(--vp-c-text-3); }
.float-links { margin-top: 15px; padding-top: 15px; border-top: 1px solid var(--vp-c-divider); }
.float-links a { color: var(--vp-c-brand); font-weight: 600; text-decoration: none; }

/* --- 经历时间轴样式 --- */
.timeline-box { margin-top: 1rem; }
.t-item {
  position: relative;
  padding-left: 20px;
  margin-bottom: 24px;
  border-left: 2px solid var(--vp-c-brand);
}
.t-time { font-family: monospace; color: var(--vp-c-text-3); font-size: 0.85rem; }
.t-role { font-weight: 600; font-size: 1.1rem; margin: 4px 0; }
.t-desc { color: var(--vp-c-text-2); font-size: 0.95rem; }

/* --- 证书标签样式 --- */
.cert-box { display: flex; flex-wrap: wrap; gap: 10px; }
.c-tag {
  padding: 4px 12px;
  border-radius: 20px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  font-size: 0.85rem;
  font-weight: 600;
}
/* 清除浮动，防止页面塌陷 */
.theme-default-content:after { content: ""; display: table; clear: both; }
</style>
