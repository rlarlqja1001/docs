export const data = JSON.parse("{\"key\":\"v-3a9b93c5\",\"path\":\"/04-HashiCorp/06-Vault/02-Secret_Engine/transit.html\",\"title\":\"Transit\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Vault Transit\",\"tag\":[\"vault\",\"transit\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/06-Vault/02-Secret_Engine/transit.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Transit\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Vault Transit\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vault\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"transit\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Transit\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Vault구성 (Option)\",\"slug\":\"vault구성-option\",\"link\":\"#vault구성-option\",\"children\":[{\"level\":3,\"title\":\"정책 및 사용자 구성\",\"slug\":\"정책-및-사용자-구성\",\"link\":\"#정책-및-사용자-구성\",\"children\":[]},{\"level\":3,\"title\":\"user/pass 생성\",\"slug\":\"user-pass-생성\",\"link\":\"#user-pass-생성\",\"children\":[]},{\"level\":3,\"title\":\"transit-admin 로그인\",\"slug\":\"transit-admin-로그인\",\"link\":\"#transit-admin-로그인\",\"children\":[]}]},{\"level\":2,\"title\":\"Transit Secret Engine\",\"slug\":\"transit-secret-engine\",\"link\":\"#transit-secret-engine\",\"children\":[{\"level\":3,\"title\":\"Transit Secret Engine 활성화\",\"slug\":\"transit-secret-engine-활성화\",\"link\":\"#transit-secret-engine-활성화\",\"children\":[]},{\"level\":3,\"title\":\"암호화 키링 생성\",\"slug\":\"암호화-키링-생성\",\"link\":\"#암호화-키링-생성\",\"children\":[]},{\"level\":3,\"title\":\"암호화 (Transit-message User)\",\"slug\":\"암호화-transit-message-user\",\"link\":\"#암호화-transit-message-user\",\"children\":[]},{\"level\":3,\"title\":\"해독 (Transit-message User)\",\"slug\":\"해독-transit-message-user\",\"link\":\"#해독-transit-message-user\",\"children\":[]},{\"level\":3,\"title\":\"암호화 키링 순환\",\"slug\":\"암호화-키링-순환\",\"link\":\"#암호화-키링-순환\",\"children\":[]},{\"level\":3,\"title\":\"업데이트된 키링으로 암호화\",\"slug\":\"업데이트된-키링으로-암호화\",\"link\":\"#업데이트된-키링으로-암호화\",\"children\":[]},{\"level\":3,\"title\":\"업데이트된 키링으로 재 암호화\",\"slug\":\"업데이트된-키링으로-재-암호화\",\"link\":\"#업데이트된-키링으로-재-암호화\",\"children\":[]},{\"level\":3,\"title\":\"기존 키링 파기\",\"slug\":\"기존-키링-파기\",\"link\":\"#기존-키링-파기\",\"children\":[]},{\"level\":3,\"title\":\"기존 암호화 데이터 복호화 → 실패\",\"slug\":\"기존-암호화-데이터-복호화-→-실패\",\"link\":\"#기존-암호화-데이터-복호화-→-실패\",\"children\":[]}]}],\"git\":{},\"readingTime\":{\"minutes\":1.44,\"words\":433},\"filePathRelative\":\"04-HashiCorp/06-Vault/02-Secret_Engine/transit.md\",\"excerpt\":\"<h1> Transit</h1>\\n<iframe width=\\\"560\\\" height=\\\"315\\\" src=\\\"https://www.youtube.com/embed/LkyperCGEDE\\\" title=\\\"YouTube video player\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\\\" allowfullscreen=\\\"\\\"></iframe>\\n<h2> Vault구성 (Option)</h2>\\n<p>시크릿 엔진 활성화</p>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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
