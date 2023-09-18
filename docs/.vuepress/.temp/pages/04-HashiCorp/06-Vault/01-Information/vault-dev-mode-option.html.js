export const data = JSON.parse("{\"key\":\"v-1c1132dc\",\"path\":\"/04-HashiCorp/06-Vault/01-Information/vault-dev-mode-option.html\",\"title\":\"Vault Development Mode Options\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Vault 개발 모드 실행시 옵션 값 설명\",\"tag\":[\"vault\",\"optinos\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/06-Vault/01-Information/vault-dev-mode-option.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Vault Development Mode Options\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Vault 개발 모드 실행시 옵션 값 설명\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vault\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"optinos\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Vault Development Mode Options\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":1.49,\"words\":447},\"filePathRelative\":\"04-HashiCorp/06-Vault/01-Information/vault-dev-mode-option.md\",\"excerpt\":\"<h1> Vault Development Mode Options</h1>\\n<p>볼트 개발 모드 서버를 시작하는 기초적인 커맨드와 실행 후 안내 메시지는 다음과 같다.</p>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>$ vault server <span class=\\\"token parameter variable\\\">-dev</span>\\n\\n<span class=\\\"token operator\\\">==</span><span class=\\\"token operator\\\">&gt;</span> Vault server configuration:\\n\\n             Api Address: http://127.0.0.1:8200\\n                     Cgo: disabled\\n         Cluster Address: https://127.0.0.1:8201\\n   Environment Variables: <span class=\\\"token environment constant\\\">HOME</span>, ITERM_PROFILE, <span class=\\\"token punctuation\\\">..</span>.\\n              Go Version: go1.19.4\\n              Listener <span class=\\\"token number\\\">1</span>: tcp <span class=\\\"token punctuation\\\">(</span>addr: <span class=\\\"token string\\\">\\\"127.0.0.1:8200\\\"</span>, cluster address: <span class=\\\"token string\\\">\\\"127.0.0.1:8201\\\"</span>, max_request_duration: <span class=\\\"token string\\\">\\\"1m30s\\\"</span>, max_request_size: <span class=\\\"token string\\\">\\\"33554432\\\"</span>, tls: <span class=\\\"token string\\\">\\\"disabled\\\"</span><span class=\\\"token punctuation\\\">)</span>\\n               Log Level: info\\n                   Mlock: supported: false, enabled: <span class=\\\"token boolean\\\">false</span>\\n           Recovery Mode: <span class=\\\"token boolean\\\">false</span>\\n                 Storage: inmem\\n                 Version: Vault v1.12.3, built <span class=\\\"token number\\\">2023</span>-02-02T09:07:27Z\\n             Version Sha: 209b3dd99fe8ca320340d08c70cff5f620261f9b\\n\\n<span class=\\\"token operator\\\">==</span><span class=\\\"token operator\\\">&gt;</span> Vault server started<span class=\\\"token operator\\\">!</span> Log data will stream <span class=\\\"token keyword\\\">in</span> below:\\n\\n<span class=\\\"token punctuation\\\">..</span>.\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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
