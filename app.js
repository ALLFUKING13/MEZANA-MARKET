// Initialize Telegram WebApp safely
const tg = window.Telegram?.WebApp || {};
if (tg.expand) tg.expand();
if (tg.ready) tg.ready();

// 1. Translations Map
const i18n = {
    uz: {
        greeting: "Salom,",
        guest: "Mehmon",
        heroTitle: "Mezana Market <span class='highlight'>Toza & Sifatli</span>",
        heroDesc: "Eng arzon va sifatli mahsulotlar siz uchun.",
        cartTitle: "Savatchangiz",
        emptyCart: "Savatingiz bo'sh",
        checkoutTitle: "Yetkazib berish",
        labelName: "Ismingiz",
        labelPhone: "Telefon raqamingiz",
        labelAddress: "Manzil",
        placeholderName: "Ismingizni kiriting",
        placeholderPhone: "010-****-****",
        placeholderAddress: "Uy manzili va mo'ljal",
        btnCheckout: "Buyurtma berish",
        btnConfirm: "Tasdiqlash",
        btnBack: "Savatga qaytish",
        labelTotal: "Jami:",
        addedToast: "savatga qo'shildi",
        valError: "Iltimos, hamma maydonlarni to'ldiring",
        currency: "KRW",
        categories: {
            "Hammasi": "Hammasi",
            "Yangi": "Yangi",
            "Qahva": "Qahva",
            "Choy": "Choy",
            "Shirinliklar": "Shirinliklar",
            "Gazaklar": "Gazaklar",
            "Quritilgan Mevalar": "Quritilgan Mevalar",
            "Konserva": "Konserva",
            "Murabbo": "Murabbo",
            "Sut Mahsulotlari": "Sut Mahsulotlari",
            "Ichimliklar": "Ichimliklar",
            "Ziravorlar": "Ziravorlar",
            "Un Mahsulotlari": "Un Mahsulotlari",
            "Yog' Mahsulotlari": "Yog' Mahsulotlari",
            "Soslar": "Soslar",
            "Makaron": "Makaron",
            "Guruch": "Guruch",
            "Non Mahsulotlari": "Non Mahsulotlari",
            "Oziq-ovqat": "Oziq-ovqat",
            "Ichimliklar": "Ichimliklar",
            "Konserva va Tuzlamalar": "Konserva va Tuzlamalar",
            "Souslar va Ziravorlar": "Souslar va Ziravorlar",
            "Shirinlik va Gazaklar": "Shirinlik va Gazaklar",
            "Boshqalar": "Boshqalar"
        },
        locationsTitle: "Bizning do'konlar",
        btnHome: "Bosh menyu",
        sidebarTitle: "Menyu",
        labelAccount: "Profil",
        labelSettings: "Sozlamalar",
        quickOrder: "⚡ 1-Klik Buyurtma",
        addCart: "Savatga qo'shish",
        labelDarkMode: "Tungi rejim",
        searchPlaceholder: "Mahsulot qidirish...",
        deliveryBadge: "1 kunda yetkazib berish",
        profileTitle: "Mijoz Profili",
        btnClose: "Yopish",
        labelTheme: "Mavzu",
        labelLangSelect: "Tilni tanlang",
        navMenu: "Menyu",
        navHome: "Asosiy",
        navCart: "Savat",
        btnBackCat: "Orqaga",
        btnAllCat: "Barchasi",
        discountBadge: "🔥 Aksiya"
    },
    ru: {
        greeting: "Привет,",
        guest: "Гость",
        heroTitle: "Mezana Market <span class='highlight'>Свежее & Качественное</span>",
        heroDesc: "Самые дешевые и качественные товары для вас.",
        cartTitle: "Ваша корзина",
        emptyCart: "Корзина пуста",
        checkoutTitle: "Доставка",
        labelName: "Ваше имя",
        labelPhone: "Номер телефона",
        labelAddress: "Адрес",
        placeholderName: "Введите ваше имя",
        placeholderPhone: "010-****-****",
        placeholderAddress: "Домашний адрес и ориентир",
        btnCheckout: "Оформить заказ",
        btnConfirm: "Подтвердить",
        btnBack: "Назад в корзину",
        labelTotal: "Итого:",
        addedToast: "добавлено в корзину",
        valError: "Пожалуйста, заполните все поля",
        currency: "KRW",
        categories: {
            "Hammasi": "Все",
            "Yangi": "Новое",
            "Qahva": "Кофе",
            "Choy": "Чай",
            "Shirinliklar": "Сладости",
            "Gazaklar": "Снеки",
            "Quritilgan Mevalar": "Сухофрукты",
            "Konserva": "Консервы",
            "Murabbo": "Варенье",
            "Sut Mahsulotlari": "Молочные",
            "Ichimliklar": "Напитки",
            "Ziravorlar": "Специи",
            "Un Mahsulotlari": "Мучные",
            "Yog' Mahsulotlari": "Масло",
            "Soslar": "Соусы",
            "Makaron": "Макароны",
            "Guruch": "Рис",
            "Non Mahsulotlari": "Хлеб",
            "Oziq-ovqat": "Продукты",
            "Ichimliklar": "Напитки",
            "Konserva va Tuzlamalar": "Консервы и Соленья",
            "Souslar va Ziravorlar": "Соусы и Специи",
            "Shirinlik va Gazaklar": "Сладости и Снеки",
            "Boshqalar": "Другое"
        },
        locationsTitle: "Наши магазины",
        btnHome: "Главное меню",
        sidebarTitle: "Меню",
        labelAccount: "Профиль",
        labelSettings: "Настройки",
        quickOrder: "⚡ 1-Клик Заказ",
        addCart: "В корзину",
        labelDarkMode: "Тёмный режим",
        searchPlaceholder: "Поиск товаров...",
        deliveryBadge: "Доставка за 1 день",
        profileTitle: "Профиль клиента",
        btnClose: "Закрыть",
        labelTheme: "Тема",
        labelLangSelect: "Выберите язык",
        navMenu: "Меню",
        navHome: "Главная",
        navCart: "Корзина",
        btnBackCat: "Назад",
        btnAllCat: "Все",
        discountBadge: "🔥 Акция"
    },
    kr: {
        greeting: "안녕하세요,",
        guest: "손님",
        heroTitle: "Mezana Market <span class='highlight'>신선 & 최고</span>",
        heroDesc: "가장 저렴하고 품질 좋은 제품을 제공합니다.",
        cartTitle: "장바구니",
        emptyCart: "장바구니가 비어 있습니다",
        checkoutTitle: "배송 정보",
        labelName: "이름",
        labelPhone: "전화번호",
        labelAddress: "주소",
        placeholderName: "이름을 입력하세요",
        placeholderPhone: "010-****-****",
        placeholderAddress: "상세 주소 및 랜드마크",
        btnCheckout: "주문하기",
        btnConfirm: "확인",
        btnBack: "장바구니로 돌아가기",
        labelTotal: "합계:",
        addedToast: "장바구니에 추가됨",
        valError: "모든 필드를 채워주세요",
        currency: "원",
        categories: {
            "Hammasi": "전체",
            "Yangi": "신상품",
            "Qahva": "커피",
            "Choy": "차",
            "Shirinliklar": "과자",
            "Gazaklar": "스낵",
            "Quritilgan Mevalar": "건과일",
            "Konserva": "통조림",
            "Murabbo": "잼",
            "Sut Mahsulotlari": "유제품",
            "Ichimliklar": "음료",
            "Ziravorlar": "향신료",
            "Un Mahsulotlari": "밀가루",
            "Yog' Mahsulotlari": "식용유",
            "Soslar": "소스",
            "Makaron": "파스타",
            "Guruch": "쌀",
            "Non Mahsulotlari": "빵",
            "Oziq-ovqat": "식품류",
            "Ichimliklar": "음료",
            "Konserva va Tuzlamalar": "통조림 및 피클",
            "Souslar va Ziravorlar": "소스 및 향신료",
            "Shirinlik va Gazaklar": "스낵 및 과자",
            "Boshqalar": "기타"
        },
        locationsTitle: "우리 매장",
        btnHome: "홈 메뉴",
        sidebarTitle: "메뉴",
        labelAccount: "프로필",
        labelSettings: "설정",
        quickOrder: "⚡ 1-클릭 주문",
        addCart: "장바구니 담기",
        labelDarkMode: "다크 모드",
        searchPlaceholder: "제품 검색...",
        deliveryBadge: "1일 배송",
        profileTitle: "고객 프로필",
        btnClose: "닫기",
        labelTheme: "테마",
        labelLangSelect: "언어 선택",
        navMenu: "메뉴",
        navHome: "홈",
        navCart: "장바구니",
        btnBackCat: "뒤로",
        btnAllCat: "전부",
        discountBadge: "🔥 할인"
    },
    en: {
        greeting: "Hello,",
        guest: "Guest",
        heroTitle: "Mezana Market <span class='highlight'>Fresh & Quality</span>",
        heroDesc: "The cheapest and highest quality products for you.",
        cartTitle: "Your Cart",
        emptyCart: "Cart is empty",
        checkoutTitle: "Delivery Details",
        labelName: "Your Name",
        labelPhone: "Phone Number",
        labelAddress: "Address",
        placeholderName: "Enter your name",
        placeholderPhone: "010-****-****",
        placeholderAddress: "Home address and landmark",
        btnCheckout: "Place Order",
        btnConfirm: "Confirm",
        btnBack: "Back to Cart",
        labelTotal: "Total:",
        addedToast: "added to cart",
        valError: "Please fill in all fields",
        currency: "KRW",
        categories: {
            "Hammasi": "All",
            "Yangi": "New",
            "Qahva": "Coffee",
            "Choy": "Tea",
            "Shirinliklar": "Sweets",
            "Gazaklar": "Snacks",
            "Quritilgan Mevalar": "Dried Fruits",
            "Konserva": "Canned Food",
            "Murabbo": "Jam",
            "Sut Mahsulotlari": "Dairy",
            "Ichimliklar": "Drinks",
            "Ziravorlar": "Spices",
            "Un Mahsulotlari": "Flour Products",
            "Yog' Mahsulotlari": "Oil Products",
            "Soslar": "Sauces",
            "Makaron": "Pasta",
            "Guruch": "Rice",
            "Non Mahsulotlari": "Bread",
            "Oziq-ovqat": "Groceries",
            "Ichimliklar": "Beverages",
            "Konserva va Tuzlamalar": "Canned & Pickled",
            "Souslar va Ziravorlar": "Sauces & Spices",
            "Shirinlik va Gazaklar": "Sweets & Snacks",
            "Boshqalar": "Others"
        },
        locationsTitle: "Our Stores",
        btnHome: "Home",
        sidebarTitle: "Settings",
        labelAccount: "Account",
        labelSettings: "Settings",
        labelDarkMode: "Dark Mode",
        searchPlaceholder: "Search products...",
        deliveryBadge: "1-day delivery",
        quickOrder: "⚡ 1-Click Order",
        addCart: "Add to Cart",
        profileTitle: "Client Profile",
        btnClose: "Close",
        navMenu: "Menu",
        navHome: "Home",
        navCart: "Cart",
        btnBackCat: "Back",
        btnAllCat: "All",
        discountBadge: "🔥 Sale"
    }
};

