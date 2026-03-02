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
        heroDesc: "Eng sara mahsulotlar eshigingizda",
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
        }
    },
    ru: {
        greeting: "Привет,",
        guest: "Гость",
        heroTitle: "Mezana Market <span class='highlight'>Свежее & Качественное</span>",
        heroDesc: "Лучшие продукты у вашего порога",
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
        }
    },
    kr: {
        greeting: "안녕하세요,",
        guest: "손님",
        heroTitle: "Mezana Market <span class='highlight'>신선 & 최고</span>",
        heroDesc: "최고의 제품이 문 앞에 있습니다",
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
        }
    },
    en: {
        greeting: "Hello,",
        guest: "Guest",
        heroTitle: "Mezana Market <span class='highlight'>Fresh & Quality</span>",
        heroDesc: "The best products at your doorstep",
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
        }
    }
};

let currentLang = localStorage.getItem('mezana_lang') || 'uz';

// 2. State
let cart = JSON.parse(localStorage.getItem('mezana_cart')) || [];
let activeCategory = 'Hammasi';

const products = [
    { id: 1, name: { uz: 'Olma "Golden"', ru: 'Яблоко "Голден"', kr: '사과 "골든"', en: 'Apple "Golden"' }, price: 4000, category: 'Mevalar', emoji: '🍎' },
    { id: 2, name: { uz: 'Banan', ru: 'Банан', kr: '바나나', en: 'Banana' }, price: 3500, category: 'Mevalar', emoji: '🍌' },
    { id: 3, name: { uz: 'Pomidor', ru: 'Помидор', kr: '토마토', en: 'Tomato' }, price: 2500, category: 'Sabzavotlar', emoji: '🍅' },
    { id: 4, name: { uz: 'Bodring', ru: 'Огурец', kr: '오이', en: 'Cucumber' }, price: 1500, category: 'Sabzavotlar', emoji: '🥒' },
    { id: 5, name: { uz: 'Sut', ru: 'Молоко', kr: '우유', en: 'Milk' }, price: 2800, category: 'Sutli', emoji: '🥛' },
    { id: 6, name: { uz: 'Qatiq', ru: 'Кефир', kr: '요거트', en: 'Yogurt' }, price: 2000, category: 'Sutli', emoji: '🥣' },
    { id: 7, name: { uz: 'Anor', ru: 'Гранат', kr: '석류', en: 'Pomegranate' }, price: 5000, category: 'Mevalar', emoji: '🍎' },
    { id: 8, name: { uz: 'Suv', ru: 'Вода', kr: '생수', en: 'Water' }, price: 1000, category: 'Ichimliklar', emoji: '💧' },
];

const categories = ['Hammasi', 'Mevalar', 'Sabzavotlar', 'Sutli', 'Ichimliklar'];

// 3. DOM Elements
const productsGrid = document.getElementById('products-grid');
const categoriesList = document.getElementById('categories-list');
const cartDrawer = document.getElementById('cart-drawer');
const cartToggle = document.getElementById('cart-toggle');
const closeCart = document.getElementById('close-cart');
const cartItemsList = document.getElementById('cart-items-list');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCountBadge = document.getElementById('cart-count');
const userNameEl = document.getElementById('user-name');
const userAvatarEl = document.getElementById('user-avatar');
const checkoutForm = document.getElementById('checkout-form');
const confirmOrderBtn = document.getElementById('confirm-order-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const backToCartBtn = document.getElementById('back-to-cart');

const langFlags = { uz: '🇺🇿', ru: '🇷🇺', kr: '🇰🇷', en: '🇺🇸' };

// 4. Translation Logic
window.toggleLanguage = (e) => {
    e.stopPropagation();
    const picker = document.getElementById('lang-picker');
    picker.classList.toggle('active');
};

window.setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('mezana_lang', lang);
    document.getElementById('current-lang-flag').textContent = langFlags[lang];
    updateStaticTranslations();
    renderCategories();
    renderProducts(activeCategory);
    renderCartItems();
    updateCartUI();

    // Close dropdown
    document.getElementById('lang-picker').classList.remove('active');
};

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    document.getElementById('lang-picker').classList.remove('active');
});

