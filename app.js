// Initialize Telegram WebApp
const tg = window.Telegram.WebApp;
tg.expand();
tg.ready();

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
        placeholderPhone: "010-1234-5678",
        placeholderAddress: "Uy manzili va mo'ljal",
        btnCheckout: "Buyurtma berish",
        btnConfirm: "Tasdiqlash",
        btnBack: "Savatga qaytish",
        labelTotal: "Jami:",
        addedToast: "savatga qo'shildi",
        valError: "Iltimos, hamma maydonlarni to'ldiring",
        currency: "won",
        categories: {
            "Hammasi": "Hammasi",
            "Mevalar": "Mevalar",
            "Sabzavotlar": "Sabzavotlar",
            "Sutli": "Sutli",
            "Ichimliklar": "Ichimliklar",
            "Shirinliklar": "Shirinliklar"
        },
        locationsTitle: "Bizning do'konlar",
        btnHome: "Bosh menyu",
        sidebarTitle: "Menyu",
        labelAccount: "Profil",
        labelSettings: "Sozlamalar"
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
        placeholderPhone: "010-1234-5678",
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
            "Mevalar": "Фрукты",
            "Sabzavotlar": "Овощи",
            "Sutli": "Молочные",
            "Ichimliklar": "Напитки",
            "Shirinliklar": "Сладости"
        },
        locationsTitle: "Наши магазины",
        btnHome: "Главное меню",
        sidebarTitle: "Меню",
        labelAccount: "Профиль",
        labelSettings: "Настройки"
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
        placeholderPhone: "010-1234-5678",
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
            "Mevalar": "과일",
            "Sabzavotlar": "야채",
            "Sutli": "유제품",
            "Ichimliklar": "음료",
            "Shirinliklar": "디저트"
        },
        locationsTitle: "우리 매장",
        btnHome: "홈 메뉴",
        sidebarTitle: "메뉴",
        labelAccount: "프로필",
        labelSettings: "설정"
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
        placeholderPhone: "010-1234-5678",
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
            "Mevalar": "Fruits",
            "Sabzavotlar": "Vegetables",
            "Sutli": "Dairy",
            "Ichimliklar": "Drinks",
            "Shirinliklar": "Sweets"
        },
        locationsTitle: "Our Stores",
        btnHome: "Home",
        sidebarTitle: "Settings",
        labelAccount: "Account",
        labelSettings: "Settings",
        labelDarkMode: "Dark Mode",
        searchPlaceholder: "Search products...",
        deliveryBadge: "1-day delivery",
        profileTitle: "Client Profile",
        btnClose: "Close"
    }
};

i18n.uz.labelDarkMode = "Tungi rejim"; i18n.uz.searchPlaceholder = "Mahsulot qidirish..."; i18n.uz.deliveryBadge = "1 kunda yetkazib berish";
i18n.ru.labelDarkMode = "Тёмный режим"; i18n.ru.searchPlaceholder = "Поиск товаров..."; i18n.ru.deliveryBadge = "Доставка за 1 день";
i18n.kr.labelDarkMode = "다크 모드"; i18n.kr.searchPlaceholder = "제품 검색..."; i18n.kr.deliveryBadge = "1일 배송";

i18n.uz.profileTitle = "Mijoz Profili"; i18n.uz.btnClose = "Yopish";
i18n.ru.profileTitle = "Профиль клиента"; i18n.ru.btnClose = "Закрыть";
i18n.kr.profileTitle = "고객 프로필"; i18n.kr.btnClose = "닫기";

const langFlags = { uz: '🇺🇿', ru: '🇷🇺', kr: '🇰🇷', en: '🇺🇸' };
let currentLang = localStorage.getItem('mezana_lang') || 'uz';

// 2. Global State & Elements
let cart = JSON.parse(localStorage.getItem('mezana_cart')) || [];
let activeCategory = 'Hammasi';
let products = [];
let categories = [];
let editingId = null;
let adminTimer;

const elements = {};

function initElements() {
    elements.productsGrid = document.getElementById('products-grid');
    elements.categoriesList = document.getElementById('categories-list');
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
    elements.langPicker = document.getElementById('lang-picker');
    elements.currentLangFlag = document.getElementById('current-lang-flag');
    elements.toast = document.getElementById('toast');
    elements.adminPanel = document.getElementById('admin-panel');
    elements.productFormModal = document.getElementById('product-form-modal');
    elements.profileModal = document.getElementById('profile-modal');
    elements.searchInput = document.getElementById('search-input');
    elements.categoriesGrid = document.getElementById('categories-grid');
    elements.bannerSlider = document.getElementById('banner-slider');
}

