export const data = JSON.parse("{\"key\":\"v-568d1ef9\",\"path\":\"/05-Software/\",\"title\":\"Software\",\"lang\":\"ko-KR\",\"frontmatter\":{\"tag\":[\"Software\"],\"headerDepth\":0,\"description\":\"Software Recent pages {{ page.title }} [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/05-Software/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Software\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Software Recent pages {{ page.title }} [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Software\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Software\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Recent pages\",\"slug\":\"recent-pages\",\"link\":\"#recent-pages\",\"children\":[]},{\"level\":2,\"title\":\"Jenkins\",\"slug\":\"jenkins\",\"link\":\"#jenkins\",\"children\":[]},{\"level\":2,\"title\":\"Tomcat\",\"slug\":\"tomcat\",\"link\":\"#tomcat\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":0.21,\"words\":62},\"filePathRelative\":\"05-Software/README.md\",\"excerpt\":\"<h1> Software</h1>\\n<h2> Recent pages</h2>\\n<ul>\\n  <li v-for=\\\"page in pages\\\" :key=\\\"page.key\\\">\\n    <a :to=\\\"page.path\\\" href=\\\"undefined\\\" target=\\\"blank\\\">{{ page.title }}</a>\\n    <span v-if=\\\"page.frontmatter.date\\\">\\n      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\\n    </span>\\n  </li>\\n</ul>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"},\"autoDesc\":true}")

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