const langFlags = { uz: '🇺🇿', ru: '🇷🇺', kr: '🇰🇷', en: '🇺🇸' };
let currentLang = localStorage.getItem('mezana_lang') || 'uz';

// 2. Global State & Elements
let cart = JSON.parse(localStorage.getItem('mezana_cart')) || [];
let activeCategory = 'Hammasi';
let activeParentCategory = null;
let products = [];
let categories = [];
let editingId = null;
let adminTimer;

// CRM Data
let crmOrders = JSON.parse(localStorage.getItem('mezana_crm_orders')) || [];
let crmCustomers = JSON.parse(localStorage.getItem('mezana_crm_customers')) || [];

// Initialize CRM data from server if available (mirroring product sync logic)
const serverOrders = (typeof generatedOrders !== 'undefined') ? generatedOrders : [];
const serverCustomers = (typeof generatedCustomers !== 'undefined') ? generatedCustomers : [];

// If server version has more data or local is empty, take from server to prevent loss
if (serverOrders.length > crmOrders.length) {
    crmOrders = serverOrders;
    localStorage.setItem('mezana_crm_orders', JSON.stringify(crmOrders));
}
if (serverCustomers.length > crmCustomers.length) {
    crmCustomers = serverCustomers;
    localStorage.setItem('mezana_crm_customers', JSON.stringify(crmCustomers));
}

function saveCRMData() {
    localStorage.setItem('mezana_crm_orders', JSON.stringify(crmOrders));
    localStorage.setItem('mezana_crm_customers', JSON.stringify(crmCustomers));
}

// Default category tree — loaded from localStorage if available
const defaultCategoryTree = {
    "Oziq-ovqat": ["Makaron", "Yog'", "Dukkaklilar", "Guruch", "Un Mahsulotlari", "Non Mahsulotlari"],
    "Ichimliklar": ["Qahva", "Choy", "Ichimliklar"],
    "Konserva va Tuzlamalar": ["Konserva", "Tuzlamalar", "Tomat", "Murabbo"],
    "Souslar va Ziravorlar": ["Soslar", "Ziravorlar", "Sous"],
    "Shirinlik va Gazaklar": ["Shirinliklar", "Gazaklar", "Quritilgan Mevalar", "Shirinlik", "Pechenye"]
};
let categoryTree = JSON.parse(localStorage.getItem('mezana_category_tree')) || defaultCategoryTree;

function saveCategoryTree() {
    localStorage.setItem('mezana_category_tree', JSON.stringify(categoryTree));
}

function getParentCategory(cat) {
    for (const [parent, children] of Object.entries(categoryTree)) {
        if (children.includes(cat)) return parent;
    }
    return "Boshqalar";
}

let reviews = JSON.parse(localStorage.getItem('mezana_reviews')) || {};
let ratings = JSON.parse(localStorage.getItem('mezana_ratings')) || {};

// Get average rating for a product
function getAvgRating(productId) {
    const prodRatings = ratings[productId];
    if (!prodRatings || prodRatings.length === 0) return { avg: 0, count: 0 };
    const sum = prodRatings.reduce((s, r) => s + r.stars, 0);
    return { avg: (sum / prodRatings.length).toFixed(1), count: prodRatings.length };
}

// Pagination — show products in batches for performance
const PRODUCTS_PER_PAGE = 20; // Enabled pagination
let currentPage = 1;
let currentFiltered = [];

const elements = {};
let drawerOverlay = null;

// XSS protection — sanitize user input before inserting into HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function initElements() {
    elements.productsGrid = document.getElementById('products-grid');
    elements.cartDrawer = document.getElementById('cart-drawer');
    elements.cartToggle = document.getElementById('cart-toggle');
    elements.closeCart = document.getElementById('close-cart');
    elements.cartItemsList = document.getElementById('cart-items-list');
    elements.cartTotalPrice = document.getElementById('cart-total-price');
    elements.cartCountBadge = document.getElementById('cart-count');
    elements.userNameEl = document.getElementById('user-name');
    elements.userAvatarEl = document.getElementById('user-avatar');
    elements.checkoutForm = document.getElementById('checkout-form');
    elements.confirmOrderBtn = document.getElementById('confirm-order-btn');
    elements.checkoutBtn = document.getElementById('checkout-btn');
    elements.backToCartBtn = document.getElementById('back-to-cart');
    elements.menuToggle = document.getElementById('menu-toggle');
    elements.sidebarDrawer = document.getElementById('sidebar-drawer');
    elements.closeSidebar = document.getElementById('close-sidebar');
    elements.toast = document.getElementById('toast');
    elements.adminPanel = document.getElementById('admin-panel');
    elements.productFormModal = document.getElementById('product-form-modal');
    elements.searchInput = document.getElementById('search-input');
    elements.categoriesGrid = document.getElementById('categories-grid');
    elements.bannerSlider = document.getElementById('banner-slider');
    elements.productDetailModal = document.getElementById('product-detail-modal');
    elements.profileModal = document.getElementById('profile-modal');
    elements.settingsModal = document.getElementById('settings-modal');
    elements.darkModeCheckbox = document.getElementById('dark-mode-toggle');
    elements.homeButton = document.getElementById('home-button');
    drawerOverlay = document.getElementById('drawer-overlay');
}

window.toggleAdmin = () => {
    if (elements.adminPanel) {
        const isOpen = elements.adminPanel.classList.toggle('open');
        if (isOpen) {
            document.body.classList.add('no-scroll');
            renderAdminProducts(); // Assuming this function exists and is relevant
            switchAdminTab('products'); // Default tab
        } else {
            // Only release scroll if no other modals are open
            if (!elements.productFormModal?.classList.contains('open') &&
                !elements.productDetailModal?.classList.contains('open') &&
                !elements.profileModal?.classList.contains('open') &&
                (!elements.settingsModal || elements.settingsModal.style.display === 'none')) {
                document.body.classList.remove('no-scroll');
            }
        }
    }
};

window.toggleSettingsModal = (show) => {
    if (!elements.settingsModal) return;
    elements.settingsModal.style.display = show ? 'flex' : 'none';
    if (show) {
        document.body.classList.add('no-scroll');
        if (elements.sidebarDrawer) elements.sidebarDrawer.classList.remove('open');
        // Sync checkbox with current theme
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (elements.darkModeCheckbox) elements.darkModeCheckbox.checked = isDark;
        // Highlight current lang
        document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
        const activeOpt = document.getElementById(`lang-${currentLang}`);
        if (activeOpt) activeOpt.classList.add('active');
    } else {
        if (!elements.adminPanel.classList.contains('open') &&
            !elements.productDetailModal.classList.contains('open') &&
            !elements.profileModal.classList.contains('open')) {
            document.body.classList.remove('no-scroll');
        }
    }
};

// 4. Translation Logic

window.setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('mezana_lang', lang);
    updateStaticTranslations();
    renderCategories();
    renderProducts(activeCategory);
    updateCartUI();

    // Highlight active lang in Settings Modal
    document.querySelectorAll('.lang-option').forEach(opt => opt.classList.remove('active'));
    const activeOpt = document.getElementById(`lang-${lang}`);
    if (activeOpt) activeOpt.classList.add('active');

    vibrate('light');
};

function updateStaticTranslations() {
    const t = i18n[currentLang];
    const safeSet = (id, val, isHtml = false) => {
        const el = document.getElementById(id);
        if (el) isHtml ? el.innerHTML = val : el.textContent = val;
    };

    const greetingEl = document.querySelector('.greeting');
    if (greetingEl) greetingEl.textContent = t.greeting;

    safeSet('hero-title', t.heroTitle, true);
    safeSet('hero-desc', t.heroDesc);
    safeSet('cart-title', t.cartTitle);
    safeSet('checkout-form-title', t.checkoutTitle);
    safeSet('label-name', t.labelName);
    safeSet('label-phone', t.labelPhone);
    safeSet('label-address', t.labelAddress);

    const inputName = document.getElementById('order-name');
    if (inputName) inputName.placeholder = t.placeholderName;
    const inputPhone = document.getElementById('order-phone');
    if (inputPhone) inputPhone.placeholder = t.placeholderPhone;
    const inputAddr = document.getElementById('order-address');
    if (inputAddr) inputAddr.placeholder = t.placeholderAddress;

    safeSet('back-to-cart', t.btnBack);
    safeSet('label-total', t.labelTotal);
    safeSet('checkout-btn', t.btnCheckout);
    safeSet('confirm-order-btn', t.btnConfirm);
    safeSet('locations-title', t.locationsTitle);
    safeSet('label-home', t.btnHome);
    safeSet('sidebar-title', t.sidebarTitle);
    safeSet('label-account', t.labelAccount);
    safeSet('label-settings', t.labelSettings);
    safeSet('profile-name-title', t.profileTitle);
    safeSet('btn-quick-buy', t.quickOrder);
    safeSet('btn-add-modal', t.addCart);
    if (elements.searchInput) elements.searchInput.placeholder = t.searchPlaceholder;

    // Settings Modal
    safeSet('settings-title', t.labelSettings);
    safeSet('label-theme', t.labelTheme);
    safeSet('label-dark-mode-set', t.labelDarkMode);
    safeSet('label-lang-select', t.labelLangSelect);
    safeSet('btn-settings-close', t.btnClose);
    safeSet('btn-profile-close', t.btnClose);

    // Bottom Navigation
    safeSet('label-nav-menu', t.navMenu);
    safeSet('label-nav-home', t.navHome);
    safeSet('label-nav-cart', t.navCart);
}

