export const data = JSON.parse("{\"key\":\"v-3257f5b8\",\"path\":\"/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/05-terraform-state.html\",\"title\":\"05. 테라폼 상태파일(State)\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Naver Cloud Platform에서의 Terraform 실습\",\"tag\":[\"ncloud\",\"ncp\",\"terraform\",\"workshop\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/05-terraform-state.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"05. 테라폼 상태파일(State)\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Naver Cloud Platform에서의 Terraform 실습\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"ncloud\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"ncp\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"terraform\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"workshop\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"05. 테라폼 상태파일(State)\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"Terraform State\",\"slug\":\"terraform-state\",\"link\":\"#terraform-state\",\"children\":[]},{\"level\":2,\"title\":\"Terraform Refresh\",\"slug\":\"terraform-refresh\",\"link\":\"#terraform-refresh\",\"children\":[]},{\"level\":2,\"title\":\"기존 인프라 변경\",\"slug\":\"기존-인프라-변경\",\"link\":\"#기존-인프라-변경\",\"children\":[]},{\"level\":2,\"title\":\"😱 Terraform State Quiz :\",\"slug\":\"terraform-state-quiz\",\"link\":\"#terraform-state-quiz\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":0.46,\"words\":139},\"filePathRelative\":\"03-PublicCloud/NCP/09-Terraform-Workshop/01-intro_to_terraform_on_ncp/05-terraform-state.md\",\"excerpt\":\"<h1> 05. 테라폼 상태파일(State)</h1>\\n<h2> Terraform State</h2>\\n<p>Terraform은 <sub>stateful</sub> 애플리케이션입니다. 즉, state file 내부에서 빌드 한 모든 내용을 추적합니다.</p>\\n<p>앞서의 실습에서 반복된 <code>Apply</code> 작업 간에 Workspace 디렉토리에 나타난 <code>terraform.tfstate</code> 및 <code>terraform.tfstate.backup</code> 파일을 보셨을 것입니다.</p>\\n<p>상태 파일은 Terraform이 알고있는 모든 것에 대한 기록 소스입니다.</p>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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
