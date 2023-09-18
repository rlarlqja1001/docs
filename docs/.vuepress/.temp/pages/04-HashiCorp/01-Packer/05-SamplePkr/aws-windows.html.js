export const data = JSON.parse("{\"key\":\"v-1a426cb9\",\"path\":\"/04-HashiCorp/01-Packer/05-SamplePkr/aws-windows.html\",\"title\":\"AWS Packer Sample - Windows\",\"lang\":\"ko-KR\",\"frontmatter\":{\"description\":\"Packer Sample\",\"tag\":[\"Packer\",\"Sample\",\"aws\"],\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-docs-demo.netlify.app/04-HashiCorp/01-Packer/05-SamplePkr/aws-windows.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"docmoa\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"AWS Packer Sample - Windows\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Packer Sample\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"ko-KR\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Packer\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Sample\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"aws\"}],[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"AWS Packer Sample - Windows\\\",\\\"image\\\":[\\\"\\\"],\\\"dateModified\\\":null,\\\"author\\\":[]}\"]]},\"headers\":[{\"level\":2,\"title\":\"windows.pkr.hcl\",\"slug\":\"windows-pkr-hcl\",\"link\":\"#windows-pkr-hcl\",\"children\":[]},{\"level\":2,\"title\":\"bootstrap_win.txt\",\"slug\":\"bootstrap-win-txt\",\"link\":\"#bootstrap-win-txt\",\"children\":[]}],\"git\":{},\"readingTime\":{\"minutes\":1.84,\"words\":551},\"filePathRelative\":\"04-HashiCorp/01-Packer/05-SamplePkr/aws-windows.md\",\"excerpt\":\"<h1> AWS Packer Sample - Windows</h1>\\n<blockquote>\\n<p>참고 : <a href=\\\"https://learn.hashicorp.com/tutorials/packer/aws-windows-image?in=packer/integrations\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Build a Windows Image</a></p>\\n</blockquote>\\n<h2> windows.pkr.hcl</h2>\\n<div class=\\\"language-hcl line-numbers-mode\\\" data-ext=\\\"hcl\\\"><pre class=\\\"language-hcl\\\"><code><span class=\\\"token keyword\\\">variable<span class=\\\"token type variable\\\"> \\\"region\\\" </span></span><span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token property\\\">default</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"ap-northeast-2\\\"</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">variable<span class=\\\"token type variable\\\"> \\\"cni-version\\\" </span></span><span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token property\\\">default</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"1.0.1\\\"</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">locals</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token property\\\">nomad_url</span>  <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"https://releases.hashicorp.com/nomad/1.2.3/nomad_1.2.3_windows_amd64.zip\\\"</span>\\n  <span class=\\\"token property\\\">consul_url</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"https://releases.hashicorp.com/consul/1.11.1/consul_1.11.1_windows_amd64.zip\\\"</span>\\n  <span class=\\\"token property\\\">jre_url</span>    <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"https://github.com/adoptium/temurin11-binaries/releases/download/jdk-11.0.13%2B8/OpenJDK11U-jre_x64_windows_hotspot_11.0.13_8.zip\\\"</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">packer</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token keyword\\\">required_plugins</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token property\\\">amazon</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token property\\\">version</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"&gt;= 0.0.2\\\"</span>\\n      <span class=\\\"token property\\\">source</span>  <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"github.com/hashicorp/amazon\\\"</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\nsource <span class=\\\"token string\\\">\\\"amazon-ebs\\\"</span> <span class=\\\"token string\\\">\\\"example\\\"</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token property\\\">ami_name</span>      <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"gs_demo_windows_{{timestamp}}\\\"</span>\\n  <span class=\\\"token property\\\">communicator</span>  <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"winrm\\\"</span>\\n  <span class=\\\"token property\\\">instance_type</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"t2.micro\\\"</span>\\n  <span class=\\\"token property\\\">region</span>        <span class=\\\"token punctuation\\\">=</span> var.region\\n  <span class=\\\"token keyword\\\">source_ami_filter</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token property\\\">filters</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">{</span>\\n      <span class=\\\"token property\\\">name</span>                <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"*Windows_Server-2019-English-Full-Base*\\\"</span>\\n      <span class=\\\"token property\\\">root-device-type</span>    <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"ebs\\\"</span>\\n      <span class=\\\"token property\\\">virtualization-type</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"hvm\\\"</span>\\n    <span class=\\\"token punctuation\\\">}</span>\\n    <span class=\\\"token property\\\">most_recent</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token boolean\\\">true</span>\\n    <span class=\\\"token property\\\">owners</span>      <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"amazon\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n  <span class=\\\"token property\\\">user_data_file</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"./bootstrap_win.txt\\\"</span>\\n  <span class=\\\"token property\\\">winrm_password</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"SuperS3cr3t!!!!\\\"</span>\\n  <span class=\\\"token property\\\">winrm_username</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token string\\\">\\\"Administrator\\\"</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n\\n<span class=\\\"token keyword\\\">build</span> <span class=\\\"token punctuation\\\">{</span>\\n  <span class=\\\"token property\\\">sources</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span><span class=\\\"token string\\\">\\\"source.amazon-ebs.example\\\"</span><span class=\\\"token punctuation\\\">]</span>\\n\\n  <span class=\\\"token keyword\\\">provisioner<span class=\\\"token type variable\\\"> \\\"powershell\\\" </span></span><span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token property\\\">inline</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span>\\n      <span class=\\\"token string\\\">\\\"New-Item \\\\\\\"C:\\\\\\\\temp\\\\\\\" -ItemType Directory\\\"</span>,\\n    <span class=\\\"token punctuation\\\">]</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n\\n  <span class=\\\"token comment\\\">// provisioner \\\"file\\\" {</span>\\n  <span class=\\\"token comment\\\">//   source = \\\"./file/\\\"</span>\\n  <span class=\\\"token comment\\\">//   destination = \\\"/tmp\\\"</span>\\n  <span class=\\\"token comment\\\">// }</span>\\n\\n  <span class=\\\"token keyword\\\">provisioner<span class=\\\"token type variable\\\"> \\\"powershell\\\" </span></span><span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token property\\\">inline</span> <span class=\\\"token punctuation\\\">=</span> <span class=\\\"token punctuation\\\">[</span>\\n      <span class=\\\"token string\\\">\\\"New-Item \\\\\\\"C:\\\\\\\\hashicorp\\\\\\\\jre\\\\\\\\\\\\\\\" -ItemType Directory\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"New-Item \\\\\\\"C:\\\\\\\\hashicorp\\\\\\\\consul\\\\\\\\bin\\\\\\\\\\\\\\\" -ItemType Directory\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"New-Item \\\\\\\"C:\\\\\\\\hashicorp\\\\\\\\consul\\\\\\\\data\\\\\\\\\\\\\\\" -ItemType Directory\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"New-Item \\\\\\\"C:\\\\\\\\hashicorp\\\\\\\\consul\\\\\\\\conf\\\\\\\\\\\\\\\" -ItemType Directory\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"New-Item \\\\\\\"C:\\\\\\\\hashicorp\\\\\\\\nomad\\\\\\\\bin\\\\\\\\\\\\\\\" -ItemType Directory\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"New-Item \\\\\\\"C:\\\\\\\\hashicorp\\\\\\\\nomad\\\\\\\\data\\\\\\\\\\\\\\\" -ItemType Directory\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"New-Item \\\\\\\"C:\\\\\\\\hashicorp\\\\\\\\nomad\\\\\\\\conf\\\\\\\\\\\\\\\" -ItemType Directory\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"Invoke-WebRequest -Uri <span class=\\\"token interpolation\\\"><span class=\\\"token punctuation\\\">$</span><span class=\\\"token punctuation\\\">{</span><span class=\\\"token keyword\\\">local</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token type variable\\\">jre_url</span><span class=\\\"token punctuation\\\">}</span></span> -OutFile $env:TEMP\\\\\\\\jre.zip\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"Invoke-WebRequest -Uri <span class=\\\"token interpolation\\\"><span class=\\\"token punctuation\\\">$</span><span class=\\\"token punctuation\\\">{</span><span class=\\\"token keyword\\\">local</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token type variable\\\">consul_url</span><span class=\\\"token punctuation\\\">}</span></span> -OutFile $env:TEMP\\\\\\\\consul.zip\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"Invoke-WebRequest -Uri <span class=\\\"token interpolation\\\"><span class=\\\"token punctuation\\\">$</span><span class=\\\"token punctuation\\\">{</span><span class=\\\"token keyword\\\">local</span><span class=\\\"token punctuation\\\">.</span><span class=\\\"token type variable\\\">nomad_url</span><span class=\\\"token punctuation\\\">}</span></span> -OutFile $env:TEMP\\\\\\\\nomad.zip\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"Expand-Archive $env:TEMP\\\\\\\\jre.zip -DestinationPath C:\\\\\\\\hashicorp\\\\\\\\jre\\\\\\\\\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"Expand-Archive $env:TEMP\\\\\\\\consul.zip -DestinationPath C:\\\\\\\\hashicorp\\\\\\\\consul\\\\\\\\bin\\\\\\\\\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"Expand-Archive $env:TEMP\\\\\\\\nomad.zip -DestinationPath C:\\\\\\\\hashicorp\\\\\\\\nomad\\\\\\\\bin\\\\\\\\\\\"</span>,\\n      <span class=\\\"token string\\\">\\\"[Environment]::SetEnvironmentVariable(\\\\\\\"Path\\\\\\\", $env:Path + \\\\\\\";C:\\\\\\\\hashicorp\\\\\\\\jre\\\\\\\\jdk-11.0.13+8-jre\\\\\\\\bin;C:\\\\\\\\hashicorp\\\\\\\\nomad\\\\\\\\bin;C:\\\\\\\\hashicorp\\\\\\\\consul\\\\\\\\bin\\\\\\\", \\\\\\\"Machine\\\\\\\")\\\"</span>,\\n      <span class=\\\"token comment\\\">// \\\"$old = (Get-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\\\\\\\\System\\\\\\\\CurrentControlSet\\\\\\\\Control\\\\\\\\Session Manager\\\\\\\\Environment' -Name path).path\\\",</span>\\n      <span class=\\\"token comment\\\">// \\\"$new = \\\\\\\"$old;C:\\\\\\\\hashicorp\\\\\\\\jre\\\\\\\\jdk-11.0.13+8-jre\\\\\\\\bin;C:\\\\\\\\hashicorp\\\\\\\\nomad\\\\\\\\bin;C:\\\\\\\\hashicorp\\\\\\\\consul\\\\\\\\bin\\\\\\\"\\\",</span>\\n      <span class=\\\"token comment\\\">// \\\"Set-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\\\\\\\\System\\\\\\\\CurrentControlSet\\\\\\\\Control\\\\\\\\Session Manager\\\\\\\\Environment' -Name path -Value $new\\\",</span>\\n    <span class=\\\"token punctuation\\\">]</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre><div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\",\"copyright\":{\"license\":\"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved.\"}}")

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