// 5. Render Functions
window.filterParentCategory = (parentCat) => {
    if (parentCat === 'Hammasi') {
        activeParentCategory = null;
        activeCategory = 'Hammasi';
        renderProducts('Hammasi');
    } else {
        activeParentCategory = parentCat;
        activeCategory = 'Hammasi'; // Show all in this parent
        renderProducts('Hammasi');
    }
    renderCategories();
};

window.filterSubCategory = (subCat) => {
    activeCategory = subCat;
    renderProducts(subCat);
    renderCategories();
};

window.backToParents = () => {
    activeParentCategory = null;
    activeCategory = 'Hammasi';
    renderProducts('Hammasi');
    renderCategories();
};

function renderCategories() {
    if (!elements.categoriesGrid) return;

    const parentIcons = {
        'Hammasi': '🌐',
        'Oziq-ovqat': '🍝',
        'Ichimliklar': '🥤',
        'Konserva va Tuzlamalar': '🥫',
        'Souslar va Ziravorlar': '🧂',
        'Shirinlik va Gazaklar': '🍫',
        'Boshqalar': '📦'
    };

    if (!activeParentCategory) {
        // Show Parent Categories
        const activeParents = [...new Set(categories.filter(c => c !== 'Hammasi').map(c => getParentCategory(c)))];
        const parentsToShow = ['Hammasi', ...activeParents];

        elements.categoriesGrid.innerHTML = parentsToShow.map(pCat => {
            const icon = parentIcons[pCat] || '🏷️';
            const catLabel = (i18n[currentLang].categories && i18n[currentLang].categories[pCat]) ? i18n[currentLang].categories[pCat] : pCat;
            return `
                <div class="category-card ${pCat === 'Hammasi' && activeCategory === 'Hammasi' ? 'active' : ''}" onclick="filterParentCategory('${pCat}')">
                    <div class="category-icon">${icon}</div>
                    <div class="category-name">${catLabel}</div>
                </div>
            `;
        }).join('');
    } else {
        // Show Subcategories
        const subCats = categories.filter(c => c !== 'Hammasi' && getParentCategory(c) === activeParentCategory);

        let html = `
            <div class="category-card" onclick="backToParents()">
                <div class="category-icon">🔙</div>
                <div class="category-name">${i18n[currentLang].btnBackCat}</div>
            </div>
            <div class="category-card ${activeCategory === 'Hammasi' ? 'active' : ''}" onclick="filterParentCategory('${activeParentCategory}')">
                <div class="category-icon">📁</div>
                <div class="category-name">${i18n[currentLang].btnAllCat}</div>
            </div>
        `;

        html += subCats.map(cat => {
            const catLabel = (i18n[currentLang].categories && i18n[currentLang].categories[cat]) ? i18n[currentLang].categories[cat] : cat;
            return `
                <div class="category-card ${cat === activeCategory ? 'active' : ''}" onclick="filterSubCategory('${cat}')">
                    <div class="category-icon">🏷️</div>
                    <div class="category-name">${catLabel}</div>
                </div>
            `;
        }).join('');

        elements.categoriesGrid.innerHTML = html;
    }
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function renderProducts(filter = 'Hammasi', searchQuery = '', append = false) {
    if (!elements.productsGrid) return;

    activeCategory = filter;

    // Only recalculate filtered list when not appending
    if (!append) {
        currentPage = 1;

        if (filter === 'Hammasi') {
            if (activeParentCategory) {
                currentFiltered = products.filter(p => getParentCategory(p.category) === activeParentCategory);
            } else {
                currentFiltered = products; // Removed shuffleArray to keep list stable
            }
        } else {
            currentFiltered = products.filter(p => p.category === filter);
        }

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            currentFiltered = currentFiltered.filter(p =>
                (p.name[currentLang] || p.name['uz']).toLowerCase().includes(q) ||
                (p.category || '').toLowerCase().includes(q)
            );
        }
    }

    if (currentFiltered.length === 0) {
        const notFoundMsg = {
            uz: 'Mahsulotlar topilmadi',
            ru: 'Товары не найдены',
            kr: '제품을 찾을 수 없습니다',
            en: 'No products found'
        };
        elements.productsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem; color: var(--text-muted);">${notFoundMsg[currentLang] || notFoundMsg.en}</div>`;
        return;
    }

    const endIndex = currentPage * PRODUCTS_PER_PAGE;
    const visibleProducts = currentFiltered.slice(0, endIndex);
    const hasMore = endIndex < currentFiltered.length;
    const remaining = currentFiltered.length - endIndex;

    const loadMoreLabel = {
        uz: `Yana ${Math.min(remaining, PRODUCTS_PER_PAGE)} ta ko'rsatish`,
        ru: `Показать ещё ${Math.min(remaining, PRODUCTS_PER_PAGE)}`,
        kr: `${Math.min(remaining, PRODUCTS_PER_PAGE)}개 더 보기`,
        en: `Show ${Math.min(remaining, PRODUCTS_PER_PAGE)} more`
    };

    const countLabel = {
        uz: `${visibleProducts.length} / ${currentFiltered.length} mahsulot`,
        ru: `${visibleProducts.length} / ${currentFiltered.length} товаров`,
        kr: `${visibleProducts.length} / ${currentFiltered.length} 제품`,
        en: `${visibleProducts.length} / ${currentFiltered.length} products`
    };

    const cardsHtml = visibleProducts.map(product => {
        const cartItem = cart.find(item => item.id === product.id);
        const qty = cartItem ? cartItem.quantity : 0;
        const name = product.name[currentLang] || product.name['uz'] || 'Product';
        const { avg, count } = getAvgRating(product.id);
        const ratingHtml = count > 0 ? `
            <div class="product-rating-badge">
                <span class="rating-star">★</span>
                <span>${avg}</span>
                <span class="rating-count">(${count})</span>
            </div>
        ` : '';

        return `
            <div class="product-card" onclick="openProductDetail(${product.id})">
                ${product.oneDayDelivery ? `<div class="delivery-badge">⚡ ${i18n[currentLang].deliveryBadge}</div>` : ''}
                <div class="product-image">
                    <img src="${product.image || ''}" alt="${escapeHtml(name)}" loading="lazy" onload="this.classList.add('loaded')" onerror="this.src='https://via.placeholder.com/200?text=📦';this.classList.add('loaded')">
                </div>
                <div class="product-title">${name}</div>
                ${ratingHtml}
                <div class="product-footer">
                    <div class="product-price">
                        ${product.oldPrice ? `
                            <div class="discount-badge-small">${i18n[currentLang].discountBadge}</div>
                            <div class="price-row">
                                <span class="old-price-small">${product.oldPrice.toLocaleString()}</span>
                                <span class="current-price-small">${product.price.toLocaleString()} ${i18n[currentLang].currency}</span>
                            </div>
                        ` : `
                            <div>${product.price.toLocaleString()} ${i18n[currentLang].currency}</div>
                        `}
                    </div>
                    <div class="qty-control ${qty > 0 ? 'active' : ''}" onclick="event.stopPropagation()">
                        ${qty === 0 ? `
                            <button class="add-btn-large" onclick="addToCart(${product.id})">+</button>
                        ` : `
                            <button class="qty-inner-btn" onclick="updateQty(${product.id}, -1)">-</button>
                            <span class="qty-num">${qty}</span>
                            <button class="qty-inner-btn" onclick="updateQty(${product.id}, 1)">+</button>
                        `}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const loadMoreHtml = hasMore
        ? `<button class="load-more-btn" onclick="loadMoreProducts()">${loadMoreLabel[currentLang] || loadMoreLabel.en}</button>`
        : '';
    const countHtml = `<div class="products-count">${countLabel[currentLang] || countLabel.en}</div>`;

    elements.productsGrid.innerHTML = cardsHtml + loadMoreHtml + countHtml;
}

// Load more products
window.loadMoreProducts = () => {
    currentPage++;
    renderProducts(activeCategory, '', true);
    // Scroll to the newly added products smoothly
};

window.filterProducts = (category) => {
    activeCategory = category;
    renderProducts(category);
    renderCategories();
};

window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const existing = cart.find(item => item.id === id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartUI();
    showToast(`${product.name[currentLang]} ${i18n[currentLang].addedToast}`);
    vibrate('light');
};

function updateCartUI() {
    renderProducts(activeCategory);
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (elements.cartCountBadge) {
        elements.cartCountBadge.textContent = totalCount;
        elements.cartCountBadge.style.display = totalCount > 0 ? 'block' : 'none';
    }

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (elements.cartTotalPrice) {
        elements.cartTotalPrice.textContent = `${totalPrice.toLocaleString()} ${i18n[currentLang].currency}`;
    }

    localStorage.setItem('mezana_cart', JSON.stringify(cart));
    renderCartItems();
}

function renderCartItems() {
    if (!elements.cartItemsList) return;
    if (cart.length === 0) {
        elements.cartItemsList.innerHTML = `<div style="text-align:center; padding: 2rem; color: #7f8c8d;">${i18n[currentLang].emptyCart}</div>`;
        return;
    }

    elements.cartItemsList.innerHTML = cart.map(item => {
        const itemName = escapeHtml(item.name[currentLang] || item.name['uz'] || 'Product');
        return `
        <div class="cart-item">
            <div class="cart-item-img">
                ${item.image ? `<img src="${item.image}" alt="${itemName}" style="width:100%;height:100%;object-fit:cover;border-radius:10px;" onerror="this.outerHTML='📦'">` : '📦'}
            </div>
            <div class="cart-item-info">
                <div class="cart-item-title">${itemName}</div>
                <div class="cart-item-price">${item.price.toLocaleString()} ${i18n[currentLang].currency}</div>
            </div>
            <div class="cart-item-actions">
                <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>
        </div>
    `;
    }).join('');
}

window.updateQty = (id, delta) => {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== id);
    }
    updateCartUI();
};

function showToast(msg) {
    if (!elements.toast) return;
    elements.toast.textContent = msg;
    elements.toast.classList.add('show');
    setTimeout(() => elements.toast.classList.remove('show'), 2000);
}

function vibrate(style) {
    if (tg.HapticFeedback) {
        if (style === 'error' || style === 'heavy') tg.HapticFeedback.notificationOccurred('error');
        else tg.HapticFeedback.impactOccurred('light');
    }
}

function resetDrawer() {
    if (elements.checkoutForm) elements.checkoutForm.style.display = 'none';
    if (elements.cartItemsList) elements.cartItemsList.style.display = 'block';
    if (elements.checkoutBtn) elements.checkoutBtn.style.display = 'block';
    if (elements.confirmOrderBtn) elements.confirmOrderBtn.style.display = 'none';
}

// 8. Admin Logic
window.handleAdminTriggerStart = () => {
    adminTimer = setTimeout(() => {
        toggleAdmin();
        vibrate('heavy');
    }, 3000);
};

window.handleAdminTriggerEnd = () => {
    clearTimeout(adminTimer);
};

window.toggleAdmin = () => {
    const isOpen = elements.adminPanel.classList.contains('open');
    if (isOpen) {
        elements.adminPanel.classList.remove('open');
        document.body.classList.remove('no-scroll');
        if (drawerOverlay) drawerOverlay.classList.remove('active');
    } else {
        let savedCode = localStorage.getItem('mezana_admin_code');
        const code = prompt(currentLang === 'uz' ? "Admin paroliningizni kiriting:" : "Enter admin password:", savedCode || "");
        
        if (code !== null) {
            // Show loading state or at least block UI
            const loadingToast = showToast(currentLang === 'uz' ? "Tekshirilmoqda..." : "Verifying...", 0);
            
            fetch('/api/verify-admin', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: code })
            })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    localStorage.setItem('mezana_admin_code', code);
                    elements.adminPanel.classList.add('open');
                    document.body.classList.add('no-scroll');
                    if (drawerOverlay) drawerOverlay.classList.add('active');
                    renderAdminProducts();
                } else {
                    showToast(currentLang === 'uz' ? "Parol noto'g'ri!" : "Wrong password!");
                }
            })
            .catch(err => {
                showToast("Xatolik: " + err.message);
            });
        }
    }
};

function renderAdminProducts() {
    const list = document.getElementById('product-list-admin');
    if (!list) return;
    list.innerHTML = products.map(p => `
        <div class="admin-product-item">
            <div style="display: flex; align-items: center; gap: 10px;">
                <div style="width: 50px; height: 50px; border-radius: 6px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; font-size: 24px; color: white; flex-shrink: 0; overflow: hidden;">
                    ${p.image ? `<img src="${p.image}" style="width: 100%; height: 100%; object-fit: cover;">` : '📦'}
                </div>
                <span>${p.name[currentLang]}</span>
            </div>
            <div class="admin-item-controls">
                <button class="edit-btn" onclick="editProduct(${p.id})">✎</button>
                <button class="discount-btn" onclick="setDiscount(${p.id})">%</button>
                <button class="delete-btn" onclick="deleteProduct(${p.id})">×</button>
            </div>
        </div>
    `).join('');
}

// Populate admin parent category and subcategory selects
function populateAdminCategorySelects(selectedCategory) {
    const parentSelect = document.getElementById('admin-parent-category');
    const subSelect = document.getElementById('admin-category');
    if (!parentSelect || !subSelect) return;

    const parentCats = Object.keys(categoryTree);
    parentSelect.innerHTML = parentCats.map(pc => `<option value="${pc}">${pc}</option>`).join('');

    // Find the parent of the selected category
    let selectedParent = parentCats[0];
    if (selectedCategory) {
        for (const [parent, children] of Object.entries(categoryTree)) {
            if (children.includes(selectedCategory)) {
                selectedParent = parent;
                break;
            }
        }
    }
    parentSelect.value = selectedParent;

    // Populate subcategories
    const subCats = categoryTree[selectedParent] || [];
    subSelect.innerHTML = subCats.map(sc => `<option value="${sc}">${sc}</option>`).join('');
    if (selectedCategory && subCats.includes(selectedCategory)) {
        subSelect.value = selectedCategory;
    }
}

window.onAdminParentCategoryChange = () => {
    const parentSelect = document.getElementById('admin-parent-category');
    const subSelect = document.getElementById('admin-category');
    if (!parentSelect || !subSelect) return;
    const subCats = categoryTree[parentSelect.value] || [];
    subSelect.innerHTML = subCats.map(sc => `<option value="${sc}">${sc}</option>`).join('');
};

window.showProductForm = (id = null) => {
    editingId = id;
    if (elements.productFormModal) elements.productFormModal.style.display = 'flex';
    document.body.classList.add('no-scroll');

    const preview = document.getElementById('admin-image-preview');
    const base64Input = document.getElementById('admin-image-base64');
    const fileInput = document.getElementById('admin-image-file');
    const removeBtn = document.getElementById('remove-image-btn');

    if (id) {
        // Editing existing product
        const p = products.find(prod => prod.id === id);
        if (base64Input) base64Input.value = p.image || '';
        if (preview) preview.innerHTML = p.image ? `<img src="${p.image}" style="width: 100%; height: 100%; object-fit: cover;">` : 'Rasm yo\'q';
        if (removeBtn) removeBtn.style.display = p.image ? 'block' : 'none';
        document.getElementById('admin-name-uz').value = p.name.uz;
        document.getElementById('admin-name-ru').value = p.name.ru;
        document.getElementById('admin-name-kr').value = p.name.kr;
        document.getElementById('admin-name-en').value = p.name.en;
        document.getElementById('admin-price').value = p.price;
        populateAdminCategorySelects(p.category);
        
        // Show and render reviews when editing
        const adminReviewsSection = document.getElementById('admin-reviews-section');
        const submitReviewBtn = document.getElementById('btn-submit-review-admin');
        if (adminReviewsSection) adminReviewsSection.style.display = 'flex';
        adminReviewsSection.style.flexDirection = 'column';
        if (submitReviewBtn) submitReviewBtn.onclick = () => submitAdminReview();
        renderAdminReviews(id);
    } else {
        // Reset form for new product
        if (base64Input) base64Input.value = '';
        if (preview) preview.innerHTML = '<span style="color: #888;">Rasm tanlanmagan</span>';
        if (removeBtn) removeBtn.style.display = 'none';
        if (fileInput) fileInput.value = '';
        document.getElementById('admin-name-uz').value = '';
        document.getElementById('admin-name-ru').value = '';
        document.getElementById('admin-name-kr').value = '';
        document.getElementById('admin-name-en').value = '';
        document.getElementById('admin-price').value = '';
        populateAdminCategorySelects(null);
        
        // Hide reviews section when adding new product
        const adminReviewsSection = document.getElementById('admin-reviews-section');
        if (adminReviewsSection) adminReviewsSection.style.display = 'none';
    }
};

function renderAdminReviews(id) {
    const list = document.getElementById('reviews-list-admin');
    if (!list) return;
    const prodReviews = reviews[id] || [];
    if (prodReviews.length === 0) {
        list.innerHTML = `<div style="text-align:center;color:var(--text-muted);font-size:0.85rem;padding: 10px 0;">Hozircha sharhlar yo'q.</div>`;
        return;
    }
    list.innerHTML = prodReviews.map(r => `
        <div style="background:var(--card-bg);padding:10px;border-radius:10px;border:1px solid var(--border-color);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <span style="font-weight:700;font-size:0.85rem;">${escapeHtml(r.user)}</span>
                <span style="font-size:0.7rem;color:var(--text-muted);">${r.date}</span>
            </div>
            <div style="font-size:0.9rem;line-height:1.4;">${escapeHtml(r.comment)}</div>
        </div>
    `).join('');
    list.scrollTop = list.scrollHeight;
}

window.submitAdminReview = () => {
    if (!editingId) return;
    
    const input = document.getElementById('admin-review-input');
    const comment = input.value.trim();
    if (!comment) return;
    
    if (!reviews[editingId]) reviews[editingId] = [];
    const date = new Date().toLocaleDateString('uz-UZ');
    
    reviews[editingId].push({ user: 'Admin', comment: comment, date: date, isAdmin: true });
    localStorage.setItem('mezana_reviews', JSON.stringify(reviews));
    
    input.value = '';
    renderAdminReviews(editingId);
    showToast("Sharh qo'shildi!");
};

window.hideProductForm = () => {
    if (elements.productFormModal) elements.productFormModal.style.display = 'none';
    if (!elements.adminPanel.classList.contains('open')) document.body.classList.remove('no-scroll');
};

window.saveProduct = () => {
    const nameUz = document.getElementById('admin-name-uz').value;
    const priceVal = document.getElementById('admin-price').value;
    let category = document.getElementById('admin-category').value;

    if (!category) {
        alert("Kategoriyani tanlang!");
        return;
    }

    const price = parseInt(priceVal);
    if (isNaN(price) || price <= 0) {
        alert("Narxni to'g'ri kiriting!");
        return;
    }

    // Preserve existing product data (like oldPrice, oneDayDelivery, etc.)
    let updatedProduct;
    if (editingId) {
        const existingProduct = products.find(p => p.id === editingId);
        updatedProduct = {
            ...existingProduct,
            image: document.getElementById('admin-image-base64').value || existingProduct.image || '',
            name: {
                uz: nameUz,
                ru: document.getElementById('admin-name-ru').value || nameUz,
                kr: document.getElementById('admin-name-kr').value || nameUz,
                en: document.getElementById('admin-name-en').value || nameUz
            },
            price: price,
            category: category
        };
        const idx = products.findIndex(p => p.id === editingId);
        products[idx] = updatedProduct;
    } else {
        updatedProduct = {
            id: Date.now(),
            image: document.getElementById('admin-image-base64').value || '',
            name: {
                uz: nameUz,
                ru: document.getElementById('admin-name-ru').value || nameUz,
                kr: document.getElementById('admin-name-kr').value || nameUz,
                en: document.getElementById('admin-name-en').value || nameUz
            },
            price: price,
            category: category
        };
        products.push(updatedProduct);
    }

    localStorage.setItem('mezana_products_local', JSON.stringify(products));
    renderProducts(activeCategory);
    renderAdminProducts();
    renderCategories();
    hideProductForm();
    showToast("Saqlandi!");
};

window.editProduct = (id) => showProductForm(id);
window.deleteProduct = (id) => {
    if (confirm("O'chirilsinmi?")) {
        products = products.filter(p => p.id !== id);
        localStorage.setItem('mezana_products_local', JSON.stringify(products));
        renderProducts(activeCategory);
        renderAdminProducts();
    }
};
window.setDiscount = (id) => {
    const product = products.find(p => p.id === id);
    if (!product) return;
    const discountPercent = prompt("Chegirma foizini kiriting (masalan: 10):", "0");
    if (discountPercent === null || discountPercent === "") return;
    const discount = parseFloat(discountPercent);
    if (isNaN(discount) || discount < 0 || discount > 100) {
        alert("Noto'g'ri foiz!");
        return;
    }
    if (discount === 0) {
        product.price = product.oldPrice || product.price;
        delete product.oldPrice;
    } else {
        product.oldPrice = product.oldPrice || product.price;
        product.price = Math.round(product.oldPrice * (1 - discount / 100));
    }
    localStorage.setItem('mezana_products_local', JSON.stringify(products));
    renderProducts(activeCategory);
    renderAdminProducts();
    showToast("Chegirma qo'ldi!");
};

// --- Missing Admin Functions ---

// Preview selected image in admin form
window.previewImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        const base64 = e.target.result;
        const preview = document.getElementById('admin-image-preview');
        const base64Input = document.getElementById('admin-image-base64');
        const removeBtn = document.getElementById('remove-image-btn');
        if (preview) preview.innerHTML = `<img src="${base64}" style="width: 100%; height: 100%; object-fit: cover;">`;
        if (base64Input) base64Input.value = base64;
        if (removeBtn) removeBtn.style.display = 'block';
    };
    reader.readAsDataURL(file);
};

