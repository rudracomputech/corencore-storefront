/**
 * Core & Core - Mother & Baby Storefront Embed Script
 * Injects and runs the complete 3-Layer Storefront (Header Layer, Body Layer, Footer Layer) directly on corencore.onshopbase.com
 */

import { MOTHER_AND_BABY_PRODUCTS } from '../server/catalog-data.js';
import { renderHeaderLayer } from './layers/HeaderLayer.js';
import { renderBodyLayer } from './layers/BodyLayer.js';
import { renderFooterLayer } from './layers/FooterLayer.js';
import { renderProductModal } from './components/ProductModal.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderPagesModal } from './components/PagesModal.js';
import { renderAdminHub } from './components/AdminHub.js';

// Currency exchange rates
const CURRENCY_RATES = {
  USD: { symbol: '$', rate: 1.0 },
  EUR: { symbol: '€', rate: 0.92 },
  GBP: { symbol: '£', rate: 0.79 },
  INR: { symbol: '₹', rate: 83.5 },
  CAD: { symbol: 'CA$', rate: 1.36 },
  AUD: { symbol: 'AU$', rate: 1.52 }
};

class EmbedApp {
  constructor() {
    this.state = {
      products: MOTHER_AND_BABY_PRODUCTS,
      activeCategory: 'all',
      currency: 'USD',
      searchQuery: '',
      sortBy: 'featured',
      cart: JSON.parse(localStorage.getItem('corencore_cart') || '[]'),
      isCartOpen: false,
      activeModalProduct: null,
      activePageKey: null,
      isAdminHubOpen: false,
      appliedPromo: localStorage.getItem('corencore_promo') || null,
      quizStep: 1,
      quizAnswers: {}
    };

    this.dom = {};
    this.actions = {
      setCurrency: this.setCurrency.bind(this),
      formatPrice: this.formatPrice.bind(this),
      setCategoryFilter: this.setCategoryFilter.bind(this),
      searchProducts: this.searchProducts.bind(this),
      setSortBy: this.setSortBy.bind(this),
      toggleCart: this.toggleCart.bind(this),
      addToCart: this.addToCart.bind(this),
      updateCartQuantity: this.updateCartQuantity.bind(this),
      removeFromCart: this.removeFromCart.bind(this),
      applyPromo: this.applyPromo.bind(this),
      proceedToCheckout: this.proceedToCheckout.bind(this),
      openProductModal: this.openProductModal.bind(this),
      closeProductModal: this.closeProductModal.bind(this),
      openPageModal: this.openPageModal.bind(this),
      closePageModal: this.closePageModal.bind(this),
      openAdminHub: this.openAdminHub.bind(this),
      closeAdminHub: this.closeAdminHub.bind(this)
    };
  }

  init() {
    console.log("🌸 Core & Core 3-Layer Storefront Loaded on Live ShopBase");
    this.bindDom();
    this.render();
  }

  bindDom() {
    this.dom = {
      // 3 Primary Layers
      layerHeader: document.getElementById('layer-header'),
      layerBody: document.getElementById('layer-body'),
      layerFooter: document.getElementById('layer-footer'),

      // Modal Overlays
      cartDrawer: document.getElementById('cart-drawer-root'),
      productModal: document.getElementById('product-modal-root'),
      pagesModal: document.getElementById('pages-modal-root'),
      adminHub: document.getElementById('admin-hub-root')
    };
  }

  setCurrency(currencyCode) {
    this.state.currency = currencyCode;
    this.render();
  }

  formatPrice(usdAmount) {
    const amount = parseFloat(usdAmount) || 0;
    const config = CURRENCY_RATES[this.state.currency] || CURRENCY_RATES.USD;
    const converted = (amount * config.rate).toFixed(2);
    return `${config.symbol}${converted}`;
  }

  setCategoryFilter(category) {
    this.state.activeCategory = category;
    renderBodyLayer(this.dom.layerBody, this.state, this.actions);
    renderHeaderLayer(this.dom.layerHeader, this.state, this.actions);
  }

  searchProducts(query) {
    this.state.searchQuery = query;
    renderBodyLayer(this.dom.layerBody, this.state, this.actions);
  }

  setSortBy(sortKey) {
    this.state.sortBy = sortKey;
    renderBodyLayer(this.dom.layerBody, this.state, this.actions);
  }

