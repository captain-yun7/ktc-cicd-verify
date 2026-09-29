# CI/CD 실습 저장소 (kt cloud TECH UP)

Online Boutique의 서비스 두 개(`shipping`, `frontend`)와 배포 매니페스트(`deploy/`)가 들어 있습니다. CI/CD 과목 내내 이 저장소 하나로 GitHub Actions, Jenkins, Argo CD를 차례로 붙입니다.

## 시작하기
1. 이 페이지 오른쪽 위 **Use this template → Create a new repository**
2. 소유자는 **본인 계정**, 이름은 `cicd-lab`, **Public** 으로 만듭니다
3. 실습 VM에서 받습니다 (명령은 실습 문서를 따르세요)

## 구성
| 경로 | 내용 |
|---|---|
| `shipping/` | 배송비 계산 서비스 (Go, gRPC 50051) — 테스트 포함 |
| `frontend/` | 쇼핑몰 화면 (Go, HTTP 8080) — 테스트 포함 |
| `deploy/base/` | 홈·장바구니에 필요한 6개 서비스 매니페스트 (kustomize) |
| `deploy/overlays/dev`, `prod` | 환경별 설정. 파이프라인이 이미지 태그를 여기에 기록합니다 |
| `.github/workflows/` | 수업에서 직접 만듭니다 |

## 출처
서비스 코드와 매니페스트는 [GoogleCloudPlatform/microservices-demo](https://github.com/GoogleCloudPlatform/microservices-demo) v0.10.7 (Apache License 2.0, `LICENSE`)에서 가져왔습니다.
- 실습: 홍길동
- 질문: Discord
## 소개
- 웹에서 고친 줄