// Clear selected image in admin form
window.clearImage = () => {
    const preview = document.getElementById('admin-image-preview');
    const base64Input = document.getElementById('admin-image-base64');
    const fileInput = document.getElementById('admin-image-file');
    const removeBtn = document.getElementById('remove-image-btn');
    if (preview) preview.innerHTML = '<span style="color: #888;">Rasm tanlanmagan</span>';
    if (base64Input) base64Input.value = '';
    if (fileInput) fileInput.value = '';
    if (removeBtn) removeBtn.style.display = 'none';
};

// Toggle new category input visibility
window.toggleNewCategoryInput = () => {
    const catSelect = document.getElementById('admin-category');
    const newCatInput = document.getElementById('admin-new-category');
    if (catSelect && newCatInput) {
        newCatInput.style.display = catSelect.value === 'NEW' ? 'block' : 'none';
    }
};

// Show category form dialog — with parent/sub hierarchy
window.showCategoryForm = () => {
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.5); display: flex; align-items: center; 
        justify-content: center; z-index: 3000;
    `;

    const content = document.createElement('div');
    content.style.cssText = `
        background: var(--card-bg, white); border-radius: 16px; padding: 20px; 
        max-width: 420px; width: 90%; max-height: 75vh; overflow-y: auto;
        color: var(--text-color, #333);
    `;

    const parentCats = Object.keys(categoryTree);

    let html = `
        <h3 style="margin: 0 0 16px 0;">Kategoriyalar boshqarish</h3>
        
        <!-- Add parent category -->
        <div style="margin-bottom: 16px; padding: 12px; background: var(--surface-color, #f5f5f5); border-radius: 12px;">
            <div style="font-weight: 700; font-size: 0.85rem; margin-bottom: 8px;">Bosh kategoriya qo'shish</div>
            <div style="display: flex; gap: 8px;">
                <input type="text" id="new-parent-cat-input" placeholder="Yangi bosh kategoriya..." style="flex: 1; padding: 10px; border: 1px solid var(--border-color, #ddd); border-radius: 8px; background: var(--input-bg, white); color: var(--text-color, #333);">
                <button onclick="window.addNewParentCategory()" style="padding: 10px 16px; background: #2ecc71; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">+</button>
            </div>
        </div>

        <!-- Add sub category -->
        <div style="margin-bottom: 16px; padding: 12px; background: var(--surface-color, #f5f5f5); border-radius: 12px;">
            <div style="font-weight: 700; font-size: 0.85rem; margin-bottom: 8px;">Ichki kategoriya qo'shish</div>
            <div style="display: flex; gap: 8px; margin-bottom: 8px;">
                <select id="sub-cat-parent-select" style="flex: 1; padding: 10px; border: 1px solid var(--border-color, #ddd); border-radius: 8px; background: var(--input-bg, white); color: var(--text-color, #333);">
                    ${parentCats.map(pc => `<option value="${pc}">${pc}</option>`).join('')}
                </select>
            </div>
            <div style="display: flex; gap: 8px;">
                <input type="text" id="new-sub-cat-input" placeholder="Yangi ichki kategoriya..." style="flex: 1; padding: 10px; border: 1px solid var(--border-color, #ddd); border-radius: 8px; background: var(--input-bg, white); color: var(--text-color, #333);">
                <button onclick="window.addNewSubCategory()" style="padding: 10px 16px; background: #3498db; color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600;">+</button>
            </div>
        </div>

        <!-- Category tree view -->
        <div style="margin-bottom: 16px;">
    `;

    parentCats.forEach(parent => {
        const subCats = categoryTree[parent] || [];
        const safeParent = parent.replace(/'/g, "\\'");
        html += `
            <div style="margin-bottom: 12px;">
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; background: linear-gradient(135deg, var(--primary, #2ecc71), var(--primary-dark, #27ae60)); color: white; border-radius: 10px 10px ${subCats.length ? '0 0' : '10px 10px'}; font-weight: 700; font-size: 0.9rem;">
                    <span>📁 ${parent}</span>
                    <div style="display: flex; gap: 5px;">
                        <button onclick="window.editParentCategoryName('${safeParent}')" style="padding: 4px 8px; background: rgba(255,255,255,0.3); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.75rem;">✎</button>
                        <button onclick="window.deleteParentCategory('${safeParent}')" style="padding: 4px 8px; background: rgba(255,255,255,0.3); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.75rem;">×</button>
                    </div>
                </div>
        `;
        subCats.forEach(sub => {
            const safeSub = sub.replace(/'/g, "\\'");
            html += `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px 8px 28px; background: var(--surface-color, #f5f5f5); border-bottom: 1px solid var(--border-color, #eee); font-size: 0.85rem;">
                    <span>└ ${sub}</span>
                    <div style="display: flex; gap: 5px;">
                        <button onclick="window.editSubCategoryName('${safeParent}', '${safeSub}')" style="padding: 3px 8px; background: #3498db; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.7rem;">✎</button>
                        <button onclick="window.deleteSubCategory('${safeParent}', '${safeSub}')" style="padding: 3px 8px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.7rem;">×</button>
                    </div>
                </div>
            `;
        });
        html += `</div>`;
    });

    html += `
        </div>
        <button onclick="document.querySelector('[data-close-cat]').click()" style="width: 100%; padding: 12px; background: #95a5a6; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">Yopish</button>
    `;

    content.innerHTML = html;
    modal.appendChild(content);
    document.body.appendChild(modal);

    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('data-close-cat', '');
    closeBtn.style.display = 'none';
    closeBtn.onclick = () => modal.remove();
    modal.appendChild(closeBtn);
};

// Rebuild flat categories from categoryTree
function rebuildCategoriesFromTree() {
    const allSubCats = Object.values(categoryTree).flat();
    categories = ['Hammasi', ...allSubCats.sort()];
    localStorage.setItem('mezana_categories', JSON.stringify(categories));
    saveCategoryTree();
}

window.addNewParentCategory = () => {
    const input = document.getElementById('new-parent-cat-input');
    if (!input) return;
    const name = input.value.trim();
    if (!name) { alert("Nomini kiriting!"); return; }
    if (categoryTree[name]) { alert("Bu bosh kategoriya mavjud!"); return; }
    categoryTree[name] = [];
    rebuildCategoriesFromTree();
    const closeBtn = document.querySelector('[data-close-cat]');
    if (closeBtn) closeBtn.click();
    showCategoryForm();
    renderCategories();
    showToast("Bosh kategoriya qo'shildi!");
};

window.addNewSubCategory = () => {
    const parentSelect = document.getElementById('sub-cat-parent-select');
    const input = document.getElementById('new-sub-cat-input');
    if (!parentSelect || !input) return;
    const parent = parentSelect.value;
    const name = input.value.trim();
    if (!name) { alert("Nomini kiriting!"); return; }
    if (!categoryTree[parent]) { alert("Bosh kategoriya topilmadi!"); return; }
    if (categoryTree[parent].includes(name)) { alert("Bu ichki kategoriya mavjud!"); return; }
    categoryTree[parent].push(name);
    rebuildCategoriesFromTree();
    const closeBtn = document.querySelector('[data-close-cat]');
    if (closeBtn) closeBtn.click();
    showCategoryForm();
    renderCategories();
    showToast("Ichki kategoriya qo'shildi!");
};

window.editParentCategoryName = (oldName) => {
    const newName = prompt("Yangi nomini kiriting:", oldName);
    if (!newName || newName.trim() === '' || newName.trim() === oldName) return;
    const trimmed = newName.trim();
    if (categoryTree[trimmed]) { alert("Bu nom band!"); return; }
    categoryTree[trimmed] = categoryTree[oldName];
    delete categoryTree[oldName];
    rebuildCategoriesFromTree();
    const closeBtn = document.querySelector('[data-close-cat]');
    if (closeBtn) closeBtn.click();
    showCategoryForm();
    renderCategories();
    showToast("O'zgartirildi!");
};

window.editSubCategoryName = (parent, oldName) => {
    const newName = prompt("Yangi nomini kiriting:", oldName);
    if (!newName || newName.trim() === '' || newName.trim() === oldName) return;
    const trimmed = newName.trim();
    const idx = categoryTree[parent].indexOf(oldName);
    if (idx !== -1) categoryTree[parent][idx] = trimmed;
    // Update products
    products.forEach(p => { if (p.category === oldName) p.category = trimmed; });
    localStorage.setItem('mezana_products_local', JSON.stringify(products));
    rebuildCategoriesFromTree();
    const closeBtn = document.querySelector('[data-close-cat]');
    if (closeBtn) closeBtn.click();
    showCategoryForm();
    renderProducts(activeCategory);
    renderCategories();
    showToast("Ichki kategoriya o'zgartirildi!");
};

window.deleteParentCategory = (name) => {
    if (!confirm(`"${name}" bosh kategoriyasini va barcha ichki kategoriyalarini o'chirmoqchimisiz?`)) return;
    delete categoryTree[name];
    rebuildCategoriesFromTree();
    const closeBtn = document.querySelector('[data-close-cat]');
    if (closeBtn) closeBtn.click();
    showCategoryForm();
    renderCategories();
    showToast("Bosh kategoriya o'chirildi!");
};

window.deleteSubCategory = (parent, name) => {
    if (!confirm(`"${name}" ichki kategoriyasini o'chirmoqchimisiz?`)) return;
    categoryTree[parent] = categoryTree[parent].filter(c => c !== name);
    rebuildCategoriesFromTree();
    const closeBtn = document.querySelector('[data-close-cat]');
    if (closeBtn) closeBtn.click();
    showCategoryForm();
    renderCategories();
    showToast("Ichki kategoriya o'chirildi!");
};

// Legacy wrapper for backward compatibility
window.addNewCategoryFromModal = window.addNewSubCategory;
window.editCategoryName = (oldName) => {
    const parent = getParentCategory(oldName);
    window.editSubCategoryName(parent, oldName);
};
window.deleteCategory = (catName) => {
    const parent = getParentCategory(catName);
    window.deleteSubCategory(parent, catName);
};

// Export products data as JSON
window.exportData = () => {
    const data = JSON.stringify(products, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mezana_products.json';
    a.click();
    URL.revokeObjectURL(url);
    showToast('Eksport qilindi!');
};

window.syncToServer = async () => {
    if (!confirm("O'zgarishlar asosiy saytga o'tqaziladi. Davom etamizmi?")) return;

    const btn = document.querySelector('button[onclick="syncToServer()"]');
    if (btn) {
        btn.disabled = true;
        btn.textContent = 'Saqlanmoqda...';
    }

    try {
        const categoriesData = categories.filter(c => c !== 'Hammasi');
        const fileContent = `const generatedProducts = ${JSON.stringify(products, null, 2)};\nconst generatedCategories = ${JSON.stringify(categoriesData, null, 2)};\nconst generatedOrders = ${JSON.stringify(crmOrders, null, 2)};\nconst generatedCustomers = ${JSON.stringify(crmCustomers, null, 2)};`;
        const adminCode = localStorage.getItem('mezana_admin_code');
        const response = await fetch('/api/update-products', {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${adminCode}`
            },
            body: JSON.stringify({ content: fileContent })
        });

        const result = await response.json();

        if (result.success) {
            showToast("Serverga Saqlandi! Sayt 15-30 soniyada yangilanadi.");
        } else {
            throw new Error(result.error || 'Server error');
        }
    } catch (e) {
        alert("Xatolik yuz berdi: " + e.message + ". GITHUB_TOKEN o'rnatilganligiga ishonch hosil qiling.");
    } finally {
        if (btn) {
            btn.disabled = false;
            btn.textContent = 'Serverga Saqlash';
        }
    }
};

window.showAccount = () => {
    if (elements.sidebarDrawer) elements.sidebarDrawer.classList.remove('open');
    toggleProfileModal(true);
};
window.showSettings = () => {
    toggleSettingsModal(true);
};

window.openProductDetail = (id) => {
    const p = products.find(prod => prod.id === id);
    if (!p || !elements.productDetailModal) return;

    const img = document.getElementById('detail-img');
    const title = document.getElementById('detail-title');
    const price = document.getElementById('detail-price');
    const oldPrice = document.getElementById('detail-old-price');
    const desc = document.getElementById('detail-desc');
    const badge = document.getElementById('detail-delivery-badge');
    const btnQuick = document.getElementById('btn-quick-buy');
    const btnAdd = document.getElementById('btn-add-modal');
    const btnSubmitReview = document.getElementById('btn-submit-review');

    if (img) img.src = p.image || '';
    if (title) title.textContent = p.name[currentLang] || p.name['uz'];
    if (price) price.textContent = `${p.price.toLocaleString()} ${i18n[currentLang].currency}`;
    if (oldPrice) {
        if (p.oldPrice) {
            oldPrice.textContent = `${p.oldPrice.toLocaleString()} ${i18n[currentLang].currency}`;
            oldPrice.style.display = 'block';
        } else {
            oldPrice.style.display = 'none';
        }
    }
    if (desc) desc.textContent = p.description?.[currentLang] || p.description?.['uz'] || "Batafsil ma'lumot tez orada qo'shiladi.";
    if (badge) badge.style.display = p.oneDayDelivery ? 'flex' : 'none';

    if (btnQuick) btnQuick.onclick = () => quickOrder(p.id);
    if (btnAdd) btnAdd.onclick = () => { addToCart(p.id); closeProductDetail(); };
    if (btnSubmitReview) btnSubmitReview.onclick = () => submitReview(p.id);

    // Render star rating
    renderStarRating(p.id);
    // Render reviews
    renderReviews(p.id);

    elements.productDetailModal.style.display = 'flex';
    document.body.classList.add('no-scroll');
};

// ===== Star Rating System =====
function renderStarRating(productId) {
    const container = document.getElementById('star-rating-container');
    const summary = document.getElementById('rating-summary');
    if (!container || !summary) return;

    const { avg, count } = getAvgRating(productId);
    const userRating = getUserRating(productId);

    // Update stars visual
    const stars = container.querySelectorAll('.star');
    stars.forEach(star => {
        const val = parseInt(star.dataset.star);
        star.classList.toggle('active', val <= (userRating || Math.round(avg)));
    });

    // Summary text
    if (count > 0) {
        const summaryLabels = {
            uz: `O'rtacha: ${avg} ★ (${count} ta baho)`,
            ru: `Среднее: ${avg} ★ (${count} оценок)`,
            kr: `평균: ${avg} ★ (${count}개 평가)`,
            en: `Average: ${avg} ★ (${count} ratings)`
        };
        summary.textContent = summaryLabels[currentLang] || summaryLabels.en;
    } else {
        const noRatingLabels = {
            uz: "Hali baholanmagan",
            ru: "Ещё не оценено",
            kr: "아직 평가 없음",
            en: "Not yet rated"
        };
        summary.textContent = noRatingLabels[currentLang] || noRatingLabels.en;
    }

    // Star click handlers
    stars.forEach(star => {
        star.onclick = (e) => {
            e.stopPropagation();
            const starVal = parseInt(star.dataset.star);
            submitRating(productId, starVal);
        };
        star.onmouseenter = () => {
            const hoverVal = parseInt(star.dataset.star);
            stars.forEach(s => {
                s.classList.toggle('hover', parseInt(s.dataset.star) <= hoverVal);
            });
        };
        star.onmouseleave = () => {
            stars.forEach(s => s.classList.remove('hover'));
        };
    });
}

function getUserRating(productId) {
    const prodRatings = ratings[productId] || [];
    const userId = getUserId();
    const existing = prodRatings.find(r => r.userId === userId);
    return existing ? existing.stars : 0;
}

function getUserId() {
    // Use Telegram user ID or generate anonymous ID
    if (tg.initDataUnsafe?.user?.id) return 'tg_' + tg.initDataUnsafe.user.id;
    let anonId = localStorage.getItem('mezana_anon_id');
    if (!anonId) {
        anonId = 'anon_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8);
        localStorage.setItem('mezana_anon_id', anonId);
    }
    return anonId;
}

function submitRating(productId, stars) {
    if (!ratings[productId]) ratings[productId] = [];
    const userId = getUserId();
    
    // Update existing or add new
    const existing = ratings[productId].find(r => r.userId === userId);
    if (existing) {
        existing.stars = stars;
    } else {
        ratings[productId].push({ userId, stars });
    }
    
    localStorage.setItem('mezana_ratings', JSON.stringify(ratings));
    renderStarRating(productId);
    
    const ratingLabels = {
        uz: `${stars} yulduz baho qo'yildi!`,
        ru: `Поставлена оценка ${stars} звёзд!`,
        kr: `${stars}점 평가 완료!`,
        en: `Rated ${stars} stars!`
    };
    showToast(ratingLabels[currentLang] || ratingLabels.en);
    vibrate('light');
}

// ===== Customer Reviews =====
function renderReviews(productId) {
    const list = document.getElementById('reviews-list');
    if (!list) return;
    const prodReviews = reviews[productId] || [];

    if (prodReviews.length === 0) {
        const emptyLabels = {
            uz: "Hozircha sharhlar yo'q. Birinchi bo'lib sharh qoldiring!",
            ru: "Отзывов пока нет. Оставьте первый отзыв!",
            kr: "아직 리뷰가 없습니다. 첫 리뷰를 작성하세요!",
            en: "No reviews yet. Be the first to review!"
        };
        list.innerHTML = `<div style="text-align:center;color:var(--text-muted);font-size:0.85rem;padding:10px 0;">${emptyLabels[currentLang] || emptyLabels.en}</div>`;
        return;
    }

    list.innerHTML = prodReviews.map(r => {
        const adminBadge = r.isAdmin ? '<span class="review-admin-badge">Admin</span>' : '';
        const starsHtml = r.stars ? `<div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>` : '';
        return `
            <div class="review-item">
                <div class="review-header">
                    <span class="review-user">${escapeHtml(r.user)}${adminBadge}</span>
                    <span class="review-date">${r.date}</span>
                </div>
                ${starsHtml}
                <div class="review-comment">${escapeHtml(r.comment)}</div>
            </div>
        `;
    }).join('');
    list.scrollTop = list.scrollHeight;
}

window.submitReview = (id) => {
    const input = document.getElementById('review-input');
    const comment = input.value.trim();
    if (!comment) return;

    if (!reviews[id]) reviews[id] = [];
    const userName = (typeof tg !== 'undefined' && tg.initDataUnsafe?.user?.first_name) || i18n[currentLang].guest || 'Mijoz';
    const date = new Date().toLocaleDateString(currentLang === 'uz' ? 'uz-UZ' : 'en-US');
    const userRating = getUserRating(id);

    reviews[id].push({ user: userName, comment, date, stars: userRating || 0, isAdmin: false });
    localStorage.setItem('mezana_reviews', JSON.stringify(reviews));

    input.value = '';
    renderReviews(id);
    showToast("Sharhingiz qo'shildi!");
};

window.closeProductDetail = () => {
    if (elements.productDetailModal) elements.productDetailModal.style.display = 'none';
    document.body.classList.remove('no-scroll');
};

window.quickOrder = (id) => {
    const p = products.find(prod => prod.id === id);
    if (!p) return;

    // Add to cart if not already there, or increase qty
    const existing = cart.find(item => item.id === id);
    if (!existing) {
        cart.push({ ...p, quantity: 1 });
    }
    updateCartUI();
    closeProductDetail();

    // Open cart and go to checkout
    if (elements.cartToggle) elements.cartToggle.click();
    if (elements.checkoutBtn) elements.checkoutBtn.click();
    vibrate('heavy');
};

window.toggleDarkMode = () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('mezana_dark_mode', 'false');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('mezana_dark_mode', 'true');
    }
    vibrate('light');
};

window.toggleProfileModal = (show) => {
    if (!elements.profileModal) return;
    elements.profileModal.style.display = show ? 'flex' : 'none';
    if (show) {
        document.body.classList.add('no-scroll');
        populateProfileData();
    } else {
        document.body.classList.remove('no-scroll');
    }
};

function populateProfileData() {
    const user = tg.initDataUnsafe?.user;
    if (!user) return;

    const safeSetVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val || '-';
    };

    safeSetVal('user-id-val', user.id);
    safeSetVal('user-firstname-val', user.first_name + (user.last_name ? ' ' + user.last_name : ''));
    safeSetVal('user-username-val', user.username ? '@' + user.username : '-');
    safeSetVal('user-lang-val', user.language_code ? user.language_code.toUpperCase() : '-');

    const profImg = document.getElementById('profile-img');
    if (profImg) {
        if (user.photo_url) {
            profImg.innerHTML = `<img src="${user.photo_url}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
            profImg.style.background = 'transparent';
        } else {
            profImg.textContent = user.first_name.charAt(0);
            profImg.style.background = 'var(--primary)';
        }
    }
}

// 9. Initial Load
window.addEventListener('DOMContentLoaded', () => {
    initElements();

    // Dark Mode persistence
    if (localStorage.getItem('mezana_dark_mode') === 'true') {
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    // Search event
    if (elements.searchInput) {
        elements.searchInput.addEventListener('input', (e) => {
            renderProducts(activeCategory, e.target.value);
        });
    }

    // Auto-slide banners
    let slideIdx = 0;
    setInterval(() => {
        if (!elements.bannerSlider) return;
        const items = elements.bannerSlider.querySelectorAll('.banner-item');
        slideIdx = (slideIdx + 1) % items.length;
        elements.bannerSlider.scrollTo({
            left: items[slideIdx].offsetLeft - 20,
            behavior: 'smooth'
        });
    }, 4000);

    // Use generated products from products.js (file) as default
    const serverProducts = (typeof generatedProducts !== 'undefined') ? generatedProducts : [];
    const localProductsRaw = localStorage.getItem('mezana_products_local');
    
    if (localProductsRaw) {
        const localProducts = JSON.parse(localProductsRaw);
        // If local has data, use it. Otherwise use server.
        if (localProducts.length > 0) {
            products = localProducts;
        } else {
            products = serverProducts;
        }
    } else {
        products = serverProducts;
    }
    
    // Save state
    localStorage.setItem('mezana_products_local', JSON.stringify(products));

    // Auto-generate categories from product data and localStorage
    const serverCategories = (typeof generatedCategories !== 'undefined') ? generatedCategories : null;
    let baseCats = [];
    if (serverCategories) {
        baseCats = serverCategories;
    } else {
        baseCats = [...new Set(products.map(p => p.category).filter(Boolean))];
    }
    categories = ['Hammasi', ...baseCats.sort()];
    localStorage.setItem('mezana_categories', JSON.stringify(categories));

    updateStaticTranslations();
    updateCartUI();
    setLanguage(currentLang);

    // Hide loader after a short delay for smooth transition
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);

    // Drawer open/close with overlay
    // Drawer open/close with overlay
    window.openDrawer = (drawer) => {
        if (!drawer) return;
        drawer.classList.add('open');
        document.body.classList.add('no-scroll');
        const overlay = document.getElementById('drawer-overlay');
        if (overlay) overlay.classList.add('active');
    };
    
    window.closeDrawer = (drawer) => {
        if (!drawer) return;
        drawer.classList.remove('open');
        document.body.classList.remove('no-scroll');
        const overlay = document.getElementById('drawer-overlay');
        if (overlay) overlay.classList.remove('active');
    };

    if (elements.closeCart) elements.closeCart.onclick = () => { closeDrawer(elements.cartDrawer); resetDrawer(); };
    if (elements.closeSidebar) elements.closeSidebar.onclick = () => closeDrawer(elements.sidebarDrawer);
    if (elements.homeButton) elements.homeButton.onclick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        closeDrawer(elements.cartDrawer);
        closeDrawer(elements.sidebarDrawer);
        renderProducts('Hammasi');
    };

    // Close drawers when clicking overlay
    if (drawerOverlay) {
        drawerOverlay.onclick = () => {
            closeDrawer(elements.cartDrawer);
            closeDrawer(elements.sidebarDrawer);
            if (elements.adminPanel.classList.contains('open')) {
                elements.adminPanel.classList.remove('open');
            }
            resetDrawer();
        };
    }
    if (elements.checkoutBtn) elements.checkoutBtn.onclick = () => {
        if (cart.length === 0) { showToast(i18n[currentLang].emptyCart); return; }
        elements.cartItemsList.style.display = 'none';
        elements.checkoutForm.style.display = 'flex';
        elements.checkoutBtn.style.display = 'none';
        elements.confirmOrderBtn.style.display = 'block';
    };
    if (elements.backToCartBtn) elements.backToCartBtn.onclick = () => resetDrawer();
    if (elements.confirmOrderBtn) elements.confirmOrderBtn.onclick = handleConfirmOrder;

    // User Profile in header
    if (tg.initDataUnsafe?.user) {
        const user = tg.initDataUnsafe.user;
        if (elements.userNameEl) elements.userNameEl.textContent = user.first_name;
        if (elements.userAvatarEl) {
            if (user.photo_url) {
                elements.userAvatarEl.innerHTML = `<img src="${user.photo_url}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
                elements.userAvatarEl.style.background = 'transparent';
            } else {
                elements.userAvatarEl.textContent = user.first_name.charAt(0);
            }
        }
    } else {
        if (elements.userNameEl) elements.userNameEl.textContent = i18n[currentLang].guest;
    }
});

