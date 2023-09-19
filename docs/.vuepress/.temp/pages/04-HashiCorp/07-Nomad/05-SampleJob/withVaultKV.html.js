export const data = JSON.parse("{\"key\":\"v-405f299a\",\"path\":\"/04-HashiCorp/07-Nomad/05-SampleJob/withVaultKV.html\",\"title\":\"vaultKV\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Nomad Sample\",\"tag\":[\"Nomad\",\"Sample\",\"Job\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/07-Nomad/05-SampleJob/withVaultKV.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"vaultKV\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Nomad Sample\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Nomad\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Sample\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Job\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"vaultKV\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"nomad job에서 vault의 secret에서 kv사용하기\",\"slug\":\"nomad-job에서-vault의-secret에서-kv사용하기\",\"link\":\"#nomad-job에서-vault의-secret에서-kv사용하기\",\"children\":[]},{\"level\":2,\"title\":\"nomad hcl 설정\",\"slug\":\"nomad-hcl-설정\",\"link\":\"#nomad-hcl-설정\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":0.86,\"words\":258},\"filePathRelative\":\"04-HashiCorp/07-Nomad/05-SampleJob/withVaultKV.md\",\"excerpt\":\"<h1> vaultKV</h1>\\n<h2> nomad job에서 vault의 secret에서 kv사용하기</h2>\\n<ul>\\n<li><a href=\\\"/04-HashiCorp/07-Nomad/02-Config/integrateVault.html\\\" target=\\\"blank\\\">Nomad 설정 링크</a></li>\\n</ul>\\n<h2> nomad hcl 설정</h2>\\n<div class=\\\"language-hcl line-numbers-mode\\\" data-ext=\\\"hcl\\\"><pre class=\\\"language-hcl\\\"><code>job <span class=\\\"token string\\\">\\\"logs\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token property\\\">datacenters</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"dc1\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n\\n    <span class=\\\"token keyword\\\">constraint</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token property\\\">attribute</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"<span class=\\\"token interpolation\\\"><span class=\\\"token punctuation\\\">$</span><span class=\\\"token punctuation\\\">{</span>attr<span class=\\\"token punctuation\\\">.</span>kernel<span class=\\\"token punctuation\\\">.</span>name<span class=\\\"token punctuation\\\">}</span></span>\\\"</span>\\n        <span class=\\\"token property\\\">value</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"linux\\\"</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n\\n    <span class=\\\"token keyword\\\">update</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token property\\\">stagger</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"10s\\\"</span>\\n        <span class=\\\"token property\\\">max_parallel</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">1</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n\\n    group <span class=\\\"token string\\\">\\\"elk\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token property\\\">count</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">1</span>\\n\\n        <span class=\\\"token keyword\\\">restart</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token property\\\">attempts</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">2</span>\\n            <span class=\\\"token property\\\">interval</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"1m\\\"</span>\\n            <span class=\\\"token property\\\">delay</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"15s\\\"</span>\\n            <span class=\\\"token property\\\">mode</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"delay\\\"</span>\\n        <span class=\\\"token punctuation\\\">}</span>\\n        <span class=\\\"token keyword\\\">network</span> <span class=\\\"token punctuation\\\">{</span>\\n          port <span class=\\\"token string\\\">\\\"elk\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token property\\\">to</span>     <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">9200</span>\\n            <span class=\\\"token property\\\">static</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">9200</span>\\n          <span class=\\\"token punctuation\\\">}</span>\\n          port <span class=\\\"token string\\\">\\\"kibana\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token property\\\">to</span>     <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">5601</span>\\n          <span class=\\\"token punctuation\\\">}</span>\\n          port <span class=\\\"token string\\\">\\\"logstash\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token property\\\">to</span>     <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">5000</span>\\n          <span class=\\\"token punctuation\\\">}</span>\\n        <span class=\\\"token punctuation\\\">}</span>\\n\\n        task <span class=\\\"token string\\\">\\\"elasticsearch\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token property\\\">driver</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"docker\\\"</span>\\n\\n            <span class=\\\"token keyword\\\">vault</span> <span class=\\\"token punctuation\\\">{</span>\\n              <span class=\\\"token property\\\">policies</span>  <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"admin\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n              <span class=\\\"token property\\\">change_mode</span>   <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"signal\\\"</span>\\n              <span class=\\\"token property\\\">change_signal</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"SIGINT\\\"</span>\\n            <span class=\\\"token punctuation\\\">}</span>\\n\\n            <span class=\\\"token keyword\\\">config</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token property\\\">image</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"elasticsearch:7.16.2\\\"</span>\\n                <span class=\\\"token property\\\">ports</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"elk\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n                <span class=\\\"token property\\\">volumes</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span>\\n          <span class=\\\"token string\\\">\\\"local/elasticsearch.yml:/usr/share/elasticsearch/config/elasticsearch.yml\\\"</span>,\\n        <span class=\\\"token punctuation\\\">]</span>\\n      <span class=\\\"token punctuation\\\">}</span>\\n      <span class=\\\"token keyword\\\">template</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token property\\\">data</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token heredoc string\\\">&lt;&lt;EOF\\ncluster.name: \\\"my-cluster\\\"\\nnetwork.host: 0.0.0.0\\ndiscovery.type: single-node\\ndiscovery.seed_hosts: [\\\"127.0.0.1\\\"]\\nxpack.security.enabled: true\\nxpack.license.self_generated.type: trial\\nxpack.monitoring.collection.enabled: true\\nEOF</span>\\n        <span class=\\\"token property\\\">destination</span>   <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"local/elasticsearch.yml\\\"</span>\\n        <span class=\\\"token property\\\">change_mode</span>   <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"signal\\\"</span>\\n        <span class=\\\"token property\\\">change_signal</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"SIGHUP\\\"</span>\\n      <span class=\\\"token punctuation\\\">}</span>\\n      <span class=\\\"token keyword\\\">template</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token property\\\">data</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token heredoc string\\\">&lt;&lt;EOH\\nELASTIC_PASSWORD=\\\"{{with secret \\\"secret/elastic\\\"}}{{.Data.passwd}}{{end}}\\\"\\nEOH</span>\\n\\n  <span class=\\\"token property\\\">destination</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"secrets/file.env\\\"</span>\\n  <span class=\\\"token property\\\">env</span>         <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token boolean\\\">true</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n            <span class=\\\"token keyword\\\">service</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token property\\\">name</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"<span class=\\\"token interpolation\\\"><span class=\\\"token punctuation\\\">$</span><span class=\\\"token punctuation\\\">{</span>TASKGROUP<span class=\\\"token punctuation\\\">}</span></span>-elasticsearch\\\"</span>\\n                <span class=\\\"token property\\\">port</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"elk\\\"</span>\\n            <span class=\\\"token punctuation\\\">}</span>\\n\\n            <span class=\\\"token keyword\\\">resources</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token property\\\">cpu</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">500</span>\\n                <span class=\\\"token property\\\">memory</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">1048</span>\\n            <span class=\\\"token punctuation\\\">}</span>\\n        <span class=\\\"token punctuation\\\">}</span>\\n\\n        task <span class=\\\"token string\\\">\\\"kibana\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token property\\\">driver</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"docker\\\"</span>\\n\\n            <span class=\\\"token keyword\\\">vault</span> <span class=\\\"token punctuation\\\">{</span>\\n              <span class=\\\"token property\\\">policies</span>  <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"admin\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n              <span class=\\\"token property\\\">change_mode</span>   <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"signal\\\"</span>\\n              <span class=\\\"token property\\\">change_signal</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"SIGINT\\\"</span>\\n            <span class=\\\"token punctuation\\\">}</span>\\n\\n            <span class=\\\"token keyword\\\">config</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token property\\\">image</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"kibana:7.16.2\\\"</span>\\n                <span class=\\\"token property\\\">ports</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"kibana\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n                <span class=\\\"token property\\\">volumes</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span>\\n          <span class=\\\"token string\\\">\\\"local/kibana.yml:/usr/share/kibana/config/kibana.yml\\\"</span>\\n        <span class=\\\"token punctuation\\\">]</span>\\n      <span class=\\\"token punctuation\\\">}</span>\\n      <span class=\\\"token keyword\\\">template</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token property\\\">data</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token heredoc string\\\">&lt;&lt;EOF\\n#\\n# ** THIS IS AN AUTO-GENERATED FILE **\\n#\\n\\n# Default Kibana configuration for docker target\\nserver.host: \\\"0.0.0.0\\\"\\nserver.shutdownTimeout: \\\"5s\\\"\\nelasticsearch.hosts: [ \\\"http://{{ env \\\"NOMAD_IP_elk\\\" }}:{{ env \\\"NOMAD_PORT_elk\\\" }}\\\" ]\\nelasticsearch.username: elastic\\n{{ with secret \\\"secret/elastic\\\" }}\\nelasticsearch.password: {{.Data.passwd}}\\n{{ end }}\\n\\nEOF</span>\\n\\n        <span class=\\\"token property\\\">destination</span>   <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"local/kibana.yml\\\"</span>\\n        <span class=\\\"token property\\\">change_mode</span>   <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"signal\\\"</span>\\n        <span class=\\\"token property\\\">change_signal</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"SIGHUP\\\"</span>\\n      <span class=\\\"token punctuation\\\">}</span>\\n\\n            <span class=\\\"token keyword\\\">service</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token property\\\">name</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"<span class=\\\"token interpolation\\\"><span class=\\\"token punctuation\\\">$</span><span class=\\\"token punctuation\\\">{</span>TASKGROUP<span class=\\\"token punctuation\\\">}</span></span>-kibana\\\"</span>\\n                <span class=\\\"token property\\\">port</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"kibana\\\"</span>\\n                <span class=\\\"token keyword\\\">check</span> <span class=\\\"token punctuation\\\">{</span>\\n                    <span class=\\\"token property\\\">type</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"http\\\"</span>\\n                    <span class=\\\"token property\\\">path</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"/\\\"</span>\\n                    <span class=\\\"token property\\\">interval</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"10s\\\"</span>\\n                    <span class=\\\"token property\\\">timeout</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"2s\\\"</span>\\n                <span class=\\\"token punctuation\\\">}</span>\\n            <span class=\\\"token punctuation\\\">}</span>\\n\\n            <span class=\\\"token keyword\\\">resources</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token property\\\">cpu</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">500</span>\\n                <span class=\\\"token property\\\">memory</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">1200</span>\\n            <span class=\\\"token punctuation\\\">}</span>\\n        <span class=\\\"token punctuation\\\">}</span>\\n\\n        task <span class=\\\"token string\\\">\\\"logstash\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n            <span class=\\\"token property\\\">driver</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"docker\\\"</span>\\n\\n            <span class=\\\"token keyword\\\">config</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token property\\\">image</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"logstash:7.16.2\\\"</span>\\n                <span class=\\\"token property\\\">ports</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"logstash\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n                <span class=\\\"token property\\\">volumes</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span>\\n          <span class=\\\"token string\\\">\\\"local/logstash.yml:/usr/share/logstash/config/logstash.yml\\\"</span>\\n        <span class=\\\"token punctuation\\\">]</span>\\n      <span class=\\\"token punctuation\\\">}</span>\\n      <span class=\\\"token keyword\\\">template</span> <span class=\\\"token punctuation\\\">{</span>\\n        <span class=\\\"token property\\\">data</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token heredoc string\\\">&lt;&lt;EOF\\nhttp.host: \\\"0.0.0.0\\\"\\nxpack.monitoring.elasticsearch.hosts: [ \\\"http://{{ env \\\"NOMAD_IP_elk\\\" }}:{{ env \\\"NOMAD_PORT_elk\\\" }}\\\" ]\\nEOF</span>\\n\\n        <span class=\\\"token property\\\">destination</span>   <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"local/logstash.yml\\\"</span>\\n        <span class=\\\"token property\\\">change_mode</span>   <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"signal\\\"</span>\\n        <span class=\\\"token property\\\">change_signal</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"SIGHUP\\\"</span>\\n      <span class=\\\"token punctuation\\\">}</span>\\n\\n            <span class=\\\"token keyword\\\">service</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token property\\\">name</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"<span class=\\\"token interpolation\\\"><span class=\\\"token punctuation\\\">$</span><span class=\\\"token punctuation\\\">{</span>TASKGROUP<span class=\\\"token punctuation\\\">}</span></span>-logstash\\\"</span>\\n                <span class=\\\"token property\\\">port</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"logstash\\\"</span>\\n            <span class=\\\"token punctuation\\\">}</span>\\n\\n            <span class=\\\"token keyword\\\">resources</span> <span class=\\\"token punctuation\\\">{</span>\\n                <span class=\\\"token property\\\">cpu</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">200</span>\\n                <span class=\\\"token property\\\">memory</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token number\\\">1024</span>\\n            <span class=\\\"token punctuation\\\">}</span>\\n        <span class=\\\"token punctuation\\\">}</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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