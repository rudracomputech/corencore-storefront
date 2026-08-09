/**
 * Core & Core - Mother & Baby Storefront Main Application
 */

import { renderHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderCategories } from './components/Categories.js';
import { renderRoutineQuiz } from './components/RoutineQuiz.js';
import { renderProductGrid } from './components/ProductGrid.js';
import { renderProductModal } from './components/ProductModal.js';
import { renderCartDrawer } from './components/CartDrawer.js';
import { renderSafetyStandards } from './components/SafetyStandards.js';
import { renderReviews } from './components/Reviews.js';
import { renderFooter } from './components/Footer.js';
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

// Fallback initial products (real ShopBase data)
const FALLBACK_PRODUCTS = [
  {
    id: 1000000672062239,
    shopbase_handle: "4-in1-kitchen-colander-with-mixing-bowl-set",
    title: "Organic Nourishing Belly Butter & Stretch Mark Balm",
    handle: "organic-nourishing-belly-butter",
    product_type: "Mother Skin Care",
    category: "mother-care",
    category_label: "Mother Skin Care",
    price: "19.99",
    compare_at_price: "25.99",
    rating: 4.9,
    reviews_count: 248,
    badge: "Bestseller",
    short_description: "Rich organic whipped butter with Shea, Rosehip, and Vitamin E to soothe stretching skin and reduce stretch marks.",
    tags: "mother-care, belly-butter, stretch-marks, organic, prenatal, bestseller",
    image: "https://img.btdmp.com/10687/10687861/products/17856583041b5616c81c.jpeg",
    images: [
      "https://img.btdmp.com/10687/10687861/products/17856583041b5616c81c.jpeg",
      "https://img.btdmp.com/10687/10687861/products/17856583049a756cd193.jpeg"
    ],
    variants: [
      { id: 1000020603308950, title: "1 PC",   price: "19.99", compare_at_price: "25.99" },
      { id: 1000020603308952, title: "2 Pack", price: "35.99", compare_at_price: "46.99" }
    ],
    safety_badges: ["Pediatrician Approved", "Dermatologist Tested", "100% Organic", "Cruelty Free"]
  },
  {
    id: 1000000671550961,
    shopbase_handle: "adjustable-connected-dog-boots-ultimate-paw-protection",
    title: "Pure Botanical Stretch Mark Elasticity Oil",
    handle: "pure-botanical-stretch-mark-oil",
    product_type: "Mother Skin Care",
    category: "mother-care",
    category_label: "Mother Skin Care",
    price: "20.99",
    compare_at_price: "27.29",
    rating: 4.9,
    reviews_count: 184,
    badge: "Award Winner",
    short_description: "Fast-absorbing luxurious botanical blend with Sweet Almond, Jojoba, and Evening Primrose oils for silky soft elasticity.",
    tags: "mother-care, belly-oil, elasticity, stretch-marks, organic",
    image: "https://img.btdmp.com/10687/10687861/products/17852154315d272b4005.jpeg",
    images: [
      "https://img.btdmp.com/10687/10687861/products/17852154315d272b4005.jpeg",
      "https://img.btdmp.com/10687/10687861/products/17852154314903a86d99.png"
    ],
    variants: [
      { id: 1000020590148990, title: "XS", price: "20.99", compare_at_price: "27.29" },
      { id: 1000020590148992, title: "S",  price: "21.99", compare_at_price: "28.59" }
    ],
    safety_badges: ["100% Non-Toxic", "Plant Squalane", "Non-Greasy"]
  },
  {
    id: 1000000672062238,
    shopbase_handle: "automatic-flip-egg-storage-box",
    title: "Organic Nipple & Nursing Soothing Salve",
    handle: "organic-nipple-nursing-salve",
    product_type: "Mother Skin Care",
    category: "mother-care",
    category_label: "Mother Skin Care",
    price: "9.99",
    compare_at_price: "12.99",
    rating: 5.0,
    reviews_count: 312,
    badge: "Hospital Bag Must-Have",
    short_description: "100% Lanolin-Free, food-grade soothing balm for breastfeeding moms. No need to wash off before nursing.",
    tags: "mother-care, nursing, nipple-salve, lanolin-free, organic, hospital-bag",
    image: "https://img.btdmp.com/10687/10687861/products/1785658303b39cbf55b4.jpeg",
    images: [
      "https://img.btdmp.com/10687/10687861/products/1785658303b39cbf55b4.jpeg",
      "https://img.btdmp.com/10687/10687861/products/1785658303ddccfd15cb.jpeg"
    ],
    variants: [
      { id: 1000020603308946, title: "1 PC",   price: "9.99",  compare_at_price: "12.99" },
      { id: 1000020603308947, title: "2 Pack", price: "18.99", compare_at_price: "24.99" }
    ],
    safety_badges: ["100% Ingestion-Safe", "Lanolin Free", "Non-Sticky"]
  },
  {
    id: 1000000672062240,
    shopbase_handle: "heart-beating-and-breathing-routine-soothing-relief-koala",
    title: "Ultra-Gentle 2-in-1 Baby Wash & Tear-Free Shampoo",
    handle: "ultra-gentle-2in1-baby-wash-shampoo",
    product_type: "Baby Care",
    category: "baby-care",
    category_label: "Baby Care",
    price: "22.99",
    compare_at_price: "29.89",
    rating: 5.0,
    reviews_count: 420,
    badge: "#1 Newborn Essential",
    short_description: "Tear-free, pH 5.5 balanced head-to-toe cleanser with Colloidal Oat and Organic Calendula. Safe for sensitive newborn skin.",
    tags: "baby-care, baby-wash, tear-free, shampoo, newborn, eczema-safe, bestseller",
    image: "https://img.btdmp.com/10687/10687861/products/1785658306e53d2f6617.jpeg",
    images: [
      "https://img.btdmp.com/10687/10687861/products/1785658306e53d2f6617.jpeg",
      "https://img.btdmp.com/10687/10687861/products/17856583060ab7195777.png"
    ],
    variants: [
      { id: 1000020603308951, title: "1 PC", price: "22.99", compare_at_price: "29.89" }
    ],
    safety_badges: ["Pediatrician Approved", "Tear-Free Certified", "Eczema Friendly", "Hypoallergenic"]
  },
  {
    id: 1000000672062246,
    shopbase_handle: "lightweight-casual-men-slip-on-shoes",
    title: "Gentle Zinc Barrier Diaper Rash Relief Cream",
    handle: "gentle-zinc-barrier-diaper-rash-cream",
    product_type: "Baby Care",
    category: "baby-care",
    category_label: "Baby Care",
    price: "19.99",
    compare_at_price: "25.99",
    rating: 5.0,
    reviews_count: 360,
    badge: "Instant Relief",
    short_description: "Fast-acting 14% Non-Nano Zinc Oxide barrier paste with organic Shea and Beeswax to seal out wetness.",
    tags: "baby-care, diaper-cream, zinc-oxide, rash-relief, newborn-safe",
    image: "https://img.btdmp.com/10687/10687861/products/1785658325286d9fe49b.jpeg",
    images: [
      "https://img.btdmp.com/10687/10687861/products/1785658325286d9fe49b.jpeg",
      "https://img.btdmp.com/10687/10687861/products/1785658325ba62fb0f90.jpeg"
    ],
    variants: [
      { id: 1000020603309000, title: "S",  price: "19.99", compare_at_price: "25.99" },
      { id: 1000020603309001, title: "M",  price: "19.99", compare_at_price: "25.99" }
    ],
    safety_badges: ["Pediatrician Tested", "Petrolatum Free", "Fast Acting"]
  },
  {
    id: 1000000672062231,
    shopbase_handle: "wing-rails-grill-chicken-wings",
    title: "The Complete New Mother Recovery & Care Kit",
    handle: "complete-new-mother-recovery-care-kit",
    product_type: "Bundles & Gifts",
    category: "bundles",
    category_label: "Prenatal & Postpartum Bundles",
    price: "9.99",
    compare_at_price: "12.99",
    rating: 5.0,
    reviews_count: 210,
    badge: "Best Gift for Mom",
    short_description: "Everything a new mom needs: Nourishing Belly Butter, Elasticity Oil, Nipple Salve, and Calming Bath Salts.",
    tags: "bundles, mother-care, baby-shower, gift-set, postpartum-kit, bestseller",
    image: "https://img.btdmp.com/10687/10687861/products/178565829599e6634c63.png",
    images: [
      "https://img.btdmp.com/10687/10687861/products/178565829599e6634c63.png",
      "https://img.btdmp.com/10687/10687861/products/178565829559290fe615.png"
    ],
    variants: [
      { id: 1000020603308919, title: "Buy 1", price: "9.99", compare_at_price: "12.99" }
    ],
    safety_badges: ["Luxury Gift Packaging", "Save 23% on Bundle", "Midwife Recommended"]
  },
  {
    id: 1000000672062233,
    shopbase_handle: "wire-stripping-tool-wire-twisting-connector-drill-attachmen",
    title: "Welcome Baby Newborn Organic Essentials Set",
    handle: "welcome-baby-newborn-organic-essentials-set",
    product_type: "Bundles & Gifts",
    category: "bundles",
    category_label: "Prenatal & Postpartum Bundles",
    price: "30.99",
    compare_at_price: "40.29",
    rating: 5.0,
    reviews_count: 188,
    badge: "Baby Shower Top Pick",
    short_description: "The complete newborn starter: 2-in-1 Wash, Bedtime Massage Oil, Zinc Diaper Cream, and Bamboo Wipes.",
    tags: "bundles, baby-care, baby-shower, newborn-set, organic-baby",
    image: "https://img.btdmp.com/10687/10687861/products/17856582973dc7398e29.jpeg",
    images: [
      "https://img.btdmp.com/10687/10687861/products/17856582973dc7398e29.jpeg",
      "https://img.btdmp.com/10687/10687861/products/17856582972724c0a2ba.jpeg"
    ],
    variants: [
      { id: 1000020603308938, title: "1 Set", price: "30.99", compare_at_price: "40.29" }
    ],
    safety_badges: ["Organic Cotton Bag", "Save 23% on Bundle", "Pediatrician Tested"]
  }
];;

