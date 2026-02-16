---
title: 关于我
layout: Page
sidebar: false
aside: false
article: false
---

<div class="about-layout-container"><div class="about-main-col"><h2 class="section-title"><span class="icon">👨‍💻</span> 工作经历</h2><div class="timeline-box"><div class="t-item"><div class="t-time">2023.5 - 至今</div><div class="t-role">企业运维</div><div class="t-desc">负责企业内部基础设施建设与维护。</div></div><div class="t-item"><div class="t-time">2021.8 - 2023.5</div><div class="t-role">银行运维</div><div class="t-desc">负责金融数据中心基础设施高可用保障。</div></div><div class="t-item"><div class="t-time">2016.6 - 2021.8</div><div class="t-role">集成商</div><div class="t-desc">参与多个大型网络集成项目实施与交付。</div></div></div><h2 class="section-title"><span class="icon">📜</span> 专业证书</h2><div class="cert-box"><span class="c-tag">CCIE R&S</span><span class="c-tag">PMP</span><span class="c-tag">CKA</span><span class="c-tag">RHCE</span><span class="c-tag">HCIE Storage</span></div><h2 class="section-title"><span class="icon">👥</span> 贡献者</h2><div class="contributors-box"><a href="https://github.com/wyutan" target="_blank"><img src="https://github.com/wyutan.png" alt="wyutan" style="width:40px;height:40px;border-radius:50%;" /></a></div></div><div class="about-sidebar-col"><div class="profile-card-sticky"><img src="/icon/logo.png" alt="谈呀" class="sidebar-avatar" /><div class="sidebar-name">谈呀</div><div class="sidebar-title">基础设施工程师</div><div class="sidebar-loc">📍 山东 · 烟台</div><div class="sidebar-links"><a href="mailto:wyu.tan99@gmail.com" class="gmail-link" title="Send email"><svg class="icon-svg" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M69.12 929.28l153.6 30.72v-547.84c-51.2-37.376-102.4-75.264-153.6-112.64v629.76z" fill="#3399FF" /><path d="M514.56 632.32c-148.48-111.104-296.96-221.696-445.44-332.8-3.584-6.144-11.264-20.992-10.24-40.96 1.536-24.576 15.36-40.448 20.48-46.08 13.312-13.824 28.16-18.432 35.84-20.48 15.872-4.096 29.184-1.536 35.84 0 121.344 88.576 242.176 177.664 363.52 266.24 95.744-71.68 190.976-143.36 286.72-215.04v179.2c-95.744 70.144-190.976 139.776-286.72 209.92z" fill="#FF3333" /><path d="M954.88 929.28v-624.64c-51.2 39.424-102.4 78.336-153.6 117.76v542.72c51.2-11.776 102.4-24.064 153.6-35.84z" fill="#339966" /><path d="M801.28 243.2v174.08c51.2-37.376 102.4-75.264 153.6-112.64 1.536-11.776 3.584-24.064 5.12-35.84-0.512-8.704-2.56-26.112-15.36-40.96-9.216-10.752-19.968-15.872-30.72-20.48-16.384-7.168-31.232-9.728-40.96-10.24-24.064 15.36-47.616 30.72-71.68 46.08z" fill="#FFCC00" /></svg><span class="link-text">wyu.tan99@gmail.com</span></a></div></div></div></div>

<style>
/* 1. 整体布局 */
.about-layout-container {
  display: flex;
  flex-direction: column-reverse;
  gap: 30px;
  margin-top: 20px;
}
@media (min-width: 768px) {
  .about-layout-container {
    flex-direction: row;
    align-items: flex-start;
  }
  .about-main-col { flex: 1; min-width: 0; }
  .about-sidebar-col { width: 260px; flex-shrink: 0; }
  .profile-card-sticky { position: sticky; top: 80px; }
}

/* 2. 标题样式 */
.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  padding-bottom: 10px;
  border-bottom: 3px solid rgba(56, 189, 248, 0.2);
}
.section-title .icon { font-size: 1.8rem; }

/* 3. 侧边栏卡片样式 */
.profile-card-sticky {
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}
.sidebar-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 12px;
  border: 4px solid var(--vp-c-bg);
  display: block;
}
.sidebar-name { font-size: 1.6rem; font-weight: 700; color: var(--vp-c-text-1); }
.sidebar-title { margin-top: 4px; color: var(--vp-c-text-2); font-size: 0.9rem; }
.sidebar-loc { margin-top: 12px; font-size: 0.85rem; color: var(--vp-c-text-3); }

/* 社交链接区域 */
.sidebar-links {
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid var(--vp-c-divider);
  display: flex;
  justify-content: center;
}
.gmail-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--vp-c-text-1);
  text-decoration: none;
  font-size: 0.9rem;
  transition: opacity 0.2s;
}
.gmail-link:hover { opacity: 0.8; color: var(--vp-c-brand); }
.icon-svg { width: 20px; height: 20px; vertical-align: middle; }
.link-text { font-weight: 500; }

/* 4. 时间轴与证书 */
.timeline-box { margin-left: 5px; }
.t-item {
  position: relative;
  padding-left: 24px;
  margin-bottom: 24px;
  border-left: 2px solid var(--vp-c-brand-light, #3498db);
}
.t-item::before {
  content: "";
  position: absolute; left: -6px; top: 0;
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--vp-c-brand);
}
.t-time { font-family: monospace; color: var(--vp-c-text-3); font-size: 0.85rem; margin-bottom: 4px; }
.t-role { font-weight: 600; font-size: 1.1rem; color: var(--vp-c-text-1); }
.t-desc { color: var(--vp-c-text-2); font-size: 0.95rem; margin-top: 4px; }
.cert-box { display: flex; flex-wrap: wrap; gap: 8px; }
.c-tag {
  padding: 4px 14px;
  border-radius: 20px;
  background: var(--vp-c-bg-mute);
  border: 1px solid var(--vp-c-divider);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}
</style>
