const generatedProducts = [
  {
    "id": 100,
    "image": "Mahsulotlar/photo_2026-03-04_06-04-07.jpg",
    "name": {
      "uz": "Jardin Colombia Medellin",
      "ru": "Jardin Colombia Medellin",
      "kr": "Jardin Colombia Medellin",
      "en": "Jardin Colombia Medellin"
    },
    "price": 1000,
    "category": "Qahva"
  },
  {
    "id": 101,
    "name": {
      "uz": "Jardin Guatemala Atitlan",
      "ru": "Jardin Guatemala Atitlan",
      "kr": "Jardin Guatemala Atitlan",
      "en": "Jardin Guatemala Atitlan"
    },
    "price": 1,
    "category": "Qahva",
    "image": "Mahsulotlar/photo_2026-03-04_06-04-38.jpg"
  },
  {
    "id": 102,
    "name": {
      "uz": "Lipton Yellow Label 100 paket",
      "ru": "Lipton Yellow Label 100 пакетов",
      "kr": "Lipton Yellow Label 100개입",
      "en": "Lipton Yellow Label 100 bags"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-02.jpg"
  },
  {
    "id": 103,
    "name": {
      "uz": "Etre Royal Ceylon 200g",
      "ru": "Etre Royal Ceylon 200г",
      "kr": "Etre Royal Ceylon 200g",
      "en": "Etre Royal Ceylon 200g"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-03.jpg"
  },
  {
    "id": 104,
    "name": {
      "uz": "Printsessa Nuri Vysokogornyy 100 paket",
      "ru": "Принцесса Нури Высокогорный 100 пакетов",
      "kr": "프린세사 누리 100개입",
      "en": "Princess Nuri Highland 100 bags"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-04.jpg"
  },
  {
    "id": 105,
    "name": {
      "uz": "Tess Blueberry Tart 20 paket",
      "ru": "Tess Blueberry Tart 20 пакетов",
      "kr": "Tess Blueberry Tart 20개입",
      "en": "Tess Blueberry Tart 20 bags"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-05.jpg"
  },
  {
    "id": 106,
    "name": {
      "uz": "Tess Forest Dream 20 paket",
      "ru": "Tess Forest Dream 20 пакетов",
      "kr": "Tess Forest Dream 20개입",
      "en": "Tess Forest Dream 20 bags"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-06 (2).jpg"
  },
  {
    "id": 107,
    "name": {
      "uz": "Tess Summer Time 20 paket",
      "ru": "Tess Summer Time 20 пакетов",
      "kr": "Tess Summer Time 20개입",
      "en": "Tess Summer Time 20 bags"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-06.jpg"
  },
  {
    "id": 108,
    "name": {
      "uz": "Tess Berry Bar 20 paket",
      "ru": "Tess Berry Bar 20 пакетов",
      "kr": "Tess Berry Bar 20개입",
      "en": "Tess Berry Bar 20 bags"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-07.jpg"
  },
  {
    "id": 109,
    "name": {
      "uz": "Tess Sunrise 25 paket",
      "ru": "Tess Sunrise 25 пакетов",
      "kr": "Tess Sunrise 25개입",
      "en": "Tess Sunrise 25 bags"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-08.jpg"
  },
  {
    "id": 110,
    "name": {
      "uz": "Toza Kenya Gold",
      "ru": "Toza Kenya Gold",
      "kr": "Toza Kenya Gold",
      "en": "Toza Kenya Gold"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-09 (2).jpg"
  },
  {
    "id": 111,
    "name": {
      "uz": "Tess Earl Grey 100g",
      "ru": "Tess Earl Grey 100г",
      "kr": "Tess Earl Grey 100g",
      "en": "Tess Earl Grey 100g"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-09.jpg"
  },
  {
    "id": 112,
    "name": {
      "uz": "Tess Flirt 100g",
      "ru": "Tess Flirt 100г",
      "kr": "Tess Flirt 100g",
      "en": "Tess Flirt 100g"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-11.jpg"
  },
  {
    "id": 113,
    "name": {
      "uz": "Toza 95 Yashil Choy",
      "ru": "Toza 95 Зелёный чай",
      "kr": "Toza 95 녹차",
      "en": "Toza 95 Green Tea"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-12.jpg"
  },
  {
    "id": 114,
    "name": {
      "uz": "Toza 95 Qora Choy (katta)",
      "ru": "Toza 95 Чёрный чай (большой)",
      "kr": "Toza 95 홍차 (대)",
      "en": "Toza 95 Black Tea (large)"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-13.jpg"
  },
  {
    "id": 115,
    "image": "",
    "name": {
      "uz": "Pasta Rino",
      "ru": "Pasta Rino",
      "kr": "Pasta Rino",
      "en": "Pasta Rino"
    },
    "price": 1,
    "category": "Makaron"
  },
  {
    "id": 116,
    "image": "",
    "name": {
      "uz": "Makfa Spagetti",
      "ru": "Макфа Спагетти",
      "kr": "Makfa 스파게티",
      "en": "Makfa Spaghetti"
    },
    "price": 1,
    "category": "Makaron"
  },
  {
    "id": 117,
    "image": "",
    "name": {
      "uz": "Toza 95 Yashil Choy",
      "ru": "Toza 95 Зелёный чай",
      "kr": "Toza 95 녹차",
      "en": "Toza 95 Green Tea"
    },
    "price": 1,
    "category": "Choy"
  },
  {
    "id": 118,
    "image": "",
    "name": {
      "uz": "Toza 110 Yashil Choy",
      "ru": "Toza 110 Зелёный чай",
      "kr": "Toza 110 녹차",
      "en": "Toza 110 Green Tea"
    },
    "price": 1,
    "category": "Choy"
  },
  {
    "id": 119,
    "name": {
      "uz": "Lazzat Paxta Yog'i 1L",
      "ru": "Лаззат Хлопковое масло 1Л",
      "kr": "Lazzat 면실유 1L",
      "en": "Lazzat Cotton Oil 1L"
    },
    "price": 1,
    "category": "Yog'",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-24.jpg"
  },
  {
    "id": 120,
    "name": {
      "uz": "Sunshine Solnishko 2L",
      "ru": "Sunshine Солнышко 2Л",
      "kr": "Sunshine 해바라기유 2L",
      "en": "Sunshine Sunflower Oil 2L"
    },
    "price": 1,
    "category": "Yog'",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-25 (2).jpg"
  },
  {
    "id": 121,
    "name": {
      "uz": "Zolotoy Standart",
      "ru": "Золотой Стандарт",
      "kr": "골든 스탠다드",
      "en": "Golden Standard Oil"
    },
    "price": 1,
    "category": "Yog'",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-25.jpg"
  },
  {
    "id": 122,
    "name": {
      "uz": "Oleyna 3L",
      "ru": "Олейна 3Л",
      "kr": "Oleyna 3L",
      "en": "Oleyna Oil 3L"
    },
    "price": 1,
    "category": "Yog'",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-26.jpg"
  },
  {
    "id": 123,
    "name": {
      "uz": "Haepyo Soya Oil 1.8L",
      "ru": "Haepyo Соевое масло 1.8Л",
      "kr": "해표 콩기름 1.8L",
      "en": "Haepyo Soya Oil 1.8L"
    },
    "price": 1,
    "category": "Yog'",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-27 (2).jpg"
  },
  {
    "id": 124,
    "name": {
      "uz": "Sunshine Solnishko 5L",
      "ru": "Sunshine Солнышко 5Л",
      "kr": "Sunshine 해바라기유 5L",
      "en": "Sunshine Sunflower Oil 5L"
    },
    "price": 1,
    "category": "Yog'",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-27.jpg"
  },
  {
    "id": 125,
    "name": {
      "uz": "Haepyo Corn Oil 1.8L",
      "ru": "Haepyo Кукурузное масло 1.8Л",
      "kr": "해표 옥수수유 1.8L",
      "en": "Haepyo Corn Oil 1.8L"
    },
    "price": 1,
    "category": "Yog'",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-28.jpg"
  },
  {
    "id": 126,
    "name": {
      "uz": "Mr. Chai Pickled Gherkins",
      "ru": "Mr. Chai Маринованные огурцы",
      "kr": "Mr. Chai 피클",
      "en": "Mr. Chai Pickled Gherkins"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-29 (2).jpg"
  },
  {
    "id": 127,
    "name": {
      "uz": "Green Garden Peeled Tomatoes 2500g",
      "ru": "Green Garden Очищенные томаты 2500г",
      "kr": "Green Garden 토마토 2500g",
      "en": "Green Garden Peeled Tomatoes 2500g"
    },
    "price": 1,
    "category": "Tomat",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-29.jpg"
  },
  {
    "id": 128,
    "name": {
      "uz": "Berrak Gherkin Pickles 3kg",
      "ru": "Berrak Огурцы маринованные 3кг",
      "kr": "Berrak 오이 피클 3kg",
      "en": "Berrak Gherkin Pickles 3kg"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-30 (2).jpg"
  },
  {
    "id": 129,
    "name": {
      "uz": "Suntat Mixed Vegetables",
      "ru": "Suntat Овощная смесь",
      "kr": "Suntat 혼합 채소",
      "en": "Suntat Mixed Vegetables"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-30.jpg"
  },
  {
    "id": 130,
    "name": {
      "uz": "Alata Mixed Vegetables",
      "ru": "Alata Овощная смесь",
      "kr": "Alata 혼합 채소",
      "en": "Alata Mixed Vegetables"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-31 (2).jpg"
  },
  {
    "id": 131,
    "name": {
      "uz": "Alata Cabbage Pickle",
      "ru": "Alata Маринованная капуста",
      "kr": "Alata 양배추 피클",
      "en": "Alata Cabbage Pickle"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-31.jpg"
  },
  {
    "id": 132,
    "name": {
      "uz": "Suntat Mixed Vegetables (kichik)",
      "ru": "Suntat Овощная смесь (малый)",
      "kr": "Suntat 혼합채소 (소)",
      "en": "Suntat Mixed Vegetables (small)"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-32.jpg"
  },
  {
    "id": 133,
    "image": "",
    "name": {
      "uz": "Pasta Rino Elbows",
      "ru": "Pasta Rino Рожки",
      "kr": "Pasta Rino 엘보",
      "en": "Pasta Rino Elbows"
    },
    "price": 1,
    "category": "Makaron"
  },
  {
    "id": 134,
    "image": "",
    "name": {
      "uz": "Makfa Makaron",
      "ru": "Макфа Макароны",
      "kr": "Makfa 마카로니",
      "en": "Makfa Pasta"
    },
    "price": 1,
    "category": "Makaron"
  },
  {
    "id": 135,
    "image": "",
    "name": {
      "uz": "Toza 95 Yashil Choy",
      "ru": "Toza 95 Зелёный чай",
      "kr": "Toza 95 녹차",
      "en": "Toza 95 Green Tea"
    },
    "price": 1,
    "category": "Choy"
  },
  {
    "id": 136,
    "name": {
      "uz": "Pasta Rino Penne",
      "ru": "Pasta Rino Пенне",
      "kr": "Pasta Rino 펜네",
      "en": "Pasta Rino Penne"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-35 (2).jpg"
  },
  {
    "id": 137,
    "name": {
      "uz": "Zelenyy Sad Bodring 1320g",
      "ru": "Зелёный Сад Огурцы 1320г",
      "kr": "초록정원 오이 1320g",
      "en": "Green Garden Cucumbers 1320g"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-35.jpg"
  },
  {
    "id": 138,
    "name": {
      "uz": "Pasta Rino Fusilli",
      "ru": "Pasta Rino Фузилли",
      "kr": "Pasta Rino 푸실리",
      "en": "Pasta Rino Fusilli"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-36 (2).jpg"
  },
  {
    "id": 139,
    "name": {
      "uz": "Pasta Rino Spaghetti",
      "ru": "Pasta Rino Спагетти",
      "kr": "Pasta Rino 스파게티",
      "en": "Pasta Rino Spaghetti"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-36.jpg"
  },
  {
    "id": 140,
    "name": {
      "uz": "Tanho Pasta Vermishel 700g",
      "ru": "Танхо Паста Вермишель 700г",
      "kr": "Tanho 버미셀리 700g",
      "en": "Tanho Vermicelli 700g"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-37.jpg"
  },
  {
    "id": 141,
    "name": {
      "uz": "Tanho Pasta Elbows 500g",
      "ru": "Танхо Паста Рожки 500г",
      "kr": "Tanho 엘보 500g",
      "en": "Tanho Elbows 500g"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-38 (2).jpg"
  },
  {
    "id": 142,
    "name": {
      "uz": "Tanho Pasta Spagetti 400g",
      "ru": "Танхо Паста Спагетти 400г",
      "kr": "Tanho 스파게티 400g",
      "en": "Tanho Spaghetti 400g"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-38.jpg"
  },
  {
    "id": 143,
    "name": {
      "uz": "Tanho Pasta Fusilli 500g",
      "ru": "Танхо Паста Фузилли 500г",
      "kr": "Tanho 푸실리 500g",
      "en": "Tanho Fusilli 500g"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-39.jpg"
  },
  {
    "id": 144,
    "name": {
      "uz": "Uvelka Makaron",
      "ru": "Увелка Настоящие Макароны",
      "kr": "Uvelka 마카로니",
      "en": "Uvelka Real Pasta"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-40.jpg"
  },
  {
    "id": 145,
    "name": {
      "uz": "Besler Elbows",
      "ru": "Besler Рожки",
      "kr": "Besler 엘보",
      "en": "Besler Elbows"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-41 (2).jpg"
  },
  {
    "id": 146,
    "name": {
      "uz": "Besler Fusilli",
      "ru": "Besler Фузилли",
      "kr": "Besler 푸실리",
      "en": "Besler Fusilli"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-41.jpg"
  },
  {
    "id": 147,
    "name": {
      "uz": "KB Halal Food Mosh",
      "ru": "KB Halal Food Маш",
      "kr": "KB Halal Food 녹두",
      "en": "KB Halal Food Mung Beans"
    },
    "price": 1,
    "category": "Dukkaklilar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-42.jpg"
  },
  {
    "id": 148,
    "name": {
      "uz": "KB Halal Food Loviya",
      "ru": "KB Halal Food Фасоль",
      "kr": "KB Halal Food 콩",
      "en": "KB Halal Food Beans"
    },
    "price": 1,
    "category": "Dukkaklilar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-43.jpg"
  },
  {
    "id": 149,
    "name": {
      "uz": "Konserva Tushonka",
      "ru": "Консерва Тушёнка",
      "kr": "통조림 고기",
      "en": "Canned Stewed Meat"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-45 (2).jpg"
  },
  {
    "id": 150,
    "name": {
      "uz": "Konserva Tushonka (kichik)",
      "ru": "Консерва Тушёнка (малая)",
      "kr": "통조림 고기 (소)",
      "en": "Canned Stewed Meat (small)"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-45.jpg"
  },
  {
    "id": 151,
    "image": "",
    "name": {
      "uz": "Konserva Govyadina",
      "ru": "Консерва Говядина",
      "kr": "통조림 쇠고기",
      "en": "Canned Beef"
    },
    "price": 1,
    "category": "Konserva"
  },
  {
    "id": 152,
    "image": "",
    "name": {
      "uz": "Konserva Baranina",
      "ru": "Консерва Баранина",
      "kr": "통조림 양고기",
      "en": "Canned Lamb"
    },
    "price": 1,
    "category": "Konserva"
  },
  {
    "id": 153,
    "name": {
      "uz": "Safo Adjika",
      "ru": "Safo Аджика",
      "kr": "Safo 아지카",
      "en": "Safo Adjika"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-48 (2).jpg"
  },
  {
    "id": 154,
    "name": {
      "uz": "Tegen Adjika",
      "ru": "Tegen Аджика",
      "kr": "Tegen 아지카",
      "en": "Tegen Adjika"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-48.jpg"
  },
  {
    "id": 155,
    "name": {
      "uz": "Tegen Lecho",
      "ru": "Tegen Лечо",
      "kr": "Tegen 레찈",
      "en": "Tegen Lecho"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-49.jpg"
  },
  {
    "id": 156,
    "name": {
      "uz": "Veres Ikra z Kabachkiv",
      "ru": "Верес Икра из кабачков",
      "kr": "Veres 애호박 캐비아",
      "en": "Veres Squash Caviar"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-50 (2).jpg"
  },
  {
    "id": 157,
    "name": {
      "uz": "Veres Adjika",
      "ru": "Верес Аджика",
      "kr": "Veres 아지카",
      "en": "Veres Adjika"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-50.jpg"
  },
  {
    "id": 158,
    "name": {
      "uz": "Veres Ragu",
      "ru": "Верес Рагу",
      "kr": "Veres 라구",
      "en": "Veres Ragu"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-51.jpg"
  },
  {
    "id": 159,
    "name": {
      "uz": "Alata Hot Pepper Pickle",
      "ru": "Alata Острый перец маринованный",
      "kr": "Alata 매운고추 피클",
      "en": "Alata Hot Pepper Pickle"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-52.jpg"
  },
  {
    "id": 160,
    "name": {
      "uz": "Suntat Hot Pepper Pickle",
      "ru": "Suntat Острый перец маринованный",
      "kr": "Suntat 매운고추 피클",
      "en": "Suntat Hot Pepper Pickle"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-53 (2).jpg"
  },
  {
    "id": 161,
    "name": {
      "uz": "Berrak Jalapeno Pickle",
      "ru": "Berrak Халапеньо",
      "kr": "Berrak 할라페뇐",
      "en": "Berrak Jalapeno Pickle"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-53.jpg"
  },
  {
    "id": 162,
    "name": {
      "uz": "Safo Ajvar",
      "ru": "Safo Айвар",
      "kr": "Safo 아이바르",
      "en": "Safo Ajvar"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-54.jpg"
  },
  {
    "id": 163,
    "name": {
      "uz": "Safo Red Pepper",
      "ru": "Safo Красный перец",
      "kr": "Safo 빨간 고추",
      "en": "Safo Red Pepper"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-55 (2).jpg"
  },
  {
    "id": 164,
    "name": {
      "uz": "Uz Kand Pomidory",
      "ru": "Уз Канд Помидоры",
      "kr": "Uz Kand 토마토",
      "en": "Uz Kand Tomatoes"
    },
    "price": 1,
    "category": "Tomat",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-55.jpg"
  },
  {
    "id": 165,
    "name": {
      "uz": "Green Tomatoes Marinated",
      "ru": "Зелёные помидоры маринованные",
      "kr": "구운 초록 토마토",
      "en": "Green Tomatoes Marinated"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-56.jpg"
  },
  {
    "id": 166,
    "name": {
      "uz": "Maxeev Mayonez Olive",
      "ru": "Махеев Майонез Olive",
      "kr": "Maxeev 마요네즈 올리브",
      "en": "Maxeev Mayonnaise Olive"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-57.jpg"
  },
  {
    "id": 167,
    "name": {
      "uz": "Amrita Assorted Pickles",
      "ru": "Амрита Ассорти солений",
      "kr": "Amrita 모듬 피클",
      "en": "Amrita Assorted Pickles"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-58.jpg"
  },
  {
    "id": 168,
    "name": {
      "uz": "Globus Kukuruza",
      "ru": "Глобус Кукуруза",
      "kr": "Globus 옥수수",
      "en": "Globus Sweet Corn"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-05-59.jpg"
  },
  {
    "id": 169,
    "name": {
      "uz": "Globus Goroshek",
      "ru": "Глобус Горошек",
      "kr": "Globus 완두콩",
      "en": "Globus Green Peas"
    },
    "price": 1,
    "category": "Konserva",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-00.jpg"
  },
  {
    "id": 170,
    "name": {
      "uz": "Tat Grated Tomato",
      "ru": "Tat Тёртый томат",
      "kr": "Tat 간 토마토",
      "en": "Tat Grated Tomato"
    },
    "price": 1,
    "category": "Tomat",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-01 (2).jpg"
  },
  {
    "id": 171,
    "name": {
      "uz": "Tat Tomato Paste",
      "ru": "Tat Томатная паста",
      "kr": "Tat 토마토 페이스트",
      "en": "Tat Tomato Paste"
    },
    "price": 1,
    "category": "Tomat",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-01.jpg"
  },
  {
    "id": 172,
    "name": {
      "uz": "Zigir Yog'i 7500W",
      "ru": "Зигир Масло 7500W",
      "kr": "지길 기름 7500W",
      "en": "Zigir Oil 7500W"
    },
    "price": 1,
    "category": "Yog'",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-02.jpg"
  },
  {
    "id": 173,
    "name": {
      "uz": "Zigir Yog'i 7500W",
      "ru": "Зигир Масло 7500W",
      "kr": "지길 기름 7500W",
      "en": "Zigir Oil 7500W"
    },
    "price": 1,
    "category": "Yog'",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-03.jpg"
  },
  {
    "id": 174,
    "name": {
      "uz": "Tat Grated Tomato",
      "ru": "Tat Тёртый томат",
      "kr": "Tat 간 토마토",
      "en": "Tat Grated Tomato"
    },
    "price": 1,
    "category": "Tomat",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-04 (2).jpg"
  },
  {
    "id": 175,
    "name": {
      "uz": "Zigir Yog'i",
      "ru": "Зигир Масло",
      "kr": "지길 기름",
      "en": "Zigir Oil"
    },
    "price": 1,
    "category": "Yog'",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-04.jpg"
  },
  {
    "id": 176,
    "name": {
      "uz": "Uvelka Penne Makaron",
      "ru": "Увелка Пенне Макароны",
      "kr": "Uvelka 펜네 마카로니",
      "en": "Uvelka Penne Pasta"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-05.jpg"
  },
  {
    "id": 177,
    "name": {
      "uz": "Uvelka Elbows Makaron",
      "ru": "Увелка Рожки Макароны",
      "kr": "Uvelka 엘보 마카로니",
      "en": "Uvelka Elbows Pasta"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-06.jpg"
  },
  {
    "id": 178,
    "name": {
      "uz": "Uvelka Vermishel Makaron",
      "ru": "Увелка Вермишель",
      "kr": "Uvelka 버미셀리",
      "en": "Uvelka Vermicelli"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-07.jpg"
  },
  {
    "id": 179,
    "name": {
      "uz": "Date Crown Khalas 1kg",
      "ru": "Date Crown Khalas 1кг",
      "kr": "Date Crown Khalas 1kg",
      "en": "Date Crown Khalas 1kg"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-08 (2).jpg"
  },
  {
    "id": 180,
    "name": {
      "uz": "DatePalm Khalas 1kg",
      "ru": "DatePalm Khalas 1кг",
      "kr": "DatePalm Khalas 1kg",
      "en": "DatePalm Khalas 1kg"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-08.jpg"
  },
  {
    "id": 181,
    "name": {
      "uz": "Barari Ajwa Dates",
      "ru": "Barari Ajwa Финики",
      "kr": "Barari Ajwa 대추야자",
      "en": "Barari Ajwa Dates"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-09.jpg"
  },
  {
    "id": 182,
    "name": {
      "uz": "Royal Palm Deglet Nour Dates",
      "ru": "Royal Palm Deglet Nour Финики",
      "kr": "Royal Palm Deglet Nour 대추야자",
      "en": "Royal Palm Deglet Nour Dates"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-10.jpg"
  },
  {
    "id": 183,
    "name": {
      "uz": "Date Crown Fard 1kg",
      "ru": "Date Crown Fard 1кг",
      "kr": "Date Crown Fard 1kg",
      "en": "Date Crown Fard 1kg"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-11 (2).jpg"
  },
  {
    "id": 184,
    "name": {
      "uz": "Madinah Delights Medjool Dates",
      "ru": "Madinah Delights Medjool Финики",
      "kr": "Madinah Delights Medjool 대추야자",
      "en": "Madinah Delights Medjool Dates"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-11.jpg"
  },
  {
    "id": 185,
    "name": {
      "uz": "Date Crown Lulu 1kg",
      "ru": "Date Crown Lulu 1кг",
      "kr": "Date Crown Lulu 1kg",
      "en": "Date Crown Lulu 1kg"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-12.jpg"
  },
  {
    "id": 186,
    "name": {
      "uz": "Madinah Delights Premium Saudi Dates",
      "ru": "Madinah Delights Саудовские финики",
      "kr": "Madinah Delights 사우디 대추야자",
      "en": "Madinah Delights Premium Saudi Dates"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-13.jpg"
  },
  {
    "id": 187,
    "name": {
      "uz": "Lipton Peppermint 10 paket",
      "ru": "Lipton Мята 10 пакетов",
      "kr": "Lipton 페퍼민트 10개입",
      "en": "Lipton Peppermint 10 bags"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-14 (2).jpg"
  },
  {
    "id": 188,
    "name": {
      "uz": "Dinay Sharbat",
      "ru": "Dinay Напиток",
      "kr": "Dinay 음료",
      "en": "Dinay Juice"
    },
    "price": 1,
    "category": "Ichimliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-14.jpg"
  },
  {
    "id": 189,
    "name": {
      "uz": "Lipton Chamomile 10 paket",
      "ru": "Lipton Ромашка 10 пакетов",
      "kr": "Lipton 캐모마일 10개입",
      "en": "Lipton Chamomile 10 bags"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-15.jpg"
  },
  {
    "id": 190,
    "name": {
      "uz": "Lipton Rooibos 10 paket",
      "ru": "Lipton Ройбуш 10 пакетов",
      "kr": "Lipton 루이보스 10개입",
      "en": "Lipton Rooibos 10 bags"
    },
    "price": 1,
    "category": "Choy",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-16.jpg"
  },
  {
    "id": 191,
    "name": {
      "uz": "DatePalm Medjoul Dates",
      "ru": "DatePalm Medjoul Финики",
      "kr": "DatePalm Medjoul 대추야자",
      "en": "DatePalm Medjoul Dates"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-17 (2).jpg"
  },
  {
    "id": 192,
    "name": {
      "uz": "Barari Ajwa Dates (kichik)",
      "ru": "Barari Ajwa Финики (малые)",
      "kr": "Barari Ajwa 대추야자 (소)",
      "en": "Barari Ajwa Dates (small)"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-17.jpg"
  },
  {
    "id": 193,
    "name": {
      "uz": "DatePalm Khudri Dates",
      "ru": "DatePalm Khudri Финики",
      "kr": "DatePalm Khudri 대추야자",
      "en": "DatePalm Khudri Dates"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-18.jpg"
  },
  {
    "id": 194,
    "name": {
      "uz": "Barari Safawi Dates",
      "ru": "Barari Safawi Финики",
      "kr": "Barari Safawi 대추야자",
      "en": "Barari Safawi Dates"
    },
    "price": 1,
    "category": "Xurmo",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-19.jpg"
  },
  {
    "id": 195,
    "name": {
      "uz": "Khalvinka Konfet",
      "ru": "Халвинка Конфеты",
      "kr": "할바 캔디",
      "en": "Khalvinka Candy"
    },
    "price": 1,
    "category": "Shirinliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-20.jpg"
  },
  {
    "id": 196,
    "name": {
      "uz": "Almatinskaya Khalva (Araxis, Maviz)",
      "ru": "Алматинская Халва (Арахис, Изюм)",
      "kr": "알마티 할바 (땅콩, 건포도)",
      "en": "Almaty Halva (Peanut, Raisin)"
    },
    "price": 1,
    "category": "Shirinliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-21.jpg"
  },
  {
    "id": 197,
    "name": {
      "uz": "Almatinskaya Khalva Podsolnechnaya",
      "ru": "Алматинская Халва Подсолнечная",
      "kr": "알마티 할바 해바라기",
      "en": "Almaty Halva Sunflower"
    },
    "price": 1,
    "category": "Shirinliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-22 (2).jpg"
  },
  {
    "id": 198,
    "name": {
      "uz": "Dostik Khalva",
      "ru": "Достык Халва",
      "kr": "도스틱 할바",
      "en": "Dostik Halva"
    },
    "price": 1,
    "category": "Shirinliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-22.jpg"
  },
  {
    "id": 199,
    "name": {
      "uz": "Kazakhstanskaya Khalva Podsolnechnaya",
      "ru": "Казахстанская Халва Подсолнечная",
      "kr": "카자흐스탄 할바 해바라기",
      "en": "Kazakh Halva Sunflower"
    },
    "price": 1,
    "category": "Shirinliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-23.jpg"
  },
  {
    "id": 200,
    "name": {
      "uz": "Uvelka Pearl Barley 800g",
      "ru": "Увелка Перловая крупа 800г",
      "kr": "Uvelka 보리 800g",
      "en": "Uvelka Pearl Barley 800g"
    },
    "price": 1,
    "category": "Yormalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-24 (2).jpg"
  },
  {
    "id": 201,
    "name": {
      "uz": "Uvelka Semolina 700g",
      "ru": "Увелка Манная крупа 700г",
      "kr": "Uvelka 세몰리나 700g",
      "en": "Uvelka Semolina 700g"
    },
    "price": 1,
    "category": "Yormalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-24.jpg"
  },
  {
    "id": 202,
    "name": {
      "uz": "Uvelka Instant Oatmeal",
      "ru": "Увелка Овсянка",
      "kr": "Uvelka 오트밀",
      "en": "Uvelka Instant Oatmeal"
    },
    "price": 1,
    "category": "Yormalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-25.jpg"
  },
  {
    "id": 203,
    "name": {
      "uz": "Makiz Shilpildok 500g",
      "ru": "Макиз Шилпилдок 500г",
      "kr": "Makiz 쉐플독 500g",
      "en": "Makiz Shilpildok 500g"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-26.jpg"
  },
  {
    "id": 204,
    "name": {
      "uz": "Makfa Makaron 450g",
      "ru": "Макфа Макароны 450г",
      "kr": "Makfa 마카로니 450g",
      "en": "Makfa Pasta 450g"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-27 (2).jpg"
  },
  {
    "id": 205,
    "name": {
      "uz": "Makfa Bantiki 400g",
      "ru": "Макфа Бантики 400г",
      "kr": "Makfa 반티키 400g",
      "en": "Makfa Farfalle 400g"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-27.jpg"
  },
  {
    "id": 206,
    "name": {
      "uz": "Makfa Penne 450g",
      "ru": "Макфа Пенне 450г",
      "kr": "Makfa 펜네 450g",
      "en": "Makfa Penne 450g"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-28.jpg"
  },
  {
    "id": 207,
    "name": {
      "uz": "Uz Kand Pomidory Zelenye 1L",
      "ru": "Уз Канд Помидоры Зелёные 1Л",
      "kr": "Uz Kand 초록 토마토 1L",
      "en": "Uz Kand Green Tomatoes 1L"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-29.jpg"
  },
  {
    "id": 208,
    "name": {
      "uz": "Amrita Domashnee Solenie",
      "ru": "Амрита Домашнее Соление",
      "kr": "Amrita 홈메이드 피클",
      "en": "Amrita Homemade Pickle"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-30 (2).jpg"
  },
  {
    "id": 209,
    "name": {
      "uz": "Zulya Baraka Pomidory Marinovannye 1L",
      "ru": "Зуля Барака Помидоры Маринованные 1Л",
      "kr": "Zulya Baraka 토마토 피클 1L",
      "en": "Zulya Baraka Pickled Tomatoes 1L"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-30.jpg"
  },
  {
    "id": 210,
    "name": {
      "uz": "Tegen Ovoshnoe Lecho 720ml",
      "ru": "Tegen Овощное Лечо 720мл",
      "kr": "Tegen 레찈 720ml",
      "en": "Tegen Vegetable Lecho 720ml"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-31.jpg"
  },
  {
    "id": 211,
    "name": {
      "uz": "Maxeev Mayonez Perepeliniy",
      "ru": "Махеев Майонез с перепелиным яйцом",
      "kr": "Maxeev 메추리알 마요네즈",
      "en": "Maxeev Quail Egg Mayonnaise"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-32 (2).jpg"
  },
  {
    "id": 212,
    "name": {
      "uz": "Euro Food Trade Lecho 720ml",
      "ru": "Euro Food Trade Лечо 720мл",
      "kr": "Euro Food Trade 레찈 720ml",
      "en": "Euro Food Trade Lecho 720ml"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-32.jpg"
  },
  {
    "id": 213,
    "name": {
      "uz": "Maxeev Lecho",
      "ru": "Махеев Лечо",
      "kr": "Maxeev 레찈",
      "en": "Maxeev Lecho"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-33.jpg"
  },
  {
    "id": 214,
    "name": {
      "uz": "Maxeev Mayonnaise Classic",
      "ru": "Махеев Майонез Классический",
      "kr": "Maxeev 클래식 마요네즈",
      "en": "Maxeev Mayonnaise Classic"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-34 (2).jpg"
  },
  {
    "id": 215,
    "name": {
      "uz": "Maxeev Mayonnaise Olive",
      "ru": "Махеев Майонез Olive",
      "kr": "Maxeev 올리브 마요네즈",
      "en": "Maxeev Mayonnaise Olive"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-34.jpg"
  },
  {
    "id": 216,
    "name": {
      "uz": "Maxeev Ketchup Classic",
      "ru": "Махеев Кетчуп Классический",
      "kr": "Maxeev 클래식 케첩",
      "en": "Maxeev Ketchup Classic"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-35.jpg"
  },
  {
    "id": 217,
    "name": {
      "uz": "Tanho Mayonez Provansal",
      "ru": "Танхо Майонез Провансаль",
      "kr": "Tanho 마요네즈 프로방살",
      "en": "Tanho Mayonnaise Provencal"
    },
    "price": 1,
    "category": "Sous",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-36.jpg"
  },
  {
    "id": 218,
    "name": {
      "uz": "Mehran Ginger Garlic Paste",
      "ru": "Мехран Паста Имбирь-Чеснок",
      "kr": "Mehran 생강마늘 페이스트",
      "en": "Mehran Ginger Garlic Paste"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-37.jpg"
  },
  {
    "id": 219,
    "name": {
      "uz": "Guruch 4000W",
      "ru": "Рис 4000W",
      "kr": "쌀 4000W",
      "en": "Rice 4000W"
    },
    "price": 1,
    "category": "Guruch",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-38 (2).jpg"
  },
  {
    "id": 220,
    "name": {
      "uz": "Monsoon Biryani Rice 1kg",
      "ru": "Monsoon Рис Бирьяни 1кг",
      "kr": "Monsoon 비리야니 쌀 1kg",
      "en": "Monsoon Biryani Rice 1kg"
    },
    "price": 1,
    "category": "Guruch",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-38.jpg"
  },
  {
    "id": 221,
    "name": {
      "uz": "Bamasi Pai Sela Basmati Rice 1kg",
      "ru": "Бамаси Пай Рис Басмати 1кг",
      "kr": "Bamasi Pai 바스마티 쌀 1kg",
      "en": "Bamasi Pai Sela Basmati Rice 1kg"
    },
    "price": 1,
    "category": "Guruch",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-39.jpg"
  },
  {
    "id": 222,
    "name": {
      "uz": "Tanho Pasta Spaghetti 400g",
      "ru": "Танхо Паста Спагетти 400г",
      "kr": "Tanho 파스타 스파게티 400g",
      "en": "Tanho Pasta Spaghetti 400g"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-40 (2).jpg"
  },
  {
    "id": 223,
    "name": {
      "uz": "Besler Spaghetti 500g",
      "ru": "Беслер Спагетти 500г",
      "kr": "Besler 스파게티 500g",
      "en": "Besler Spaghetti 500g"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-40.jpg"
  },
  {
    "id": 224,
    "name": {
      "uz": "Uvelka Nastoyashchie Makarony",
      "ru": "Увелка Настоящие Макароны",
      "kr": "Uvelka 정통 마카로니",
      "en": "Uvelka Real Pasta"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-41.jpg"
  },
  {
    "id": 225,
    "name": {
      "uz": "Pasta Rino Elbows",
      "ru": "Паста Рино Рожки",
      "kr": "Pasta Rino 엘보우",
      "en": "Pasta Rino Elbows"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-42 (2).jpg"
  },
  {
    "id": 226,
    "name": {
      "uz": "Pran Mixed Pickle",
      "ru": "Пран Смешанный Маринад",
      "kr": "Pran 믹스 피클",
      "en": "Pran Mixed Pickle"
    },
    "price": 1,
    "category": "Tuzlamalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-42.jpg"
  },
  {
    "id": 227,
    "name": {
      "uz": "Arden Makarna Spaghetti",
      "ru": "Арден Макарна Спагетти",
      "kr": "Arden 스파게티",
      "en": "Arden Makarna Spaghetti"
    },
    "price": 1,
    "category": "Makaron",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-43 (2).jpg"
  },
  {
    "id": 228,
    "name": {
      "uz": "World Sooji 1kg",
      "ru": "World Суджи 1кг",
      "kr": "World 수지 1kg",
      "en": "World Sooji 1kg"
    },
    "price": 1,
    "category": "Un",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-43 (3).jpg"
  },
  {
    "id": 229,
    "name": {
      "uz": "Rajdhani Poha Mota",
      "ru": "Райдхани Поха Мота",
      "kr": "Rajdhani 포하 모타",
      "en": "Rajdhani Poha Mota"
    },
    "price": 1,
    "category": "Yormalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-43.jpg"
  },
  {
    "id": 230,
    "name": {
      "uz": "World Gram Flour (Besan)",
      "ru": "World Нутовая Мука (Безан)",
      "kr": "World 그램 플라워 (베산)",
      "en": "World Gram Flour (Besan)"
    },
    "price": 1,
    "category": "Un",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-44 (2).jpg"
  },
  {
    "id": 231,
    "name": {
      "uz": "KB Halal Quruq Qalampir",
      "ru": "KB Халал Сушёный Перец",
      "kr": "KB 할랄 건고추",
      "en": "KB Halal Dried Chili"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-44 (3).jpg"
  },
  {
    "id": 232,
    "name": {
      "uz": "Dream Meat Masala 100g",
      "ru": "Dream Мясная Масала 100г",
      "kr": "Dream 미트 마살라 100g",
      "en": "Dream Meat Masala 100g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-44.jpg"
  },
  {
    "id": 233,
    "name": {
      "uz": "Agri Tec Chili",
      "ru": "Agri Tec Перец Чили",
      "kr": "Agri Tec 칠리",
      "en": "Agri Tec Chili"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-45 (2).jpg"
  },
  {
    "id": 234,
    "name": {
      "uz": "Laziza Chicken Masala 100g",
      "ru": "Лазиза Куриная Масала 100г",
      "kr": "Laziza 치킨 마살라 100g",
      "en": "Laziza Chicken Masala 100g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-45 (3).jpg"
  },
  {
    "id": 235,
    "name": {
      "uz": "Jannat Trading Cumin Whole 200g",
      "ru": "Jannat Trading Тмин Целый 200г",
      "kr": "Jannat Trading 쿠민 홀 200g",
      "en": "Jannat Trading Cumin Whole 200g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-45.jpg"
  },
  {
    "id": 236,
    "name": {
      "uz": "Laziz Black Pepper Powder",
      "ru": "Лазиз Чёрный Перец Молотый",
      "kr": "Laziz 블랙페퍼 파우더",
      "en": "Laziz Black Pepper Powder"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-46 (2).jpg"
  },
  {
    "id": 237,
    "name": {
      "uz": "Jannat Trading Cumin Whole 200g",
      "ru": "Jannat Trading Тмин Целый 200г",
      "kr": "Jannat Trading 쿠민 홀 200g",
      "en": "Jannat Trading Cumin Whole 200g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-46 (3).jpg"
  },
  {
    "id": 238,
    "name": {
      "uz": "Laziz Black Pepper Powder",
      "ru": "Лазиз Чёрный Перец Молотый",
      "kr": "Laziz 블랙페퍼 파우더",
      "en": "Laziz Black Pepper Powder"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-46.jpg"
  },
  {
    "id": 239,
    "name": {
      "uz": "Shan Garam Masala Powder 200g",
      "ru": "Шан Гарам Масала 200г",
      "kr": "Shan 가람 마살라 200g",
      "en": "Shan Garam Masala Powder 200g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-47 (2).jpg"
  },
  {
    "id": 240,
    "name": {
      "uz": "Mehran Turmeric Powder 200g",
      "ru": "Мехран Куркума 200г",
      "kr": "Mehran 강황 가루 200g",
      "en": "Mehran Turmeric Powder 200g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-47 (3).jpg"
  },
  {
    "id": 241,
    "name": {
      "uz": "Jannat Trading Cumin Powder 200g",
      "ru": "Jannat Trading Тмин Молотый 200г",
      "kr": "Jannat Trading 쿠민 파우더 200g",
      "en": "Jannat Trading Cumin Powder 200g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-47.jpg"
  },
  {
    "id": 242,
    "name": {
      "uz": "Deepak Gol Gappa 200g",
      "ru": "Дипак Гол Гаппа 200г",
      "kr": "Deepak 골 가파 200g",
      "en": "Deepak Gol Gappa 200g"
    },
    "price": 1,
    "category": "Shirinliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-48.jpg"
  },
  {
    "id": 243,
    "name": {
      "uz": "Omega Universalnaya Super Priprava",
      "ru": "Омега Универсальная Супер Приправа",
      "kr": "Omega 만능 수퍼 양념",
      "en": "Omega Universal Super Seasoning"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-51.jpg"
  },
  {
    "id": 244,
    "name": {
      "uz": "Deepak Gol Gappa 200g",
      "ru": "Дипак Гол Гаппа 200г",
      "kr": "Deepak 골 가파 200g",
      "en": "Deepak Gol Gappa 200g"
    },
    "price": 1,
    "category": "Shirinliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-06-56.jpg"
  },
  {
    "id": 245,
    "name": {
      "uz": "Radhuni Chilli Powder 200g",
      "ru": "Радхуни Перец Чили 200г",
      "kr": "Radhuni 칠리 파우더 200g",
      "en": "Radhuni Chilli Powder 200g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-07-02.jpg"
  },
  {
    "id": 246,
    "name": {
      "uz": "Omega Universalnaya 100 Blyud",
      "ru": "Омега Универсальная 100 Блюд",
      "kr": "Omega 만능 100가지 요리",
      "en": "Omega Universal 100 Dishes"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-07-50.jpg"
  },
  {
    "id": 247,
    "name": {
      "uz": "Omega Palov Uchun Priprava",
      "ru": "Омега Приправа для Плова По-Узбекски",
      "kr": "Omega 우즈벡 플로프 양념",
      "en": "Omega Uzbek Pilaf Seasoning"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-07-53.jpg"
  },
  {
    "id": 248,
    "name": {
      "uz": "Omega Shashlik Uchun Priprava",
      "ru": "Омега Приправа для Шашлыка",
      "kr": "Omega 샤슬릭 양념",
      "en": "Omega Shashlik Seasoning"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-07-55.jpg"
  },
  {
    "id": 249,
    "name": {
      "uz": "Omega Lagmon Uchun Priprava",
      "ru": "Омега Приправа для Лагмана",
      "kr": "Omega 라그만 양념",
      "en": "Omega Lagman Seasoning"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-07-57.jpg"
  },
  {
    "id": 250,
    "name": {
      "uz": "Omega Tovuq Uchun Priprava",
      "ru": "Омега Приправа для Курицы",
      "kr": "Omega 치킨 양념",
      "en": "Omega Chicken Seasoning"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-07-59.jpg"
  },
  {
    "id": 251,
    "name": {
      "uz": "Omega Sabzi Po-Koreyski",
      "ru": "Омега Приправа Моркови По-Корейски",
      "kr": "Omega 한국식 당근 양념",
      "en": "Omega Korean Carrot Seasoning"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-01.jpg"
  },
  {
    "id": 252,
    "name": {
      "uz": "Omega Go'sht Uchun Priprava",
      "ru": "Омега Приправа к Мясу",
      "kr": "Omega 고기 양념",
      "en": "Omega Meat Seasoning"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-03.jpg"
  },
  {
    "id": 253,
    "name": {
      "uz": "Gurman Palov Uchun",
      "ru": "Гурман Приправа для Плова",
      "kr": "Gurman 필라프용",
      "en": "Gurman Pilaf Seasoning"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-05.jpg"
  },
  {
    "id": 254,
    "name": {
      "uz": "Gurman Universalnaya",
      "ru": "Гурман Универсальная",
      "kr": "Gurman 다목적용",
      "en": "Gurman Universal Seasoning"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-08-07.jpg"
  },
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Guruch",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Quritilgan Mevalar",
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
    "category": "Quritilgan Mevalar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Shirinliklar",
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
    "category": "Quritilgan Mevalar",
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
    "category": "Shirinliklar",
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
    "category": "Quritilgan Mevalar",
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
    "category": "Quritilgan Mevalar",
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
    "category": "Quritilgan Mevalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-12.jpg"
  },
  {
    "id": 408,
    "name": {
      "uz": "Mezana Special 1",
      "ru": "Mezana Special 1",
      "kr": "Mezana Special 1",
      "en": "Mezana Special 1"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-13.jpg"
  },
  {
    "id": 409,
    "name": {
      "uz": "Mezana Special 2",
      "ru": "Mezana Special 2",
      "kr": "Mezana Special 2",
      "en": "Mezana Special 2"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-14.jpg"
  },
  {
    "id": 410,
    "name": {
      "uz": "Mezana Special 3",
      "ru": "Mezana Special 3",
      "kr": "Mezana Special 3",
      "en": "Mezana Special 3"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-21.jpg"
  },
  {
    "id": 411,
    "name": {
      "uz": "Mezana Special 4",
      "ru": "Mezana Special 4",
      "kr": "Mezana Special 4",
      "en": "Mezana Special 4"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-22.jpg"
  },
  {
    "id": 412,
    "name": {
      "uz": "Mezana Special 5",
      "ru": "Mezana Special 5",
      "kr": "Mezana Special 5",
      "en": "Mezana Special 5"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-23.jpg"
  },
  {
    "id": 413,
    "name": {
      "uz": "Mezana Special 6",
      "ru": "Mezana Special 6",
      "kr": "Mezana Special 6",
      "en": "Mezana Special 6"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-24.jpg"
  },
  {
    "id": 414,
    "name": {
      "uz": "Mezana Special 7",
      "ru": "Mezana Special 7",
      "kr": "Mezana Special 7",
      "en": "Mezana Special 7"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-25 (2).jpg"
  },
  {
    "id": 415,
    "name": {
      "uz": "Mezana Special 8",
      "ru": "Mezana Special 8",
      "kr": "Mezana Special 8",
      "en": "Mezana Special 8"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-25.jpg"
  },
  {
    "id": 416,
    "name": {
      "uz": "Mezana Special 9",
      "ru": "Mezana Special 9",
      "kr": "Mezana Special 9",
      "en": "Mezana Special 9"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-26.jpg"
  },
  {
    "id": 417,
    "name": {
      "uz": "Mezana Special 10",
      "ru": "Mezana Special 10",
      "kr": "Mezana Special 10",
      "en": "Mezana Special 10"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-27.jpg"
  },
  {
    "id": 418,
    "name": {
      "uz": "Mezana Special 11",
      "ru": "Mezana Special 11",
      "kr": "Mezana Special 11",
      "en": "Mezana Special 11"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-28.jpg"
  },
  {
    "id": 419,
    "name": {
      "uz": "Mezana Special 12",
      "ru": "Mezana Special 12",
      "kr": "Mezana Special 12",
      "en": "Mezana Special 12"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-29.jpg"
  },
  {
    "id": 420,
    "name": {
      "uz": "Mezana Special 13",
      "ru": "Mezana Special 13",
      "kr": "Mezana Special 13",
      "en": "Mezana Special 13"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-30.jpg"
  },
  {
    "id": 421,
    "name": {
      "uz": "Mezana Special 14",
      "ru": "Mezana Special 14",
      "kr": "Mezana Special 14",
      "en": "Mezana Special 14"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-33.jpg"
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
    "id": 436,
    "name": {
      "uz": "Mezana Special 29",
      "ru": "Mezana Special 29",
      "kr": "Mezana Special 29",
      "en": "Mezana Special 29"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-48.jpg"
  },
  {
    "id": 437,
    "name": {
      "uz": "Mezana Special 30",
      "ru": "Mezana Special 30",
      "kr": "Mezana Special 30",
      "en": "Mezana Special 30"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-49 (2).jpg"
  },
  {
    "id": 438,
    "name": {
      "uz": "Mezana Special 31",
      "ru": "Mezana Special 31",
      "kr": "Mezana Special 31",
      "en": "Mezana Special 31"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-49.jpg"
  },
  {
    "id": 439,
    "name": {
      "uz": "Mezana Special 32",
      "ru": "Mezana Special 32",
      "kr": "Mezana Special 32",
      "en": "Mezana Special 32"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-50.jpg"
  },
  {
    "id": 440,
    "name": {
      "uz": "Mezana Special 33",
      "ru": "Mezana Special 33",
      "kr": "Mezana Special 33",
      "en": "Mezana Special 33"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-51.jpg"
  },
  {
    "id": 441,
    "name": {
      "uz": "Mezana Special 34",
      "ru": "Mezana Special 34",
      "kr": "Mezana Special 34",
      "en": "Mezana Special 34"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-52.jpg"
  },
  {
    "id": 442,
    "name": {
      "uz": "Mezana Special 35",
      "ru": "Mezana Special 35",
      "kr": "Mezana Special 35",
      "en": "Mezana Special 35"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-53.jpg"
  },
  {
    "id": 443,
    "name": {
      "uz": "Mezana Special 36",
      "ru": "Mezana Special 36",
      "kr": "Mezana Special 36",
      "en": "Mezana Special 36"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-54.jpg"
  },
  {
    "id": 444,
    "name": {
      "uz": "Mezana Special 37",
      "ru": "Mezana Special 37",
      "kr": "Mezana Special 37",
      "en": "Mezana Special 37"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-11-55.jpg"
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
    "id": 457,
    "name": {
      "uz": "Mezana Special 50",
      "ru": "Mezana Special 50",
      "kr": "Mezana Special 50",
      "en": "Mezana Special 50"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-09.jpg"
  },
  {
    "id": 458,
    "name": {
      "uz": "Mezana Special 51",
      "ru": "Mezana Special 51",
      "kr": "Mezana Special 51",
      "en": "Mezana Special 51"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-10.jpg"
  },
  {
    "id": 459,
    "name": {
      "uz": "Mezana Special 52",
      "ru": "Mezana Special 52",
      "kr": "Mezana Special 52",
      "en": "Mezana Special 52"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-11.jpg"
  },
  {
    "id": 460,
    "name": {
      "uz": "Mezana Special 53",
      "ru": "Mezana Special 53",
      "kr": "Mezana Special 53",
      "en": "Mezana Special 53"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-12.jpg"
  },
  {
    "id": 461,
    "name": {
      "uz": "Mezana Special 54",
      "ru": "Mezana Special 54",
      "kr": "Mezana Special 54",
      "en": "Mezana Special 54"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-13 (2).jpg"
  },
  {
    "id": 462,
    "name": {
      "uz": "Mezana Special 55",
      "ru": "Mezana Special 55",
      "kr": "Mezana Special 55",
      "en": "Mezana Special 55"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-13.jpg"
  },
  {
    "id": 463,
    "name": {
      "uz": "Mezana Special 56",
      "ru": "Mezana Special 56",
      "kr": "Mezana Special 56",
      "en": "Mezana Special 56"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-14.jpg"
  },
  {
    "id": 464,
    "name": {
      "uz": "Mezana Special 57",
      "ru": "Mezana Special 57",
      "kr": "Mezana Special 57",
      "en": "Mezana Special 57"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-15.jpg"
  },
  {
    "id": 465,
    "name": {
      "uz": "Mezana Special 58",
      "ru": "Mezana Special 58",
      "kr": "Mezana Special 58",
      "en": "Mezana Special 58"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-16.jpg"
  },
  {
    "id": 466,
    "name": {
      "uz": "Mezana Special 59",
      "ru": "Mezana Special 59",
      "kr": "Mezana Special 59",
      "en": "Mezana Special 59"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-17.jpg"
  },
  {
    "id": 467,
    "name": {
      "uz": "Mezana Special 60",
      "ru": "Mezana Special 60",
      "kr": "Mezana Special 60",
      "en": "Mezana Special 60"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-18.jpg"
  },
  {
    "id": 468,
    "name": {
      "uz": "Mezana Special 61",
      "ru": "Mezana Special 61",
      "kr": "Mezana Special 61",
      "en": "Mezana Special 61"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-19.jpg"
  },
  {
    "id": 469,
    "name": {
      "uz": "Mezana Special 62",
      "ru": "Mezana Special 62",
      "kr": "Mezana Special 62",
      "en": "Mezana Special 62"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-20.jpg"
  },
  {
    "id": 470,
    "name": {
      "uz": "Mezana Special 63",
      "ru": "Mezana Special 63",
      "kr": "Mezana Special 63",
      "en": "Mezana Special 63"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-21.jpg"
  },
  {
    "id": 471,
    "name": {
      "uz": "Mezana Special 64",
      "ru": "Mezana Special 64",
      "kr": "Mezana Special 64",
      "en": "Mezana Special 64"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-22.jpg"
  },
  {
    "id": 472,
    "name": {
      "uz": "Mezana Special 65",
      "ru": "Mezana Special 65",
      "kr": "Mezana Special 65",
      "en": "Mezana Special 65"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-23 (2).jpg"
  },
  {
    "id": 473,
    "name": {
      "uz": "Mezana Special 66",
      "ru": "Mezana Special 66",
      "kr": "Mezana Special 66",
      "en": "Mezana Special 66"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-23.jpg"
  },
  {
    "id": 474,
    "name": {
      "uz": "Mezana Special 67",
      "ru": "Mezana Special 67",
      "kr": "Mezana Special 67",
      "en": "Mezana Special 67"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-24.jpg"
  },
  {
    "id": 475,
    "name": {
      "uz": "Mezana Special 68",
      "ru": "Mezana Special 68",
      "kr": "Mezana Special 68",
      "en": "Mezana Special 68"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-25.jpg"
  },
  {
    "id": 476,
    "name": {
      "uz": "Mezana Special 69",
      "ru": "Mezana Special 69",
      "kr": "Mezana Special 69",
      "en": "Mezana Special 69"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-26.jpg"
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
    "id": 478,
    "name": {
      "uz": "Mezana Special 71",
      "ru": "Mezana Special 71",
      "kr": "Mezana Special 71",
      "en": "Mezana Special 71"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-28.jpg"
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
    "id": 502,
    "name": {
      "uz": "Mezana Special 95",
      "ru": "Mezana Special 95",
      "kr": "Mezana Special 95",
      "en": "Mezana Special 95"
    },
    "price": 1,
    "category": "Yangi",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-51.jpg"
  },
  {
    "id": 503,
    "name": {
      "uz": "Amira Milk Suzma 250g",
      "ru": "Amira Milk Сузьма 250г",
      "kr": "Amira Milk 수즈마 250g",
      "en": "Amira Milk Suzma 250g"
    },
    "price": 1,
    "category": "Sut mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-52 (2).jpg"
  },
  {
    "id": 504,
    "name": {
      "uz": "Amira Milk Suzma 250g",
      "ru": "Amira Milk Сузьма 250г",
      "kr": "Amira Milk 수즈마 250g",
      "en": "Amira Milk Suzma 250g"
    },
    "price": 1,
    "category": "Sut mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-52.jpg"
  },
  {
    "id": 505,
    "name": {
      "uz": "Amira Milk Suzma 350g",
      "ru": "Amira Milk Сузьма 350г",
      "kr": "Amira Milk 수즈마 350g",
      "en": "Amira Milk Suzma 350g"
    },
    "price": 1,
    "category": "Sut mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-53.jpg"
  },
  {
    "id": 506,
    "name": {
      "uz": "Kaanlar Shallal Cheese",
      "ru": "Kaanlar Сыр Shallal",
      "kr": "Kaanlar 샬랄 치즈",
      "en": "Kaanlar Shallal Cheese"
    },
    "price": 1,
    "category": "Sut mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-54.jpg"
  },
  {
    "id": 507,
    "name": {
      "uz": "Tvorojnaya Massa Vanil (Family Food) 200g",
      "ru": "Творожная масса Ваниль (Family Food) 200г",
      "kr": "트보로즈나야 마사 바닐라 (Family Food) 200g",
      "en": "Tvorojnaya Massa Vanilla (Family Food) 200g"
    },
    "price": 1,
    "category": "Sut mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-55.jpg"
  },
  {
    "id": 508,
    "name": {
      "uz": "Tvorojnaya Massa Izyum (Family Food) 200g",
      "ru": "Творожная масса Изюм (Family Food) 200г",
      "kr": "트보로즈나야 마사 건포도 (Family Food) 200g",
      "en": "Tvorojnaya Massa Raisin (Family Food) 200g"
    },
    "price": 1,
    "category": "Sut mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-57.jpg"
  },
  {
    "id": 509,
    "name": {
      "uz": "Family Food Qurt 90g",
      "ru": "Курт (Family Food) 90г",
      "kr": "쿠르트 (Family Food) 90g",
      "en": "Family Food Kurt 90g"
    },
    "price": 1,
    "category": "Sut mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-58.jpg"
  },
  {
    "id": 510,
    "name": {
      "uz": "Baltais Biezpiens Exporta 0.5% 250g",
      "ru": "Baltais Biezpiens Exporta Творог 0.5% 250г",
      "kr": "Baltais Biezpiens Exporta 코티지 치즈 0.5% 250g",
      "en": "Baltais Biezpiens Exporta Cottage Cheese 0.5% 250g"
    },
    "price": 1,
    "category": "Sut mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-12-59.jpg"
  },
  {
    "id": 511,
    "name": {
      "uz": "Kaanlar Turkish Labneh 180g",
      "ru": "Kaanlar Турецкий Лабне 180г",
      "kr": "Kaanlar 터키식 랍네 180g",
      "en": "Kaanlar Turkish Labneh 180g"
    },
    "price": 1,
    "category": "Sut mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-00.jpg"
  },
  {
    "id": 512,
    "name": {
      "uz": "Gorilla Energy Drink",
      "ru": "Энергетический напиток Gorilla",
      "kr": "고릴라 에너지 드링크",
      "en": "Gorilla Energy Drink"
    },
    "price": 1,
    "category": "Ichimliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-01.jpg"
  },
  {
    "id": 513,
    "name": {
      "uz": "Fire of Istanbul Gazoz",
      "ru": "Fire of Istanbul Gazoz",
      "kr": "파이어 오브 이스탄불 가조즈",
      "en": "Fire of Istanbul Gazoz"
    },
    "price": 1,
    "category": "Ichimliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-02.jpg"
  },
  {
    "id": 514,
    "name": {
      "uz": "Fire of Istanbul Gazoz Orange",
      "ru": "Fire of Istanbul Gazoz Orange",
      "kr": "파이어 오브 이스탄불 가조즈 오렌지",
      "en": "Fire of Istanbul Gazoz Orange"
    },
    "price": 1,
    "category": "Ichimliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-03.jpg"
  },
  {
    "id": 515,
    "name": {
      "uz": "T-A Foods Coconut Water with Pulp 325ml",
      "ru": "Кокосовая вода с мякотью 325мл",
      "kr": "코코넛 워터 (과육 포함) 325ml",
      "en": "T-A Foods Coconut Water with Pulp 325ml"
    },
    "price": 1,
    "category": "Ichimliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-04.jpg"
  },
  {
    "id": 516,
    "name": {
      "uz": "Ichimliklar Assorti",
      "ru": "Ассорти напитков",
      "kr": "음료 모음",
      "en": "Drinks Assortment"
    },
    "price": 1,
    "category": "Ichimliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-05.jpg"
  },
  {
    "id": 517,
    "name": {
      "uz": "Dena Sharbatlari Assorti",
      "ru": "Ассорти соков Dena",
      "kr": "Dena 주스 모음",
      "en": "Dena Juice Assortment"
    },
    "price": 1,
    "category": "Ichimliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-06.jpg"
  },
  {
    "id": 518,
    "name": {
      "uz": "Smoked Sprats in Oil 250g",
      "ru": "Шпроты в масле 250г",
      "kr": "훈제 스프랫 (기유) 250g",
      "en": "Smoked Sprats in Oil 250g"
    },
    "price": 1,
    "category": "Konservalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-07.jpg"
  },
  {
    "id": 519,
    "name": {
      "uz": "Amrita Shprotlari",
      "ru": "Шпроты Amrita",
      "kr": "Amrita 훈제 청어",
      "en": "Amrita Sprats in Oil"
    },
    "price": 1,
    "category": "Konservalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-08.jpg"
  },
  {
    "id": 520,
    "name": {
      "uz": "Amrita Konserva Assorti",
      "ru": "Ассорти консервов Amrita",
      "kr": "Amrita 통조림 모음",
      "en": "Amrita Canned Vegetables Assortment"
    },
    "price": 1,
    "category": "Konservalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-09 (2).jpg"
  },
  {
    "id": 521,
    "name": {
      "uz": "Atlantic Fish Cod Liver Pate 125g",
      "ru": "Паштет из печени трески Atlantic Fish 125г",
      "kr": "Atlantic Fish 대구 간 파테 125g",
      "en": "Atlantic Fish Cod Liver Pate 125g"
    },
    "price": 1,
    "category": "Konservalar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-09.jpg"
  },
  {
    "id": 522,
    "name": {
      "uz": "Omega Spices Qora Murch (Whole Black Pepper)",
      "ru": "Черный перец горошком Omega Spices",
      "kr": "Omega Spices 통후추",
      "en": "Omega Spices Whole Black Pepper"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-10.jpg"
  },
  {
    "id": 523,
    "name": {
      "uz": "Seara Muzlatilgan Tovuq (Griller) 1kg",
      "ru": "Замороженная курица Seara (Griller) 1кг",
      "kr": "Seara 냉동 닭 (그릴러) 1kg",
      "en": "Seara Freshly Frozen Griller 1kg"
    },
    "price": 1,
    "category": "Go'sht mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-11.jpg"
  },
  {
    "id": 524,
    "name": {
      "uz": "Mazedar Plain Paratha (20 dona)",
      "ru": "Mazedar Plain Paratha (20 шт)",
      "kr": "Mazedar 플레인 파라타 (20개입)",
      "en": "Mazedar Plain Paratha 20 pcs"
    },
    "price": 1,
    "category": "Muzlatilgan mahsulotlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-12.jpg"
  },
  {
    "id": 525,
    "name": {
      "uz": "Muzlatilgan Lqqa Baliq (Catfish) 1.5kg",
      "ru": "Замороженный сом (Catfish) 1.5кг",
      "kr": "냉동 메기 (Catfish) 1.5kg",
      "en": "Frozen Catfish (Pangash) 1.5kg"
    },
    "price": 1,
    "category": "Go'sht mahsulotlari",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-13.jpg"
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
    "id": 527,
    "name": {
      "uz": "Dream Aralash Ziravorlar (Mixed Spices) 100g",
      "ru": "Смесь специй Dream 100г",
      "kr": "Dream 혼합 향신료 100g",
      "en": "Dream Mixed Spices 100g"
    },
    "price": 1,
    "category": "Ziravorlar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-20.jpg"
  },
  {
    "id": 528,
    "name": {
      "uz": "Shirinliklar (Turli xil tortlar)",
      "ru": "Сладости (Разные торты)",
      "kr": "다양한 케이크",
      "en": "Assorted Cakes"
    },
    "price": 1,
    "category": "Shirinliklar",
    "image": "Mahsulotlar/photo_2026-03-04_06-13-22.jpg"
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
    "category": "Mevalar",
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
    "category": "Mevalar",
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
    "category": "Mevalar",
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
    "category": "Mevalar",
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
    "category": "Sabzavotlar",
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
    "category": "Sabzavotlar",
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
    "category": "Sabzavotlar",
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
    "category": "Mevalar",
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
    "category": "Sabzavotlar",
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
    "category": "Sabzavotlar",
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
    "category": "Sabzavotlar",
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
    "category": "Sabzavotlar",
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
    "category": "Sabzavotlar",
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