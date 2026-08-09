const fs = require('fs');
const path = require('path');
const { MOTHER_AND_BABY_PRODUCTS } = require('../server/catalog-data.js');

const outDir = path.join(__dirname, '../web-builder-sections');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Read CSS
const mainCss = fs.readFileSync(path.join(__dirname, '../src/styles/main.css'), 'utf8');

// ============================================================================
// 1. HEADER SECTION
// ============================================================================
const headerHtml = `<!-- ========================================================================== -->
<!-- CORE & CORE: SECTION 1 - HEADER & ANNOUNCEMENT BAR (Web Builder Section)   -->
<!-- Paste this into a Custom HTML / Code Block in ShopBase Web Builder         -->
<!-- ========================================================================== -->
<div class="corencore-header-section" id="corencore-header-section">
  <!-- Top Announcement Ticker -->
  <div class="announcement-bar">
    <div class="container announcement-content">
      <span class="announcement-highlight">Exclusive</span>
      <span>🌿 Free Hospital Bag Essentials Sample Kit on orders over $50 | Use code <strong>MOMCARE15</strong> for 15% OFF</span>
    </div>
  </div>

  <!-- Main Navigation Bar -->
  <div class="main-header">
    <div class="container header-inner">
      <!-- Logo -->
      <a href="/" class="brand-logo" id="header-logo-link">
        <div class="brand-logo-icon">🌿</div>
        <div class="brand-title-wrap">
          <span style="line-height: 1.1; display: block;">Core & Core</span>
          <span class="brand-subtitle">Pure Mother & Baby Care</span>
        </div>
      </a>

      <!-- Navigation Links -->
      <ul class="nav-links">
        <li class="nav-item"><a href="#categories-section">Categories</a></li>
        <li class="nav-item"><a href="#products-section" data-filter="mother-care">Mother Care</a></li>
        <li class="nav-item"><a href="#products-section" data-filter="baby-care">Baby Care</a></li>
        <li class="nav-item"><a href="#products-section" data-filter="bundles">Bundles & Gifts</a></li>
        <li class="nav-item"><a href="#routine-quiz-section" style="color: #5E8268; font-weight: 700;">✨ Routine Finder</a></li>
        <li class="nav-item"><a href="#safety-standards-section">Clean Standards</a></li>
      </ul>

      <!-- Right Header Actions -->
      <div class="header-actions">
        <!-- Currency Converter -->
        <select class="currency-select" id="header-currency-select" onchange="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCurrency(this.value)">
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
          <option value="INR">INR (₹)</option>
          <option value="CAD">CAD (CA$)</option>
          <option value="AUD">AUD (AU$)</option>
        </select>

        <!-- Search Button -->
        <button class="search-button" onclick="const q=prompt('Search Mother & Baby products:'); if(q && window.CoreNCoreApp) window.CoreNCoreApp.actions.searchProducts(q);" title="Search Products">
          <span>🔍</span>
        </button>

        <!-- Cart Drawer Trigger -->
        <button class="cart-trigger" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.toggleCart(true)" aria-label="Shopping Bag">
          <span>🛒</span>
          <span>Cart</span>
          <span class="cart-badge" id="cart-counter-badge">0</span>
        </button>
      </div>
    </div>
  </div>
</div>
`;

fs.writeFileSync(path.join(outDir, '01-header-section.html'), headerHtml, 'utf8');

