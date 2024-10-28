const productData = [
  {
      id : 1,
      product_name : "Logitech G102",
      description : "무선 지원",
      width : "40mm",
      depth: "63.5mm",
      height : "125mm",
      weight: "60g",
      price : "22,210",
      currency : "원",
      color: "Black, White, Pink",
      thumbnail : "/images/logitech_g102.png",
      opinions: [
          {
              "content": "사용해본 결과 매우 만족스럽습니다.",
              "author": "사용자1",
              "date": "2024-09-26T14:00",
              "upvotes": 55,
              "downvotes": 3
          },
          {
              "content": "가격 대비 성능이 우수합니다.",
              "author": "사용자2",
              "date": "2024-09-27T10:30",
              "upvotes": 76,
              "downvotes": 10
          },
          {
              "content": "선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. \n 모든 국민은 학문과 예술의 자유를 가진다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.",
              "author": "사용자3",
              "date": "2024-10-14T10:30",
              "upvotes": 7,
              "downvotes": 1
          },
          {
              "content": "대한민국의 영토는 한반도와 그 부속도서로 한다. 모든 국민은 언론·출판의 자유와 집회·결사의 자유를 가진다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다. \n 국회의원은 국가이익을 우선하여 양심에 따라 직무를 행한다. 누구든지 체포 또는 구속을 당한 때에는 즉시 변호인의 조력을 받을 권리를 가진다. 다만, 형사피고인이 스스로 변호인을 구할 수 없을 때에는 법률이 정하는 바에 의하여 국가가 변호인을 붙인다. \n 국회는 국가의 예산안을 심의·확정한다. 국회는 의장 1인과 부의장 2인을 선출한다. 계엄을 선포한 때에는 대통령은 지체없이 국회에 통고하여야 한다. \n 외국인은 국제법과 조약이 정하는 바에 의하여 그 지위가 보장된다. 대통령은 헌법과 법률이 정하는 바에 의하여 공무원을 임면한다. 중앙선거관리위원회는 대통령이 임명하는 3인, 국회에서 선출하는 3인과 대법원장이 지명하는 3인의 위원으로 구성한다. 위원장은 위원중에서 호선한다.\n 공무원인 근로자는 법률이 정하는 자에 한하여 단결권·단체교섭권 및 단체행동권을 가진다. 대법원장의 임기는 6년으로 하며, 중임할 수 없다. 누구든지 체포 또는 구속의 이유와 변호인의 조력을 받을 권리가 있음을 고지받지 아니하고는 체포 또는 구속을 당하지 아니한다. 체포 또는 구속을 당한 자의 가족등 법률이 정하는 자에게는 그 이유와 일시·장소가 지체없이 통지되어야 한다. \n 대통령은 조국의 평화적 통일을 위한 성실한 의무를 진다. 국무총리는 국무위원의 해임을 대통령에게 건의할 수 있다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다.",
              "author": "사용자4",
              "date": "2024-10-15T10:30",
              "upvotes": 6,
              "downvotes": 0
          },
      ]
  },
  {
      id : 2,
      product_name : "Logitech G304",
      description : "무선 지원",
      width : "40mm",
      depth: "63.5mm",
      height : "125mm",
      weight: "60g",
      price : "55,510",
      currency : "원",
      color: "Black, White, Pink",
      thumbnail : "/images/logitech_g304.png",
      opinions: [
          {
              "content": "사용해본 결과 매우 만족스럽습니다.",
              "author": "사용자1",
              "date": "2024-09-26T14:00",
              "upvotes": 55,
              "downvotes": 3
          },
          {
              "content": "가격 대비 성능이 우수합니다.",
              "author": "사용자2",
              "date": "2024-09-27T10:30",
              "upvotes": 76,
              "downvotes": 10
          },
          {
              "content": "선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. \n 모든 국민은 학문과 예술의 자유를 가진다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.",
              "author": "사용자3",
              "date": "2024-10-14T10:30",
              "upvotes": 7,
              "downvotes": 1
          },
      ]
  },
  {
      id : 3,
      product_name : "Logitech G Pro X SUPERLIGHT2",
      description : "무선 지원",
      width : "40mm",
      depth: "63.5mm",
      height : "125mm",
      weight: "60g",
      price : "195,800",
      currency : "원",
      color: "Black, White, Pink",
      thumbnail : "/images/logitech_gSuperLight.png",
      opinions: [
          {
              "content": "사용해본 결과 매우 만족스럽습니다.",
              "author": "사용자1",
              "date": "2024-09-26T14:00",
              "upvotes": 55,
              "downvotes": 3
          },
          {
              "content": "가격 대비 성능이 우수합니다.",
              "author": "사용자2",
              "date": "2024-09-27T10:30",
              "upvotes": 76,
              "downvotes": 10
          },
          {
              "content": "선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. \n 모든 국민은 학문과 예술의 자유를 가진다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.",
              "author": "사용자3",
              "date": "2024-10-14T10:30",
              "upvotes": 7,
              "downvotes": 1
          },
      ]
  },
  {
      id : 4,
      product_name : "Logitech G904",
      description : "무선 지원",
      width : "40mm",
      depth: "63.5mm",
      height : "125mm",
      weight: "60g",
      price : "195,800",
      currency : "원",
      color: "Black, White, Pink",
      thumbnail : "/images/logitech_g904.png",
      opinions: [
          {
              "content": "사용해본 결과 매우 만족스럽습니다.",
              "author": "사용자1",
              "date": "2024-09-26T14:00",
              "upvotes": 55,
              "downvotes": 3
          },
          {
              "content": "가격 대비 성능이 우수합니다.",
              "author": "사용자2",
              "date": "2024-09-27T10:30",
              "upvotes": 76,
              "downvotes": 10
          },
          {
              "content": "선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. \n 모든 국민은 학문과 예술의 자유를 가진다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.",
              "author": "사용자3",
              "date": "2024-10-14T10:30",
              "upvotes": 7,
              "downvotes": 1
          },
      ]
  },
  {
      id : 5,
      product_name : "Logitech G305",
      description : "무선 지원",
      width : "40mm",
      depth: "63.5mm",
      height : "125mm",
      weight: "60g",
      price : "22,210",
      currency : "원",
      color: "Black, White, Pink",
      thumbnail : "/images/logitech_g305.png",
      opinions: [
          {
              "content": "사용해본 결과 매우 만족스럽습니다.",
              "author": "사용자1",
              "date": "2024-09-26T14:00",
              "upvotes": 55,
              "downvotes": 3
          },
          {
              "content": "가격 대비 성능이 우수합니다.",
              "author": "사용자2",
              "date": "2024-09-27T10:30",
              "upvotes": 76,
              "downvotes": 10
          },
          {
              "content": "선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. \n 모든 국민은 학문과 예술의 자유를 가진다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.",
              "author": "사용자3",
              "date": "2024-10-14T10:30",
              "upvotes": 7,
              "downvotes": 1
          },
      ]
  },
  {
      id : 6,
      product_name : "Razer Viper V3 Pro",
      description : "무선 지원",
      width : "40mm",
      depth: "63.5mm",
      height : "125mm",
      weight: "60g",
      price : "22,210",
      currency : "원",
      color: "Black, White, Pink",
      thumbnail : "/images/Razer_Viper_V3_Pro.png",
      opinions: [
          {
              "content": "사용해본 결과 매우 만족스럽습니다.",
              "author": "사용자1",
              "date": "2024-09-26T14:00",
              "upvotes": 55,
              "downvotes": 3
          },
          {
              "content": "가격 대비 성능이 우수합니다.",
              "author": "사용자2",
              "date": "2024-09-27T10:30",
              "upvotes": 76,
              "downvotes": 10
          },
          {
              "content": "선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. \n 모든 국민은 학문과 예술의 자유를 가진다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.",
              "author": "사용자3",
              "date": "2024-10-14T10:30",
              "upvotes": 7,
              "downvotes": 1
          },
      ]
  },
  {
      id : 7,
      product_name : "Logitech G304",
      description : "무선 지원",
      width : "40mm",
      depth: "63.5mm",
      height : "125mm",
      weight: "60g",
      price : "55,510",
      currency : "원",
      color: "Black, White, Pink",
      thumbnail : "/images/logitech_g304.png",
      opinions: [
          {
              "content": "사용해본 결과 매우 만족스럽습니다.",
              "author": "사용자1",
              "date": "2024-09-26T14:00",
              "upvotes": 55,
              "downvotes": 3
          },
          {
              "content": "가격 대비 성능이 우수합니다.",
              "author": "사용자2",
              "date": "2024-09-27T10:30",
              "upvotes": 76,
              "downvotes": 10
          },
          {
              "content": "선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. \n 모든 국민은 학문과 예술의 자유를 가진다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.",
              "author": "사용자3",
              "date": "2024-10-14T10:30",
              "upvotes": 7,
              "downvotes": 1
          },
      ]
  },
  {
      id : 8,
      product_name : "Logitech G305",
      description : "무선 지원",
      width : "40mm",
      depth: "63.5mm",
      height : "125mm",
      weight: "60g",
      price : "22,210",
      currency : "원",
      color: "Black, White, Pink",
      thumbnail : "/images/logitech_g305.png",
      opinions: [
          {
              "content": "사용해본 결과 매우 만족스럽습니다.",
              "author": "사용자1",
              "date": "2024-09-26T14:00",
              "upvotes": 55,
              "downvotes": 3
          },
          {
              "content": "가격 대비 성능이 우수합니다.",
              "author": "사용자2",
              "date": "2024-09-27T10:30",
              "upvotes": 76,
              "downvotes": 10
          },
          {
              "content": "선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. \n 모든 국민은 학문과 예술의 자유를 가진다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.",
              "author": "사용자3",
              "date": "2024-10-14T10:30",
              "upvotes": 7,
              "downvotes": 1
          },
      ]
  },
  {
      id : 9,
      product_name : "Logitech G904",
      description : "무선 지원",
      width : "40mm",
      depth: "63.5mm",
      height : "125mm",
      weight: "60g",
      price : "195,800",
      currency : "원",
      color: "Black, White, Pink",
      thumbnail : "/images/logitech_g904.png",
      opinions: [
          {
              "content": "사용해본 결과 매우 만족스럽습니다.",
              "author": "사용자1",
              "date": "2024-09-26T14:00",
              "upvotes": 55,
              "downvotes": 3
          },
          {
              "content": "가격 대비 성능이 우수합니다.",
              "author": "사용자2",
              "date": "2024-09-27T10:30",
              "upvotes": 76,
              "downvotes": 10
          },
          {
              "content": "선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. \n 모든 국민은 학문과 예술의 자유를 가진다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.",
              "author": "사용자3",
              "date": "2024-10-14T10:30",
              "upvotes": 7,
              "downvotes": 1
          },
      ]
  },
  {
      id : 10,
      product_name : "logitech_g304",
      description : "무선 지원",
      width : "40mm",
      depth: "63.5mm",
      height : "125mm",
      weight: "60g",
      price : "22,210",
      currency : "원",
      color: "Black, White, Pink",
      thumbnail : "/images/logitech_g304.png",
      opinions: [
          {
              "content": "사용해본 결과 매우 만족스럽습니다.",
              "author": "사용자1",
              "date": "2024-09-26T14:00",
              "upvotes": 55,
              "downvotes": 3
          },
          {
              "content": "가격 대비 성능이 우수합니다.",
              "author": "사용자2",
              "date": "2024-09-27T10:30",
              "upvotes": 76,
              "downvotes": 10
          },
          {
              "content": "선거운동은 각급 선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 모든 국민은 법률이 정하는 바에 의하여 국방의 의무를 진다. \n 모든 국민은 학문과 예술의 자유를 가진다. 재판의 전심절차로서 행정심판을 할 수 있다. 행정심판의 절차는 법률로 정하되, 사법절차가 준용되어야 한다.",
              "author": "사용자3",
              "date": "2024-10-14T10:30",
              "upvotes": 7,
              "downvotes": 1
          },
      ]
  },
]

export default productData;