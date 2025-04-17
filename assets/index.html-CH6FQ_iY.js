import{_ as a,e as s,f as n,o as i}from"./app-fvSY76QE.js";const t={};function l(c,e){return i(),s("div",null,e[0]||(e[0]=[n(`<h2 id="ce系列" tabindex="-1"><a class="header-anchor" href="#ce系列"><span>CE系列</span></a></h2><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>system-view</span></span>
<span class="line"><span>vlan vlanid</span></span>
<span class="line"><span>interface vlanif vlanid</span></span>
<span class="line"><span> ip address x.x.x.x y.y.y.y</span></span>
<span class="line"><span> quit</span></span>
<span class="line"><span>ip route-static 0.0.0.0 0.0.0.0 z.z.z.z</span></span>
<span class="line"><span></span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span>local-user username password irreversible-cipher passwd</span></span>
<span class="line"><span>local-user username service-type ssh</span></span>
<span class="line"><span>local-user username level 3</span></span>
<span class="line"><span>quit</span></span>
<span class="line"><span>ssh user username authentication-type password</span></span>
<span class="line"><span>ssh user username service-type stelnet</span></span>
<span class="line"><span>ssh server-source all-interface</span></span>
<span class="line"><span></span></span>
<span class="line"><span>user-interface vty 0 4</span></span>
<span class="line"><span>authentication-mode aaa</span></span>
<span class="line"><span>protocol inbound ssh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>commit</span></span>
<span class="line"><span>return</span></span>
<span class="line"><span>save</span></span>
<span class="line"><span>y</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提权" tabindex="-1"><a class="header-anchor" href="#提权"><span>提权</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>command-privilege level x view global dis cur</span></span>
<span class="line"><span>command-privilege level x view shell screen-length</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,5)]))}const r=a(t,[["render",l],["__file","index.html.vue"]]),d=JSON.parse('{"path":"/network/e44u2lru/","title":"hw_ce","lang":"zh-CN","frontmatter":{"title":"hw_ce","createTime":"2025/04/17 09:10:20","permalink":"/network/e44u2lru/","description":"CE系列 初始化 提权","head":[["meta",{"property":"og:url","content":"http://git.x-echo.net/network/e44u2lru/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"hw_ce"}],["meta",{"property":"og:description","content":"CE系列 初始化 提权"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-17T03:56:59.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-17T03:56:59.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hw_ce\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-17T03:56:59.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.34,"words":103},"git":{"updatedTime":1742183819000,"contributors":[{"name":"wyutan","username":"wyutan","email":"90786339+wyutan@users.noreply.github.com","commits":5,"avatar":"https://avatars.githubusercontent.com/wyutan?v=4","url":"https://github.com/wyutan"}],"changelog":[{"hash":"21c64a4309790e84e117ebe920a757e26fd0bcff","date":1740042688000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"Add files via upload","commitUrl":"https://github.com/wyutan/tanya//commit/21c64a4309790e84e117ebe920a757e26fd0bcff"},{"hash":"9a6728b1a61f594a8cecb3ff5a44787abf9af30e","date":1740410639000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"Rename hw_ce.md to 2.hw_ce.md","commitUrl":"https://github.com/wyutan/tanya//commit/9a6728b1a61f594a8cecb3ff5a44787abf9af30e"},{"hash":"1ad44ecc6608ffeef94b10ee06b98734c9007e22","date":1741958786000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"更新 2.hw_ce.md","commitUrl":"https://github.com/wyutan/tanya//commit/1ad44ecc6608ffeef94b10ee06b98734c9007e22"},{"hash":"3176e7cbad98063cb3d7796274c3cb582129d28a","date":1741958848000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"更新 2.hw_ce.md","commitUrl":"https://github.com/wyutan/tanya//commit/3176e7cbad98063cb3d7796274c3cb582129d28a"},{"hash":"a95ffcbdfadabedf8b9ea95b06480eace9ad45ea","date":1742183819000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"Update 2.hw_ce.md","commitUrl":"https://github.com/wyutan/tanya//commit/a95ffcbdfadabedf8b9ea95b06480eace9ad45ea"}]},"autoDesc":true,"filePathRelative":"network/template/2.hw_ce.md"}');export{r as comp,d as data};