// ============================================================================
// 2. HERO BANNER & TRUST BADGES SECTION
// ============================================================================
const heroHtml = `<!-- ========================================================================== -->
<!-- CORE & CORE: SECTION 2 - HERO BANNER & TRUST BADGES (Web Builder Section)  -->
<!-- Paste this into a Custom HTML / Code Block in ShopBase Web Builder         -->
<!-- ========================================================================== -->
<div class="corencore-hero-section" id="hero-banner-section">
  <div class="hero-wrapper">
    <div class="container hero-content-grid">
      <!-- Left Content -->
      <div class="hero-text-col">
        <div class="hero-eyebrow">
          <span>🌿 Certified Organic Maternal Care</span>
        </div>

        <h1 class="hero-title">
          Pure Nurture for <span class="highlight-text">Mother & Baby</span>
        </h1>

        <p class="hero-description">
          Pediatrician-approved botanical formulations designed to soothe stretching skin, support postpartum healing, and nourish fragile newborn skin with 100% biocompatible, non-toxic ingredients.
        </p>

        <div class="hero-cta-group">
          <a href="#products-section" class="btn btn-primary" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('mother-care')">
            Shop Mother Skin Care →
          </a>
          <a href="#products-section" class="btn btn-secondary" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('baby-care')">
            Shop Baby Essentials
          </a>
          <a href="#routine-quiz-section" class="btn btn-accent">
            ✨ Find Your Routine
          </a>
        </div>

        <div class="hero-stats-row">
          <div class="hero-stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Organic & Non-Toxic</span>
          </div>
          <div class="hero-stat-item">
            <span class="stat-number">0%</span>
            <span class="stat-label">Parabens & Toxins</span>
          </div>
          <div class="hero-stat-item">
            <span class="stat-number">4.9★</span>
            <span class="stat-label">Over 2,500+ Moms</span>
          </div>
        </div>
      </div>

      <!-- Right Visual Feature -->
      <div class="hero-visual-col">
        <div class="hero-image-card">
          <img 
            src="https://img.btdmp.com/10687/10687861/products/17856583041b5616c81c.jpeg" 
            alt="Core & Core Organic Belly Butter & Infant Care" 
            class="hero-main-img"
          />
          
          <div class="floating-badge top-right">
            <span class="badge-icon">🌿</span>
            <div>
              <strong style="display: block; font-size: 0.85rem;">USDA Certified</strong>
              <small style="color: #6B7280; font-size: 0.72rem;">100% Pure Organic</small>
            </div>
          </div>

          <div class="floating-badge bottom-left">
            <span class="badge-icon">🩺</span>
            <div>
              <strong style="display: block; font-size: 0.85rem;">Pediatrician Tested</strong>
              <small style="color: #6B7280; font-size: 0.72rem;">Hypoallergenic Safe</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Trust Badges Bar -->
  <div class="trust-bar-section">
    <div class="container">
      <div class="trust-bar-grid">
        <div class="trust-item">
          <span class="trust-icon">🌱</span>
          <div class="trust-text">
            <strong>Certified Organic</strong>
            <span>100% USDA organic botanical extracts</span>
          </div>
        </div>
        <div class="trust-item">
          <span class="trust-icon">🩺</span>
          <div class="trust-text">
            <strong>Pediatrician Approved</strong>
            <span>Clinically tested for newborn skin</span>
          </div>
        </div>
        <div class="trust-item">
          <span class="trust-icon">🚫</span>
          <div class="trust-text">
            <strong>Zero Harsh Chemicals</strong>
            <span>No parabens, sulfates, or phthalates</span>
          </div>
        </div>
        <div class="trust-item">
          <span class="trust-icon">📦</span>
          <div class="trust-text">
            <strong>Mama Guarantee</strong>
            <span>30-day gentle soothing promise</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

fs.writeFileSync(path.join(outDir, '02-hero-banner-section.html'), heroHtml, 'utf8');

// ============================================================================
// 3. CATEGORY SHOWCASE SECTION
// ============================================================================
const categoryHtml = `<!-- ========================================================================== -->
<!-- CORE & CORE: SECTION 3 - CATEGORY SHOWCASE (Web Builder Section)           -->
<!-- Paste this into a Custom HTML / Code Block in ShopBase Web Builder         -->
<!-- ========================================================================== -->
<div class="corencore-categories-section" id="categories-section">
  <div class="container">
    <div class="section-header-center">
      <span class="section-badge">Nurturing Care for Every Stage</span>
      <h2 class="section-title">Explore Specialized Care</h2>
      <p class="section-subtitle">Thoughtfully formulated collections tailored for prenatal elasticity, postpartum restoration, and gentle infant skin protection.</p>
    </div>

    <div class="categories-grid">
      <!-- Category 1: Mother Care -->
      <div class="category-card" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('mother-care')">
        <div class="category-img-wrap">
          <img src="https://img.btdmp.com/10687/10687861/products/17856583041b5616c81c.jpeg" alt="Mother Skin Care" class="category-img"/>
          <div class="category-overlay"></div>
        </div>
        <div class="category-info">
          <span class="category-count">8 Formulations</span>
          <h3 class="category-name">Mother Skin Care</h3>
          <p class="category-desc">Belly butters, elasticity oils, nipple salves, and melasma-safe glowing elixirs.</p>
          <span class="category-cta">Explore Mother Care →</span>
        </div>
      </div>

      <!-- Category 2: Baby Care -->
      <div class="category-card" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('baby-care')">
        <div class="category-img-wrap">
          <img src="https://img.btdmp.com/10687/10687861/products/1785658306e53d2f6617.jpeg" alt="Pure Baby Care" class="category-img"/>
          <div class="category-overlay"></div>
        </div>
        <div class="category-info">
          <span class="category-count">7 Essentials</span>
          <h3 class="category-name">Pure Baby Care</h3>
          <p class="category-desc">Tear-free washes, calming bedtime massage oils, zinc diaper paste, and bamboo wipes.</p>
          <span class="category-cta">Explore Baby Care →</span>
        </div>
      </div>

      <!-- Category 3: Bundles & Gifts -->
      <div class="category-card" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('bundles')">
        <div class="category-img-wrap">
          <img src="https://img.btdmp.com/10687/10687861/products/178565829599e6634c63.png" alt="Bundles & Gifts" class="category-img"/>
          <div class="category-overlay"></div>
        </div>
        <div class="category-info">
          <span class="category-count">3 Luxury Sets</span>
          <h3 class="category-name">Bundles & Gift Sets</h3>
          <p class="category-desc">Curated postpartum recovery kits, newborn baby shower sets, and bonding rituals.</p>
          <span class="category-cta">Explore Bundles (Save 25%) →</span>
        </div>
      </div>
    </div>
  </div>
