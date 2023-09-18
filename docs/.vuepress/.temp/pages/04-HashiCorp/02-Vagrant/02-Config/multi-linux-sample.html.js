export const data = JSON.parse("{\"key\":\"v-5a126031\",\"path\":\"/04-HashiCorp/02-Vagrant/02-Config/multi-linux-sample.html\",\"title\":\"다양한 Linux 생성 샘플\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Vagrant로 다양한 Linux 구성\",\"tag\":[\"vagrant\",\"virtualbox\",\"linux\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/02-Vagrant/02-Config/multi-linux-sample.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"다양한 Linux 생성 샘플\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Vagrant로 다양한 Linux 구성\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vagrant\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"virtualbox\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"linux\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"다양한 Linux 생성 샘플\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.7,\"words\":210},\"filePathRelative\":\"04-HashiCorp/02-Vagrant/02-Config/multi-linux-sample.md\",\"excerpt\":\"<h1> 다양한 Linux 생성 샘플</h1>\\n<div class=\\\"language-ruby line-numbers-mode\\\" data-ext=\\\"rb\\\"><pre class=\\\"language-ruby\\\"><code><span class=\\\"token comment\\\"># -*- mode: ruby -*-</span>\\n<span class=\\\"token comment\\\"># vi: set ft=ruby :</span>\\n\\n<span class=\\\"token comment\\\"># base image : https://app.vagrantup.com/bento</span>\\n<span class=\\\"token comment\\\"># Cluster IP have to set subnetting on private network subnet of VM</span>\\n\\n<span class=\\\"token variable\\\">$debianip</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">50</span>\\n<span class=\\\"token variable\\\">$centip</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">60</span>\\n<span class=\\\"token variable\\\">$suseip</span> <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">70</span>\\n\\ndebian_cluster <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"ubuntu\\\"</span></span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token symbol\\\">:image</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"bento/ubuntu-18.04\\\"</span></span><span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\ncent_cluster <span class=\\\"token operator\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"centos\\\"</span></span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token symbol\\\">:image</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"centos/7\\\"</span></span><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"rocky\\\"</span></span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token symbol\\\">:image</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"rockylinux/8\\\"</span></span><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">,</span>\\n<span class=\\\"token punctuation\\\">}</span>\\nsuse_cluster <span class=\\\"token operator\\\">=</span>  <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"suse\\\"</span></span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token punctuation\\\">{</span> <span class=\\\"token symbol\\\">:image</span> <span class=\\\"token operator\\\">=&gt;</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"opensuse/Tumbleweed.x86_64\\\"</span></span> <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\nVagrant<span class=\\\"token punctuation\\\">.</span>configure<span class=\\\"token punctuation\\\">(</span><span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"2\\\"</span></span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token keyword\\\">do</span> <span class=\\\"token operator\\\">|</span>config<span class=\\\"token operator\\\">|</span>\\n\\n  config<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>synced_folder <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">'.'</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">'/vagrant'</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token symbol\\\">disabled</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token boolean\\\">true</span>\\n\\n  debian_cluster<span class=\\\"token punctuation\\\">.</span>each_with_index <span class=\\\"token keyword\\\">do</span> <span class=\\\"token operator\\\">|</span><span class=\\\"token punctuation\\\">(</span>hostname<span class=\\\"token punctuation\\\">,</span> info<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span> i<span class=\\\"token operator\\\">|</span>\\n    config<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>define hostname <span class=\\\"token keyword\\\">do</span> <span class=\\\"token operator\\\">|</span>server<span class=\\\"token operator\\\">|</span>\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>box <span class=\\\"token operator\\\">=</span> info<span class=\\\"token punctuation\\\">[</span><span class=\\\"token symbol\\\">:image</span><span class=\\\"token punctuation\\\">]</span>\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>hostname <span class=\\\"token operator\\\">=</span> hostname\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>network <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"private_network\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token symbol\\\">name</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"vboxnet1\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token symbol\\\">ip</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"172.28.128.</span><span class=\\\"token interpolation\\\"><span class=\\\"token delimiter punctuation\\\">#{</span><span class=\\\"token content\\\">i <span class=\\\"token operator\\\">+</span> <span class=\\\"token variable\\\">$debianip</span></span><span class=\\\"token delimiter punctuation\\\">}</span></span><span class=\\\"token string\\\">\\\"</span></span>\\n\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>provider <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"virtualbox\\\"</span></span> <span class=\\\"token keyword\\\">do</span> <span class=\\\"token operator\\\">|</span>v<span class=\\\"token operator\\\">|</span>\\n        v<span class=\\\"token punctuation\\\">.</span>name <span class=\\\"token operator\\\">=</span> hostname\\n        v<span class=\\\"token punctuation\\\">.</span>gui <span class=\\\"token operator\\\">=</span> <span class=\\\"token boolean\\\">false</span>\\n        v<span class=\\\"token punctuation\\\">.</span>memory <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">1024</span>\\n        v<span class=\\\"token punctuation\\\">.</span>cpus <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">1</span>\\n\\n        v<span class=\\\"token punctuation\\\">.</span>customize <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"modifyvm\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token symbol\\\">:id</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"--vram\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"9\\\"</span></span><span class=\\\"token punctuation\\\">]</span>\\n      <span class=\\\"token keyword\\\">end</span> <span class=\\\"token comment\\\"># end provider</span>\\n    <span class=\\\"token keyword\\\">end</span> <span class=\\\"token comment\\\"># end config</span>\\n  <span class=\\\"token keyword\\\">end</span> <span class=\\\"token comment\\\"># end cluster foreach</span>\\n\\n  suse_cluster<span class=\\\"token punctuation\\\">.</span>each_with_index <span class=\\\"token keyword\\\">do</span> <span class=\\\"token operator\\\">|</span><span class=\\\"token punctuation\\\">(</span>hostname<span class=\\\"token punctuation\\\">,</span> info<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span> i<span class=\\\"token operator\\\">|</span>\\n    config<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>define hostname <span class=\\\"token keyword\\\">do</span> <span class=\\\"token operator\\\">|</span>server<span class=\\\"token operator\\\">|</span>\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>box <span class=\\\"token operator\\\">=</span> info<span class=\\\"token punctuation\\\">[</span><span class=\\\"token symbol\\\">:image</span><span class=\\\"token punctuation\\\">]</span>\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>hostname <span class=\\\"token operator\\\">=</span> hostname\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>network <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"private_network\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token symbol\\\">name</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"vboxnet1\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token symbol\\\">ip</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"172.28.128.</span><span class=\\\"token interpolation\\\"><span class=\\\"token delimiter punctuation\\\">#{</span><span class=\\\"token content\\\">i <span class=\\\"token operator\\\">+</span> <span class=\\\"token variable\\\">$suseip</span></span><span class=\\\"token delimiter punctuation\\\">}</span></span><span class=\\\"token string\\\">\\\"</span></span>\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>provider <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"virtualbox\\\"</span></span> <span class=\\\"token keyword\\\">do</span> <span class=\\\"token operator\\\">|</span>v<span class=\\\"token operator\\\">|</span>\\n        v<span class=\\\"token punctuation\\\">.</span>name <span class=\\\"token operator\\\">=</span> hostname\\n        v<span class=\\\"token punctuation\\\">.</span>gui <span class=\\\"token operator\\\">=</span> <span class=\\\"token boolean\\\">false</span>\\n        v<span class=\\\"token punctuation\\\">.</span>memory <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">1024</span>\\n        v<span class=\\\"token punctuation\\\">.</span>cpus <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">1</span>\\n\\n        v<span class=\\\"token punctuation\\\">.</span>customize <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"modifyvm\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token symbol\\\">:id</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"--vram\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"9\\\"</span></span><span class=\\\"token punctuation\\\">]</span>\\n      <span class=\\\"token keyword\\\">end</span> <span class=\\\"token comment\\\"># end provider</span>\\n    <span class=\\\"token keyword\\\">end</span> <span class=\\\"token comment\\\"># end config</span>\\n  <span class=\\\"token keyword\\\">end</span> <span class=\\\"token comment\\\"># end cluster foreach</span>\\n\\n  cent_cluster<span class=\\\"token punctuation\\\">.</span>each_with_index <span class=\\\"token keyword\\\">do</span> <span class=\\\"token operator\\\">|</span><span class=\\\"token punctuation\\\">(</span>hostname<span class=\\\"token punctuation\\\">,</span> info<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">,</span> i<span class=\\\"token operator\\\">|</span>\\n    config<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>define hostname <span class=\\\"token keyword\\\">do</span> <span class=\\\"token operator\\\">|</span>server<span class=\\\"token operator\\\">|</span>\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>box <span class=\\\"token operator\\\">=</span> info<span class=\\\"token punctuation\\\">[</span><span class=\\\"token symbol\\\">:image</span><span class=\\\"token punctuation\\\">]</span>\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>hostname <span class=\\\"token operator\\\">=</span> hostname\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>network <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"private_network\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token symbol\\\">name</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"vboxnet1\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token symbol\\\">ip</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"172.28.128.</span><span class=\\\"token interpolation\\\"><span class=\\\"token delimiter punctuation\\\">#{</span><span class=\\\"token content\\\">i <span class=\\\"token operator\\\">+</span> <span class=\\\"token variable\\\">$centip</span></span><span class=\\\"token delimiter punctuation\\\">}</span></span><span class=\\\"token string\\\">\\\"</span></span>\\n\\n      server<span class=\\\"token punctuation\\\">.</span>vm<span class=\\\"token punctuation\\\">.</span>provider <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"virtualbox\\\"</span></span> <span class=\\\"token keyword\\\">do</span> <span class=\\\"token operator\\\">|</span>v<span class=\\\"token operator\\\">|</span>\\n        v<span class=\\\"token punctuation\\\">.</span>name <span class=\\\"token operator\\\">=</span> hostname\\n        v<span class=\\\"token punctuation\\\">.</span>gui <span class=\\\"token operator\\\">=</span> <span class=\\\"token boolean\\\">false</span>\\n        v<span class=\\\"token punctuation\\\">.</span>memory <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">1024</span>\\n        v<span class=\\\"token punctuation\\\">.</span>cpus <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">1</span>\\n\\n        v<span class=\\\"token punctuation\\\">.</span>customize <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"modifyvm\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token symbol\\\">:id</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"--vram\\\"</span></span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string-literal\\\"><span class=\\\"token string\\\">\\\"9\\\"</span></span><span class=\\\"token punctuation\\\">]</span>\\n      <span class=\\\"token keyword\\\">end</span> <span class=\\\"token comment\\\"># end provider</span>\\n    <span class=\\\"token keyword\\\">end</span> <span class=\\\"token comment\\\"># end config</span>\\n  <span class=\\\"token keyword\\\">end</span> <span class=\\\"token comment\\\"># end cluster foreach</span>\\n  \\n<span class=\\\"token keyword\\\">end</span>\\n\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
