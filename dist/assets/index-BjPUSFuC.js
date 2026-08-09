(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function r(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=r(i);fetch(i.href,n)}})();function x(a,e,r){const s=[{code:"USD",symbol:"$",rate:1},{code:"EUR",symbol:"€",rate:.92},{code:"GBP",symbol:"£",rate:.79},{code:"INR",symbol:"₹",rate:83.5},{code:"CAD",symbol:"CA$",rate:1.36},{code:"AUD",symbol:"AU$",rate:1.52}],i=e.cart.reduce((o,u)=>o+u.quantity,0);a.innerHTML=`
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
            ${s.map(o=>`
              <option value="${o.code}" ${e.currency===o.code?"selected":""}>
                ${o.code} (${o.symbol})
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
            <span class="cart-badge" id="cart-counter-badge">${i}</span>
          </button>
        </div>
      </div>
    </div>
  `,a.querySelector("#currency-switcher").addEventListener("change",o=>{r.setCurrency(o.target.value)}),a.querySelector("#cart-drawer-toggle-btn").addEventListener("click",()=>{r.toggleCart(!0)}),a.querySelector("#open-admin-hub-btn").addEventListener("click",()=>{r.openAdminHub()}),a.querySelector("#header-search-btn").addEventListener("click",()=>{const o=prompt("Search Mother & Baby products (e.g. belly butter, baby wash, lavender, diaper cream):");if(o!==null){r.searchProducts(o);const u=document.getElementById("product-grid-container");u&&u.scrollIntoView({behavior:"smooth"})}}),a.querySelectorAll("[data-filter]").forEach(o=>{o.addEventListener("click",u=>{u.preventDefault();const l=o.getAttribute("data-filter");r.setCategoryFilter(l);const c=document.getElementById("product-grid-container");c&&c.scrollIntoView({behavior:"smooth"})})}),a.querySelector("#logo-home-btn").addEventListener("click",o=>{o.preventDefault(),r.setCategoryFilter("all"),window.scrollTo({top:0,behavior:"smooth"})})}function v(a,e,r){a&&(a.className="storefront-layer layer-header",a.setAttribute("data-layer","header"),x(a,e,r))}function q(a,e,r){a.innerHTML=`
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
  `,a.querySelector("#hero-shop-mother-btn").addEventListener("click",()=>{r.setCategoryFilter("mother-care");const s=document.getElementById("product-grid-container");s&&s.scrollIntoView({behavior:"smooth"})}),a.querySelector("#hero-shop-baby-btn").addEventListener("click",()=>{r.setCategoryFilter("baby-care");const s=document.getElementById("product-grid-container");s&&s.scrollIntoView({behavior:"smooth"})}),a.querySelector("#hero-quiz-btn").addEventListener("click",()=>{const s=document.getElementById("routine-quiz-container");s&&s.scrollIntoView({behavior:"smooth"})})}function E(a,e){const r=[{id:"mother-care",name:"Mother Skin Care",tagline:"Prenatal Elasticity & Postpartum Recovery",count:"7 Botanical Formulas",image:"https://images.unsplash.com/photo-1608248597359-0098f986422d?auto=format&fit=crop&w=900&q=80",actionText:"Explore Mother Care →"},{id:"baby-care",name:"Pure Baby Care",tagline:"Tear-Free, Eczema-Friendly & Soothing",count:"7 Gentle Essentials",image:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",actionText:"Explore Baby Care →"},{id:"bundles",name:"Bundles & Gift Sets",tagline:"Curated Kits with up to 25% Savings",count:"4 Complete Ritual Sets",image:"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",actionText:"Shop Value Bundles →"}];a.innerHTML=`
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
          ${r.map(s=>`
            <div class="category-card" data-category="${s.id}">
              <img src="${s.image}" alt="${s.name}" class="category-img" loading="lazy" />
              <div class="category-overlay">
                <span class="category-count">${s.count}</span>
                <h3 class="category-name">${s.name}</h3>
                <p style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 12px;">${s.tagline}</p>
                <div class="category-action">${s.actionText}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `,a.querySelectorAll(".category-card").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("data-category");e.setCategoryFilter(i);const n=document.getElementById("product-grid-container");n&&n.scrollIntoView({behavior:"smooth"})})})}function $(a,e,r){let s=1,i={stage:"pregnant",concern:"stretch-marks",preference:"butter"};const n=[{step:1,title:"Who are you shopping for today?",subtitle:"Select the stage to help us personalize safe, biocompatible ingredients.",options:[{key:"stage",value:"pregnant",title:"Expecting Mother",desc:"Trimesters 1, 2, or 3 (Prenatal Care)",icon:"🤰"},{key:"stage",value:"postpartum",title:"Postpartum Mother",desc:"4th Trimester recovery & breastfeeding",icon:"🤱"},{key:"stage",value:"newborn",title:"Newborn Infant",desc:"0 to 6 months delicate skin",icon:"👶"},{key:"stage",value:"toddler",title:"Baby & Toddler",desc:"6 months+ active bath & play care",icon:"🍼"}]},{step:2,title:"What is your main skin or care focus?",subtitle:"Our certified herbal formulas target specific developmental milestones.",options:[{key:"concern",value:"stretch-marks",title:"Stretch Marks & Deep Elasticity",desc:"Soothe tight, itchy stretching skin",icon:"✨"},{key:"concern",value:"nursing-comfort",title:"Nursing & Nipple Healing",desc:"100% Ingestion-safe, lanolin-free balm",icon:"💖"},{key:"concern",value:"baby-eczema",title:"Baby Dryness & Eczema",desc:"Tear-free colloidal oat barrier soothing",icon:"🛁"},{key:"concern",value:"sleep-calm",title:"Bedtime Sleep & Colic Relief",desc:"Lavender calming massage and sleep mist",icon:"🌙"}]},{step:3,title:"What texture and finish do you prefer?",subtitle:"All products are 100% non-sticky and fast-absorbing.",options:[{key:"preference",value:"butter",title:"Rich Whipped Body Butters",desc:"Deep 24hr moisture lock",icon:"🧈"},{key:"preference",value:"oil",title:"Silky Cold-Pressed Oils",desc:"Fast penetration with radiant glow",icon:"💧"},{key:"preference",value:"wash-lotion",title:"Gentle Foams & Daily Lotions",desc:"Lightweight everyday hydration",icon:"🧴"},{key:"preference",value:"full-bundle",title:"Complete Complete Care Routine",desc:"Head-to-toe bundle with 15% savings",icon:"🎁"}]}];function d(){return i.stage==="pregnant"||i.concern==="stretch-marks"?{title:"The Ultimate Prenatal Elasticity Routine",desc:"Designed to maximize skin flexibility and lock in cellular moisture from trimester 1 through postpartum.",products:[e.products.find(t=>t.id===0x38d7eccd55b1f)||e.products[0],e.products.find(t=>t.id===0x38d7ecccd8df1)||e.products[1],e.products.find(t=>t.id===0x38d7eccd55b1d)||e.products[5]]}:i.stage==="postpartum"||i.concern==="nursing-comfort"?{title:"The Fourth Trimester Mama Recovery Routine",desc:"Hospital-grade clean soothing formulas for nursing nipples, restorative firming, and perineal recovery.",products:[e.products.find(t=>t.id===0x38d7eccd55b1e)||e.products[2],e.products.find(t=>t.id===0x38d7eccd55b27)||e.products[3],e.products.find(t=>t.id===0x38d7eccd55b18)||e.products[17]]}:i.concern==="sleep-calm"?{title:"The Blissful Baby Sleep & Calming Ritual",desc:"Pediatrician-tested nighttime ritual with organic French Lavender to encourage deep, tranquil infant sleep.",products:[e.products.find(t=>t.id===0x38d7eccd55b20)||e.products[7],e.products.find(t=>t.id===0x38d7eccd55b28)||e.products[8],e.products.find(t=>t.id===0x38d7eccd55b23)||e.products[13]]}:{title:"The Pure Newborn Head-to-Toe Starter Routine",desc:"Ultra-mild, tear-free essentials to protect baby's delicate microbiome and natural moisture barrier.",products:[e.products.find(t=>t.id===0x38d7eccd55b20)||e.products[7],e.products.find(t=>t.id===0x38d7eccd55b26)||e.products[9],e.products.find(t=>t.id===0x38d7eccd55b25)||e.products[11]]}}function p(){if(s<=3){const t=n[s-1],o=s/3*100;a.innerHTML=`
        <div class="container">
          <div class="quiz-section">
            <div class="quiz-card">
              <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" style="width: ${o}%;"></div>
              </div>

              <div class="quiz-header">
                <span class="quiz-step-badge">Step ${s} of 3</span>
                <h3 class="quiz-question">${t.title}</h3>
                <p style="color: var(--color-text-muted); font-size: 0.95rem;">${t.subtitle}</p>
              </div>

              <div class="quiz-options-grid">
                ${t.options.map(c=>`
                    <div class="quiz-option ${i[c.key]===c.value?"selected":""}" data-key="${c.key}" data-value="${c.value}">
                      <span class="option-icon">${c.icon}</span>
                      <div>
                        <span class="option-title">${c.title}</span>
                        <span class="option-desc">${c.desc}</span>
                      </div>
                    </div>
                  `).join("")}
              </div>

              <div class="quiz-navigation">
                ${s>1?'<button class="btn-secondary" id="quiz-prev-btn">← Back</button>':"<div></div>"}
                <button class="btn-primary" id="quiz-next-btn">
                  ${s===3?"Get My Personalized Routine ✨":"Continue →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      `,a.querySelectorAll(".quiz-option").forEach(c=>{c.addEventListener("click",()=>{const m=c.getAttribute("data-key"),y=c.getAttribute("data-value");i[m]=y,p()})}),a.querySelector("#quiz-next-btn").addEventListener("click",()=>{s++,p()});const l=a.querySelector("#quiz-prev-btn");l&&l.addEventListener("click",()=>{s--,p()})}else{const t=d(),o=t.products.reduce((l,c)=>l+parseFloat((c==null?void 0:c.price)||0),0),u=(o*.85).toFixed(2);a.innerHTML=`
        <div class="container">
          <div class="quiz-section">
            <div class="quiz-card quiz-result-box">
              <span class="quiz-result-badge">🎯 Personalized Recommendation</span>
              <h3 class="quiz-result-title">${t.title}</h3>
              <p style="color: var(--color-text-muted); max-width: 600px; margin: 0 auto;">${t.desc}</p>

              <div class="quiz-result-products">
                ${t.products.map((l,c)=>`
                  <div class="routine-product-card">
                    <img src="${l.image}" alt="${l.title}" class="routine-product-img" />
                    <span class="routine-step-num">Step 0${c+1}</span>
                    <h5 class="routine-prod-name">${l.title}</h5>
                    <div style="font-weight: 700; color: var(--color-text-main); font-size: 1rem;">
                      ${r.formatPrice(l.price)}
                    </div>
                  </div>
                `).join("")}
              </div>

              <div class="quiz-bundle-action">
                <div class="bundle-pricing">
                  <span style="font-size: 0.85rem; color: var(--color-text-muted); display: block; font-weight: 600;">Personalized Routine Bundle (3 Items):</span>
                  <span class="bundle-price-now">${r.formatPrice(u)}</span>
                  <span class="bundle-price-was">${r.formatPrice(o)}</span>
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
      `,a.querySelector("#quiz-retake-btn").addEventListener("click",()=>{s=1,p()}),a.querySelector("#quiz-add-bundle-btn").addEventListener("click",()=>{t.products.forEach(l=>{r.addToCart(l,1)}),r.toggleCart(!0)})}}p()}function M(a,e,r){const s=[{id:"all",label:"All Products (18)"},{id:"mother-care",label:"Mother Skin Care"},{id:"baby-care",label:"Baby Care"},{id:"bundles",label:"Bundles & Gift Sets"}];let i=[...e.products];if(e.activeCategory&&e.activeCategory!=="all"&&(i=i.filter(t=>t.category===e.activeCategory)),e.searchQuery){const t=e.searchQuery.toLowerCase();i=i.filter(o=>o.title.toLowerCase().includes(t)||o.tags.toLowerCase().includes(t)||o.short_description.toLowerCase().includes(t))}e.sortBy==="price-low"?i.sort((t,o)=>parseFloat(t.price)-parseFloat(o.price)):e.sortBy==="price-high"?i.sort((t,o)=>parseFloat(o.price)-parseFloat(t.price)):e.sortBy==="rating"&&i.sort((t,o)=>o.rating-t.rating),a.innerHTML=`
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
            ${s.map(t=>`
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
        ${i.length===0?`
          <div style="text-align: center; padding: 60px; background: var(--bg-surface); border-radius: var(--radius-lg);">
            <h3>No products found</h3>
            <p style="color: var(--color-text-muted); margin-top: 8px;">Try a different search term or category tab.</p>
            <button class="btn-primary" id="reset-filter-btn" style="margin-top: 20px;">View All Products</button>
          </div>
        `:`
          <div class="products-grid">
            ${i.map(t=>{var l,c;const o=t.image||((l=t.images)==null?void 0:l[0]),u=((c=t.images)==null?void 0:c[1])||o;return`
                <div class="product-card" data-product-id="${t.id}">
                  <div class="product-image-box">
                    <img 
                      src="${o}" 
                      alt="${t.title}" 
                      class="product-img" 
                      loading="lazy" 
                      data-main="${o}"
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
                      <span class="product-price">${r.formatPrice(t.price)}</span>
                      ${t.compare_at_price?`
                        <span class="product-compare-price">${r.formatPrice(t.compare_at_price)}</span>
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
  `,a.querySelectorAll(".filter-tab").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-tab");r.setCategoryFilter(o)})});const n=a.querySelector("#product-sort-select");n&&n.addEventListener("change",t=>{r.setSortBy(t.target.value)});const d=a.querySelector("#clear-search-btn");d&&d.addEventListener("click",()=>{r.searchProducts("")});const p=a.querySelector("#reset-filter-btn");p&&p.addEventListener("click",()=>{r.setCategoryFilter("all"),r.searchProducts("")}),a.querySelectorAll("[data-quickview]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const u=t.getAttribute("data-quickview"),l=e.products.find(c=>String(c.id)===String(u));l&&r.openProductModal(l)})}),a.querySelectorAll(".product-card").forEach(t=>{t.addEventListener("click",o=>{if(o.target.closest("[data-add-to-cart]"))return;const u=t.getAttribute("data-product-id"),l=e.products.find(c=>String(c.id)===String(u));l&&r.openProductModal(l)})}),a.querySelectorAll(".product-image-box").forEach(t=>{const o=t.querySelector(".product-img"),u=o.getAttribute("data-main"),l=o.getAttribute("data-hover");l&&l!==u&&(t.addEventListener("mouseenter",()=>{o.src=l}),t.addEventListener("mouseleave",()=>{o.src=u}))}),a.querySelectorAll("[data-add-to-cart]").forEach(t=>{t.addEventListener("click",o=>{o.stopPropagation();const u=t.getAttribute("data-add-to-cart"),l=e.products.find(c=>String(c.id)===String(u));l&&(r.addToCart(l,1),r.toggleCart(!0))})})}function A(a){a.innerHTML=`
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
  `}function L(a){const e=[{author:"Elena Rostova",stage:"Mom of 2 (Baby 4mo)",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",title:"Saved my belly during pregnancy — zero stretch marks!",text:"I used the Belly Butter morning and night and the Elasticity Oil right after the shower. I am now 4 months postpartum with twin girls and my skin bounced back amazingly with zero marks!",product:"Nourishing Belly Butter & Elasticity Oil"},{author:"Sarah Jenkins, RN",stage:"Pediatric Nurse & First-Time Mom",avatar:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",title:"The only wash that cleared my son's cradle cap & eczema",text:"As a pediatric nurse, I am extremely picky with baby products. The 2-in-1 Baby Wash and Scalp Serum are game changers. Gentle, tear-free, and leaves his curls so soft without any scent chemicals.",product:"Ultra-Gentle 2-in-1 Baby Wash"},{author:"Priya Sharma",stage:"New Mom (Baby 6w)",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",title:"Lanolin-free nipple salve is a lifesaver for breastfeeding",text:"Every other cream was sticky and made nursing painful. This herbal salve melts like butter, soothes instant cracking, and I love that I don't have to wipe it off before latching baby.",product:"Organic Nipple & Nursing Salve"}];a.innerHTML=`
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
          ${e.map(r=>`
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <h4 class="review-title">"${r.title}"</h4>
              <p class="review-body">${r.text}</p>
              
              <div class="review-author">
                <img src="${r.avatar}" alt="${r.author}" class="author-avatar" />
                <div>
                  <div class="author-name">${r.author}</div>
                  <div class="author-meta">
                    <span>✓ Verified Buyer</span> • <span>${r.stage}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `}function S(a,e,r){if(!a)return;a.className="storefront-layer layer-body",a.setAttribute("data-layer","body"),a.querySelector("#hero-container")||(a.innerHTML=`
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
    `);const s=a.querySelector("#hero-container"),i=a.querySelector("#trust-bar-container"),n=a.querySelector("#categories-container"),d=a.querySelector("#routine-quiz-container"),p=a.querySelector("#product-grid-container"),t=a.querySelector("#safety-standards-container"),o=a.querySelector("#reviews-container");s&&i&&q(s,i,r),n&&E(n,r),d&&$(d,e,r),p&&M(p,e,r),t&&A(t),o&&L(o)}function T(a,e,r){a.innerHTML=`
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
  `,a.querySelector("#guide-newsletter-form").addEventListener("submit",s=>{s.preventDefault(),alert("🎉 Thank you! Your free Mother & Baby Care Routine Guide has been sent to your email."),s.target.reset()}),e.querySelectorAll("[data-footer-filter]").forEach(s=>{s.addEventListener("click",i=>{i.preventDefault();const n=s.getAttribute("data-footer-filter");r.setCategoryFilter(n);const d=document.getElementById("product-grid-container");d&&d.scrollIntoView({behavior:"smooth"})})}),e.querySelectorAll("[data-footer-nav]").forEach(s=>{s.addEventListener("click",i=>{i.preventDefault();const n=document.getElementById("routine-quiz-container");n&&n.scrollIntoView({behavior:"smooth"})})}),e.querySelectorAll("[data-page]").forEach(s=>{s.addEventListener("click",i=>{i.preventDefault();const n=s.getAttribute("data-page");r.openPageModal(n)})}),e.querySelector("#footer-admin-btn").addEventListener("click",()=>{r.openAdminHub()})}function F(a,e,r){if(!a)return;a.className="storefront-layer layer-footer",a.setAttribute("data-layer","footer"),a.querySelector("#footer-main-container")||(a.innerHTML=`
      <div id="footer-guide-banner-slot"></div>
      <div id="footer-main-container"></div>
    `);const s=a.querySelector("#footer-guide-banner-slot")||document.getElementById("guide-banner-container")||a,i=a.querySelector("#footer-main-container")||a;T(s,i,r)}function w(a,e,r,s){var t,o;if(!e){a.innerHTML="";return}let i=((t=e.variants)==null?void 0:t[0])||{id:1,title:"Standard",price:e.price},n=1,d=e.image||((o=e.images)==null?void 0:o[0]);function p(){a.innerHTML=`
      <div class="modal-overlay open" id="product-modal-overlay">
        <div class="modal-box">
          <button class="modal-close-btn" id="modal-close-btn" title="Close Modal">✕</button>

          <div class="quickview-grid">
            <!-- Gallery -->
            <div class="quickview-gallery">
              <img src="${d}" alt="${e.title}" class="quickview-main-img" id="quickview-active-img" />
              ${e.images&&e.images.length>1?`
                <div class="quickview-thumbnails">
                  ${e.images.map(m=>`
                    <img 
                      src="${m}" 
                      alt="Thumbnail" 
                      class="thumb-img ${m===d?"active":""}" 
                      data-src="${m}"
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
                <span class="quickview-price">${s.formatPrice(i.price||e.price)}</span>
                ${e.compare_at_price?`
                  <span class="quickview-compare-price">${s.formatPrice(i.compare_at_price||e.compare_at_price)}</span>
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
                    ${e.variants.map(m=>`
                      <button 
                        class="variant-chip ${m.id===i.id?"selected":""}" 
                        data-variant-id="${m.id}"
                      >
                        ${m.title} — ${s.formatPrice(m.price)}
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
                  <span>🛒 Add to Cart • ${s.formatPrice((parseFloat(i.price||e.price)*n).toFixed(2))}</span>
                </button>
              </div>

              <!-- Safety Badges -->
              <div style="background: var(--bg-surface-secondary); padding: 16px; border-radius: var(--radius-md); margin-top: auto;">
                <h5 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--color-accent); margin-bottom: 8px;">
                  🌿 Safety Guarantee:
                </h5>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${(e.safety_badges||["Dermatologist Tested","100% Organic","Pediatrician Approved"]).map(m=>`
                    <span style="font-size: 0.8rem; background: #fff; padding: 4px 10px; border-radius: var(--radius-full); font-weight: 600; color: var(--color-text-main); border: 1px solid var(--color-border);">
                      ✓ ${m}
                    </span>
                  `).join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;const u=a.querySelector("#product-modal-overlay"),l=a.querySelector("#modal-close-btn"),c=()=>{s.closeProductModal()};l.addEventListener("click",c),u.addEventListener("click",m=>{m.target===u&&c()}),a.querySelectorAll(".thumb-img").forEach(m=>{m.addEventListener("click",()=>{d=m.getAttribute("data-src"),p()})}),a.querySelectorAll(".variant-chip").forEach(m=>{m.addEventListener("click",()=>{const y=parseInt(m.getAttribute("data-variant-id"));i=e.variants.find(f=>f.id===y)||i,p()})}),a.querySelector("#modal-qty-minus").addEventListener("click",()=>{n>1&&(n--,p())}),a.querySelector("#modal-qty-plus").addEventListener("click",()=>{n++,p()}),a.querySelector("#modal-add-cart-btn").addEventListener("click",()=>{s.addToCart(e,n,i),s.closeProductModal(),s.toggleCart(!0)})}p()}function b(a,e,r){const s=e.isCartOpen,i=e.cart.reduce((h,g)=>h+parseFloat(g.price)*g.quantity,0);let n=0;e.appliedPromo==="MOMCARE15"?n=i*.15:e.appliedPromo==="PUREBABY"&&(n=Math.min(10,i));const d=Math.max(0,i-n),p=50,t=Math.min(100,i/p*100),o=Math.max(0,p-i);a.innerHTML=`
    <!-- Overlay -->
    <div class="cart-overlay ${s?"open":""}" id="cart-drawer-overlay"></div>

    <!-- Drawer -->
    <div class="cart-drawer ${s?"open":""}">
      <!-- Header -->
      <div class="cart-header">
        <h3>Shopping Bag (${e.cart.reduce((h,g)=>h+g.quantity,0)})</h3>
        <button class="cart-close-btn" id="cart-close-btn" title="Close Bag">✕</button>
      </div>

      <!-- Free Shipping Tracker -->
      <div class="free-shipping-tracker">
        <div class="free-shipping-text">
          ${o===0?"🎉 You have unlocked <strong>FREE Standard Shipping!</strong>":`Add <strong>${r.formatPrice(o.toFixed(2))}</strong> more for <strong>FREE Shipping!</strong>`}
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
        `:e.cart.map(h=>`
          <div class="cart-item" data-item-id="${h.cartItemId}">
            <img src="${h.image}" alt="${h.title}" class="cart-item-img" />
            <div class="cart-item-details">
              <h4 class="cart-item-title">${h.title}</h4>
              ${h.variantTitle?`<div class="cart-item-variant">${h.variantTitle}</div>`:""}
              
              <div class="cart-item-bottom">
                <div class="cart-qty-stepper">
                  <button class="qty-btn" data-cart-minus="${h.cartItemId}">-</button>
                  <span class="qty-num">${h.quantity}</span>
                  <button class="qty-btn" data-cart-plus="${h.cartItemId}">+</button>
                </div>

                <div class="cart-item-price">
                  ${r.formatPrice((parseFloat(h.price)*h.quantity).toFixed(2))}
                </div>
              </div>
            </div>
            <button class="cart-item-remove" data-cart-remove="${h.cartItemId}" style="color: var(--color-text-light); font-size: 0.9rem; margin-left: 6px;" title="Remove">✕</button>
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
            <span>${r.formatPrice(i.toFixed(2))}</span>
          </div>

          ${n>0?`
            <div class="cart-summary-row" style="color: var(--color-accent); font-weight: 700;">
              <span>Promo Discount (${e.appliedPromo})</span>
              <span>-${r.formatPrice(n.toFixed(2))}</span>
            </div>
          `:""}

          <div class="cart-summary-row">
            <span>Estimated Shipping</span>
            <span>${o===0?"FREE":r.formatPrice("4.99")}</span>
          </div>

          <div class="cart-total-row">
            <span>Total</span>
            <span>${r.formatPrice((d+(o===0?0:4.99)).toFixed(2))}</span>
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
  `;const u=a.querySelector("#cart-drawer-overlay"),l=a.querySelector("#cart-close-btn"),c=()=>r.toggleCart(!1);u&&u.addEventListener("click",c),l&&l.addEventListener("click",c);const m=a.querySelector("#cart-start-shopping-btn");m&&m.addEventListener("click",()=>{c();const h=document.getElementById("product-grid-container");h&&h.scrollIntoView({behavior:"smooth"})}),a.querySelectorAll("[data-cart-minus]").forEach(h=>{h.addEventListener("click",()=>{const g=h.getAttribute("data-cart-minus");r.updateCartQuantity(g,-1)})}),a.querySelectorAll("[data-cart-plus]").forEach(h=>{h.addEventListener("click",()=>{const g=h.getAttribute("data-cart-plus");r.updateCartQuantity(g,1)})}),a.querySelectorAll("[data-cart-remove]").forEach(h=>{h.addEventListener("click",()=>{const g=h.getAttribute("data-cart-remove");r.removeFromCart(g)})});const y=a.querySelector("#promo-apply-btn"),f=a.querySelector("#promo-code-input");y&&f&&y.addEventListener("click",()=>{const h=f.value.trim().toUpperCase();h==="MOMCARE15"||h==="PUREBABY"?r.applyPromo(h):h===""?r.applyPromo(""):alert("Invalid promo code. Try 'MOMCARE15' for 15% off!")});const B=a.querySelector("#cart-checkout-btn");B&&B.addEventListener("click",()=>{r.proceedToCheckout()})}function C(a,e,r){if(!e){a.innerHTML="";return}const s={"routine-guide":{title:"Mother & Baby Care Routine Guide",subtitle:"Gentle, Biocompatible Daily Rituals for Mama and Child",content:`
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
      `}},i=s[e]||s["routine-guide"];a.innerHTML=`
    <div class="modal-overlay open" id="page-modal-overlay">
      <div class="modal-box" style="max-width: 760px; padding: 48px 40px;">
        <button class="modal-close-btn" id="page-modal-close-btn">✕</button>
        
        <span class="product-category-tag" style="color: var(--color-accent);">Core & Core Guide</span>
        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; margin: 8px 0 6px; line-height: 1.25;">
          ${i.title}
        </h2>
        <p style="color: var(--color-text-muted); font-size: 1rem; margin-bottom: 28px;">
          ${i.subtitle}
        </p>

        <div style="color: var(--color-text-main); font-size: 0.95rem; line-height: 1.7;">
          ${i.content}
        </div>

        <div style="margin-top: 36px; padding-top: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: flex-end;">
          <button class="btn-primary" id="page-modal-done-btn">Back to Store</button>
        </div>
      </div>
    </div>
  `;const n=a.querySelector("#page-modal-overlay"),d=a.querySelector("#page-modal-close-btn"),p=a.querySelector("#page-modal-done-btn"),t=()=>r.closePageModal();d&&d.addEventListener("click",t),p&&p.addEventListener("click",t),n&&n.addEventListener("click",o=>{o.target===n&&t()})}function k(a,e,r){if(!e.isAdminHubOpen){a.innerHTML="";return}a.innerHTML=`
    <div class="modal-overlay open" id="admin-hub-overlay">
      <div class="modal-box admin-hub-box">
        <button class="modal-close-btn" id="admin-hub-close-btn">✕</button>

        <div class="admin-hub-header">
          <div class="admin-hub-icon">⚙️</div>
          <div>
            <h2 style="font-family: var(--font-heading); font-size: 1.8rem; line-height: 1.2;">
              ShopBase Store & API Hub
            </h2>
            <p style="color: var(--color-text-muted); font-size: 0.9rem;">
              Connected Store: <strong>corencore.onshopbase.com</strong>
            </p>
          </div>
        </div>

        <div class="admin-status-indicator">
          <span class="status-dot"></span>
          <span>API Status: <strong>Connected & Authenticated</strong> (Private App #9250)</span>
        </div>

        <p style="font-size: 0.95rem; color: var(--color-text-main); margin-bottom: 20px;">
          Manage live synchronization between this modern Mother & Baby Care storefront and your ShopBase backend.
        </p>

        <!-- Action Cards Grid -->
        <div class="admin-actions-grid">
          <!-- Sync Catalog Card -->
          <div class="admin-action-card">
            <h4>📦 Sync Product Catalog</h4>
            <p>Update all 18 store products on ShopBase with Mother & Baby Care titles, rich descriptions, and prices.</p>
            <button class="btn-primary" id="btn-sync-catalog-action" style="padding: 10px 18px; font-size: 0.85rem; width: 100%;">
              <span>⚡ Sync 18 Products</span>
            </button>
            <div id="sync-catalog-status" style="font-size: 0.8rem; margin-top: 8px; font-weight: 600;"></div>
          </div>

          <!-- Sync Pages Card -->
          <div class="admin-action-card">
            <h4>📄 Sync Content Pages</h4>
            <p>Publish Mother & Baby Care Routine Guide and Clean Safety Standards to your ShopBase store.</p>
            <button class="btn-secondary" id="btn-sync-pages-action" style="padding: 10px 18px; font-size: 0.85rem; width: 100%;">
              <span>📝 Sync CMS Pages</span>
            </button>
            <div id="sync-pages-status" style="font-size: 0.8rem; margin-top: 8px; font-weight: 600;"></div>
          </div>

          <div class="admin-action-card">
            <h4>🏠 Sync Homepage Layout</h4>
            <p>Push the Corencore homepage layout into the active ShopBase theme using your admin API credentials.</p>
            <button class="btn-secondary" id="btn-sync-homepage-action" style="padding: 10px 18px; font-size: 0.85rem; width: 100%;">
              <span>🌍 Sync Homepage</span>
            </button>
            <div id="sync-homepage-status" style="font-size: 0.8rem; margin-top: 8px; font-weight: 600;"></div>
          </div>
        </div>

        <!-- Direct Admin Links -->
        <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--color-border);">
          <h5 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 12px;">
            Direct ShopBase Admin Shortcuts:
          </h5>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <a 
              href="https://corencore.onshopbase.com/admin/products" 
              target="_blank" 
              class="btn-secondary" 
              style="padding: 8px 14px; font-size: 0.85rem;"
            >
              🔗 View Products in ShopBase ↗
            </a>
            <a 
              href="https://corencore.onshopbase.com/admin/apps/private/9250" 
              target="_blank" 
              class="btn-secondary" 
              style="padding: 8px 14px; font-size: 0.85rem;"
            >
              🔑 Private App Settings ↗
            </a>
            <a 
              href="https://corencore.onshopbase.com" 
              target="_blank" 
              class="btn-secondary" 
              style="padding: 8px 14px; font-size: 0.85rem;"
            >
              🌐 ShopBase Online Store ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  `;const s=a.querySelector("#admin-hub-overlay"),i=a.querySelector("#admin-hub-close-btn"),n=()=>r.closeAdminHub();i&&i.addEventListener("click",n),s&&s.addEventListener("click",c=>{c.target===s&&n()});const d=a.querySelector("#btn-sync-catalog-action"),p=a.querySelector("#sync-catalog-status");d.addEventListener("click",async()=>{d.disabled=!0,d.innerHTML="<span>⏳ Syncing to ShopBase...</span>",p.style.color="var(--color-primary)",p.textContent="Updating 18 products via Admin REST API...";try{const m=await(await fetch("/api/sync-catalog",{method:"POST"})).json();m.success?(p.style.color="#2E7D32",p.textContent=`✅ ${m.message}`,d.innerHTML="<span>✓ Synced Successfully</span>"):(p.style.color="#D32F2F",p.textContent=`❌ ${m.error||"Sync failed"}`,d.innerHTML="<span>Retry Sync</span>",d.disabled=!1)}catch(c){p.style.color="#D32F2F",p.textContent=`❌ Network Error: ${c.message}`,d.innerHTML="<span>Retry Sync</span>",d.disabled=!1}});const t=a.querySelector("#btn-sync-pages-action"),o=a.querySelector("#sync-pages-status");t.addEventListener("click",async()=>{t.disabled=!0,t.innerHTML="<span>⏳ Syncing Pages...</span>",o.style.color="var(--color-primary)",o.textContent="Publishing Routine Guide & Clean Safety Standards...";try{const m=await(await fetch("/api/sync-pages",{method:"POST"})).json();m.success?(o.style.color="#2E7D32",o.textContent="✅ Pages published to ShopBase store!",t.innerHTML="<span>✓ Pages Synced</span>"):(o.style.color="#D32F2F",o.textContent=`❌ ${m.error||"Pages sync failed"}`,t.innerHTML="<span>Retry Sync</span>",t.disabled=!1)}catch(c){o.style.color="#D32F2F",o.textContent=`❌ Network Error: ${c.message}`,t.innerHTML="<span>Retry Sync</span>",t.disabled=!1}});const u=a.querySelector("#btn-sync-homepage-action"),l=a.querySelector("#sync-homepage-status");u.addEventListener("click",async()=>{u.disabled=!0,u.innerHTML="<span>⏳ Syncing Homepage...</span>",l.style.color="var(--color-primary)",l.textContent="Updating homepage sections in ShopBase theme...";try{const m=await(await fetch("/api/sync-homepage",{method:"POST"})).json();m.success?(l.style.color="#2E7D32",l.textContent=`✅ ${m.message}`,u.innerHTML="<span>✓ Homepage Synced</span>"):(l.style.color="#D32F2F",l.textContent=`❌ ${m.error||"Homepage sync failed"}`,u.innerHTML="<span>Retry Sync</span>",u.disabled=!1)}catch(c){l.style.color="#D32F2F",l.textContent=`❌ Network Error: ${c.message}`,u.innerHTML="<span>Retry Sync</span>",u.disabled=!1}})}const P={USD:{symbol:"$",rate:1},EUR:{symbol:"€",rate:.92},GBP:{symbol:"£",rate:.79},INR:{symbol:"₹",rate:83.5},CAD:{symbol:"CA$",rate:1.36},AUD:{symbol:"AU$",rate:1.52}},_=[{id:0x38d7eccd55b1f,shopbase_handle:"4-in1-kitchen-colander-with-mixing-bowl-set",title:"Organic Nourishing Belly Butter & Stretch Mark Balm",handle:"organic-nourishing-belly-butter",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"19.99",compare_at_price:"25.99",rating:4.9,reviews_count:248,badge:"Bestseller",short_description:"Rich organic whipped butter with Shea, Rosehip, and Vitamin E to soothe stretching skin and reduce stretch marks.",tags:"mother-care, belly-butter, stretch-marks, organic, prenatal, bestseller",image:"https://img.btdmp.com/10687/10687861/products/17856583041b5616c81c.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17856583041b5616c81c.jpeg","https://img.btdmp.com/10687/10687861/products/17856583049a756cd193.jpeg"],variants:[{id:0x38d8370d40b96,title:"1 PC",price:"19.99",compare_at_price:"25.99"},{id:0x38d8370d40b98,title:"2 Pack",price:"35.99",compare_at_price:"46.99"}],safety_badges:["Pediatrician Approved","Dermatologist Tested","100% Organic","Cruelty Free"]},{id:0x38d7ecccd8df1,shopbase_handle:"adjustable-connected-dog-boots-ultimate-paw-protection",title:"Pure Botanical Stretch Mark Elasticity Oil",handle:"pure-botanical-stretch-mark-oil",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"20.99",compare_at_price:"27.29",rating:4.9,reviews_count:184,badge:"Award Winner",short_description:"Fast-absorbing luxurious botanical blend with Sweet Almond, Jojoba, and Evening Primrose oils for silky soft elasticity.",tags:"mother-care, belly-oil, elasticity, stretch-marks, organic",image:"https://img.btdmp.com/10687/10687861/products/17852154315d272b4005.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17852154315d272b4005.jpeg","https://img.btdmp.com/10687/10687861/products/17852154314903a86d99.png"],variants:[{id:0x38d83700b3d7e,title:"XS",price:"20.99",compare_at_price:"27.29"},{id:0x38d83700b3d80,title:"S",price:"21.99",compare_at_price:"28.59"}],safety_badges:["100% Non-Toxic","Plant Squalane","Non-Greasy"]},{id:0x38d7eccd55b1e,shopbase_handle:"automatic-flip-egg-storage-box",title:"Organic Nipple & Nursing Soothing Salve",handle:"organic-nipple-nursing-salve",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"9.99",compare_at_price:"12.99",rating:5,reviews_count:312,badge:"Hospital Bag Must-Have",short_description:"100% Lanolin-Free, food-grade soothing balm for breastfeeding moms. No need to wash off before nursing.",tags:"mother-care, nursing, nipple-salve, lanolin-free, organic, hospital-bag",image:"https://img.btdmp.com/10687/10687861/products/1785658303b39cbf55b4.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658303b39cbf55b4.jpeg","https://img.btdmp.com/10687/10687861/products/1785658303ddccfd15cb.jpeg"],variants:[{id:0x38d8370d40b92,title:"1 PC",price:"9.99",compare_at_price:"12.99"},{id:0x38d8370d40b93,title:"2 Pack",price:"18.99",compare_at_price:"24.99"}],safety_badges:["100% Ingestion-Safe","Lanolin Free","Non-Sticky"]},{id:0x38d7eccd55b20,shopbase_handle:"heart-beating-and-breathing-routine-soothing-relief-koala",title:"Ultra-Gentle 2-in-1 Baby Wash & Tear-Free Shampoo",handle:"ultra-gentle-2in1-baby-wash-shampoo",product_type:"Baby Care",category:"baby-care",category_label:"Baby Care",price:"22.99",compare_at_price:"29.89",rating:5,reviews_count:420,badge:"#1 Newborn Essential",short_description:"Tear-free, pH 5.5 balanced head-to-toe cleanser with Colloidal Oat and Organic Calendula. Safe for sensitive newborn skin.",tags:"baby-care, baby-wash, tear-free, shampoo, newborn, eczema-safe, bestseller",image:"https://img.btdmp.com/10687/10687861/products/1785658306e53d2f6617.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658306e53d2f6617.jpeg","https://img.btdmp.com/10687/10687861/products/17856583060ab7195777.png"],variants:[{id:0x38d8370d40b97,title:"1 PC",price:"22.99",compare_at_price:"29.89"}],safety_badges:["Pediatrician Approved","Tear-Free Certified","Eczema Friendly","Hypoallergenic"]},{id:0x38d7eccd55b26,shopbase_handle:"lightweight-casual-men-slip-on-shoes",title:"Gentle Zinc Barrier Diaper Rash Relief Cream",handle:"gentle-zinc-barrier-diaper-rash-cream",product_type:"Baby Care",category:"baby-care",category_label:"Baby Care",price:"19.99",compare_at_price:"25.99",rating:5,reviews_count:360,badge:"Instant Relief",short_description:"Fast-acting 14% Non-Nano Zinc Oxide barrier paste with organic Shea and Beeswax to seal out wetness.",tags:"baby-care, diaper-cream, zinc-oxide, rash-relief, newborn-safe",image:"https://img.btdmp.com/10687/10687861/products/1785658325286d9fe49b.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658325286d9fe49b.jpeg","https://img.btdmp.com/10687/10687861/products/1785658325ba62fb0f90.jpeg"],variants:[{id:1000020603309e3,title:"S",price:"19.99",compare_at_price:"25.99"},{id:0x38d8370d40bc9,title:"M",price:"19.99",compare_at_price:"25.99"}],safety_badges:["Pediatrician Tested","Petrolatum Free","Fast Acting"]},{id:0x38d7eccd55b17,shopbase_handle:"wing-rails-grill-chicken-wings",title:"The Complete New Mother Recovery & Care Kit",handle:"complete-new-mother-recovery-care-kit",product_type:"Bundles & Gifts",category:"bundles",category_label:"Prenatal & Postpartum Bundles",price:"9.99",compare_at_price:"12.99",rating:5,reviews_count:210,badge:"Best Gift for Mom",short_description:"Everything a new mom needs: Nourishing Belly Butter, Elasticity Oil, Nipple Salve, and Calming Bath Salts.",tags:"bundles, mother-care, baby-shower, gift-set, postpartum-kit, bestseller",image:"https://img.btdmp.com/10687/10687861/products/178565829599e6634c63.png",images:["https://img.btdmp.com/10687/10687861/products/178565829599e6634c63.png","https://img.btdmp.com/10687/10687861/products/178565829559290fe615.png"],variants:[{id:0x38d8370d40b77,title:"Buy 1",price:"9.99",compare_at_price:"12.99"}],safety_badges:["Luxury Gift Packaging","Save 23% on Bundle","Midwife Recommended"]},{id:0x38d7eccd55b19,shopbase_handle:"wire-stripping-tool-wire-twisting-connector-drill-attachmen",title:"Welcome Baby Newborn Organic Essentials Set",handle:"welcome-baby-newborn-organic-essentials-set",product_type:"Bundles & Gifts",category:"bundles",category_label:"Prenatal & Postpartum Bundles",price:"30.99",compare_at_price:"40.29",rating:5,reviews_count:188,badge:"Baby Shower Top Pick",short_description:"The complete newborn starter: 2-in-1 Wash, Bedtime Massage Oil, Zinc Diaper Cream, and Bamboo Wipes.",tags:"bundles, baby-care, baby-shower, newborn-set, organic-baby",image:"https://img.btdmp.com/10687/10687861/products/17856582973dc7398e29.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17856582973dc7398e29.jpeg","https://img.btdmp.com/10687/10687861/products/17856582972724c0a2ba.jpeg"],variants:[{id:0x38d8370d40b8a,title:"1 Set",price:"30.99",compare_at_price:"40.29"}],safety_badges:["Organic Cotton Bag","Save 23% on Bundle","Pediatrician Tested"]}];class I{constructor(){this.state={products:_,activeCategory:"all",currency:"USD",searchQuery:"",sortBy:"featured",cart:JSON.parse(localStorage.getItem("corencore_cart")||"[]"),isCartOpen:!1,activeModalProduct:null,activePageKey:null,isAdminHubOpen:!1,appliedPromo:localStorage.getItem("corencore_promo")||null,quizStep:1,quizAnswers:{}},this.dom={layerHeader:document.getElementById("layer-header")||document.getElementById("header-container"),layerBody:document.getElementById("layer-body")||document.getElementById("main-content"),layerFooter:document.getElementById("layer-footer")||document.getElementById("footer-container"),cartDrawer:document.getElementById("cart-drawer-root"),productModal:document.getElementById("product-modal-root"),pagesModal:document.getElementById("pages-modal-root"),adminHub:document.getElementById("admin-hub-root")},this.actions={setCurrency:this.setCurrency.bind(this),formatPrice:this.formatPrice.bind(this),setCategoryFilter:this.setCategoryFilter.bind(this),searchProducts:this.searchProducts.bind(this),setSortBy:this.setSortBy.bind(this),toggleCart:this.toggleCart.bind(this),addToCart:this.addToCart.bind(this),updateCartQuantity:this.updateCartQuantity.bind(this),removeFromCart:this.removeFromCart.bind(this),applyPromo:this.applyPromo.bind(this),proceedToCheckout:this.proceedToCheckout.bind(this),openProductModal:this.openProductModal.bind(this),closeProductModal:this.closeProductModal.bind(this),openPageModal:this.openPageModal.bind(this),closePageModal:this.closePageModal.bind(this),openAdminHub:this.openAdminHub.bind(this),closeAdminHub:this.closeAdminHub.bind(this)}}async init(){console.log("🌸 Initializing Core & Core 3-Layer Storefront (Header / Body / Footer)..."),await this.fetchProducts(),this.render()}async fetchProducts(){try{const e=await fetch("/api/products");if(e.ok){const r=await e.json();r.products&&r.products.length&&(this.state.products=r.products,console.log(`Loaded ${r.products.length} products from backend API`))}}catch(e){console.warn("Using offline fallback products:",e.message)}}setCurrency(e){this.state.currency=e,this.render()}formatPrice(e){const r=parseFloat(e)||0,s=P[this.state.currency]||P.USD,i=(r*s.rate).toFixed(2);return`${s.symbol}${i}`}setCategoryFilter(e){this.state.activeCategory=e,S(this.dom.layerBody,this.state,this.actions),v(this.dom.layerHeader,this.state,this.actions)}searchProducts(e){this.state.searchQuery=e,S(this.dom.layerBody,this.state,this.actions)}setSortBy(e){this.state.sortBy=e,S(this.dom.layerBody,this.state,this.actions)}toggleCart(e){this.state.isCartOpen=e,b(this.dom.cartDrawer,this.state,this.actions)}addToCart(e,r=1,s=null){var p,t;const i=s||((p=e.variants)==null?void 0:p[0])||{id:1,title:"Standard",price:e.price},n=`${e.id}-${i.id}`,d=this.state.cart.findIndex(o=>o.cartItemId===n);d>-1?this.state.cart[d].quantity+=r:this.state.cart.push({cartItemId:n,id:e.id,variantId:i.id,shopbaseHandle:e.shopbase_handle||e.handle,title:e.title,variantTitle:i.title!=="Standard"&&i.title!=="1 PC"?i.title:"",price:i.price||e.price,image:e.image||((t=e.images)==null?void 0:t[0]),quantity:r}),this.saveCart(),v(this.dom.layerHeader,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions)}updateCartQuantity(e,r){const s=this.state.cart.find(i=>i.cartItemId===e);if(s&&(s.quantity+=r,s.quantity<=0)){this.removeFromCart(e);return}this.saveCart(),v(this.dom.layerHeader,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions)}removeFromCart(e){this.state.cart=this.state.cart.filter(r=>r.cartItemId!==e),this.saveCart(),v(this.dom.layerHeader,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions)}saveCart(){localStorage.setItem("corencore_cart",JSON.stringify(this.state.cart))}applyPromo(e){this.state.appliedPromo=e,localStorage.setItem("corencore_promo",e),b(this.dom.cartDrawer,this.state,this.actions)}proceedToCheckout(){if(!this.state.cart.length)return;const e=this.state.cart[0];let r;e.shopbaseHandle?r=`https://corencore.onshopbase.com/products/${e.shopbaseHandle}`:r="https://corencore.onshopbase.com/collections/all",window.open(r,"_blank")}openProductModal(e){this.state.activeModalProduct=e,w(this.dom.productModal,e,this.state,this.actions)}closeProductModal(){this.state.activeModalProduct=null,w(this.dom.productModal,null,this.state,this.actions)}openPageModal(e){this.state.activePageKey=e,C(this.dom.pagesModal,e,this.actions)}closePageModal(){this.state.activePageKey=null,C(this.dom.pagesModal,null,this.actions)}openAdminHub(){this.state.isAdminHubOpen=!0,k(this.dom.adminHub,this.state,this.actions)}closeAdminHub(){this.state.isAdminHubOpen=!1,k(this.dom.adminHub,this.state,this.actions)}render(){v(this.dom.layerHeader,this.state,this.actions),S(this.dom.layerBody,this.state,this.actions),F(this.dom.layerFooter,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions),w(this.dom.productModal,this.state.activeModalProduct,this.state,this.actions),C(this.dom.pagesModal,this.state.activePageKey,this.actions),k(this.dom.adminHub,this.state,this.actions)}}const z=new I;document.addEventListener("DOMContentLoaded",()=>{z.init()});
