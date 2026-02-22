import{_ as a,c as n,a as e,o as i}from"./app-k1S79Pg5.js";const l={};function p(d,s){return i(),n("div",null,[...s[0]||(s[0]=[e(`<p><mark>9700M1</mark></p><div class="hint-container caution"><p class="hint-container-title">警告</p><p>不支持mac认证</p><p>配置mac认证会导致dot1x认证不通过</p></div><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>业务vlan：832 833</p><p>ap管理vlan：853</p><p>同步vlan：400</p></div><h2 id="配置接口及互联" tabindex="-1"><a class="header-anchor" href="#配置接口及互联"><span>配置接口及互联</span></a></h2><h3 id="master" tabindex="-1"><a class="header-anchor" href="#master"><span>Master</span></a></h3><p>创建vlan，业务、管理、同步</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>vlan batch 832 to 833 853 400</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>配置互联接口</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>interface Vlanif400</span></span>
<span class="line"><span> ip address x.x.x.x 255.255.255.252</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface Eth-Trunk0</span></span>
<span class="line"><span> port link-type trunk</span></span>
<span class="line"><span> port trunk allow-pass vlan 853</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface Eth-Trunk1</span></span>
<span class="line"><span> port link-type trunk</span></span>
<span class="line"><span> undo port trunk allow-pass vlan 1</span></span>
<span class="line"><span> port trunk allow-pass vlan 400</span></span>
<span class="line"><span> stp disable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/1</span></span>
<span class="line"><span> eth-trunk 1</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/2</span></span>
<span class="line"><span> eth-trunk 1</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface XGigabitEthernet0/0/11</span></span>
<span class="line"><span> eth-trunk 0</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface XGigabitEthernet0/0/12</span></span>
<span class="line"><span> eth-trunk 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slave" tabindex="-1"><a class="header-anchor" href="#slave"><span>Slave</span></a></h3><p>创建vlan，业务、管理、同步</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>vlan batch 832 to 833 853 400</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>配置互联接口</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>interface Vlanif400</span></span>
<span class="line"><span> ip address x.x.x.x 255.255.255.252</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface Eth-Trunk0</span></span>
<span class="line"><span> port link-type trunk</span></span>
<span class="line"><span> port trunk allow-pass vlan 853</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface Eth-Trunk1</span></span>
<span class="line"><span> port link-type trunk</span></span>
<span class="line"><span> undo port trunk allow-pass vlan 1</span></span>
<span class="line"><span> port trunk allow-pass vlan 400</span></span>
<span class="line"><span> stp disable</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/1</span></span>
<span class="line"><span> eth-trunk 1</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface GigabitEthernet0/0/2</span></span>
<span class="line"><span> eth-trunk 1</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface XGigabitEthernet0/0/11</span></span>
<span class="line"><span> eth-trunk 0</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>interface XGigabitEthernet0/0/12</span></span>
<span class="line"><span> eth-trunk 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置vrrp双机热备份" tabindex="-1"><a class="header-anchor" href="#配置vrrp双机热备份"><span>配置VRRP双机热备份</span></a></h2><h3 id="master-1" tabindex="-1"><a class="header-anchor" href="#master-1"><span>Master</span></a></h3><p>配置VRRP备份组的状态恢复延迟时间为60s</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>vrrp recover-delay 60</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建管理VRRP备份组，优先级120，抢占时间1800s</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>interface Vlanif853</span></span>
<span class="line"><span> ip address x.x.x.x 255.255.255.0</span></span>
<span class="line"><span> vrrp vrid 1 virtual-ip x.x.x.x</span></span>
<span class="line"><span> admin-vrrp vrid 1</span></span>
<span class="line"><span> vrrp vrid 1 priority 120</span></span>
<span class="line"><span> vrrp vrid 1 preempt-mode timer delay 1800</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建HSB主服务0，及主备通道IP地址和端口号</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>hsb-service 0</span></span>
<span class="line"><span> service-ip-port local-ip x.x.x.x peer-ip x.x.x.x local-data-port 10241 peer-data-port 10241</span></span>
<span class="line"><span> service-keep-alive detect retransmit 3 interval 6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定HSB主备服务0和管理VRRP备份组</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>hsb-group 0</span></span>
<span class="line"><span> track vrrp vrid 1 interface Vlanif853</span></span>
<span class="line"><span> bind-service 0</span></span>
<span class="line"><span> hsb enable</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置NAC、DHCP、wlan业务绑定HSB备份组</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>hsb-service-type access-user hsb-group 0</span></span>
<span class="line"><span>hsb-service-type dhcp hsb-group 0</span></span>
<span class="line"><span>hsb-service-type ap hsb-group 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="slave-1" tabindex="-1"><a class="header-anchor" href="#slave-1"><span>Slave</span></a></h3><p>配置VRRP备份组的状态恢复延迟时间为60s</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>vrrp recover-delay 60</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建管理VRRP备份组</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>interface Vlanif2853</span></span>
<span class="line"><span> ip address x.x.x.x 255.255.255.0</span></span>
<span class="line"><span> vrrp vrid 1 virtual-ip x.x.x.x</span></span>
<span class="line"><span> admin-vrrp vrid 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建HSB主服务0，及主备通道IP地址和端口号</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>hsb-service 0</span></span>
<span class="line"><span> service-ip-port local-ip x.x.x.x peer-ip x.x.x.x local-data-port 10241 peer-data-port 10241</span></span>
<span class="line"><span> service-keep-alive detect retransmit 3 interval 6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>绑定HSB主备服务0和管理VRRP备份组</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>hsb-group 0</span></span>
<span class="line"><span> track vrrp vrid 1 interface Vlanif853</span></span>
<span class="line"><span> bind-service 0</span></span>
<span class="line"><span> hsb enable</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置NAC、DHCP、wlan业务绑定HSB备份组</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>hsb-service-type access-user hsb-group 0</span></span>
<span class="line"><span>hsb-service-type dhcp hsb-group 0</span></span>
<span class="line"><span>hsb-service-type ap hsb-group 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置dot1x认证" tabindex="-1"><a class="header-anchor" href="#配置dot1x认证"><span>配置dot1x认证</span></a></h2><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>radius-server template qwe</span></span>
<span class="line"><span> radius-server shared-key cipher %^%#LF@=!,.ypU_yK@SGq,VF&#39;|&gt;O-qM&gt;#&amp;\\T~F:pq9h(%^%#</span></span>
<span class="line"><span> radius-server authentication x.x.x.x 1812 weight 100</span></span>
<span class="line"><span> radius-server authentication x.x.x.x 1812 weight 80</span></span>
<span class="line"><span> radius-server accounting x.x.x.x 1813 weight 100</span></span>
<span class="line"><span> radius-server accounting x.x.x.x 1813 weight 80</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span> authentication-scheme qwe</span></span>
<span class="line"><span>  authentication-mode radius</span></span>
<span class="line"><span> domain qwe</span></span>
<span class="line"><span>  authentication-scheme qwe</span></span>
<span class="line"><span>  accounting-scheme default</span></span>
<span class="line"><span>  radius-server qwe</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>dot1x-access-profile name qwe</span></span>
<span class="line"><span> dot1x authentication-method eap</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>authentication-profile name qwe</span></span>
<span class="line"><span> dot1x-access-profile qwe</span></span>
<span class="line"><span> access-domain qwe force</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全局指定发起认证IP</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>radius-attribute nas-ip x.x.x.x</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="配置wlan业务" tabindex="-1"><a class="header-anchor" href="#配置wlan业务"><span>配置wlan业务</span></a></h2><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>vlan pool 1</span></span>
<span class="line"><span> vlan 832 to 833</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>wlan</span></span>
<span class="line"><span> calibrate enable schedule time 03:00:00</span></span>
<span class="line"><span> temporary-management psk %^%#e_4(VnB#5a!nQ7BXE%^%#</span></span>
<span class="line"><span> ap username admi password cipher %^%gJ{&gt;M&amp;\`~7!J#3+m&#39;%&gt;O)99r.*0#x.%^%#</span></span>
<span class="line"><span> traffic-profile name linshi</span></span>
<span class="line"><span>  traffic-optimize broadcast-suppression packets 128</span></span>
<span class="line"><span>  traffic-optimize multicast-suppression packets 5</span></span>
<span class="line"><span>  traffic-optimize unicast-suppression packets 128</span></span>
<span class="line"><span> security-profile name linshi</span></span>
<span class="line"><span>  security wpa-wpa2 dot1x aes</span></span>
<span class="line"><span>  pmf mandatory</span></span>
<span class="line"><span> ssid-profile name linshi</span></span>
<span class="line"><span>  ssid WiFi</span></span>
<span class="line"><span> ssid-profile name default</span></span>
<span class="line"><span> vap-profile name linshi</span></span>
<span class="line"><span>  service-vlan vlan-pool 1</span></span>
<span class="line"><span>  ssid-profile linshi</span></span>
<span class="line"><span>  security-profile linshi</span></span>
<span class="line"><span>  traffic-profile linshi</span></span>
<span class="line"><span>  authentication-profile qwe</span></span>
<span class="line"><span> regulatory-domain-profile name linshi</span></span>
<span class="line"><span>  dca-channel 5g bandwidth 40mhz</span></span>
<span class="line"><span> regulatory-domain-profile name default</span></span>
<span class="line"><span> regulatory-domain-profile name WiFi</span></span>
<span class="line"><span>  dca-channel 5g bandwidth 40mhz</span></span>
<span class="line"><span> rrm-profile name linshi</span></span>
<span class="line"><span>  airtime-fair-schedule enable</span></span>
<span class="line"><span>  band-steer balance start-threshold 30</span></span>
<span class="line"><span>  sta-load-balance dynamic disable</span></span>
<span class="line"><span> rrm-profile name default</span></span>
<span class="line"><span> rrm-profile name WiFi</span></span>
<span class="line"><span>  airtime-fair-schedule enable</span></span>
<span class="line"><span>  band-steer balance start-threshold 30</span></span>
<span class="line"><span>  sta-load-balance dynamic disable</span></span>
<span class="line"><span> radio-2g-profile name default</span></span>
<span class="line"><span> radio-2g-profile name huawei-2.4</span></span>
<span class="line"><span>  beacon-interval 160</span></span>
<span class="line"><span>  multicast-rate 54</span></span>
<span class="line"><span>  wmm edca-ap ac-be aifsn 3 ecw ecwmin 5 ecwmax 6 txoplimit 0 ack-policy normal</span></span>
<span class="line"><span> radio-5g-profile name huawei-5.0</span></span>
<span class="line"><span>  beacon-interval 160</span></span>
<span class="line"><span>  multicast-rate 54</span></span>
<span class="line"><span>  dot11a basic-rate 6 9 12 18 24 36 48 54 </span></span>
<span class="line"><span> wireless-access-specification</span></span>
<span class="line"><span> ap-system-profile name default</span></span>
<span class="line"><span>  telnet enable</span></span>
<span class="line"><span>  lldp report enable</span></span>
<span class="line"><span>  traffic-optimize broadcast-suppression other-broadcast disable</span></span>
<span class="line"><span>  traffic-optimize broadcast-suppression other-multicast disable</span></span>
<span class="line"><span>  traffic-optimize broadcast-suppression arp rate-threshold 128</span></span>
<span class="line"><span>  traffic-optimize broadcast-suppression igmp rate-threshold 128</span></span>
<span class="line"><span>  traffic-optimize broadcast-suppression nd rate-threshold 128</span></span>
<span class="line"><span> ap auth-mode no-auth</span></span>
<span class="line"><span> ap-group name linshi</span></span>
<span class="line"><span>  regulatory-domain-profile linshi</span></span>
<span class="line"><span>  radio 0</span></span>
<span class="line"><span>   radio-2g-profile huawei-2.4</span></span>
<span class="line"><span>   vap-profile linshi wlan 1</span></span>
<span class="line"><span>  radio 1</span></span>
<span class="line"><span>   radio-5g-profile huawei-5</span></span>
<span class="line"><span>   vap-profile linshi wlan 1</span></span>
<span class="line"><span>  radio 2</span></span>
<span class="line"><span>   vap-profile linshi wlan 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置capwap隧道</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>capwap source ip-address x.x.x.x</span></span>
<span class="line"><span>capwap dtls psk 8,z5SS@DLKG-Y4S&lt;/Nl%%%^%#</span></span>
<span class="line"><span>capwap dtls inter-controller psk %:B(3|V]Tl^L.XPPAuGs.&lt;%^%#</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主备配置同步</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span> master controller</span></span>
<span class="line"><span>  master-redundancy track-vrrp vrid 1 interface Vlanif853</span></span>
<span class="line"><span>  master-redundancy peer-ip ip-address x.x.x.x local-ip ip-address x.x.x.x psk %^%#p+\`l1Ok|&lt;**&quot;HI(Sa{Z2XTKX^5xmr+K%^%#</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置生成树" tabindex="-1"><a class="header-anchor" href="#配置生成树"><span>配置生成树</span></a></h2><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>stp mode rstp</span></span>
<span class="line"><span>stp bpdu-protection</span></span>
<span class="line"><span>stp enable</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置ntp" tabindex="-1"><a class="header-anchor" href="#配置ntp"><span>配置NTP</span></a></h2><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span> ntp-service server server-source -i all</span></span>
<span class="line"><span> ntp-service unicast-server x.x.x.x</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置时区</p><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span> clock timezone BJ add 08:00:00</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="其他配置" tabindex="-1"><a class="header-anchor" href="#其他配置"><span>其他配置</span></a></h2><div class="language-cfg line-numbers-mode" data-highlighter="shiki" data-ext="cfg" style="--shiki-light:#393a34;--shiki-dark:#dbd7caee;--shiki-light-bg:#ffffff;--shiki-dark-bg:#121212;"><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code class="language-cfg"><span class="line"><span>#</span></span>
<span class="line"><span>aaa</span></span>
<span class="line"><span> local-user linshi password irreversible-cipher $1a$2:-f@rU%w4$}|g&amp;Q*o0VLV^:,0&#39;SBxX%&gt;iCK&gt;LfeSCY@EKX\\o@,$</span></span>
<span class="line"><span> local-user linshi privilege level 15</span></span>
<span class="line"><span> local-user linshi service-type ssh http</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span> info-center timestamp log date precision-time millisecond</span></span>
<span class="line"><span> info-center timestamp trap date precision-time millisecond</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>undo icmp name timestamp-request receive</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span> snmp-agent community read @+LXB\\V$&gt;Wy/X!kU&gt;6&gt;W\\30~pZ2iA4u&lt;&amp;K)[4%^%# </span></span>
<span class="line"><span> snmp-agent sys-info version v2c v3</span></span>
<span class="line"><span> snmp-agent trap enable</span></span>
<span class="line"><span> snmp-agent trap queue-size 500</span></span>
<span class="line"><span> snmp-agent trap life 600</span></span>
<span class="line"><span> snmp-agent protocol source-interface all</span></span>
<span class="line"><span> snmp-agent </span></span>
<span class="line"><span>#</span></span>
<span class="line"><span> ssh server timeout 120</span></span>
<span class="line"><span> ssh server-source -i all</span></span>
<span class="line"><span> stelnet server enable </span></span>
<span class="line"><span> undo telnet server enable </span></span>
<span class="line"><span> undo telnet ipv6 server enable </span></span>
<span class="line"><span> telnet server-source -i MEth0/0/1</span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>ip route-static 0.0.0.0 0.0.0.0 x.x.x.1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#</span></span>
<span class="line"><span>user-interface con 0</span></span>
<span class="line"><span> authentication-mode password</span></span>
<span class="line"><span> set authentication password irreversible-cipher $1b$We]6VzkAm:C])@Y1hIa!$</span></span>
<span class="line"><span>user-interface vty 0 4</span></span>
<span class="line"><span> authentication-mode aaa</span></span>
<span class="line"><span> user privilege level 15</span></span>
<span class="line"><span> protocol inbound ssh</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55)])])}const c=a(l,[["render",p]]),t=JSON.parse('{"path":"/network/jt1w2tq4/","title":"hw_ac | 网络相关","lang":"zh-CN","frontmatter":{"title":"hw_ac","createTime":"2026/02/22 12:26:31","permalink":"/network/jt1w2tq4/","description":"9700M1 警告 不支持mac认证 配置mac认证会导致dot1x认证不通过 相关信息 业务vlan：832 833 ap管理vlan：853 同步vlan：400 配置接口及互联 Master 创建vlan，业务、管理、同步 配置互联接口 Slave 创建vlan，业务、管理、同步 配置互联接口 配置VRRP双机热备份 Master 配置VRRP备...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"hw_ac\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-05-09T02:45:24.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"http://git.x-echo.net/network/jt1w2tq4/"}],["meta",{"property":"og:site_name","content":"谈呀"}],["meta",{"property":"og:title","content":"hw_ac"}],["meta",{"property":"og:description","content":"9700M1 警告 不支持mac认证 配置mac认证会导致dot1x认证不通过 相关信息 业务vlan：832 833 ap管理vlan：853 同步vlan：400 配置接口及互联 Master 创建vlan，业务、管理、同步 配置互联接口 Slave 创建vlan，业务、管理、同步 配置互联接口 配置VRRP双机热备份 Master 配置VRRP备..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-05-09T02:45:24.000Z"}],["meta",{"property":"article:modified_time","content":"2025-05-09T02:45:24.000Z"}]]},"readingTime":{"minutes":4.28,"words":1285},"git":{"createdTime":1744708921000,"updatedTime":1746758724000,"contributors":[{"name":"wyutan","username":"wyutan","email":"90786339+wyutan@users.noreply.github.com","commits":13,"avatar":"https://avatars.githubusercontent.com/wyutan?v=4","url":"https://github.com/wyutan"}],"changelog":[{"hash":"da9e96f70899105eb3dbc2176a2b183fbe393dda","time":1746758724000,"email":"90786339+wyutan@users.noreply.github.com","author":"tanya","message":"Update 4.hw_ac.md"},{"hash":"2d83c749059ef639699d578fb7a692c95f9ca1d7","time":1746758543000,"email":"90786339+wyutan@users.noreply.github.com","author":"tanya","message":"Update 4.hw_ac.md"},{"hash":"bc1d4499ba939b0c092f02eb934332b57933ce3c","time":1746758407000,"email":"90786339+wyutan@users.noreply.github.com","author":"tanya","message":"Update 4.hw_ac.md"},{"hash":"837438f542766c1522c5bfeeb64a4d60e88ebb77","time":1745227629000,"email":"90786339+wyutan@users.noreply.github.com","author":"tanya","message":"Update 4.hw_ac.md"},{"hash":"2494c733758446e40a76b1fe6584090c3471748c","time":1744795139000,"email":"90786339+wyutan@users.noreply.github.com","author":"yu","message":"Update 4.hw_ac.md"},{"hash":"bcd47dfcb18dacf21b7304ccde6eb3fe42996720","time":1744794940000,"email":"90786339+wyutan@users.noreply.github.com","author":"yu","message":"Update 4.hw_ac.md"},{"hash":"45bdd0d9e67bbacc4635982549516a6a659ab520","time":1744790047000,"email":"90786339+wyutan@users.noreply.github.com","author":"yu","message":"Update 4.hw_ac.md"},{"hash":"962935d5e4e69a85ec938fd81b4cb9e775badf74","time":1744787862000,"email":"90786339+wyutan@users.noreply.github.com","author":"yu","message":"Update 4.hw_ac.md"},{"hash":"c0031d25ad7548bc0177ba999a1d5bcd8b4a27c2","time":1744787561000,"email":"90786339+wyutan@users.noreply.github.com","author":"yu","message":"Update 4.hw_ac.md"},{"hash":"dbc875d2caa5201ca6f1f2a2427734f02f90625a","time":1744786826000,"email":"90786339+wyutan@users.noreply.github.com","author":"yu","message":"Update 4.hw_ac.md"}]},"autoDesc":true,"filePathRelative":"network/template/4.hw_ac.md","headers":[]}');export{c as comp,t as data};