</div>
`;

fs.writeFileSync(path.join(outDir, '03-category-showcase-section.html'), categoryHtml, 'utf8');

// ============================================================================
// 4. ROUTINE FINDER QUIZ SECTION
// ============================================================================
const quizHtml = `<!-- ========================================================================== -->
<!-- CORE & CORE: SECTION 4 - ROUTINE FINDER QUIZ (Web Builder Section)         -->
<!-- Paste this into a Custom HTML / Code Block in ShopBase Web Builder         -->
<!-- ========================================================================== -->
<div class="corencore-quiz-section" id="routine-quiz-section">
  <div class="container">
    <div class="quiz-card-wrapper" id="routine-quiz-container">
      <div class="quiz-header">
        <span class="quiz-badge">✨ Interactive Routine Finder</span>
        <h2 class="quiz-title">Find Your Personalized Mother & Baby Routine</h2>
        <p class="quiz-subtitle">Answer 3 quick questions to receive certified midwife-recommended botanical routines tailored to your current stage.</p>
      </div>

      <div class="quiz-progress-wrap">
        <div class="quiz-progress-bar" style="width: 33.3%;"></div>
      </div>

      <div class="quiz-step-content" id="quiz-interactive-mount">
        <!-- Interactive questions mount here via JavaScript -->
        <div class="quiz-step-box active">
          <h3 class="quiz-question-title">Step 1: What is your current journey stage?</h3>
          <div class="quiz-options-grid">
            <button class="quiz-option-btn" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.selectQuizOption('stage', 'pregnant')">
              <span class="quiz-option-icon">🤰</span>
              <div>
                <strong>Expecting Mama (Prenatal)</strong>
                <p>1st, 2nd, or 3rd Trimester care</p>
              </div>
            </button>
            <button class="quiz-option-btn" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.selectQuizOption('stage', 'postpartum')">
              <span class="quiz-option-icon">🤱</span>
              <div>
                <strong>New Mother (Postpartum)</strong>
                <p>Healing, nursing & recovery</p>
              </div>
            </button>
            <button class="quiz-option-btn" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.selectQuizOption('stage', 'newborn')">
              <span class="quiz-option-icon">👶</span>
              <div>
                <strong>Newborn & Infant Care</strong>
                <p>0-12 months tender skin</p>
              </div>
            </button>
            <button class="quiz-option-btn" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.selectQuizOption('stage', 'both')">
              <span class="quiz-option-icon">🌿</span>
              <div>
                <strong>Mama & Baby Shared Ritual</strong>
                <p>Bonding care for both</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

fs.writeFileSync(path.join(outDir, '04-routine-finder-quiz-section.html'), quizHtml, 'utf8');

