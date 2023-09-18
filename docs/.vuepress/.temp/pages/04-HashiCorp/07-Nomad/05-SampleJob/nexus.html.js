export const data = JSON.parse("{\"key\":\"v-e1997fdc\",\"path\":\"/04-HashiCorp/07-Nomad/05-SampleJob/nexus.html\",\"title\":\"Nexus\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Nomad Sample\",\"tag\":[\"Nomad\",\"Sample\",\"Job\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/07-Nomad/05-SampleJob/nexus.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Nexus\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Nomad Sample\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Nomad\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Sample\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Job\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Nexus\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[],\"git\":{},\"readingTime\":{\"minutes\":0.16,\"words\":49},\"filePathRelative\":\"04-HashiCorp/07-Nomad/05-SampleJob/nexus.md\",\"excerpt\":\"<h1> Nexus</h1>\\n<div class=\\\"language-hcl line-numbers-mode\\\" data-ext=\\\"hcl\\\"><pre class=\\\"language-hcl\\\"><code>job <span class=\\\"token string\\\">\\\"nexus\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token property\\\">datacenters</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"dc1\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n\\n  group <span class=\\\"token string\\\">\\\"nexus\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token property\\\">count</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">1</span>\\n\\n    <span class=\\\"token keyword\\\">network</span> <span class=\\\"token punctuation\\\">{</span>\\n      port <span class=\\\"token string\\\">\\\"http\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token property\\\">to</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">8081</span>\\n        <span class=\\\"token property\\\">static</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">8081</span>\\n      <span class=\\\"token punctuation\\\">}</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n\\n    task <span class=\\\"token string\\\">\\\"nexus\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token property\\\">driver</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"docker\\\"</span>\\n\\n      <span class=\\\"token keyword\\\">config</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token property\\\">image</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"sonatype/nexus3\\\"</span>\\n        <span class=\\\"token property\\\">ports</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"http\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n      <span class=\\\"token punctuation\\\">}</span>\\n      \\n      <span class=\\\"token keyword\\\">env</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token property\\\">INSTALL4J_ADD_VM_PARAMS</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"-Xms2703m -Xmx2703m -XX:MaxDirectMemorySize=2703m -Djava.util.prefs.userRoot=/some-other-dir\\\"</span>  \\n      <span class=\\\"token punctuation\\\">}</span>\\n      \\n      <span class=\\\"token keyword\\\">resources</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token property\\\">cpu</span>    <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">1000</span>\\n        <span class=\\\"token property\\\">memory</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">2703</span>\\n      <span class=\\\"token punctuation\\\">}</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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
