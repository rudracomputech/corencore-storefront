/**
 * Product Catalog Grid & Filtering Component
 */

export function renderProductGrid(container, state, actions) {
  const tabs = [
    { id: 'all', label: 'All Products (18)' },
    { id: 'mother-care', label: 'Mother Skin Care' },
    { id: 'baby-care', label: 'Baby Care' },
    { id: 'bundles', label: 'Bundles & Gift Sets' }
  ];

  let filtered = [...state.products];

  // Category filter
  if (state.activeCategory && state.activeCategory !== 'all') {
    filtered = filtered.filter(p => p.category === state.activeCategory);
  }

  // Search filter
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.tags.toLowerCase().includes(q) || 
      p.short_description.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (state.sortBy === 'price-low') {
    filtered.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  } else if (state.sortBy === 'price-high') {
    filtered.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  } else if (state.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  container.innerHTML = `
    <div class="product-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Pure Formulas</span>
          <h2 class="section-title">The Complete Mother & Baby Collection</h2>
          <p class="section-subtitle">
            Every bottle is crafted with certified biocompatible botanical ingredients, dermatologist-tested for ultimate peace of mind.
          </p>
        </div>

        <!-- Filter Controls -->
        <div class="filter-controls">
          <div class="filter-tabs">
            ${tabs.map(tab => `
              <button class="filter-tab ${state.activeCategory === tab.id ? 'active' : ''}" data-tab="${tab.id}">
                ${tab.label}
              </button>
            `).join('')}
          </div>

          <div style="display: flex; align-items: center; gap: 12px;">
            ${state.searchQuery ? `
              <div style="font-size: 0.85rem; background: var(--color-primary-light); color: var(--color-primary); padding: 6px 14px; border-radius: var(--radius-full); display: flex; align-items: center; gap: 6px;">
                <span>Search: "<strong>${state.searchQuery}</strong>"</span>
                <button id="clear-search-btn" style="color: var(--color-primary); font-weight: 800; font-size: 1rem;">✕</button>
              </div>
            ` : ''}

            <select class="sort-select" id="product-sort-select">
              <option value="featured" ${state.sortBy === 'featured' ? 'selected' : ''}>Featured & Best Selling</option>
              <option value="price-low" ${state.sortBy === 'price-low' ? 'selected' : ''}>Price: Low to High</option>
              <option value="price-high" ${state.sortBy === 'price-high' ? 'selected' : ''}>Price: High to Low</option>
              <option value="rating" ${state.sortBy === 'rating' ? 'selected' : ''}>Highest Customer Rating</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        ${filtered.length === 0 ? `
          <div style="text-align: center; padding: 60px; background: var(--bg-surface); border-radius: var(--radius-lg);">
            <h3>No products found</h3>
            <p style="color: var(--color-text-muted); margin-top: 8px;">Try a different search term or category tab.</p>
            <button class="btn-primary" id="reset-filter-btn" style="margin-top: 20px;">View All Products</button>
          </div>
        ` : `
          <div class="products-grid">
            ${filtered.map(product => {
              const mainImg = product.image || product.images?.[0];
              const hoverImg = product.images?.[1] || mainImg;
              return `
                <div class="product-card" data-product-id="${product.id}">
                  <div class="product-image-box">
                    <img 
                      src="${mainImg}" 
                      alt="${product.title}" 
                      class="product-img" 
                      loading="lazy" 
                      data-main="${mainImg}"
                      data-hover="${hoverImg}"
                      onerror="this.src='https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80'"
                    />
                    ${product.badge ? `
                      <span class="product-badge ${product.badge.toLowerCase().includes('bestseller') ? 'bestseller' : ''} ${product.badge.toLowerCase().includes('newborn') ? 'newborn' : ''}">
                        ${product.badge}
                      </span>
                    ` : ''}
                    <button class="quick-view-btn" data-quickview="${product.id}">
                      👁 Quick View
                    </button>
                  </div>

                  <div class="product-content">
                    <span class="product-category-tag">${product.category_label || product.product_type}</span>
                    <h3 class="product-title" title="${product.title}">${product.title}</h3>
                    
                    <div class="product-ratings">
                      <span class="stars">★★★★★</span>
                      <span style="font-weight: 700; font-size: 0.85rem; color: var(--color-text-main);">${product.rating}</span>
                      <span class="reviews-num">(${product.reviews_count})</span>
                    </div>

                    <div class="product-price-row">
                      <span class="product-price">${actions.formatPrice(product.price)}</span>
                      ${product.compare_at_price ? `
                        <span class="product-compare-price">${actions.formatPrice(product.compare_at_price)}</span>
                      ` : ''}
                    </div>

                    <button class="product-add-btn" data-add-to-cart="${product.id}">
                      <span>🛒 Add to Cart</span>
                    </button>
                    ${product.shopbase_handle ? `
                      <a href="https://corencore.onshopbase.com/products/${product.shopbase_handle}" 
                         target="_blank" 
                         class="shopbase-buy-link" 
                         onclick="event.stopPropagation()">
                        🛍 Buy on Store →
                      </a>
                    ` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `}
      </div>
    </div>
  `;

  // Attach filter tab handlers
  container.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      actions.setCategoryFilter(tabId);
    });
  });

  // Sort handler
  const sortSelect = container.querySelector('#product-sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      actions.setSortBy(e.target.value);
    });
  }

  // Clear search
  const clearSearchBtn = container.querySelector('#clear-search-btn');
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      actions.searchProducts('');
    });
  }

  const resetFilterBtn = container.querySelector('#reset-filter-btn');
  if (resetFilterBtn) {
    resetFilterBtn.addEventListener('click', () => {
      actions.setCategoryFilter('all');
      actions.searchProducts('');
    });
  }

  // Quick View triggers
  container.querySelectorAll('[data-quickview]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute('data-quickview');
      const prod = state.products.find(p => String(p.id) === String(prodId));
      if (prod) actions.openProductModal(prod);
    });
  });

  // Card click triggers quick view
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('[data-add-to-cart]')) return;
      const prodId = card.getAttribute('data-product-id');
      const prod = state.products.find(p => String(p.id) === String(prodId));
      if (prod) actions.openProductModal(prod);
    });
  });

  // Image hover swap
  container.querySelectorAll('.product-image-box').forEach(box => {
    const img = box.querySelector('.product-img');
    const main = img.getAttribute('data-main');
    const hover = img.getAttribute('data-hover');
    if (hover && hover !== main) {
      box.addEventListener('mouseenter', () => { img.src = hover; });
      box.addEventListener('mouseleave', () => { img.src = main; });
    }
  });

  // Add to cart triggers
  container.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.getAttribute('data-add-to-cart');
      const prod = state.products.find(p => String(p.id) === String(prodId));
      if (prod) {
        actions.addToCart(prod, 1);
        actions.toggleCart(true);
      }
    });
  });
}
