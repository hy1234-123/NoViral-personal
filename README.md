# N O   V I R A L

![main-img](https://github.com/user-attachments/assets/5131cfb2-8a8f-4e50-b26a-2944564d9d81)

- 배포 URL : https://noviral.vercel.app/

<br>

## [1] 팀 구성

<div align="center">

| **문상일** | **이성재** | **이해연** | **황수범** |
| :------: |  :------: | :------: | :------: |
| [@CONG878](https://github.com/CONG878) | [@DKULena](https://github.com/DKULena) | [@깃허브 아이디](깃허브 링크) | [@Peace1128](https://github.com/Peace1128) |
| 123 | ![lsj](https://github.com/user-attachments/assets/a959b353-43be-4f80-aeab-2d8d68c25efa) | 123 | ![hsb](https://github.com/user-attachments/assets/8d2be623-f139-4f41-a46b-3012963dfc32) |

</div>

<br>

## [2] 프로젝트 소개

### 서비스 설명
- 광고 / 바이럴 마케팅 없는 제품 정보 공유 플랫폼입니다.
- 특정 제품에 대한 유저간의 토론을 통해 “좋은 제품”을 랭킹 등재 또는 등락
- 입문, 중급, 하이엔드로 사용자 층을 분리하여 서비스 제공

### 기획 배경 및 목적
- 소비자가 특정 상품의 구매를 원하는 경우 블로그 또는 유튜브에서 정보를 찾아 본 뒤 구매하나, 광고 또는 광고 표시를 하지않은 속칭 “뒷 광고”로 좋은 제품을 찾기가 어려워짐
- 소비자들 간의 상호 소통, 토론을 통하여 광고/뒷광고 없는 좋은 제품을 선별하도록 함
- 소비자가 인터넷에서 제품 정보를 찾아보는 시간 단축하고, 좋은 상품을 선별하는 하나의 “커뮤니티”로 자리잡도록 함

<br>

## [3] 개발 환경

- Front : HTML, React, Vite, styled-components, Intersection Observation, Axios
- Back (예정) : Firebase
- 버전 및 이슈관리 : GitHub, Jira
- 협업 툴 : Discord, Figma, Google Workspace
- 서비스 배포 환경 : Vercel

<br>

## [4] 개발 기술

- React.js 
  - 중복 사용되는 코드들은 Hooks, Component로 개발하여 리소스 관리 및 유지 보수를 좀 더 용이하도록 함 
  - router를 사용하여 SPA로 원활히 동작하도록 함

- Intersection Observation
  - 관측 라이브러리를 통한 제품 목록 애니메이션 구현
 
- Axiox
  - 추후 서버 연동 시 용이하도록 선작업
 
- 브랜치 전략
  - Trunk-Based Development
  - 빠른 피드백 루프로 작업속도를 향상했으며, 개발 중 팀원간의 교류, 지식교류를 활발하도록 함

- vercel
  - 도메인 관리 및 자동 배포의 편리성과, 추후 Firebase 이용을 고려하여 선정
 
<br>

## [5] 프로젝트 구조

```
├── README.md
├── vite.config.js
├── yarn.lock
├── .eslintrc.js
├── eslintrc.config.js
├── .gitignore
├── package-lock.json
├── package.json
├── index.html
│
├── public
│    ├── data
│    │     ├── products.json
│    │     └── product_data.js
│    │   
│    └── images
│
└── src
     ├── App.jsx
     ├── App.css
     ├── index.css
     ├── main.jsx
     ├── ScrollSpyApp.css
     ├── ScrollSpyApp.jsx
     │
     ├── asset
     │     ├── google-login.svg
     │     └── noviral_logos.svg  
     │          
     ├── components
     │     ├── Button.jsx
     │     ├── CloseButton.jsx
     │     ├── Footer.jsx
     │     ├── Header.jsx
     │     ├── index.js
     │     ├── InputField.jsx
     │     ├── Modal.jsx
     │     ├── NavBar.jsx
     │     ├── productDisplay.jsx
     │     ├── ProductOverview.jsx
     │     ├── Sidebar.jsx
     │     ├── SteppedCorner.jsx
     │     └── SubNavBar.jsx
     │       
     ├── pages
     │     ├── Discussion.jsx
     │     ├── LoginPage.jsx
     │     ├── MainPage.jsx
     │     ├── ProductDetails.jsx
     │     ├── ProductList.jsx
     │     └── ProductPage.jsx
     │       
     ├── hooks
     │     ├── UseAlert.jsx
     │     └── UseProductData.jsx
     │       
     └── css
           ├── Button.css
           ├── CloseButton.css
           ├── Footer.css
           ├── InputField.css
           ├── LoginPage.css
           ├── MainPage.css
           ├── productDetails.css
           ├── productDisplay.css
           ├── ProductList.css
           ├── Sidebar.css
           └── SubNavBar.css
```

<br>

## [6] 팀 역할

### 🐢 황수범 (사파 개발자 겸 말 제일 많은사람 겸 PM)
- **개발 외**
  - 기획 (https://docs.google.com/presentation/d/1HGRkGJTlgUf4LgZTNhr4j82JmJDJIukIbqEtqNLN_Kw/edit?usp=sharing)
  - 디자인 with Figma (https://www.figma.com/design/BPyHFvMkRNADBN2mL7rV7F/%5BEST_FE%5D-NoViral?node-id=0-1&t=gqWUfpzIfMiVGBpB-1)
  - Task 관리 등
- **FE**
  - 갖가지 기타 오류사항 수정
 
<br>

### 🐬 문상일 (브레인 담당 겸 개발 팀장)
- **FE(UI)**
  - 제품 상세 페이지, 제품 토론 페이지, 모달
- **FE(function)**
  - 디렉토리 구조 정립
    - 컴포넌트, 훅, CSS를 페이지와 분리하여 더 체계적인 구조로 개선.
    - index.js 파일로 관리해 import 구문을 축약.
  - 반응형 디자인
  - HTML5 기본 기능 중시
    - 시맨틱 태그 적극 사용(time, small, dialog): 다른 페이지와 선택자 중복 문제 최소화.
    - 기본 모달 기능 활용(showModal, close 메소드): 스크립트 및 스타일 소요를 줄임.
  - 자료구조 통합 (feat. 이성재님)
  - 공용 컴포넌트 일부 수정 제안 (feat. 이해연님)
- **기능 구현 외**
  - 전역 스타일 관할 범위 지정
  - 팀장 대리: PM 부재시 회의 진행 및 회의록 작성
  - 커밋 메시지 상세 작성
  - 주석 문서화 (예정)
 
<br>

### 🃏 이해연 (개발 제일 빠른 사람 겸 에이스)
- **FE(UI)**
  - 메인 페이지, 주요 Components 개발
- **FE(function)**
  - !!! 입력바람
  -  
 
<br>

### 🐼 이성재 (중책 담당 겸 4개국어 능통자)
- **FE(UI)**
  - 상품 목록 페이지, 관리자 페이지 (예정)
- **FE(function)**
  - json 서버연결
  - 제품 목록 표시
  - 인터렉티브 사이드바 기능 구현
  - 스크롤 동기화
  - 반응형 디자인
  - 성능 최적화
    - 레이지 로딩 구현
  - 네이게이션 기능
  - 사용 라이브러리
    - React
    - React Router
    - Axios
    - Intersection Observer API
<br>

## [7] 개발 기간

- 전체 개발 기간 : 2024.09.24 ~
- MVP 개발 : 2024.09.24 ~ 2024.11.01

<br>

## [8] 페이지 구성
|                                                     페이지 구성표                                                  |
| :---------------------------------------------------------------------------------------------------------------: |
|           ![main-page](https://github.com/user-attachments/assets/d37d27e7-16d6-4282-b50b-753c32fadf71)           |
|                                                     메인 페이지                                                    |
|          ![login-page](https://github.com/user-attachments/assets/795f9a03-7e16-4f7e-96db-9ea6acd4ab96)           |
|                                                    로그인 페이지                                                   |
|           ![list-page](https://github.com/user-attachments/assets/388732e9-a258-4ec3-be22-0f7b16d88f06)           |
|                                                  제품 목록 페이지                                                  |
|         ![detail-page](https://github.com/user-attachments/assets/303827fd-57f9-46eb-be86-8d5b0ebb8011)           |
|                                                  제품 상세 페이지                                                  |
|         ![discussion-page](https://github.com/user-attachments/assets/9c076a10-7f0e-4934-8f0e-8ce8a0cef8e1)       |
|                                                  제품 토론 페이지                                                   |

<br>

## [9] 프로젝트 후기

### 🐢 황수범

사파 개발자인 황수범입니다... 참 좋은 팀원분들을 두었습니다. 프로젝트 경험이 좀 있는 편인데, 이 정도로 불협화음 없이 잘 굴러온 프로젝트는 처음인 것 같네요. 저는 비록 개발의 길을 떠나게 되었지만 (적어도 1년동안), 제가 알고 있는 지식과 경험을 팀원 분들에게 나누어 주고 싶었던 것이 1순위였고, 잘 전달 된 것 같아 기쁩니다. 모두 고마워용

<br>

### 🐬 문상일

이 프로젝트는 혼자서는 불가능했을 것입니다.  

처음 접한 소재였고, 제가 생각하지 못했던 아이디어들이 많이 담겨 있었습니다. 특히 기획은 짜임새가 좋으면서도 창의적이었고, 다양한 경험이 돋보였습니다. 또한 디자인이 우수해서, 디자인에 문외한인 저에게 큰 도움이 되었습니다. 덕분에 기능 구현에 더 집중할 수 있었습니다.

작업자 간의 결과물을 통합하는 경험도 처음이었습니다. 통합의 중요성을 알고는 있었지만, 실제로 충돌이 발생한 코드를 하나의 체계로 정리하는 일은 처음 겪는 도전이었습니다. 다행히 제가 디렉토리 체계를 조원들이 커밋하기 전에 어느 정도 정립해 두어서, 적어도 저에게는 혼란이 줄었습니다. 다른 분들은 어떻게 느꼈을지 모르겠습니다.

또한, 다른 프로젝트 주제를 제안했던 입장에서 많은 것을 배웠습니다. 흥미로운 주제라도 제반 지식이 충분하지 않으면 프로젝트를 진행하기 어렵다는 점을 깨달았습니다. 제가 제안했던 프로젝트는 FE적으로 순수하게 분석했을 때 평범하다는 평가를 받아, 다른 팀원들이 얻어갈 것이 적을 수 있다는 점도 반성하게 되었습니다. 다만 이번 경험을 바탕으로, 개인 프로젝트로 발전시키면 더 좋은 결과물이 나올 것으로 기대됩니다.

마지막으로 제 역할에 대한 적성을 일부 발견할 수 있었습니다. 팀장을 제외한 인원 중 제가 문서화에 가장 신경을 쓰는 모습을 보며, 이 부분에 강점이 있다는 것을 느꼈습니다. 하지만 이미지를 활용한 문서 작업은 다소 부담스럽고, 커밋 메시지나 주석 같은 순수 텍스트 기반의 작업이 저에게는 더 편했습니다.

즐거웠습니다! 모두들 감사함닷!!

<br>

### 🃏 이해연

여기에 입력해 주세요

<br>

### 🐼 이성재

반전공 개발자 이성재입니다. 나름 프론트 관련은 아니었지만 다른 분들에 비해 CS를 어느정도 배우고 왔다라고 생각했는데, 훨씬 더 뛰어나신 분들이 많다는 것을 알게 되었습니다.
실력있는 많은 좋은 동료분들을 만났는데 그 중에서도 더욱 특출난 분들이랑 함께 협업을 할 기회를 얻게 되어 매우 성장할 수 있는 기회였습니다. 특히 다양한 분야에서 경험을 해오신 팀장님 덕분에 실제로 현업에서 프로젝트를 기획부터 서비스를 한다면 이렇게 하지 않을까... 하고 느꼈던 시간이었습니다. 중간에 안좋은 일도 있었고 어려움도 있었지만 끝까지 맡은 바 업무들을 함께 해결해 나가신 해연님, 상일님께도 매우 감사합니다. 추후에도 계속 지속적으로 연락하며 좋은 인연 이어갔으면 좋겠습니다.
다시 한번 모두에게 매우 감사드립니다.
