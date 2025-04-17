import{_ as a,e as n,f as e,o as i}from"./app-fvSY76QE.js";const l={};function t(p,s){return i(),n("div",null,s[0]||(s[0]=[e(`<h2 id="s系列" tabindex="-1"><a class="header-anchor" href="#s系列"><span>S系列</span></a></h2><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>system-view</span></span>
<span class="line"><span>vlan vlanid</span></span>
<span class="line"><span>interface vlanif vlanid</span></span>
<span class="line"><span> ip address x.x.x.x y.y.y.y</span></span>
<span class="line"><span> quit</span></span>
<span class="line"><span>ip route-static 0.0.0.0 0.0.0.0 z.z.z.z</span></span>
<span class="line"><span></span></span>
<span class="line"><span>super password level 15 cipher passwd</span></span>
<span class="line"><span></span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span>local-user username password irreversible-cipher passwd</span></span>
<span class="line"><span>local-user username service-type ssh</span></span>
<span class="line"><span>local-user username privilege level 1</span></span>
<span class="line"><span>quit</span></span>
<span class="line"><span>stelnet server enable</span></span>
<span class="line"><span>ssh user username authentication-type password</span></span>
<span class="line"><span>ssh user username service-type stelnet</span></span>
<span class="line"><span>ssh server-source all-interface</span></span>
<span class="line"><span></span></span>
<span class="line"><span>user-interface vty 0 4</span></span>
<span class="line"><span>authentication-mode aaa</span></span>
<span class="line"><span>protocol inbound ssh</span></span>
<span class="line"><span></span></span>
<span class="line"><span>return</span></span>
<span class="line"><span>save force</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提权" tabindex="-1"><a class="header-anchor" href="#提权"><span>提权</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>command-privilege level x view shell dis cur</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="dot1x" tabindex="-1"><a class="header-anchor" href="#dot1x"><span>dot1x</span></a></h3><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>radius-server template qax</span></span>
<span class="line"><span> radius-server authentication x.x.x.x 1812 weight 100</span></span>
<span class="line"><span>&lt;!-- 默认80越大越优先 --&gt;</span></span>
<span class="line"><span> radius-server authentication x.x.x.x 1812 </span></span>
<span class="line"><span> radius-server accounting x.x.x.x 1813 weight 100</span></span>
<span class="line"><span> radius-server accounting x.x.x.x 1813 </span></span>
<span class="line"><span> radius-server shared-key cipher xxx</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span> authentication-scheme qax</span></span>
<span class="line"><span> authentication-mode radius</span></span>
<span class="line"><span>domain qax</span></span>
<span class="line"><span> authentication-scheme qax</span></span>
<span class="line"><span> radius-server qax</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>dot1x-access-profile name qax</span></span>
<span class="line"><span> dot1x authentication-method eap</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>mac-access-profile name qax</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>authentication-profile name qax</span></span>
<span class="line"><span> mac-access-profile qax</span></span>
<span class="line"><span> dot1x-access-profile qax</span></span>
<span class="line"><span> access-domain qax force</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface gigabitethernet 0/0/1</span></span>
<span class="line"><span> authentication-profile qax</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="其他" tabindex="-1"><a class="header-anchor" href="#其他"><span>其他</span></a></h3><p>s系列ssh支持低安全性密钥算法</p><div class="language- line-numbers-mode" data-ext="" data-title=""><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span>load-module weakea</span></span>
<span class="line"><span>\`根据回显输入后续命令\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const d=a(l,[["render",t],["__file","index.html.vue"]]),r=JSON.parse('{"path":"/network/9nel0uhc/","title":"hw_s","lang":"zh-CN","frontmatter":{"title":"hw_s","createTime":"2025/04/17 09:10:20","permalink":"/network/9nel0uhc/","description":"S系列 初始化 提权 dot1x 其他 s系列ssh支持低安全性密钥算法","head":[["meta",{"property":"og:url","content":"http://git.x-echo.net/network/9nel0uhc/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"hw_s"}],["meta",{"property":"og:description","content":"S系列 初始化 提权 dot1x 其他 s系列ssh支持低安全性密钥算法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-03-17T03:56:50.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-17T03:56:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hw_s\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-17T03:56:50.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":0.76,"words":227},"git":{"updatedTime":1742183810000,"contributors":[{"name":"wyutan","username":"wyutan","email":"90786339+wyutan@users.noreply.github.com","commits":5,"avatar":"https://avatars.githubusercontent.com/wyutan?v=4","url":"https://github.com/wyutan"}],"changelog":[{"hash":"21c64a4309790e84e117ebe920a757e26fd0bcff","date":1740042688000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"Add files via upload","commitUrl":"https://github.com/wyutan/tanya//commit/21c64a4309790e84e117ebe920a757e26fd0bcff"},{"hash":"970a61e02a76fb9a80dec544d9766746d2e5fc11","date":1740410620000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"Rename hw_s.md to 1.hw_s.md","commitUrl":"https://github.com/wyutan/tanya//commit/970a61e02a76fb9a80dec544d9766746d2e5fc11"},{"hash":"1bdc4f972fc0985abd2466b9c7f9db9e687afa92","date":1741958760000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"更新 1.hw_s.md","commitUrl":"https://github.com/wyutan/tanya//commit/1bdc4f972fc0985abd2466b9c7f9db9e687afa92"},{"hash":"95b9437bb81bbbd00685f013a76918c1321d093b","date":1741958835000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"更新 1.hw_s.md","commitUrl":"https://github.com/wyutan/tanya//commit/95b9437bb81bbbd00685f013a76918c1321d093b"},{"hash":"652c43b5fc11db34a426a71aef756ba97fcb7d5d","date":1742183810000,"email":"90786339+wyutan@users.noreply.github.com","author":"wyutan","message":"Update 1.hw_s.md","commitUrl":"https://github.com/wyutan/tanya//commit/652c43b5fc11db34a426a71aef756ba97fcb7d5d"}]},"autoDesc":true,"filePathRelative":"network/template/1.hw_s.md"}');export{d as comp,r as data};
