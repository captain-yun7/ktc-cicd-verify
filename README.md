# CI/CD 실습 저장소 (kt cloud TECH UP)

Docker·Kubernetes·클라우드 보안 과목에서 쓴 **todo 앱**(api · web · db)과 배포 매니페스트(`deploy/`)가 들어 있습니다. CI/CD 과목 내내 이 저장소 하나에 GitHub Actions, Jenkins, Argo CD를 차례로 붙입니다.

## 시작하기
1. 이 페이지 오른쪽 위 **Use this template → Create a new repository**
2. 소유자는 **본인 계정**, 이름은 `cicd-lab`, **Public** 으로 만듭니다
3. 실습 VM에서 받습니다 (명령은 실습 문서를 따르세요)

## 구성
| 경로 | 내용 |
|---|---|
| `api/` | todo-api (Node.js, 3000번 포트) — `npm test`로 도는 테스트(`api/test/`) 포함 |
| `web/` | todo-web (nginx, 80번 포트) — 화면, `/api/` 요청은 api로 넘김 |
| `deploy/base/` | db · api · web 매니페스트 (kustomize) |
| `deploy/overlays/dev`, `prod` | 환경별 설정(네임스페이스 `todo-dev`·`todo-prod`). 파이프라인이 이미지 태그를 여기에 기록합니다 |
| `.github/workflows/`, `Jenkinsfile` | 수업에서 직접 만듭니다 |

## 실습한 사람