  toggleCart(isOpen) {
    this.state.isCartOpen = isOpen;
    renderCartDrawer(this.dom.cartDrawer, this.state, this.actions);
  }

  addToCart(product, quantity = 1, variant = null) {
    const selectedVariant = variant || product.variants?.[0] || { id: 1, title: 'Standard', price: product.price };
    const cartItemId = `${product.id}-${selectedVariant.id}`;
    
    const existingIndex = this.state.cart.findIndex(item => item.cartItemId === cartItemId);
    if (existingIndex > -1) {
      this.state.cart[existingIndex].quantity += quantity;
    } else {
      this.state.cart.push({
        cartItemId,
        id: product.id,
        variantId: selectedVariant.id,
        shopbaseHandle: product.shopbase_handle || product.handle,
        title: product.title,
        variantTitle: selectedVariant.title !== 'Standard' && selectedVariant.title !== '1 PC' ? selectedVariant.title : '',
        price: selectedVariant.price || product.price,
        image: product.image || product.images?.[0],
        quantity
      });
    }

    this.saveCart();
    renderHeaderLayer(this.dom.layerHeader, this.state, this.actions);
    renderCartDrawer(this.dom.cartDrawer, this.state, this.actions);
  }

  updateCartQuantity(cartItemId, delta) {
    const item = this.state.cart.find(i => i.cartItemId === cartItemId);
    if (item) {
      item.quantity += delta;
      if (item.quantity <= 0) {
        this.removeFromCart(cartItemId);
        return;
      }
    }
    this.saveCart();
    renderHeaderLayer(this.dom.layerHeader, this.state, this.actions);
    renderCartDrawer(this.dom.cartDrawer, this.state, this.actions);
  }

  removeFromCart(cartItemId) {
    this.state.cart = this.state.cart.filter(i => i.cartItemId !== cartItemId);
    this.saveCart();
    renderHeaderLayer(this.dom.layerHeader, this.state, this.actions);
    renderCartDrawer(this.dom.cartDrawer, this.state, this.actions);
  }

  saveCart() {
    localStorage.setItem('corencore_cart', JSON.stringify(this.state.cart));
  }

  applyPromo(code) {
    this.state.appliedPromo = code;
    localStorage.setItem('corencore_promo', code);
    renderCartDrawer(this.dom.cartDrawer, this.state, this.actions);
  }

  proceedToCheckout() {
    if (!this.state.cart.length) return;
    
    const firstItem = this.state.cart[0];
    const handle = firstItem.shopbaseHandle || firstItem.handle;
    
    if (handle) {
      window.location.href = `/products/${handle}`;
    } else {
      window.location.href = `/collections/all`;
    }
  }

  openProductModal(product) {
    this.state.activeModalProduct = product;
    renderProductModal(this.dom.productModal, product, this.state, this.actions);
  }

  closeProductModal() {
    this.state.activeModalProduct = null;
    renderProductModal(this.dom.productModal, null, this.state, this.actions);
  }

  openPageModal(pageKey) {
    this.state.activePageKey = pageKey;
    renderPagesModal(this.dom.pagesModal, pageKey, this.actions);
  }

  closePageModal() {
    this.state.activePageKey = null;
    renderPagesModal(this.dom.pagesModal, null, this.actions);
  }

  openAdminHub() {
    this.state.isAdminHubOpen = true;
    renderAdminHub(this.dom.adminHub, this.state, this.actions);
  }

  closeAdminHub() {
    this.state.isAdminHubOpen = false;
    renderAdminHub(this.dom.adminHub, this.state, this.actions);
  }

  render() {
    // 1. Render Layer 1: Header Layer
    renderHeaderLayer(this.dom.layerHeader, this.state, this.actions);

    // 2. Render Layer 2: Body Layer
    renderBodyLayer(this.dom.layerBody, this.state, this.actions);

    // 3. Render Layer 3: Footer Layer
    renderFooterLayer(this.dom.layerFooter, this.state, this.actions);

    // 4. Render Modals & Drawers Overlays
    renderCartDrawer(this.dom.cartDrawer, this.state, this.actions);
    renderProductModal(this.dom.productModal, this.state.activeModalProduct, this.state, this.actions);
    renderPagesModal(this.dom.pagesModal, this.state.activePageKey, this.actions);
    renderAdminHub(this.dom.adminHub, this.state, this.actions);
  }
}

