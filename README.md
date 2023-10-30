### Migration / Seed 파일 생성

- Migration: 아래 명령 실행 시 src/database/migrations 폴더에 Migration 작성을 위한 파일이 생성됨

```
npm run migration:create --name=<원하는 파일명>
```

- Seed: 아래 명령 실행 시 src/database/seeds 폴더에 Seed 작성을 위한 파일이 생성됨

```
npm run seed:create --name=<원하는 파일명>
```

실제로 migration을 사용한다면 sync 설정은 false로 하는게 정상입니다.
현재 local, dev는 sync option이 편의를 위해서 True로 되어있으며 prod 환경만 false로 구성되어있습니다.
local과 dev는 개발환경 local, 개발 테스트를 위한 서버(변경이 자주 일어남) dev로 구분하고 있으며 실제 서비스레벨에서 운용되는 것은 prod 환경입니다.
(이 프로젝트는 마이그레이션을 지원하지만 local 환경에서만 계속 사용함을 인지해주세요)

### 비밀 번호 요구사항

1. 최소 10글자 이상
2. 숫자, 문자, 특수문자를 반드시 한개 이상 포함해야함
3. 통상적으로 자주 사용되는 비밀번호 사용안됨
4. 다른 개인정보와 유사한 비밀번호 사용안됨
5. 동일한 문자가 3회 연속되어 사용안됨
6. 이전 비밀번호와 동일하게 사용안됨