class App {
  constructor() {
    this.state = {
      products: FALLBACK_PRODUCTS,
      cart: JSON.parse(localStorage.getItem('corencore_cart') || '[]'),
      currency: 'USD',
      activeCategory: 'all',
      searchQuery: '',
      sortBy: 'featured',
      isCartOpen: false,
      appliedPromo: localStorage.getItem('corencore_promo') || '',
      activeModalProduct: null,
      activePageKey: null,
      isAdminHubOpen: false
    };

    this.dom = {
      header: document.getElementById('header-container'),
      hero: document.getElementById('hero-container'),
      trustBar: document.getElementById('trust-bar-container'),
      categories: document.getElementById('categories-container'),
      routineQuiz: document.getElementById('routine-quiz-container'),
      productGrid: document.getElementById('product-grid-container'),
      safetyStandards: document.getElementById('safety-standards-container'),
      reviews: document.getElementById('reviews-container'),
      guideBanner: document.getElementById('guide-banner-container'),
      footer: document.getElementById('footer-container'),
      cartDrawer: document.getElementById('cart-drawer-root'),
      productModal: document.getElementById('product-modal-root'),
      pagesModal: document.getElementById('pages-modal-root'),
      adminHub: document.getElementById('admin-hub-root')
    };

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

  async init() {
    console.log("🌸 Initializing Core & Core Mother & Baby Storefront...");
    await this.fetchProducts();
    this.render();
  }

  async fetchProducts() {
    try {
      const res = await fetch('/api/products');
      if (res.ok) {
        const data = await res.json();
        if (data.products && data.products.length) {
          this.state.products = data.products;
          console.log(`Loaded ${data.products.length} products from backend API`);
        }
      }
    } catch (e) {
      console.warn("Using offline fallback products:", e.message);
    }
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
    renderProductGrid(this.dom.productGrid, this.state, this.actions);
    renderHeader(this.dom.header, this.state, this.actions);
  }

  searchProducts(query) {
    this.state.searchQuery = query;
    renderProductGrid(this.dom.productGrid, this.state, this.actions);
  }

  setSortBy(sortKey) {
    this.state.sortBy = sortKey;
    renderProductGrid(this.dom.productGrid, this.state, this.actions);
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
        shopbaseHandle: product.shopbase_handle || product.handle, // real ShopBase handle for checkout
        title: product.title,
        variantTitle: selectedVariant.title !== 'Standard' ? selectedVariant.title : '',
        price: selectedVariant.price || product.price,
        image: product.image || product.images?.[0],
        quantity
      });
    }

    this.saveCart();
    renderHeader(this.dom.header, this.state, this.actions);
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
    renderHeader(this.dom.header, this.state, this.actions);
    renderCartDrawer(this.dom.cartDrawer, this.state, this.actions);
  }

  removeFromCart(cartItemId) {
    this.state.cart = this.state.cart.filter(i => i.cartItemId !== cartItemId);
    this.saveCart();
    renderHeader(this.dom.header, this.state, this.actions);
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
    
    // PlusBase/ShopBase on this store doesn't support /cart/{variantId}:qty permalink.
    // Instead, redirect to the first product's page with the real ShopBase handle.
    // Cart items store shopbaseHandle (real handle from ShopBase).
    const firstItem = this.state.cart[0];
    
    let checkoutUrl;
    if (firstItem.shopbaseHandle) {
      // Go to product page with the real ShopBase handle
      checkoutUrl = `https://corencore.onshopbase.com/products/${firstItem.shopbaseHandle}`;
    } else if (firstItem.variantId) {
      // Fallback: try variant-based cart URL (works on standard Shopify stores)
      const cartQuery = this.state.cart.map(i => `${i.variantId}:${i.quantity}`).join(',');
      checkoutUrl = `https://corencore.onshopbase.com/cart/${cartQuery}`;
    } else {
      checkoutUrl = `https://corencore.onshopbase.com/collections/all`;
    }
    
    // Open each product page for multi-item carts
    if (this.state.cart.length > 1) {
      this.state.cart.forEach((item, idx) => {
        if (item.shopbaseHandle) {
          const url = `https://corencore.onshopbase.com/products/${item.shopbaseHandle}`;
          if (idx === 0) window.open(url, '_blank');
          else setTimeout(() => window.open(url, '_blank'), idx * 300);
        }
      });
    } else {
      window.open(checkoutUrl, '_blank');
    }
    
    console.log("Opening ShopBase product page(s) for checkout:", checkoutUrl);
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
    renderHeader(this.dom.header, this.state, this.actions);
    renderHero(this.dom.hero, this.dom.trustBar, this.actions);
    renderCategories(this.dom.categories, this.actions);
    renderRoutineQuiz(this.dom.routineQuiz, this.state, this.actions);
    renderProductGrid(this.dom.productGrid, this.state, this.actions);
    renderSafetyStandards(this.dom.safetyStandards);
    renderReviews(this.dom.reviews);
    renderFooter(this.dom.guideBanner, this.dom.footer, this.actions);
    renderCartDrawer(this.dom.cartDrawer, this.state, this.actions);
    renderProductModal(this.dom.productModal, this.state.activeModalProduct, this.state, this.actions);
    renderPagesModal(this.dom.pagesModal, this.state.activePageKey, this.actions);
    renderAdminHub(this.dom.adminHub, this.state, this.actions);
  }
}

// Start application
const app = new App();
document.addEventListener('DOMContentLoaded', () => {
  app.init();
});
