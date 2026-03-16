const generatedProducts = [
  {
    "id": 255,
    "name": {
      "uz": "Pripravych Lagmon Uchun",
      "ru": "Приправыч Приправа для Лагмана",
      "kr": "Pripravych 라그만용",
      "en": "Pripravych Lagman Seasoning"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-09.jpg"
  },
  {
    "id": 256,
    "name": {
      "uz": "Pripravych Palov Uchun",
      "ru": "Приправыч Приправа для Плова",
      "kr": "Pripravych 필라프용",
      "en": "Pripravych Pilaf Seasoning"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-11.jpg"
  },
  {
    "id": 257,
    "name": {
      "uz": "Saf-Instant Yeast 125g",
      "ru": "Саф-Инстант Дрожжи 125г",
      "kr": "Saf-Instant 이스트 125g",
      "en": "Saf-Instant Yeast 125g"
    },
    "price": 1,
    "category": "Pishirish",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-13.jpg"
  },
  {
    "id": 258,
    "name": {
      "uz": "Angel Instant Dry Yeast 15g",
      "ru": "Ангел Мгновенные Сухие Дрожжи 15г",
      "kr": "Angel 인스턴트 드라이 이스트 15g",
      "en": "Angel Instant Dry Yeast 15g"
    },
    "price": 1,
    "category": "Pishirish",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-16.jpg"
  },
  {
    "id": 259,
    "name": {
      "uz": "Pripravych Drozhzhi Aktivnye 10g",
      "ru": "Приправыч Дрожжи Активные 10г",
      "kr": "Pripravych 활성 이스트 10g",
      "en": "Pripravych Active Dry Yeast 10g"
    },
    "price": 1,
    "category": "Pishirish",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-18.jpg"
  },
  {
    "id": 260,
    "name": {
      "uz": "Green Touch Wipes 100",
      "ru": "Грин Тач Салфетки 100шт",
      "kr": "Green Touch 물티슈 100매",
      "en": "Green Touch Wipes 100pcs"
    },
    "price": 1,
    "category": "Tozalash",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-21.jpg"
  },
  {
    "id": 261,
    "name": {
      "uz": "Aseel Pure Butter Ghee",
      "ru": "Асил Топлёное Масло",
      "kr": "Aseel 퓨어 버터 기",
      "en": "Aseel Pure Butter Ghee"
    },
    "price": 1,
    "category": "Yog'",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-23.jpg"
  },
  {
    "id": 262,
    "name": {
      "uz": "Mehran Hyderabadi Biryani 100g",
      "ru": "Мехран Хайдерабадский Бирьяни 100г",
      "kr": "Mehran 하이데라바디 비리야니 100g",
      "en": "Mehran Hyderabadi Biryani 100g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-26.jpg"
  },
  {
    "id": 263,
    "name": {
      "uz": "Safoco Bun Tuoi Rice Vermicelli 300g",
      "ru": "Сафоко Рисовая Вермишель 300г",
      "kr": "Safoco 쌀국수 300g",
      "en": "Safoco Bun Tuoi Rice Vermicelli 300g"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-28.jpg"
  },
  {
    "id": 264,
    "name": {
      "uz": "She's Fun Bay Leaves 15g",
      "ru": "She's Fun Лавровый Лист 15г",
      "kr": "She's Fun 월계수잎 15g",
      "en": "She's Fun Bay Leaves 15g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-30.jpg"
  },
  {
    "id": 265,
    "name": {
      "uz": "Omega Lavroviy List 20g",
      "ru": "Омега Лавровый Лист 20г",
      "kr": "Omega 월계수잎 20g",
      "en": "Omega Bay Leaves 20g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-35.jpg"
  },
  {
    "id": 266,
    "name": {
      "uz": "Omega Petrushka Ko'kati",
      "ru": "Омега Петрушка Сушёная",
      "kr": "Omega 파슬리",
      "en": "Omega Dried Parsley"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-37.jpg"
  },
  {
    "id": 267,
    "name": {
      "uz": "Omega Kashnich Urugi (Koriandr)",
      "ru": "Омега Кориандр Целый",
      "kr": "Omega 고수씨",
      "en": "Omega Whole Coriander"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-38.jpg"
  },
  {
    "id": 268,
    "name": {
      "uz": "Omega Quritilgan Qalampir (Qizil)",
      "ru": "Омега Перец Красный Сушёный",
      "kr": "Omega 건조피망",
      "en": "Omega Dried Bell Pepper"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-39.jpg"
  },
  {
    "id": 269,
    "name": {
      "uz": "Omega Achchiq Qizil Qalampir",
      "ru": "Омега Перец Красный Острый",
      "kr": "Omega 건조피망 (매운)",
      "en": "Omega Hot Red Pepper"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-40.jpg"
  },
  {
    "id": 270,
    "name": {
      "uz": "Omega Shivit Ko'kati (Ukrop)",
      "ru": "Омега Укроп Сушёный",
      "kr": "Omega 건조 시양자초",
      "en": "Omega Dried Dill"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-42.jpg"
  },
  {
    "id": 271,
    "name": {
      "uz": "Omega Qora Qalampir Kukuni",
      "ru": "Омега Перец Чёрный Молотый",
      "kr": "Omega 흑후추분말",
      "en": "Omega Ground Black Pepper"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-43.jpg"
  },
  {
    "id": 272,
    "name": {
      "uz": "Omega Ra'no Ko'kati (Myata)",
      "ru": "Омега Мята",
      "kr": "Omega 페퍼민트",
      "en": "Omega Peppermint"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-45.jpg"
  },
  {
    "id": 273,
    "name": {
      "uz": "Omega Zira (Cumin)",
      "ru": "Омега Зира",
      "kr": "Omega 쿠민",
      "en": "Omega Cumin"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-46.jpg"
  },
  {
    "id": 274,
    "name": {
      "uz": "Omega Qora Qalampir Donasi",
      "ru": "Омега Перец Чёрный Горошек",
      "kr": "Omega 통후추",
      "en": "Omega Whole Black Pepper"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-47.jpg"
  },
  {
    "id": 275,
    "name": {
      "uz": "Noor & Noor Nigella Seeds 125g",
      "ru": "Нур & Нур Семена Нигеллы 125г",
      "kr": "Noor & Noor 니겔라 씨앗 125g",
      "en": "Noor & Noor Nigella Seeds 125g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-48.jpg"
  },
  {
    "id": 276,
    "name": {
      "uz": "Dream Cumin Powder 200g",
      "ru": "Дрим Тмин Молотый 200г",
      "kr": "Dream 쿠민 파우더 200g",
      "en": "Dream Cumin Powder 200g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-50.jpg"
  },
  {
    "id": 277,
    "name": {
      "uz": "Dream Turmeric Powder 200g",
      "ru": "Дрим Куркума 200г",
      "kr": "Dream 강황 파우더 200g",
      "en": "Dream Turmeric Powder 200g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-51.jpg"
  },
  {
    "id": 278,
    "name": {
      "uz": "Dream Coriander Powder 200g",
      "ru": "Дрим Кориандр Молотый 200г",
      "kr": "Dream 고수 파우더 200g",
      "en": "Dream Coriander Powder 200g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-52.jpg"
  },
  {
    "id": 279,
    "name": {
      "uz": "Toast Rusk 250g",
      "ru": "Тост Раск 250г",
      "kr": "토스트 러스크 250g",
      "en": "Toast Rusk 250g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-55.jpg"
  },
  {
    "id": 280,
    "name": {
      "uz": "Alin Baby Toast",
      "ru": "Алин Бэйби Тост",
      "kr": "Alin 베이비 토스트",
      "en": "Alin Baby Toast"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-57.jpg"
  },
  {
    "id": 281,
    "name": {
      "uz": "Banoful Dry Cake",
      "ru": "Банофул Сухой Кекс",
      "kr": "Banoful 드라이 케이크",
      "en": "Banoful Dry Cake"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-00.jpg"
  },
  {
    "id": 282,
    "name": {
      "uz": "Pran Dry Cake",
      "ru": "Пран Сухой Кекс",
      "kr": "Pran 드라이 케이크",
      "en": "Pran Dry Cake"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-01.jpg"
  },
  {
    "id": 283,
    "name": {
      "uz": "United King Soan Papdi 250g",
      "ru": "Юнайтед Кинг Соан Папди 250г",
      "kr": "United King 소안 파프디 250g",
      "en": "United King Soan Papdi 250g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-03.jpg"
  },
  {
    "id": 284,
    "name": {
      "uz": "Gemez Spicy Enaak Level 1",
      "ru": "Гемез Острые Снеки Уровень 1",
      "kr": "Gemez 스파이시 에낙 레벨1",
      "en": "Gemez Spicy Enaak Level 1"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-04.jpg"
  },
  {
    "id": 285,
    "name": {
      "uz": "Bikano Pani Puri 300g",
      "ru": "Бикано Пани Пури 300г",
      "kr": "Bikano 파니 푸리 300g",
      "en": "Bikano Pani Puri 300g"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-06.jpg"
  },
  {
    "id": 286,
    "name": {
      "uz": "Kashka Minutka Qulupnayli",
      "ru": "Кашка Минутка с Клубникой",
      "kr": "카슈카 미누트카 딸기맛",
      "en": "Kashka Minutka Strawberry Oatmeal"
    },
    "price": 1,
    "category": "Yormalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-07.jpg"
  },
  {
    "id": 287,
    "name": {
      "uz": "Kashka Minutka Olchali",
      "ru": "Кашка Минутка с Вишней",
      "kr": "카슈카 미누트카 체리맛",
      "en": "Kashka Minutka Cherry Oatmeal"
    },
    "price": 1,
    "category": "Yormalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-08.jpg"
  },
  {
    "id": 288,
    "name": {
      "uz": "Kashka Minutka Yovvoyi Qulupnayli",
      "ru": "Кашка Минутка с Земляникой",
      "kr": "카슈카 미누트카 산딸기맛",
      "en": "Kashka Minutka Wild Strawberry Oatmeal"
    },
    "price": 1,
    "category": "Yormalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-10.jpg"
  },
  {
    "id": 289,
    "name": {
      "uz": "Makiz Pasta Makaron",
      "ru": "Макиз Макароны Необыкновенные",
      "kr": "Makiz 파스타",
      "en": "Makiz Pasta"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-11.jpg"
  },
  {
    "id": 290,
    "name": {
      "uz": "Teer Puffed Rice 250g",
      "ru": "Тир Воздушный Рис 250г",
      "kr": "Teer 뻥튀기 쌀 250g",
      "en": "Teer Puffed Rice 250g"
    },
    "price": 1,
    "category": "Go'sht va Baliq",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-12.jpg"
  },
  {
    "id": 291,
    "name": {
      "uz": "Rajdhani Soy Nuggets 200g",
      "ru": "Раджани Соевые Наггетсы 200г",
      "kr": "Rajdhani 콩 너겟 200g",
      "en": "Rajdhani Soy Nuggets 200g"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-13.jpg"
  },
  {
    "id": 292,
    "name": {
      "uz": "Deepak Soya Chunks 200g",
      "ru": "Дипак Соевые Кусочки 200г",
      "kr": "Deepak 대두 청크 200g",
      "en": "Deepak Soya Chunks 200g"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-15.jpg"
  },
  {
    "id": 293,
    "name": {
      "uz": "Ulker Cikolata Sutli",
      "ru": "Ülker Молочный Шоколад",
      "kr": "Ülker 밀크 초콜릿",
      "en": "Ülker Milk Chocolate"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-17.jpg"
  },
  {
    "id": 294,
    "name": {
      "uz": "Babayevskiy Elit 75% Kakao",
      "ru": "Бабаевский Элитный 75% Какао",
      "kr": "Babayevskiy 엘리트 75% 카카오",
      "en": "Babayevskiy Elite 75% Cocoa"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-18.jpg"
  },
  {
    "id": 295,
    "name": {
      "uz": "Babayevskiy Bodomli Qora Shokolad",
      "ru": "Бабаевский Тёмный с Миндалём",
      "kr": "Babayevskiy 아몬드 다크 초콜릿",
      "en": "Babayevskiy Dark Chocolate with Almonds"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-19.jpg"
  },
  {
    "id": 296,
    "name": {
      "uz": "Babayevskiy Funduk va Mayizli",
      "ru": "Бабаевский Тёмный с Фундуком и Изюмом",
      "kr": "Babayevskiy 헤이즐넛 건포도 다크",
      "en": "Babayevskiy Dark with Hazelnuts & Raisins"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-20.jpg"
  },
  {
    "id": 297,
    "name": {
      "uz": "Alyonka 3 Ta'm Troynoy Desert",
      "ru": "Алёнка Тройной Десерт 3 Вкуса",
      "kr": "알료카 트리플 디저트 3맛",
      "en": "Alyonka Triple Dessert 3 Flavors"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-21.jpg"
  },
  {
    "id": 298,
    "name": {
      "uz": "Alyonka Sutli Shokolad Poristiy",
      "ru": "Алёнка Молочный Шоколад Пористый",
      "kr": "알료카 밀크 초콜릿 에어",
      "en": "Alyonka Porous Milk Chocolate"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-22.jpg"
  },
  {
    "id": 299,
    "name": {
      "uz": "Alionka Fundukli Sutli Shokolad",
      "ru": "Алёнка Молочный Шоколад с Фундуком",
      "kr": "Alionka 헤이즐넛 밀크 초콜릿",
      "en": "Alionka Milk Chocolate Hazelnut"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-23.jpg"
  },
  {
    "id": 300,
    "name": {
      "uz": "Alionka Sutli Shokolad Sticks 100g",
      "ru": "Алёнка Шоколадные Палочки 100г",
      "kr": "Alionka 밀크 초콜릿 스틱 100g",
      "en": "Alionka Milk Chocolate Sticks 100g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-25.jpg"
  },
  {
    "id": 301,
    "name": {
      "uz": "Alionka Sutli Shokolad",
      "ru": "Алёнка Молочный Шоколад",
      "kr": "Alionka 밀크 초콜릿",
      "en": "Alionka Milk Chocolate"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-26.jpg"
  },
  {
    "id": 302,
    "name": {
      "uz": "Bonucci Waffle Cake Kakao",
      "ru": "Бонуччи Вафельный Торт Какао",
      "kr": "Bonucci 와플 케이크 코코아",
      "en": "Bonucci Waffle Cake Cocoa"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-27.jpg"
  },
  {
    "id": 303,
    "name": {
      "uz": "Snickers 51g",
      "ru": "Сникерс 51г",
      "kr": "스니커즈 51g",
      "en": "Snickers 51g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-28.jpg"
  },
  {
    "id": 304,
    "name": {
      "uz": "Snickers Quti 24x51g",
      "ru": "Сникерс Коробка 24x51г",
      "kr": "스니커즈 박스 24x51g",
      "en": "Snickers Box 24x51g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-29.jpg"
  },
  {
    "id": 305,
    "name": {
      "uz": "Rakhat Kazakhstan Qora Shokolad",
      "ru": "Рахат Казахстан Тёмный Шоколад",
      "kr": "Rakhat 카자흐스탄 다크 초콜릿",
      "en": "Rakhat Kazakhstan Dark Chocolate"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-30 (2).jpg"
  },
  {
    "id": 306,
    "name": {
      "uz": "Ulker Metro Klasik",
      "ru": "Ülker Метро Классик",
      "kr": "Ülker 메트로 클래식",
      "en": "Ülker Metro Classic"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-30.jpg"
  },
  {
    "id": 307,
    "name": {
      "uz": "Yashkino Sutli Shokolad 90g",
      "ru": "Яшкино Молочный Шоколад 90г",
      "kr": "Yashkino 밀크 초콜릿 90g",
      "en": "Yashkino Milk Chocolate 90g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-31.jpg"
  },
  {
    "id": 308,
    "name": {
      "uz": "Yashkino Yeryong'oqli Sutli Shokolad 90g",
      "ru": "Яшкино Молочный Шоколад с Арахисом 90г",
      "kr": "Yashkino 땅콩 밀크 초콜릿 90g",
      "en": "Yashkino Milk Chocolate with Peanuts 90g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-32.jpg"
  },
  {
    "id": 309,
    "name": {
      "uz": "Babayevskiy Nokli va Bodomli 54.8%",
      "ru": "Бабаевский с Грушей и Миндалём 54.8%",
      "kr": "Babayevskiy 배&아몬드 54.8%",
      "en": "Babayevskiy Pear & Almond 54.8%"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-33.jpg"
  },
  {
    "id": 310,
    "name": {
      "uz": "Babayevskiy Keshyu va Fundukli 54.8%",
      "ru": "Бабаевский с Кешью и Фундуком 54.8%",
      "kr": "Babayevskiy 캐슈&헤이즐넛 54.8%",
      "en": "Babayevskiy Cashew & Hazelnut 54.8%"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-34.jpg"
  },
  {
    "id": 311,
    "name": {
      "uz": "Babayevskiy Malinali va Bodomli 54.8%",
      "ru": "Бабаевский с Малиной и Миндалём 54.8%",
      "kr": "Babayevskiy 라즈베리&아몬드 54.8%",
      "en": "Babayevskiy Raspberry & Almond 54.8%"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-35.jpg"
  },
  {
    "id": 312,
    "name": {
      "uz": "SkyFlakes Cracker Sandwich Shokoladli 300g",
      "ru": "СкайФлейкс Крекер Сэндвич Шоколад 300г",
      "kr": "SkyFlakes 크래커 샌드위치 초콜릿 300g",
      "en": "SkyFlakes Cracker Sandwich Chocolate 300g"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-36.jpg"
  },
  {
    "id": 313,
    "name": {
      "uz": "Elvan Truffle Assortment 1000g",
      "ru": "Элван Трюфель Ассорти 1000г",
      "kr": "Elvan 트러플 어소트먼트 1000g",
      "en": "Elvan Truffle Assortment 1000g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-37.jpg"
  },
  {
    "id": 314,
    "name": {
      "uz": "Piccadeli Silka Crispies Shokolad",
      "ru": "Пикадели Силка Криспис Шоколад",
      "kr": "Piccadeli Silka 크리스피 초콜릿",
      "en": "Piccadeli Silka Crispies Chocolate"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-38.jpg"
  },
  {
    "id": 315,
    "name": {
      "uz": "Baldyozh Wafer Bar Yong'oqli",
      "ru": "Балдёж Вафельный Батончик с Ореховой Пастой",
      "kr": "Baldyozh 와퍼 바 너트",
      "en": "Baldyozh Wafer Bar with Nut Paste"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-39.jpg"
  },
  {
    "id": 316,
    "name": {
      "uz": "Kalpa Wafer Kokosli Shokoladli 20g",
      "ru": "Калпа Вафли Кокос Шоколад 20г",
      "kr": "Kalpa 와퍼 코코넛 초콜릿 20g",
      "en": "Kalpa Wafer Coconut Chocolate 20g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-40.jpg"
  },
  {
    "id": 317,
    "name": {
      "uz": "35 Emotion Shokolad Konfet",
      "ru": "35 Эмоушн Шоколадная Конфета",
      "kr": "35 이모션 초콜릿 캔디",
      "en": "35 Emotion Chocolate Candy"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-41.jpg"
  },
  {
    "id": 318,
    "name": {
      "uz": "Snickers Fun Size 500g",
      "ru": "Сникерс Фан Сайз 500г",
      "kr": "스니커즈 펀 사이즈 500g",
      "en": "Snickers Fun Size 500g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-42.jpg"
  },
  {
    "id": 319,
    "name": {
      "uz": "Twix Minis 500g",
      "ru": "Твикс Минис 500г",
      "kr": "트윅스 미니스 500g",
      "en": "Twix Minis 500g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-43.jpg"
  },
  {
    "id": 320,
    "name": {
      "uz": "Vkusnaya Konfeta Baldyozh 500g",
      "ru": "Вкусная Конфета Балдёж 500г",
      "kr": "브쿠스나야 콘페타 발뎨즈 500g",
      "en": "Vkusnaya Konfeta Baldyozh 500g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-44.jpg"
  },
  {
    "id": 321,
    "name": {
      "uz": "Gompyo Milgaru Un 1kg",
      "ru": "Гомпё Пшеничная Мука 1кг",
      "kr": "곰표 밀가루 1kg",
      "en": "Gompyo Wheat Flour 1kg"
    },
    "price": 1,
    "category": "Pishirish",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-45 (2).jpg"
  },
  {
    "id": 322,
    "name": {
      "uz": "Dayozh Vkusnaya Konfeta Bananli",
      "ru": "Даёж Вкусная Конфета Банан",
      "kr": "다요즈 맛있는 캔디 바나나",
      "en": "Dayozh Vkusnaya Konfeta Banana"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-45.jpg"
  },
  {
    "id": 323,
    "name": {
      "uz": "Gompyo Milgaru Un 2.5kg",
      "ru": "Гомпё Пшеничная Мука 2.5кг",
      "kr": "곰표 밀가루 2.5kg",
      "en": "Gompyo Wheat Flour 2.5kg"
    },
    "price": 1,
    "category": "Pishirish",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-46.jpg"
  },
  {
    "id": 324,
    "name": {
      "uz": "Mello Marshmallow Round Twist 135g",
      "ru": "Мелло Маршмеллоу Раунд Твист 135г",
      "kr": "Mello 마시멜로 라운드 트위스트 135g",
      "en": "Mello Marshmallow Round Twist 135g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-47.jpg"
  },
  {
    "id": 325,
    "name": {
      "uz": "Mello Marshmallow Mello Twist 135g",
      "ru": "Мелло Маршмеллоу Мелло Твист 135г",
      "kr": "Mello 마시멜로 멜로 트위스트 135g",
      "en": "Mello Marshmallow Mello Twist 135g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-48.jpg"
  },
  {
    "id": 326,
    "name": {
      "uz": "Korovka Konfet 30% Sut 250g",
      "ru": "Коровка Конфеты 30% Молока 250г",
      "kr": "Korovka 캔디 30% 우유 250g",
      "en": "Korovka Candy 30% Milk 250g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-49.jpg"
  },
  {
    "id": 327,
    "name": {
      "uz": "Kopiko Cappuccino Kofe Konfet",
      "ru": "Копико Капучино Кофейная Конфета",
      "kr": "Kopiko 카푸치노 커피 캔디",
      "en": "Kopiko Cappuccino Coffee Candy"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-50.jpg"
  },
  {
    "id": 328,
    "name": {
      "uz": "Kopiko Coffee Kofe Konfet",
      "ru": "Копико Кофейная Конфета",
      "kr": "Kopiko 커피 캔디",
      "en": "Kopiko Coffee Candy"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-51.jpg"
  },
  {
    "id": 329,
    "name": {
      "uz": "Ulker Metro Mini",
      "ru": "Ülker Метро Мини",
      "kr": "Ülker 메트로 미니",
      "en": "Ülker Metro Mini"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-52.jpg"
  },
  {
    "id": 330,
    "name": {
      "uz": "Krokant Bodomli 180g",
      "ru": "Крокант с Миндалём 180г",
      "kr": "Krokant 아몬드 180g",
      "en": "Krokant with Almond 180g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-53.jpg"
  },
  {
    "id": 331,
    "name": {
      "uz": "Trapeza Sushka Malyutka Tuzli",
      "ru": "Трапеза Сушка Малютка Солёная",
      "kr": "Trapeza 수쉬카 말류트카 소금맛",
      "en": "Trapeza Sushka Malyutka Salted"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-54.jpg"
  },
  {
    "id": 332,
    "name": {
      "uz": "Korovka Vafli Sutli 300g",
      "ru": "Коровка Вафли Топлёное Молоко 300г",
      "kr": "Korovka 와플 우유맛 300g",
      "en": "Korovka Wafers Baked Milk 300g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-55.jpg"
  },
  {
    "id": 333,
    "name": {
      "uz": "Korovka Vafli Shokoladli 300g",
      "ru": "Коровка Вафли с Шоколадной Начинкой 300г",
      "kr": "Korovka 와플 초콜릿 300g",
      "en": "Korovka Wafers Chocolate 300g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-56.jpg"
  },
  {
    "id": 334,
    "name": {
      "uz": "Korovka Vafli Sutli 150g",
      "ru": "Коровка Вафли Топлёное Молоко 150г",
      "kr": "Korovka 와플 우유맛 150g",
      "en": "Korovka Wafers Baked Milk 150g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-57 (2).jpg"
  },
  {
    "id": 335,
    "name": {
      "uz": "Korovka Vafli Shokoladli 150g",
      "ru": "Коровка Вафли с Шоколадной Начинкой 150г",
      "kr": "Korovka 와플 초콜릿 150g",
      "en": "Korovka Wafers Chocolate 150g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-57.jpg"
  },
  {
    "id": 336,
    "name": {
      "uz": "Korovka Pechenye Kakaoli",
      "ru": "Коровка Печенье Сахарное с Какао",
      "kr": "Korovka 쿠키 코코아",
      "en": "Korovka Sugar Cookies with Cocoa"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-58.jpg"
  },
  {
    "id": 337,
    "name": {
      "uz": "Korovka Pechenye Sutli",
      "ru": "Коровка Печенье Сахарное Топлёное Молоко",
      "kr": "Korovka 쿠키 우유맛",
      "en": "Korovka Sugar Cookies Baked Milk"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-09-59.jpg"
  },
  {
    "id": 338,
    "name": {
      "uz": "Korovka Pechenye Sutli",
      "ru": "Коровка Печенье Сахарное с Молоком",
      "kr": "Korovka 쿠키 우유맛",
      "en": "Korovka Sugar Cookies with Milk"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-00.jpg"
  },
  {
    "id": 339,
    "name": {
      "uz": "Korovka Pechenye Sgushchyonkali",
      "ru": "Коровка Печенье с Варёной Сгущёнкой",
      "kr": "Korovka 쿠키 연유맛",
      "en": "Korovka Sugar Cookies Condensed Milk"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-01.jpg"
  },
  {
    "id": 340,
    "name": {
      "uz": "Lyubimoye Pechenye Vanilli",
      "ru": "Любимое Печенье с Ванильным Вкусом",
      "kr": "Lyubimoye 쿠키 바닐라맛",
      "en": "Lyubimoye Cookies Vanilla Flavor"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-06.jpg"
  },
  {
    "id": 341,
    "name": {
      "uz": "Lyubimoye Pechenye Sgushchyonkali",
      "ru": "Любимое Печенье со Сгущённым Молоком",
      "kr": "Lyubimoye 쿠키 연유맛",
      "en": "Lyubimoye Cookies Condensed Milk"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-07.jpg"
  },
  {
    "id": 342,
    "name": {
      "uz": "Korovka Pechenye Kakaoli (katta)",
      "ru": "Коровка Печенье Сахарное с Какао (большая)",
      "kr": "Korovka 쿠키 코코아 (대)",
      "en": "Korovka Sugar Cookies Cocoa (large)"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-08.jpg"
  },
  {
    "id": 343,
    "name": {
      "uz": "Nissin Wafers Qulupnayli 100g",
      "ru": "Ниссин Вафли Клубничные 100г",
      "kr": "Nissin 와퍼 딸기맛 100g",
      "en": "Nissin Wafers Strawberry 100g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-09.jpg"
  },
  {
    "id": 344,
    "name": {
      "uz": "Maliban Hawaiian Cookies Kokosli 200g",
      "ru": "Малибан Гавайские Печенье Кокос 200г",
      "kr": "Maliban 하와이안 쿠키 코코넛 200g",
      "en": "Maliban Hawaiian Cookies Coconut 200g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-10.jpg"
  },
  {
    "id": 345,
    "name": {
      "uz": "KB Halal Food Qovurilgan Yeryong'oq 400g",
      "ru": "KB Halal Food Жареный Арахис 400г",
      "kr": "KB Halal Food 튀김땅콩 400g",
      "en": "KB Halal Food Fried Peanuts 400g"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-11.jpg"
  },
  {
    "id": 346,
    "name": {
      "uz": "KB Halal Food Qovoq Urug'i 400g",
      "ru": "KB Halal Food Тыквенные Семена 400г",
      "kr": "KB Halal Food 호박씨 400g",
      "en": "KB Halal Food Pumpkin Seeds 400g"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-12.jpg"
  },
  {
    "id": 347,
    "name": {
      "uz": "KB Halal Food Bodom 400g",
      "ru": "KB Halal Food Миндаль 400г",
      "kr": "KB Halal Food 아몬드 400g",
      "en": "KB Halal Food Almonds 400g"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-13.jpg"
  },
  {
    "id": 348,
    "name": {
      "uz": "KB Halal Food Keshyu",
      "ru": "KB Halal Food Кешью",
      "kr": "KB Halal Food 캐슈넛",
      "en": "KB Halal Food Cashews"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-14.jpg"
  },
  {
    "id": 349,
    "name": {
      "uz": "KB Halal Food Yashil Mayiz 500g",
      "ru": "KB Halal Food Зелёный Изюм 500г",
      "kr": "KB Halal Food 청포도 500g",
      "en": "KB Halal Food Green Raisins 500g"
    },
    "price": 1,
    "category": "Tayyor yegulik",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-15.jpg"
  },
  {
    "id": 350,
    "name": {
      "uz": "ChaCheer Kungaboqar Urug'i Ziravorli 260g",
      "ru": "ЧаЧа Семечки Подсолнуха Пряные 260г",
      "kr": "ChaCheer 해바라기씨 향과자 260g",
      "en": "ChaCheer Sunflower Seeds Spiced 260g"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-16.jpg"
  },
  {
    "id": 351,
    "name": {
      "uz": "ChaCheer Kungaboqar Urug'i Original 260g",
      "ru": "ЧаЧа Семечки Подсолнуха Оригинал 260г",
      "kr": "ChaCheer 해바라기씨 오리지널 260g",
      "en": "ChaCheer Sunflower Seeds Original 260g"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-17.jpg"
  },
  {
    "id": 352,
    "name": {
      "uz": "KB Halal Food Kungaboqar Urug'i",
      "ru": "KB Halal Food Семена Подсолнуха",
      "kr": "KB Halal Food 해바라기씨",
      "en": "KB Halal Food Sunflower Seeds"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-18.jpg"
  },
  {
    "id": 353,
    "name": {
      "uz": "KB Halal Food Bodom (kichik)",
      "ru": "KB Halal Food Миндаль (маленький)",
      "kr": "KB Halal Food 아몬드 (소)",
      "en": "KB Halal Food Almonds (small)"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-19.jpg"
  },
  {
    "id": 354,
    "name": {
      "uz": "KB Halal Food Yong'oq",
      "ru": "KB Halal Food Грецкий Орех",
      "kr": "KB Halal Food 호두",
      "en": "KB Halal Food Walnuts"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-20.jpg"
  },
  {
    "id": 355,
    "name": {
      "uz": "KB Halal Food Quritilgan O'rik",
      "ru": "KB Halal Food Курага",
      "kr": "KB Halal Food 건살구",
      "en": "KB Halal Food Dried Apricots"
    },
    "price": 1,
    "category": "Tayyor yegulik",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-21.jpg"
  },
  {
    "id": 356,
    "name": {
      "uz": "Chudo Khrustinka Kakaoli Sutli 400g",
      "ru": "Чудо Хрустинка Какао со Вкусом Молока 400г",
      "kr": "Chudo 크루스틴카 코코아 우유맛 400g",
      "en": "Chudo Khrustinka Cocoa Milk 400g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-22.jpg"
  },
  {
    "id": 357,
    "name": {
      "uz": "Yashkino Glazirovannye Vafli Yong'oqli 200g",
      "ru": "Яшкино Глазированные Вафли с Орешками 200г",
      "kr": "Yashkino 글레이즈 와플 견과류 200g",
      "en": "Yashkino Glazed Wafers with Nuts 200g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-23 (2).jpg"
  },
  {
    "id": 358,
    "name": {
      "uz": "Chudo Khrustinka Shokoladli 400g",
      "ru": "Чудо Хрустинка со Вкусом Шоколада 400г",
      "kr": "Chudo 크루스틴카 초콜릿맛 400g",
      "en": "Chudo Khrustinka Chocolate 400g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-23.jpg"
  },
  {
    "id": 359,
    "name": {
      "uz": "Yashkino Vafli Xalvoli 300g",
      "ru": "Яшкино Вафли с Халвой 300г",
      "kr": "Yashkino 와플 할바 300g",
      "en": "Yashkino Wafers with Halva 300g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-24.jpg"
  },
  {
    "id": 360,
    "name": {
      "uz": "Yashkino Vafli Sgushchyonkali 300g",
      "ru": "Яшкино Вафли с Варёной Сгущёнкой 300г",
      "kr": "Yashkino 와플 연유맛 300g",
      "en": "Yashkino Wafers Condensed Milk 300g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-25.jpg"
  },
  {
    "id": 361,
    "name": {
      "uz": "Yashkino Vafli Yong'oqli 300g",
      "ru": "Яшкино Вафли Ореховые 300г",
      "kr": "Yashkino 와플 견과류 300g",
      "en": "Yashkino Wafers Nut 300g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-26.jpg"
  },
  {
    "id": 362,
    "name": {
      "uz": "Yashkino Vafli Shokoladli 300g",
      "ru": "Яшкино Вафли с Шоколадом 300г",
      "kr": "Yashkino 와플 초콜릿 300g",
      "en": "Yashkino Wafers Chocolate 300g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-27.jpg"
  },
  {
    "id": 363,
    "name": {
      "uz": "Yashkino Vafli Limon-Laym 300g",
      "ru": "Яшкино Вафли со Вкусом Лимон-Лайм 300г",
      "kr": "Yashkino 와플 레몬라임 300g",
      "en": "Yashkino Wafers Lemon-Lime 300g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-28.jpg"
  },
  {
    "id": 364,
    "name": {
      "uz": "Yashkino Vafelnyy Tort Funduqli 250g",
      "ru": "Яшкино Вафельный Торт Шоколадный с Фундуком 250г",
      "kr": "Yashkino 와플케이크 헤이즐넛 250g",
      "en": "Yashkino Wafer Cake Chocolate Hazelnut 250g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-29.jpg"
  },
  {
    "id": 365,
    "name": {
      "uz": "Yashkino Vafli Slivkali 300g",
      "ru": "Яшкино Вафли со Сливочным Вкусом 300г",
      "kr": "Yashkino 와플 크림맛 300g",
      "en": "Yashkino Wafers Cream 300g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-32.jpg"
  },
  {
    "id": 366,
    "name": {
      "uz": "Korovka Vafelnyye Konfety Sutli 250g",
      "ru": "Коровка Вафельные Конфеты Молочная 250г",
      "kr": "Korovka 와플 캔디 우유맛 250g",
      "en": "Korovka Wafer Candies Milk 250g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-33.jpg"
  },
  {
    "id": 367,
    "name": {
      "uz": "Korovka Vafelnyye Konfety Shokoladli 250g",
      "ru": "Коровка Вафельные Конфеты Шоколад 250г",
      "kr": "Korovka 와플 캔디 초콜릿 250g",
      "en": "Korovka Wafer Candies Chocolate 250g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-34.jpg"
  },
  {
    "id": 368,
    "name": {
      "uz": "RotFront Karamel Dyushes Ledenets",
      "ru": "РотФронт Карамель Леденцовая Дюшес",
      "kr": "RotFront 카라멜 배맛 캔디",
      "en": "RotFront Caramel Duchesse Candy"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-35.jpg"
  },
  {
    "id": 369,
    "name": {
      "uz": "RotFront Karamel Barbaris Ledenets",
      "ru": "РотФронт Карамель Леденцовая Барбарис",
      "kr": "RotFront 카라멜 바바리스 캔디",
      "en": "RotFront Caramel Barberry Candy"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-36.jpg"
  },
  {
    "id": 370,
    "name": {
      "uz": "Krasnyy Oktyabr Kara-Kum Konfet",
      "ru": "Красный Октябрь Кара-Кум Конфеты",
      "kr": "Krasnyy Oktyabr 카라쿰 사탕",
      "en": "Krasnyy Oktyabr Kara-Kum Candies"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-37.jpg"
  },
  {
    "id": 371,
    "name": {
      "uz": "Krasnyy Oktyabr Toffee Original Konfet",
      "ru": "Красный Октябрь Toffee Original Конфеты",
      "kr": "Krasnyy Oktyabr 토피 오리지널 사탕",
      "en": "Krasnyy Oktyabr Toffee Original Candies"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-38.jpg"
  },
  {
    "id": 372,
    "name": {
      "uz": "Shohona No'xatsho'rak Konserva",
      "ru": "Шохона Нохатшурак Консерва",
      "kr": "Shohona 병아리콩수프 통조림",
      "en": "Shohona Chickpea Soup Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-39.jpg"
  },
  {
    "id": 373,
    "name": {
      "uz": "Shohona Chicken Biryani Konserva",
      "ru": "Шохона Куриный Бирьяни Консерва",
      "kr": "Shohona 치킨 비리야니 통조림",
      "en": "Shohona Chicken Biryani Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-40.jpg"
  },
  {
    "id": 374,
    "name": {
      "uz": "Shohona Mol Go'shti Tushonkasi",
      "ru": "Шохона Тушёнка из Говядины",
      "kr": "Shohona 소고기 통조림",
      "en": "Shohona Beef Stew Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-41 (2).jpg"
  },
  {
    "id": 375,
    "name": {
      "uz": "Shohona Moshkichiri Konserva",
      "ru": "Шохона Машкичири Консерва",
      "kr": "Shohona 마쉬키치리 통조림",
      "en": "Shohona Moshkichiri Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-41.jpg"
  },
  {
    "id": 376,
    "name": {
      "uz": "Shohona Palov Konserva",
      "ru": "Шохона Плов Консерва",
      "kr": "Shohona 필라프 통조림",
      "en": "Shohona Palov (Pilaf) Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-42.jpg"
  },
  {
    "id": 377,
    "name": {
      "uz": "Shohona Qo'y Go'shti Tushonkasi",
      "ru": "Шохона Тушёнка из Баранины",
      "kr": "Shohona 양고기 통조림",
      "en": "Shohona Lamb Stew Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-43.jpg"
  },
  {
    "id": 378,
    "name": {
      "uz": "Shohona Sho'rva Konserva",
      "ru": "Шохона Шурпа Консерва",
      "kr": "Shohona 쑤르파 통조림",
      "en": "Shohona Shorva (Soup) Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-44.jpg"
  },
  {
    "id": 379,
    "name": {
      "uz": "Shohona Go'shtli Grechka Konserva",
      "ru": "Шохона Гречка с Мясом Консерва",
      "kr": "Shohona 고기 메밀죽 통조림",
      "en": "Shohona Buckwheat with Meat Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-45.jpg"
  },
  {
    "id": 380,
    "name": {
      "uz": "Shohona Mastava Konserva",
      "ru": "Шохона Мастава Консерва",
      "kr": "Shohona 마스타바 통조림",
      "en": "Shohona Mastava (Rice Soup) Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-46.jpg"
  },
  {
    "id": 381,
    "name": {
      "uz": "Shohona Dolma Konserva",
      "ru": "Шохона Долма Консерва",
      "kr": "Shohona 돌마 통조림",
      "en": "Shohona Dolma Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-47.jpg"
  },
  {
    "id": 382,
    "name": {
      "uz": "Shohona Tovuq Go'shti Tushonkasi",
      "ru": "Шохона Тушёнка из Курицы",
      "kr": "Shohona 닭고기 통조림",
      "en": "Shohona Chicken Stew Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-48 (2).jpg"
  },
  {
    "id": 383,
    "name": {
      "uz": "Shohona Chicken Curry Konserva",
      "ru": "Шохона Куриный Карри Консерва",
      "kr": "Shohona 치킨 카레 통조림",
      "en": "Shohona Chicken Curry Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-48.jpg"
  },
  {
    "id": 384,
    "name": {
      "uz": "Shohona Dimlama Konserva",
      "ru": "Шохона Димлама Консерва",
      "kr": "Shohona 딤라마 통조림",
      "en": "Shohona Dimlama Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-49.jpg"
  },
  {
    "id": 385,
    "name": {
      "uz": "Shohona Spagetti Konserva",
      "ru": "Шохона Спагетти Консерва",
      "kr": "Shohona 스파게티 통조림",
      "en": "Shohona Spaghetti Canned"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-50.jpg"
  },
  {
    "id": 386,
    "name": {
      "uz": "Ergül Funduqli Krem Kakaoli va Sutli",
      "ru": "Эргюль Ореховый Крем с Какао и Молоком",
      "kr": "Ergül 헤이즐넛 크림 코코아&밀키",
      "en": "Ergül Hazelnut Cream with Cocoa and Milky Cream"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-51.jpg"
  },
  {
    "id": 387,
    "name": {
      "uz": "Ergül Funduqli Krem Kakaoli 350g",
      "ru": "Эргюль Ореховый Крем с Какао 350г",
      "kr": "Ergül 헤이즐넛 크림 코코아 350g",
      "en": "Ergül Hazelnut Cream with Cocoa 350g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-52.jpg"
  },
  {
    "id": 388,
    "name": {
      "uz": "Nutella Funduqli Shokoladli Pasta",
      "ru": "Нутелла Ореховая Паста с Какао",
      "kr": "Nutella 헤이즐넛 스프레드",
      "en": "Nutella Hazelnut Spread with Cocoa"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-53.jpg"
  },
  {
    "id": 389,
    "name": {
      "uz": "Wellnut Krember Kakaoli Funduqli Pasta",
      "ru": "Wellnut Krember Какао Фундучная Паста",
      "kr": "Wellnut Krember 코코아 헤이즐넛 스프레드",
      "en": "Wellnut Krember Cocoa Hazelnut Spread"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-54.jpg"
  },
  {
    "id": 390,
    "name": {
      "uz": "Safo Gilos Murabbo 380g",
      "ru": "Сафо Вишнёвое Варенье 380г",
      "kr": "Safo 체리잼 380g",
      "en": "Safo Cherry Jam 380g"
    },
    "price": 1,
    "category": "Murabbo",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-55 (2).jpg"
  },
  {
    "id": 391,
    "name": {
      "uz": "Safo O'rik Murabbo 380g",
      "ru": "Сафо Абрикосовое Варенье 380г",
      "kr": "Safo 살구잼 380g",
      "en": "Safo Apricot Jam 380g"
    },
    "price": 1,
    "category": "Murabbo",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-55.jpg"
  },
  {
    "id": 392,
    "name": {
      "uz": "Amrita Kupina Murabbo",
      "ru": "Амрита Варенье из Ежевики",
      "kr": "Amrita 블랙베리잼",
      "en": "Amrita Blackberry Jam"
    },
    "price": 1,
    "category": "Murabbo",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-56.jpg"
  },
  {
    "id": 393,
    "name": {
      "uz": "Amrita Qulupnay va Oq Olcha Murabbo",
      "ru": "Амрита Варенье из Клубники и Белой Черешни",
      "kr": "Amrita 딸기&백체리잼",
      "en": "Amrita Strawberry and White Cherry Jam"
    },
    "price": 1,
    "category": "Murabbo",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-57.jpg"
  },
  {
    "id": 394,
    "name": {
      "uz": "Indomilk Creamy Original Quyuq Sut 370g",
      "ru": "Индомилк Сгущённое Молоко 370г",
      "kr": "Indomilk 크리미 오리지널 연유 370g",
      "en": "Indomilk Creamy Original Sweetened Condensed 370g"
    },
    "price": 1,
    "category": "Sut Mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-10-59.jpg"
  },
  {
    "id": 395,
    "name": {
      "uz": "Mr. Chai Peanut Butter Crunchy 510g",
      "ru": "Mr. Chai Арахисовая Паста Кранчи 510г",
      "kr": "Mr. Chai 피넛버터 크런치 510g",
      "en": "Mr. Chai Peanut Butter Crunchy 510g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-00.jpg"
  },
  {
    "id": 396,
    "name": {
      "uz": "Safo Chernosliv Quritilgan Olxo'ri",
      "ru": "Сафо Чернослив",
      "kr": "Safo 건자두",
      "en": "Safo Dried Prunes"
    },
    "price": 1,
    "category": "Tayyor yegulik",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-01 (2).jpg"
  },
  {
    "id": 397,
    "name": {
      "uz": "Mr. Chai Peanut Butter Creamy 510g",
      "ru": "Mr. Chai Арахисовая Паста Кремовая 510г",
      "kr": "Mr. Chai 피넛버터 크리미 510g",
      "en": "Mr. Chai Peanut Butter Creamy 510g"
    },
    "price": 1,
    "category": "Fresh & Fast",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-01.jpg"
  },
  {
    "id": 398,
    "name": {
      "uz": "Safo Bodom 200g",
      "ru": "Сафо Миндаль 200г",
      "kr": "Safo 아몬드 200g",
      "en": "Safo Almonds 200g"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-02.jpg"
  },
  {
    "id": 399,
    "name": {
      "uz": "Safo Sharq Shirinliklari 500g",
      "ru": "Сафо Сладости Востока 500г",
      "kr": "Safo 동양 과일 500g",
      "en": "Safo Eastern Dried Fruits 500g"
    },
    "price": 1,
    "category": "Tayyor yegulik",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-03.jpg"
  },
  {
    "id": 400,
    "name": {
      "uz": "KB Halal Food Kungaboqar Urug'i (Artilgan)",
      "ru": "KB Halal Food Семечки Очищенные",
      "kr": "KB Halal Food 해바라기씨 (까진것)",
      "en": "KB Halal Food Sunflower Seeds (Shelled)"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-04.jpg"
  },
  {
    "id": 401,
    "name": {
      "uz": "KB Halal Food Kaju Yong'oq",
      "ru": "KB Halal Food Кешью",
      "kr": "KB Halal Food 캐슈넛",
      "en": "KB Halal Food Cashew Nuts"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-05.jpg"
  },
  {
    "id": 402,
    "name": {
      "uz": "KB Halal Food Kungaboqar Urug'i (Qora)",
      "ru": "KB Halal Food Семечки Чёрные",
      "kr": "KB Halal Food 해바라기씨 (검정)",
      "en": "KB Halal Food Sunflower Seeds (Black)"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-06.jpg"
  },
  {
    "id": 403,
    "name": {
      "uz": "KB Halal Food Qovoq Urug'i",
      "ru": "KB Halal Food Тыквенные Семечки",
      "kr": "KB Halal Food 호박씨",
      "en": "KB Halal Food Pumpkin Seeds"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-07.jpg"
  },
  {
    "id": 404,
    "name": {
      "uz": "KB Halal Food Bodom",
      "ru": "KB Halal Food Миндаль",
      "kr": "KB Halal Food 아몬드",
      "en": "KB Halal Food Almonds"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-08.jpg"
  },
  {
    "id": 405,
    "name": {
      "uz": "KB Halal Food Sutli Bodom 200g",
      "ru": "KB Halal Food Миндаль Молочный 200г",
      "kr": "KB Halal Food 밀크향 아몬드 200g",
      "en": "KB Halal Food Milk Almonds 200g"
    },
    "price": 1,
    "category": "Gazaklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-09.jpg"
  },
  {
    "id": 406,
    "name": {
      "uz": "KB Halal Food Mayiz",
      "ru": "KB Halal Food Изюм",
      "kr": "KB Halal Food 건포도",
      "en": "KB Halal Food Raisins"
    },
    "price": 1,
    "category": "Tayyor yegulik",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-11.jpg"
  },
  {
    "id": 407,
    "name": {
      "uz": "KB Halal Food Quritilgan Uzum 200g",
      "ru": "KB Halal Food Сушёный Виноград 200г",
      "kr": "KB Halal Food 청포도 200g",
      "en": "KB Halal Food Dried Green Grapes 200g"
    },
    "price": 1,
    "category": "Tayyor yegulik",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-12.jpg"
  },
  {
    "id": 422,
    "name": {
      "uz": "Mezana Special 15",
      "ru": "Mezana Special 15",
      "kr": "Mezana Special 15",
      "en": "Mezana Special 15"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-34.jpg"
  },
  {
    "id": 423,
    "name": {
      "uz": "Mezana Special 16",
      "ru": "Mezana Special 16",
      "kr": "Mezana Special 16",
      "en": "Mezana Special 16"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-35.jpg"
  },
  {
    "id": 424,
    "name": {
      "uz": "Mezana Special 17",
      "ru": "Mezana Special 17",
      "kr": "Mezana Special 17",
      "en": "Mezana Special 17"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-36.jpg"
  },
  {
    "id": 425,
    "name": {
      "uz": "Mezana Special 18",
      "ru": "Mezana Special 18",
      "kr": "Mezana Special 18",
      "en": "Mezana Special 18"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-37.jpg"
  },
  {
    "id": 426,
    "name": {
      "uz": "Mezana Special 19",
      "ru": "Mezana Special 19",
      "kr": "Mezana Special 19",
      "en": "Mezana Special 19"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-38.jpg"
  },
  {
    "id": 427,
    "name": {
      "uz": "Mezana Special 20",
      "ru": "Mezana Special 20",
      "kr": "Mezana Special 20",
      "en": "Mezana Special 20"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-39.jpg"
  },
  {
    "id": 428,
    "name": {
      "uz": "Mezana Special 21",
      "ru": "Mezana Special 21",
      "kr": "Mezana Special 21",
      "en": "Mezana Special 21"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-40.jpg"
  },
  {
    "id": 429,
    "name": {
      "uz": "Mezana Special 22",
      "ru": "Mezana Special 22",
      "kr": "Mezana Special 22",
      "en": "Mezana Special 22"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-41.jpg"
  },
  {
    "id": 430,
    "name": {
      "uz": "Mezana Special 23",
      "ru": "Mezana Special 23",
      "kr": "Mezana Special 23",
      "en": "Mezana Special 23"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-42.jpg"
  },
  {
    "id": 431,
    "name": {
      "uz": "Mezana Special 24",
      "ru": "Mezana Special 24",
      "kr": "Mezana Special 24",
      "en": "Mezana Special 24"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-43.jpg"
  },
  {
    "id": 432,
    "name": {
      "uz": "Mezana Special 25",
      "ru": "Mezana Special 25",
      "kr": "Mezana Special 25",
      "en": "Mezana Special 25"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-44.jpg"
  },
  {
    "id": 433,
    "name": {
      "uz": "Mezana Special 26",
      "ru": "Mezana Special 26",
      "kr": "Mezana Special 26",
      "en": "Mezana Special 26"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-45.jpg"
  },
  {
    "id": 434,
    "name": {
      "uz": "Mezana Special 27",
      "ru": "Mezana Special 27",
      "kr": "Mezana Special 27",
      "en": "Mezana Special 27"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-46.jpg"
  },
  {
    "id": 435,
    "name": {
      "uz": "Mezana Special 28",
      "ru": "Mezana Special 28",
      "kr": "Mezana Special 28",
      "en": "Mezana Special 28"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-47.jpg"
  },
  {
    "id": 445,
    "name": {
      "uz": "Mezana Special 38",
      "ru": "Mezana Special 38",
      "kr": "Mezana Special 38",
      "en": "Mezana Special 38"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-56.jpg"
  },
  {
    "id": 446,
    "name": {
      "uz": "Mezana Special 39",
      "ru": "Mezana Special 39",
      "kr": "Mezana Special 39",
      "en": "Mezana Special 39"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-58.jpg"
  },
  {
    "id": 447,
    "name": {
      "uz": "Mezana Special 40",
      "ru": "Mezana Special 40",
      "kr": "Mezana Special 40",
      "en": "Mezana Special 40"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-59.jpg"
  },
  {
    "id": 448,
    "name": {
      "uz": "Mezana Special 41",
      "ru": "Mezana Special 41",
      "kr": "Mezana Special 41",
      "en": "Mezana Special 41"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-00.jpg"
  },
  {
    "id": 449,
    "name": {
      "uz": "Mezana Special 42",
      "ru": "Mezana Special 42",
      "kr": "Mezana Special 42",
      "en": "Mezana Special 42"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-01.jpg"
  },
  {
    "id": 450,
    "name": {
      "uz": "Mezana Special 43",
      "ru": "Mezana Special 43",
      "kr": "Mezana Special 43",
      "en": "Mezana Special 43"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-03 (2).jpg"
  },
  {
    "id": 451,
    "name": {
      "uz": "Mezana Special 44",
      "ru": "Mezana Special 44",
      "kr": "Mezana Special 44",
      "en": "Mezana Special 44"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-03.jpg"
  },
  {
    "id": 452,
    "name": {
      "uz": "Mezana Special 45",
      "ru": "Mezana Special 45",
      "kr": "Mezana Special 45",
      "en": "Mezana Special 45"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-04.jpg"
  },
  {
    "id": 453,
    "name": {
      "uz": "Mezana Special 46",
      "ru": "Mezana Special 46",
      "kr": "Mezana Special 46",
      "en": "Mezana Special 46"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-05.jpg"
  },
  {
    "id": 454,
    "name": {
      "uz": "Mezana Special 47",
      "ru": "Mezana Special 47",
      "kr": "Mezana Special 47",
      "en": "Mezana Special 47"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-06.jpg"
  },
  {
    "id": 455,
    "name": {
      "uz": "Mezana Special 48",
      "ru": "Mezana Special 48",
      "kr": "Mezana Special 48",
      "en": "Mezana Special 48"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-07.jpg"
  },
  {
    "id": 456,
    "name": {
      "uz": "Mezana Special 49",
      "ru": "Mezana Special 49",
      "kr": "Mezana Special 49",
      "en": "Mezana Special 49"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-08.jpg"
  },
  {
    "id": 477,
    "name": {
      "uz": "Mezana Special 70",
      "ru": "Mezana Special 70",
      "kr": "Mezana Special 70",
      "en": "Mezana Special 70"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-27.jpg"
  },
  {
    "id": 479,
    "name": {
      "uz": "Mezana Special 72",
      "ru": "Mezana Special 72",
      "kr": "Mezana Special 72",
      "en": "Mezana Special 72"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-29.jpg"
  },
  {
    "id": 480,
    "name": {
      "uz": "Mezana Special 73",
      "ru": "Mezana Special 73",
      "kr": "Mezana Special 73",
      "en": "Mezana Special 73"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-30.jpg"
  },
  {
    "id": 481,
    "name": {
      "uz": "Mezana Special 74",
      "ru": "Mezana Special 74",
      "kr": "Mezana Special 74",
      "en": "Mezana Special 74"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-31.jpg"
  },
  {
    "id": 482,
    "name": {
      "uz": "Mezana Special 75",
      "ru": "Mezana Special 75",
      "kr": "Mezana Special 75",
      "en": "Mezana Special 75"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-32.jpg"
  },
  {
    "id": 483,
    "name": {
      "uz": "Mezana Special 76",
      "ru": "Mezana Special 76",
      "kr": "Mezana Special 76",
      "en": "Mezana Special 76"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-34.jpg"
  },
  {
    "id": 484,
    "name": {
      "uz": "Mezana Special 77",
      "ru": "Mezana Special 77",
      "kr": "Mezana Special 77",
      "en": "Mezana Special 77"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-35 (2).jpg"
  },
  {
    "id": 485,
    "name": {
      "uz": "Mezana Special 78",
      "ru": "Mezana Special 78",
      "kr": "Mezana Special 78",
      "en": "Mezana Special 78"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-35.jpg"
  },
  {
    "id": 486,
    "name": {
      "uz": "Mezana Special 79",
      "ru": "Mezana Special 79",
      "kr": "Mezana Special 79",
      "en": "Mezana Special 79"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-36.jpg"
  },
  {
    "id": 487,
    "name": {
      "uz": "Mezana Special 80",
      "ru": "Mezana Special 80",
      "kr": "Mezana Special 80",
      "en": "Mezana Special 80"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-37.jpg"
  },
  {
    "id": 488,
    "name": {
      "uz": "Mezana Special 81",
      "ru": "Mezana Special 81",
      "kr": "Mezana Special 81",
      "en": "Mezana Special 81"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-38.jpg"
  },
  {
    "id": 489,
    "name": {
      "uz": "Mezana Special 82",
      "ru": "Mezana Special 82",
      "kr": "Mezana Special 82",
      "en": "Mezana Special 82"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-39.jpg"
  },
  {
    "id": 490,
    "name": {
      "uz": "Mezana Special 83",
      "ru": "Mezana Special 83",
      "kr": "Mezana Special 83",
      "en": "Mezana Special 83"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-40.jpg"
  },
  {
    "id": 491,
    "name": {
      "uz": "Mezana Special 84",
      "ru": "Mezana Special 84",
      "kr": "Mezana Special 84",
      "en": "Mezana Special 84"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-41.jpg"
  },
  {
    "id": 492,
    "name": {
      "uz": "Mezana Special 85",
      "ru": "Mezana Special 85",
      "kr": "Mezana Special 85",
      "en": "Mezana Special 85"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-42.jpg"
  },
  {
    "id": 493,
    "name": {
      "uz": "Mezana Special 86",
      "ru": "Mezana Special 86",
      "kr": "Mezana Special 86",
      "en": "Mezana Special 86"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-43.jpg"
  },
  {
    "id": 494,
    "name": {
      "uz": "Mezana Special 87",
      "ru": "Mezana Special 87",
      "kr": "Mezana Special 87",
      "en": "Mezana Special 87"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-44.jpg"
  },
  {
    "id": 495,
    "name": {
      "uz": "Mezana Special 88",
      "ru": "Mezana Special 88",
      "kr": "Mezana Special 88",
      "en": "Mezana Special 88"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-45 (2).jpg"
  },
  {
    "id": 496,
    "name": {
      "uz": "Mezana Special 89",
      "ru": "Mezana Special 89",
      "kr": "Mezana Special 89",
      "en": "Mezana Special 89"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-45.jpg"
  },
  {
    "id": 497,
    "name": {
      "uz": "Mezana Special 90",
      "ru": "Mezana Special 90",
      "kr": "Mezana Special 90",
      "en": "Mezana Special 90"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-46.jpg"
  },
  {
    "id": 498,
    "name": {
      "uz": "Mezana Special 91",
      "ru": "Mezana Special 91",
      "kr": "Mezana Special 91",
      "en": "Mezana Special 91"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-47.jpg"
  },
  {
    "id": 499,
    "name": {
      "uz": "Mezana Special 92",
      "ru": "Mezana Special 92",
      "kr": "Mezana Special 92",
      "en": "Mezana Special 92"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-48.jpg"
  },
  {
    "id": 500,
    "name": {
      "uz": "Mezana Special 93",
      "ru": "Mezana Special 93",
      "kr": "Mezana Special 93",
      "en": "Mezana Special 93"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-49.jpg"
  },
  {
    "id": 501,
    "name": {
      "uz": "Mezana Special 94",
      "ru": "Mezana Special 94",
      "kr": "Mezana Special 94",
      "en": "Mezana Special 94"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-50.jpg"
  },
  {
    "id": 526,
    "name": {
      "uz": "Laziz Zira (Cumin Seeds)",
      "ru": "Зира Laziz",
      "kr": "Laziz 큐민 씨드",
      "en": "Laziz Cumin Seeds Whole"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-19.jpg"
  },
  {
    "id": 529,
    "name": {
      "uz": "Olma",
      "ru": "Яблоко",
      "kr": "사과",
      "en": "Apple"
    },
    "price": 4000,
    "category": "Oziq-ovqat",
    "image": "jpgs/olma.jpg"
  },
  {
    "id": 530,
    "name": {
      "uz": "Banan",
      "ru": "Банан",
      "kr": "바나나",
      "en": "Banana"
    },
    "price": 3500,
    "category": "Oziq-ovqat",
    "image": "jpgs/banan.jpg"
  },
  {
    "id": 531,
    "name": {
      "uz": "Apelsin",
      "ru": "Апельсин",
      "kr": "오렌지",
      "en": "Orange"
    },
    "price": 3000,
    "category": "Oziq-ovqat",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-02.jpg"
  },
  {
    "id": 532,
    "name": {
      "uz": "Uzum",
      "ru": "Виноград",
      "kr": "포도",
      "en": "Grape"
    },
    "price": 5000,
    "category": "Oziq-ovqat",
    "image": "jpgs/1.jpg"
  },
  {
    "id": 533,
    "name": {
      "uz": "Sabzi",
      "ru": "Морковь",
      "kr": "당근",
      "en": "Carrot"
    },
    "price": 2000,
    "category": "Katta chegirmalar",
    "image": "jpgs/sabzi.jpg"
  },
  {
    "id": 534,
    "name": {
      "uz": "Oshqovoq",
      "ru": "Тыква",
      "kr": "호박",
      "en": "Pumpkin"
    },
    "price": 3000,
    "category": "Katta chegirmalar",
    "image": "jpgs/oshqovoq.jpg"
  },
  {
    "id": 535,
    "name": {
      "uz": "Piyoz",
      "ru": "Лук",
      "kr": "양파",
      "en": "Onion"
    },
    "price": 1500,
    "category": "Katta chegirmalar",
    "image": "jpgs/piyoz.jpg"
  },
  {
    "id": 536,
    "name": {
      "uz": "Ananas",
      "ru": "Ананас",
      "kr": "파인애플",
      "en": "Pineapple"
    },
    "price": 6000,
    "category": "Oziq-ovqat",
    "image": "jpgs/ananas.jpg"
  },
  {
    "id": 537,
    "name": {
      "uz": "Baqlajon",
      "ru": "Баклажан",
      "kr": "가지",
      "en": "Eggplant"
    },
    "price": 2500,
    "category": "Katta chegirmalar",
    "image": "jpgs/baqlajon.jpg"
  },
  {
    "id": 538,
    "name": {
      "uz": "Karom",
      "ru": "Капуста",
      "kr": "양배추",
      "en": "Cabbage"
    },
    "price": 2000,
    "category": "Katta chegirmalar",
    "image": "jpgs/karom.jpg"
  },
  {
    "id": 539,
    "name": {
      "uz": "Kartoshka",
      "ru": "Картофель",
      "kr": "감자",
      "en": "Potato"
    },
    "price": 1800,
    "category": "Katta chegirmalar",
    "image": "jpgs/kartoshka.jpg"
  },
  {
    "id": 540,
    "name": {
      "uz": "Pamidor",
      "ru": "Помидор",
      "kr": "토마토",
      "en": "Tomato"
    },
    "price": 2500,
    "category": "Katta chegirmalar",
    "image": "jpgs/pamidor.jpg"
  },
  {
    "id": 541,
    "name": {
      "uz": "Sarimsoq",
      "ru": "Чеснок",
      "kr": "마늘",
      "en": "Garlic"
    },
    "price": 3000,
    "category": "Katta chegirmalar",
    "image": "jpgs/sarimsoq piyoz.jpg"
  },
  {
    "id": 542,
    "name": {
      "uz": "Tuxum",
      "ru": "Яйцо",
      "kr": "계란",
      "en": "Egg"
    },
    "price": 1000,
    "category": "Tuxumlar",
    "image": "jpgs/tuxum.jpg"
  }
];
const generatedCategories = [
  "Choy",
  "Dukkakli mahsulotlar",
  "Fresh & Fast",
  "Gazaklar",
  "Go'sht mahsulotlari",
  "Go'sht va Baliq",
  "Ichimliklar",
  "Katta chegirmalar",
  "Konserva",
  "Konservalar",
  "Makaron",
  "Murabbo",
  "Muzlatilgan mahsulotlar",
  "Oziq-ovqat",
  "Pishirish",
  "Sous",
  "Sut Mahsulotlari",
  "Sut mahsulotlari",
  "Tayyor yegulik",
  "Tomat",
  "Tozalash",
  "Tuxumlar",
  "Tuzlamalar",
  "Un",
  "Xurmo",
  "Yangi",
  "Yog'",
  "Yormalar",
  "Ziravorlar"
];
const generatedOrders = [
  {
    "id": "ORD-1773505529979",
    "date": "15/03/2026, 01:25:29",
    "customerName": "qwe",
    "customerPhone": "01000000000",
    "address": "qwe",
    "total": 7500,
    "status": "Yangi",
    "items": [
      {
        "name": "Виноград",
        "price": 5000,
        "qty": 1,
        "image": "jpgs/1.jpg"
      },
      {
        "name": "Баклажан",
        "price": 2500,
        "qty": 1,
        "image": "jpgs/baqlajon.jpg"
      }
    ]
  }
];
const generatedCustomers = [
  {
    "name": "qwe",
    "phone": "01000000000",
    "ltv": 7500,
    "lastOrder": "15/03/2026, 01:25:29",
    "ordersCount": 1
  }
];