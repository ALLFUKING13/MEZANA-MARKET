const generatedProducts = [
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