// ============================================================================
// 5. PRODUCT CATALOG GRID SECTION
// ============================================================================
const productCardsHtml = MOTHER_AND_BABY_PRODUCTS.map(p => `
        <div class="product-card" data-product-id="${p.id}" data-category="${p.category}">
          <div class="product-image-box">
            <img src="${p.image}" alt="${p.title}" class="product-img" loading="lazy" />
            ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            <button class="quick-view-btn" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.openProductModal(window.CoreNCoreApp.state.products.find(x => x.id == ${p.id}))">
              👁 Quick View
            </button>
          </div>
          <div class="product-content">
            <span class="product-category-tag">${p.category_label || p.product_type}</span>
            <h3 class="product-title" title="${p.title}">${p.title}</h3>
            <div class="product-ratings">
              <span class="stars">★★★★★</span>
              <strong>${p.rating}</strong>
              <span class="reviews-num">(${p.reviews_count})</span>
            </div>
            <div class="product-price-row">
              <span class="product-price">$${p.price}</span>
              ${p.compare_at_price ? `<span class="product-compare-price">$${p.compare_at_price}</span>` : ''}
            </div>
            <button class="product-add-btn" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.addToCart(window.CoreNCoreApp.state.products.find(x => x.id == ${p.id}), 1)">
              🛒 Add to Cart
            </button>
            <a href="https://corencore.onshopbase.com/products/${p.shopbase_handle}" target="_blank" class="shopbase-buy-link">
              🛍 Buy on Store →
            </a>
          </div>
        </div>
`).join('\n');

const productGridHtml = `<!-- ========================================================================== -->
<!-- CORE & CORE: SECTION 5 - PRODUCT CATALOG GRID (Web Builder Section)        -->
<!-- Paste this into a Custom HTML / Code Block in ShopBase Web Builder         -->
<!-- ========================================================================== -->
<div class="corencore-products-section" id="products-section">
  <div class="container">
    <div class="section-header-center">
      <span class="section-badge">Pure Botanical Formulations</span>
      <h2 class="section-title">Our Certified Catalog</h2>
      <p class="section-subtitle">Dermatologist-tested, hypoallergenic, and crafted with 100% clean ingredients.</p>
    </div>

    <!-- Category Filter Tabs -->
    <div class="filter-tabs-wrapper">
      <button class="filter-tab active" data-tab="all" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('all')">All Products (18)</button>
      <button class="filter-tab" data-tab="mother-care" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('mother-care')">Mother Care (8)</button>
      <button class="filter-tab" data-tab="baby-care" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('baby-care')">Baby Care (7)</button>
      <button class="filter-tab" data-tab="bundles" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('bundles')">Bundles & Gifts (3)</button>
    </div>

    <!-- Products Grid -->
    <div class="products-grid" id="products-grid-container">
${productCardsHtml}
    </div>
  </div>
</div>
`;

fs.writeFileSync(path.join(outDir, '05-product-grid-section.html'), productGridHtml, 'utf8');

// ============================================================================
// 6. SAFETY STANDARDS SECTION
// ============================================================================
const safetyHtml = `<!-- ========================================================================== -->
<!-- CORE & CORE: SECTION 6 - CLEAN SAFETY STANDARDS (Web Builder Section)       -->
<!-- Paste this into a Custom HTML / Code Block in ShopBase Web Builder         -->
<!-- ========================================================================== -->
<div class="corencore-safety-section" id="safety-standards-section">
  <div class="container">
    <div class="section-header-center">
      <span class="section-badge">Our Clean Promise</span>
      <h2 class="section-title">What Goes On Your Body Matters</h2>
      <p class="section-subtitle">We hold our maternal and infant skincare formulas to the world's strictest biocompatibility and clean standards.</p>
    </div>

    <div class="safety-comparison-grid">
      <!-- What We Formulate With -->
      <div class="safety-box allowed">
        <div class="safety-header">
          <span class="safety-header-icon">🌿</span>
          <div>
            <h3>What We Formulate With</h3>
            <p>100% Biocompatible, Organic & Food-Grade</p>
          </div>
        </div>
        <ul class="safety-checklist">
          <li><strong>Cold-Pressed Botanical Oils:</strong> Rosehip, Jojoba, Apricot Kernel, Sweet Almond.</li>
          <li><strong>Unrefined Raw Shea & Cocoa Butters:</strong> Rich in essential lipid barrier fatty acids.</li>
          <li><strong>Non-Nano Mineral Zinc Oxide:</strong> Physical UV & wetness barrier protection.</li>
          <li><strong>Colloidal Oat & Organic Calendula:</strong> Pediatrician-tested soothing for eczema & irritation.</li>
          <li><strong>Food-Grade Nursing Botanicals:</strong> 100% ingestion-safe for breastfeeding newborns.</li>
        </ul>
      </div>

      <!-- What We Never Allow -->
      <div class="safety-box banned">
        <div class="safety-header">
          <span class="safety-header-icon">🚫</span>
          <div>
            <h3>What We NEVER Allow</h3>
            <p>0% Toxins, Irritants & Harsh Chemicals</p>
          </div>
        </div>
        <ul class="safety-checklist banned-list">
          <li><strong>0% Parabens & Phthalates:</strong> Zero endocrine disruptors during pregnancy & infancy.</li>
          <li><strong>0% Artificial Fragrances & Dyes:</strong> Never synthetic masking agents or chemical perfumes.</li>
          <li><strong>0% Retinol & Salicylic Acid:</strong> 100% pregnancy-safe and melasma-friendly.</li>
          <li><strong>0% Mineral Oils & Petrolatum:</strong> Clean non-pore-clogging plant lipids only.</li>
          <li><strong>0% Sulfates & Harsh Foaming Agents:</strong> Gentle coconut-derived glucosides only.</li>
        </ul>
      </div>
    </div>
  </div>
</div>
`;

