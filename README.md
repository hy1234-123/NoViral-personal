# N O   V I R A L

![main-img](https://github.com/user-attachments/assets/5131cfb2-8a8f-4e50-b26a-2944564d9d81)

- 배포 URL : https://noviral.vercel.app/

<br>

## [1] 팀 구성

<div align="center">

| **문상일** | **이성재** | **이해연** | **황수범** |
| :------: |  :------: | :------: | :------: |
| [<img src="링크" height=150 width=150> <br/> @깃허브 아이디](깃허브 링크) | [<img src="링크" height=150 width=150> <br/> @깃허브 아이디](깃허브 링크) | [<img src="링크" height=150 width=150> <br/> @깃허브 아이디](깃허브 링크) | [<img src="링크" height=150 width=150> <br/> @깃허브 아이디](깃허브 링크) |

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
           ├── Sidebar.jsx
           ├── Sidebar.jsx
           ├── Sidebar.jsx
           ├── Sidebar.jsx
           ├── Sidebar.jsx
           ├── Sidebar.jsx
           ├── Sidebar.jsx
           ├── Sidebar.jsx

           └── Globalstyled.jsx
```

```

├─components
│      Button.jsx
│      CloseButton.jsx
│      Footer.jsx
│      Header.jsx
│      index.js
│      InputField.jsx
│      Modal.jsx
│      NavBar.jsx
│      productDisplay.jsx
│      ProductOverview.jsx
│      Sidebar.jsx
│      SteppedCorner.jsx
│      SubNavBar.jsx
│      
├─css
│      Button.css
│      CloseButton.css
│      Footer.css
│      InputField.css
│      LoginPage.css
│      MainPage.css
│      NavBar.css
│      productDetails.css
│      productDisplay.css
│      ProductList.css
│      Sidebar.css
│      SubNavBar.css
│      
└─pages
        Discussion.jsx
        LoginPage.jsx
        MainPage.jsx
        ProductDetails.jsx
        ProductList.jsx
        ProductPage.jsx
        
