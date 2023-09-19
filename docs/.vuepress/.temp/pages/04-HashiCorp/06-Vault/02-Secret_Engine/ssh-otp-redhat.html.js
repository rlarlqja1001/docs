export const data = JSON.parse("{\"key\":\"v-44e6a0ee\",\"path\":\"/04-HashiCorp/06-Vault/02-Secret_Engine/ssh-otp-redhat.html\",\"title\":\"SSH OTP - RedHat 계열\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Vault SSH Rocky에 구성하는 예제\",\"tag\":[\"vault\",\"SSH\",\"OTP\",\"Rocky\",\"RHEL\",\"CentOS\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/06-Vault/02-Secret_Engine/ssh-otp-redhat.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"SSH OTP - RedHat 계열\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Vault SSH Rocky에 구성하는 예제\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vault\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"SSH\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"OTP\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Rocky\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"RHEL\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"CentOS\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"SSH OTP - RedHat 계열\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Vault설정\",\"slug\":\"vault설정\",\"link\":\"#vault설정\",\"children\":[]},{\"level\":2,\"title\":\"대상 서버 설정\",\"slug\":\"대상-서버-설정\",\"link\":\"#대상-서버-설정\",\"children\":[]},{\"level\":2,\"title\":\"테스트\",\"slug\":\"테스트\",\"link\":\"#테스트\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":1.05,\"words\":315},\"filePathRelative\":\"04-HashiCorp/06-Vault/02-Secret_Engine/ssh-otp-redhat.md\",\"excerpt\":\"<h1> SSH OTP - RedHat 계열</h1>\\n<blockquote>\\n<p><a href=\\\"https://learn.hashicorp.com/tutorials/vault/pki-engine\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://learn.hashicorp.com/tutorials/vault/pki-engine</a></p>\\n</blockquote>\\n<h2> Vault설정</h2>\\n<p>시크릿 엔진 활성화</p>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>$ vault secrets <span class=\\\"token builtin class-name\\\">enable</span> <span class=\\\"token parameter variable\\\">-path</span> <span class=\\\"token function\\\">ssh</span> <span class=\\\"token function\\\">ssh</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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