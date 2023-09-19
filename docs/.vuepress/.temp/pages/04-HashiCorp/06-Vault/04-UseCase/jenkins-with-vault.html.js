export const data = JSON.parse("{\"key\":\"v-66611080\",\"path\":\"/04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.html\",\"title\":\"jenkins with vault\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Vault를 활용하여 jenkins에 kv secret 활용\",\"tag\":[\"vault\",\"jenkins\",\"screct\",\"kv\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"jenkins with vault\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Vault를 활용하여 jenkins에 kv secret 활용\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vault\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"jenkins\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"screct\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"kv\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"jenkins with vault\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"v1 pipe line\",\"slug\":\"v1-pipe-line\",\"link\":\"#v1-pipe-line\",\"children\":[]},{\"level\":2,\"title\":\"v2 pipe line\",\"slug\":\"v2-pipe-line\",\"link\":\"#v2-pipe-line\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":0.86,\"words\":259},\"filePathRelative\":\"04-HashiCorp/06-Vault/04-UseCase/jenkins-with-vault.md\",\"excerpt\":\"<h1> jenkins with vault</h1>\\n<p>jenkins와 vault를 연동하여 pipe line에서 kv 사용하기<br>\\n이 예제는 진짜 kv까지만 테스트함</p>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token comment\\\"># approle 엔진 생성</span>\\n$ vault auth <span class=\\\"token builtin class-name\\\">enable</span> approle\\n<span class=\\\"token comment\\\"># kv2 enable</span>\\n$ vault secrets <span class=\\\"token builtin class-name\\\">enable</span> kv-v2\\n<span class=\\\"token comment\\\"># kv enable</span>\\n$ vault secrets <span class=\\\"token builtin class-name\\\">enable</span> <span class=\\\"token parameter variable\\\">-path</span><span class=\\\"token operator\\\">=</span>kv kv\\n\\n<span class=\\\"token comment\\\"># jenkins 정책으로 될 파일 생성 v1, v2</span>\\n$ <span class=\\\"token function\\\">tee</span> jenkins-policy.hcl <span class=\\\"token operator\\\">&lt;&lt;</span><span class=\\\"token string\\\">EOF\\npath \\\"kv/secret/data/jenkins/*\\\" {\\n  capabilities = [ \\\"read\\\" ]\\n}\\npath \\\"kv-v2/data/jenkins/*\\\" {\\n  capabilities = [ \\\"read\\\" ]\\n}\\nEOF</span>\\n\\n<span class=\\\"token comment\\\">#jenkins 정책 생성</span>\\nvault policy <span class=\\\"token function\\\">write</span> jenkins jenkins-policy.hcl\\n\\n<span class=\\\"token comment\\\">#approle 생성 및 정책 jenkins에 연결</span>\\nvault <span class=\\\"token function\\\">write</span> auth/approle/role/jenkins <span class=\\\"token assign-left variable\\\">token_policies</span><span class=\\\"token operator\\\">=</span><span class=\\\"token string\\\">\\\"jenkins\\\"</span> <span class=\\\"token punctuation\\\">\\\\</span>\\n<span class=\\\"token assign-left variable\\\">token_ttl</span><span class=\\\"token operator\\\">=</span>1h <span class=\\\"token assign-left variable\\\">token_max_ttl</span><span class=\\\"token operator\\\">=</span>4h\\n \\n<span class=\\\"token comment\\\">#Role id, secret id 가져오기</span>\\n\\nvault <span class=\\\"token builtin class-name\\\">read</span> auth/approle/role/jenkins/role-id\\nvault <span class=\\\"token function\\\">write</span> <span class=\\\"token parameter variable\\\">-f</span> auth/approle/role/jenkins/secret-id\\n\\n\\nvault secrets <span class=\\\"token builtin class-name\\\">enable</span> <span class=\\\"token parameter variable\\\">-path</span><span class=\\\"token operator\\\">=</span>kv kv\\n$ <span class=\\\"token function\\\">tee</span> gitlab.json <span class=\\\"token operator\\\">&lt;&lt;</span><span class=\\\"token string\\\">EOF\\n{\\n  \\\"gitlabIP\\\": \\\"172.21.2.52\\\",\\n  \\\"api-key\\\": \\\"RjLAbbWsSAzXoyBvo2qL\\\"\\n}\\nEOF</span>\\n\\n<span class=\\\"token function\\\">tee</span> gitlab-v2.json <span class=\\\"token operator\\\">&lt;&lt;</span><span class=\\\"token string\\\">EOF\\n{\\n  \\\"gitlabIP\\\": \\\"172.21.2.52\\\",\\n  \\\"api-key\\\": \\\"RjLAbbWsSAzXoyBvo2qL\\\",\\n  \\\"version\\\": \\\"v2\\\"\\n}\\nEOF</span>\\n\\nvault kv put kv/secret/data/jenkins/gitlab @gitlab.json\\nvault kv put kv-v2/jenkins/gitlab @gitlab-v2.json\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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