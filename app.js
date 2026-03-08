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
            "Non Mahsulotlari": "Non Mahsulotlari"
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
        labelLangSelect: "Tilni tanlang"
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
            "Non Mahsulotlari": "Хлеб"
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
        labelLangSelect: "Выберите язык"
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
            "Non Mahsulotlari": "빵"
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
        labelLangSelect: "언어 선택"
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
            "Non Mahsulotlari": "Bread"
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
        btnClose: "Close"
    }
};

const langFlags = { uz: '🇺🇿', ru: '🇷🇺', kr: '🇰🇷', en: '🇺🇸' };
let currentLang = localStorage.getItem('mezana_lang') || 'uz';

// 2. Global State & Elements
let cart = JSON.parse(localStorage.getItem('mezana_cart')) || [];
let activeCategory = 'Hammasi';
let products = [];
let categories = [];
let editingId = null;
let adminTimer;

// Pagination — show products in batches for performance
const PRODUCTS_PER_PAGE = 9999; // Show all products at once
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
}

// 5. Render Functions
function renderCategories() {
    if (!elements.categoriesGrid) return;

    // Icon mapping for professional look
    const icons = {
        'Hammasi': '📦',
        'Yangi': '🆕'
    };

    elements.categoriesGrid.innerHTML = categories.map(cat => {
        const catLabel = (i18n[currentLang].categories && i18n[currentLang].categories[cat]) ? i18n[currentLang].categories[cat] : cat;
        const icon = icons[cat] || '🏷️';
        return `
            <div class="category-card ${cat === activeCategory ? 'active' : ''}" onclick="filterProducts('${cat}')">
                <div class="category-icon">${icon}</div>
                <div class="category-name">${catLabel}</div>
            </div>
        `;
    }).join('');
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
        currentFiltered = filter === 'Hammasi' ? shuffleArray(products) : products.filter(p => p.category === filter);

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            currentFiltered = currentFiltered.filter(p =>
                (p.name[currentLang] || p.name['uz']).toLowerCase().includes(q) ||
                p.category.toLowerCase().includes(q)
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

        return `
            <div class="product-card" onclick="openProductDetail(${product.id})">
                ${product.oneDayDelivery ? `<div class="delivery-badge">⚡ ${i18n[currentLang].deliveryBadge}</div>` : ''}
                <div class="product-image">
                    <img src="${product.image || ''}" alt="${escapeHtml(name)}" loading="lazy" onload="this.classList.add('loaded')" onerror="this.src='https://via.placeholder.com/200?text=📦';this.classList.add('loaded')">
                </div>
                <div class="product-title">${name}</div>
                <div class="product-footer">
                    <div class="product-price">
                        ${product.oldPrice ? `
                            <div class="discount-badge-small">🔥 Aksiya</div>
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
        const code = prompt(currentLang === 'uz' ? "Admin kodini kiriting:" : "Enter admin code:");
        if (code === '7777') {
            elements.adminPanel.classList.add('open');
            document.body.classList.add('no-scroll');
            if (drawerOverlay) drawerOverlay.classList.add('active');
            renderAdminProducts();
        } else if (code !== null) {
            showToast(currentLang === 'uz' ? "Kod noto'g'ri!" : "Wrong code!");
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

window.showProductForm = (id = null) => {
    editingId = id;
    if (elements.productFormModal) elements.productFormModal.style.display = 'flex';
    document.body.classList.add('no-scroll');

    const preview = document.getElementById('admin-image-preview');
    const base64Input = document.getElementById('admin-image-base64');
    const fileInput = document.getElementById('admin-image-file');
    const removeBtn = document.getElementById('remove-image-btn');
    const catSelect = document.getElementById('admin-category');

    let optionsHtml = categories.filter(c => c !== 'Hammasi').map(c => `<option value="${c}">${c}</option>`).join('');
    if (catSelect) catSelect.innerHTML = optionsHtml;

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
        if (catSelect) catSelect.value = p.category;
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
    }
};

window.hideProductForm = () => {
    if (elements.productFormModal) elements.productFormModal.style.display = 'none';
    if (!elements.adminPanel.classList.contains('open')) document.body.classList.remove('no-scroll');
};

window.saveProduct = () => {
    const nameUz = document.getElementById('admin-name-uz').value;
    const price = document.getElementById('admin-price').value;
    let category = document.getElementById('admin-category').value;

    if (!category) {
        alert("Kategoriyani tanlang!");
        return;
    }

    const newProduct = {
        id: editingId || Date.now(),
        image: document.getElementById('admin-image-base64').value || '',
        name: {
            uz: nameUz,
            ru: document.getElementById('admin-name-ru').value || nameUz,
            kr: document.getElementById('admin-name-kr').value || nameUz,
            en: document.getElementById('admin-name-en').value || nameUz
        },
        price: parseInt(price),
        category: category
    };

    if (editingId) {
        const idx = products.findIndex(p => p.id === editingId);
        products[idx] = newProduct;
    } else {
        products.push(newProduct);
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

// Show category form dialog
window.showCategoryForm = () => {
    const categoryList = categories.filter(c => c !== 'Hammasi');
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
        background: rgba(0,0,0,0.5); display: flex; align-items: center; 
        justify-content: center; z-index: 3000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white; border-radius: 16px; padding: 20px; 
        max-width: 400px; width: 90%; max-height: 70vh; overflow-y: auto;
    `;
    
    let html = `
        <h3 style="margin: 0 0 20px 0;">Kategoriyalarni boshqarish</h3>
        <div style="display: flex; gap: 10px; margin-bottom: 20px;">
            <input type="text" id="new-cat-input" placeholder="Yangi kategoriya..." style="flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 8px;">
            <button onclick="window.addNewCategoryFromModal()" style="padding: 10px 16px; background: #2ecc71; color: white; border: none; border-radius: 8px; cursor: pointer;">Qo'sh</button>
        </div>
        <div style="margin-bottom: 20px;">
    `;
    
    categoryList.forEach(cat => {
        html += `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 10px; background: #f5f5f5; border-radius: 8px; margin-bottom: 8px;">
                <span>${cat}</span>
                <div style="display: flex; gap: 5px;">
                    <button onclick="window.editCategoryName('${cat}')" style="padding: 5px 10px; background: #3498db; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">✎</button>
                    <button onclick="window.deleteCategory('${cat}')" style="padding: 5px 10px; background: #e74c3c; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 0.8rem;">×</button>
                </div>
            </div>
        `;
    });
    
    html += `
        </div>
        <button onclick="document.querySelector('[data-close-cat]').click()" style="width: 100%; padding: 12px; background: #95a5a6; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 1rem;">Yopish</button>
    `;
    
    content.innerHTML = html;
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Store modal reference for closing
    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('data-close-cat', '');
    closeBtn.style.display = 'none';
    closeBtn.onclick = () => {
        modal.remove();
        modal.storage = null;
    };
    modal.appendChild(closeBtn);
    modal.storage = { modal };
};

window.addNewCategoryFromModal = () => {
    const input = document.getElementById('new-cat-input');
    if (!input) return;
    const newCategory = input.value.trim();
    if (!newCategory) {
        alert("Kategoriya nomini kiriting!");
        return;
    }
    if (categories.includes(newCategory)) {
        alert("Bu kategoriya allaqachon mavjud!");
        return;
    }
    categories.push(newCategory);
    categories.sort();
    localStorage.setItem('mezana_categories', JSON.stringify(categories));
    
    // Refresh UI
    const closeBtn = document.querySelector('[data-close-cat]');
    if (closeBtn) closeBtn.click();
    showCategoryForm();
    showToast("Kategoriya qo'shildi!");
};

window.editCategoryName = (oldName) => {
    const newName = prompt(`Yangi nomi kiriting:`, oldName);
    if (!newName || newName === oldName || newName.trim() === '') return;
    
    const newNameTrim = newName.trim();
    if (categories.includes(newNameTrim)) {
        alert("Bu nomi bilan kategoriya allaqachon mavjud!");
        return;
    }
    
    // Update category in array
    const idx = categories.indexOf(oldName);
    if (idx !== -1) categories[idx] = newNameTrim;
    
    // Update in products
    products.forEach(p => {
        if (p.category === oldName) p.category = newNameTrim;
    });
    
    categories.sort();
    localStorage.setItem('mezana_categories', JSON.stringify(categories));
    localStorage.setItem('mezana_products_local', JSON.stringify(products));
    
    const closeBtn = document.querySelector('[data-close-cat]');
    if (closeBtn) closeBtn.click();
    showCategoryForm();
    renderProducts(activeCategory);
    renderCategories();
    showToast("Kategoriya o'zgartirildi!");
};

window.deleteCategory = (catName) => {
    if (!confirm(`"${catName}" kategoriyasini o'chirmoqchimiz? Bu kategoriyalar mahsulotlar boshqa kategoriyaga ko'chirilmayadi!`)) return;
    
    // Remove category
    categories = categories.filter(c => c !== catName);
    localStorage.setItem('mezana_categories', JSON.stringify(categories));
    
    showToast("Kategoriya o'chirildi!");
    const closeBtn = document.querySelector('[data-close-cat]');
    if (closeBtn) closeBtn.click();
    showCategoryForm();
    renderCategories();
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

    elements.productDetailModal.style.display = 'flex';
    document.body.classList.add('no-scroll');
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

    // Use generated products from products.js as default
    const defaultProductsData = (typeof generatedProducts !== 'undefined') ? generatedProducts : [];

    // Always use default products data
    products = defaultProductsData;
    localStorage.setItem('mezana_products_local', JSON.stringify(products));

    // Auto-generate categories from product data and localStorage
    const uniqueCats = [...new Set(products.map(p => p.category).filter(Boolean))];
    const savedCategories = JSON.parse(localStorage.getItem('mezana_categories')) || [];
    const allCats = [...new Set([...uniqueCats, ...savedCategories])];
    categories = ['Hammasi', ...allCats.sort()];

    updateStaticTranslations();
    updateCartUI();
    setLanguage(currentLang);

    // Drawer open/close with overlay
    function openDrawer(drawer) {
        drawer.classList.add('open');
        document.body.classList.add('no-scroll');
        if (drawerOverlay) drawerOverlay.classList.add('active');
    }
    function closeDrawer(drawer) {
        drawer.classList.remove('open');
        document.body.classList.remove('no-scroll');
        if (drawerOverlay) drawerOverlay.classList.remove('active');
    }

    if (elements.cartToggle) elements.cartToggle.onclick = () => openDrawer(elements.cartDrawer);
    if (elements.closeCart) elements.closeCart.onclick = () => { closeDrawer(elements.cartDrawer); resetDrawer(); };
    if (elements.menuToggle) elements.menuToggle.onclick = () => openDrawer(elements.sidebarDrawer);
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