async function handleConfirmOrder() {
    const name = document.getElementById('order-name').value.trim();
    const phone = document.getElementById('order-phone').value.trim();
    const address = document.getElementById('order-address').value.trim();

    if (!name || !phone || !address) { showToast(i18n[currentLang].valError); vibrate('error'); return; }

    // Phone validation — accepts Korean formats (010-1234-5678) and international (+82...)
    const phoneClean = phone.replace(/[\s\-()]/g, '');
    if (!/^(\+?\d{10,15}|01[016789]\d{7,8})$/.test(phoneClean)) {
        const phoneError = {
            uz: "Telefon raqam noto'g'ri formatda",
            ru: "Неверный формат номера телефона",
            kr: "잘못된 전화번호 형식입니다",
            en: "Invalid phone number format"
        };
        showToast(phoneError[currentLang] || phoneError.en);
        vibrate('error');
        return;
    }

    const orderData = {
        user: { name, phone, address },
        items: cart.map(i => ({ name: i.name[currentLang], price: i.price, qty: i.quantity, image: i.image })),
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        currency: i18n[currentLang].currency,
        lang: currentLang
    };

    elements.confirmOrderBtn.disabled = true;
    elements.confirmOrderBtn.textContent = '...';

    try {
        const response = await fetch('/api/send-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderData })
        });
        const result = await response.json();
        if (result.success) {
            // Save to Local CRM
            const newOrder = {
                id: 'ORD-' + Date.now(),
                date: new Date().toLocaleString('uz-UZ'),
                customerName: name,
                customerPhone: phone,
                address: address,
                total: orderData.total,
                status: 'Yangi',
                items: orderData.items
            };
            crmOrders.push(newOrder);
            
            // Update Customers List
            const existingCustomer = crmCustomers.find(c => c.phone === phone);
            if (existingCustomer) {
                existingCustomer.ltv += orderData.total;
                existingCustomer.lastOrder = newOrder.date;
                existingCustomer.ordersCount = (existingCustomer.ordersCount || 1) + 1;
            } else {
                crmCustomers.push({
                    name: name,
                    phone: phone,
                    ltv: orderData.total,
                    lastOrder: newOrder.date,
                    ordersCount: 1
                });
            }
            saveCRMData();

            const successMsg = { uz: 'Buyurtma qabul qilindi!', ru: 'Заказ принят!', kr: '주문이 접수되었습니다!', en: 'Order accepted!' };
            showToast(successMsg[currentLang] || successMsg.en);
            cart = [];
            localStorage.removeItem('mezana_cart');
            updateCartUI();
            setTimeout(() => {
                if (tg.close) tg.close();
            }, 1500);
        } else { throw new Error(result.error); }
    } catch (error) {
        showToast(`Xato: ${error.message}`);
        elements.confirmOrderBtn.disabled = false;
        elements.confirmOrderBtn.textContent = i18n[currentLang].btnConfirm;
    }
}

