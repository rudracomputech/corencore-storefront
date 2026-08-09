/**
 * Header & Navigation Component
 */

export function renderHeader(container, state, actions) {
  const currencies = [
    { code: 'USD', symbol: '$', rate: 1.0 },
    { code: 'EUR', symbol: '€', rate: 0.92 },
    { code: 'GBP', symbol: '£', rate: 0.79 },
    { code: 'INR', symbol: '₹', rate: 83.5 },
    { code: 'CAD', symbol: 'CA$', rate: 1.36 },
    { code: 'AUD', symbol: 'AU$', rate: 1.52 }
  ];

  const totalCartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  container.innerHTML = `
    <!-- Top Announcement Bar -->
    <div class="announcement-bar">
      <div class="container announcement-content">
        <span class="announcement-highlight">Exclusive</span>
        <span>🌿 Free Hospital Bag Essentials Sample Kit on orders over $50 | Use code <strong>MOMCARE15</strong> for 15% OFF</span>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <div class="main-header">
      <div class="container header-inner">
        <!-- Logo -->
        <a href="#" class="brand-logo" id="logo-home-btn">
          <div class="brand-logo-icon">🌿</div>
          <div class="brand-title-wrap">
            <span style="line-height: 1.1; display: block;">Core & Core</span>
            <span class="brand-subtitle">Pure Mother & Baby Care</span>
          </div>
        </a>

        <!-- Nav Items -->
        <ul class="nav-links">
          <li class="nav-item"><a href="#categories-container" data-nav="categories">Categories</a></li>
          <li class="nav-item"><a href="#product-grid-container" data-nav="mother" data-filter="mother-care">Mother Care</a></li>
          <li class="nav-item"><a href="#product-grid-container" data-nav="baby" data-filter="baby-care">Baby Care</a></li>
          <li class="nav-item"><a href="#product-grid-container" data-nav="bundles" data-filter="bundles">Bundles & Gifts</a></li>
          <li class="nav-item"><a href="#routine-quiz-container" data-nav="quiz" style="color: var(--color-accent); font-weight: 700;">✨ Routine Finder</a></li>
          <li class="nav-item"><a href="#safety-standards-container" data-nav="safety">Clean Standards</a></li>
        </ul>

        <!-- Right Header Actions -->
        <div class="header-actions">
          <!-- Currency Dropdown -->
          <select class="currency-select" id="currency-switcher">
            ${currencies.map(c => `
              <option value="${c.code}" ${state.currency === c.code ? 'selected' : ''}>
                ${c.code} (${c.symbol})
              </option>
            `).join('')}
          </select>

          <!-- Search Button -->
          <button class="search-button" id="header-search-btn" title="Search Products">
            <span>🔍</span>
            <span style="display: none;">Search</span>
          </button>

          <!-- Live ShopBase Sync Admin Hub -->
          <button class="admin-btn" id="open-admin-hub-btn" title="ShopBase Store Sync & API Status">
            <span>⚙️</span>
            <span>ShopBase API</span>
          </button>

          <!-- Cart Drawer Trigger -->
          <button class="cart-trigger" id="cart-drawer-toggle-btn" aria-label="View Shopping Cart">
            <span>🛒</span>
            <span>Cart</span>
            <span class="cart-badge" id="cart-counter-badge">${totalCartCount}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  // Attach Event Listeners
  const currencySwitcher = container.querySelector('#currency-switcher');
  currencySwitcher.addEventListener('change', (e) => {
    actions.setCurrency(e.target.value);
  });

  const cartToggleBtn = container.querySelector('#cart-drawer-toggle-btn');
  cartToggleBtn.addEventListener('click', () => {
    actions.toggleCart(true);
  });

  const adminHubBtn = container.querySelector('#open-admin-hub-btn');
  adminHubBtn.addEventListener('click', () => {
    actions.openAdminHub();
  });

  const searchBtn = container.querySelector('#header-search-btn');
  searchBtn.addEventListener('click', () => {
    const query = prompt("Search Mother & Baby products (e.g. belly butter, baby wash, lavender, diaper cream):");
    if (query !== null) {
      actions.searchProducts(query);
      const grid = document.getElementById('product-grid-container');
      if (grid) grid.scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Nav filter links
  container.querySelectorAll('[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.getAttribute('data-filter');
      actions.setCategoryFilter(filter);
      const grid = document.getElementById('product-grid-container');
      if (grid) grid.scrollIntoView({ behavior: 'smooth' });
    });
  });

  container.querySelector('#logo-home-btn').addEventListener('click', (e) => {
    e.preventDefault();
    actions.setCategoryFilter('all');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