function updateStaticTranslations() {
    const t = i18n[currentLang];
    document.querySelector('.greeting').textContent = t.greeting;
    document.getElementById('hero-title').innerHTML = t.heroTitle;
    document.getElementById('hero-desc').textContent = t.heroDesc;
    document.getElementById('cart-title').textContent = t.cartTitle;
    document.getElementById('checkout-form-title').textContent = t.checkoutTitle;
    document.getElementById('label-name').textContent = t.labelName;
    document.getElementById('label-phone').textContent = t.labelPhone;
    document.getElementById('label-address').textContent = t.labelAddress;
    document.getElementById('order-name').placeholder = t.placeholderName;
    document.getElementById('order-phone').placeholder = t.placeholderPhone;
    document.getElementById('order-address').placeholder = t.placeholderAddress;
    document.getElementById('back-to-cart').textContent = t.btnBack;
    document.getElementById('label-total').textContent = t.labelTotal;
    document.getElementById('checkout-btn').textContent = t.btnCheckout;
    document.getElementById('confirm-order-btn').textContent = t.btnConfirm;
}

// 5. Render Functions
function renderCategories() {
    categoriesList.innerHTML = categories.map(cat => `
        <div class="category-pill ${cat === activeCategory ? 'active' : ''}" onclick="filterProducts('${cat}')">
            ${i18n[currentLang].categories[cat]}
        </div>
    `).join('');
}