// 9. Clock and Weather Widget
function initClock() {
    const clockEl = document.getElementById('real-time-clock');
    if (!clockEl) return;

    // Initial call to avoid 1s delay
    const updateTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        clockEl.textContent = `${hours}:${minutes}`;
    };
    updateTime();
    setInterval(updateTime, 1000);
}

async function fetchWeather(lat, lon) {
    const weatherIconEl = document.getElementById('weather-icon');
    const weatherTempEl = document.getElementById('weather-temp');
    if (!weatherIconEl || !weatherTempEl) return;

    try {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const data = await res.json();

        if (data && data.current_weather) {
            const temp = Math.round(data.current_weather.temperature);
            const weathercode = data.current_weather.weathercode;

            // Map WMO weather codes to emojis
            let icon = '☀️'; // default clear
            if ([1, 2, 3].includes(weathercode)) icon = '⛅'; // partly cloudy
            if ([45, 48].includes(weathercode)) icon = '🌫️'; // fog
            if ([51, 53, 55, 56, 57].includes(weathercode)) icon = '🌧️'; // drizzle
            if ([61, 63, 65, 66, 67].includes(weathercode)) icon = '🌧️'; // rain
            if ([71, 73, 75, 77].includes(weathercode)) icon = '❄️'; // snow
            if ([80, 81, 82].includes(weathercode)) icon = '🌦️'; // rain showers
            if ([85, 86].includes(weathercode)) icon = '🌨️'; // snow showers
            if ([95, 96, 99].includes(weathercode)) icon = '⛈️'; // thunderstorm

            weatherIconEl.textContent = icon;
            weatherTempEl.textContent = `${temp}°C`;
        }
    } catch (e) {
        console.error("Failed to fetch weather", e);
    }
}

