(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const p of n.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&o(p)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}})();function P(a,e,i){const o=[{code:"USD",symbol:"$",rate:1},{code:"EUR",symbol:"€",rate:.92},{code:"GBP",symbol:"£",rate:.79},{code:"INR",symbol:"₹",rate:83.5},{code:"CAD",symbol:"CA$",rate:1.36},{code:"AUD",symbol:"AU$",rate:1.52}],s=e.cart.reduce((r,u)=>r+u.quantity,0);a.innerHTML=`
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
            ${o.map(r=>`
              <option value="${r.code}" ${e.currency===r.code?"selected":""}>
                ${r.code} (${r.symbol})
              </option>
            `).join("")}
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
            <span class="cart-badge" id="cart-counter-badge">${s}</span>
          </button>
        </div>
      </div>
    </div>
  `,a.querySelector("#currency-switcher").addEventListener("change",r=>{i.setCurrency(r.target.value)}),a.querySelector("#cart-drawer-toggle-btn").addEventListener("click",()=>{i.toggleCart(!0)}),a.querySelector("#open-admin-hub-btn").addEventListener("click",()=>{i.openAdminHub()}),a.querySelector("#header-search-btn").addEventListener("click",()=>{const r=prompt("Search Mother & Baby products (e.g. belly butter, baby wash, lavender, diaper cream):");if(r!==null){i.searchProducts(r);const u=document.getElementById("product-grid-container");u&&u.scrollIntoView({behavior:"smooth"})}}),a.querySelectorAll("[data-filter]").forEach(r=>{r.addEventListener("click",u=>{u.preventDefault();const c=r.getAttribute("data-filter");i.setCategoryFilter(c);const d=document.getElementById("product-grid-container");d&&d.scrollIntoView({behavior:"smooth"})})}),a.querySelector("#logo-home-btn").addEventListener("click",r=>{r.preventDefault(),i.setCategoryFilter("all"),window.scrollTo({top:0,behavior:"smooth"})})}function v(a,e,i){a&&(a.className="storefront-layer layer-header",a.setAttribute("data-layer","header"),P(a,e,i))}function q(a,e,i){a.innerHTML=`
    <div class="hero-section">
      <div class="container hero-grid">
        <!-- Hero Text -->
        <div class="hero-text-col">
          <div class="hero-tag">
            <span>✨ Certified Pure & Clean Formulations</span>
          </div>
          <h1 class="hero-title">
            Gentle Care for <span>Mother's Glow</span> & Baby's Delicate Skin.
          </h1>
          <p class="hero-desc">
            Scientifically crafted with cold-pressed organic botanicals and zero harsh chemicals. Pediatrician-approved, hypoallergenic solutions supporting prenatal wellness, postpartum recovery, and tender infant skin.
          </p>

          <div class="hero-buttons">
            <button class="btn-primary" id="hero-shop-mother-btn">
              <span>🌸 Shop Mother Care</span>
            </button>
            <button class="btn-secondary" id="hero-shop-baby-btn">
              <span>👶 Shop Baby Essentials</span>
            </button>
            <button class="btn-quiz" id="hero-quiz-btn">
              <span>✨ Find Your Routine</span>
            </button>
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

        <!-- Hero Image Collage -->
        <div class="hero-image-wrapper">
          <img 
            src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1000&q=80" 
            alt="Mother and newborn baby skin to skin pure care" 
            class="hero-main-img"
          />
          
          <div class="hero-floating-card">
            <div class="floating-icon">🌿</div>
            <div class="floating-text">
              <h5>Hospital Bag Must-Have</h5>
              <p>100% Ingestion-Safe Salve & Soothing Belly Oil</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,e.innerHTML=`
    <div class="trust-bar">
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
    </div>
  `,a.querySelector("#hero-shop-mother-btn").addEventListener("click",()=>{i.setCategoryFilter("mother-care");const o=document.getElementById("product-grid-container");o&&o.scrollIntoView({behavior:"smooth"})}),a.querySelector("#hero-shop-baby-btn").addEventListener("click",()=>{i.setCategoryFilter("baby-care");const o=document.getElementById("product-grid-container");o&&o.scrollIntoView({behavior:"smooth"})}),a.querySelector("#hero-quiz-btn").addEventListener("click",()=>{const o=document.getElementById("routine-quiz-container");o&&o.scrollIntoView({behavior:"smooth"})})}function M(a,e){const i=[{id:"mother-care",name:"Mother Skin Care",tagline:"Prenatal Elasticity & Postpartum Recovery",count:"7 Botanical Formulas",image:"https://images.unsplash.com/photo-1608248597359-0098f986422d?auto=format&fit=crop&w=900&q=80",actionText:"Explore Mother Care →"},{id:"baby-care",name:"Pure Baby Care",tagline:"Tear-Free, Eczema-Friendly & Soothing",count:"7 Gentle Essentials",image:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",actionText:"Explore Baby Care →"},{id:"bundles",name:"Bundles & Gift Sets",tagline:"Curated Kits with up to 25% Savings",count:"4 Complete Ritual Sets",image:"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",actionText:"Shop Value Bundles →"}];a.innerHTML=`
    <div class="categories-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Pure Collections</span>
          <h2 class="section-title">Formulated for Every Stage of Motherhood</h2>
          <p class="section-subtitle">
            From the first flutter to newborn cuddles and beyond, discover clean formulas crafted with dermatological precision.
          </p>
        </div>

        <div class="categories-grid">
          ${i.map(o=>`
            <div class="category-card" data-category="${o.id}">
              <img src="${o.image}" alt="${o.name}" class="category-img" loading="lazy" />
              <div class="category-overlay">
                <span class="category-count">${o.count}</span>
                <h3 class="category-name">${o.name}</h3>
                <p style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 12px;">${o.tagline}</p>
                <div class="category-action">${o.actionText}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `,a.querySelectorAll(".category-card").forEach(o=>{o.addEventListener("click",()=>{const s=o.getAttribute("data-category");e.setCategoryFilter(s);const n=document.getElementById("product-grid-container");n&&n.scrollIntoView({behavior:"smooth"})})})}function E(a,e,i){let o=1,s={stage:"pregnant",concern:"stretch-marks",preference:"butter"};const n=[{step:1,title:"Who are you shopping for today?",subtitle:"Select the stage to help us personalize safe, biocompatible ingredients.",options:[{key:"stage",value:"pregnant",title:"Expecting Mother",desc:"Trimesters 1, 2, or 3 (Prenatal Care)",icon:"🤰"},{key:"stage",value:"postpartum",title:"Postpartum Mother",desc:"4th Trimester recovery & breastfeeding",icon:"🤱"},{key:"stage",value:"newborn",title:"Newborn Infant",desc:"0 to 6 months delicate skin",icon:"👶"},{key:"stage",value:"toddler",title:"Baby & Toddler",desc:"6 months+ active bath & play care",icon:"🍼"}]},{step:2,title:"What is your main skin or care focus?",subtitle:"Our certified herbal formulas target specific developmental milestones.",options:[{key:"concern",value:"stretch-marks",title:"Stretch Marks & Deep Elasticity",desc:"Soothe tight, itchy stretching skin",icon:"✨"},{key:"concern",value:"nursing-comfort",title:"Nursing & Nipple Healing",desc:"100% Ingestion-safe, lanolin-free balm",icon:"💖"},{key:"concern",value:"baby-eczema",title:"Baby Dryness & Eczema",desc:"Tear-free colloidal oat barrier soothing",icon:"🛁"},{key:"concern",value:"sleep-calm",title:"Bedtime Sleep & Colic Relief",desc:"Lavender calming massage and sleep mist",icon:"🌙"}]},{step:3,title:"What texture and finish do you prefer?",subtitle:"All products are 100% non-sticky and fast-absorbing.",options:[{key:"preference",value:"butter",title:"Rich Whipped Body Butters",desc:"Deep 24hr moisture lock",icon:"🧈"},{key:"preference",value:"oil",title:"Silky Cold-Pressed Oils",desc:"Fast penetration with radiant glow",icon:"💧"},{key:"preference",value:"wash-lotion",title:"Gentle Foams & Daily Lotions",desc:"Lightweight everyday hydration",icon:"🧴"},{key:"preference",value:"full-bundle",title:"Complete Complete Care Routine",desc:"Head-to-toe bundle with 15% savings",icon:"🎁"}]}];function p(){return s.stage==="pregnant"||s.concern==="stretch-marks"?{title:"The Ultimate Prenatal Elasticity Routine",desc:"Designed to maximize skin flexibility and lock in cellular moisture from trimester 1 through postpartum.",products:[e.products.find(t=>t.id===0x38d7eccd55b1f)||e.products[0],e.products.find(t=>t.id===0x38d7ecccd8df1)||e.products[1],e.products.find(t=>t.id===0x38d7eccd55b1d)||e.products[5]]}:s.stage==="postpartum"||s.concern==="nursing-comfort"?{title:"The Fourth Trimester Mama Recovery Routine",desc:"Hospital-grade clean soothing formulas for nursing nipples, restorative firming, and perineal recovery.",products:[e.products.find(t=>t.id===0x38d7eccd55b1e)||e.products[2],e.products.find(t=>t.id===0x38d7eccd55b27)||e.products[3],e.products.find(t=>t.id===0x38d7eccd55b18)||e.products[17]]}:s.concern==="sleep-calm"?{title:"The Blissful Baby Sleep & Calming Ritual",desc:"Pediatrician-tested nighttime ritual with organic French Lavender to encourage deep, tranquil infant sleep.",products:[e.products.find(t=>t.id===0x38d7eccd55b20)||e.products[7],e.products.find(t=>t.id===0x38d7eccd55b28)||e.products[8],e.products.find(t=>t.id===0x38d7eccd55b23)||e.products[13]]}:{title:"The Pure Newborn Head-to-Toe Starter Routine",desc:"Ultra-mild, tear-free essentials to protect baby's delicate microbiome and natural moisture barrier.",products:[e.products.find(t=>t.id===0x38d7eccd55b20)||e.products[7],e.products.find(t=>t.id===0x38d7eccd55b26)||e.products[9],e.products.find(t=>t.id===0x38d7eccd55b25)||e.products[11]]}}function l(){if(o<=3){const t=n[o-1],r=o/3*100;a.innerHTML=`
        <div class="container">
          <div class="quiz-section">
            <div class="quiz-card">
              <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" style="width: ${r}%;"></div>
              </div>

              <div class="quiz-header">
                <span class="quiz-step-badge">Step ${o} of 3</span>
                <h3 class="quiz-question">${t.title}</h3>
                <p style="color: var(--color-text-muted); font-size: 0.95rem;">${t.subtitle}</p>
              </div>

              <div class="quiz-options-grid">
                ${t.options.map(d=>`
                    <div class="quiz-option ${s[d.key]===d.value?"selected":""}" data-key="${d.key}" data-value="${d.value}">
                      <span class="option-icon">${d.icon}</span>
                      <div>
                        <span class="option-title">${d.title}</span>
                        <span class="option-desc">${d.desc}</span>
                      </div>
                    </div>
                  `).join("")}
              </div>

              <div class="quiz-navigation">
                ${o>1?'<button class="btn-secondary" id="quiz-prev-btn">← Back</button>':"<div></div>"}
                <button class="btn-primary" id="quiz-next-btn">
                  ${o===3?"Get My Personalized Routine ✨":"Continue →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      `,a.querySelectorAll(".quiz-option").forEach(d=>{d.addEventListener("click",()=>{const h=d.getAttribute("data-key"),y=d.getAttribute("data-value");s[h]=y,l()})}),a.querySelector("#quiz-next-btn").addEventListener("click",()=>{o++,l()});const c=a.querySelector("#quiz-prev-btn");c&&c.addEventListener("click",()=>{o--,l()})}else{const t=p(),r=t.products.reduce((c,d)=>c+parseFloat((d==null?void 0:d.price)||0),0),u=(r*.85).toFixed(2);a.innerHTML=`
        <div class="container">
          <div class="quiz-section">
            <div class="quiz-card quiz-result-box">
              <span class="quiz-result-badge">🎯 Personalized Recommendation</span>
              <h3 class="quiz-result-title">${t.title}</h3>
              <p style="color: var(--color-text-muted); max-width: 600px; margin: 0 auto;">${t.desc}</p>

              <div class="quiz-result-products">
                ${t.products.map((c,d)=>`
                  <div class="routine-product-card">
                    <img src="${c.image}" alt="${c.title}" class="routine-product-img" />
                    <span class="routine-step-num">Step 0${d+1}</span>
                    <h5 class="routine-prod-name">${c.title}</h5>
                    <div style="font-weight: 700; color: var(--color-text-main); font-size: 1rem;">
                      ${i.formatPrice(c.price)}
                    </div>
                  </div>
                `).join("")}
              </div>

              <div class="quiz-bundle-action">
                <div class="bundle-pricing">
                  <span style="font-size: 0.85rem; color: var(--color-text-muted); display: block; font-weight: 600;">Personalized Routine Bundle (3 Items):</span>
                  <span class="bundle-price-now">${i.formatPrice(u)}</span>
                  <span class="bundle-price-was">${i.formatPrice(r)}</span>
                  <span class="bundle-discount-tag">Save 15% Today</span>
                </div>

                <div style="display: flex; gap: 12px; align-items: center;">
                  <button class="btn-secondary" id="quiz-retake-btn">Retake Quiz</button>
                  <button class="btn-primary" id="quiz-add-bundle-btn">
                    <span>🛒 Add Full Routine to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,a.querySelector("#quiz-retake-btn").addEventListener("click",()=>{o=1,l()}),a.querySelector("#quiz-add-bundle-btn").addEventListener("click",()=>{t.products.forEach(c=>{i.addToCart(c,1)}),i.toggleCart(!0)})}}l()}function $(a,e,i){const o=[{id:"all",label:"All Products (18)"},{id:"mother-care",label:"Mother Skin Care"},{id:"baby-care",label:"Baby Care"},{id:"bundles",label:"Bundles & Gift Sets"}];let s=[...e.products];if(e.activeCategory&&e.activeCategory!=="all"&&(s=s.filter(t=>t.category===e.activeCategory)),e.searchQuery){const t=e.searchQuery.toLowerCase();s=s.filter(r=>r.title.toLowerCase().includes(t)||r.tags.toLowerCase().includes(t)||r.short_description.toLowerCase().includes(t))}e.sortBy==="price-low"?s.sort((t,r)=>parseFloat(t.price)-parseFloat(r.price)):e.sortBy==="price-high"?s.sort((t,r)=>parseFloat(r.price)-parseFloat(t.price)):e.sortBy==="rating"&&s.sort((t,r)=>r.rating-t.rating),a.innerHTML=`
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
            ${o.map(t=>`
              <button class="filter-tab ${e.activeCategory===t.id?"active":""}" data-tab="${t.id}">
                ${t.label}
              </button>
            `).join("")}
          </div>

          <div style="display: flex; align-items: center; gap: 12px;">
            ${e.searchQuery?`
              <div style="font-size: 0.85rem; background: var(--color-primary-light); color: var(--color-primary); padding: 6px 14px; border-radius: var(--radius-full); display: flex; align-items: center; gap: 6px;">
                <span>Search: "<strong>${e.searchQuery}</strong>"</span>
                <button id="clear-search-btn" style="color: var(--color-primary); font-weight: 800; font-size: 1rem;">✕</button>
              </div>
            `:""}

            <select class="sort-select" id="product-sort-select">
              <option value="featured" ${e.sortBy==="featured"?"selected":""}>Featured & Best Selling</option>
              <option value="price-low" ${e.sortBy==="price-low"?"selected":""}>Price: Low to High</option>
              <option value="price-high" ${e.sortBy==="price-high"?"selected":""}>Price: High to Low</option>
              <option value="rating" ${e.sortBy==="rating"?"selected":""}>Highest Customer Rating</option>
            </select>
          </div>
        </div>

        <!-- Products Grid -->
        ${s.length===0?`
          <div style="text-align: center; padding: 60px; background: var(--bg-surface); border-radius: var(--radius-lg);">
            <h3>No products found</h3>
            <p style="color: var(--color-text-muted); margin-top: 8px;">Try a different search term or category tab.</p>
            <button class="btn-primary" id="reset-filter-btn" style="margin-top: 20px;">View All Products</button>
          </div>
        `:`
          <div class="products-grid">
            ${s.map(t=>{var c,d;const r=t.image||((c=t.images)==null?void 0:c[0]),u=((d=t.images)==null?void 0:d[1])||r;return`
                <div class="product-card" data-product-id="${t.id}">
                  <div class="product-image-box">
                    <img 
                      src="${r}" 
                      alt="${t.title}" 
                      class="product-img" 
                      loading="lazy" 
                      data-main="${r}"
                      data-hover="${u}"
                      onerror="this.src='https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80'"
                    />
                    ${t.badge?`
                      <span class="product-badge ${t.badge.toLowerCase().includes("bestseller")?"bestseller":""} ${t.badge.toLowerCase().includes("newborn")?"newborn":""}">
                        ${t.badge}
                      </span>
                    `:""}
                    <button class="quick-view-btn" data-quickview="${t.id}">
                      👁 Quick View
                    </button>
                  </div>

                  <div class="product-content">
                    <span class="product-category-tag">${t.category_label||t.product_type}</span>
                    <h3 class="product-title" title="${t.title}">${t.title}</h3>
                    
                    <div class="product-ratings">
                      <span class="stars">★★★★★</span>
                      <span style="font-weight: 700; font-size: 0.85rem; color: var(--color-text-main);">${t.rating}</span>
                      <span class="reviews-num">(${t.reviews_count})</span>
                    </div>

                    <div class="product-price-row">
                      <span class="product-price">${i.formatPrice(t.price)}</span>
                      ${t.compare_at_price?`
                        <span class="product-compare-price">${i.formatPrice(t.compare_at_price)}</span>
                      `:""}
                    </div>

                    <button class="product-add-btn" data-add-to-cart="${t.id}">
                      <span>🛒 Add to Cart</span>
                    </button>
                    ${t.shopbase_handle?`
                      <a href="https://corencore.onshopbase.com/products/${t.shopbase_handle}" 
                         target="_blank" 
                         class="shopbase-buy-link" 
                         onclick="event.stopPropagation()">
                        🛍 Buy on Store →
                      </a>
                    `:""}
                  </div>
                </div>
              `}).join("")}
          </div>
        `}
      </div>
    </div>
  `,a.querySelectorAll(".filter-tab").forEach(t=>{t.addEventListener("click",()=>{const r=t.getAttribute("data-tab");i.setCategoryFilter(r)})});const n=a.querySelector("#product-sort-select");n&&n.addEventListener("change",t=>{i.setSortBy(t.target.value)});const p=a.querySelector("#clear-search-btn");p&&p.addEventListener("click",()=>{i.searchProducts("")});const l=a.querySelector("#reset-filter-btn");l&&l.addEventListener("click",()=>{i.setCategoryFilter("all"),i.searchProducts("")}),a.querySelectorAll("[data-quickview]").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const u=t.getAttribute("data-quickview"),c=e.products.find(d=>String(d.id)===String(u));c&&i.openProductModal(c)})}),a.querySelectorAll(".product-card").forEach(t=>{t.addEventListener("click",r=>{if(r.target.closest("[data-add-to-cart]"))return;const u=t.getAttribute("data-product-id"),c=e.products.find(d=>String(d.id)===String(u));c&&i.openProductModal(c)})}),a.querySelectorAll(".product-image-box").forEach(t=>{const r=t.querySelector(".product-img"),u=r.getAttribute("data-main"),c=r.getAttribute("data-hover");c&&c!==u&&(t.addEventListener("mouseenter",()=>{r.src=c}),t.addEventListener("mouseleave",()=>{r.src=u}))}),a.querySelectorAll("[data-add-to-cart]").forEach(t=>{t.addEventListener("click",r=>{r.stopPropagation();const u=t.getAttribute("data-add-to-cart"),c=e.products.find(d=>String(d.id)===String(u));c&&(i.addToCart(c,1),i.toggleCart(!0))})})}function L(a){a.innerHTML=`
    <div class="safety-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Pure Formulation Ethics</span>
          <h2 class="section-title">The Clean Maternal Standard</h2>
          <p class="section-subtitle">
            We adhere to strict EU and Japanese cosmetics safety regulations, banning over 1,600 questionable chemicals to keep mamas and infants safe.
          </p>
        </div>

        <div class="safety-comparison-grid">
          <!-- What We Leave In -->
          <div class="safety-box good">
            <h3 class="safety-box-title">
              <span>🌿</span>
              <span>What We Formulate With:</span>
            </h3>
            <ul class="safety-list">
              <li class="safety-list-item">
                <span class="safety-icon-check">✓</span>
                <div>
                  <strong>Cold-Pressed Organic Plant Oils:</strong> Jojoba, Sweet Almond, Apricot Kernel, and Rosehip for biocompatible nourishment.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-check">✓</span>
                <div>
                  <strong>Colloidal Oatmeal & Calendula:</strong> Clinically proven barrier-reinforcing and eczema-soothing active botanicals.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-check">✓</span>
                <div>
                  <strong>Plant-Derived Ceramides & Squalane:</strong> Biomimetic lipids that replicate skin's natural protective moisture seal.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-check">✓</span>
                <div>
                  <strong>100% Non-Nano Mineral Zinc Oxide:</strong> Safest physical UV and moisture barrier for delicate infant skin.
                </div>
              </li>
            </ul>
          </div>

          <!-- What We Leave Out -->
          <div class="safety-box bad">
            <h3 class="safety-box-title">
              <span>🚫</span>
              <span>What We NEVER Allow:</span>
            </h3>
            <ul class="safety-list">
              <li class="safety-list-item">
                <span class="safety-icon-cross">✕</span>
                <div>
                  <strong>0% Parabens & Phthalates:</strong> Known endocrine disruptors completely excluded from all products.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-cross">✕</span>
                <div>
                  <strong>0% Synthetic Fragrances & Dyes:</strong> Zero artificial perfumes that can irritate newborn airways or trigger dermatitis.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-cross">✕</span>
                <div>
                  <strong>0% Sulfates (SLS / SLES):</strong> Harsh foaming agents replaced with gentle plant coconut glucosides.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-cross">✕</span>
                <div>
                  <strong>0% Mineral Oil & Petrolatum:</strong> Zero petroleum derivatives that clog maternal and infant pores.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}function T(a){const e=[{author:"Elena Rostova",stage:"Mom of 2 (Baby 4mo)",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",title:"Saved my belly during pregnancy — zero stretch marks!",text:"I used the Belly Butter morning and night and the Elasticity Oil right after the shower. I am now 4 months postpartum with twin girls and my skin bounced back amazingly with zero marks!",product:"Nourishing Belly Butter & Elasticity Oil"},{author:"Sarah Jenkins, RN",stage:"Pediatric Nurse & First-Time Mom",avatar:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",title:"The only wash that cleared my son's cradle cap & eczema",text:"As a pediatric nurse, I am extremely picky with baby products. The 2-in-1 Baby Wash and Scalp Serum are game changers. Gentle, tear-free, and leaves his curls so soft without any scent chemicals.",product:"Ultra-Gentle 2-in-1 Baby Wash"},{author:"Priya Sharma",stage:"New Mom (Baby 6w)",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",title:"Lanolin-free nipple salve is a lifesaver for breastfeeding",text:"Every other cream was sticky and made nursing painful. This herbal salve melts like butter, soothes instant cracking, and I love that I don't have to wipe it off before latching baby.",product:"Organic Nipple & Nursing Salve"}];a.innerHTML=`
    <div class="reviews-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Real Mama Experiences</span>
          <h2 class="section-title">Loved by Over 25,000 Mothers & Newborns</h2>
          <p class="section-subtitle">
            Read how our clean botanical formulations bring comfort and peace of mind to families worldwide.
          </p>
        </div>

        <div class="reviews-grid">
          ${e.map(i=>`
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <h4 class="review-title">"${i.title}"</h4>
              <p class="review-body">${i.text}</p>
              
              <div class="review-author">
                <img src="${i.avatar}" alt="${i.author}" class="author-avatar" />
                <div>
                  <div class="author-name">${i.author}</div>
                  <div class="author-meta">
                    <span>✓ Verified Buyer</span> • <span>${i.stage}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `}function S(a,e,i){if(!a)return;a.className="storefront-layer layer-body",a.setAttribute("data-layer","body"),a.querySelector("#hero-container")||(a.innerHTML=`
      <!-- Section 1: Hero Banner -->
      <section id="hero-container" class="body-layer-section"></section>

      <!-- Section 2: Trust Badges Bar -->
      <section id="trust-bar-container" class="body-layer-section"></section>

      <!-- Section 3: Category Showcase -->
      <section id="categories-container" class="body-layer-section"></section>

      <!-- Section 4: 3-Step Interactive Routine Finder Quiz -->
      <section id="routine-quiz-container" class="body-layer-section"></section>

      <!-- Section 5: Curated Product Grid & Filter Catalog -->
      <section id="product-grid-container" class="body-layer-section"></section>

      <!-- Section 6: Clean Ingredients Transparency & Safety Layer -->
      <section id="safety-standards-container" class="body-layer-section"></section>

      <!-- Section 7: Verified Mother Testimonials & Social Proof -->
      <section id="reviews-container" class="body-layer-section"></section>

      <!-- Section 8: Free Mother & Baby Routine Guide Banner -->
      <section id="guide-banner-container" class="body-layer-section"></section>
    `);const o=a.querySelector("#hero-container"),s=a.querySelector("#trust-bar-container"),n=a.querySelector("#categories-container"),p=a.querySelector("#routine-quiz-container"),l=a.querySelector("#product-grid-container"),t=a.querySelector("#safety-standards-container"),r=a.querySelector("#reviews-container");o&&s&&q(o,s,i),n&&M(n,i),p&&E(p,e,i),l&&$(l,e,i),t&&L(t),r&&T(r)}function A(a,e,i){a.innerHTML=`
    <div class="container">
      <div class="guide-banner">
        <div class="guide-banner-text">
          <h3>Download Our Free Mother & Baby Routine Guide</h3>
          <p>Get certified midwife tips on prenatal skin health, infant massage rituals, and postpartum healing.</p>
        </div>

        <form class="newsletter-box" id="guide-newsletter-form">
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
  `,e.innerHTML=`
    <div class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <!-- Brand Col -->
          <div class="footer-brand">
            <h3>🌿 Core & Core</h3>
            <p>
              Dedicated to formulating pure, biocompatible skincare solutions for expecting mothers, postpartum healing, and delicate baby skin.
            </p>
            <div style="color: var(--color-gold); font-size: 0.85rem; font-weight: 700;">
              ✓ 100% Non-Toxic & Pediatrician Approved
            </div>
          </div>

          <!-- Shop Links -->
          <div class="footer-col">
            <h4>Shop Collections</h4>
            <ul class="footer-links">
              <li><a href="#" data-footer-filter="mother-care">Mother Skin Care</a></li>
              <li><a href="#" data-footer-filter="baby-care">Baby Essentials</a></li>
              <li><a href="#" data-footer-filter="bundles">Gift Sets & Bundles</a></li>
              <li><a href="#" data-footer-nav="quiz">Routine Finder Quiz</a></li>
            </ul>
          </div>

          <!-- Information -->
          <div class="footer-col">
            <h4>Learn & Trust</h4>
            <ul class="footer-links">
              <li><a href="#" data-page="routine-guide">Mother & Baby Care Guide</a></li>
              <li><a href="#" data-page="safety-standards">Clean Safety Standards</a></li>
              <li><a href="#" data-page="about-us">About Core & Core</a></li>
              <li><a href="#" data-page="faqs">FAQs & Shipping Policy</a></li>
              <li><a href="#" data-page="contact-us">Contact Customer Care</a></li>
            </ul>
          </div>

          <!-- Store Status -->
          <div class="footer-col">
            <h4>ShopBase Integration</h4>
            <p style="font-size: 0.85rem; color: #9CA3AF; margin-bottom: 12px;">
              Live connected store: <br/>
              <strong style="color: #fff;">corencore.onshopbase.com</strong>
            </p>
            <button class="admin-btn" id="footer-admin-btn" style="width: 100%; justify-content: center;">
              ⚙️ Manage ShopBase Sync
            </button>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            © 2026 Core & Core Pure Care. Built for ShopBase Storefront. All rights reserved.
          </div>
          <div style="display: flex; gap: 20px;">
            <a href="#" data-page="privacy">Privacy Policy</a>
            <a href="#" data-page="terms">Terms of Service</a>
            <a href="#" data-page="faqs">Return & Refund Policy</a>
          </div>
        </div>
      </div>
    </div>
  `,a.querySelector("#guide-newsletter-form").addEventListener("submit",o=>{o.preventDefault(),alert("🎉 Thank you! Your free Mother & Baby Care Routine Guide has been sent to your email."),o.target.reset()}),e.querySelectorAll("[data-footer-filter]").forEach(o=>{o.addEventListener("click",s=>{s.preventDefault();const n=o.getAttribute("data-footer-filter");i.setCategoryFilter(n);const p=document.getElementById("product-grid-container");p&&p.scrollIntoView({behavior:"smooth"})})}),e.querySelectorAll("[data-footer-nav]").forEach(o=>{o.addEventListener("click",s=>{s.preventDefault();const n=document.getElementById("routine-quiz-container");n&&n.scrollIntoView({behavior:"smooth"})})}),e.querySelectorAll("[data-page]").forEach(o=>{o.addEventListener("click",s=>{s.preventDefault();const n=o.getAttribute("data-page");i.openPageModal(n)})}),e.querySelector("#footer-admin-btn").addEventListener("click",()=>{i.openAdminHub()})}function F(a,e,i){if(!a)return;a.className="storefront-layer layer-footer",a.setAttribute("data-layer","footer"),a.querySelector("#footer-main-container")||(a.innerHTML=`
      <div id="footer-guide-banner-slot"></div>
      <div id="footer-main-container"></div>
    `);const o=a.querySelector("#footer-guide-banner-slot")||document.getElementById("guide-banner-container")||a,s=a.querySelector("#footer-main-container")||a;A(o,s,i)}function w(a,e,i,o){var t,r;if(!e){a.innerHTML="";return}let s=((t=e.variants)==null?void 0:t[0])||{id:1,title:"Standard",price:e.price},n=1,p=e.image||((r=e.images)==null?void 0:r[0]);function l(){a.innerHTML=`
      <div class="modal-overlay open" id="product-modal-overlay">
        <div class="modal-box">
          <button class="modal-close-btn" id="modal-close-btn" title="Close Modal">✕</button>

          <div class="quickview-grid">
            <!-- Gallery -->
            <div class="quickview-gallery">
              <img src="${p}" alt="${e.title}" class="quickview-main-img" id="quickview-active-img" />
              ${e.images&&e.images.length>1?`
                <div class="quickview-thumbnails">
                  ${e.images.map(h=>`
                    <img 
                      src="${h}" 
                      alt="Thumbnail" 
                      class="thumb-img ${h===p?"active":""}" 
                      data-src="${h}"
                    />
                  `).join("")}
                </div>
              `:""}
            </div>

            <!-- Info & Actions -->
            <div class="quickview-info">
              <span class="product-category-tag">${e.category_label||e.product_type}</span>
              <h2 class="quickview-title">${e.title}</h2>

              <div class="product-ratings" style="margin-bottom: 16px;">
                <span class="stars">★★★★★</span>
                <span style="font-weight: 700; color: var(--color-text-main);">${e.rating}</span>
                <span class="reviews-num">(${e.reviews_count} Verified Mama Reviews)</span>
              </div>

              <div class="quickview-price-box">
                <span class="quickview-price">${o.formatPrice(s.price||e.price)}</span>
                ${e.compare_at_price?`
                  <span class="quickview-compare-price">${o.formatPrice(s.compare_at_price||e.compare_at_price)}</span>
                `:""}
              </div>

              <p style="color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
                ${e.short_description}
              </p>

              <!-- Variant Selector -->
              ${e.variants&&e.variants.length>1?`
                <div class="variant-options-group">
                  <span class="variant-label">Select Size / Bundle:</span>
                  <div class="variant-chips">
                    ${e.variants.map(h=>`
                      <button 
                        class="variant-chip ${h.id===s.id?"selected":""}" 
                        data-variant-id="${h.id}"
                      >
                        ${h.title} — ${o.formatPrice(h.price)}
                      </button>
                    `).join("")}
                  </div>
                </div>
              `:""}

              <!-- Quantity & Add to Cart -->
              <div style="display: flex; gap: 14px; align-items: center; margin: 24px 0;">
                <div class="cart-qty-stepper" style="padding: 4px;">
                  <button class="qty-btn" id="modal-qty-minus">-</button>
                  <span class="qty-num" id="modal-qty-val">${n}</span>
                  <button class="qty-btn" id="modal-qty-plus">+</button>
                </div>

                <button class="btn-primary" id="modal-add-cart-btn" style="flex-grow: 1;">
                  <span>🛒 Add to Cart • ${o.formatPrice((parseFloat(s.price||e.price)*n).toFixed(2))}</span>
                </button>
              </div>

              <!-- Safety Badges -->
              <div style="background: var(--bg-surface-secondary); padding: 16px; border-radius: var(--radius-md); margin-top: auto;">
                <h5 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--color-accent); margin-bottom: 8px;">
                  🌿 Safety Guarantee:
                </h5>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${(e.safety_badges||["Dermatologist Tested","100% Organic","Pediatrician Approved"]).map(h=>`
                    <span style="font-size: 0.8rem; background: #fff; padding: 4px 10px; border-radius: var(--radius-full); font-weight: 600; color: var(--color-text-main); border: 1px solid var(--color-border);">
                      ✓ ${h}
                    </span>
                  `).join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;const u=a.querySelector("#product-modal-overlay"),c=a.querySelector("#modal-close-btn"),d=()=>{o.closeProductModal()};c.addEventListener("click",d),u.addEventListener("click",h=>{h.target===u&&d()}),a.querySelectorAll(".thumb-img").forEach(h=>{h.addEventListener("click",()=>{p=h.getAttribute("data-src"),l()})}),a.querySelectorAll(".variant-chip").forEach(h=>{h.addEventListener("click",()=>{const y=parseInt(h.getAttribute("data-variant-id"));s=e.variants.find(f=>f.id===y)||s,l()})}),a.querySelector("#modal-qty-minus").addEventListener("click",()=>{n>1&&(n--,l())}),a.querySelector("#modal-qty-plus").addEventListener("click",()=>{n++,l()}),a.querySelector("#modal-add-cart-btn").addEventListener("click",()=>{o.addToCart(e,n,s),o.closeProductModal(),o.toggleCart(!0)})}l()}function b(a,e,i){const o=e.isCartOpen,s=e.cart.reduce((m,g)=>m+parseFloat(g.price)*g.quantity,0);let n=0;e.appliedPromo==="MOMCARE15"?n=s*.15:e.appliedPromo==="PUREBABY"&&(n=Math.min(10,s));const p=Math.max(0,s-n),l=50,t=Math.min(100,s/l*100),r=Math.max(0,l-s);a.innerHTML=`
    <!-- Overlay -->
    <div class="cart-overlay ${o?"open":""}" id="cart-drawer-overlay"></div>

    <!-- Drawer -->
    <div class="cart-drawer ${o?"open":""}">
      <!-- Header -->
      <div class="cart-header">
        <h3>Shopping Bag (${e.cart.reduce((m,g)=>m+g.quantity,0)})</h3>
        <button class="cart-close-btn" id="cart-close-btn" title="Close Bag">✕</button>
      </div>

      <!-- Free Shipping Tracker -->
      <div class="free-shipping-tracker">
        <div class="free-shipping-text">
          ${r===0?"🎉 You have unlocked <strong>FREE Standard Shipping!</strong>":`Add <strong>${i.formatPrice(r.toFixed(2))}</strong> more for <strong>FREE Shipping!</strong>`}
        </div>
        <div class="free-shipping-bar">
          <div class="free-shipping-fill" style="width: ${t}%;"></div>
        </div>
      </div>

      <!-- Cart Items -->
      <div class="cart-items-list">
        ${e.cart.length===0?`
          <div class="cart-empty">
            <div class="cart-empty-icon">🛍️</div>
            <h4>Your cart is currently empty</h4>
            <p style="font-size: 0.9rem; margin: 8px 0 20px;">Explore our pure mother and baby formulas to get started.</p>
            <button class="btn-primary" id="cart-start-shopping-btn">Start Shopping</button>
          </div>
        `:e.cart.map(m=>`
          <div class="cart-item" data-item-id="${m.cartItemId}">
            <img src="${m.image}" alt="${m.title}" class="cart-item-img" />
            <div class="cart-item-details">
              <h4 class="cart-item-title">${m.title}</h4>
              ${m.variantTitle?`<div class="cart-item-variant">${m.variantTitle}</div>`:""}
              
              <div class="cart-item-bottom">
                <div class="cart-qty-stepper">
                  <button class="qty-btn" data-cart-minus="${m.cartItemId}">-</button>
                  <span class="qty-num">${m.quantity}</span>
                  <button class="qty-btn" data-cart-plus="${m.cartItemId}">+</button>
                </div>

                <div class="cart-item-price">
                  ${i.formatPrice((parseFloat(m.price)*m.quantity).toFixed(2))}
                </div>
              </div>
            </div>
            <button class="cart-item-remove" data-cart-remove="${m.cartItemId}" style="color: var(--color-text-light); font-size: 0.9rem; margin-left: 6px;" title="Remove">✕</button>
          </div>
        `).join("")}
      </div>

      <!-- Cart Footer -->
      ${e.cart.length>0?`
        <div class="cart-footer">
          <!-- Promo Code -->
          <div class="promo-row">
            <input 
              type="text" 
              class="promo-input" 
              id="promo-code-input" 
              placeholder="Promo Code (e.g. MOMCARE15)" 
              value="${e.appliedPromo||""}"
            />
            <button class="promo-apply-btn" id="promo-apply-btn">
              ${e.appliedPromo?"Applied ✓":"Apply"}
            </button>
          </div>

          <!-- Summary -->
          <div class="cart-summary-row">
            <span>Subtotal</span>
            <span>${i.formatPrice(s.toFixed(2))}</span>
          </div>

          ${n>0?`
            <div class="cart-summary-row" style="color: var(--color-accent); font-weight: 700;">
              <span>Promo Discount (${e.appliedPromo})</span>
              <span>-${i.formatPrice(n.toFixed(2))}</span>
            </div>
          `:""}

          <div class="cart-summary-row">
            <span>Estimated Shipping</span>
            <span>${r===0?"FREE":i.formatPrice("4.99")}</span>
          </div>

          <div class="cart-total-row">
            <span>Total</span>
            <span>${i.formatPrice((p+(r===0?0:4.99)).toFixed(2))}</span>
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
      `:""}
    </div>
  `;const u=a.querySelector("#cart-drawer-overlay"),c=a.querySelector("#cart-close-btn"),d=()=>i.toggleCart(!1);u&&u.addEventListener("click",d),c&&c.addEventListener("click",d);const h=a.querySelector("#cart-start-shopping-btn");h&&h.addEventListener("click",()=>{d();const m=document.getElementById("product-grid-container");m&&m.scrollIntoView({behavior:"smooth"})}),a.querySelectorAll("[data-cart-minus]").forEach(m=>{m.addEventListener("click",()=>{const g=m.getAttribute("data-cart-minus");i.updateCartQuantity(g,-1)})}),a.querySelectorAll("[data-cart-plus]").forEach(m=>{m.addEventListener("click",()=>{const g=m.getAttribute("data-cart-plus");i.updateCartQuantity(g,1)})}),a.querySelectorAll("[data-cart-remove]").forEach(m=>{m.addEventListener("click",()=>{const g=m.getAttribute("data-cart-remove");i.removeFromCart(g)})});const y=a.querySelector("#promo-apply-btn"),f=a.querySelector("#promo-code-input");y&&f&&y.addEventListener("click",()=>{const m=f.value.trim().toUpperCase();m==="MOMCARE15"||m==="PUREBABY"?i.applyPromo(m):m===""?i.applyPromo(""):alert("Invalid promo code. Try 'MOMCARE15' for 15% off!")});const k=a.querySelector("#cart-checkout-btn");k&&k.addEventListener("click",()=>{i.proceedToCheckout()})}function C(a,e,i){if(!e){a.innerHTML="";return}const o={"routine-guide":{title:"Mother & Baby Care Routine Guide",subtitle:"Gentle, Biocompatible Daily Rituals for Mama and Child",content:`
        <h3>1. The Prenatal Elasticity Protocol (Trimesters 1 - 3)</h3>
        <p>During pregnancy, hormonal shifts and rapid abdominal expansion place severe tensile stress on the dermal collagen matrix.</p>
        <ul>
          <li><strong>Morning Routine:</strong> Apply <em>Pure Botanical Stretch Mark Elasticity Oil</em> to damp skin right after the morning shower to hydrate the deep epidermis.</li>
          <li><strong>Evening Routine:</strong> Massage a generous dollop of <em>Organic Nourishing Belly Butter</em> across belly, hips, thighs, and lower back to create a protective 24-hour lipid seal.</li>
          <li><strong>Facial Care:</strong> Use our pregnancy-safe <em>Mother Glow Hydrating Face Elixir</em> and mineral SPF 50 to combat melasma and hormonal dryness.</li>
        </ul>

        <h3>2. Postpartum & Nursing Healing (The 4th Trimester)</h3>
        <p>The first 12 weeks postpartum require intense tissue recovery and tender nursing support.</p>
        <ul>
          <li><strong>Nursing Care:</strong> Smooth <em>Organic Nipple Salve</em> over nipples after every single feeding. 100% lanolin-free and completely safe if swallowed by baby.</li>
          <li><strong>Perineal Healing:</strong> Soak in a warm <em>Herbal Sitz Bath</em> with organic Witch Hazel and Calendula daily to reduce swelling and discomfort.</li>
          <li><strong>Skin Firming:</strong> Apply <em>Postpartum Restorative Firming Serum</em> to belly and waist twice daily to boost natural elasticity.</li>
        </ul>

        <h3>3. Newborn Bath & Sleep Rituals</h3>
        <p>Newborn skin is 30% thinner than adult skin and easily loses hydration.</p>
        <ul>
          <li><strong>Bath Time (2-3x per week):</strong> Wash with lukewarm water and 1 pump of tear-free <em>Ultra-Gentle 2-in-1 Baby Wash</em>.</li>
          <li><strong>Diaper Defense:</strong> Apply a protective swipe of <em>Gentle Zinc Barrier Diaper Cream</em> at every change.</li>
          <li><strong>Bedtime Massage:</strong> Warm 3 drops of <em>Calming Baby Bedtime Massage Oil</em> in your palms and massage baby's back, tummy, and feet before swaddling.</li>
        </ul>
      `},"safety-standards":{title:"Our Clean Formulation Safety Standards",subtitle:"Zero Compromise on Maternal and Infant Biocompatibility",content:`
        <h3>Third-Party Tested & Certified Pure</h3>
        <p>Every formula developed under the Core & Core name undergoes stringent testing protocols:</p>
        <ul>
          <li><strong>Pediatrician & Dermatologist Verified:</strong> 100% hypoallergenic, non-irritating patch testing on sensitive skin panels.</li>
          <li><strong>1,600+ Banned Substances:</strong> We exceed standard US FDA cosmetic regulations by adopting European Union and Japanese safety standards.</li>
          <li><strong>100% Lanolin & Cruelty Free:</strong> We use plant-based waxes, botanical squalane, and unrefined raw seed butters.</li>
          <li><strong>Sustainable Bamboo & Glass Packaging:</strong> Biodegradable wipes and recyclable amber glass bottles to protect active botanicals from UV degradation.</li>
        </ul>
      `},"about-us":{title:"About Core & Core Pure Care",subtitle:"Founded by Mothers, Formulated by Pediatric Dermatologists",content:`
        <p>Core & Core was born out of a simple need: to provide expecting mothers and newborn babies with completely pure, uncompromised skincare that actually delivers results without exposing delicate systems to synthetic fragrances or hormone-disrupting chemicals.</p>
        <p>Operating through our official ShopBase storefront at <strong>corencore.onshopbase.com</strong>, we proudly fulfill thousands of orders each month to parents who value clean living, organic efficacy, and the peace of mind that comes with certified safe ingredients.</p>
      `},faqs:{title:"Frequently Asked Questions & Policies",subtitle:"Everything You Need to Know About Shipping, Returns & Usage",content:`
        <h3>Is the Nipple Salve safe for my baby to ingest while breastfeeding?</h3>
        <p>Yes, absolutely! Our formula is 100% food-grade organic, lanolin-free, and contains zero synthetic preservatives. You do not need to wash or wipe it off before nursing your baby.</p>

        <h3>Are your products safe for the first trimester?</h3>
        <p>Yes. All Core & Core formulas are crafted without retinol, salicylic acid, artificial dyes, phthalates, or harmful essential oils, making them safe from day one of pregnancy.</p>

        <h3>What is your shipping policy?</h3>
        <p>We offer <strong>FREE Standard Shipping on all orders over $50</strong>. Orders are processed within 24 hours and delivered in 3-5 business days with full online tracking.</p>

        <h3>What is your 30-Day Mama Guarantee?</h3>
        <p>If you or your baby are not completely in love with any product, simply contact our support team within 30 days for a prompt, hassle-free replacement or full refund.</p>
      `},"contact-us":{title:"Contact Customer Care",subtitle:"Our Maternal Care Team is Here to Support You",content:`
        <p>Have questions about a product, routine recommendations, or your ShopBase order?</p>
        <div style="background: var(--bg-surface-secondary); padding: 20px; border-radius: var(--radius-md); margin: 20px 0;">
          <p><strong>Email:</strong> support@corencore.com</p>
          <p><strong>Store Domain:</strong> corencore.onshopbase.com</p>
          <p><strong>Hours:</strong> Monday – Saturday, 9:00 AM – 6:00 PM EST</p>
        </div>
      `}},s=o[e]||o["routine-guide"];a.innerHTML=`
    <div class="modal-overlay open" id="page-modal-overlay">
      <div class="modal-box" style="max-width: 760px; padding: 48px 40px;">
        <button class="modal-close-btn" id="page-modal-close-btn">✕</button>
        
        <span class="product-category-tag" style="color: var(--color-accent);">Core & Core Guide</span>
        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; margin: 8px 0 6px; line-height: 1.25;">
          ${s.title}
        </h2>
        <p style="color: var(--color-text-muted); font-size: 1rem; margin-bottom: 28px;">
          ${s.subtitle}
        </p>

        <div style="color: var(--color-text-main); font-size: 0.95rem; line-height: 1.7;">
          ${s.content}
        </div>

        <div style="margin-top: 36px; padding-top: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: flex-end;">
          <button class="btn-primary" id="page-modal-done-btn">Back to Store</button>
        </div>
      </div>
    </div>
  `;const n=a.querySelector("#page-modal-overlay"),p=a.querySelector("#page-modal-close-btn"),l=a.querySelector("#page-modal-done-btn"),t=()=>i.closePageModal();p&&p.addEventListener("click",t),l&&l.addEventListener("click",t),n&&n.addEventListener("click",r=>{r.target===n&&t()})}const _=[{id:"00",file:"00-all-in-one-web-builder-template.html",title:"Complete Storefront Master Template",layer:"All-In-One",desc:"Full 3-Layer HTML/CSS/JS template ready for full-page Web Builder import."},{id:"01",file:"01-header-section.html",title:"Header & Announcement Bar",layer:"Layer 1: Header",desc:"Announcement ticker, brand logo, navigation links, multi-currency switcher & cart counter."},{id:"02",file:"02-hero-banner-section.html",title:"Hero Banner & Trust Guarantees",layer:"Layer 2: Body",desc:"Maternal glow hero, floating badges, value stats, and pediatrician trust bar."},{id:"03",file:"03-category-showcase-section.html",title:"Curated Category Gateway",layer:"Layer 2: Body",desc:"Mother Skin Care, Pure Baby Care, and Bundles & Gift Sets cards."},{id:"04",file:"04-routine-finder-quiz-section.html",title:"Interactive Routine Finder Quiz",layer:"Layer 2: Body",desc:"3-step questionnaire with dynamic bundle recommendations & 15% discount."},{id:"05",file:"05-product-grid-section.html",title:"18-Product Catalog Grid",layer:"Layer 2: Body",desc:"All 18 certified products with category tabs, prices, star ratings & Add to Cart."},{id:"06",file:"06-safety-standards-section.html",title:"Clean Safety & Ingredients Standards",layer:"Layer 2: Body",desc:"What we formulate with vs. 0% Banned endocrine disruptors comparison table."},{id:"07",file:"07-customer-reviews-section.html",title:"Verified Mother Testimonials",layer:"Layer 2: Body",desc:"Real reviews from expecting mothers, twin moms, and pediatric nurses."},{id:"08",file:"08-routine-guide-banner-section.html",title:"Free Routine Guide Download Banner",layer:"Layer 2: Body",desc:"Midwife-authored routine guide lead capture & newsletter signup."},{id:"09",file:"09-footer-section.html",title:"Footer Layer & Trust Badges",layer:"Layer 3: Footer",desc:"Brand story, collection links, policy modals, payment icons & copyright."}];function B(a,e,i){if(!e.isAdminHubOpen){a.innerHTML="";return}a.innerHTML=`
    <div class="modal-overlay open" id="admin-hub-overlay">
      <div class="modal-box admin-hub-box" style="max-width: 900px; width: 95%;">
        <button class="modal-close-btn" id="admin-hub-close-btn">✕</button>

        <div class="admin-hub-header">
          <div class="admin-hub-icon">🎨</div>
          <div>
            <h2 style="font-family: var(--font-heading); font-size: 1.8rem; line-height: 1.2;">
              ShopBase Web Builder & Modular Sections Hub
            </h2>
            <p style="color: var(--color-text-muted); font-size: 0.9rem;">
              Connected Template: <strong>Template #9155 (Library #63494)</strong> | Store: <strong>corencore.onshopbase.com</strong>
            </p>
          </div>
        </div>

        <div class="admin-status-indicator" style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="status-dot"></span>
            <span>Web Builder: <strong>Ready for Section Customization</strong></span>
          </div>
          <a 
            href="https://corencore.onshopbase.com/admin/builder/template/9155?library_id=63494" 
            target="_blank" 
            class="btn btn-primary" 
            style="padding: 8px 16px; font-size: 0.85rem;"
          >
            🎨 Open ShopBase Web Builder ↗
          </a>
        </div>

        <div style="margin: 20px 0 10px;">
          <h3 style="font-family: var(--font-heading); font-size: 1.3rem; margin-bottom: 6px;">
            Modular Web Builder Sections (Header, Body, Footer)
          </h3>
          <p style="font-size: 0.9rem; color: var(--color-text-muted);">
            Each section below is an independent, customizable block. Click <strong>Copy Section HTML</strong> to paste directly into a <strong>Custom HTML / Code Block</strong> in your ShopBase Web Builder.
          </p>
        </div>

        <!-- Sections Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 14px; max-height: 380px; overflow-y: auto; padding-right: 6px; margin-bottom: 20px;">
          ${_.map(r=>`
            <div class="admin-action-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 14px; background: var(--bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--color-primary); background: var(--color-primary-light); padding: 2px 8px; border-radius: 4px; display: inline-block; margin-bottom: 6px;">
                  ${r.layer}
                </span>
                <h4 style="font-size: 0.95rem; margin-bottom: 4px; font-weight: 700;">${r.title}</h4>
                <p style="font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.4; margin-bottom: 12px;">${r.desc}</p>
              </div>
              <button 
                class="btn-secondary copy-section-btn" 
                data-file="${r.file}"
                style="padding: 8px 12px; font-size: 0.82rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px;"
              >
                <span>📋</span>
                <span>Copy Section HTML</span>
              </button>
            </div>
          `).join("")}
        </div>

        <!-- API Actions Row -->
        <div class="admin-actions-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; padding-top: 14px; border-top: 1px solid var(--color-border);">
          <button class="btn-primary" id="btn-sync-catalog-action" style="padding: 10px 14px; font-size: 0.85rem;">
            <span>⚡ Sync 18 Products to Store</span>
          </button>
          <button class="btn-secondary" id="btn-sync-pages-action" style="padding: 10px 14px; font-size: 0.85rem;">
            <span>📝 Sync CMS Content Pages</span>
          </button>
        </div>
        <div id="admin-hub-status-log" style="font-size: 0.82rem; margin-top: 8px; font-weight: 600; text-align: center;"></div>
      </div>
    </div>
  `;const o=a.querySelector("#admin-hub-overlay"),s=a.querySelector("#admin-hub-close-btn"),n=()=>i.closeAdminHub();s&&s.addEventListener("click",n),o&&o.addEventListener("click",r=>{r.target===o&&n()}),a.querySelectorAll(".copy-section-btn").forEach(r=>{r.addEventListener("click",async()=>{const u=r.getAttribute("data-file");r.innerHTML="<span>⏳ Copying...</span>";try{const c=await fetch(`/api/web-builder/sections/${u}`);if(c.ok){const d=await c.text();await navigator.clipboard.writeText(d),r.innerHTML="<span>✅ Copied!</span>",setTimeout(()=>{r.innerHTML="<span>📋 Copy Section HTML</span>"},2500)}else r.innerHTML="<span>✅ Section Ready in /web-builder-sections/</span>",setTimeout(()=>{r.innerHTML="<span>📋 Copy Section HTML</span>"},2500)}catch{r.innerHTML="<span>✅ Open /web-builder-sections/"+u+"</span>",setTimeout(()=>{r.innerHTML="<span>📋 Copy Section HTML</span>"},2500)}})});const p=a.querySelector("#btn-sync-catalog-action"),l=a.querySelector("#admin-hub-status-log");p.addEventListener("click",async()=>{p.disabled=!0,p.innerHTML="<span>⏳ Syncing to ShopBase...</span>",l.style.color="var(--color-primary)",l.textContent="Updating 18 products via Admin REST API...";try{const u=await(await fetch("/api/sync-catalog",{method:"POST"})).json();u.success?(l.style.color="#2E7D32",l.textContent=`✅ ${u.message}`,p.innerHTML="<span>✓ Synced Successfully</span>"):(l.style.color="#D32F2F",l.textContent=`❌ ${u.error||"Sync failed"}`,p.innerHTML="<span>Retry Sync</span>",p.disabled=!1)}catch(r){l.style.color="#D32F2F",l.textContent=`❌ Network Error: ${r.message}`,p.innerHTML="<span>Retry Sync</span>",p.disabled=!1}});const t=a.querySelector("#btn-sync-pages-action");t.addEventListener("click",async()=>{t.disabled=!0,t.innerHTML="<span>⏳ Syncing Pages...</span>",l.style.color="var(--color-primary)",l.textContent="Publishing Routine Guide & Clean Safety Standards...";try{const u=await(await fetch("/api/sync-pages",{method:"POST"})).json();u.success?(l.style.color="#2E7D32",l.textContent="✅ Pages published to ShopBase store!",t.innerHTML="<span>✓ Pages Synced</span>"):(l.style.color="#D32F2F",l.textContent=`❌ ${u.error||"Pages sync failed"}`,t.innerHTML="<span>Retry Sync</span>",t.disabled=!1)}catch(r){l.style.color="#D32F2F",l.textContent=`❌ Network Error: ${r.message}`,t.innerHTML="<span>Retry Sync</span>",t.disabled=!1}})}const x={USD:{symbol:"$",rate:1},EUR:{symbol:"€",rate:.92},GBP:{symbol:"£",rate:.79},INR:{symbol:"₹",rate:83.5},CAD:{symbol:"CA$",rate:1.36},AUD:{symbol:"AU$",rate:1.52}},H=[{id:0x38d7eccd55b1f,shopbase_handle:"4-in1-kitchen-colander-with-mixing-bowl-set",title:"Organic Nourishing Belly Butter & Stretch Mark Balm",handle:"organic-nourishing-belly-butter",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"19.99",compare_at_price:"25.99",rating:4.9,reviews_count:248,badge:"Bestseller",short_description:"Rich organic whipped butter with Shea, Rosehip, and Vitamin E to soothe stretching skin and reduce stretch marks.",tags:"mother-care, belly-butter, stretch-marks, organic, prenatal, bestseller",image:"https://img.btdmp.com/10687/10687861/products/17856583041b5616c81c.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17856583041b5616c81c.jpeg","https://img.btdmp.com/10687/10687861/products/17856583049a756cd193.jpeg"],variants:[{id:0x38d8370d40b96,title:"1 PC",price:"19.99",compare_at_price:"25.99"},{id:0x38d8370d40b98,title:"2 Pack",price:"35.99",compare_at_price:"46.99"}],safety_badges:["Pediatrician Approved","Dermatologist Tested","100% Organic","Cruelty Free"]},{id:0x38d7ecccd8df1,shopbase_handle:"adjustable-connected-dog-boots-ultimate-paw-protection",title:"Pure Botanical Stretch Mark Elasticity Oil",handle:"pure-botanical-stretch-mark-oil",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"20.99",compare_at_price:"27.29",rating:4.9,reviews_count:184,badge:"Award Winner",short_description:"Fast-absorbing luxurious botanical blend with Sweet Almond, Jojoba, and Evening Primrose oils for silky soft elasticity.",tags:"mother-care, belly-oil, elasticity, stretch-marks, organic",image:"https://img.btdmp.com/10687/10687861/products/17852154315d272b4005.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17852154315d272b4005.jpeg","https://img.btdmp.com/10687/10687861/products/17852154314903a86d99.png"],variants:[{id:0x38d83700b3d7e,title:"XS",price:"20.99",compare_at_price:"27.29"},{id:0x38d83700b3d80,title:"S",price:"21.99",compare_at_price:"28.59"}],safety_badges:["100% Non-Toxic","Plant Squalane","Non-Greasy"]},{id:0x38d7eccd55b1e,shopbase_handle:"automatic-flip-egg-storage-box",title:"Organic Nipple & Nursing Soothing Salve",handle:"organic-nipple-nursing-salve",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"9.99",compare_at_price:"12.99",rating:5,reviews_count:312,badge:"Hospital Bag Must-Have",short_description:"100% Lanolin-Free, food-grade soothing balm for breastfeeding moms. No need to wash off before nursing.",tags:"mother-care, nursing, nipple-salve, lanolin-free, organic, hospital-bag",image:"https://img.btdmp.com/10687/10687861/products/1785658303b39cbf55b4.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658303b39cbf55b4.jpeg","https://img.btdmp.com/10687/10687861/products/1785658303ddccfd15cb.jpeg"],variants:[{id:0x38d8370d40b92,title:"1 PC",price:"9.99",compare_at_price:"12.99"},{id:0x38d8370d40b93,title:"2 Pack",price:"18.99",compare_at_price:"24.99"}],safety_badges:["100% Ingestion-Safe","Lanolin Free","Non-Sticky"]},{id:0x38d7eccd55b20,shopbase_handle:"heart-beating-and-breathing-routine-soothing-relief-koala",title:"Ultra-Gentle 2-in-1 Baby Wash & Tear-Free Shampoo",handle:"ultra-gentle-2in1-baby-wash-shampoo",product_type:"Baby Care",category:"baby-care",category_label:"Baby Care",price:"22.99",compare_at_price:"29.89",rating:5,reviews_count:420,badge:"#1 Newborn Essential",short_description:"Tear-free, pH 5.5 balanced head-to-toe cleanser with Colloidal Oat and Organic Calendula. Safe for sensitive newborn skin.",tags:"baby-care, baby-wash, tear-free, shampoo, newborn, eczema-safe, bestseller",image:"https://img.btdmp.com/10687/10687861/products/1785658306e53d2f6617.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658306e53d2f6617.jpeg","https://img.btdmp.com/10687/10687861/products/17856583060ab7195777.png"],variants:[{id:0x38d8370d40b97,title:"1 PC",price:"22.99",compare_at_price:"29.89"}],safety_badges:["Pediatrician Approved","Tear-Free Certified","Eczema Friendly","Hypoallergenic"]},{id:0x38d7eccd55b26,shopbase_handle:"lightweight-casual-men-slip-on-shoes",title:"Gentle Zinc Barrier Diaper Rash Relief Cream",handle:"gentle-zinc-barrier-diaper-rash-cream",product_type:"Baby Care",category:"baby-care",category_label:"Baby Care",price:"19.99",compare_at_price:"25.99",rating:5,reviews_count:360,badge:"Instant Relief",short_description:"Fast-acting 14% Non-Nano Zinc Oxide barrier paste with organic Shea and Beeswax to seal out wetness.",tags:"baby-care, diaper-cream, zinc-oxide, rash-relief, newborn-safe",image:"https://img.btdmp.com/10687/10687861/products/1785658325286d9fe49b.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658325286d9fe49b.jpeg","https://img.btdmp.com/10687/10687861/products/1785658325ba62fb0f90.jpeg"],variants:[{id:1000020603309e3,title:"S",price:"19.99",compare_at_price:"25.99"},{id:0x38d8370d40bc9,title:"M",price:"19.99",compare_at_price:"25.99"}],safety_badges:["Pediatrician Tested","Petrolatum Free","Fast Acting"]},{id:0x38d7eccd55b17,shopbase_handle:"wing-rails-grill-chicken-wings",title:"The Complete New Mother Recovery & Care Kit",handle:"complete-new-mother-recovery-care-kit",product_type:"Bundles & Gifts",category:"bundles",category_label:"Prenatal & Postpartum Bundles",price:"9.99",compare_at_price:"12.99",rating:5,reviews_count:210,badge:"Best Gift for Mom",short_description:"Everything a new mom needs: Nourishing Belly Butter, Elasticity Oil, Nipple Salve, and Calming Bath Salts.",tags:"bundles, mother-care, baby-shower, gift-set, postpartum-kit, bestseller",image:"https://img.btdmp.com/10687/10687861/products/178565829599e6634c63.png",images:["https://img.btdmp.com/10687/10687861/products/178565829599e6634c63.png","https://img.btdmp.com/10687/10687861/products/178565829559290fe615.png"],variants:[{id:0x38d8370d40b77,title:"Buy 1",price:"9.99",compare_at_price:"12.99"}],safety_badges:["Luxury Gift Packaging","Save 23% on Bundle","Midwife Recommended"]},{id:0x38d7eccd55b19,shopbase_handle:"wire-stripping-tool-wire-twisting-connector-drill-attachmen",title:"Welcome Baby Newborn Organic Essentials Set",handle:"welcome-baby-newborn-organic-essentials-set",product_type:"Bundles & Gifts",category:"bundles",category_label:"Prenatal & Postpartum Bundles",price:"30.99",compare_at_price:"40.29",rating:5,reviews_count:188,badge:"Baby Shower Top Pick",short_description:"The complete newborn starter: 2-in-1 Wash, Bedtime Massage Oil, Zinc Diaper Cream, and Bamboo Wipes.",tags:"bundles, baby-care, baby-shower, newborn-set, organic-baby",image:"https://img.btdmp.com/10687/10687861/products/17856582973dc7398e29.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17856582973dc7398e29.jpeg","https://img.btdmp.com/10687/10687861/products/17856582972724c0a2ba.jpeg"],variants:[{id:0x38d8370d40b8a,title:"1 Set",price:"30.99",compare_at_price:"40.29"}],safety_badges:["Organic Cotton Bag","Save 23% on Bundle","Pediatrician Tested"]}];class I{constructor(){this.state={products:H,activeCategory:"all",currency:"USD",searchQuery:"",sortBy:"featured",cart:JSON.parse(localStorage.getItem("corencore_cart")||"[]"),isCartOpen:!1,activeModalProduct:null,activePageKey:null,isAdminHubOpen:!1,appliedPromo:localStorage.getItem("corencore_promo")||null,quizStep:1,quizAnswers:{}},this.dom={layerHeader:document.getElementById("layer-header")||document.getElementById("header-container"),layerBody:document.getElementById("layer-body")||document.getElementById("main-content"),layerFooter:document.getElementById("layer-footer")||document.getElementById("footer-container"),cartDrawer:document.getElementById("cart-drawer-root"),productModal:document.getElementById("product-modal-root"),pagesModal:document.getElementById("pages-modal-root"),adminHub:document.getElementById("admin-hub-root")},this.actions={setCurrency:this.setCurrency.bind(this),formatPrice:this.formatPrice.bind(this),setCategoryFilter:this.setCategoryFilter.bind(this),searchProducts:this.searchProducts.bind(this),setSortBy:this.setSortBy.bind(this),toggleCart:this.toggleCart.bind(this),addToCart:this.addToCart.bind(this),updateCartQuantity:this.updateCartQuantity.bind(this),removeFromCart:this.removeFromCart.bind(this),applyPromo:this.applyPromo.bind(this),proceedToCheckout:this.proceedToCheckout.bind(this),openProductModal:this.openProductModal.bind(this),closeProductModal:this.closeProductModal.bind(this),openPageModal:this.openPageModal.bind(this),closePageModal:this.closePageModal.bind(this),openAdminHub:this.openAdminHub.bind(this),closeAdminHub:this.closeAdminHub.bind(this)}}async init(){console.log("🌸 Initializing Core & Core 3-Layer Storefront (Header / Body / Footer)..."),await this.fetchProducts(),this.render()}async fetchProducts(){try{const e=await fetch("/api/products");if(e.ok){const i=await e.json();i.products&&i.products.length&&(this.state.products=i.products,console.log(`Loaded ${i.products.length} products from backend API`))}}catch(e){console.warn("Using offline fallback products:",e.message)}}setCurrency(e){this.state.currency=e,this.render()}formatPrice(e){const i=parseFloat(e)||0,o=x[this.state.currency]||x.USD,s=(i*o.rate).toFixed(2);return`${o.symbol}${s}`}setCategoryFilter(e){this.state.activeCategory=e,S(this.dom.layerBody,this.state,this.actions),v(this.dom.layerHeader,this.state,this.actions)}searchProducts(e){this.state.searchQuery=e,S(this.dom.layerBody,this.state,this.actions)}setSortBy(e){this.state.sortBy=e,S(this.dom.layerBody,this.state,this.actions)}toggleCart(e){this.state.isCartOpen=e,b(this.dom.cartDrawer,this.state,this.actions)}addToCart(e,i=1,o=null){var l,t;const s=o||((l=e.variants)==null?void 0:l[0])||{id:1,title:"Standard",price:e.price},n=`${e.id}-${s.id}`,p=this.state.cart.findIndex(r=>r.cartItemId===n);p>-1?this.state.cart[p].quantity+=i:this.state.cart.push({cartItemId:n,id:e.id,variantId:s.id,shopbaseHandle:e.shopbase_handle||e.handle,title:e.title,variantTitle:s.title!=="Standard"&&s.title!=="1 PC"?s.title:"",price:s.price||e.price,image:e.image||((t=e.images)==null?void 0:t[0]),quantity:i}),this.saveCart(),v(this.dom.layerHeader,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions)}updateCartQuantity(e,i){const o=this.state.cart.find(s=>s.cartItemId===e);if(o&&(o.quantity+=i,o.quantity<=0)){this.removeFromCart(e);return}this.saveCart(),v(this.dom.layerHeader,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions)}removeFromCart(e){this.state.cart=this.state.cart.filter(i=>i.cartItemId!==e),this.saveCart(),v(this.dom.layerHeader,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions)}saveCart(){localStorage.setItem("corencore_cart",JSON.stringify(this.state.cart))}applyPromo(e){this.state.appliedPromo=e,localStorage.setItem("corencore_promo",e),b(this.dom.cartDrawer,this.state,this.actions)}proceedToCheckout(){if(!this.state.cart.length)return;const e=this.state.cart[0];let i;e.shopbaseHandle?i=`https://corencore.onshopbase.com/products/${e.shopbaseHandle}`:i="https://corencore.onshopbase.com/collections/all",window.open(i,"_blank")}openProductModal(e){this.state.activeModalProduct=e,w(this.dom.productModal,e,this.state,this.actions)}closeProductModal(){this.state.activeModalProduct=null,w(this.dom.productModal,null,this.state,this.actions)}openPageModal(e){this.state.activePageKey=e,C(this.dom.pagesModal,e,this.actions)}closePageModal(){this.state.activePageKey=null,C(this.dom.pagesModal,null,this.actions)}openAdminHub(){this.state.isAdminHubOpen=!0,B(this.dom.adminHub,this.state,this.actions)}closeAdminHub(){this.state.isAdminHubOpen=!1,B(this.dom.adminHub,this.state,this.actions)}render(){v(this.dom.layerHeader,this.state,this.actions),S(this.dom.layerBody,this.state,this.actions),F(this.dom.layerFooter,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions),w(this.dom.productModal,this.state.activeModalProduct,this.state,this.actions),C(this.dom.pagesModal,this.state.activePageKey,this.actions),B(this.dom.adminHub,this.state,this.actions)}}const z=new I;document.addEventListener("DOMContentLoaded",()=>{z.init()});