function renderProducts(filter = 'Hammasi') {
    activeCategory = filter;
    const filtered = filter === 'Hammasi' ? products : products.filter(p => p.category === filter);

    productsGrid.innerHTML = filtered.map(product => {
        const cartItem = cart.find(item => item.id === product.id);
        const qty = cartItem ? cartItem.quantity : 0;

        return `
            <div class="product-card">
                <div class="product-image">
                    <span style="font-size: 3rem;">${product.emoji}</span>
                </div>
                <div class="product-title">${product.name[currentLang]}</div>
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
    renderCategories();
    renderProducts(category);
};

window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
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
    cartCountBadge.textContent = totalCount;
    cartCountBadge.style.display = totalCount > 0 ? 'block' : 'none';

    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotalPrice.textContent = `${totalPrice.toLocaleString()} ${i18n[currentLang].currency}`;

    // Persist cart
    localStorage.setItem('mezana_cart', JSON.stringify(cart));

    renderCartItems();
}

function renderCartItems() {
    if (cart.length === 0) {
        cartItemsList.innerHTML = `<div style="text-align:center; padding: 2rem; color: #7f8c8d;">${i18n[currentLang].emptyCart}</div>`;
        return;
    }

    cartItemsList.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-img">${item.emoji}</div>
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

// 6. UI Events
cartToggle.addEventListener('click', () => cartDrawer.classList.add('open'));
closeCart.addEventListener('click', () => { cartDrawer.classList.remove('open'); resetDrawer(); });

function resetDrawer() {
    checkoutForm.style.display = 'none';
    cartItemsList.style.display = 'block';
    checkoutBtn.style.display = 'block';
    confirmOrderBtn.style.display = 'none';
}

// 8. Admin Logic
let adminTimer;
let editingId = null;

window.handleAdminTriggerStart = () => {
    adminTimer = setTimeout(() => {
        toggleAdmin();
        vibrate('heavy');
    }, 3000); // 3 seconds long press
};

window.handleAdminTriggerEnd = () => {
    clearTimeout(adminTimer);
};

window.toggleAdmin = () => {
    const panel = document.getElementById('admin-panel');
    panel.classList.toggle('open');
    if (panel.classList.contains('open')) {
        renderAdminProducts();
    }
};

function renderAdminProducts() {
    const list = document.getElementById('product-list-admin');
    list.innerHTML = products.map(p => `
        <div class="admin-product-item">
            <span>${p.emoji} ${p.name[currentLang]}</span>
            <div class="admin-item-controls">
                <button class="edit-btn" onclick="editProduct(${p.id})">✎</button>
                <button class="delete-btn" onclick="deleteProduct(${p.id})">×</button>
            </div>
        </div>
    `).join('');
}

window.showProductForm = (id = null) => {
    editingId = id;
    const modal = document.getElementById('product-form-modal');
    const title = document.getElementById('form-title');
    modal.style.display = 'flex';

    if (id) {
        const p = products.find(prod => prod.id === id);
        title.textContent = "Tahrirlash";
        document.getElementById('admin-emoji').value = p.emoji;
        document.getElementById('admin-name-uz').value = p.name.uz;
        document.getElementById('admin-name-ru').value = p.name.ru;
        document.getElementById('admin-name-kr').value = p.name.kr;
        document.getElementById('admin-name-en').value = p.name.en;
        document.getElementById('admin-price').value = p.price;
        document.getElementById('admin-category').value = p.category;
    } else {
        title.textContent = "Yangi mahsulot";
        document.getElementById('admin-emoji').value = '🍎';
        document.getElementById('admin-name-uz').value = '';
        document.getElementById('admin-name-ru').value = '';
        document.getElementById('admin-name-kr').value = '';
        document.getElementById('admin-name-en').value = '';
        document.getElementById('admin-price').value = '';
        document.getElementById('admin-category').value = 'Mevalar';
    }
};

window.hideProductForm = () => {
    document.getElementById('product-form-modal').style.display = 'none';
};

window.saveProduct = () => {
    const newProduct = {
        id: editingId || Date.now(),
        emoji: document.getElementById('admin-emoji').value || '📦',
        name: {
            uz: document.getElementById('admin-name-uz').value,
            ru: document.getElementById('admin-name-ru').value,
            kr: document.getElementById('admin-name-kr').value,
            en: document.getElementById('admin-name-en').value
        },
        price: parseInt(document.getElementById('admin-price').value),
        category: document.getElementById('admin-category').value
    };

    if (editingId) {
        const idx = products.findIndex(p => p.id === editingId);
        products[idx] = newProduct;
    } else {
        products.push(newProduct);
    }

    // Update main lists
    localStorage.setItem('mezana_products_local', JSON.stringify(products));
    renderProducts(activeCategory);
    renderAdminProducts();
    hideProductForm();
    showToast("Saqlandi!");
};

window.editProduct = (id) => showProductForm(id);

window.deleteProduct = (id) => {
    if (confirm("Haqiqatan ham o'chirmoqchimisiz?")) {
        const idx = products.findIndex(p => p.id === id);
        products.splice(idx, 1);
        localStorage.setItem('mezana_products_local', JSON.stringify(products));
        renderProducts(activeCategory);
        renderAdminProducts();
    }
};

window.exportData = () => {
    const data = JSON.stringify(products, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mezana_products.json';
    a.click();
    showToast("Kod yuklab olindi (.json)");
};

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) { showToast(i18n[currentLang].emptyCart); return; }
    cartItemsList.style.display = 'none';
    checkoutForm.style.display = 'flex';
    checkoutBtn.style.display = 'none';
    confirmOrderBtn.style.display = 'block';
});

backToCartBtn.addEventListener('click', () => resetDrawer());

confirmOrderBtn.addEventListener('click', async () => {
    const name = document.getElementById('order-name').value;
    const phone = document.getElementById('order-phone').value;
    const address = document.getElementById('order-address').value;

    if (!name || !phone || !address) {
        showToast(i18n[currentLang].valError);
        vibrate('error');
        return;
    }

    const orderData = {
        user: { name, phone, address },
        items: cart.map(i => ({ name: i.name[currentLang], price: i.price, qty: i.quantity })),
        total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        currency: i18n[currentLang].currency,
        lang: currentLang
    };

    // Show loading state
    confirmOrderBtn.disabled = true;
    confirmOrderBtn.textContent = '...';

    try {
        const response = await fetch('/api/send-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderData })
        });

        const result = await response.json();

        if (result.success) {
            showToast(currentLang === 'uz' ? "Buyurtma qabul qilindi!" : "Заказ приня트!");
            // Clear cart after successful order
            cart = [];
            localStorage.removeItem('mezana_cart');
            updateCartUI();

            setTimeout(() => {
                tg.close();
            }, 1500);
        } else {
            throw new Error(result.error);
        }
    } catch (error) {
        console.error('Order error:', error);
        // Batafsilroq xatolik xabarini ko'rsatish
        const errorMsg = error.message || "Xatolik yuz berdi";
        showToast(`Xato: ${errorMsg}`);
        confirmOrderBtn.disabled = false;
        confirmOrderBtn.textContent = i18n[currentLang].btnConfirm;
    }
});

function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function vibrate(style) {
    if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred(style === 'error' ? 'heavy' : 'light');
}

// 7. Initial Load
if (tg.initDataUnsafe?.user) {
    const user = tg.initDataUnsafe.user;
    userNameEl.textContent = user.first_name;
    userAvatarEl.textContent = user.first_name.charAt(0);
} else {
    userNameEl.textContent = i18n[currentLang].guest;
}

// Set initial state
updateStaticTranslations();
updateCartUI();
setLanguage(currentLang);
