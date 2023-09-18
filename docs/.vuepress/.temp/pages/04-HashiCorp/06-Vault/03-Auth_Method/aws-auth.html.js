export const data = JSON.parse("{\"key\":\"v-c8dc156c\",\"path\":\"/04-HashiCorp/06-Vault/03-Auth_Method/aws-auth.html\",\"title\":\"AWS Auth Method\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"AWS Auth Method 설명 및 구성 방법 안내\",\"tag\":[\"vault auth\",\"AWS\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/06-Vault/03-Auth_Method/aws-auth.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"AWS Auth Method\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"AWS Auth Method 설명 및 구성 방법 안내\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vault auth\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"AWS\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"AWS Auth Method\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"1. 인증 워크플로\",\"slug\":\"_1-인증-워크플로\",\"link\":\"#_1-인증-워크플로\",\"children\":[{\"level\":3,\"title\":\"iam 인증 방식\",\"slug\":\"iam-인증-방식\",\"link\":\"#iam-인증-방식\",\"children\":[]},{\"level\":3,\"title\":\"ec2 인증 방식\",\"slug\":\"ec2-인증-방식\",\"link\":\"#ec2-인증-방식\",\"children\":[]}]},{\"level\":2,\"title\":\"2. Vault의 AWS auth method 인증에 필요한 권장 IAM Policy\",\"slug\":\"_2-vault의-aws-auth-method-인증에-필요한-권장-iam-policy\",\"link\":\"#_2-vault의-aws-auth-method-인증에-필요한-권장-iam-policy\",\"children\":[]},{\"level\":2,\"title\":\"3. AWS 외부에서 구성\",\"slug\":\"_3-aws-외부에서-구성\",\"link\":\"#_3-aws-외부에서-구성\",\"children\":[{\"level\":3,\"title\":\"aws auth method 활성화\",\"slug\":\"aws-auth-method-활성화\",\"link\":\"#aws-auth-method-활성화\",\"children\":[]},{\"level\":3,\"title\":\"활성화된 auth method의 구성\",\"slug\":\"활성화된-auth-method의-구성\",\"link\":\"#활성화된-auth-method의-구성\",\"children\":[]},{\"level\":3,\"title\":\"ec2 role 구성 및 로그인\",\"slug\":\"ec2-role-구성-및-로그인\",\"link\":\"#ec2-role-구성-및-로그인\",\"children\":[]},{\"level\":3,\"title\":\"iam role 구성 및 로그인\",\"slug\":\"iam-role-구성-및-로그인\",\"link\":\"#iam-role-구성-및-로그인\",\"children\":[]}]},{\"level\":2,\"title\":\"4. AWS 내부에서 구성\",\"slug\":\"_4-aws-내부에서-구성\",\"link\":\"#_4-aws-내부에서-구성\",\"children\":[{\"level\":3,\"title\":\"Terraform Sample\",\"slug\":\"terraform-sample\",\"link\":\"#terraform-sample\",\"children\":[]},{\"level\":3,\"title\":\"Vault Server 실행\",\"slug\":\"vault-server-실행\",\"link\":\"#vault-server-실행\",\"children\":[]},{\"level\":3,\"title\":\"Client에서 Auth 구성 및 테스트\",\"slug\":\"client에서-auth-구성-및-테스트\",\"link\":\"#client에서-auth-구성-및-테스트\",\"children\":[]}]}],\"git\":{},\"readingTime\":{\"minutes\":4.49,\"words\":1346},\"filePathRelative\":\"04-HashiCorp/06-Vault/03-Auth_Method/aws-auth.md\",\"excerpt\":\"<h1> AWS Auth Method</h1>\\n<blockquote>\\n<p><a href=\\\"https://developer.hashicorp.com/vault/docs/auth/aws\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://developer.hashicorp.com/vault/docs/auth/aws</a></p>\\n<p><a href=\\\"https://developer.hashicorp.com/vault/api-docs/auth/aws\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://developer.hashicorp.com/vault/api-docs/auth/aws</a></p>\\n<p><a href=\\\"https://blog.gruntwork.io/a-guide-to-automating-hashicorp-vault-3-authenticating-with-an-iam-user-or-role-a3203a3ee088\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">https://blog.gruntwork.io/a-guide-to-automating-hashicorp-vault-3-authenticating-with-an-iam-user-or-role-a3203a3ee088</a></p>\\n</blockquote>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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
