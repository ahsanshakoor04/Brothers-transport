/**
 * AHSAN REAL ESTATE - LAHORE, PAKISTAN
 * Core Application Engine & Data Controller
 */

// ==========================================================================
// 1. INITIAL PROPERTY DATASET (LAHORE, PAKISTAN)
// ==========================================================================

const DEFAULT_PROPERTIES = [
    {
        id: "prop-1",
        title: "Royal Penthouse & Executive Apartment",
        location: "DHA Lahore",
        area: 2250, // Sq Ft
        bedrooms: 3,
        bathrooms: 3,
        price: 38500000, // PKR 3.85 Crore
        purpose: "Sale", // Sale or Rent
        type: "Penthouse",
        featured: true,
        image: "assets/images/apt_dha.jpg",
        description: "Experience ultra-luxury living in DHA Phase 6, Lahore. Features Italian marble flooring, floor-to-ceiling glass windows with breathtaking city views, dual high-speed elevators, underground reserved parking, and 24/7 power backup.",
        amenities: ["Elevator", "24/7 Security", "Backup Generator", "Reserved Parking", "Balcony", "Central Heating/AC", "Gym & Fitness", "Rooftop Garden"],
        yearBuilt: 2025,
        floor: "12th Floor",
        address: "Phase 6 Main Boulevard, DHA Lahore",
        lat: 31.4700,
        lng: 74.4100
    },
    {
        id: "prop-2",
        title: "Skyline View Luxury Flat",
        location: "Gulberg",
        area: 1450,
        bedrooms: 2,
        bathrooms: 2,
        price: 24500000, // PKR 2.45 Crore
        purpose: "Sale",
        type: "Apartment",
        featured: true,
        image: "assets/images/apt_gulberg.jpg",
        description: "Located in the heart of Gulberg III, Lahore near MM Alam Road. Designer open kitchen with imported quartz counter, built-in wardrobes, double-glazed soundproof windows, and 24/7 CCTV surveillance.",
        amenities: ["Elevator", "24/7 Security", "Backup Generator", "Reserved Parking", "Balcony", "Gym & Fitness"],
        yearBuilt: 2024,
        floor: "6th Floor",
        address: "Main Boulevard Gulberg III, Lahore",
        lat: 31.5100,
        lng: 74.3400
    },
    {
        id: "prop-3",
        title: "Eiffel View Master Suite Apartment",
        location: "Bahria Town",
        area: 1850,
        bedrooms: 3,
        bathrooms: 3,
        price: 19500000, // PKR 1.95 Crore
        purpose: "Sale",
        type: "Flat",
        featured: true,
        image: "assets/images/apt_bahria.jpg",
        description: "Modern family apartment with direct panoramic views of the Eiffel Tower replica in Bahria Town Sector C, Lahore. Spacious master bedroom with ensuite bathroom, balcony terrace, and private elevator keycard access.",
        amenities: ["Elevator", "24/7 Security", "Backup Generator", "Reserved Parking", "Balcony", "Rooftop Garden"],
        yearBuilt: 2024,
        floor: "4th Floor",
        address: "Sector C Commercial, Bahria Town, Lahore",
        lat: 31.3650,
        lng: 74.1850
    },
    {
        id: "prop-4",
        title: "Ahsan Residency Modern Flat",
        location: "Chungi Amar Sidhu",
        area: 1100,
        bedrooms: 2,
        bathrooms: 2,
        price: 8500000, // PKR 85 Lacs
        purpose: "Sale",
        type: "Flat",
        featured: true,
        image: "assets/images/hero_bg.jpg",
        description: "Prime location apartment right on Main Ferozepur Road near Metro Bus station, Chungi Amar Sidhu, Lahore. Ideal for small families or rental yield investment. Includes dedicated gas line, electric meter, and secure gated lobby.",
        amenities: ["Elevator", "24/7 Security", "Reserved Parking", "Balcony"],
        yearBuilt: 2023,
        floor: "2nd Floor",
        address: "Main Ferozepur Road, Chungi Amar Sidhu, Lahore",
        lat: 31.4647,
        lng: 74.3486
    },
    {
        id: "prop-5",
        title: "Fully Furnished DHA Executive Apartment for Rent",
        location: "DHA Lahore",
        area: 1900,
        bedrooms: 3,
        bathrooms: 3,
        price: 140000, // PKR 140,000 / month
        purpose: "Rent",
        type: "Apartment",
        featured: true,
        image: "assets/images/apt_dha.jpg",
        description: "Turnkey luxury rental flat in DHA Phase 5. Modern contemporary furniture, smart LED TVs, inverter ACs in all rooms, fully equipped kitchen, and covered basement parking slot.",
        amenities: ["Elevator", "24/7 Security", "Backup Generator", "Reserved Parking", "Balcony", "Central Heating/AC"],
        yearBuilt: 2024,
        floor: "3rd Floor",
        address: "Phase 5 Sector CCA, DHA Lahore",
        lat: 31.4680,
        lng: 74.3980
    },
    {
        id: "prop-6",
        title: "Corporate 2-Bed Luxury Flat for Rent",
        location: "Gulberg",
        area: 1350,
        bedrooms: 2,
        bathrooms: 2,
        price: 90000, // PKR 90,000 / month
        purpose: "Rent",
        type: "Flat",
        featured: false,
        image: "assets/images/apt_gulberg.jpg",
        description: "Spacious 2-bedroom executive apartment available for immediate lease in Gulberg II, Lahore. High-speed Fiber internet ready, 24/7 building security guard, and elevator backup inverter.",
        amenities: ["Elevator", "24/7 Security", "Reserved Parking", "Balcony"],
        yearBuilt: 2023,
        floor: "5th Floor",
        address: "Zafar Ali Road, Gulberg II, Lahore",
        lat: 31.5200,
        lng: 74.3500
    },
    {
        id: "prop-7",
        title: "Model Town Park View Duplex",
        location: "Model Town",
        area: 2100,
        bedrooms: 4,
        bathrooms: 4,
        price: 32000000, // PKR 3.20 Crore
        purpose: "Sale",
        type: "Duplex",
        featured: false,
        image: "assets/images/apt_bahria.jpg",
        description: "Rare 4-bedroom duplex apartment in Model Town Block C, Lahore overlooking lush green park views. Separate servant quarter, dual entrances, and covered garage for 2 cars.",
        amenities: ["Elevator", "24/7 Security", "Backup Generator", "Reserved Parking", "Balcony", "Rooftop Garden"],
        yearBuilt: 2022,
        floor: "Ground & 1st Floor",
        address: "Block C, Model Town, Lahore",
        lat: 31.4850,
        lng: 74.3250
    },
    {
        id: "prop-8",
        title: "Johar Heights Smart Studio Flat",
        location: "Johar Town",
        area: 750,
        bedrooms: 1,
        bathrooms: 1,
        price: 6800000, // PKR 68 Lacs
        purpose: "Sale",
        type: "Studio",
        featured: false,
        image: "assets/images/hero_bg.jpg",
        description: "Cozy 1-bedroom studio apartment near Emporium Mall & Doctors Hospital, Johar Town Block R, Lahore. High rental return potential for university students or working professionals.",
        amenities: ["Elevator", "24/7 Security", "Reserved Parking"],
        yearBuilt: 2023,
        floor: "4th Floor",
        address: "Block R, Johar Town, Lahore",
        lat: 31.4650,
        lng: 74.2750
    }
];

