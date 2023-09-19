export const data = JSON.parse("{\"key\":\"v-481bd5c0\",\"path\":\"/04-HashiCorp/04-Consul/02-Configuration/acl-sample.html\",\"title\":\"\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Consul Acl Policy Sample\",\"tag\":[\"Consul\",\"Acl\",\"Policy\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/04-Consul/02-Configuration/acl-sample.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Consul Acl Policy Sample\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Consul\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Acl\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Policy\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Consul ACL Policy sample\",\"slug\":\"consul-acl-policy-sample\",\"link\":\"#consul-acl-policy-sample\",\"children\":[]},{\"level\":2,\"title\":\"Consul이 Vault의 Storage로 되어야 할 경우\",\"slug\":\"consul이-vault의-storage로-되어야-할-경우\",\"link\":\"#consul이-vault의-storage로-되어야-할-경우\",\"children\":[]},{\"level\":2,\"title\":\"Consul Dns query가 필요할 경우\",\"slug\":\"consul-dns-query가-필요할-경우\",\"link\":\"#consul-dns-query가-필요할-경우\",\"children\":[]},{\"level\":2,\"title\":\"Consul UI 접근권한이 필요할 경우\",\"slug\":\"consul-ui-접근권한이-필요할-경우\",\"link\":\"#consul-ui-접근권한이-필요할-경우\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":0.23,\"words\":69},\"filePathRelative\":\"04-HashiCorp/04-Consul/02-Configuration/acl-sample.md\",\"excerpt\":\"<h2> Consul ACL Policy sample</h2>\\n<p>Consul ACL을 활성화 할 경우 default를 deny로 할 지 allow를 할 지 정할 수 있다.<br>\\ndeny로 할 경우에는 하나하나 policy로 tokne을 만들어서 사용해야 한다.</p>\\n<h2> Consul이 Vault의 Storage로 되어야 할 경우</h2>\\n<div class=\\\"language-text line-numbers-mode\\\" data-ext=\\\"text\\\"><pre class=\\\"language-text\\\"><code>key_prefix \\\"vault/\\\" {\\n  policy = \\\"write\\\"\\n}\\nservice \\\"vault\\\" {\\n   policy = \\\"write\\\"\\n}\\nagent_prefix \\\"\\\" {\\n   policy = \\\"read\\\"\\n}\\nsession_prefix \\\"\\\" {\\n   policy = \\\"write\\\"\\n}\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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