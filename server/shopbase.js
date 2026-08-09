const https = require('https');
require('dotenv').config();
const { MOTHER_AND_BABY_PRODUCTS } = require('./catalog-data');

const API_KEY = process.env.SHOPBASE_API_KEY || '720d0d11e2aca672aafbbfe639931ba5';
const PASSWORD = process.env.SHOPBASE_PASSWORD || '67086e36805d43b5d7edddc780ef1deb1dca8f1297d32e4d775b23b627de2a43';
const DOMAIN = process.env.SHOPBASE_DOMAIN || 'corencore.onshopbase.com';

function shopbaseRequest(path, method = 'GET', body = null) {
  return new Promise((resolve, reject) => {
    const authHeader = 'Basic ' + Buffer.from(`${API_KEY}:${PASSWORD}`).toString('base64');
    const options = {
      hostname: DOMAIN,
      path: path,
      method: method,
      headers: {
        'Authorization': authHeader,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      let responseBody = '';
      res.on('data', chunk => responseBody += chunk);
      res.on('end', () => {
        try {
          const parsed = JSON.parse(responseBody);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, raw: responseBody });
        }
      });
    });

    req.on('error', (err) => {
      console.error(`[ShopBase API Error] ${method} ${path}:`, err.message);
      reject(err);
    });

    if (body) {
      req.write(typeof body === 'string' ? body : JSON.stringify(body));
    }
    req.end();
  });
}

/**
 * Fetch Shop Details
 */
async function getShopInfo() {
  const res = await shopbaseRequest('/admin/shop.json');
  return res.data?.shop || null;
}

/**
 * Fetch All Products from ShopBase
 */
async function getProducts(limit = 50) {
  const res = await shopbaseRequest(`/admin/products.json?limit=${limit}`);
  return res.data?.products || [];
}

/**
 * Update a specific product on ShopBase
 */
async function updateProduct(id, productData) {
  const res = await shopbaseRequest(`/admin/products/${id}.json`, 'PUT', {
    product: productData
  });
  return res;
}

/**
 * Sync entire Mother & Baby catalog to ShopBase
 */
async function syncMotherAndBabyCatalog() {
  const results = [];
  console.log(`Starting catalog sync for ${MOTHER_AND_BABY_PRODUCTS.length} products to ${DOMAIN}...`);

  for (const item of MOTHER_AND_BABY_PRODUCTS) {
    try {
      const payload = {
        id: item.id,
        title: item.title,
        body_html: item.body_html,
        product_type: item.product_type,
        tags: item.tags,
        vendor: "Core & Core Pure Care"
      };

      const res = await updateProduct(item.id, payload);
      results.push({
        id: item.id,
        title: item.title,
        status: res.status,
        success: res.status === 200
      });
      console.log(`Synced product [${item.id}] ${item.title}: HTTP ${res.status}`);
      // Small pause to avoid rate limits
      await new Promise(r => setTimeout(r, 250));
    } catch (err) {
      results.push({
        id: item.id,
        title: item.title,
        error: err.message,
        success: false
      });
    }
  }

  return results;
}

/**
 * Fetch Pages
 */
async function getPages() {
  const res = await shopbaseRequest('/admin/pages.json');
  return res.data?.pages || [];
}

/**
 * Create or Update Page
 */
async function createOrUpdatePage(title, body_html, handle = '') {
  const pages = await getPages();
  const existing = pages.find(p => p.title.toLowerCase() === title.toLowerCase() || (handle && p.handle === handle));
  
  if (existing) {
    const res = await shopbaseRequest(`/admin/pages/${existing.id}.json`, 'PUT', {
      page: { id: existing.id, title, body_html, published: true }
    });
    return { action: 'updated', page: res.data?.page };
  } else {
    const res = await shopbaseRequest('/admin/pages.json', 'POST', {
      page: { title, body_html, published: true, handle }
    });
    return { action: 'created', page: res.data?.page };
  }
}

