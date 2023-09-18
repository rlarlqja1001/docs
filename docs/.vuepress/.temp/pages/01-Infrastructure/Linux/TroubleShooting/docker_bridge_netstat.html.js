export const data = JSON.parse("{\"key\":\"v-be9361f0\",\"path\":\"/01-Infrastructure/Linux/TroubleShooting/docker_bridge_netstat.html\",\"title\":\"docker나 nomad를 이용하여 bridge모드로 기동된 컨테이너의 port 체크\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"docker bridge mode netstat\",\"tag\":[\"linux\",\"docker\",\"bridge\",\"netstat\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/01-Infrastructure/Linux/TroubleShooting/docker_bridge_netstat.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"docker나 nomad를 이용하여 bridge모드로 기동된 컨테이너의 port 체크\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"docker bridge mode netstat\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"linux\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"docker\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"bridge\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"netstat\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"docker나 nomad를 이용하여 bridge모드로 기동된 컨테이너의 port 체크\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":3,\"title\":\"먼저 찾으려는 컨테이너의 port를 확인한다. (nomad로 배포되어 있는 컨테이너임)\",\"slug\":\"먼저-찾으려는-컨테이너의-port를-확인한다-nomad로-배포되어-있는-컨테이너임\",\"link\":\"#먼저-찾으려는-컨테이너의-port를-확인한다-nomad로-배포되어-있는-컨테이너임\",\"children\":[]},{\"level\":3,\"title\":\"먼저 일반적으로 사용하는 netstat에는 grafana 컨테이너의 http port인 25546이 확인되지 않는다.\",\"slug\":\"먼저-일반적으로-사용하는-netstat에는-grafana-컨테이너의-http-port인-25546이-확인되지-않는다\",\"link\":\"#먼저-일반적으로-사용하는-netstat에는-grafana-컨테이너의-http-port인-25546이-확인되지-않는다\",\"children\":[]},{\"level\":3,\"title\":\"기동 중인 docker에서 inspect로 pid를 검색해오고 그 정보로 netstat를 다시하면 이제 LISTEN된 정보를 얻어올 수 있다.\",\"slug\":\"기동-중인-docker에서-inspect로-pid를-검색해오고-그-정보로-netstat를-다시하면-이제-listen된-정보를-얻어올-수-있다\",\"link\":\"#기동-중인-docker에서-inspect로-pid를-검색해오고-그-정보로-netstat를-다시하면-이제-listen된-정보를-얻어올-수-있다\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":1.06,\"words\":317},\"filePathRelative\":\"01-Infrastructure/Linux/TroubleShooting/docker_bridge_netstat.md\",\"excerpt\":\"<h1> docker나 nomad를 이용하여 bridge모드로 기동된 컨테이너의 port 체크</h1>\\n<ul>\\n<li>단순 netstat만으로 bridge모드로 기동된 docker의 port를 체크할 수 없다</li>\\n<li>그래서 아래와 같은 절차가 필요하다.</li>\\n</ul>\\n<h3> 먼저 찾으려는 컨테이너의 port를 확인한다. (nomad로 배포되어 있는 컨테이너임)</h3>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>nomad alloc status d78d5b32\\nID                  <span class=\\\"token operator\\\">=</span> d78d5b32-00c3-5468-284a-8c201058c53a\\nEval ID             <span class=\\\"token operator\\\">=</span> c6c9a1d9\\nName                <span class=\\\"token operator\\\">=</span> 08_grafana.08_grafana<span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">0</span><span class=\\\"token punctuation\\\">]</span>\\nNode ID             <span class=\\\"token operator\\\">=</span> e11b7729\\nNode Name           <span class=\\\"token operator\\\">=</span> slave1\\nJob ID              <span class=\\\"token operator\\\">=</span> 08_grafana\\nJob Version         <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">0</span>\\nClient Status       <span class=\\\"token operator\\\">=</span> running\\nClient Description  <span class=\\\"token operator\\\">=</span> Tasks are running\\nDesired Status      <span class=\\\"token operator\\\">=</span> run\\nDesired Description <span class=\\\"token operator\\\">=</span> <span class=\\\"token operator\\\">&lt;</span>none<span class=\\\"token operator\\\">&gt;</span>\\nCreated             <span class=\\\"token operator\\\">=</span> 18h42m ago\\nModified            <span class=\\\"token operator\\\">=</span> 2h36m ago\\n\\nAllocation Addresses <span class=\\\"token punctuation\\\">(</span>mode <span class=\\\"token operator\\\">=</span> <span class=\\\"token string\\\">\\\"bridge\\\"</span><span class=\\\"token punctuation\\\">)</span>\\nLabel                   Dynamic  Address\\n*http                   <span class=\\\"token function\\\">yes</span>      <span class=\\\"token number\\\">10.0</span>.0.161:25546\\n*connect-proxy-grafana  <span class=\\\"token function\\\">yes</span>      <span class=\\\"token number\\\">10.0</span>.0.161:29382 -<span class=\\\"token operator\\\">&gt;</span> <span class=\\\"token number\\\">29382</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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
