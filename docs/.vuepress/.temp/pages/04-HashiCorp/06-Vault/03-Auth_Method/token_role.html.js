export const data = JSON.parse("{\"key\":\"v-46874df4\",\"path\":\"/04-HashiCorp/06-Vault/03-Auth_Method/token_role.html\",\"title\":\"Token Role\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Token Role 생성 및 Tune 적용하여 장기 유지되는 Token 생성하기\",\"tag\":[\"vault auth\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/06-Vault/03-Auth_Method/token_role.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Token Role\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Token Role 생성 및 Tune 적용하여 장기 유지되는 Token 생성하기\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"vault auth\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Token Role\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"절차\",\"slug\":\"절차\",\"link\":\"#절차\",\"children\":[]},{\"level\":2,\"title\":\"Entity 구성 CLI 예제 (옵션)\",\"slug\":\"entity-구성-cli-예제-옵션\",\"link\":\"#entity-구성-cli-예제-옵션\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":1.18,\"words\":353},\"filePathRelative\":\"04-HashiCorp/06-Vault/03-Auth_Method/token_role.md\",\"excerpt\":\"<h1> Token Role</h1>\\n<p>별도 Auth Method를 사용하지 않고 Token으로만 사용하는 경우 Token에 대한 role을 생성하여 해당 role의 정의된 설정에 종속된 Token을 생성할 수 있음</p>\\n<ul>\\n<li>Entity가 발생하므로 Vault Client Count 절약 가능</li>\\n<li>일관된 Token 생성 가능</li>\\n<li>Token에 대한 별도 Tune(TTL 조정 등) 가능</li>\\n</ul>\\n<h2> 절차</h2>\\n<ol>\\n<li>\\n<p>UI &gt; Access &gt; Entities &gt; [create entity] : <code>100y-entity</code></p>\\n</li>\\n<li>\\n<p>entity에서 aliases 생성 : <code>100y-alias</code></p>\\n</li>\\n<li>\\n<p>role 생성 (payload.json)</p>\\n<div class=\\\"language-json line-numbers-mode\\\" data-ext=\\\"json\\\"><pre class=\\\"language-json\\\"><code><span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token property\\\">\\\"allowed_policies\\\"</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span>\\n    <span class=\\\"token string\\\">\\\"my-policy\\\"</span>\\n  <span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token property\\\">\\\"name\\\"</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token string\\\">\\\"100y\\\"</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token property\\\">\\\"orphan\\\"</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token boolean\\\">false</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token property\\\">\\\"bound_cidrs\\\"</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"127.0.0.1/32\\\"</span><span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"128.252.0.0/16\\\"</span><span class=\\\"token punctuation\\\">]</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token property\\\">\\\"renewable\\\"</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token boolean\\\">true</span><span class=\\\"token punctuation\\\">,</span>\\n  <span class=\\\"token property\\\">\\\"allowed_entity_aliases\\\"</span><span class=\\\"token operator\\\">:</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"100y-alias\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>role 적용</p>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code><span class=\\\"token function\\\">curl</span> <span class=\\\"token parameter variable\\\">-H</span> <span class=\\\"token string\\\">\\\"X-Vault-Token: hvs.QKRiVmCedA06dCSc2TptmSk1\\\"</span> <span class=\\\"token parameter variable\\\">-X</span> POST <span class=\\\"token parameter variable\\\">--data</span> @payload.json http://127.0.0.1:8200/v1/auth/token/roles/100y\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>role에 대한 사용자 정의 tune 적용(옵션)</p>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>vault auth tune -max-lease-ttl<span class=\\\"token operator\\\">=</span>876000h token/role/100y\\nvault auth tune -default-lease-ttl<span class=\\\"token operator\\\">=</span>876000h token/role/100y\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>tune 적용된 role 확인</p>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>$ vault <span class=\\\"token builtin class-name\\\">read</span> auth/token/roles/100y\\n\\nKey                         Value\\n---                         -----\\nallowed_entity_aliases      <span class=\\\"token punctuation\\\">[</span>100y-alias<span class=\\\"token punctuation\\\">]</span>\\nallowed_policies            <span class=\\\"token punctuation\\\">[</span>default<span class=\\\"token punctuation\\\">]</span>\\nallowed_policies_glob       <span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span>\\nbound_cidrs                 <span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">127.0</span>.0.1 <span class=\\\"token number\\\">128.252</span>.0.0/16<span class=\\\"token punctuation\\\">]</span>\\ndisallowed_policies         <span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span>\\ndisallowed_policies_glob    <span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span>\\nexplicit_max_ttl            0s\\nname                        100y\\norphan                      <span class=\\\"token boolean\\\">false</span>\\npath_suffix                 n/a\\nperiod                      0s\\nrenewable                   <span class=\\\"token boolean\\\">true</span>\\ntoken_bound_cidrs           <span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">127.0</span>.0.1 <span class=\\\"token number\\\">128.252</span>.0.0/16<span class=\\\"token punctuation\\\">]</span>\\ntoken_explicit_max_ttl      0s\\ntoken_no_default_policy     <span class=\\\"token boolean\\\">false</span>\\ntoken_period                0s\\ntoken_type                  default-service\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>token 생성</p>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>$ vault token create -entity-alias<span class=\\\"token operator\\\">=</span>100y-alias <span class=\\\"token parameter variable\\\">-role</span><span class=\\\"token operator\\\">=</span>100y\\nKey                  Value\\n---                  -----\\ntoken                hvs.CAESIIveQyE34VOowkCXj4InopxsQHWXu2iW00UQDDCTb-pIGh4KHGh2cy5UZGJ4MjJic1RjY1BlVGRWVHhzNFgwWW4\\ntoken_accessor       Cx6qjyUGwqPmqoPNe9tmkCiN\\ntoken_duration       876000h\\ntoken_renewable      <span class=\\\"token boolean\\\">true</span>\\ntoken_policies       <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"default\\\"</span><span class=\\\"token punctuation\\\">]</span>\\nidentity_policies    <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"default\\\"</span><span class=\\\"token punctuation\\\">]</span>\\npolicies             <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"default\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n<li>\\n<p>token이 role의 구성이 반영되었는지 확인</p>\\n<div class=\\\"language-bash line-numbers-mode\\\" data-ext=\\\"sh\\\"><pre class=\\\"language-bash\\\"><code>$ vault token lookup hvs.CAESIIveQyE34VOowkCXj4InopxsQHWXu2iW00UQDDCTb-pIGh4KHGh2cy5UZGJ4MjJic1RjY1BlVGRWVHhzNFgwWW4\\n\\nKey                            Value\\n---                            -----\\naccessor                       Cx6qjyUGwqPmqoPNe9tmkCiN\\nbound_cidrs                    <span class=\\\"token punctuation\\\">[</span><span class=\\\"token number\\\">127.0</span>.0.1 <span class=\\\"token number\\\">128.252</span>.0.0/16<span class=\\\"token punctuation\\\">]</span>\\ncreation_time                  <span class=\\\"token number\\\">1651059486</span>\\ncreation_ttl                   876000h\\ndisplay_name                   token\\nentity_id                      53fc4716-fc0d-db34-14b8-ab4258f89fb1\\nexpire_time                    <span class=\\\"token number\\\">2122</span>-04-03T20:38:06.73198+09:00\\nexplicit_max_ttl               0s\\nexternal_namespace_policies    map<span class=\\\"token punctuation\\\">[</span><span class=\\\"token punctuation\\\">]</span>\\n<span class=\\\"token function\\\">id</span>                             hvs.CAESIIveQyE34VOowkCXj4InopxsQHWXu2iW00UQDDCTb-pIGh4KHGh2cy5UZGJ4MjJic1RjY1BlVGRWVHhzNFgwWW4\\nidentity_policies              <span class=\\\"token punctuation\\\">[</span>default<span class=\\\"token punctuation\\\">]</span>\\nissue_time                     <span class=\\\"token number\\\">2022</span>-04-27T20:38:06.731984+09:00\\nmeta                           <span class=\\\"token operator\\\">&lt;</span>nil<span class=\\\"token operator\\\">&gt;</span>\\nnum_uses                       <span class=\\\"token number\\\">0</span>\\norphan                         <span class=\\\"token boolean\\\">false</span>\\npath                           auth/token/create/100y\\npolicies                       <span class=\\\"token punctuation\\\">[</span>default<span class=\\\"token punctuation\\\">]</span>\\nrenewable                      <span class=\\\"token boolean\\\">true</span>\\nrole                           100y\\nttl                            875999h59m3s\\n<span class=\\\"token builtin class-name\\\">type</span>                           <span class=\\\"token function\\\">service</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div></li>\\n</ol>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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