async function getThemes() {
  const res = await shopbaseRequest('/admin/themes.json');
  // ShopBase returns themes under `shop_themes` (and marks the active one with `active: true`)
  const themes = res.data?.shop_themes || res.data?.themes || [];
  return themes;
}

async function getPublishedTheme() {
  const themes = await getThemes();
  return themes.find(theme => theme.active === true || theme.role === 'main' || theme.published) || themes[0] || null;
}

async function updateThemeAsset(themeId, asset) {
  const res = await shopbaseRequest(`/admin/themes/${themeId}/assets.json`, 'PUT', { asset });
  return res;
}

const HOMEPAGE_SECTION_TEMPLATE = `
{% schema %}{
  "name": "Corencore Homepage",
  "settings": [],
  "blocks": [],
  "presets": [
    {
      "name": "Corencore Homepage"
    }
  ]
}{% endschema %}

<section class="corencore-homepage">
  <div class="announcement-bar">
    <div class="container announcement-content">
      <span class="announcement-highlight">Exclusive</span>
      <span>🌿 Free Hospital Bag Essentials Sample Kit on orders over $50 | Use code <strong>MOMCARE15</strong> for 15% OFF</span>
    </div>
  </div>

  <div class="main-header">
    <div class="container header-inner">
      <a href="/" class="brand-logo">
        <div class="brand-logo-icon">🌿</div>
        <div class="brand-title-wrap">
          <span style="line-height: 1.1; display: block;">Core & Core</span>
          <span class="brand-subtitle">Pure Mother & Baby Care</span>
        </div>
      </a>

      <ul class="nav-links">
        <li class="nav-item"><a href="#categories">Categories</a></li>
        <li class="nav-item"><a href="#products">Mother Care</a></li>
        <li class="nav-item"><a href="#products">Baby Care</a></li>
        <li class="nav-item"><a href="#products">Bundles & Gifts</a></li>
        <li class="nav-item"><a href="#routine">✨ Routine Finder</a></li>
        <li class="nav-item"><a href="#safety">Clean Standards</a></li>
      </ul>

      <div class="header-actions">
        <select class="currency-select">
          <option>USD ($)</option>
          <option>EUR (€)</option>
          <option>INR (₹)</option>
        </select>
        <button class="search-button">🔍 Search</button>
        <button class="cart-trigger">🛒 Cart</button>
      </div>
    </div>
  </div>

  <section class="hero-section" id="hero">
    <div class="container hero-grid">
      <div class="hero-text-col">
        <div class="hero-tag">✨ Certified Pure & Clean Formulations</div>
        <h1 class="hero-title">Gentle Care for <span>Mother's Glow</span> & Baby's Delicate Skin.</h1>
        <p class="hero-desc">Scientifically crafted with cold-pressed organic botanicals and zero harsh chemicals. Pediatrician-approved, hypoallergenic solutions supporting prenatal wellness, postpartum recovery, and tender infant skin.</p>
        <div class="hero-buttons">
          <a href="#products" class="btn-primary">🌸 Shop Mother Care</a>
          <a href="#products" class="btn-secondary">👶 Shop Baby Essentials</a>
          <a href="#routine" class="btn-quiz">✨ Find Your Routine</a>
        </div>
        <div class="hero-stats">
          <div class="stat-item">
            <h4>100%</h4>
            <p>Organic Botanicals</p>
          </div>
          <div class="stat-item">
            <h4>4.9 ★</h4>
            <p>2,500+ Verified Moms</p>
          </div>
          <div class="stat-item">
            <h4>0%</h4>
            <p>Parabens & Toxins</p>
          </div>
        </div>
      </div>
      <div class="hero-image-wrapper">
        <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=80" alt="Mother and newborn baby skin to skin pure care" class="hero-main-img" />
        <div class="hero-floating-card">
          <div class="floating-icon">🌿</div>
          <div class="floating-text">
            <h5>Hospital Bag Must-Have</h5>
            <p>100% Ingestion-Safe Salve & Soothing Belly Oil</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="trust-bar">
    <div class="container trust-grid">
      <div class="trust-item">
        <div class="trust-icon">🩺</div>
        <div class="trust-text">
          <h4>Pediatrician Approved</h4>
          <p>Clinically tested for newborn skin</p>
        </div>
      </div>
      <div class="trust-item">
        <div class="trust-icon">🌱</div>
        <div class="trust-text">
          <h4>100% Clean & Non-Toxic</h4>
          <p>Zero parabens, sulfates, or dyes</p>
        </div>
      </div>
      <div class="trust-item">
        <div class="trust-icon">📦</div>
        <div class="trust-text">
          <h4>Free Shipping Over $50</h4>
          <p>Fast doorstep delivery with tracking</p>
        </div>
      </div>
      <div class="trust-item">
        <div class="trust-icon">💖</div>
        <div class="trust-text">
          <h4>30-Day Mama Guarantee</h4>
          <p>Love it or 100% money back</p>
        </div>
      </div>
    </div>
  </section>

  <section class="categories-section" id="categories">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Pure Collections</span>
        <h2 class="section-title">Formulated for Every Stage of Motherhood</h2>
        <p class="section-subtitle">From the first flutter to newborn cuddles and beyond, discover clean formulas crafted with dermatological precision.</p>
      </div>
      <div class="categories-grid">
        <div class="category-card">
          <img src="https://images.unsplash.com/photo-1608248597359-0098f986422d?auto=format&fit=crop&w=900&q=80" alt="Mother Skin Care" class="category-img" />
          <div class="category-overlay">
            <span class="category-count">7 Botanical Formulas</span>
            <h3 class="category-name">Mother Skin Care</h3>
            <p>Prenatal Elasticity & Postpartum Recovery</p>
          </div>
        </div>
        <div class="category-card">
          <img src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80" alt="Pure Baby Care" class="category-img" />
          <div class="category-overlay">
            <span class="category-count">7 Gentle Essentials</span>
            <h3 class="category-name">Pure Baby Care</h3>
            <p>Tear-Free, Eczema-Friendly & Soothing</p>
          </div>
        </div>
        <div class="category-card">
          <img src="https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80" alt="Bundles & Gift Sets" class="category-img" />
          <div class="category-overlay">
            <span class="category-count">4 Complete Ritual Sets</span>
            <h3 class="category-name">Bundles & Gift Sets</h3>
            <p>Curated Kits with up to 25% Savings</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="product-section" id="products">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Pure Formulas</span>
        <h2 class="section-title">The Complete Mother & Baby Collection</h2>
        <p class="section-subtitle">Every bottle is crafted with certified biocompatible botanical ingredients, dermatologist-tested for ultimate peace of mind.</p>
      </div>
      <div class="products-grid">
        <div class="product-card">
          <div class="product-image-box">
            <img src="https://img.btdmp.com/10687/10687861/products/17856583041b5616c81c.jpeg" alt="Organic Nourishing Belly Butter" class="product-img" />
          </div>
          <div class="product-content">
            <span class="product-category-tag">Mother Skin Care</span>
            <h3 class="product-title">Organic Nourishing Belly Butter & Stretch Mark Balm</h3>
            <div class="product-price-row"><span class="product-price">$19.99</span></div>
            <button class="product-add-btn">🛒 Add to Cart</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image-box">
            <img src="https://img.btdmp.com/10687/10687861/products/1785658306e53d2f6617.jpeg" alt="Ultra-Gentle 2-in-1 Baby Wash" class="product-img" />
          </div>
          <div class="product-content">
            <span class="product-category-tag">Baby Care</span>
            <h3 class="product-title">Ultra-Gentle 2-in-1 Baby Wash & Tear-Free Shampoo</h3>
            <div class="product-price-row"><span class="product-price">$22.99</span></div>
            <button class="product-add-btn">🛒 Add to Cart</button>
          </div>
        </div>
        <div class="product-card">
          <div class="product-image-box">
            <img src="https://img.btdmp.com/10687/10687861/products/178565829599e6634c63.png" alt="Welcome Baby Newborn Essentials Set" class="product-img" />
          </div>
          <div class="product-content">
            <span class="product-category-tag">Bundles & Gifts</span>
            <h3 class="product-title">Welcome Baby Newborn Organic Essentials Set</h3>
            <div class="product-price-row"><span class="product-price">$30.99</span></div>
            <button class="product-add-btn">🛒 Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="safety-section" id="safety">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Pure Formulation Ethics</span>
        <h2 class="section-title">The Clean Maternal Standard</h2>
        <p class="section-subtitle">We adhere to strict EU and Japanese cosmetics safety regulations, banning over 1,600 questionable chemicals to keep mamas and infants safe.</p>
      </div>
      <div class="safety-comparison-grid">
        <div class="safety-box good">
          <h3 class="safety-box-title"><span>🌿</span><span>What We Formulate With</span></h3>
          <ul class="safety-list">
            <li class="safety-list-item"><span class="safety-icon-check">✓</span><div><strong>Cold-Pressed Organic Plant Oils</strong> for biocompatible nourishment.</div></li>
            <li class="safety-list-item"><span class="safety-icon-check">✓</span><div><strong>Colloidal Oatmeal & Calendula</strong> for barrier-reinforcing comfort.</div></li>
            <li class="safety-list-item"><span class="safety-icon-check">✓</span><div><strong>Plant-Derived Ceramides & Squalane</strong> to support the skin moisture seal.</div></li>
          </ul>
        </div>
        <div class="safety-box bad">
          <h3 class="safety-box-title"><span>🚫</span><span>What We Never Allow</span></h3>
          <ul class="safety-list">
            <li class="safety-list-item"><span class="safety-icon-cross">✕</span><div><strong>0% Parabens & Phthalates</strong> completely excluded.</div></li>
            <li class="safety-list-item"><span class="safety-icon-cross">✕</span><div><strong>0% Synthetic Fragrances & Dyes</strong> to avoid irritation.</div></li>
            <li class="safety-list-item"><span class="safety-icon-cross">✕</span><div><strong>0% Sulfates, Mineral Oil & Petrolatum</strong> in our formulas.</div></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="reviews-section" id="routine">
    <div class="container">
      <div class="section-header">
        <span class="section-tag">Real Mama Experiences</span>
        <h2 class="section-title">Loved by Over 25,000 Mothers & Newborns</h2>
        <p class="section-subtitle">Read how our clean botanical formulations bring comfort and peace of mind to families worldwide.</p>
      </div>
      <div class="reviews-grid">
        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <h4 class="review-title">Saved my belly during pregnancy — zero stretch marks!</h4>
          <p class="review-body">I used the Belly Butter morning and night and the Elasticity Oil right after the shower. My skin bounced back amazingly with zero marks.</p>
        </div>
        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <h4 class="review-title">The only wash that cleared my son's cradle cap & eczema</h4>
          <p class="review-body">As a pediatric nurse, I am extremely picky with baby products. The 2-in-1 Baby Wash is a game changer.</p>
        </div>
        <div class="review-card">
          <div class="review-stars">★★★★★</div>
          <h4 class="review-title">Lanolin-free nipple salve is a lifesaver for breastfeeding</h4>
          <p class="review-body">It melts like butter, soothes instant cracking, and I love that I don't have to wipe it off before latching.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="container">
    <div class="guide-banner">
      <div class="guide-banner-text">
        <h3>Download Our Free Mother & Baby Routine Guide</h3>
        <p>Get certified midwife tips on prenatal skin health, infant massage rituals, and postpartum healing.</p>
      </div>
      <div class="newsletter-box">
        <input type="email" class="newsletter-input" placeholder="Enter your email address..." />
        <button class="newsletter-btn">Get Free Guide 📖</button>
      </div>
    </div>
  </div>

  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <h3>🌿 Core & Core</h3>
          <p>Dedicated to formulating pure, biocompatible skincare solutions for expecting mothers, postpartum healing, and delicate baby skin.</p>
        </div>
        <div class="footer-col">
          <h4>Shop Collections</h4>
          <ul class="footer-links">
            <li><a href="#products">Mother Skin Care</a></li>
            <li><a href="#products">Baby Essentials</a></li>
            <li><a href="#products">Gift Sets & Bundles</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Learn & Trust</h4>
          <ul class="footer-links">
            <li><a href="/pages/mother-baby-care-routine-guide">Routine Guide</a></li>
            <li><a href="/pages/pure-clean-safety-standards">Safety Standards</a></li>
            <li><a href="/pages/about-us">About Core & Core</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2026 Core & Core Pure Care. All rights reserved.</div>
        <div>Privacy Policy • Terms • Return Policy</div>
      </div>
    </div>
  </footer>

  <style>
    .corencore-homepage { font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #FAF7F2; color: #24282B; line-height: 1.6; }
    .container { max-width: 1280px; margin: 0 auto; padding: 0 24px; }
    .announcement-bar { background: #C87A65; color: white; padding: 8px 16px; text-align: center; font-size: 0.85rem; font-weight: 500; }
    .announcement-content { display: flex; justify-content: center; align-items: center; gap: 12px; }
    .announcement-highlight { background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 999px; font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; }
    .main-header { position: sticky; top: 0; background: rgba(250,247,242,0.92); backdrop-filter: blur(12px); border-bottom: 1px solid #E5DED4; z-index: 90; }
    .header-inner { display: flex; align-items: center; justify-content: space-between; height: 80px; gap: 24px; }
    .brand-logo { display: flex; align-items: center; gap: 12px; font-family: 'Playfair Display', Georgia, serif; font-size: 1.5rem; font-weight: 700; color: #24282B; white-space: nowrap; }
    .brand-logo-icon { width: 36px; height: 36px; background: #C87A65; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
    .brand-subtitle { font-size: 0.65rem; font-family: 'Plus Jakarta Sans', sans-serif; letter-spacing: 1.2px; text-transform: uppercase; color: #C87A65; display: block; font-weight: 700; margin-top: 1px; }
    .nav-links { display: flex; align-items: center; gap: 32px; list-style: none; }
    .nav-item a { font-size: 0.95rem; font-weight: 500; color: #24282B; }
    .nav-item a:hover { color: #C87A65; }
    .header-actions { display: flex; align-items: center; gap: 16px; }
    .currency-select, .search-button, .cart-trigger { padding: 8px 12px; border-radius: 999px; border: 1px solid #E5DED4; background: white; color: #24282B; font-weight: 600; }
    .cart-trigger { background: #C87A65; color: white; border-color: #C87A65; }
    .hero-section { padding: 60px 0 80px; }
    .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 48px; align-items: center; }
    .hero-tag { display: inline-flex; padding: 6px 16px; background: #F8ECE8; color: #C87A65; border-radius: 999px; font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 20px; }
    .hero-title { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(2.4rem, 4vw, 3.6rem); line-height: 1.1; margin-bottom: 20px; color: #24282B; }
    .hero-title span { color: #C87A65; }
    .hero-desc { font-size: 1rem; color: #6B7280; margin-bottom: 24px; max-width: 600px; }
    .hero-buttons { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 30px; }
    .btn-primary, .btn-secondary, .btn-quiz { display: inline-flex; align-items: center; justify-content: center; padding: 12px 18px; border-radius: 999px; font-weight: 700; text-decoration: none; }
    .btn-primary { background: #C87A65; color: white; }
    .btn-secondary { background: white; color: #24282B; border: 1px solid #E5DED4; }
    .btn-quiz { background: #EBF2EC; color: #5E8268; }
    .hero-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .stat-item { background: white; padding: 16px; border-radius: 16px; box-shadow: 0 6px 16px rgba(36,40,43,0.06); }
    .stat-item h4 { font-size: 1.2rem; color: #C87A65; margin-bottom: 4px; }
    .hero-image-wrapper { position: relative; }
    .hero-main-img { border-radius: 30px; width: 100%; height: 100%; min-height: 480px; object-fit: cover; box-shadow: 0 20px 48px rgba(36,40,43,0.12); }
    .hero-floating-card { position: absolute; left: 18px; bottom: 18px; display: flex; gap: 12px; align-items: center; background: rgba(255,255,255,0.95); padding: 14px 16px; border-radius: 18px; box-shadow: 0 10px 32px rgba(36,40,43,0.12); }
    .floating-icon { font-size: 1.35rem; }
    .trust-bar { background: #F3EEE7; padding: 28px 0; }
    .trust-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; }
    .trust-item { display: flex; gap: 12px; align-items: flex-start; }
    .trust-icon { font-size: 1.2rem; }
    .trust-text h4 { font-size: 0.95rem; margin-bottom: 4px; }
    .trust-text p { font-size: 0.85rem; color: #6B7280; }
    .categories-section, .product-section, .safety-section, .reviews-section { padding: 72px 0 0; }
    .section-header { text-align: center; max-width: 760px; margin: 0 auto 36px; }
    .section-tag { display: inline-block; padding: 6px 14px; border-radius: 999px; background: #F8ECE8; color: #C87A65; font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; }
    .section-title { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(1.8rem, 3vw, 2.4rem); margin-bottom: 10px; color: #24282B; }
    .section-subtitle { color: #6B7280; font-size: 1rem; }
    .categories-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
    .category-card { position: relative; overflow: hidden; border-radius: 24px; min-height: 300px; box-shadow: 0 12px 28px rgba(36,40,43,0.08); }
    .category-img { width: 100%; height: 100%; object-fit: cover; }
    .category-overlay { position: absolute; inset: 0; background: linear-gradient(180deg, rgba(36,40,43,0.05) 0%, rgba(36,40,43,0.7) 100%); color: white; display: flex; flex-direction: column; justify-content: flex-end; padding: 24px; }
    .category-count { font-size: 0.8rem; text-transform: uppercase; letter-spacing: .06em; margin-bottom: 8px; color: #F8ECE8; }
    .category-name { font-size: 1.3rem; font-weight: 700; margin-bottom: 6px; }
    .products-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
    .product-card { background: white; border-radius: 24px; padding: 18px; box-shadow: 0 10px 24px rgba(36,40,43,0.06); }
    .product-image-box img { width: 100%; height: 220px; object-fit: cover; border-radius: 18px; margin-bottom: 16px; }
    .product-category-tag { display: inline-block; color: #5E8268; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 6px; }
    .product-title { font-size: 1rem; font-weight: 700; margin-bottom: 10px; color: #24282B; }
    .product-price-row { margin-bottom: 14px; }
    .product-price { font-size: 1.15rem; font-weight: 800; color: #C87A65; }
    .product-add-btn { width: 100%; border-radius: 999px; background: #C87A65; color: white; padding: 10px 14px; font-weight: 700; }
    .safety-comparison-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
    .safety-box { background: white; border-radius: 24px; padding: 24px; box-shadow: 0 10px 24px rgba(36,40,43,0.06); }
    .safety-box.good { border: 1px solid #EBF2EC; }
    .safety-box.bad { border: 1px solid #F8ECE8; }
    .safety-box-title { display: flex; gap: 8px; align-items: center; font-size: 1.1rem; margin-bottom: 16px; }
    .safety-list { list-style: none; display: grid; gap: 12px; }
    .safety-list-item { display: flex; gap: 10px; color: #4b5563; }
    .safety-icon-check { color: #2E7D32; font-weight: 800; }
    .safety-icon-cross { color: #D32F2F; font-weight: 800; }
    .reviews-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; }
    .review-card { background: white; border-radius: 24px; padding: 24px; box-shadow: 0 10px 24px rgba(36,40,43,0.06); }
    .review-stars { color: #DDA15E; margin-bottom: 10px; }
    .review-title { font-size: 1.05rem; margin-bottom: 10px; color: #24282B; }
    .review-body { color: #6B7280; font-size: 0.95rem; }
    .guide-banner { display: flex; align-items: center; justify-content: space-between; gap: 20px; background: white; padding: 28px; border-radius: 24px; margin: 72px auto 0; box-shadow: 0 12px 28px rgba(36,40,43,0.06); }
    .guide-banner-text h3 { font-size: 1.25rem; font-weight: 800; margin-bottom: 6px; }
    .guide-banner-text p { color: #6B7280; }
    .newsletter-box { display: flex; gap: 10px; flex-wrap: wrap; }
    .newsletter-input { min-width: 260px; padding: 12px 14px; border-radius: 999px; border: 1px solid #E5DED4; }
    .newsletter-btn { background: #C87A65; color: white; padding: 12px 16px; border-radius: 999px; font-weight: 700; }
    .site-footer { background: #24282B; color: #fff; padding: 42px 0 24px; margin-top: 36px; }
    .footer-grid { display: grid; grid-template-columns: 1.2fr 1fr 1fr; gap: 24px; margin-bottom: 24px; }
    .footer-brand p, .footer-links a { color: #d1d5db; font-size: 0.95rem; }
    .footer-col h4 { margin-bottom: 12px; font-size: 1rem; }
    .footer-links { list-style: none; display: grid; gap: 8px; }
    .footer-bottom { display: flex; justify-content: space-between; gap: 20px; border-top: 1px solid rgba(255,255,255,0.12); padding-top: 16px; color: #9CA3AF; font-size: 0.9rem; }
    @media (max-width: 980px) {
      .hero-grid, .trust-grid, .categories-grid, .products-grid, .safety-comparison-grid, .reviews-grid, .footer-grid { grid-template-columns: 1fr; }
      .nav-links { display: none; }
      .guide-banner { flex-direction: column; align-items: flex-start; }
      .header-inner { height: auto; padding: 16px 0; flex-wrap: wrap; }
    }
    @media (max-width: 640px) {
      .hero-stats { grid-template-columns: 1fr; }
      .header-actions { width: 100%; justify-content: space-between; }
      .newsletter-input { min-width: 0; width: 100%; }
      .newsletter-box { width: 100%; }
      .footer-bottom { flex-direction: column; }
    }
  </style>
</section>
`;

