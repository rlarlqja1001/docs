export const data = JSON.parse("{\"key\":\"v-a9190018\",\"path\":\"/03-PublicCloud/\",\"title\":\"Public Cloud\",\"lang\":\"ko-KR\",\"frontmatter\":{\"tag\":[\"Cloud\"],\"headerDepth\":0,\"description\":\"Public Cloud Recent pages {{ page.title }} [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/03-PublicCloud/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Public Cloud\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Public Cloud Recent pages {{ page.title }} [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Cloud\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Public Cloud\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Recent pages\",\"slug\":\"recent-pages\",\"link\":\"#recent-pages\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":0.2,\"words\":59},\"filePathRelative\":\"03-PublicCloud/README.md\",\"excerpt\":\"<h1> Public Cloud</h1>\\n<h2> Recent pages</h2>\\n<ul>\\n  <li v-for=\\\"page in pages\\\" :key=\\\"page.key\\\">\\n    <a :to=\\\"page.path\\\" href=\\\"undefined\\\" target=\\\"blank\\\">{{ page.title }}</a>\\n    <span v-if=\\\"page.frontmatter.date\\\">\\n      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\\n    </span>\\n  </li>\\n</ul>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"},\"autoDesc\":true}")

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
