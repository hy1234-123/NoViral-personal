# N O   V I R A L

![main-img](https://github.com/user-attachments/assets/5131cfb2-8a8f-4e50-b26a-2944564d9d81)

- 배포 URL : https://noviral.vercel.app/

<br>

## [1] 팀 구성

<div align="center">

| **문상일** | **이성재** | **이해연** | **황수범** |
| :------: |  :------: | :------: | :------: |
| [@깃허브 아이디](깃허브 링크) | [@DKULena](https://github.com/DKULena) | [@깃허브 아이디](깃허브 링크) | [@Peace1128](https://github.com/Peace1128) |
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
  - !!! 입력바람
 
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
  - !!! 입력바람

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

여기에 입력해 주세요

<br>

### 🃏 이해연

여기에 입력해 주세요

<br>

### 🐼 이성재

여기에 입력해 주세요