const HOMEPAGE_INDEX_TEMPLATE = `{% section 'corencore-homepage' %}`;

async function syncHomepageTheme() {
  const theme = await getPublishedTheme();
  if (!theme) {
    throw new Error('No active ShopBase theme found.');
  }

  const sectionAsset = {
    key: 'sections/corencore-homepage.liquid',
    value: HOMEPAGE_SECTION_TEMPLATE
  };

  const indexAsset = {
    key: 'templates/index.liquid',
    value: HOMEPAGE_INDEX_TEMPLATE
  };

  const sectionResult = await updateThemeAsset(theme.id, sectionAsset);
  const indexResult = await updateThemeAsset(theme.id, indexAsset);

  return {
    theme: { id: theme.id, name: theme.name },
    sectionResult,
    indexResult
  };
}

/**
 * Build direct ShopBase Checkout URL from Cart items
 */
function buildCheckoutUrl(cartItems) {
  // Format: https://corencore.onshopbase.com/cart/{variant_id}:{quantity},{variant_id}:{quantity}
  if (!cartItems || !cartItems.length) {
    return `https://${DOMAIN}/cart`;
  }
  const itemStrings = cartItems.map(item => `${item.id || item.variant_id || 1000000672062239}:${item.quantity || 1}`);
  return `https://${DOMAIN}/cart/${itemStrings.join(',')}`;
}

module.exports = {
  shopbaseRequest,
  getShopInfo,
  getProducts,
  updateProduct,
  syncMotherAndBabyCatalog,
  getPages,
  createOrUpdatePage,
  getThemes,
  getPublishedTheme,
  updateThemeAsset,
  syncHomepageTheme,
  buildCheckoutUrl,
  DOMAIN
};
