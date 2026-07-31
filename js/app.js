// Alanya Emlak Application Logic - Mobile App Enhanced

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

let currentProperties = [...PROPERTIES];
let activeCategory = 'all';
let favorites = JSON.parse(localStorage.getItem('alanya_favs') || '[]');

function initApp() {
    renderProperties(currentProperties);
    setupEventListeners();
    setupMobileAppNav();
}

// Render Property Cards with Mobile App UX
function renderProperties(properties) {
    const grid = document.getElementById('propertiesGrid');
    const countEl = document.getElementById('listingCount');
    
    if (countEl) {
        countEl.textContent = `${properties.length} İlan Bulundu`;
    }

    if (!grid) return;

    if (properties.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; background: var(--card-bg); border-radius: 20px; border: 1px solid var(--border-color);">
                <i class="ri-search-eye-line" style="font-size: 3.5rem; color: var(--accent-cyan); margin-bottom: 0.75rem;"></i>
                <h3 style="color: #fff; margin-bottom: 0.5rem; font-size: 1.2rem;">Kriterlere Uygun İlan Bulunamadı</h3>
                <p style="color: var(--text-muted); margin-bottom: 1.25rem; font-size: 0.9rem;">Filtrelerinizi değiştirerek tekrar deneyebilir veya doğrudan WhatsApp'tan bize sorabilirsiniz.</p>
                <button onclick="resetFilters()" class="pill-btn active" style="margin: 0 auto;">Tüm İlanları Göster</button>
            </div>
        `;
        return;
    }

    grid.innerHTML = properties.map(prop => {
        const isFav = favorites.includes(prop.id);
        const wpMessage = encodeURIComponent(`Merhaba, Alanya'da bulunan "${prop.title}" (İlan Kodu: #${prop.id}) hakkında detaylı bilgi ve kiralama şartlarını öğrenmek istiyorum.`);
        const wpUrl = `https://wa.me/${DEFAULT_WHATSAPP}?text=${wpMessage}`;
        const phoneUrl = `tel:${DEFAULT_PHONE.replace(/\s+/g, '')}`;

        return `
            <div class="property-card" data-id="${prop.id}">
                <div class="card-img-wrapper">
                    <img src="${prop.image}" alt="${prop.title}" loading="lazy">
                    <span class="card-type-badge">${prop.rentalTypeBadge}</span>
                    <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, '${prop.id}')" title="Favorilere Ekle">
                        <i class="${isFav ? 'ri-heart-fill' : 'ri-heart-line'}"></i>
                    </button>
                </div>
                <div class="card-body">
                    <div class="card-meta">
                        <span class="card-location"><i class="ri-map-pin-2-fill"></i> ${prop.location}</span>
                        <span><i class="ri-star-fill" style="color: var(--gold);"></i> ${prop.rating} (${prop.reviewsCount})</span>
                    </div>
                    <h3 class="card-title" title="${prop.title}">${prop.title}</h3>
                    
                    <div class="card-specs">
                        <span class="spec-item"><i class="ri-hotel-bed-line"></i> ${prop.roomType}</span>
                        <span class="spec-item"><i class="ri-group-line"></i> ${prop.capacity}</span>
                        <span class="spec-item"><i class="ri-compass-3-line"></i> ${prop.distanceToSea}</span>
                    </div>

                    <div class="card-price-row">
                        <div class="price-box">
                            <span class="price-val">₺${prop.priceDaily.toLocaleString('tr-TR')} <span>/ Günlük</span></span>
                            <span style="font-size: 0.78rem; color: var(--text-muted);">Aylık: ₺${prop.priceMonthly.toLocaleString('tr-TR')}</span>
                        </div>
                    </div>

                    <div class="card-actions">
                        <button class="btn-card-details" onclick="openPropertyModal('${prop.id}')">
                            <i class="ri-eye-line"></i> İncele
                        </button>
                        <a href="${wpUrl}" target="_blank" class="btn-card-wp" title="WhatsApp ile Sor">
                            <i class="ri-whatsapp-line"></i> WP
                        </a>
                        <a href="${phoneUrl}" class="btn-card-call" title="Hemen Ara">
                            <i class="ri-phone-fill"></i> Ara
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Toggle Favorites
function toggleFavorite(event, id) {
    event.stopPropagation();
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    localStorage.setItem('alanya_favs', JSON.stringify(favorites));

    // Update bottom nav badge count
    updateFavBadge();

    // If currently viewing favorites view, re-render
    if (activeCategory === 'favorites') {
        currentProperties = PROPERTIES.filter(p => favorites.includes(p.id));
        renderProperties(currentProperties);
    } else {
        renderProperties(currentProperties);
    }
}

function updateFavBadge() {
    const badge = document.getElementById('favBadgeCount');
    if (badge) {
        badge.textContent = favorites.length;
        badge.style.display = favorites.length > 0 ? 'inline-block' : 'none';
    }
}

// Event Listeners
function setupEventListeners() {
    // Category pills filter (Horizontal scrollable app style)
    const pills = document.querySelectorAll('.pill-btn');
    pills.forEach(pill => {
        pill.addEventListener('click', (e) => {
            pills.forEach(p => p.classList.remove('active'));
            const target = e.currentTarget;
            target.classList.add('active');
            
            const category = target.getAttribute('data-category');
            filterByCategory(category);
        });
    });

    // Search filter form submit
    const searchForm = document.getElementById('searchFilterForm');
    if (searchForm) {
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            applyAdvancedFilters();
        });
    }

    // Modal background click to close
    const modalOverlay = document.getElementById('propertyModal');
    if (modalOverlay) {
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) {
                closePropertyModal();
            }
        });
    }
}

// Bottom Nav Controls
function setupMobileAppNav() {
    const navItems = document.querySelectorAll('.app-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const targetNav = item.getAttribute('data-nav');
            if (!targetNav) return;

            navItems.forEach(n => n.classList.remove('active'));
            item.classList.add('active');

            if (targetNav === 'home') {
                resetFilters();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else if (targetNav === 'search') {
                const searchCard = document.querySelector('.search-filter-card');
                if (searchCard) {
                    searchCard.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (targetNav === 'favs') {
                activeCategory = 'favorites';
                currentProperties = PROPERTIES.filter(p => favorites.includes(p.id));
                renderProperties(currentProperties);
                document.querySelector('.listings-section')?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    updateFavBadge();
}

// Category filter logic
function filterByCategory(category) {
    activeCategory = category;
    if (category === 'all') {
        currentProperties = [...PROPERTIES];
    } else if (category === 'daily') {
        currentProperties = PROPERTIES.filter(p => p.rentalType === 'daily');
    } else if (category === 'monthly') {
        currentProperties = PROPERTIES.filter(p => p.rentalType === 'monthly');
    } else if (['1+1', '2+1', '3+1'].includes(category)) {
        currentProperties = PROPERTIES.filter(p => p.roomType === category);
    }
    renderProperties(currentProperties);
}

// Advanced search filters
function applyAdvancedFilters() {
    const rentalType = document.getElementById('filterRentalType')?.value || 'all';
    const roomType = document.getElementById('filterRoomType')?.value || 'all';
    const locationQuery = document.getElementById('filterLocation')?.value.toLowerCase().trim() || '';
    const maxPrice = parseInt(document.getElementById('filterMaxPrice')?.value) || 0;

    let filtered = PROPERTIES.filter(p => {
        let matchRental = (rentalType === 'all') || (p.rentalType === rentalType);
        let matchRoom = (roomType === 'all') || (p.roomType === roomType);
        let matchLoc = (locationQuery === '') || p.location.toLowerCase().includes(locationQuery) || p.title.toLowerCase().includes(locationQuery);
        let matchPrice = (maxPrice === 0) || (p.priceDaily <= maxPrice);

        return matchRental && matchRoom && matchLoc && matchPrice;
    });

    renderProperties(filtered);

    // Scroll smoothly to results
    document.querySelector('.listings-section')?.scrollIntoView({ behavior: 'smooth' });
}

function resetFilters() {
    document.getElementById('searchFilterForm')?.reset();
    document.querySelectorAll('.pill-btn').forEach(p => p.classList.remove('active'));
    document.querySelector('.pill-btn[data-category="all"]')?.classList.add('active');
    currentProperties = [...PROPERTIES];
    renderProperties(currentProperties);
}

// Open Property Detail Modal (Mobile Sheet)
function openPropertyModal(id) {
    const prop = PROPERTIES.find(p => p.id === id);
    if (!prop) return;

    const modal = document.getElementById('propertyModal');
    const modalContent = document.getElementById('modalContentContainer');

    const wpMessage = encodeURIComponent(`Merhaba, Alanya'da bulunan "${prop.title}" (İlan Kodu: #${prop.id}) hakkında detaylı bilgi ve müsaitlik durumu almak istiyorum.`);
    const wpUrl = `https://wa.me/${DEFAULT_WHATSAPP}?text=${wpMessage}`;
    const phoneUrl = `tel:${DEFAULT_PHONE.replace(/\s+/g, '')}`;

    modalContent.innerHTML = `
        <span class="sheet-handle"></span>
        <button class="modal-close-btn" onclick="closePropertyModal()"><i class="ri-close-line"></i></button>
        <div class="modal-img-container">
            <img src="${prop.image}" alt="${prop.title}">
        </div>
        <div class="modal-content-body">
            <div style="display: flex; gap: 0.5rem; margin-bottom: 0.75rem;">
                <span class="card-type-badge" style="position: static;">${prop.rentalTypeBadge}</span>
                <span class="card-feature-tag" style="position: static; background: var(--accent-teal); color: white; padding: 0.3rem 0.65rem; border-radius: 20px; font-size: 0.75rem; font-weight: 700;">${prop.badge}</span>
            </div>
            
            <h2 class="modal-title">${prop.title}</h2>
            <p style="color: var(--accent-cyan); font-weight: 600; margin-bottom: 1rem; font-size: 0.9rem;">
                <i class="ri-map-pin-2-fill"></i> ${prop.location} — Denize ${prop.distanceToSea}
            </p>

            <div class="card-specs" style="margin-bottom: 1.25rem;">
                <span class="spec-item"><i class="ri-hotel-bed-line"></i> ${prop.roomType}</span>
                <span class="spec-item"><i class="ri-group-line"></i> ${prop.capacity}</span>
                <span class="spec-item"><i class="ri-star-fill" style="color: var(--gold);"></i> ${prop.rating} Puan</span>
            </div>

            <div style="background: rgba(15, 23, 42, 0.7); padding: 1rem; border-radius: 14px; margin-bottom: 1.25rem; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <span style="font-size: 0.8rem; color: var(--text-muted);">Günlük Ücret:</span>
                    <h3 style="color: #fff; font-size: 1.5rem; font-family: 'Outfit';">₺${prop.priceDaily.toLocaleString('tr-TR')} <span style="font-size: 0.85rem; font-weight: normal; color: var(--text-muted);">/ Gün</span></h3>
                </div>
                <div style="text-align: right;">
                    <span style="font-size: 0.8rem; color: var(--text-muted);">Aylık Ücret:</span>
                    <h4 style="color: var(--accent-cyan); font-size: 1.15rem; font-family: 'Outfit';">₺${prop.priceMonthly.toLocaleString('tr-TR')} <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">/ Ay</span></h4>
                </div>
            </div>

            <h4 style="color: #fff; margin-bottom: 0.5rem; font-size: 0.95rem;">Daire Özellikleri:</h4>
            <div class="modal-features-list">
                ${prop.features.map(f => `<span class="modal-feature-chip"><i class="ri-checkbox-circle-fill"></i> ${f}</span>`).join('')}
            </div>

            <h4 style="color: #fff; margin-top: 1.25rem; margin-bottom: 0.4rem; font-size: 0.95rem;">Açıklama:</h4>
            <p class="modal-description">${prop.description}</p>

            <div class="modal-action-bar">
                <a href="${wpUrl}" target="_blank" class="hero-btn-wp" style="flex: 1; justify-content: center; font-size: 0.95rem; padding: 0.75rem 1rem;">
                    <i class="ri-whatsapp-line" style="font-size: 1.2rem;"></i> WhatsApp'tan Sor
                </a>
                <a href="${phoneUrl}" class="hero-btn-call" style="flex: 1; justify-content: center; font-size: 0.95rem; padding: 0.75rem 1rem;">
                    <i class="ri-phone-fill" style="font-size: 1.2rem;"></i> Hemen Ara
                </a>
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePropertyModal() {
    const modal = document.getElementById('propertyModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}