const DEFAULT_AGENTS = [
    {
        id: "agent-1",
        name: "Ahsan Shakoor",
        position: "Principal Consultant & Founder",
        bio: "Specialist in DHA & Gulberg luxury high-rise apartment investments with 10+ years experience in Lahore market.",
        phone: "03207843805",
        email: "ahsanshakoor04@gmail.com",
        whatsapp: "923207843805",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "agent-2",
        name: "Muhammad Hamza",
        position: "Senior Apartment Advisor",
        bio: "Expert in Bahria Town & Johar Town residential flats, helping buyers get optimal price points.",
        phone: "03207843805",
        email: "ahsanshakoor04@gmail.com",
        whatsapp: "923207843805",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: "agent-3",
        name: "Zoya Khan",
        position: "Rental & Lease Specialist",
        bio: "Dedicated advisor for corporate leasing and high-end furnished apartment rentals in Lahore.",
        phone: "03207843805",
        email: "ahsanshakoor04@gmail.com",
        whatsapp: "923207843805",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80"
    }
];

// ==========================================================================
// 2. STATE MANAGEMENT & LOCAL STORAGE
// ==========================================================================

class AppState {
    constructor() {
        this.config = typeof APP_CONFIG !== 'undefined' ? APP_CONFIG : {};
        this.properties = this.loadFromStorage('ahsan_properties', DEFAULT_PROPERTIES);
        this.favorites = this.loadFromStorage('ahsan_favorites', []);
        this.compareList = this.loadFromStorage('ahsan_compare', []);
        this.inquiries = this.loadFromStorage('ahsan_inquiries', [
            {
                date: "2026-10-02 14:30",
                name: "Usman Tariq",
                phone: "03001234567",
                email: "usman@example.com",
                property: "DHA Lahore Apartments",
                message: "Interested in 3-bedroom apartment in DHA Phase 6."
            }
        ]);
        
        // Active Filter Options
        this.filters = {
            keyword: "",
            location: "",
            purpose: "all",
            type: "",
            priceRange: "",
            beds: "",
            baths: "",
            sort: "newest"
        };

        this.officeMap = null;
        this.detailMap = null;
        this.chartInstance = null;
    }

    loadFromStorage(key, fallback) {
        const stored = localStorage.getItem(key);
        if (!stored) return fallback;
        try {
            return JSON.parse(stored);
        } catch(e) {
            return fallback;
        }
    }

