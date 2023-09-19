export const data = JSON.parse("{\"key\":\"v-6005f24c\",\"path\":\"/04-HashiCorp/05-Boundary/01-Install/OnConsulNomad.html\",\"title\":\"Boundary Install on Consul-Nomad\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Boundary Install\",\"tag\":[\"Boundary\",\"Install\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/05-Boundary/01-Install/OnConsulNomad.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Boundary Install on Consul-Nomad\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Boundary Install\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Boundary\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Install\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Boundary Install on Consul-Nomad\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1. Nomad namespace create\",\"slug\":\"_1-nomad-namespace-create\",\"link\":\"#_1-nomad-namespace-create\",\"children\":[]},{\"level\":2,\"title\":\"2. Postgresql setup\",\"slug\":\"_2-postgresql-setup\",\"link\":\"#_2-postgresql-setup\",\"children\":[{\"level\":3,\"title\":\"2.1 Postgresql job run\",\"slug\":\"_2-1-postgresql-job-run\",\"link\":\"#_2-1-postgresql-job-run\",\"children\":[]},{\"level\":3,\"title\":\"2.2 Posgresql init\",\"slug\":\"_2-2-posgresql-init\",\"link\":\"#_2-2-posgresql-init\",\"children\":[]}]},{\"level\":2,\"title\":\"3. Boundary database init\",\"slug\":\"_3-boundary-database-init\",\"link\":\"#_3-boundary-database-init\",\"children\":[{\"level\":3,\"title\":\"3.1 Create config file\",\"slug\":\"_3-1-create-config-file\",\"link\":\"#_3-1-create-config-file\",\"children\":[]},{\"level\":3,\"title\":\"3.2 Init database\",\"slug\":\"_3-2-init-database\",\"link\":\"#_3-2-init-database\",\"children\":[]}]},{\"level\":2,\"title\":\"4. Boundary Job\",\"slug\":\"_4-boundary-job\",\"link\":\"#_4-boundary-job\",\"children\":[{\"level\":3,\"title\":\"4.1 Boundary Controller Job\",\"slug\":\"_4-1-boundary-controller-job\",\"link\":\"#_4-1-boundary-controller-job\",\"children\":[]},{\"level\":3,\"title\":\"4.2 Boundary worker Job\",\"slug\":\"_4-2-boundary-worker-job\",\"link\":\"#_4-2-boundary-worker-job\",\"children\":[]}]}],\"git\":{},\"readingTime\":{\"minutes\":2.29,\"words\":688},\"filePathRelative\":\"04-HashiCorp/05-Boundary/01-Install/OnConsulNomad.md\",\"excerpt\":\"<h1> Boundary Install on Consul-Nomad</h1>\\n<h2> 1. Nomad namespace create</h2>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>nomad namespace apply <span class=\\\"token parameter variable\\\">-description</span> <span class=\\\"token string\\\">\\\"Boundary\\\"</span> boundary\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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