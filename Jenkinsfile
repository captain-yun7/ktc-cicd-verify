pipeline {
  agent any
  options { disableConcurrentBuilds() }
  triggers { pollSCM('H/2 * * * *') }          // 2분마다 GitHub를 확인 (VM은 GitHub가 들어올 수 없어 웹훅 대신)

  environment {
    GH = credentials('github')                  // GH_USR, GH_PSW 가 생긴다
    REPO = "ktc-cicd-verify"                         // 내 저장소 이름
    IMAGE = "ghcr.io/${env.GH_USR.toLowerCase()}/${env.REPO}/api"
    TAG = "jenkins-${env.BUILD_NUMBER}"
  }

  stages {
    stage('시작 조건') {
      // api가 바뀌지 않은 커밋(Jenkins 자신이 만든 매니페스트 커밋 포함)이면 아무것도 하지 않는다
      when { not { anyOf { changeset 'api/**'; triggeredBy 'UserIdCause' } } }
      steps {
        script { currentBuild.result = 'NOT_BUILT'; currentBuild.description = 'api 변경 없음' }
      }
    }
    stage('테스트') {
      when { anyOf { changeset 'api/**'; triggeredBy 'UserIdCause' } }
      steps {
        sh 'docker run --rm -v "$WORKSPACE/api":/src -w /src node:22-alpine npm test'
      }
    }
    stage('빌드') {
      when { anyOf { changeset 'api/**'; triggeredBy 'UserIdCause' } }
      steps { sh 'docker build -t $IMAGE:$TAG api' }
    }
    stage('스캔') {
      when { anyOf { changeset 'api/**'; triggeredBy 'UserIdCause' } }
      steps {
        sh 'trivy image --cache-dir "$JENKINS_HOME/.trivy" --exit-code 1 --severity CRITICAL --ignore-unfixed $IMAGE:$TAG'
      }
    }
    stage('올리기') {
      when { anyOf { changeset 'api/**'; triggeredBy 'UserIdCause' } }
      steps {
        sh 'echo "$GH_PSW" | docker login ghcr.io -u "$GH_USR" --password-stdin'
        sh 'docker push $IMAGE:$TAG'
      }
    }
    stage('매니페스트 갱신') {
      when { anyOf { changeset 'api/**'; triggeredBy 'UserIdCause' } }
      steps {
        sh '''
          git checkout -B main origin/main
          cd deploy/overlays/dev
          kustomize edit set image todo-api=$IMAGE:$TAG
          cd -
          git -c user.name="jenkins" -c user.email="jenkins@lab.local" commit -am "deploy(dev): api $TAG [skip ci]"
          git pull --rebase https://$GH_USR:$GH_PSW@github.com/$GH_USR/$REPO.git main
          git push https://$GH_USR:$GH_PSW@github.com/$GH_USR/$REPO.git main
        '''
      }
    }
  }
  post {
    always { sh 'docker logout ghcr.io || true' }
  }
}