    saveToStorage(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    toggleFavorite(propId) {
        const index = this.favorites.indexOf(propId);
        if (index > -1) {
            this.favorites.splice(index, 1);
            showToast("Property removed from Favorites", "info");
        } else {
            this.favorites.push(propId);
            showToast("Property saved to Favorites!", "success");
        }
        this.saveToStorage('ahsan_favorites', this.favorites);
        renderFavoriteBadge();
        renderPropertyList();
    }

    toggleCompare(propId) {
        const index = this.compareList.indexOf(propId);
        if (index > -1) {
            this.compareList.splice(index, 1);
            showToast("Property removed from Comparison", "info");
        } else {
            if (this.compareList.length >= 4) {
                showToast("You can compare up to 4 properties at a time", "warning");
                return;
            }
            this.compareList.push(propId);
            showToast("Property added to Comparison matrix", "success");
        }
        this.saveToStorage('ahsan_compare', this.compareList);
        renderCompareBadge();
        renderPropertyList();
    }
}

const state = new AppState();

// ==========================================================================
// 3. UTILITY FUNCTIONS
// ==========================================================================

function formatPKR(amount, isRent = false) {
    if (!amount) return 'PKR 0';
    
    if (isRent) {
        return `PKR ${amount.toLocaleString('en-PK')} / mo`;
    }

    if (amount >= 10000000) {
        const crore = (amount / 10000000).toFixed(2);
        return `PKR ${crore} Crore`;
    } else if (amount >= 100000) {
        const lac = (amount / 100000).toFixed(2);
        return `PKR ${lac} Lacs`;
    } else {
        return `PKR ${amount.toLocaleString('en-PK')}`;
    }
}

function showToast(message, type = "success") {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconClass = 'fa-circle-check';
    if (type === 'danger') iconClass = 'fa-triangle-exclamation';
    if (type === 'warning') iconClass = 'fa-triangle-exclamation';
    if (type === 'info') iconClass = 'fa-circle-info';

    toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideInRight 0.3s ease reverse forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ==========================================================================
// 4. RENDERERS & CONTROLLERS
// ==========================================================================

function renderFavoriteBadge() {
    const badge = document.getElementById('fav-count-badge');
    if (badge) badge.textContent = state.favorites.length;
}

function renderCompareBadge() {
    const badge = document.getElementById('compare-count-badge');
    if (badge) badge.textContent = state.compareList.length;
}

// Filter Properties Logic
function getFilteredProperties() {
    let result = [...state.properties];

    // Filter by Keyword
    if (state.filters.keyword) {
        const kw = state.filters.keyword.toLowerCase();
        result = result.filter(p => 
            p.title.toLowerCase().includes(kw) || 
            p.location.toLowerCase().includes(kw) || 
            p.description.toLowerCase().includes(kw)
        );
    }

    // Filter by Location
    if (state.filters.location) {
        result = result.filter(p => p.location.toLowerCase() === state.filters.location.toLowerCase());
    }

    // Filter by Purpose (Sale/Rent)
    if (state.filters.purpose && state.filters.purpose !== "all") {
        result = result.filter(p => p.purpose.toLowerCase() === state.filters.purpose.toLowerCase());
    }

    // Filter by Type
    if (state.filters.type) {
        result = result.filter(p => p.type.toLowerCase() === state.filters.type.toLowerCase());
    }

    // Filter by Bedrooms
    if (state.filters.beds) {
        const minBeds = parseInt(state.filters.beds);
        result = result.filter(p => p.bedrooms >= minBeds);
    }

    // Filter by Bathrooms
    if (state.filters.baths) {
        const minBaths = parseInt(state.filters.baths);
        result = result.filter(p => p.bathrooms >= minBaths);
    }

    // Filter by Price Range
    if (state.filters.priceRange) {
        if (state.filters.priceRange.includes('-')) {
            const [min, max] = state.filters.priceRange.split('-').map(Number);
            result = result.filter(p => p.price >= min && p.price <= max);
        } else if (state.filters.priceRange === 'rent-under-1lac') {
            result = result.filter(p => p.purpose === 'Rent' && p.price <= 100000);
        } else if (state.filters.priceRange === 'rent-above-1lac') {
            result = result.filter(p => p.purpose === 'Rent' && p.price > 100000);
        }
    }

    // Sorting
    if (state.filters.sort === 'price-asc') {
        result.sort((a, b) => a.price - b.price);
    } else if (state.filters.sort === 'price-desc') {
        result.sort((a, b) => b.price - a.price);
    } else if (state.filters.sort === 'area-desc') {
        result.sort((a, b) => b.area - a.area);
    } // default 'newest' keeps initial order

    return result;
}

// Render Property Grid
function renderPropertyList() {
    const grid = document.getElementById('property-grid');
    const countNum = document.getElementById('property-count-num');
    const noResults = document.getElementById('no-results-box');

    if (!grid) return;

    const filtered = getFilteredProperties();
    if (countNum) countNum.textContent = filtered.length;

    if (filtered.length === 0) {
        grid.innerHTML = '';
        noResults.classList.remove('hidden');
        return;
    }

    noResults.classList.add('hidden');

    grid.innerHTML = filtered.map(prop => {
        const isFav = state.favorites.includes(prop.id);
        const isComp = state.compareList.includes(prop.id);
        const isRent = prop.purpose === 'Rent';

        return `
            <div class="property-card" data-id="${prop.id}">
                <div class="card-img-wrapper">
                    <img src="${prop.image}" alt="${prop.title}" class="card-img" loading="lazy">
                    <div class="card-badges">
                        <span class="badge-status ${isRent ? 'badge-rent' : 'badge-sale'}">FOR ${prop.purpose.toUpperCase()}</span>
                        <span class="badge-status badge-demo" title="Illustrative sample listing for demonstration"><i class="fa-solid fa-flask"></i> DEMO LISTING</span>
                    </div>
                    <div class="card-actions-top">
                        <button class="btn-icon-circle fav-btn ${isFav ? 'active' : ''}" onclick="state.toggleFavorite('${prop.id}')" title="Save to Favorites">
                            <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                        </button>
                        <button class="btn-icon-circle compare-btn ${isComp ? 'active' : ''}" onclick="state.toggleCompare('${prop.id}')" title="Compare Property">
                            <i class="fa-solid fa-code-compare"></i>
                        </button>
                    </div>
                </div>

                <div class="card-body">
                    <div class="card-price">
                        ${formatPKR(prop.price, isRent)}
                    </div>
                    <h3 class="card-title">${prop.title}</h3>
                    <div class="card-location">
                        <i class="fa-solid fa-location-dot text-gold"></i> ${prop.location}, Lahore
                    </div>

                    <div class="card-specs-row">
                        <div class="spec-item"><i class="fa-solid fa-bed"></i> ${prop.bedrooms} Beds</div>
                        <div class="spec-item"><i class="fa-solid fa-bath"></i> ${prop.bathrooms} Baths</div>
                        <div class="spec-item"><i class="fa-solid fa-ruler-combined"></i> ${prop.area} Sq Ft</div>
                    </div>

                    <div class="card-footer-btns">
                        <button class="btn btn-outline-navy" onclick="openPropertyModal('${prop.id}')">
                            <i class="fa-solid fa-circle-info"></i> View Details
                        </button>
                        <a href="https://wa.me/923207843805?text=Hello%20Ahsan,%20I%20am%20interested%20in%20${encodeURIComponent(prop.title)}%20in%20${encodeURIComponent(prop.location)}." target="_blank" class="btn btn-whatsapp-direct">
                            <i class="fa-brands fa-whatsapp"></i> Inquiry
                        </a>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Render Agents Section
function renderAgents() {
    const grid = document.getElementById('agents-grid');
    if (!grid) return;

    grid.innerHTML = DEFAULT_AGENTS.map(agent => `
        <div class="agent-card">
            <div class="agent-img-box">
                <img src="${agent.image}" alt="${agent.name}" class="agent-img">
            </div>
            <div class="agent-body">
                <h3 class="agent-name">${agent.name}</h3>
                <span class="agent-pos">${agent.position}</span>
                <p class="agent-bio">${agent.bio}</p>
                <div class="agent-contacts">
                    <a href="tel:${agent.phone}" class="agent-contact-btn" title="Call Agent"><i class="fa-solid fa-phone"></i></a>
                    <a href="mailto:${agent.email}" class="agent-contact-btn" title="Email Agent"><i class="fa-solid fa-envelope"></i></a>
                    <a href="https://wa.me/${agent.whatsapp}" target="_blank" class="agent-contact-btn" title="WhatsApp Agent"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
                <button class="btn btn-outline-navy btn-block" onclick="filterAgentProperties('${agent.name}')">
                    <i class="fa-solid fa-building"></i> View Agent Properties
                </button>
            </div>
        </div>
    `).join('');
}

function filterAgentProperties(agentName) {
    window.location.hash = '#properties';
    showToast(`Showing listings managed by ${agentName}`, "info");
}

// Open Property Detail Modal
function openPropertyModal(propId) {
    const prop = state.properties.find(p => p.id === propId);
    if (!prop) return;

    const modal = document.getElementById('property-modal');
    const modalBody = document.getElementById('prop-modal-body');
    const isRent = prop.purpose === 'Rent';

    modalBody.innerHTML = `
        <div class="prop-detail-header">
            <div>
                <span class="badge-status ${isRent ? 'badge-rent' : 'badge-sale'}">FOR ${prop.purpose.toUpperCase()}</span>
                <h2 style="font-size: 1.8rem; margin-top: 8px;">${prop.title}</h2>
                <p style="color: var(--slate-500);"><i class="fa-solid fa-location-dot text-gold"></i> ${prop.address}</p>
            </div>
            <div style="text-align: right;">
                <div style="font-size: 2rem; font-weight: 800; color: var(--gold-600);">${formatPKR(prop.price, isRent)}</div>
                <span class="badge-status badge-demo">DEMO LISTING</span>
            </div>
        </div>

        <div class="prop-detail-gallery">
            <img src="${prop.image}" alt="${prop.title}" class="gallery-main-img">
        </div>

        <div class="prop-specs-grid">
            <div class="prop-spec-box"><i class="fa-solid fa-bed"></i><span>Bedrooms</span><strong>${prop.bedrooms} Beds</strong></div>
            <div class="prop-spec-box"><i class="fa-solid fa-bath"></i><span>Bathrooms</span><strong>${prop.bathrooms} Baths</strong></div>
            <div class="prop-spec-box"><i class="fa-solid fa-ruler-combined"></i><span>Property Area</span><strong>${prop.area} Sq Ft</strong></div>
            <div class="prop-spec-box"><i class="fa-solid fa-building"></i><span>Floor Level</span><strong>${prop.floor || 'N/A'}</strong></div>
        </div>

        <div style="margin-bottom: 24px;">
            <h3 style="margin-bottom: 10px;"><i class="fa-solid fa-align-left text-gold"></i> Property Description</h3>
            <p style="color: var(--slate-700); line-height: 1.7;">${prop.description}</p>
        </div>

        <div style="margin-bottom: 24px;">
            <h3 style="margin-bottom: 12px;"><i class="fa-solid fa-list-check text-gold"></i> Amenities & Features</h3>
            <div class="amenities-list-grid">
                ${prop.amenities.map(a => `<div class="amenity-chip"><i class="fa-solid fa-circle-check"></i> ${a}</div>`).join('')}
            </div>
        </div>

        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 12px;"><i class="fa-solid fa-map-location-dot text-gold"></i> Neighborhood Location (Lahore)</h3>
            <div id="prop-detail-map" style="height: 250px; border-radius: var(--radius-md); overflow: hidden;"></div>
        </div>

        <div style="background: var(--slate-100); padding: 24px; border-radius: var(--radius-lg);">
            <h3 style="margin-bottom: 16px;"><i class="fa-solid fa-paper-plane text-gold"></i> "I'm Interested" Quick Inquiry</h3>
            <form id="modal-inquiry-form">
                <input type="hidden" id="modal-prop-title" value="${prop.title}">
                <div class="form-row">
                    <div class="form-group">
                        <label>Your Name *</label>
                        <input type="text" id="modal-inq-name" class="form-control" required placeholder="Full Name">
                    </div>
                    <div class="form-group">
                        <label>Phone Number *</label>
                        <input type="tel" id="modal-inq-phone" class="form-control" required placeholder="03XXXXXXXXX">
                    </div>
                    <div class="form-group">
                        <label>Email Address *</label>
                        <input type="email" id="modal-inq-email" class="form-control" required placeholder="name@example.com">
                    </div>
                </div>
                <div class="form-group">
                    <label>Message</label>
                    <textarea id="modal-inq-msg" class="form-control" rows="2">Hello Ahsan, I am interested in ${prop.title} (${formatPKR(prop.price, isRent)}). Please send full property documents and arrange a visit.</textarea>
                </div>
                <div style="display: flex; gap: 12px;">
                    <button type="submit" class="btn btn-gold btn-block"><i class="fa-solid fa-paper-plane"></i> Submit Inquiry</button>
                    <a href="https://wa.me/923207843805?text=Hello%20Ahsan,%20I%20am%20interested%20in%20${encodeURIComponent(prop.title)}." target="_blank" class="btn btn-whatsapp-direct">
                        <i class="fa-brands fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </form>
        </div>
    `;

    modal.classList.remove('hidden');

    // Initialize Map in Modal
    setTimeout(() => {
        const detailMapContainer = document.getElementById('prop-detail-map');
        if (detailMapContainer) {
            const map = L.map('prop-detail-map').setView([prop.lat, prop.lng], 14);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap'
            }).addTo(map);

            L.marker([prop.lat, prop.lng]).addTo(map)
                .bindPopup(`<b>${prop.title}</b><br>${prop.address}`)
                .openPopup();
        }
    }, 200);

    // Attach Inquiry Form Submit
    document.getElementById('modal-inquiry-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const inq = {
            date: new Date().toLocaleString(),
            name: document.getElementById('modal-inq-name').value,
            phone: document.getElementById('modal-inq-phone').value,
            email: document.getElementById('modal-inq-email').value,
            property: prop.title,
            message: document.getElementById('modal-inq-msg').value
        };

        state.inquiries.unshift(inq);
        state.saveToStorage('ahsan_inquiries', state.inquiries);
        showToast("Inquiry submitted successfully! Ahsan team will call you back shortly.", "success");
        modal.classList.add('hidden');
    });
}

// Favorites Drawer
function openFavoritesDrawer() {
    const drawer = document.getElementById('favorites-drawer');
    const list = document.getElementById('favorites-list');
    
    if (state.favorites.length === 0) {
        list.innerHTML = `
            <div style="text-align: center; padding: 40px 10px; color: var(--slate-500);">
                <i class="fa-regular fa-heart" style="font-size: 3rem; margin-bottom: 12px;"></i>
                <p>No properties saved to favorites yet.</p>
            </div>
        `;
    } else {
        const savedProps = state.properties.filter(p => state.favorites.includes(p.id));
        list.innerHTML = savedProps.map(prop => `
            <div style="display: flex; gap: 12px; margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid var(--slate-200);">
                <img src="${prop.image}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
                <div style="flex: 1;">
                    <h4 style="font-size: 0.95rem; margin-bottom: 4px;">${prop.title}</h4>
                    <span style="color: var(--gold-600); font-weight: 700; font-size: 0.9rem;">${formatPKR(prop.price, prop.purpose === 'Rent')}</span>
                    <div style="margin-top: 6px; display: flex; gap: 8px;">
                        <button class="btn btn-outline-navy" style="padding: 4px 8px; font-size: 0.75rem;" onclick="openPropertyModal('${prop.id}')">View</button>
                        <button class="btn btn-outline-navy" style="padding: 4px 8px; font-size: 0.75rem; color: var(--danger); border-color: var(--danger);" onclick="state.toggleFavorite('${prop.id}'); openFavoritesDrawer();">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
    }

    drawer.classList.remove('hidden');
}

// Comparison Matrix Modal
function openCompareModal() {
    const modal = document.getElementById('compare-modal');
    const body = document.getElementById('compare-modal-body');

    if (state.compareList.length === 0) {
        body.innerHTML = `
            <div style="text-align: center; padding: 40px 10px;">
                <i class="fa-solid fa-code-compare" style="font-size: 3rem; color: var(--slate-400); margin-bottom: 12px;"></i>
                <p>No properties selected for comparison. Click the scale icon on property cards to compare up to 4 apartments.</p>
            </div>
        `;
    } else {
        const compareProps = state.properties.filter(p => state.compareList.includes(p.id));
        body.innerHTML = `
            <div class="table-responsive">
                <table class="admin-table" style="min-width: 600px;">
                    <thead>
                        <tr>
                            <th>Feature</th>
                            ${compareProps.map(p => `<th>${p.title}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Price</strong></td>
                            ${compareProps.map(p => `<td><strong style="color: var(--gold-600);">${formatPKR(p.price, p.purpose === 'Rent')}</strong></td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Location</strong></td>
                            ${compareProps.map(p => `<td>${p.location}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Purpose</strong></td>
                            ${compareProps.map(p => `<td>FOR ${p.purpose.toUpperCase()}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Type</strong></td>
                            ${compareProps.map(p => `<td>${p.type}</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Bedrooms</strong></td>
                            ${compareProps.map(p => `<td>${p.bedrooms} Beds</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Bathrooms</strong></td>
                            ${compareProps.map(p => `<td>${p.bathrooms} Baths</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Area (Sq Ft)</strong></td>
                            ${compareProps.map(p => `<td>${p.area} Sq Ft</td>`).join('')}
                        </tr>
                        <tr>
                            <td><strong>Action</strong></td>
                            ${compareProps.map(p => `
                                <td>
                                    <button class="btn btn-gold" style="padding: 6px 12px; font-size: 0.8rem;" onclick="openPropertyModal('${p.id}')">Details</button>
                                </td>
                            `).join('')}
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
    }

    modal.classList.remove('hidden');
}

// ==========================================================================
// 5. MORTGAGE CALCULATOR ENGINE
// ==========================================================================

function initMortgageCalculator() {
    const priceSlider = document.getElementById('calc-price');
    const priceNum = document.getElementById('calc-price-num');
    const priceValText = document.getElementById('calc-price-val');
    const downSlider = document.getElementById('calc-down-percent');
    const downValText = document.getElementById('calc-down-val');
    const interestSlider = document.getElementById('calc-interest');
    const interestValText = document.getElementById('calc-interest-val');
    const yearsSelect = document.getElementById('calc-years');
    const yearsValText = document.getElementById('calc-years-val');

    const emiEl = document.getElementById('calc-monthly-emi');
    const principalEl = document.getElementById('calc-loan-principal');
    const downAmountEl = document.getElementById('calc-down-amount');
    const interestEl = document.getElementById('calc-total-interest');
    const payableEl = document.getElementById('calc-total-payable');

    function updateCalculations() {
        const propertyPrice = parseFloat(priceSlider.value) || 20000000;
        const downPercent = parseFloat(downSlider.value) || 25;
        const annualInterestRate = parseFloat(interestSlider.value) || 12.5;
        const tenureYears = parseInt(yearsSelect.value) || 15;

        // Sync text labels
        priceValText.textContent = formatPKR(propertyPrice);
        priceNum.value = propertyPrice;

        const downPaymentAmount = (propertyPrice * downPercent) / 100;
        downValText.textContent = `${downPercent}% (${formatPKR(downPaymentAmount)})`;

        interestValText.textContent = `${annualInterestRate}%`;
        yearsValText.textContent = `${tenureYears} Years`;

        const loanPrincipal = propertyPrice - downPaymentAmount;
        const monthlyRate = (annualInterestRate / 100) / 12;
        const totalMonths = tenureYears * 12;

        // EMI Formula = [P x R x (1+R)^N]/[(1+R)^N-1]
        let emi = 0;
        if (monthlyRate > 0) {
            emi = (loanPrincipal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
        } else {
            emi = loanPrincipal / totalMonths;
        }

        const totalPayment = emi * totalMonths;
        const totalInterest = totalPayment - loanPrincipal;

        // Render Outputs
        emiEl.textContent = `${formatPKR(Math.round(emi))} / mo`;
        principalEl.textContent = formatPKR(loanPrincipal);
        downAmountEl.textContent = formatPKR(downPaymentAmount);
        interestEl.textContent = formatPKR(Math.round(totalInterest));
        payableEl.textContent = formatPKR(Math.round(totalPayment + downPaymentAmount));

        // Update Chart
        renderMortgageChart(loanPrincipal, Math.round(totalInterest), downPaymentAmount);
    }

    priceSlider.addEventListener('input', updateCalculations);
    priceNum.addEventListener('change', (e) => {
        priceSlider.value = e.target.value;
        updateCalculations();
    });
    downSlider.addEventListener('input', updateCalculations);
    interestSlider.addEventListener('input', updateCalculations);
    yearsSelect.addEventListener('change', updateCalculations);

    updateCalculations();
}

function renderMortgageChart(principal, interest, downPayment) {
    const ctx = document.getElementById('mortgageChart');
    if (!ctx) return;

    if (state.chartInstance) {
        state.chartInstance.destroy();
    }

    state.chartInstance = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Loan Principal', 'Total Interest', 'Down Payment'],
            datasets: [{
                data: [principal, interest, downPayment],
                backgroundColor: ['#1c2541', '#c5a059', '#3b82f6'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });
}

// ==========================================================================
// 6. ADMIN PORTAL CONTROLLER
// ==========================================================================

function initAdminPortal() {
    const adminModal = document.getElementById('admin-modal');
    const openBtn = document.getElementById('open-admin-btn');
    const footerLink = document.getElementById('footer-admin-link');
    const closeBtn = document.getElementById('close-admin-modal');
    const propCountEl = document.getElementById('admin-prop-count');
    const inquiryCountEl = document.getElementById('admin-inquiry-count');

    function refreshAdminData() {
        if (propCountEl) propCountEl.textContent = state.properties.length;
        if (inquiryCountEl) inquiryCountEl.textContent = state.inquiries.length;
        renderAdminPropTable();
        renderAdminInquiriesTable();
    }

    if (openBtn) openBtn.addEventListener('click', () => {
        refreshAdminData();
        adminModal.classList.remove('hidden');
    });

    if (footerLink) footerLink.addEventListener('click', (e) => {
        e.preventDefault();
        refreshAdminData();
        adminModal.classList.remove('hidden');
    });

    if (closeBtn) closeBtn.addEventListener('click', () => {
        adminModal.classList.add('hidden');
    });

    // Tab Switchers
    document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.admin-tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const tabId = btn.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Form Submit: Add / Edit Property
    const form = document.getElementById('admin-property-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const editId = document.getElementById('admin-edit-id').value;
        const title = document.getElementById('admin-title').value;
        const price = parseFloat(document.getElementById('admin-price').value);
        const location = document.getElementById('admin-location').value;
        const type = document.getElementById('admin-type').value;
        const purpose = document.getElementById('admin-purpose').value;
        const beds = parseInt(document.getElementById('admin-beds').value);
        const baths = parseInt(document.getElementById('admin-baths').value);
        const area = parseInt(document.getElementById('admin-area').value);
        const image = document.getElementById('admin-image').value;
        const desc = document.getElementById('admin-desc').value;
        const featured = document.getElementById('admin-featured').checked;

        // Amenities checked
        const amenities = Array.from(document.querySelectorAll('.amenities-checkbox-grid input:checked')).map(i => i.value);

        if (editId) {
            // Edit existing
            const index = state.properties.findIndex(p => p.id === editId);
            if (index > -1) {
                state.properties[index] = {
                    ...state.properties[index],
                    title, price, location, type, purpose, bedrooms: beds, bathrooms: baths, area, image, description: desc, featured, amenities
                };
                showToast("Property updated successfully!", "success");
            }
        } else {
            // Add new
            const newProp = {
                id: 'prop-' + Date.now(),
                title, price, location, type, purpose, bedrooms: beds, bathrooms: baths, area, image, description: desc, featured, amenities,
                yearBuilt: 2026, floor: "New Listing", address: `${location}, Lahore`, lat: 31.4647, lng: 74.3486
            };
            state.properties.unshift(newProp);
            showToast("New property added to live catalog!", "success");
        }

        state.saveToStorage('ahsan_properties', state.properties);
        form.reset();
        document.getElementById('admin-edit-id').value = '';
        renderPropertyList();
        refreshAdminData();

        // Switch to list tab
        document.querySelector('[data-tab="admin-list-props"]').click();
    });
}

function renderAdminPropTable() {
    const tbody = document.getElementById('admin-props-tbody');
    if (!tbody) return;

    tbody.innerHTML = state.properties.map(p => `
        <tr>
            <td><img src="${p.image}" style="width: 50px; height: 40px; object-fit: cover; border-radius: 4px;"></td>
            <td><strong>${p.title}</strong></td>
            <td>${p.location}</td>
            <td><strong style="color: var(--gold-600);">${formatPKR(p.price, p.purpose === 'Rent')}</strong></td>
            <td>${p.type}</td>
            <td>${p.bedrooms}B / ${p.bathrooms}B</td>
            <td><span class="badge-status ${p.purpose === 'Rent' ? 'badge-rent' : 'badge-sale'}">${p.purpose}</span></td>
            <td>
                <button class="btn btn-outline-navy" style="padding: 4px 8px; font-size: 0.75rem;" onclick="editAdminProp('${p.id}')"><i class="fa-solid fa-pen"></i></button>
                <button class="btn btn-outline-navy" style="padding: 4px 8px; font-size: 0.75rem; color: var(--danger); border-color: var(--danger);" onclick="deleteAdminProp('${p.id}')"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    `).join('');
}

function editAdminProp(propId) {
    const prop = state.properties.find(p => p.id === propId);
    if (!prop) return;

    document.getElementById('admin-edit-id').value = prop.id;
    document.getElementById('admin-title').value = prop.title;
    document.getElementById('admin-price').value = prop.price;
    document.getElementById('admin-location').value = prop.location;
    document.getElementById('admin-type').value = prop.type;
    document.getElementById('admin-purpose').value = prop.purpose;
    document.getElementById('admin-beds').value = prop.bedrooms;
    document.getElementById('admin-baths').value = prop.bathrooms;
    document.getElementById('admin-area').value = prop.area;
    document.getElementById('admin-image').value = prop.image;
    document.getElementById('admin-desc').value = prop.description || '';
    document.getElementById('admin-featured').checked = prop.featured;

    document.querySelector('[data-tab="admin-add-prop"]').click();
}

function deleteAdminProp(propId) {
    if (confirm("Are you sure you want to delete this property listing?")) {
        state.properties = state.properties.filter(p => p.id !== propId);
        state.saveToStorage('ahsan_properties', state.properties);
        renderPropertyList();
        renderAdminPropTable();
        showToast("Property deleted from catalog", "info");
    }
}

function renderAdminInquiriesTable() {
    const tbody = document.getElementById('admin-inquiries-tbody');
    if (!tbody) return;

    if (state.inquiries.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--slate-500);">No customer inquiries recorded yet.</td></tr>`;
        return;
    }

    tbody.innerHTML = state.inquiries.map(inq => `
        <tr>
            <td>${inq.date || 'Recent'}</td>
            <td><strong>${inq.name}</strong></td>
            <td><a href="tel:${inq.phone}">${inq.phone}</a></td>
            <td><a href="mailto:${inq.email}">${inq.email}</a></td>
            <td><span class="badge-status badge-sale">${inq.property || 'General'}</span></td>
            <td>${inq.message}</td>
        </tr>
    `).join('');
}

// ==========================================================================
// 7. LEAFLET MAIN OFFICE MAP (CHUNGI AMAR SIDHU, LAHORE)
// ==========================================================================

function initOfficeMap() {
    const mapContainer = document.getElementById('office-map');
    if (!mapContainer) return;

    // Chungi Amar Sidhu, Lahore coordinates: [31.4647, 74.3486]
    const chungiCoords = [31.4647, 74.3486];

    const map = L.map('office-map').setView(chungiCoords, 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Custom Marker for Ahsan Headquarters
    const marker = L.marker(chungiCoords).addTo(map);
    marker.bindPopup(`
        <div style="text-align: center; font-family: var(--font-heading);">
            <strong style="color: #0b132b; font-size: 1rem;">Ahsan Real Estate Headquarters</strong><br>
            <span style="color: #c5a059; font-weight: 600;">Main Ferozepur Road</span><br>
            Chungi Amar Sidhu, Lahore, Pakistan<br>
            <a href="tel:03207843805" style="color: #0b132b; font-weight: 700;">📞 03207843805</a>
        </div>
    `).openPopup();

    state.officeMap = map;
}

// ==========================================================================
// 8. INITIALIZATION & EVENT LISTENERS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Render Badges & Content
    renderFavoriteBadge();
    renderCompareBadge();
    renderPropertyList();
    renderAgents();
    initMortgageCalculator();
    initAdminPortal();
    initOfficeMap();

    // Sticky Navbar Scroll Listener
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('navbar');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Hamburger Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Hero Search Form Handler
    const heroSearchForm = document.getElementById('hero-search-form');
    if (heroSearchForm) {
        heroSearchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            state.filters.location = document.getElementById('hero-location').value;
            state.filters.priceRange = document.getElementById('hero-price').value;
            state.filters.type = document.getElementById('hero-type').value;
            state.filters.beds = document.getElementById('hero-beds').value;

            // Sync with property filter controls
            document.getElementById('filter-location').value = state.filters.location;
            document.getElementById('filter-type').value = state.filters.type;
            document.getElementById('filter-beds').value = state.filters.beds;

            renderPropertyList();

            // Smooth Scroll to Properties Section
            const propsSec = document.getElementById('properties');
            if (propsSec) propsSec.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Property Filter Panel Controls
    const kwInput = document.getElementById('filter-keyword');
    if (kwInput) {
        kwInput.addEventListener('input', (e) => {
            state.filters.keyword = e.target.value;
            renderPropertyList();
        });
    }

    document.querySelectorAll('.purpose-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.purpose-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            state.filters.purpose = btn.dataset.purpose;
            renderPropertyList();
        });
    });

    const sortSelect = document.getElementById('filter-sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            state.filters.sort = e.target.value;
            renderPropertyList();
        });
    }

    ['filter-location', 'filter-type', 'filter-beds', 'filter-baths'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', () => {
                state.filters.location = document.getElementById('filter-location').value;
                state.filters.type = document.getElementById('filter-type').value;
                state.filters.beds = document.getElementById('filter-beds').value;
                state.filters.baths = document.getElementById('filter-baths').value;
                renderPropertyList();
            });
        }
    });

    // Reset Filters Button
    const clearBtn = document.getElementById('clear-filters-btn');
    const resetSearchBtn = document.getElementById('reset-search-btn');

    function resetFilters() {
        state.filters = { keyword: "", location: "", purpose: "all", type: "", priceRange: "", beds: "", baths: "", sort: "newest" };
        if (kwInput) kwInput.value = "";
        document.getElementById('filter-location').value = "";
        document.getElementById('filter-type').value = "";
        document.getElementById('filter-beds').value = "";
        document.getElementById('filter-baths').value = "";
        document.getElementById('filter-sort').value = "newest";
        document.querySelectorAll('.purpose-btn').forEach(b => b.classList.remove('active'));
        document.querySelector('.purpose-btn[data-purpose="all"]').classList.add('active');
        renderPropertyList();
    }

    if (clearBtn) clearBtn.addEventListener('click', resetFilters);
    if (resetSearchBtn) resetSearchBtn.addEventListener('click', resetFilters);

    // Modal & Drawer Close Event Listeners
    document.getElementById('open-favorites-btn').addEventListener('click', openFavoritesDrawer);
    document.getElementById('close-fav-drawer').addEventListener('click', () => {
        document.getElementById('favorites-drawer').classList.add('hidden');
    });

    document.getElementById('open-compare-btn').addEventListener('click', openCompareModal);
    document.getElementById('close-compare-modal').addEventListener('click', () => {
        document.getElementById('compare-modal').classList.add('hidden');
    });

    document.getElementById('close-prop-modal').addEventListener('click', () => {
        document.getElementById('property-modal').classList.add('hidden');
    });

    // Main Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newInq = {
                date: new Date().toLocaleString(),
                name: document.getElementById('contact-name').value,
                phone: document.getElementById('contact-phone').value,
                email: document.getElementById('contact-email').value,
                property: document.getElementById('contact-property').value,
                message: document.getElementById('contact-message').value
            };

            state.inquiries.unshift(newInq);
            state.saveToStorage('ahsan_inquiries', state.inquiries);
            showToast("Thank you! Your inquiry has been sent to Ahsan Real Estate team.", "success");
            contactForm.reset();
        });
    }

    // Footer Area Links Quick Filter
    document.querySelectorAll('.area-filter-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const area = link.dataset.area;
            state.filters.location = area;
            document.getElementById('filter-location').value = area;
            renderPropertyList();
            document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
        });
    });
});