// 4. Translation Logic
window.toggleLanguage = (e) => {
    if (e) e.stopPropagation();
    if (elements.langPicker) elements.langPicker.classList.toggle('active');
};

window.setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('mezana_lang', lang);
    if (elements.currentLangFlag) elements.currentLangFlag.textContent = langFlags[lang];
    updateStaticTranslations();
    renderCategories();
    renderProducts(activeCategory);
    updateCartUI();
    if (elements.langPicker) elements.langPicker.classList.remove('active');
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
    safeSet('label-dark-mode', t.labelDarkMode);
    if (elements.searchInput) elements.searchInput.placeholder = t.searchPlaceholder;
    const closeBtn = elements.profileModal ? elements.profileModal.querySelector('.primary-btn') : null;
    if (closeBtn) closeBtn.textContent = t.btnClose;
}

// 5. Render Functions
function renderCategories() {
    if (!elements.categoriesGrid) return;

    // Icon mapping for professional look
    const icons = {
        'Hammasi': '📦',
        'Mevalar': '🍎',
        'Sabzavotlar': '🥦',
        'Sutli': '🥛',
        'Ichimliklar': '🥤',
        'Shirinliklar': '🍫'
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

function renderProducts(filter = 'Hammasi', searchQuery = '') {
    if (!elements.productsGrid) return;

    activeCategory = filter;
    let filtered = filter === 'Hammasi' ? products : products.filter(p => p.category === filter);

    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(p =>
            (p.name[currentLang] || p.name['uz']).toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q)
        );
    }

    if (filtered.length === 0) {
        elements.productsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding: 2rem; color: #7f8c8d;">${currentLang === 'uz' ? "Mahsulotlar topilmadi" : "Товары не найдены"}</div>`;
        return;
    }

    elements.productsGrid.innerHTML = filtered.map(product => {
        const cartItem = cart.find(item => item.id === product.id);
        const qty = cartItem ? cartItem.quantity : 0;
        const name = product.name[currentLang] || product.name['uz'] || 'Product';

        return `
            <div class="product-card">
                ${product.oneDayDelivery ? `<div class="delivery-badge">⚡ ${i18n[currentLang].deliveryBadge}</div>` : ''}
                <div class="product-image">
                    <img src="${product.image || ''}" alt="${name}" onerror="this.src='https://via.placeholder.com/200?text=📦'">
                </div>
                <div class="product-title">${name}</div>
                <div class="product-footer">
                    <div class="product-price">${product.price.toLocaleString()} ${i18n[currentLang].currency}</div>
                    <div class="qty-control ${qty > 0 ? 'active' : ''}">
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
}

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

    elements.cartItemsList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-img">📦</div>
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name[currentLang]}</div>
                <div class="cart-item-price">${item.price.toLocaleString()} ${i18n[currentLang].currency}</div>
            </div>
            <div class="cart-item-actions">
                <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
            </div>
        </div>
    `).join('');
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
    } else {
        const code = prompt(currentLang === 'uz' ? "Admin kodini kiriting:" : "Enter admin code:");
        if (code === '7777') {
            elements.adminPanel.classList.add('open');
            document.body.classList.add('no-scroll');
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
                <img src="${p.image || ''}" style="width: 30px; height: 30px; border-radius: 6px; object-fit: cover;" onerror="this.src='https://via.placeholder.com/30?text=📦'">
                <span>${p.name[currentLang]}</span>
            </div>
            <div class="admin-item-controls">
                <button class="edit-btn" onclick="editProduct(${p.id})">✎</button>
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
    const catSelect = document.getElementById('admin-category');
    const newCatInput = document.getElementById('admin-new-category');

    if (newCatInput) { newCatInput.style.display = 'none'; newCatInput.value = ''; }

    let optionsHtml = categories.filter(c => c !== 'Hammasi').map(c => `<option value="${c}">${c}</option>`).join('');
    optionsHtml += `<option value="NEW">+ Yangi...</option>`;
    if (catSelect) catSelect.innerHTML = optionsHtml;

    if (id) {
        const p = products.find(prod => prod.id === id);
        if (base64Input) base64Input.value = p.image || '';
        if (preview) preview.innerHTML = p.image ? `<img src="${p.image}" style="width: 100%; height: 100%; object-fit: cover;">` : 'Rasm yo\'q';
        document.getElementById('admin-name-uz').value = p.name.uz;
        document.getElementById('admin-name-ru').value = p.name.ru;
        document.getElementById('admin-name-kr').value = p.name.kr;
        document.getElementById('admin-name-en').value = p.name.en;
        document.getElementById('admin-price').value = p.price;
        if (catSelect) catSelect.value = p.category;
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

    if (category === 'NEW') {
        category = document.getElementById('admin-new-category').value.trim();
        if (!category) return;
        if (!categories.includes(category)) {
            categories.push(category);
            localStorage.setItem('mezana_categories_local', JSON.stringify(categories));
        }
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

window.showAccount = () => {
    if (elements.sidebarDrawer) elements.sidebarDrawer.classList.remove('open');
    toggleProfileModal(true);
};
window.showSettings = () => { showToast(i18n[currentLang].labelSettings); elements.sidebarDrawer.classList.remove('open'); document.body.classList.remove('no-scroll'); };

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

    const defaultProductsData = [
        { id: 1, name: { uz: 'Olma "Golden"', ru: 'Яблоко "Голден"', kr: '사과 "골든"', en: 'Apple "Golden"' }, price: 4000, category: 'Mevalar', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', oneDayDelivery: true },
        { id: 2, name: { uz: 'Banan', ru: 'Банан', kr: '바나나', en: 'Banana' }, price: 3500, category: 'Mevalar', image: 'https://images.unsplash.com/photo-1571771894821-ad996211fdf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', oneDayDelivery: true },
        { id: 3, name: { uz: 'Pomidor', ru: 'Помидор', kr: '토마토', en: 'Tomato' }, price: 2500, category: 'Sabzavotlar', image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
        { id: 4, name: { uz: 'Bodring', ru: 'Огурец', kr: '오이', en: 'Cucumber' }, price: 1500, category: 'Sabzavotlar', image: 'https://images.unsplash.com/photo-1449333256619-bc90bac43ed8?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
        { id: 5, name: { uz: 'Sut', ru: 'Молоко', kr: '우유', en: 'Milk' }, price: 2800, category: 'Sutli', image: 'https://images.unsplash.com/photo-1563636619-e910029339cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', oneDayDelivery: true },
        { id: 6, name: { uz: 'Qatiq', ru: 'Кефир', kr: '요거트', en: 'Yogurt' }, price: 2000, category: 'Sutli', image: 'https://images.unsplash.com/photo-1571212515416-fef01fc43454?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
        { id: 7, name: { uz: 'Anor', ru: 'Гранат', kr: '석류', en: 'Pomegranate' }, price: 5000, category: 'Mevalar', image: 'https://images.unsplash.com/photo-1541344999736-83eca872977a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80' },
        { id: 8, name: { uz: 'Suv', ru: 'Вода', kr: '생수', en: 'Water' }, price: 1000, category: 'Ichimliklar', image: 'https://images.unsplash.com/photo-1560011961-4ab41261de01?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80', oneDayDelivery: true },
    ];


    products = JSON.parse(localStorage.getItem('mezana_products_local')) || defaultProductsData;
    if (products.length === 0) products = defaultProductsData;
    categories = JSON.parse(localStorage.getItem('mezana_categories_local')) || ['Hammasi', 'Mevalar', 'Sabzavotlar', 'Sutli', 'Ichimliklar'];

    updateStaticTranslations();
    updateCartUI();
    setLanguage(currentLang);

    // Bind basic events
    if (elements.cartToggle) elements.cartToggle.onclick = () => { elements.cartDrawer.classList.add('open'); document.body.classList.add('no-scroll'); };
    if (elements.closeCart) elements.closeCart.onclick = () => { elements.cartDrawer.classList.remove('open'); document.body.classList.remove('no-scroll'); resetDrawer(); };
    if (elements.menuToggle) elements.menuToggle.onclick = () => { elements.sidebarDrawer.classList.add('open'); document.body.classList.add('no-scroll'); };
    if (elements.closeSidebar) elements.closeSidebar.onclick = () => { elements.sidebarDrawer.classList.remove('open'); document.body.classList.remove('no-scroll'); };
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
    const name = document.getElementById('order-name').value;
    const phone = document.getElementById('order-phone').value;
    const address = document.getElementById('order-address').value;

    if (!name || !phone || !address) { showToast(i18n[currentLang].valError); vibrate('error'); return; }

    const orderData = {
        user: { name, phone, address },
        items: cart.map(i => ({ name: i.name[currentLang], price: i.price, qty: i.quantity })),
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
            showToast(currentLang === 'uz' ? "Buyurtma qabul qilindi!" : "Заказ принят!");
            cart = [];
            localStorage.removeItem('mezana_cart');
            updateCartUI();
            setTimeout(() => tg.close(), 1500);
        } else { throw new Error(result.error); }
    } catch (error) {
        showToast(`Xato: ${error.message}`);
        elements.confirmOrderBtn.disabled = false;
        elements.confirmOrderBtn.textContent = i18n[currentLang].btnConfirm;
    }
}
