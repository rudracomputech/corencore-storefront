/**
 * Interactive Cart Drawer Component
 */

export function renderCartDrawer(container, state, actions) {
  const isOpen = state.isCartOpen;
  const subtotal = state.cart.reduce((sum, item) => sum + (parseFloat(item.price) * item.quantity), 0);
  
  let discountAmount = 0;
  if (state.appliedPromo === 'MOMCARE15') {
    discountAmount = subtotal * 0.15;
  } else if (state.appliedPromo === 'PUREBABY') {
    discountAmount = Math.min(10, subtotal);
  }

  const finalTotal = Math.max(0, subtotal - discountAmount);

  // Free shipping threshold ($50)
  const freeShippingThreshold = 50;
  const freeShippingProgress = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  container.innerHTML = `
    <!-- Overlay -->
    <div class="cart-overlay ${isOpen ? 'open' : ''}" id="cart-drawer-overlay"></div>

    <!-- Drawer -->
    <div class="cart-drawer ${isOpen ? 'open' : ''}">
      <!-- Header -->
      <div class="cart-header">
        <h3>Shopping Bag (${state.cart.reduce((s, i) => s + i.quantity, 0)})</h3>
        <button class="cart-close-btn" id="cart-close-btn" title="Close Bag">✕</button>
      </div>

      <!-- Free Shipping Tracker -->
      <div class="free-shipping-tracker">
        <div class="free-shipping-text">
          ${remainingForFreeShipping === 0 
            ? '🎉 You have unlocked <strong>FREE Standard Shipping!</strong>' 
            : `Add <strong>${actions.formatPrice(remainingForFreeShipping.toFixed(2))}</strong> more for <strong>FREE Shipping!</strong>`
          }
        </div>
        <div class="free-shipping-bar">
          <div class="free-shipping-fill" style="width: ${freeShippingProgress}%;"></div>
        </div>
      </div>

      <!-- Cart Items -->
      <div class="cart-items-list">
        ${state.cart.length === 0 ? `
          <div class="cart-empty">
            <div class="cart-empty-icon">🛍️</div>
            <h4>Your cart is currently empty</h4>
            <p style="font-size: 0.9rem; margin: 8px 0 20px;">Explore our pure mother and baby formulas to get started.</p>
            <button class="btn-primary" id="cart-start-shopping-btn">Start Shopping</button>
          </div>
        ` : state.cart.map(item => `
          <div class="cart-item" data-item-id="${item.cartItemId}">
            <img src="${item.image}" alt="${item.title}" class="cart-item-img" />
            <div class="cart-item-details">
              <h4 class="cart-item-title">${item.title}</h4>
              ${item.variantTitle ? `<div class="cart-item-variant">${item.variantTitle}</div>` : ''}
              
              <div class="cart-item-bottom">
                <div class="cart-qty-stepper">
                  <button class="qty-btn" data-cart-minus="${item.cartItemId}">-</button>
                  <span class="qty-num">${item.quantity}</span>
                  <button class="qty-btn" data-cart-plus="${item.cartItemId}">+</button>
                </div>

                <div class="cart-item-price">
                  ${actions.formatPrice((parseFloat(item.price) * item.quantity).toFixed(2))}
                </div>
              </div>
            </div>
            <button class="cart-item-remove" data-cart-remove="${item.cartItemId}" style="color: var(--color-text-light); font-size: 0.9rem; margin-left: 6px;" title="Remove">✕</button>
          </div>
        `).join('')}
      </div>

      <!-- Cart Footer -->
      ${state.cart.length > 0 ? `
        <div class="cart-footer">
          <!-- Promo Code -->
          <div class="promo-row">
            <input 
              type="text" 
              class="promo-input" 
              id="promo-code-input" 
              placeholder="Promo Code (e.g. MOMCARE15)" 
              value="${state.appliedPromo || ''}"
            />
            <button class="promo-apply-btn" id="promo-apply-btn">
              ${state.appliedPromo ? 'Applied ✓' : 'Apply'}
            </button>
          </div>

          <!-- Summary -->
          <div class="cart-summary-row">
            <span>Subtotal</span>
            <span>${actions.formatPrice(subtotal.toFixed(2))}</span>
          </div>

          ${discountAmount > 0 ? `
            <div class="cart-summary-row" style="color: var(--color-accent); font-weight: 700;">
              <span>Promo Discount (${state.appliedPromo})</span>
              <span>-${actions.formatPrice(discountAmount.toFixed(2))}</span>
            </div>
          ` : ''}

          <div class="cart-summary-row">
            <span>Estimated Shipping</span>
            <span>${remainingForFreeShipping === 0 ? 'FREE' : actions.formatPrice('4.99')}</span>
          </div>

          <div class="cart-total-row">
            <span>Total</span>
            <span>${actions.formatPrice((finalTotal + (remainingForFreeShipping === 0 ? 0 : 4.99)).toFixed(2))}</span>
          </div>

          <!-- Checkout Action -->
          <button class="checkout-btn" id="cart-checkout-btn">
            <span>🔒 Secure Checkout on ShopBase</span>
            <span>→</span>
          </button>
          
          <div style="text-align: center; margin-top: 10px; font-size: 0.75rem; color: var(--color-text-muted);">
            Guaranteed safe checkout via <strong>PlusBase / ShopBase</strong>
          </div>
        </div>
      ` : ''}
    </div>
  `;

  // Attach Event Listeners
  const overlay = container.querySelector('#cart-drawer-overlay');
  const closeBtn = container.querySelector('#cart-close-btn');

  const closeCart = () => actions.toggleCart(false);

  if (overlay) overlay.addEventListener('click', closeCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);

  const startShopBtn = container.querySelector('#cart-start-shopping-btn');
  if (startShopBtn) {
    startShopBtn.addEventListener('click', () => {
      closeCart();
      const grid = document.getElementById('product-grid-container');
      if (grid) grid.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // Quantity updates
  container.querySelectorAll('[data-cart-minus]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cartItemId = btn.getAttribute('data-cart-minus');
      actions.updateCartQuantity(cartItemId, -1);
    });
  });

  container.querySelectorAll('[data-cart-plus]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cartItemId = btn.getAttribute('data-cart-plus');
      actions.updateCartQuantity(cartItemId, 1);
    });
  });

  container.querySelectorAll('[data-cart-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      const cartItemId = btn.getAttribute('data-cart-remove');
      actions.removeFromCart(cartItemId);
    });
  });

  // Promo Code
  const promoApplyBtn = container.querySelector('#promo-apply-btn');
  const promoInput = container.querySelector('#promo-code-input');
  if (promoApplyBtn && promoInput) {
    promoApplyBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'MOMCARE15' || code === 'PUREBABY') {
        actions.applyPromo(code);
      } else if (code === '') {
        actions.applyPromo('');
      } else {
        alert("Invalid promo code. Try 'MOMCARE15' for 15% off!");
      }
    });
  }

  // Checkout trigger
  const checkoutBtn = container.querySelector('#cart-checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      actions.proceedToCheckout();
    });
  }
}
