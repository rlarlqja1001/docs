export const usePages = () => [{"key":"v-282bd1b9","path":"/01-Infrastructure/","title":"Infrastructure","lang":"ko-KR","frontmatter":{"tag":["Infrastructure"],"headerDepth":0,"description":"Infrastructure Recent pages {{ page.title }} [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/01-Infrastructure/"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Infrastructure"}],["meta",{"property":"og:description","content":"Infrastructure Recent pages {{ page.title }} [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"Infrastructure"}],["script",{"type":"application/ld+json"},"{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Infrastructure\",\"image\":[\"\"],\"dateModified\":null,\"author\":[]}"]]},"headers":[{"level":2,"title":"Recent pages","slug":"recent-pages","link":"#recent-pages","children":[]}],"git":{},"readingTime":{"minutes":0.19,"words":58},"filePathRelative":"01-Infrastructure/README.md","excerpt":"<h1> Infrastructure</h1>\n<h2> Recent pages</h2>\n<ul>\n  <li v-for=\"page in pages\" :key=\"page.key\">\n    <a :to=\"page.path\" href=\"undefined\" target=\"blank\">{{ page.title }}</a>\n    <span v-if=\"page.frontmatter.date\">\n      [ {{ (new Date(page.frontmatter.date)).toLocaleString() }} ]\n    </span>\n  </li>\n</ul>","copyright":{"license":"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved."},"autoDesc":true},{"key":"v-a68937f4","path":"/01-Infrastructure/Container/container_runtime_sheet.html","title":"Container Runtimes 비교 표","lang":"ko-KR","frontmatter":{"description":"Container Runtimes 비교 표","tag":["container","docker","podman"],"head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/01-Infrastructure/Container/container_runtime_sheet.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Container Runtimes 비교 표"}],["meta",{"property":"og:description","content":"Container Runtimes 비교 표"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"container"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"podman"}],["script",{"type":"application/ld+json"},"{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Container Runtimes 비교 표\",\"image\":[\"\"],\"dateModified\":null,\"author\":[]}"]]},"headers":[],"git":{},"readingTime":{"minutes":0.58,"words":173},"filePathRelative":"01-Infrastructure/Container/container_runtime_sheet.md","excerpt":"<h1> Container Runtimes 비교 표</h1>\n<blockquote>\n<p>update : 2021. 12. 23.</p>\n</blockquote>\n<table>\n<thead>\n<tr>\n<th></th>\n<th><strong>CRI-O</strong></th>\n<th><strong>Containerd CRI plugin</strong></th>\n<th><strong>Docker Engine</strong></th>\n<th><strong>gVisor CRI plugin</strong></th>\n<th><strong>CRI-O Kata Containers</strong></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>sponsors</td>\n<td>CNCF</td>\n<td>CNCF</td>\n<td>Docker Inc</td>\n<td>Google</td>\n<td>Intel</td>\n</tr>\n<tr>\n<td>started</td>\n<td>2016</td>\n<td>2015</td>\n<td>Mar 2013</td>\n<td>2015</td>\n<td>2017</td>\n</tr>\n<tr>\n<td>version</td>\n<td>1.23</td>\n<td>1.19</td>\n<td>20.10</td>\n<td>release-20211129.0</td>\n<td>1.13</td>\n</tr>\n<tr>\n<td>runtime</td>\n<td>runc (default)</td>\n<td>containerd managing runc</td>\n<td>runc</td>\n<td>runsc</td>\n<td>kata-runtime</td>\n</tr>\n<tr>\n<td>kernel</td>\n<td>shared</td>\n<td>shared</td>\n<td>shared</td>\n<td>partially shared</td>\n<td>isolated</td>\n</tr>\n<tr>\n<td>syscall filtering</td>\n<td>no</td>\n<td>no</td>\n<td>no</td>\n<td>yes</td>\n<td>no</td>\n</tr>\n<tr>\n<td>kernel blobs</td>\n<td>no</td>\n<td>no</td>\n<td>no</td>\n<td>no</td>\n<td>yes</td>\n</tr>\n<tr>\n<td>footprint</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>-</td>\n<td>30mb</td>\n</tr>\n<tr>\n<td>start time</td>\n<td>&lt;10ms</td>\n<td>&lt;10ms</td>\n<td>&lt;10ms</td>\n<td>&lt;10ms</td>\n<td>&lt;100ms</td>\n</tr>\n<tr>\n<td>io performance</td>\n<td>host performance</td>\n<td>host performance</td>\n<td>host performance</td>\n<td>slow</td>\n<td>host performance</td>\n</tr>\n<tr>\n<td>network performance</td>\n<td>host performance</td>\n<td>host performance</td>\n<td>host performance</td>\n<td>slow (see comment)</td>\n<td>close to host performance</td>\n</tr>\n<tr>\n<td>Docs</td>\n<td><a href=\"https://github.com/kubernetes-sigs/cri-o/\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/kubernetes-sigs/cri-o/</a></td>\n<td><a href=\"https://github.com/containerd/cri\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/containerd/cri</a></td>\n<td><a href=\"https://github.com/moby/moby\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/moby/moby</a></td>\n<td><a href=\"https://github.com/google/gvisor\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/google/gvisor</a></td>\n<td><a href=\"https://github.com/kata-containers/runtime\" target=\"_blank\" rel=\"noopener noreferrer\">https://github.com/kata-containers/runtime</a></td>\n</tr>\n<tr>\n<td>장점</td>\n<td>경량의 쿠버네티스 전용 Docker 데몬이 필요하지 않음 OpenShift의 기본 컨테이너 런타임 아마도 최고의 컨테이너 기본 런타임</td>\n<td>최신 Docker Engine과 함께 기본적으로 설치됨 Kubernetes는 ContainerD를 직접 사용할 수 있으며, Docker또한 동일한 호스트에서 직접 사용할 수도 있음  DockerD 데몬을 실행할 필요가 없음</td>\n<td>방대한 수의 사용자가 테스트하고 반복 한 가장 성숙한 런타임 seccomp, SELinux 및 AppArmor를 사용하여 강화할 수 있음 가장 빠른 시작 시간  메모리 사용량이 가장 적음</td>\n<td>gcloud appengine에서 고객 간의 격리 계층으로 사용함 상태를 저장하지 않는 웹 앱에 적합 표준 컨테이너에 두 개의 보안 계층을 추가함</td>\n<td>아마도 가장 안전한 옵션 보안에 대한 주요 절충안으로 오버헤드가 발생하는것은 그렇게 나쁘지 않은 것으로 보임</td>\n</tr>\n<tr>\n<td>단점</td>\n<td>Docker Engine이 같고 있는 동일한 보안 이슈를 가지고 있음 보안정책을 별도로 관리해야 함</td>\n<td>This is slightly newer as it has been through a few iterations of being installed differently.</td>\n<td>Kubernetes는 <strong>CRI 플러그인 아키텍처로 이동하고 있음</strong> 보안을 강화하고 관리하는것은 너무 복잡함</td>\n<td>버전이 지정되지 않았으며 아직 Kubernetes에서 프로덕션에 사용해서는 안됨 많은 syscall을 만드는 응용 프로그램에는 적합하지 않음 400 개 Linux syscall이 모두 구현되어 일부 앱이 작동하지 않을 수 있음 (예 : postgres).</td>\n<td>kata-runtime 자체는 v1이지만 이것이 Kubernetes 상에서 어떻게 준비 되어 있는지  확인이 필요 30MB 메모리 오버 헤드로 인한 비효율적 패킹 시작 시간</td>\n</tr>\n</tbody>\n</table>","copyright":{"license":"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved."}},{"key":"v-49680cf2","path":"/01-Infrastructure/Container/rancher-desktop-disk-resize-mac.html","title":"Rancher Desktop Disk Resize on MAC","lang":"ko-KR","frontmatter":{"description":"no space left on device","tag":["rancher","docker","mac"],"head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/01-Infrastructure/Container/rancher-desktop-disk-resize-mac.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Rancher Desktop Disk Resize on MAC"}],["meta",{"property":"og:description","content":"no space left on device"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"rancher"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"mac"}],["script",{"type":"application/ld+json"},"{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Rancher Desktop Disk Resize on MAC\",\"image\":[\"\"],\"dateModified\":null,\"author\":[]}"]]},"headers":[{"level":2,"title":"issue","slug":"issue","link":"#issue","children":[]},{"level":2,"title":"Resize","slug":"resize","link":"#resize","children":[]}],"git":{},"readingTime":{"minutes":0.36,"words":109},"filePathRelative":"01-Infrastructure/Container/rancher-desktop-disk-resize-mac.md","excerpt":"<h1> Rancher Desktop Disk Resize on MAC</h1>\n<blockquote>\n<p>Private docker registry<br>\nRancher Desktop<br>\nMacOS<br>\nSrc :  <a href=\"https://slack-archive.rancher.com/t/8508077/on-my-m1-mac-i-ve-started-getting-this-error-and-it-wont-go-#3e8d178c-aee8-46e6-b4cc-094c2339cbaa\" target=\"_blank\" rel=\"noopener noreferrer\">https://slack-archive.rancher.com/t/8508077/on-my-m1-mac-i-ve-started-getting-this-error-and-it-wont-go-#3e8d178c-aee8-46e6-b4cc-094c2339cbaa</a></p>\n</blockquote>","copyright":{"license":"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved."}},{"key":"v-7ac83af7","path":"/01-Infrastructure/Container/rancher-desktop-insecure-setup-mac.html","title":"Rancher Desktop Insecure Setup on MAC","lang":"ko-KR","frontmatter":{"description":"http: server gave HTTP response to HTTPS client","tag":["rancher","docker","mac"],"head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/01-Infrastructure/Container/rancher-desktop-insecure-setup-mac.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Rancher Desktop Insecure Setup on MAC"}],["meta",{"property":"og:description","content":"http: server gave HTTP response to HTTPS client"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"rancher"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"mac"}],["script",{"type":"application/ld+json"},"{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"Rancher Desktop Insecure Setup on MAC\",\"image\":[\"\"],\"dateModified\":null,\"author\":[]}"]]},"headers":[{"level":2,"title":"issue","slug":"issue","link":"#issue","children":[]},{"level":2,"title":"Edit docker.json within Rancher desktop","slug":"edit-docker-json-within-rancher-desktop","link":"#edit-docker-json-within-rancher-desktop","children":[]},{"level":2,"title":"Restart docker service","slug":"restart-docker-service","link":"#restart-docker-service","children":[]},{"level":2,"title":"Try Push/Pull","slug":"try-push-pull","link":"#try-push-pull","children":[]}],"git":{},"readingTime":{"minutes":0.53,"words":158},"filePathRelative":"01-Infrastructure/Container/rancher-desktop-insecure-setup-mac.md","excerpt":"<h1> Rancher Desktop Insecure Setup on MAC</h1>\n<blockquote>\n<p>Private docker registry<br>\nRancher Desktop<br>\nMacOS<br>\nSetup <code>insecure-registries</code></p>\n</blockquote>\n<h2> issue</h2>\n<div class=\"language-bash line-numbers-mode\" data-ext=\"sh\"><pre class=\"language-bash\"><code>$ <span class=\"token function\">docker</span> push <span class=\"token number\">192.168</span>.60.11:5000/example-python:1.0\nError response from daemon: Get https://192.168.60.11:5000/v1/example-python: http: server gave HTTP response to HTTPS client\n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","copyright":{"license":"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved."}},{"key":"v-be9361f0","path":"/01-Infrastructure/Linux/TroubleShooting/docker_bridge_netstat.html","title":"docker나 nomad를 이용하여 bridge모드로 기동된 컨테이너의 port 체크","lang":"ko-KR","frontmatter":{"description":"docker bridge mode netstat","tag":["linux","docker","bridge","netstat"],"head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/01-Infrastructure/Linux/TroubleShooting/docker_bridge_netstat.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"docker나 nomad를 이용하여 bridge모드로 기동된 컨테이너의 port 체크"}],["meta",{"property":"og:description","content":"docker bridge mode netstat"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:tag","content":"bridge"}],["meta",{"property":"article:tag","content":"netstat"}],["script",{"type":"application/ld+json"},"{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"docker나 nomad를 이용하여 bridge모드로 기동된 컨테이너의 port 체크\",\"image\":[\"\"],\"dateModified\":null,\"author\":[]}"]]},"headers":[{"level":3,"title":"먼저 찾으려는 컨테이너의 port를 확인한다. (nomad로 배포되어 있는 컨테이너임)","slug":"먼저-찾으려는-컨테이너의-port를-확인한다-nomad로-배포되어-있는-컨테이너임","link":"#먼저-찾으려는-컨테이너의-port를-확인한다-nomad로-배포되어-있는-컨테이너임","children":[]},{"level":3,"title":"먼저 일반적으로 사용하는 netstat에는 grafana 컨테이너의 http port인 25546이 확인되지 않는다.","slug":"먼저-일반적으로-사용하는-netstat에는-grafana-컨테이너의-http-port인-25546이-확인되지-않는다","link":"#먼저-일반적으로-사용하는-netstat에는-grafana-컨테이너의-http-port인-25546이-확인되지-않는다","children":[]},{"level":3,"title":"기동 중인 docker에서 inspect로 pid를 검색해오고 그 정보로 netstat를 다시하면 이제 LISTEN된 정보를 얻어올 수 있다.","slug":"기동-중인-docker에서-inspect로-pid를-검색해오고-그-정보로-netstat를-다시하면-이제-listen된-정보를-얻어올-수-있다","link":"#기동-중인-docker에서-inspect로-pid를-검색해오고-그-정보로-netstat를-다시하면-이제-listen된-정보를-얻어올-수-있다","children":[]}],"git":{},"readingTime":{"minutes":1.06,"words":317},"filePathRelative":"01-Infrastructure/Linux/TroubleShooting/docker_bridge_netstat.md","excerpt":"<h1> docker나 nomad를 이용하여 bridge모드로 기동된 컨테이너의 port 체크</h1>\n<ul>\n<li>단순 netstat만으로 bridge모드로 기동된 docker의 port를 체크할 수 없다</li>\n<li>그래서 아래와 같은 절차가 필요하다.</li>\n</ul>\n<h3> 먼저 찾으려는 컨테이너의 port를 확인한다. (nomad로 배포되어 있는 컨테이너임)</h3>\n<div class=\"language-bash line-numbers-mode\" data-ext=\"sh\"><pre class=\"language-bash\"><code>nomad alloc status d78d5b32\nID                  <span class=\"token operator\">=</span> d78d5b32-00c3-5468-284a-8c201058c53a\nEval ID             <span class=\"token operator\">=</span> c6c9a1d9\nName                <span class=\"token operator\">=</span> 08_grafana.08_grafana<span class=\"token punctuation\">[</span><span class=\"token number\">0</span><span class=\"token punctuation\">]</span>\nNode ID             <span class=\"token operator\">=</span> e11b7729\nNode Name           <span class=\"token operator\">=</span> slave1\nJob ID              <span class=\"token operator\">=</span> 08_grafana\nJob Version         <span class=\"token operator\">=</span> <span class=\"token number\">0</span>\nClient Status       <span class=\"token operator\">=</span> running\nClient Description  <span class=\"token operator\">=</span> Tasks are running\nDesired Status      <span class=\"token operator\">=</span> run\nDesired Description <span class=\"token operator\">=</span> <span class=\"token operator\">&lt;</span>none<span class=\"token operator\">&gt;</span>\nCreated             <span class=\"token operator\">=</span> 18h42m ago\nModified            <span class=\"token operator\">=</span> 2h36m ago\n\nAllocation Addresses <span class=\"token punctuation\">(</span>mode <span class=\"token operator\">=</span> <span class=\"token string\">\"bridge\"</span><span class=\"token punctuation\">)</span>\nLabel                   Dynamic  Address\n*http                   <span class=\"token function\">yes</span>      <span class=\"token number\">10.0</span>.0.161:25546\n*connect-proxy-grafana  <span class=\"token function\">yes</span>      <span class=\"token number\">10.0</span>.0.161:29382 -<span class=\"token operator\">&gt;</span> <span class=\"token number\">29382</span>\n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","copyright":{"license":"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved."}},{"key":"v-5e1fef53","path":"/01-Infrastructure/Linux/TroubleShooting/Oom_killer.html","title":"OOM Killer가 일하는 방식","lang":"ko-KR","frontmatter":{"description":"oom_killer","tag":["linux","oom","oom_killer"],"head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/01-Infrastructure/Linux/TroubleShooting/Oom_killer.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"OOM Killer가 일하는 방식"}],["meta",{"property":"og:description","content":"oom_killer"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"oom"}],["meta",{"property":"article:tag","content":"oom_killer"}],["script",{"type":"application/ld+json"},"{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"OOM Killer가 일하는 방식\",\"image\":[\"\"],\"dateModified\":null,\"author\":[]}"]]},"headers":[{"level":2,"title":"OOM Killer의 주요 업무는 다음 두 가지입니다.","slug":"oom-killer의-주요-업무는-다음-두-가지입니다","link":"#oom-killer의-주요-업무는-다음-두-가지입니다","children":[]},{"level":2,"title":"각 프로세스의 oom_score 관련 정보는 /proc/(pid) 디렉토리 하위에서 찾을 수 있습니다.","slug":"각-프로세스의-oom-score-관련-정보는-proc-pid-디렉토리-하위에서-찾을-수-있습니다","link":"#각-프로세스의-oom-score-관련-정보는-proc-pid-디렉토리-하위에서-찾을-수-있습니다","children":[]},{"level":2,"title":"oom_killer는 점수를 나타내는 oom_score만 있으면 임무를 완수할 수 있습니다. 그렇다면 oom_adj와 oom_score_adj의 역할은 무엇일까요? man proc을 이용해 확인해 보겠습니다.","slug":"oom-killer는-점수를-나타내는-oom-score만-있으면-임무를-완수할-수-있습니다-그렇다면-oom-adj와-oom-score-adj의-역할은-무엇일까요-man-proc을-이용해-확인해-보겠습니다","link":"#oom-killer는-점수를-나타내는-oom-score만-있으면-임무를-완수할-수-있습니다-그렇다면-oom-adj와-oom-score-adj의-역할은-무엇일까요-man-proc을-이용해-확인해-보겠습니다","children":[]},{"level":2,"title":"위의 설명에 따르면 OOM Killer가 유일하게 의존하는 변수는 oom_score이고, oom_adj 또는 oom_score_adj을 이용해 그 값을 조정할 수 있습니다. 현재 사용하고 있는 커널 버전은 kernel-3.10.0-957.el7입니다. 리눅스 저장소에서 버전에 맞는 커널 소스 코드를 찾았습니다.","slug":"위의-설명에-따르면-oom-killer가-유일하게-의존하는-변수는-oom-score이고-oom-adj-또는-oom-score-adj을-이용해-그-값을-조정할-수-있습니다-현재-사용하고-있는-커널-버전은-kernel-3-10-0-957-el7입니다-리눅스-저장소에서-버전에-맞는-커널-소스-코드를-찾았습니다","link":"#위의-설명에-따르면-oom-killer가-유일하게-의존하는-변수는-oom-score이고-oom-adj-또는-oom-score-adj을-이용해-그-값을-조정할-수-있습니다-현재-사용하고-있는-커널-버전은-kernel-3-10-0-957-el7입니다-리눅스-저장소에서-버전에-맞는-커널-소스-코드를-찾았습니다","children":[]}],"git":{},"readingTime":{"minutes":0.33,"words":100},"filePathRelative":"01-Infrastructure/Linux/TroubleShooting/Oom_killer.md","excerpt":"<h1> OOM Killer가 일하는 방식</h1>\n<h2> OOM Killer의 주요 업무는 다음 두 가지입니다.</h2>\n<ul>\n<li>실행 중인 모든 프로세스를 살펴보며 각 프로세스의 메모리 사용량에 따라 OOM 점수를 산출합니다.</li>\n<li>OS에서 메모리가 더 필요하면 점수가 가장 높은 프로세스를 종료시킵니다.</li>\n</ul>\n<h2> 각 프로세스의 oom_score 관련 정보는 /proc/(pid) 디렉토리 하위에서 찾을 수 있습니다.</h2>\n<ul>\n<li>oom_adj (oom_adjust)</li>\n<li>oom_score_adj</li>\n<li>oom_score</li>\n</ul>","copyright":{"license":"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved."}},{"key":"v-8edd8c14","path":"/01-Infrastructure/Linux/TroubleShooting/SSH%20Too%20many%20authentication%20failures.html","title":"SSH Too many authentication failures","lang":"ko-KR","frontmatter":{"description":"SSH Too many authentication failures","tag":["linux","ssh"],"head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/01-Infrastructure/Linux/TroubleShooting/SSH%20Too%20many%20authentication%20failures.html"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"SSH Too many authentication failures"}],["meta",{"property":"og:description","content":"SSH Too many authentication failures"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"ko-KR"}],["meta",{"property":"article:tag","content":"linux"}],["meta",{"property":"article:tag","content":"ssh"}],["script",{"type":"application/ld+json"},"{\"@context\":\"https://schema.org\",\"@type\":\"Article\",\"headline\":\"SSH Too many authentication failures\",\"image\":[\"\"],\"dateModified\":null,\"author\":[]}"]]},"headers":[{"level":2,"title":"해결 방법 1","slug":"해결-방법-1","link":"#해결-방법-1","children":[]},{"level":2,"title":"해결 방법 2","slug":"해결-방법-2","link":"#해결-방법-2","children":[]},{"level":2,"title":"해결 방법 3","slug":"해결-방법-3","link":"#해결-방법-3","children":[]}],"git":{},"readingTime":{"minutes":0.39,"words":117},"filePathRelative":"01-Infrastructure/Linux/TroubleShooting/SSH Too many authentication failures.md","excerpt":"<h1> SSH Too many authentication failures</h1>\n<p>직역하자면 <code>너무많은 인증 실패로 인한 SSH 접속이 안된다.</code> 는 메시지를 간혹 보게되는 경우가 있다.</p>\n<div class=\"language-bash line-numbers-mode\" data-ext=\"sh\"><pre class=\"language-bash\"><code>$ <span class=\"token function\">ssh</span> myserver\nReceived disconnect from <span class=\"token number\">192.168</span>.0.43 port <span class=\"token number\">22</span>:2: Too many authentication failures\nConnection to <span class=\"token number\">192.168</span>.0.43 closed by remote host.\nConnection to <span class=\"token number\">192.168</span>.0.43 closed.\n</code></pre><div class=\"line-numbers\" aria-hidden=\"true\"><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div><div class=\"line-number\"></div></div></div>","copyright":{"license":"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved."}},{"key":"v-05cc4332","path":"/01-Infrastructure/Container/","title":"Container","lang":"ko-KR","frontmatter":{"title":"Container","article":false,"feed":false,"sitemap":false,"description":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/01-Infrastructure/Container/"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Container"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"ko-KR"}],["script",{"type":"application/ld+json"},"{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Container\"}"]]},"headers":[],"git":{},"readingTime":{"minutes":0,"words":1},"filePathRelative":null,"excerpt":"","copyright":{"license":"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved."},"autoDesc":true},{"key":"v-a8479c2e","path":"/01-Infrastructure/Linux/TroubleShooting/","title":"Trouble Shooting","lang":"ko-KR","frontmatter":{"title":"Trouble Shooting","article":false,"feed":false,"sitemap":false,"description":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/01-Infrastructure/Linux/TroubleShooting/"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Trouble Shooting"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"ko-KR"}],["script",{"type":"application/ld+json"},"{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Trouble Shooting\"}"]]},"headers":[],"git":{},"readingTime":{"minutes":0,"words":1},"filePathRelative":null,"excerpt":"","copyright":{"license":"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved."},"autoDesc":true},{"key":"v-5750c658","path":"/01-Infrastructure/Linux/","title":"Linux","lang":"ko-KR","frontmatter":{"title":"Linux","article":false,"feed":false,"sitemap":false,"description":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/01-Infrastructure/Linux/"}],["meta",{"property":"og:site_name","content":"docmoa"}],["meta",{"property":"og:title","content":"Linux"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"ko-KR"}],["script",{"type":"application/ld+json"},"{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Linux\"}"]]},"headers":[],"git":{},"readingTime":{"minutes":0,"words":1},"filePathRelative":null,"excerpt":"","copyright":{"license":"CC BY-NC-ND 4.0 Licensed | ⓒ 2021-present docmoa™ contributers all rights reserved."},"autoDesc":true}]