// Check if we should mount on this page
function isHomepage() {
  const path = window.location.pathname.toLowerCase().trim();
  return path === '/' || path === '' || path === '/index.html';
}

function cleanupDefaultThemeElements() {
  if (!isHomepage()) return;

  // 1. Inject global cleanup style to permanently suppress the default ShopBase Web Builder theme
  if (!document.getElementById('corencore-hide-default')) {
    const hideStyles = document.createElement('style');
    hideStyles.id = 'corencore-hide-default';
    hideStyles.textContent = `
      /* Completely hide default ShopBase Web Builder App and theme elements on Homepage */
      #app,
      .default-layout,
      #wb-main,
      .wb-builder,
      .block-footer,
      footer[role="contentinfo"],
      body > footer:not(#layer-footer):not(#layer-footer *),
      body > header:not(#layer-header):not(#layer-header *),
      body > main:not(#layer-body):not(#layer-body *),
      body > div:not(#corencore-storefront-root):not(#cart-drawer-root):not(#product-modal-root):not(#pages-modal-root):not(#admin-hub-root) {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        overflow: hidden !important;
        opacity: 0 !important;
        pointer-events: none !important;
      }

      /* Ensure our 3-Layer Storefront is the single visible root */
      #corencore-storefront-root {
        display: block !important;
        visibility: visible !important;
        opacity: 1 !important;
        position: relative !important;
        width: 100% !important;
      }
    `;
    document.head.appendChild(hideStyles);
  }

  // 2. Hide any existing DOM elements directly
  const appEl = document.getElementById('app');
  if (appEl) {
    appEl.style.display = 'none';
  }

  // 3. Hide any stray footers or headers outside our storefront
  document.querySelectorAll('footer:not(#layer-footer), header:not(#layer-header), .block-footer, footer[role="contentinfo"]').forEach(el => {
    if (!el.closest('#corencore-storefront-root')) {
      el.style.display = 'none';
    }
  });
}

let isStorefrontMounted = false;

function mountStorefront() {
  if (!isHomepage()) return;

  // Run cleanup first
  cleanupDefaultThemeElements();

  if (isStorefrontMounted && document.getElementById('corencore-storefront-root')) return;

  // 1. Inject Google Fonts
  if (!document.getElementById('corencore-fonts')) {
    const fontLink = document.createElement('link');
    fontLink.id = 'corencore-fonts';
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..800;1,400..800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap';
    document.head.appendChild(fontLink);
  }

  // 2. Set Page Title & Meta
  document.title = "Core & Core — Pure Mother & Baby Care";

  // 3. Inject 3-Layer Root Markup at the top of body
  let root = document.getElementById('corencore-storefront-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'corencore-storefront-root';
    root.className = 'storefront-layers-wrapper';

    root.innerHTML = `
      <!-- LAYER 1: Header Layer -->
      <header id="layer-header" class="storefront-layer layer-header" data-layer="header"></header>

      <!-- LAYER 2: Body Layer -->
      <main id="layer-body" class="storefront-layer layer-body" data-layer="body"></main>

      <!-- LAYER 3: Footer Layer -->
      <footer id="layer-footer" class="storefront-layer layer-footer" data-layer="footer"></footer>

      <!-- Modals & Drawers Layer Overlay -->
      <div id="cart-drawer-root"></div>
      <div id="product-modal-root"></div>
      <div id="pages-modal-root"></div>
      <div id="admin-hub-root"></div>
    `;

    // Prepend to body so it is always the first child at the top
    document.body.prepend(root);
  }

  // 4. Initialize the Storefront App
  const app = new EmbedApp();
  app.init();
  isStorefrontMounted = true;

  // Run cleanup again after mount
  cleanupDefaultThemeElements();
}

// Continuous check for SPA hydration and DOM mutations
function initStorefront() {
  cleanupDefaultThemeElements();
  mountStorefront();

  setTimeout(() => { cleanupDefaultThemeElements(); mountStorefront(); }, 300);
  setTimeout(() => { cleanupDefaultThemeElements(); mountStorefront(); }, 800);
  setTimeout(() => { cleanupDefaultThemeElements(); mountStorefront(); }, 2000);

  window.addEventListener('popstate', () => { cleanupDefaultThemeElements(); mountStorefront(); });
  window.addEventListener('hashchange', () => { cleanupDefaultThemeElements(); mountStorefront(); });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initStorefront);
} else {
  initStorefront();
}

export { EmbedApp, mountStorefront };
