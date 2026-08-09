/**
 * Product Quick-View & Detail Modal Component
 */

export function renderProductModal(container, product, state, actions) {
  if (!product) {
    container.innerHTML = '';
    return;
  }

  let selectedVariant = product.variants?.[0] || { id: 1, title: 'Standard', price: product.price };
  let quantity = 1;
  let currentImage = product.image || product.images?.[0];

  function updateModal() {
    container.innerHTML = `
      <div class="modal-overlay open" id="product-modal-overlay">
        <div class="modal-box">
          <button class="modal-close-btn" id="modal-close-btn" title="Close Modal">✕</button>

          <div class="quickview-grid">
            <!-- Gallery -->
            <div class="quickview-gallery">
              <img src="${currentImage}" alt="${product.title}" class="quickview-main-img" id="quickview-active-img" />
              ${product.images && product.images.length > 1 ? `
                <div class="quickview-thumbnails">
                  ${product.images.map(imgUrl => `
                    <img 
                      src="${imgUrl}" 
                      alt="Thumbnail" 
                      class="thumb-img ${imgUrl === currentImage ? 'active' : ''}" 
                      data-src="${imgUrl}"
                    />
                  `).join('')}
                </div>
              ` : ''}
            </div>

            <!-- Info & Actions -->
            <div class="quickview-info">
              <span class="product-category-tag">${product.category_label || product.product_type}</span>
              <h2 class="quickview-title">${product.title}</h2>

              <div class="product-ratings" style="margin-bottom: 16px;">
                <span class="stars">★★★★★</span>
                <span style="font-weight: 700; color: var(--color-text-main);">${product.rating}</span>
                <span class="reviews-num">(${product.reviews_count} Verified Mama Reviews)</span>
              </div>

              <div class="quickview-price-box">
                <span class="quickview-price">${actions.formatPrice(selectedVariant.price || product.price)}</span>
                ${product.compare_at_price ? `
                  <span class="quickview-compare-price">${actions.formatPrice(selectedVariant.compare_at_price || product.compare_at_price)}</span>
                ` : ''}
              </div>

              <p style="color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
                ${product.short_description}
              </p>

              <!-- Variant Selector -->
              ${product.variants && product.variants.length > 1 ? `
                <div class="variant-options-group">
                  <span class="variant-label">Select Size / Bundle:</span>
                  <div class="variant-chips">
                    ${product.variants.map(v => `
                      <button 
                        class="variant-chip ${v.id === selectedVariant.id ? 'selected' : ''}" 
                        data-variant-id="${v.id}"
                      >
                        ${v.title} — ${actions.formatPrice(v.price)}
                      </button>
                    `).join('')}
                  </div>
                </div>
              ` : ''}

              <!-- Quantity & Add to Cart -->
              <div style="display: flex; gap: 14px; align-items: center; margin: 24px 0;">
                <div class="cart-qty-stepper" style="padding: 4px;">
                  <button class="qty-btn" id="modal-qty-minus">-</button>
                  <span class="qty-num" id="modal-qty-val">${quantity}</span>
                  <button class="qty-btn" id="modal-qty-plus">+</button>
                </div>

                <button class="btn-primary" id="modal-add-cart-btn" style="flex-grow: 1;">
                  <span>🛒 Add to Cart • ${actions.formatPrice((parseFloat(selectedVariant.price || product.price) * quantity).toFixed(2))}</span>
                </button>
              </div>

              <!-- Safety Badges -->
              <div style="background: var(--bg-surface-secondary); padding: 16px; border-radius: var(--radius-md); margin-top: auto;">
                <h5 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--color-accent); margin-bottom: 8px;">
                  🌿 Safety Guarantee:
                </h5>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${(product.safety_badges || ["Dermatologist Tested", "100% Organic", "Pediatrician Approved"]).map(badge => `
                    <span style="font-size: 0.8rem; background: #fff; padding: 4px 10px; border-radius: var(--radius-full); font-weight: 600; color: var(--color-text-main); border: 1px solid var(--color-border);">
                      ✓ ${badge}
                    </span>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Attach events
    const overlay = container.querySelector('#product-modal-overlay');
    const closeBtn = container.querySelector('#modal-close-btn');

    const closeModal = () => {
      actions.closeProductModal();
    };

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeModal();
    });

    // Thumbnails click
    container.querySelectorAll('.thumb-img').forEach(t => {
      t.addEventListener('click', () => {
        currentImage = t.getAttribute('data-src');
        updateModal();
      });
    });

    // Variant chips
    container.querySelectorAll('.variant-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const vId = parseInt(chip.getAttribute('data-variant-id'));
        selectedVariant = product.variants.find(v => v.id === vId) || selectedVariant;
        updateModal();
      });
    });

    // Quantity buttons
    container.querySelector('#modal-qty-minus').addEventListener('click', () => {
      if (quantity > 1) {
        quantity--;
        updateModal();
      }
    });

    container.querySelector('#modal-qty-plus').addEventListener('click', () => {
      quantity++;
      updateModal();
    });

    // Add to cart
    container.querySelector('#modal-add-cart-btn').addEventListener('click', () => {
      actions.addToCart(product, quantity, selectedVariant);
      actions.closeProductModal();
      actions.toggleCart(true);
    });
  }

  updateModal();
}
