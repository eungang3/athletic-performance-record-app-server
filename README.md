# 회원관리 및 운동 능력 기록 앱 서버

## 📌 팀원

- [김민지](https://github.com/enddl3224)
- [조예슬](https://github.com/eungang3)
- [육지](https://github.com/azure928)
- [김교은](https://github.com/gyoeun666)
- [오서준](https://github.com/Pi-ren)
- [이윤재](https://github.com/Yunjae53)

<br/>

## 📌 서비스 개요

회원관리 및 운동 능력 기록 앱

<br/>

## 📌 제작 기간
2022.10.04 ~ 2022.10.06 (3일)

<br/>

## 📌 요구사항 분석 및 구현

### 회원

1. 회원 정보 등록하기

- 회원 정보(이름, 생년월일, 키, 전화번호)를 기입하여 DB에 저장하도록 구현했습니다.
- 전화번호에 unique를 걸어 동일한 사용자가 중복등록하는 것을 방지하였습니다.

2. 회원 목록 가져오기

- 전체 회원 목록을 가져오면서 sql로 특정 회원 정보도 가져오도록 구현하였습니다.

3. 특정 회원 정보 가져오기

4. 특정 회원 정보 수정하기

5. 특정 회원 삭제하기 (육지)

- 회원 데이터는 실제로 삭제되는 것이 아니고 users 테이블 deleted_at 컬럼에 현재 시간을 업데이트해 주도록 구현했습니다.
- 이름과 휴대폰 번호는 마스킹 처리되어 업데이트됩니다.

### 측정 기록

1. 특정 회원의 측정 기록들(목록) 가져오기

2. 특정 측정 기록 및 측정 데이터 가져오기

3. 특정 회원에 대한 측정 기록과 측정 데이터 생성

4. 측정 기록 삭제하기

<br/>

## 📌 DB Modeling

**[🔗 dbdiagram](https://dbdiagram.io/d/633c1ad6f0018a1c5f8e9f86)**
![DB Modeling](https://i.imgur.com/MPawXVa.png)

<br>

## 📌 API DOCS

**[🔗 API DOCS](https://www.notion.so/wecode/3-api-c44061ab32ef43999b74e48e203c81f4)**

<br/>

## 📌 적용 기술

- 사용언어 : Javascript
- 런타임 환경 : Node.js
- 프레임워크 : Express
- 데이터베이스 : MySQL

<br/>

## 📌 Commit Convention

- Init : 프로젝트 초기 세팅
- Add : 새로운 기능 추가
- Update : 원래도 정상적으로 동작하고 있었지만 수정, 추가, 보완 했을 때
- Fix : 올바르지 않은 동작을 고친 경우 (버그 수정)
- Chore : 빌드 업무 수정, 패키지 매니저 수정, 그 외 자잘한 수정에 대한 커밋
- Docs : 문서 작성, 수정
- Refactor : 코드 리팩토링
- Test : 테스트 코드 추가
- Style : 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 경우, linting