function initWeather() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchWeather(latitude, longitude);
            },
            (error) => {
                console.warn("Geolocation denied or failed:", error);
                // Fallback to Seoul
                fetchWeather(37.5665, 126.9780);
            }
        );
    } else {
        fetchWeather(37.5665, 126.9780);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initWeather();
    setInterval(initWeather, 30 * 60 * 1000); // 30 mins
});

// 10. Bottom Navigation Logic
window.handleBottomNav = (element, target) => {
    const navItems = document.querySelectorAll('.bottom-nav .nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');

    if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderProducts('Hammasi');
    } else if (target === 'categories') {
        window.scrollTo({ top: document.getElementById('categories-grid').offsetTop - 120, behavior: 'smooth' });
    } else if (target === 'cart') {
        openDrawer(elements.cartDrawer);
    } else if (target === 'profile') {
        openDrawer(elements.sidebarDrawer);
    }
};

// 11. Admin CRM Logic
window.switchAdminTab = (tabMap) => {
    // Hide all tabs
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active', 'text-primary'));
    document.getElementById('admin-view-products').style.display = 'none';
    document.getElementById('admin-view-orders').style.display = 'none';
    document.getElementById('admin-view-customers').style.display = 'none';

    // Activate selected
    const activeTabObj = document.getElementById(`tab-${tabMap}`);
    if (activeTabObj) {
        activeTabObj.classList.add('active');
        activeTabObj.style.color = 'var(--primary)';
    }

    const viewTarget = document.getElementById(`admin-view-${tabMap}`);
    if (viewTarget) viewTarget.style.display = 'block';

    if (tabMap === 'orders') renderAdminOrders();
    if (tabMap === 'customers') renderAdminCustomers();
};