fs.writeFileSync(path.join(outDir, '06-safety-standards-section.html'), safetyHtml, 'utf8');

// ============================================================================
// 7. REVIEWS & TESTIMONIALS SECTION
// ============================================================================
const reviewsHtml = `<!-- ========================================================================== -->
<!-- CORE & CORE: SECTION 7 - CUSTOMER REVIEWS (Web Builder Section)            -->
<!-- Paste this into a Custom HTML / Code Block in ShopBase Web Builder         -->
<!-- ========================================================================== -->
<div class="corencore-reviews-section" id="reviews-section">
  <div class="container">
    <div class="section-header-center">
      <span class="section-badge">Real Stories</span>
      <h2 class="section-title">Loved by Over 2,500+ Mamas & Babies</h2>
      <p class="section-subtitle">Read verified experiences from expecting mothers, new parents, and pediatric nurses.</p>
    </div>

    <div class="reviews-grid">
      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <p class="review-body">"The Belly Butter completely saved my skin during my twin pregnancy! Zero stretch marks, and the itchiness stopped within 24 hours. The texture is cloud-soft."</p>
        <div class="review-author">
          <div class="review-avatar">SM</div>
          <div>
            <strong>Sarah M.</strong>
            <span class="review-role">Mom of Twins (Austin, TX)</span>
          </div>
        </div>
      </div>

      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <p class="review-body">"As a pediatric nurse and second-time mom, this 2-in-1 Baby Wash and Bedtime Lavender Oil is the gentlest product I have ever tested on newborn skin."</p>
        <div class="review-author">
          <div class="review-avatar">EL</div>
          <div>
            <strong>Emily L.</strong>
            <span class="review-role">Pediatric Nurse & Mom of 2</span>
          </div>
        </div>
      </div>

      <div class="review-card">
        <div class="review-stars">★★★★★</div>
        <p class="review-body">"The Nipple Salve was the only thing that gave me instant relief in those first breastfeeding weeks. Knowing it's 100% lanolin-free and food-grade gave me huge peace of mind."</p>
        <div class="review-author">
          <div class="review-avatar">JC</div>
          <div>
            <strong>Jessica C.</strong>
            <span class="review-role">First-Time Mom (Seattle, WA)</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
`;

fs.writeFileSync(path.join(outDir, '07-customer-reviews-section.html'), reviewsHtml, 'utf8');

// ============================================================================
// 8. ROUTINE GUIDE & NEWSLETTER SECTION
// ============================================================================
const guideHtml = `<!-- ========================================================================== -->
<!-- CORE & CORE: SECTION 8 - ROUTINE GUIDE & NEWSLETTER (Web Builder Section)  -->
<!-- Paste this into a Custom HTML / Code Block in ShopBase Web Builder         -->
<!-- ========================================================================== -->
<div class="corencore-guide-section" id="guide-banner-section">
  <div class="container">
    <div class="guide-banner">
      <div class="guide-banner-text">
        <h3>Download Our Free Mother & Baby Routine Guide</h3>
        <p>Get certified midwife tips on prenatal skin health, infant massage rituals, and postpartum healing.</p>
      </div>

      <form class="newsletter-box" onsubmit="event.preventDefault(); alert('🎉 Thank you! Your free Mother & Baby Routine Guide has been sent to your email.'); this.reset();">
        <input 
          type="email" 
          class="newsletter-input" 
          placeholder="Enter your email address..." 
          required 
        />
        <button type="submit" class="newsletter-btn">
          Get Free Guide 📖
        </button>
      </form>
    </div>
  </div>
</div>
`;

fs.writeFileSync(path.join(outDir, '08-routine-guide-banner-section.html'), guideHtml, 'utf8');

