# [CTC] DevOps Product- Hashicorp Part : Terraform Enterprise Flexible Deployment Options


![](img/3287187593.png?width=760)


본 문서는 EKS 환경에 Flexible Deployment Options를 배포 하면서 DB를 aws
서비스를 사용하지 않고 container로 배포하는 테스트 기록을 남긴
문서입니다.

사전 조건

1.  FDO 사설 인증서(본 테스트는 openssl로 진행) 및 도메인 준비(tfe.crt,
    tfe.key)
2.  FDO 용 라이선스

시나리오

1.  eks 환경에 terraform(FDO), redis, postgresql, minio helm 배포

2.  vcs 연동 및 plan, apply

3.  FDO api를 사용한 backup & restore

4.  eks cluster를 velero로 사용하여 backup & restore

|**Element**|**버전(docker image 경우 tag 명)**|
| :-: | :-: |
|EKS|1\.26|
|kubectl|1\.23.7|
|Helm|3\.8.2|
|Flexible Deployment Options|v202311-1|
|Redis|7\.0.11-debian-11-r12|
|Postgres|14\.5.0-debian-11-r35|
|minio|RELEASE.2023-05-18T00-05-36Z|
|velero|1\.9.2|

[주의]

FDO docker version image(v202311-1) 기준 Postgres 15.x version 사용 시
아래와 같은 에러로 정상적으로 백업이 이루어 지지 않아 14.5 버전을 사용
하였습니다.


``` {.syntaxhighlighter-pre syntaxhighlighter-params="brush: xml; gutter: false; theme: Confluence" theme="Confluence"}
pg_dump: error: server version: 15.3; pg_dump version: 14.9 (Ubuntu 14.9-1.pgdg22.04+1)
pg_dump: error: aborting because of server version mismatch
```


# 목차 

-   [1. Redis Helm
    배포](https://github.com/kr-partner/fdo-seperate/tree/main/FDO_TEST_FILE#1-redis-helm)

-   [2. Postgresql Helm
    배포](https://github.com/kr-partner/fdo-seperate/tree/main/FDO_TEST_FILE#2-postgresql-helm-%EB%B0%B0%ED%8F%AC)

-   [3. Minio Helm
    배포](https://github.com/kr-partner/fdo-seperate/tree/main/FDO_TEST_FILE#3-minio-helm-%EB%B0%B0%ED%8F%AC)

-   [4. FDO(Flexible Deployment Options) Helm
    배포](https://github.com/kr-partner/fdo-seperate/tree/main/FDO_TEST_FILE#4-fdoflexible-deployment-options-helm-%EB%B0%B0%ED%8F%AC)

-   [5. FDO Backup &
    Restore](https://github.com/kr-partner/fdo-seperate/tree/main/FDO_TEST_FILE#5-fdo-backup--restore)

-   [6. Velero Cluster Backup &
    Restore](https://github.com/kr-partner/fdo-seperate/tree/main/FDO_TEST_FILE#6-velero-cluster-backup--restore)