function renderAdminOrders() {
    const list = document.getElementById('orders-list-admin');
    if (!list) return;

    if (crmOrders.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted);">Hozircha buyurtmalar yo'q</div>`;
        return;
    }

    let html = '';
    // Show newest orders first
    [...crmOrders].reverse().forEach(order => {
        let statusColor = '#f39c12'; // Yangi - Orange
        if (order.status === 'Qabul qilingan') statusColor = '#3498db'; // Blue
        if (order.status === 'Yetkazilmoqda') statusColor = '#9b59b6'; // Purple
        if (order.status === 'Bajarildi') statusColor = '#2ecc71'; // Green
        if (order.status === 'Bekor qilingan') statusColor = '#e74c3c'; // Red

        html += `
            <div class="admin-order-card" style="background:var(--card-bg); border-radius:12px; padding:15px; border:1px solid var(--border-color); display:flex; flex-direction:column; gap:8px;">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span style="font-weight:bold; color:var(--text-color);">${order.id}</span>
                    <span style="font-size:0.75rem; color:white; background:${statusColor}; padding:3px 8px; border-radius:8px; font-weight:bold;">${order.status}</span>
                </div>
                <div style="font-size:0.85rem; color:var(--text-muted);">${order.date}</div>
                <div style="font-size:0.9rem; font-weight:bold;">👤 ${escapeHtml(order.customerName)} | 📞 ${escapeHtml(order.customerPhone)}</div>
                <div style="font-size:0.85rem; color:var(--text-color);">📍 ${escapeHtml(order.address)}</div>
                <div style="font-weight:bold; color:var(--primary); margin-top:5px;">💵 ${order.total.toLocaleString()} Won (${order.items.length} ta mahsulot)</div>
                
                <div class="admin-order-actions" style="margin-top:10px; display:flex; gap:8px; flex-wrap:wrap;">
                    <button onclick="updateOrderStatus('${order.id}', 'Qabul qilingan')" style="padding:6px 10px; border-radius:6px; background:#3498db; color:white; border:none; font-size:0.75rem; cursor:pointer;">Qabul qilish</button>
                    <button onclick="updateOrderStatus('${order.id}', 'Yetkazilmoqda')" style="padding:6px 10px; border-radius:6px; background:#9b59b6; color:white; border:none; font-size:0.75rem; cursor:pointer;">Yetkazish</button>
                    <button onclick="updateOrderStatus('${order.id}', 'Bajarildi')" style="padding:6px 10px; border-radius:6px; background:#2ecc71; color:white; border:none; font-size:0.75rem; cursor:pointer;">Bajarildi</button>
                    <button onclick="updateOrderStatus('${order.id}', 'Bekor qilingan')" style="padding:6px 10px; border-radius:6px; background:#e74c3c; color:white; border:none; font-size:0.75rem; cursor:pointer;">Bekor qilish</button>
                </div>
            </div>
        `;
    });
    list.innerHTML = html;
}

window.updateOrderStatus = (orderId, newStatus) => {
    const order = crmOrders.find(o => o.id === orderId);
    if (!order) return;
    order.status = newStatus;
    saveCRMData();
    renderAdminOrders();
    showToast(`Buyurtma holati "${newStatus}" ga o'zgardi!`);
};

function renderAdminCustomers() {
    const list = document.getElementById('customers-list-admin');
    if (!list) return;

    if (crmCustomers.length === 0) {
        list.innerHTML = `<div style="text-align:center; padding:2rem; color:var(--text-muted);">Hozircha mijozlar bazasi bo'sh</div>`;
        return;
    }

    let html = '';
    // Sort by Total Lifetime Value (Highest purchaser first)
    const sortedCustomers = [...crmCustomers].sort((a,b) => b.ltv - a.ltv);
    
    sortedCustomers.forEach(cust => {
        html += `
            <div class="admin-customer-card" style="background:var(--card-bg); border-radius:12px; padding:15px; border:1px solid var(--border-color); display:flex; flex-direction:column; gap:5px;">
                <div style="font-weight:bold; font-size:1.1rem; color:var(--text-color);">👤 ${escapeHtml(cust.name)}</div>
                <div style="font-size:0.9rem; color:var(--text-muted);">📞 ${escapeHtml(cust.phone)}</div>
                <div style="display:flex; justify-content:space-between; margin-top:8px; align-items:center;">
                    <div style="font-size:0.8rem; background:var(--surface-color); padding:4px 8px; border-radius:6px;">
                        🛒 ${cust.ordersCount} ta buyurtma
                    </div>
                    <div style="font-weight:bold; color:var(--primary);">
                        💵 LTV: ${cust.ltv.toLocaleString()} Won
                    </div>
                </div>
                <div style="font-size:0.75rem; color:var(--text-muted); margin-top:4px;">Oxirgi faollik: ${cust.lastOrder}</div>
            </div>
        `;
    });
    list.innerHTML = html;
}