// ============================================================================
// 9. FOOTER SECTION
// ============================================================================
const footerHtml = `<!-- ========================================================================== -->
<!-- CORE & CORE: SECTION 9 - FOOTER LAYER (Web Builder Section)                -->
<!-- Paste this into a Custom HTML / Code Block in ShopBase Web Builder         -->
<!-- ========================================================================== -->
<div class="corencore-footer-section" id="corencore-footer-section">
  <div class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <!-- Brand Col -->
        <div class="footer-brand">
          <h3>🌿 Core & Core</h3>
          <p>
            Dedicated to formulating pure, biocompatible skincare solutions for expecting mothers, postpartum healing, and delicate baby skin.
          </p>
          <div style="color: #DDA15E; font-size: 0.85rem; font-weight: 700;">
            ✓ 100% Non-Toxic & Pediatrician Approved
          </div>
        </div>

        <!-- Shop Links -->
        <div class="footer-col">
          <h4>Shop Collections</h4>
          <ul class="footer-links">
            <li><a href="#products-section" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('mother-care')">Mother Skin Care</a></li>
            <li><a href="#products-section" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('baby-care')">Baby Essentials</a></li>
            <li><a href="#products-section" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.setCategoryFilter('bundles')">Gift Sets & Bundles</a></li>
            <li><a href="#routine-quiz-section">Routine Finder Quiz</a></li>
          </ul>
        </div>

        <!-- Information -->
        <div class="footer-col">
          <h4>Learn & Trust</h4>
          <ul class="footer-links">
            <li><a href="#" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.openPageModal('routine-guide')">Mother & Baby Care Guide</a></li>
            <li><a href="#" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.openPageModal('safety-standards')">Clean Safety Standards</a></li>
            <li><a href="#" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.openPageModal('about-us')">About Core & Core</a></li>
            <li><a href="#" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.openPageModal('faqs')">FAQs & Shipping Policy</a></li>
            <li><a href="#" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.openPageModal('contact-us')">Contact Customer Care</a></li>
          </ul>
        </div>

        <!-- Store Status -->
        <div class="footer-col">
          <h4>ShopBase Integration</h4>
          <p style="font-size: 0.85rem; color: #9CA3AF; margin-bottom: 12px;">
            Live connected store: <br/>
            <strong style="color: #fff;">corencore.onshopbase.com</strong>
          </p>
          <button class="admin-btn" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.openAdminHub()" style="width: 100%; justify-content: center;">
            ⚙️ Manage ShopBase Sync
          </button>
        </div>
      </div>

      <div class="footer-bottom">
        <div>
          © 2026 Core & Core Pure Care. Built for ShopBase Storefront. All rights reserved.
        </div>
        <div style="display: flex; gap: 20px;">
          <a href="#" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.openPageModal('privacy')">Privacy Policy</a>
          <a href="#" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.openPageModal('terms')">Terms of Service</a>
          <a href="#" onclick="window.CoreNCoreApp && window.CoreNCoreApp.actions.openPageModal('faqs')">Return & Refund Policy</a>
        </div>
      </div>
    </div>
  </div>
</div>
`;

fs.writeFileSync(path.join(outDir, '09-footer-section.html'), footerHtml, 'utf8');

// ============================================================================
// 10. ALL-IN-ONE MASTER TEMPLATE
// ============================================================================
const masterHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Core & Core — Pure Mother & Baby Care</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..800;1,400..800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <style>
${mainCss}
  </style>
</head>
<body>
  <!-- LAYER 1: Header -->
${headerHtml}

  <!-- LAYER 2: Body Sections -->
  <main class="storefront-layer layer-body">
${heroHtml}
${categoryHtml}
${quizHtml}
${productGridHtml}
${safetyHtml}
${reviewsHtml}
${guideHtml}
  </main>

  <!-- LAYER 3: Footer -->
${footerHtml}

  <!-- Modals & Drawers -->
  <div id="cart-drawer-root"></div>
  <div id="product-modal-root"></div>
  <div id="pages-modal-root"></div>
  <div id="admin-hub-root"></div>

  <!-- Storefront JavaScript Bundle -->
  <script src="https://cdn.jsdelivr.net/gh/rudracomputech/corencore-storefront@51473030ef6b064d373390870f874a86947455be/dist/corencore-storefront.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(outDir, '00-all-in-one-web-builder-template.html'), masterHtml, 'utf8');

console.log('✅ Generated 10 modular Web Builder section files in web-builder-sections/');
