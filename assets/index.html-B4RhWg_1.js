import{_ as t,e as a,f as s,o as i}from"./app-fvSY76QE.js";const n={};function l(d,e){return i(),a("div",null,e[0]||(e[0]=[s('<h2 id="创建lvm" tabindex="-1"><a class="header-anchor" href="#创建lvm"><span>创建lvm</span></a></h2><ul><li><strong>创建物理卷（PV）</strong>：</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>pvcreate /dev/sdb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><strong>创建卷组（VG）</strong>：</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>vgcreate vg1 /dev/sdb</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><strong>创建逻辑卷（LV）</strong>：</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>lvcreate -L 10G -n lv1 vg1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>lvcreate -l +100%FREE -n lv1 vg1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><strong>格式化逻辑卷</strong>：</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>mkfs.ext4 /dev/vg1/lv1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><strong>挂载</strong>： 在<code>/etc/fstab</code>中添加</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>/dev/vg1/lv1  /data  ext4  defaults  0  0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="扩容lvm" tabindex="-1"><a class="header-anchor" href="#扩容lvm"><span>扩容LVM</span></a></h2><ul><li><strong>扩展卷组（VG）</strong>：</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>vgextend vg1 /dev/sdc</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><strong>扩展逻辑卷（LV）</strong>：</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>lvextend -L 20G /dev/vg1/lv1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>lvextend -l +100%FREE /dev/vg1/lv1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li><strong>扩展文件系统</strong>：</li></ul><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>resize2fs /dev/vg1/lv1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',22)]))}const r=t(n,[["render",l],["__file","index.html.vue"]]),o=JSON.parse('{"path":"/os/linux/nu0bpkyd/","title":"LVM","lang":"zh-CN","frontmatter":{"title":"LVM","createTime":"2025/04/17 09:10:20","permalink":"/os/linux/nu0bpkyd/","description":"创建lvm 创建物理卷（PV）： 创建卷组（VG）： 创建逻辑卷（LV）： 或 格式化逻辑卷： 挂载： 在/etc/fstab中添加 扩容LVM 扩展卷组（VG）： 扩展逻辑卷（LV）： 或 扩展文件系统：","head":[["meta",{"property":"og:url","content":"http://git.x-echo.net/os/linux/nu0bpkyd/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"LVM"}],["meta",{"property":"og:description","content":"创建lvm 创建物理卷（PV）： 创建卷组（VG）： 创建逻辑卷（LV）： 或 格式化逻辑卷： 挂载： 在/etc/fstab中添加 扩容LVM 扩展卷组（VG）： 扩展逻辑卷（LV）： 或 扩展文件系统："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-18T13:59:45.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-18T13:59:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LVM\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-18T13:59:45.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.35,"words":105},"git":{"updatedTime":1742306385000,"contributors":[{"name":"wyutan","username":"wyutan","email":"90786339+wyutan@users.noreply.github.com","commits":6,"avatar":"https://avatars.githubusercontent.com/wyutan?v=4","url":"https://github.com/wyutan"}],"changelog":[{"hash":"4514c3434dbf90baa42f0d41139d1a0120e5e4ed","date":1740059569000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"Add files via upload","commitUrl":"https://github.com/wyutan/tanya//commit/4514c3434dbf90baa42f0d41139d1a0120e5e4ed"},{"hash":"dc9da71c10c3c2dcdbb7859c200b444cfb35aaf4","date":1740443042000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"Rename LVM.md to 2.LVM.md","commitUrl":"https://github.com/wyutan/tanya//commit/dc9da71c10c3c2dcdbb7859c200b444cfb35aaf4"},{"hash":"4dc911924aea6088cd553e8cec688195a496a9be","date":1741958541000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"更新 2.LVM.md","commitUrl":"https://github.com/wyutan/tanya//commit/4dc911924aea6088cd553e8cec688195a496a9be"},{"hash":"782509911b4f6a43fc375d11a7874b454b78dea2","date":1741958954000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"更新 2.LVM.md","commitUrl":"https://github.com/wyutan/tanya//commit/782509911b4f6a43fc375d11a7874b454b78dea2"},{"hash":"44c698b7793416f06f9be0a98c28922ef38d9636","date":1742185150000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"Update 2.LVM.md","commitUrl":"https://github.com/wyutan/tanya//commit/44c698b7793416f06f9be0a98c28922ef38d9636"},{"hash":"4c3aa4ce68a06d94bb2ca0eff0f42633c8c69105","date":1742306385000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"更新 2.LVM.md","commitUrl":"https://github.com/wyutan/tanya//commit/4c3aa4ce68a06d94bb2ca0eff0f42633c8c69105"}]},"autoDesc":true,"filePathRelative":"os/linux/常用/2.LVM.md"}');export{r as comp,o as data};
