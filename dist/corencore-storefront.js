(function() {
  // Inject Core & Core Styles immediately
  if (!document.getElementById('corencore-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'corencore-styles';
    styleEl.textContent = "#app, .default-layout, #wb-main, .wb-builder, .block-footer, footer[role=\"contentinfo\"], body > footer:not(#layer-footer):not(#layer-footer *), body > header:not(#layer-header):not(#layer-header *), body > main:not(#layer-body):not(#layer-body *), body > div:not(#corencore-storefront-root):not(#cart-drawer-root):not(#product-modal-root):not(#pages-modal-root):not(#admin-hub-root) {display:none !important;visibility:hidden !important;height:0 !important;overflow:hidden !important;opacity:0 !important;pointer-events:none !important;}#corencore-storefront-root {display:block !important;visibility:visible !important;opacity:1 !important;position:relative !important;width:100% !important;}:root {--bg-primary:#FAF7F2;--bg-surface:#FFFFFF;--bg-surface-secondary:#F3EEE7;--bg-surface-tertiary:#EBE4D8;--color-primary:#C87A65;--color-primary-hover:#B56955;--color-primary-light:#F8ECE8;--color-accent:#5E8268;--color-accent-hover:#4D6E56;--color-accent-light:#EBF2EC;--color-gold:#DDA15E;--color-gold-light:#FBF4EA;--color-text-main:#24282B;--color-text-muted:#6B7280;--color-text-light:#9CA3AF;--color-border:#E5DED4;--color-border-focus:#C87A65;--color-success:#2E7D32;--color-danger:#D32F2F;--color-warning:#ED6C02;--font-heading:'Playfair Display', Georgia, serif;--font-body:'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;--shadow-sm:0 2px 4px rgba(36, 40, 43, 0.04);--shadow-md:0 6px 16px rgba(36, 40, 43, 0.06);--shadow-lg:0 12px 32px rgba(36, 40, 43, 0.08);--shadow-xl:0 20px 48px rgba(36, 40, 43, 0.12);--shadow-glow:0 0 20px rgba(200, 122, 101, 0.25);--radius-sm:6px;--radius-md:12px;--radius-lg:20px;--radius-full:9999px;--transition-fast:0.15s cubic-bezier(0.4, 0, 0.2, 1);--transition-normal:0.25s cubic-bezier(0.4, 0, 0.2, 1);--transition-slow:0.4s cubic-bezier(0.4, 0, 0.2, 1);--container-max:1280px;--header-height:80px;}*, *::before, *::after {box-sizing:border-box;margin:0;padding:0;}html {scroll-behavior:smooth;font-size:16px;}body {font-family:var(--font-body);background-color:var(--bg-primary);color:var(--color-text-main);line-height:1.6;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;overflow-x:hidden;}img {max-width:100%;height:auto;display:block;}button, input, select, textarea {font-family:inherit;font-size:inherit;}button {cursor:pointer;border:none;background:none;}a {color:inherit;text-decoration:none;}.container {max-width:var(--container-max);margin:0 auto;padding:0 24px;}.storefront-layers-wrapper {display:flex;flex-direction:column;min-height:100vh;width:100%;}.storefront-layer {width:100%;position:relative;}.layer-header {z-index:100;position:sticky;top:0;}.layer-body {flex:1 0 auto;display:flex;flex-direction:column;z-index:1;}.layer-footer {margin-top:auto;z-index:10;}.body-layer-section {width:100%;position:relative;}.announcement-bar {background-color:var(--color-primary);color:#FFFFFF;font-size:0.85rem;font-weight:500;padding:8px 16px;text-align:center;position:relative;overflow:hidden;z-index:100;}.announcement-content {display:flex;justify-content:center;align-items:center;gap:12px;}.announcement-highlight {background:rgba(255, 255, 255, 0.2);padding:2px 8px;border-radius:var(--radius-full);font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;}.main-header {position:sticky;top:0;background:rgba(250, 247, 242, 0.92);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid var(--color-border);z-index:90;transition:var(--transition-normal);}.header-inner {display:flex;align-items:center;justify-content:space-between;height:var(--header-height);gap:24px;}.brand-logo {display:flex;align-items:center;gap:12px;font-family:var(--font-heading);font-size:1.5rem;font-weight:700;color:var(--color-text-main);letter-spacing:-0.5px;white-space:nowrap;flex-shrink:0;}.brand-title-wrap {display:flex;flex-direction:column;}.brand-logo-icon {width:36px;height:36px;background:var(--color-primary);color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:1.15rem;flex-shrink:0;}.brand-subtitle {font-size:0.65rem;font-family:var(--font-body);letter-spacing:1.2px;text-transform:uppercase;color:var(--color-primary);display:block;font-weight:700;margin-top:1px;}.nav-links {display:flex;align-items:center;gap:32px;list-style:none;}.nav-item a {font-size:0.95rem;font-weight:500;color:var(--color-text-main);transition:var(--transition-fast);position:relative;padding:6px 0;}.nav-item a:hover, .nav-item a.active {color:var(--color-primary);}.nav-item a::after {content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background-color:var(--color-primary);transition:var(--transition-fast);}.nav-item a:hover::after, .nav-item a.active::after {width:100%;}.header-actions {display:flex;align-items:center;gap:16px;}.currency-select {padding:6px 12px;border-radius:var(--radius-full);border:1px solid var(--color-border);background-color:var(--bg-surface);color:var(--color-text-main);font-size:0.85rem;font-weight:600;cursor:pointer;outline:none;transition:var(--transition-fast);}.currency-select:hover, .currency-select:focus {border-color:var(--color-primary);}.search-button, .admin-btn, .cart-trigger {display:flex;align-items:center;justify-content:center;padding:8px 12px;border-radius:var(--radius-full);font-weight:600;font-size:0.9rem;transition:var(--transition-fast);}.search-button {background:var(--bg-surface);border:1px solid var(--color-border);color:var(--color-text-muted);gap:8px;}.search-button:hover {border-color:var(--color-primary);color:var(--color-primary);}.admin-btn {background:var(--color-accent-light);color:var(--color-accent);border:1px solid rgba(94, 130, 104, 0.2);gap:6px;font-size:0.8rem;}.admin-btn:hover {background:var(--color-accent);color:#fff;}.cart-trigger {background:var(--color-primary);color:#FFFFFF;padding:10px 18px;gap:8px;box-shadow:var(--shadow-sm);position:relative;}.cart-trigger:hover {background:var(--color-primary-hover);box-shadow:var(--shadow-glow);transform:translateY(-1px);}.cart-badge {background:#FFFFFF;color:var(--color-primary);font-size:0.75rem;font-weight:800;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;}.hero-section {padding:60px 0 80px;position:relative;overflow:hidden;}.hero-grid {display:grid;grid-template-columns:1.1fr 0.9fr;gap:48px;align-items:center;}.hero-tag {display:inline-flex;align-items:center;gap:8px;padding:6px 16px;background:var(--color-primary-light);color:var(--color-primary);border-radius:var(--radius-full);font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:20px;}.hero-title {font-family:var(--font-heading);font-size:3.5rem;line-height:1.15;font-weight:700;color:var(--color-text-main);margin-bottom:20px;}.hero-title span {color:var(--color-primary);font-style:italic;}.hero-desc {font-size:1.15rem;color:var(--color-text-muted);line-height:1.7;margin-bottom:32px;max-width:540px;}.hero-buttons {display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:36px;}.btn-primary {background:var(--color-primary);color:#FFFFFF;padding:14px 28px;border-radius:var(--radius-full);font-weight:700;font-size:1rem;box-shadow:var(--shadow-md);transition:var(--transition-fast);display:inline-flex;align-items:center;gap:8px;}.btn-primary:hover {background:var(--color-primary-hover);transform:translateY(-2px);box-shadow:var(--shadow-glow);}.btn-secondary {background:var(--bg-surface);color:var(--color-text-main);border:1px solid var(--color-border);padding:14px 28px;border-radius:var(--radius-full);font-weight:700;font-size:1rem;transition:var(--transition-fast);display:inline-flex;align-items:center;gap:8px;}.btn-secondary:hover {border-color:var(--color-primary);color:var(--color-primary);background:var(--color-primary-light);transform:translateY(-2px);}.btn-quiz {background:var(--color-accent);color:#FFFFFF;padding:14px 24px;border-radius:var(--radius-full);font-weight:700;font-size:0.95rem;display:inline-flex;align-items:center;gap:8px;transition:var(--transition-fast);}.btn-quiz:hover {background:var(--color-accent-hover);transform:translateY(-2px);}.hero-stats {display:flex;align-items:center;gap:32px;border-top:1px solid var(--color-border);padding-top:24px;}.stat-item h4 {font-family:var(--font-heading);font-size:1.8rem;color:var(--color-text-main);line-height:1;}.stat-item p {font-size:0.8rem;color:var(--color-text-muted);text-transform:uppercase;letter-spacing:0.5px;font-weight:600;}.hero-image-wrapper {position:relative;}.hero-main-img {width:100%;height:520px;object-fit:cover;border-radius:var(--radius-lg);box-shadow:var(--shadow-xl);}.hero-floating-card {position:absolute;bottom:-20px;left:-20px;background:rgba(255, 255, 255, 0.95);backdrop-filter:blur(10px);padding:18px 24px;border-radius:var(--radius-md);box-shadow:var(--shadow-lg);border:1px solid rgba(255, 255, 255, 0.8);display:flex;align-items:center;gap:14px;max-width:280px;}.floating-icon {width:44px;height:44px;border-radius:50%;background:var(--color-accent-light);color:var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:1.4rem;}.floating-text h5 {font-size:0.95rem;font-weight:700;color:var(--color-text-main);}.floating-text p {font-size:0.8rem;color:var(--color-text-muted);}.trust-bar {background:var(--bg-surface);border-top:1px solid var(--color-border);border-bottom:1px solid var(--color-border);padding:24px 0;}.trust-grid {display:grid;grid-template-columns:repeat(4, 1fr);gap:24px;}.trust-item {display:flex;align-items:center;gap:14px;}.trust-icon {width:48px;height:48px;border-radius:var(--radius-md);background:var(--bg-surface-secondary);color:var(--color-primary);display:flex;align-items:center;justify-content:center;font-size:1.4rem;flex-shrink:0;}.trust-text h4 {font-size:0.95rem;font-weight:700;color:var(--color-text-main);}.trust-text p {font-size:0.8rem;color:var(--color-text-muted);}.categories-section {padding:80px 0;}.section-header {text-align:center;max-width:680px;margin:0 auto 48px;}.section-tag {display:inline-block;color:var(--color-primary);font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-bottom:8px;}.section-title {font-family:var(--font-heading);font-size:2.5rem;color:var(--color-text-main);line-height:1.2;margin-bottom:14px;}.section-subtitle {font-size:1.05rem;color:var(--color-text-muted);}.categories-grid {display:grid;grid-template-columns:repeat(3, 1fr);gap:28px;}.category-card {position:relative;border-radius:var(--radius-lg);overflow:hidden;height:380px;background:var(--bg-surface);box-shadow:var(--shadow-md);cursor:pointer;transition:var(--transition-normal);}.category-card:hover {transform:translateY(-6px);box-shadow:var(--shadow-xl);}.category-img {width:100%;height:100%;object-fit:cover;transition:transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);}.category-card:hover .category-img {transform:scale(1.06);}.category-overlay {position:absolute;inset:0;background:linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.7) 100%);display:flex;flex-direction:column;justify-content:flex-end;padding:32px 24px;color:#FFFFFF;}.category-count {font-size:0.75rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--color-gold);margin-bottom:6px;}.category-name {font-family:var(--font-heading);font-size:1.6rem;font-weight:700;margin-bottom:8px;}.category-action {display:flex;align-items:center;gap:6px;font-size:0.9rem;font-weight:600;color:#FFFFFF;opacity:0.9;transition:var(--transition-fast);}.category-card:hover .category-action {color:var(--color-gold);transform:translateX(4px);}.quiz-section {padding:80px 0;background:linear-gradient(135deg, #F5EDE6 0%, #EBF2EC 100%);border-radius:var(--radius-lg);margin:40px auto;position:relative;overflow:hidden;}.quiz-card {background:rgba(255, 255, 255, 0.95);backdrop-filter:blur(16px);border-radius:var(--radius-lg);padding:48px;box-shadow:var(--shadow-xl);border:1px solid rgba(255, 255, 255, 0.8);max-width:860px;margin:0 auto;}.quiz-progress-bar {width:100%;height:6px;background:var(--bg-surface-secondary);border-radius:var(--radius-full);margin-bottom:32px;overflow:hidden;}.quiz-progress-fill {height:100%;background:var(--color-accent);width:33.3%;transition:width var(--transition-normal);}.quiz-header {text-align:center;margin-bottom:36px;}.quiz-step-badge {display:inline-block;font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:var(--color-accent);margin-bottom:8px;}.quiz-question {font-family:var(--font-heading);font-size:2rem;color:var(--color-text-main);margin-bottom:8px;}.quiz-options-grid {display:grid;grid-template-columns:repeat(2, 1fr);gap:16px;margin-bottom:36px;}.quiz-option {padding:20px 24px;background:var(--bg-surface);border:2px solid var(--color-border);border-radius:var(--radius-md);text-align:left;transition:var(--transition-fast);cursor:pointer;display:flex;align-items:center;gap:16px;}.quiz-option:hover {border-color:var(--color-accent);background:var(--color-accent-light);transform:translateY(-2px);}.quiz-option.selected {border-color:var(--color-accent);background:var(--color-accent-light);box-shadow:0 0 0 1px var(--color-accent);}.option-icon {font-size:1.8rem;}.option-title {font-weight:700;font-size:1rem;color:var(--color-text-main);display:block;}.option-desc {font-size:0.85rem;color:var(--color-text-muted);}.quiz-navigation {display:flex;justify-content:space-between;align-items:center;}.quiz-result-box {text-align:center;}.quiz-result-badge {display:inline-flex;align-items:center;gap:6px;background:var(--color-accent-light);color:var(--color-accent);padding:6px 16px;border-radius:var(--radius-full);font-weight:700;font-size:0.85rem;margin-bottom:12px;}.quiz-result-title {font-family:var(--font-heading);font-size:2.2rem;color:var(--color-text-main);margin-bottom:12px;}.quiz-result-products {display:grid;grid-template-columns:repeat(3, 1fr);gap:20px;margin:32px 0;text-align:left;}.routine-product-card {background:var(--bg-surface);border-radius:var(--radius-md);padding:16px;border:1px solid var(--color-border);box-shadow:var(--shadow-sm);}.routine-product-img {width:100%;height:140px;object-fit:cover;border-radius:var(--radius-sm);margin-bottom:12px;}.routine-step-num {font-size:0.75rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.5px;}.routine-prod-name {font-size:0.95rem;font-weight:700;color:var(--color-text-main);margin:4px 0 6px;line-height:1.3;}.quiz-bundle-action {background:var(--bg-surface-secondary);padding:24px;border-radius:var(--radius-md);display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;}.bundle-pricing {text-align:left;}.bundle-price-now {font-size:1.8rem;font-weight:800;color:var(--color-text-main);}.bundle-price-was {font-size:1.1rem;color:var(--color-text-light);text-decoration:line-through;margin-left:8px;}.bundle-discount-tag {background:var(--color-accent);color:#fff;font-size:0.75rem;font-weight:700;padding:2px 8px;border-radius:var(--radius-full);margin-left:8px;}.product-section {padding:80px 0;}.filter-controls {display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:16px;margin-bottom:40px;}.filter-tabs {display:flex;gap:8px;flex-wrap:wrap;}.filter-tab {padding:10px 20px;border-radius:var(--radius-full);background:var(--bg-surface);border:1px solid var(--color-border);color:var(--color-text-muted);font-weight:600;font-size:0.9rem;transition:var(--transition-fast);}.filter-tab:hover {border-color:var(--color-primary);color:var(--color-primary);}.filter-tab.active {background:var(--color-primary);color:#FFFFFF;border-color:var(--color-primary);box-shadow:var(--shadow-sm);}.sort-select {padding:10px 18px;border-radius:var(--radius-full);border:1px solid var(--color-border);background:var(--bg-surface);font-weight:600;font-size:0.9rem;color:var(--color-text-main);outline:none;}.products-grid {display:grid;grid-template-columns:repeat(4, 1fr);gap:28px;}.product-card {background:var(--bg-surface);border-radius:var(--radius-md);border:1px solid var(--color-border);overflow:hidden;display:flex;flex-direction:column;transition:var(--transition-normal);position:relative;}.product-card:hover {transform:translateY(-6px);box-shadow:var(--shadow-xl);border-color:rgba(200, 122, 101, 0.3);}.product-image-box {position:relative;height:280px;background:var(--bg-surface-secondary);overflow:hidden;}.product-img {width:100%;height:100%;object-fit:cover;transition:transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);}.product-card:hover .product-img {transform:scale(1.05);}.product-badge {position:absolute;top:12px;left:12px;background:rgba(255, 255, 255, 0.92);backdrop-filter:blur(4px);color:var(--color-primary);font-size:0.75rem;font-weight:700;padding:4px 10px;border-radius:var(--radius-full);box-shadow:var(--shadow-sm);z-index:2;}.product-badge.bestseller {background:var(--color-gold);color:#fff;}.product-badge.newborn {background:var(--color-accent);color:#fff;}.quick-view-btn {position:absolute;bottom:12px;left:50%;transform:translateX(-50%) translateY(20px);background:rgba(255, 255, 255, 0.95);backdrop-filter:blur(6px);color:var(--color-text-main);padding:8px 18px;border-radius:var(--radius-full);font-size:0.85rem;font-weight:700;box-shadow:var(--shadow-md);opacity:0;transition:var(--transition-fast);white-space:nowrap;z-index:2;}.product-card:hover .quick-view-btn {opacity:1;transform:translateX(-50%) translateY(0);}.product-content {padding:20px;display:flex;flex-direction:column;flex-grow:1;}.product-category-tag {font-size:0.75rem;font-weight:700;color:var(--color-primary);text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;}.product-title {font-family:var(--font-heading);font-size:1.15rem;font-weight:700;line-height:1.35;color:var(--color-text-main);margin-bottom:8px;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;min-height:48px;}.product-ratings {display:flex;align-items:center;gap:6px;font-size:0.85rem;color:var(--color-gold);margin-bottom:12px;}.stars {letter-spacing:1px;}.reviews-num {color:var(--color-text-light);font-size:0.8rem;}.product-price-row {display:flex;align-items:baseline;gap:8px;margin-bottom:16px;margin-top:auto;}.product-price {font-size:1.25rem;font-weight:800;color:var(--color-text-main);}.product-compare-price {font-size:0.95rem;color:var(--color-text-light);text-decoration:line-through;}.product-add-btn {width:100%;background:var(--bg-surface-secondary);color:var(--color-text-main);border:1px solid var(--color-border);padding:10px;border-radius:var(--radius-full);font-weight:700;font-size:0.9rem;transition:var(--transition-fast);display:flex;align-items:center;justify-content:center;gap:8px;}.product-add-btn:hover {background:var(--color-primary);color:#FFFFFF;border-color:var(--color-primary);}.shopbase-buy-link {display:block;width:100%;text-align:center;padding:8px;border-radius:var(--radius-full);font-size:0.82rem;font-weight:600;color:var(--color-secondary);text-decoration:none;border:1px solid var(--color-secondary);transition:var(--transition-fast);margin-top:6px;background:transparent;}.shopbase-buy-link:hover {background:var(--color-secondary);color:#fff;}.safety-section {padding:80px 0;background:var(--bg-surface);border-top:1px solid var(--color-border);border-bottom:1px solid var(--color-border);}.safety-comparison-grid {display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:48px;}.safety-box {padding:40px;border-radius:var(--radius-lg);}.safety-box.good {background:var(--color-accent-light);border:1px solid rgba(94, 130, 104, 0.2);}.safety-box.bad {background:#FFF5F5;border:1px solid rgba(211, 47, 47, 0.15);}.safety-box-title {display:flex;align-items:center;gap:12px;font-family:var(--font-heading);font-size:1.6rem;margin-bottom:24px;}.safety-box.good .safety-box-title {color:var(--color-accent);}.safety-box.bad .safety-box-title {color:#C62828;}.safety-list {list-style:none;display:flex;flex-direction:column;gap:14px;}.safety-list-item {display:flex;align-items:flex-start;gap:12px;font-size:0.95rem;}.safety-icon-check {color:var(--color-accent);font-weight:800;}.safety-icon-cross {color:#C62828;font-weight:800;}.reviews-section {padding:80px 0;}.reviews-grid {display:grid;grid-template-columns:repeat(3, 1fr);gap:28px;}.review-card {background:var(--bg-surface);border-radius:var(--radius-lg);padding:32px;border:1px solid var(--color-border);box-shadow:var(--shadow-sm);display:flex;flex-direction:column;transition:var(--transition-normal);}.review-card:hover {transform:translateY(-4px);box-shadow:var(--shadow-md);}.review-stars {color:var(--color-gold);font-size:1.1rem;margin-bottom:14px;}.review-title {font-weight:700;font-size:1.1rem;margin-bottom:10px;color:var(--color-text-main);}.review-body {color:var(--color-text-muted);font-size:0.95rem;line-height:1.6;margin-bottom:20px;flex-grow:1;}.review-author {display:flex;align-items:center;gap:12px;border-top:1px solid var(--color-border);padding-top:16px;}.author-avatar {width:44px;height:44px;border-radius:50%;object-fit:cover;}.author-name {font-weight:700;font-size:0.95rem;}.author-meta {font-size:0.8rem;color:var(--color-accent);display:flex;align-items:center;gap:4px;}.guide-banner {background:var(--color-primary);color:#FFFFFF;padding:60px 48px;border-radius:var(--radius-lg);margin:60px auto;display:flex;align-items:center;justify-content:space-between;gap:40px;}.guide-banner-text h3 {font-family:var(--font-heading);font-size:2.2rem;margin-bottom:10px;}.guide-banner-text p {opacity:0.9;max-width:500px;}.newsletter-box {display:flex;gap:8px;max-width:440px;width:100%;}.newsletter-input {flex-grow:1;padding:14px 20px;border-radius:var(--radius-full);border:none;font-size:0.95rem;outline:none;}.newsletter-btn {background:var(--color-text-main);color:#FFFFFF;padding:14px 24px;border-radius:var(--radius-full);font-weight:700;transition:var(--transition-fast);}.newsletter-btn:hover {background:#000000;}.site-footer {background:#1C2022;color:#FFFFFF;padding:80px 0 32px;}.footer-grid {display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:48px;margin-bottom:60px;}.footer-brand h3 {font-family:var(--font-heading);font-size:1.8rem;margin-bottom:12px;}.footer-brand p {color:#9CA3AF;font-size:0.9rem;max-width:320px;margin-bottom:24px;}.footer-col h4 {font-size:1rem;font-weight:700;margin-bottom:20px;color:#FFFFFF;}.footer-links {list-style:none;display:flex;flex-direction:column;gap:12px;}.footer-links a {color:#9CA3AF;font-size:0.9rem;transition:var(--transition-fast);}.footer-links a:hover {color:#FFFFFF;}.footer-bottom {border-top:1px solid rgba(255, 255, 255, 0.1);padding-top:32px;display:flex;justify-content:space-between;align-items:center;color:#6B7280;font-size:0.85rem;flex-wrap:wrap;gap:16px;}.cart-overlay {position:fixed;inset:0;background:rgba(0, 0, 0, 0.5);backdrop-filter:blur(4px);z-index:1000;opacity:0;visibility:hidden;transition:var(--transition-normal);}.cart-overlay.open {opacity:1;visibility:visible;}.cart-drawer {position:fixed;top:0;right:0;bottom:0;width:100%;max-width:440px;background:var(--bg-surface);z-index:1001;box-shadow:var(--shadow-xl);transform:translateX(100%);transition:transform var(--transition-normal);display:flex;flex-direction:column;}.cart-drawer.open {transform:translateX(0);}.cart-header {padding:20px 24px;border-bottom:1px solid var(--color-border);display:flex;align-items:center;justify-content:space-between;}.cart-header h3 {font-family:var(--font-heading);font-size:1.4rem;}.cart-close-btn {font-size:1.5rem;color:var(--color-text-muted);width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:var(--transition-fast);}.cart-close-btn:hover {background:var(--bg-surface-secondary);color:var(--color-text-main);}.free-shipping-tracker {background:var(--color-primary-light);padding:14px 24px;border-bottom:1px solid var(--color-border);}.free-shipping-text {font-size:0.85rem;font-weight:600;color:var(--color-primary);margin-bottom:8px;text-align:center;}.free-shipping-bar {height:6px;background:rgba(200, 122, 101, 0.2);border-radius:var(--radius-full);overflow:hidden;}.free-shipping-fill {height:100%;background:var(--color-primary);width:0%;transition:width var(--transition-normal);}.cart-items-list {flex-grow:1;overflow-y:auto;padding:24px;display:flex;flex-direction:column;gap:20px;}.cart-item {display:flex;gap:16px;padding-bottom:20px;border-bottom:1px solid var(--color-border);}.cart-item-img {width:72px;height:72px;object-fit:cover;border-radius:var(--radius-sm);background:var(--bg-surface-secondary);flex-shrink:0;}.cart-item-details {flex-grow:1;}.cart-item-title {font-size:0.95rem;font-weight:700;line-height:1.3;margin-bottom:4px;}.cart-item-variant {font-size:0.8rem;color:var(--color-text-muted);margin-bottom:8px;}.cart-item-bottom {display:flex;align-items:center;justify-content:space-between;}.cart-qty-stepper {display:flex;align-items:center;border:1px solid var(--color-border);border-radius:var(--radius-full);background:var(--bg-surface);overflow:hidden;}.qty-btn {width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;color:var(--color-text-main);transition:var(--transition-fast);}.qty-btn:hover {background:var(--bg-surface-secondary);}.qty-num {font-size:0.85rem;font-weight:700;width:24px;text-align:center;}.cart-item-price {font-weight:800;font-size:1rem;}.cart-footer {padding:24px;border-top:1px solid var(--color-border);background:var(--bg-surface);}.promo-row {display:flex;gap:8px;margin-bottom:16px;}.promo-input {flex-grow:1;padding:8px 14px;border-radius:var(--radius-sm);border:1px solid var(--color-border);font-size:0.85rem;text-transform:uppercase;}.promo-apply-btn {background:var(--bg-surface-secondary);border:1px solid var(--color-border);padding:8px 16px;border-radius:var(--radius-sm);font-weight:700;font-size:0.85rem;}.cart-summary-row {display:flex;justify-content:space-between;font-size:0.95rem;margin-bottom:8px;color:var(--color-text-muted);}.cart-total-row {display:flex;justify-content:space-between;font-size:1.25rem;font-weight:800;color:var(--color-text-main);margin:14px 0 20px;}.checkout-btn {width:100%;background:var(--color-primary);color:#FFFFFF;padding:16px;border-radius:var(--radius-full);font-size:1.05rem;font-weight:700;display:flex;align-items:center;justify-content:center;gap:10px;box-shadow:var(--shadow-md);transition:var(--transition-fast);}.checkout-btn:hover {background:var(--color-primary-hover);box-shadow:var(--shadow-glow);}.cart-empty {text-align:center;padding:60px 24px;color:var(--color-text-muted);}.cart-empty-icon {font-size:3.5rem;margin-bottom:16px;}.modal-overlay {position:fixed;inset:0;background:rgba(0, 0, 0, 0.6);backdrop-filter:blur(6px);z-index:2000;display:flex;align-items:center;justify-content:center;padding:24px;opacity:0;visibility:hidden;transition:var(--transition-normal);}.modal-overlay.open {opacity:1;visibility:visible;}.modal-box {background:var(--bg-surface);border-radius:var(--radius-lg);max-width:960px;width:100%;max-height:90vh;overflow-y:auto;position:relative;box-shadow:var(--shadow-xl);}.modal-close-btn {position:absolute;top:20px;right:20px;width:40px;height:40px;border-radius:50%;background:var(--bg-surface-secondary);display:flex;align-items:center;justify-content:center;font-size:1.2rem;z-index:10;transition:var(--transition-fast);}.modal-close-btn:hover {background:var(--color-primary-light);color:var(--color-primary);}.quickview-grid {display:grid;grid-template-columns:1fr 1fr;gap:36px;padding:40px;}.quickview-gallery {display:flex;flex-direction:column;gap:12px;}.quickview-main-img {width:100%;height:380px;object-fit:cover;border-radius:var(--radius-md);}.quickview-thumbnails {display:flex;gap:10px;}.thumb-img {width:60px;height:60px;object-fit:cover;border-radius:var(--radius-sm);cursor:pointer;border:2px solid transparent;transition:var(--transition-fast);}.thumb-img.active {border-color:var(--color-primary);}.quickview-info {display:flex;flex-direction:column;}.quickview-title {font-family:var(--font-heading);font-size:1.8rem;line-height:1.25;margin-bottom:12px;}.quickview-price-box {display:flex;align-items:baseline;gap:12px;margin-bottom:16px;}.quickview-price {font-size:1.6rem;font-weight:800;color:var(--color-text-main);}.quickview-compare-price {font-size:1.1rem;color:var(--color-text-light);text-decoration:line-through;}.variant-options-group {margin:20px 0;}.variant-label {font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;display:block;}.variant-chips {display:flex;gap:10px;flex-wrap:wrap;}.variant-chip {padding:8px 16px;border-radius:var(--radius-full);border:1px solid var(--color-border);font-size:0.9rem;font-weight:600;background:var(--bg-surface);cursor:pointer;transition:var(--transition-fast);}.variant-chip.selected {border-color:var(--color-primary);background:var(--color-primary-light);color:var(--color-primary);}.admin-hub-box {padding:40px;max-width:680px;background:var(--bg-surface);}.admin-hub-header {display:flex;align-items:center;gap:14px;margin-bottom:24px;}.admin-hub-icon {width:48px;height:48px;border-radius:var(--radius-md);background:var(--color-accent-light);color:var(--color-accent);display:flex;align-items:center;justify-content:center;font-size:1.6rem;}.admin-status-indicator {display:flex;align-items:center;gap:8px;font-size:0.85rem;font-weight:600;padding:8px 16px;background:var(--bg-surface-secondary);border-radius:var(--radius-md);margin-bottom:24px;}.status-dot {width:10px;height:10px;border-radius:50%;background:#2E7D32;}.admin-actions-grid {display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:24px;}.admin-action-card {border:1px solid var(--color-border);border-radius:var(--radius-md);padding:20px;text-align:left;background:var(--bg-surface);transition:var(--transition-fast);}.admin-action-card:hover {border-color:var(--color-accent);box-shadow:var(--shadow-sm);}.admin-action-card h4 {font-size:1rem;font-weight:700;margin-bottom:6px;}.admin-action-card p {font-size:0.8rem;color:var(--color-text-muted);margin-bottom:14px;}@media (max-width:1024px) {.hero-grid {grid-template-columns:1fr;gap:40px;}.hero-main-img {height:400px;}.products-grid {grid-template-columns:repeat(3, 1fr);}.trust-grid {grid-template-columns:repeat(2, 1fr);}.footer-grid {grid-template-columns:1fr 1fr;}}@media (max-width:768px) {:root {--header-height:70px;}.nav-links {display:none;}.hero-title {font-size:2.4rem;}.categories-grid {grid-template-columns:1fr;}.products-grid {grid-template-columns:repeat(2, 1fr);gap:16px;}.quiz-options-grid {grid-template-columns:1fr;}.quiz-result-products {grid-template-columns:1fr;}.safety-comparison-grid {grid-template-columns:1fr;}.reviews-grid {grid-template-columns:1fr;}.quickview-grid {grid-template-columns:1fr;padding:24px;}.guide-banner {flex-direction:column;text-align:center;padding:40px 24px;}.newsletter-box {flex-direction:column;}.footer-grid {grid-template-columns:1fr;gap:32px;}}@media (max-width:480px) {.products-grid {grid-template-columns:1fr;}.trust-grid {grid-template-columns:1fr;}.hero-stats {flex-direction:column;align-items:flex-start;gap:16px;}}";
    document.head.appendChild(styleEl);
  }

  // Hide default ShopBase app immediately
  const appEl = document.getElementById('app');
  if (appEl) appEl.style.display = 'none';

  // Execute Storefront App
  var CoreNCoreStorefront=(()=>{var V=Object.create;var _=Object.defineProperty;var U=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var Y=Object.getPrototypeOf,K=Object.prototype.hasOwnProperty;var Z=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports),J=(t,e)=>{for(var r in e)_(t,r,{get:e[r],enumerable:!0})},E=(t,e,r,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Q(e))!K.call(t,s)&&s!==r&&_(t,s,{get:()=>e[s],enumerable:!(i=U(e,s))||i.enumerable});return t};var X=(t,e,r)=>(r=t!=null?V(Y(t)):{},E(e||!t||!t.__esModule?_(r,"default",{value:t,enumerable:!0}):r,t)),ee=t=>E(_({},"__esModule",{value:!0}),t);var L=Z((ie,q)=>{var te=[{id:0x38d7eccd55b1f,shopbase_handle:"4-in1-kitchen-colander-with-mixing-bowl-set",title:"Organic Nourishing Belly Butter & Stretch Mark Balm",handle:"organic-nourishing-belly-butter",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"19.99",compare_at_price:"25.99",rating:4.9,reviews_count:248,badge:"Bestseller",short_description:"Rich organic whipped butter with Shea, Rosehip, and Vitamin E to soothe stretching skin and reduce stretch marks.",body_html:"<h3>Deep Elasticity & Stretch Mark Prevention</h3><p>Formulated especially for expectant and postpartum mothers, our whipped Belly Butter delivers intense 24-hour hydration.</p><h4>Key Organic Ingredients:</h4><ul><li><strong>Raw Shea Butter:</strong> Deeply nourishes and locks in cellular moisture.</li><li><strong>Cold-Pressed Rosehip Seed Oil:</strong> Rich in Vitamin A & C to promote cellular regeneration.</li><li><strong>Vitamin E:</strong> Potent antioxidant that protects stretching tissue.</li></ul><h4>Safety Certification:</h4><p>100% USDA Organic Certified, Dermatologist Tested, Hypoallergenic, Paraben-Free, Phthalate-Free, Fragrance-Free.</p>",tags:"mother-care, belly-butter, stretch-marks, organic, prenatal, bestseller",image:"https://img.btdmp.com/10687/10687861/products/17856583041b5616c81c.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17856583041b5616c81c.jpeg","https://img.btdmp.com/10687/10687861/products/17856583049a756cd193.jpeg"],variants:[{id:0x38d8370d40b96,title:"1 PC",price:"19.99",compare_at_price:"25.99"},{id:0x38d8370d40b98,title:"2 Pack",price:"35.99",compare_at_price:"46.99"},{id:0x38d8370d40b99,title:"3 Pack",price:"49.99",compare_at_price:"64.99"},{id:0x38d8370d40b9a,title:"5 Pack",price:"79.99",compare_at_price:"104.99"}],routine_step:"Morning & Evening",safety_badges:["Pediatrician Approved","Dermatologist Tested","100% Organic","Cruelty Free"]},{id:0x38d7ecccd8df1,shopbase_handle:"adjustable-connected-dog-boots-ultimate-paw-protection",title:"Pure Botanical Stretch Mark Elasticity Oil",handle:"pure-botanical-stretch-mark-oil",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"20.99",compare_at_price:"27.29",rating:4.9,reviews_count:184,badge:"Award Winner",short_description:"Fast-absorbing luxurious botanical blend with Sweet Almond, Jojoba, and Evening Primrose oils for silky soft elasticity.",body_html:"<h3>Silky Elasticity & Intense Firming</h3><p>Our fast-absorbing botanical belly oil penetrates deeply into the dermis to enhance skin flexibility. Calms dry, itchy pregnant bellies, hips, and thighs.</p><h4>Key Actives:</h4><ul><li><strong>Organic Sweet Almond Oil:</strong> High in essential fatty acids for deep skin suppleness.</li><li><strong>Evening Primrose Oil:</strong> Rebalances stressed skin and strengthens elasticity.</li><li><strong>Plant-derived Squalane:</strong> Lightweight hydration that restores moisture barriers.</li></ul>",tags:"mother-care, belly-oil, elasticity, stretch-marks, organic",image:"https://img.btdmp.com/10687/10687861/products/17852154315d272b4005.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17852154315d272b4005.jpeg","https://img.btdmp.com/10687/10687861/products/17852154314903a86d99.png"],variants:[{id:0x38d83700b3d7e,title:"XS",price:"20.99",compare_at_price:"27.29"},{id:0x38d83700b3d80,title:"S",price:"21.99",compare_at_price:"28.59"},{id:0x38d83700b3d83,title:"M",price:"21.99",compare_at_price:"28.59"},{id:0x38d83700b3d85,title:"L",price:"21.99",compare_at_price:"28.59"},{id:0x38d83700b3d86,title:"XL",price:"24.99",compare_at_price:"32.49"},{id:0x38d83700b3d87,title:"2XL",price:"26.99",compare_at_price:"35.09"}],routine_step:"Post-Shower Daily",safety_badges:["100% Non-Toxic","Plant Squalane","Non-Greasy"]},{id:0x38d7eccd55b1e,shopbase_handle:"automatic-flip-egg-storage-box",title:"Organic Nipple & Nursing Soothing Salve",handle:"organic-nipple-nursing-salve",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"9.99",compare_at_price:"12.99",rating:5,reviews_count:312,badge:"Hospital Bag Must-Have",short_description:"100% Lanolin-Free, food-grade soothing balm for breastfeeding moms. No need to wash off before nursing.",body_html:"<h3>Gentle Nursing Comfort - Safe for Baby</h3><p>Crafted with ultra-pure food-grade plant oils, this 100% lanolin-free herbal salve immediately comforts sensitive, cracked, and sore nursing nipples.</p><h4>Pure Ingredients:</h4><ul><li><strong>Organic Calendula Flower Extract:</strong> Rapid tissue soothing.</li><li><strong>Organic Virgin Coconut Oil:</strong> Natural antibacterial and deeply conditioning.</li><li><strong>Organic Cocoa Seed Butter:</strong> Softens tender skin on contact.</li></ul>",tags:"mother-care, nursing, nipple-salve, lanolin-free, organic, hospital-bag",image:"https://img.btdmp.com/10687/10687861/products/1785658303b39cbf55b4.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658303b39cbf55b4.jpeg","https://img.btdmp.com/10687/10687861/products/1785658303ddccfd15cb.jpeg"],variants:[{id:0x38d8370d40b92,title:"1 PC",price:"9.99",compare_at_price:"12.99"},{id:0x38d8370d40b93,title:"2 Pack",price:"18.99",compare_at_price:"24.99"}],routine_step:"After Each Nursing Session",safety_badges:["100% Ingestion-Safe","Lanolin Free","Non-Sticky"]},{id:0x38d7eccd55b27,shopbase_handle:"bohemian-casual-print-v-neck-shirred-waist-long-dress",title:"Postpartum Restorative Firming Body Serum",handle:"postpartum-restorative-firming-serum",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"26.99",compare_at_price:"35.09",rating:4.8,reviews_count:142,badge:"Postpartum Hero",short_description:"Targeted firming and collagen-supporting serum with Centella Asiatica (Gotu Kola) and bioactive peptides.",body_html:"<h3>Reclaim Your Natural Tone & Elasticity</h3><p>An innovative postpartum serum scientifically formulated to visibly tone, tighten, and restore skin density following childbirth. Features Gotu Kola, green tea polyphenols, and plant ceramides.</p>",tags:"mother-care, postpartum, firming, serum, recovery",image:"https://img.btdmp.com/10687/10687861/products/17856583270d38e49a04.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17856583270d38e49a04.jpeg","https://img.btdmp.com/10687/10687861/products/17856583271df6c32581.jpeg"],variants:[{id:0x38d8370d40c0e,title:"S",price:"26.99",compare_at_price:"35.09"},{id:0x38d8370d40c0f,title:"M",price:"26.99",compare_at_price:"35.09"},{id:0x38d8370d40c10,title:"L",price:"26.99",compare_at_price:"35.09"},{id:0x38d8370d40c11,title:"XL",price:"26.99",compare_at_price:"35.09"}],routine_step:"Daily Firming Routine",safety_badges:["Breastfeeding Safe","Collagen Support","Clean Formula"]},{id:0x38d7ecccd8dce,shopbase_handle:"casual-adjustable-strap-loose-bib-rompers",title:"Mother Glow Hydrating Face Elixir & Vitamin C",handle:"mother-glow-hydrating-face-elixir",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"28.99",compare_at_price:"37.69",rating:4.9,reviews_count:198,badge:"Radiance Boost",short_description:"Pregnancy-safe brightening serum with gentle Vitamin C, Hyaluronic Acid, and Niacinamide to combat melasma.",body_html:"<h3>Banish Pregnancy Mask & Ignite Your Natural Radiance</h3><p>Safely address hormonal hyperpigmentation (melasma) with our 100% retinol-free, salicylic-free brightening elixir. Infused with THD Ascorbate (gentle Vitamin C), Hyaluronic Acid, and Niacinamide.</p>",tags:"mother-care, face-serum, pregnancy-glow, melasma-safe, vitamin-c",image:"https://img.btdmp.com/10687/10687861/products/17852153682cab5a154c.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17852153682cab5a154c.jpeg","https://img.btdmp.com/10687/10687861/products/1785215368754dc5f2d2.jpeg"],variants:[{id:0x38d83700b3b82,title:"XS",price:"28.99",compare_at_price:"37.69"},{id:0x38d83700b3b83,title:"S",price:"28.99",compare_at_price:"37.69"},{id:0x38d83700b3b84,title:"M",price:"28.99",compare_at_price:"37.69"},{id:0x38d83700b3b85,title:"L",price:"28.99",compare_at_price:"37.69"}],routine_step:"Morning & Night Facial Care",safety_badges:["Retinol Free","Salicylic Free","Pregnancy Safe"]},{id:0x38d7eccd55b1d,shopbase_handle:"compact-multitool",title:"Pregnancy-Safe Mineral SPF 50 Sunscreen",handle:"pregnancy-safe-mineral-spf50",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"13.99",compare_at_price:"18.19",rating:4.9,reviews_count:165,badge:"100% Non-Nano Mineral",short_description:"Sheer, non-greasy physical sunblock with 20% Non-Nano Zinc Oxide, organic Aloe, and Antioxidant Vitamin E.",body_html:"<h3>Pure Physical Broad-Spectrum Protection</h3><p>Hormonal changes during pregnancy make skin susceptible to sunspots. Our clean physical mineral sunscreen creates an invisible barrier against UVA/UVB rays without chemical filters.</p>",tags:"mother-care, suncare, mineral-spf, zinc-oxide, pregnancy-safe",image:"https://img.btdmp.com/10687/10687861/products/1785658302f13b814c01.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658302f13b814c01.jpeg","https://img.btdmp.com/10687/10687861/products/17856583029e53e51388.png"],variants:[{id:0x38d8370d40b90,title:"1 PC",price:"13.99",compare_at_price:"18.19"}],routine_step:"Morning Daily Sun Defense",safety_badges:["Reef Safe","No Chemical Filters","Non-Nano Zinc"]},{id:0x38d7eccd55b1c,shopbase_handle:"crawfish-sheller-seafood-tool",title:"Soothing Prenatal Leg & Tired Foot Relief Cream",handle:"prenatal-leg-foot-relief-cream",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"4.99",compare_at_price:"6.49",rating:4.8,reviews_count:119,badge:"Instant Cooling",short_description:"Cooling botanical cream with Magnesium, Arnica Montana, and spearmint to relieve swollen pregnancy feet & legs.",body_html:"<h3>Instant Cooling & De-puffing for Tired Mama Legs</h3><p>Relieve heavy legs, swelling, and restless muscle tension during 2nd and 3rd trimesters. Infused with transdermal Magnesium Chloride, organic Arnica, and cooling botanical extracts.</p>",tags:"mother-care, foot-cream, leg-relief, magnesium, swelling-relief",image:"https://img.btdmp.com/10687/10687861/products/1785658301d796d1f1ce.png",images:["https://img.btdmp.com/10687/10687861/products/1785658301d796d1f1ce.png","https://img.btdmp.com/10687/10687861/products/17856583015dbe8b6e22.jpeg"],variants:[{id:0x38d8370d40b8f,title:"1 PC",price:"4.99",compare_at_price:"6.49"}],routine_step:"Evening Rest & Massage",safety_badges:["Magnesium Rich","Cooling Sensation","Swelling Relief"]},{id:0x38d7eccd55b18,shopbase_handle:"women-s-summer-breathable-soft-shoes",title:"Herbal Sitz Bath Postpartum Soothing Soak",handle:"herbal-sitz-bath-postpartum-soothing-soak",product_type:"Mother Skin Care",category:"mother-care",category_label:"Mother Skin Care",price:"12.99",compare_at_price:"16.89",rating:5,reviews_count:146,badge:"Doula Recommended",short_description:"Herbal blend with Dead Sea salt, Epsom salt, Organic Witch Hazel, Calendula, and Yarrow for perineal healing.",body_html:"<h3>Soothing Relief for Post-Birth Recovery</h3><p>An age-old postpartum remedy that accelerates tissue healing, eases swelling, and provides comfort after labor. Comes with 6 pre-packed unbleached cotton brew bags.</p>",tags:"mother-care, sitz-bath, postpartum, perineal-soak, herbal-healing",image:"https://img.btdmp.com/10687/10687861/products/178565829661f7cf0579.jpeg",images:["https://img.btdmp.com/10687/10687861/products/178565829661f7cf0579.jpeg","https://img.btdmp.com/10687/10687861/products/1785658296f347773814.jpeg"],variants:[{id:0x38d8370d40b84,title:"1 Pack",price:"12.99",compare_at_price:"16.89"},{id:0x38d8370d40b78,title:"2 Pack",price:"23.99",compare_at_price:"31.19"}],routine_step:"Daily Healing Bath Soak",safety_badges:["100% Natural Herbs","Doula Approved","Fast Post-Birth Relief"]},{id:0x38d7eccd55b20,shopbase_handle:"heart-beating-and-breathing-routine-soothing-relief-koala",title:"Ultra-Gentle 2-in-1 Baby Wash & Tear-Free Shampoo",handle:"ultra-gentle-2in1-baby-wash-shampoo",product_type:"Baby Care",category:"baby-care",category_label:"Baby Care",price:"22.99",compare_at_price:"29.89",rating:5,reviews_count:420,badge:"#1 Newborn Essential",short_description:"Tear-free, pH 5.5 balanced head-to-toe cleanser with Colloidal Oat and Organic Calendula. Safe for sensitive newborn skin.",body_html:"<h3>Tear-Free, Cloud-Soft Cleansing for Delicate Newborns</h3><p>Tested by pediatricians and loved by parents. Our sulfate-free 2-in-1 foaming wash cleanses tender skin and fine baby hair without stripping natural lipid moisture.</p><h4>Nourishing Ingredients:</h4><ul><li><strong>Colloidal Oatmeal:</strong> Protects against eczema flare-ups and dry patches.</li><li><strong>Organic Chamomile & Calendula:</strong> Soothes irritation and promotes relaxation.</li><li><strong>Plant Coconut Glucosides:</strong> Mildest cleansing agents found in nature.</li></ul>",tags:"baby-care, baby-wash, tear-free, shampoo, newborn, eczema-safe, bestseller",image:"https://img.btdmp.com/10687/10687861/products/1785658306e53d2f6617.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658306e53d2f6617.jpeg","https://img.btdmp.com/10687/10687861/products/17856583060ab7195777.png"],variants:[{id:0x38d8370d40b97,title:"1 PC",price:"22.99",compare_at_price:"29.89"}],routine_step:"Bath Time Ritual",safety_badges:["Pediatrician Approved","Tear-Free Certified","Eczema Friendly","Hypoallergenic"]},{id:0x38d7eccd55b28,shopbase_handle:"invisible-non-slip-cotton-socks",title:"Organic Calming Baby Bedtime Massage Oil",handle:"organic-calming-baby-bedtime-massage-oil",product_type:"Baby Care",category:"baby-care",category_label:"Baby Care",price:"5.99",compare_at_price:"7.79",rating:4.9,reviews_count:285,badge:"Sleep Ritual Favorite",short_description:"Gentle organic massage oil with cold-pressed Apricot Kernel, French Lavender, and Roman Chamomile for deeper sleep.",body_html:"<h3>The Science of Touch & Deep Baby Sleep</h3><p>Daily baby massage strengthens infant bonding, promotes healthy motor development, and calms colic symptoms. Formulated with cold-pressed organic Apricot kernel oil and a faint touch of calming French Lavender.</p>",tags:"baby-care, massage-oil, baby-sleep, lavender, calming, organic",image:"https://img.btdmp.com/10687/10687861/products/1785658330622dd5f478.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658330622dd5f478.jpeg","https://img.btdmp.com/10687/10687861/products/17856583302efe08fb9a.jpeg"],variants:[{id:0x38d8370d40c1d,title:"S",price:"5.99",compare_at_price:"7.79"},{id:0x38d8370d40c1e,title:"M",price:"5.99",compare_at_price:"7.79"},{id:0x38d8370d40c1f,title:"L",price:"5.99",compare_at_price:"7.79"},{id:0x38d8370d40c20,title:"XL",price:"5.99",compare_at_price:"7.79"}],routine_step:"Post-Bath Bedtime Massage",safety_badges:["100% Organic","Mineral Oil Free","Nut-Free Safe"]},{id:0x38d7eccd55b26,shopbase_handle:"lightweight-casual-men-slip-on-shoes",title:"Gentle Zinc Barrier Diaper Rash Relief Cream",handle:"gentle-zinc-barrier-diaper-rash-cream",product_type:"Baby Care",category:"baby-care",category_label:"Baby Care",price:"19.99",compare_at_price:"25.99",rating:5,reviews_count:360,badge:"Instant Relief",short_description:"Fast-acting 14% Non-Nano Zinc Oxide barrier paste with organic Shea and Beeswax to seal out wetness.",body_html:"<h3>Clinically Proven Diaper Rash Defense</h3><p>Provides a breathable, waterproof protective shield that soothes redness on contact and prevents diaper irritation overnight. Free from fragrance, petrolatum, and harsh synthetic binders.</p>",tags:"baby-care, diaper-cream, zinc-oxide, rash-relief, newborn-safe",image:"https://img.btdmp.com/10687/10687861/products/1785658325286d9fe49b.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658325286d9fe49b.jpeg","https://img.btdmp.com/10687/10687861/products/1785658325ba62fb0f90.jpeg"],variants:[{id:1000020603309e3,title:"S",price:"19.99",compare_at_price:"25.99"},{id:0x38d8370d40bc9,title:"M",price:"19.99",compare_at_price:"25.99"},{id:0x38d8370d40bca,title:"L",price:"19.99",compare_at_price:"25.99"},{id:0x38d8370d40bcb,title:"XL",price:"19.99",compare_at_price:"25.99"}],routine_step:"Every Diaper Change",safety_badges:["Pediatrician Tested","Petrolatum Free","Fast Acting"]},{id:0x38d7eccd55b1a,shopbase_handle:"magical-nano-technology-stainless-steel-cleaning-paste",title:"Natural Cradle Cap & Scalp Soothing Treatment",handle:"natural-cradle-cap-scalp-treatment",product_type:"Baby Care",category:"baby-care",category_label:"Baby Care",price:"9.99",compare_at_price:"12.99",rating:4.9,reviews_count:177,badge:"Gentle Scalp Care",short_description:"Targeted organic serum that gently softens and lifts cradle cap flakes while nourishing infant hair roots.",body_html:"<h3>Clear, Healthy Scalp in Just Days</h3><p>Gently dissolves stubborn cradle cap build-up without irritating baby's fragile scalp. Rich in natural Linoleic Acid from Sunflower Seed Oil, organic Chamomile, and Vitamin E.</p>",tags:"baby-care, cradle-cap, scalp-care, newborn, baby-serum",image:"https://img.btdmp.com/10687/10687861/products/17856582986445cfefd9.png",images:["https://img.btdmp.com/10687/10687861/products/17856582986445cfefd9.png","https://img.btdmp.com/10687/10687861/products/178565829839d6f2507e.jpeg"],variants:[{id:0x38d8370d40b8b,title:"1 PC",price:"9.99",compare_at_price:"12.99"}],routine_step:"15 min Before Bath Time",safety_badges:["Organic Plant Oils","Flake Softening","Gentle on Hair"]},{id:0x38d7eccd55b25,shopbase_handle:"multi-color-touch-reactive-mashroom-lamp",title:"Hypoallergenic Baby Face & Body Hydration Lotion",handle:"hypoallergenic-baby-face-body-lotion",product_type:"Baby Care",category:"baby-care",category_label:"Baby Care",price:"19.99",compare_at_price:"25.99",rating:4.8,reviews_count:215,badge:"Daily Moisture",short_description:"Silky, fast-absorbing daily lotion with Ceramides, Colloidal Oat, and Coconut Oil to nourish sensitive baby skin.",body_html:"<h3>All-Day Hydration & Skin Barrier Protection</h3><p>Lightweight yet intensely moisturizing daily lotion that shields baby's delicate skin from dry indoor heating, wind, and irritation. Non-greasy finish makes getting dressed effortless.</p>",tags:"baby-care, baby-lotion, ceramides, daily-hydration, hypoallergenic",image:"https://img.btdmp.com/10687/10687861/products/1785658323a95046b860.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658323a95046b860.jpeg","https://img.btdmp.com/10687/10687861/products/1785658323f43c7e6fee.jpeg"],variants:[{id:0x38d8370d40bb5,title:"1 PC",price:"19.99",compare_at_price:"25.99"}],routine_step:"Morning & Post-Bath",safety_badges:["Ceramides 1, 3, 6-II","Steroid Free","Dermatologist Approved"]},{id:0x38d7eccd55b11,shopbase_handle:"new-upgrade-multi-purpose-professional-wire-stripping-tool",title:"Pure Water Bamboo Biodegradable Baby Wipes (Pack of 3)",handle:"pure-water-bamboo-baby-wipes-3pack",product_type:"Baby Care",category:"baby-care",category_label:"Baby Care",price:"21.99",compare_at_price:"28.59",rating:5,reviews_count:390,badge:"Eco-Friendly",short_description:"99.9% Purified Water on 100% biodegradable unbleached organic bamboo fiber. Ultra-soft for newborn skin.",body_html:"<h3>Purest Water Wipes - Zero Plastic, Zero Fragrance</h3><p>Gentle enough for newborns, hands, face, and diaper area. Made from sustainably harvested organic bamboo that naturally breaks down in 60 days without microplastic residue.</p>",tags:"baby-care, baby-wipes, biodegradable, bamboo, pure-water, eco-friendly",image:"https://img.btdmp.com/10687/10687861/products/17856582292c9b42e5ef.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17856582292c9b42e5ef.jpeg"],variants:[{id:0x38d8370d40b4a,title:"1 PC",price:"21.99",compare_at_price:"28.59"}],routine_step:"On-the-Go & Diaper Changes",safety_badges:["100% Plastic Free","99.9% Purified Water","Biodegradable"]},{id:0x38d7eccd55b23,shopbase_handle:"solar-ground-light-outdoor-garden",title:"Sweet Dreams Baby Bedtime Lavender Sleep Mist",handle:"sweet-dreams-baby-lavender-sleep-mist",product_type:"Baby Care",category:"baby-care",category_label:"Baby Care",price:"11.99",compare_at_price:"15.59",rating:4.9,reviews_count:162,badge:"Bedtime Ritual",short_description:"Gentle French Lavender & Chamomile nursery linen mist to create a peaceful, calming sleep environment.",body_html:"<h3>Soothing Aromatherapy for Blissful Baby Sleep</h3><p>Lightly spritz around baby's cot, nursery curtains, or swaddle blanket 10 minutes before bedtime. Formulated with pure therapeutic botanical hydrosols safe for delicate airways.</p>",tags:"baby-care, sleep-mist, aromatherapy, lavender, nursery, bedtime",image:"https://img.btdmp.com/10687/10687861/products/1785658322da6f9cc5ee.jpeg",images:["https://img.btdmp.com/10687/10687861/products/1785658322da6f9cc5ee.jpeg","https://img.btdmp.com/10687/10687861/products/1785658322b9c0e1548c.jpeg"],variants:[{id:0x38d8370d40bab,title:"Warm white",price:"11.99",compare_at_price:"15.59"},{id:0x38d8370d40baa,title:"Pure white",price:"11.99",compare_at_price:"15.59"}],routine_step:"Bedtime Nursery Prep",safety_badges:["Alcohol Free","Gentle Hydrosol","Baby Safe Aromatherapy"]},{id:0x38d7eccd55b17,shopbase_handle:"wing-rails-grill-chicken-wings",title:"The Complete New Mother Recovery & Care Kit",handle:"complete-new-mother-recovery-care-kit",product_type:"Bundles & Gifts",category:"bundles",category_label:"Prenatal & Postpartum Bundles",price:"9.99",compare_at_price:"12.99",rating:5,reviews_count:210,badge:"Best Gift for Mom",short_description:"Everything a new mom needs: Nourishing Belly Butter, Elasticity Oil, Nipple Salve, and Calming Bath Salts.",body_html:"<h3>The Ultimate Self-Care Sanctuary for New & Expecting Moms</h3><p>Curated by certified midwives and postpartum doulas. Includes full-sized jars of our best-selling Belly Butter, Pure Elasticity Oil, Organic Nipple Salve, and Herbal Recovery Soak in a luxury gift box.</p>",tags:"bundles, mother-care, baby-shower, gift-set, postpartum-kit, bestseller",image:"https://img.btdmp.com/10687/10687861/products/178565829599e6634c63.png",images:["https://img.btdmp.com/10687/10687861/products/178565829599e6634c63.png","https://img.btdmp.com/10687/10687861/products/178565829559290fe615.png"],variants:[{id:0x38d8370d40b77,title:"Buy 1",price:"9.99",compare_at_price:"12.99"}],routine_step:"Complete Maternal Ritual",safety_badges:["Luxury Gift Packaging","Save 23% on Bundle","Midwife Recommended"]},{id:0x38d7eccd55b19,shopbase_handle:"wire-stripping-tool-wire-twisting-connector-drill-attachmen",title:"Welcome Baby Newborn Organic Essentials Set",handle:"welcome-baby-newborn-organic-essentials-set",product_type:"Bundles & Gifts",category:"bundles",category_label:"Prenatal & Postpartum Bundles",price:"30.99",compare_at_price:"40.29",rating:5,reviews_count:188,badge:"Baby Shower Top Pick",short_description:"The complete newborn starter: 2-in-1 Wash, Bedtime Massage Oil, Zinc Diaper Cream, and Bamboo Wipes.",body_html:"<h3>Give Baby the Purest Start in Life</h3><p>Every essential for newborn bath time, diapering, and bedtime massage. Packaged in a reusable organic cotton canvas tote bag.</p>",tags:"bundles, baby-care, baby-shower, newborn-set, organic-baby",image:"https://img.btdmp.com/10687/10687861/products/17856582973dc7398e29.jpeg",images:["https://img.btdmp.com/10687/10687861/products/17856582973dc7398e29.jpeg","https://img.btdmp.com/10687/10687861/products/17856582972724c0a2ba.jpeg"],variants:[{id:0x38d8370d40b8a,title:"1 Set",price:"30.99",compare_at_price:"40.29"}],routine_step:"Head-to-Toe Baby Care",safety_badges:["Organic Cotton Bag","Save 23% on Bundle","Pediatrician Tested"]},{id:0x38d7eccd55b1b,shopbase_handle:"wireless-bluetooth-earphones",title:"Mama & Mini Head-to-Toe Bonding Care Bundle",handle:"mama-mini-head-to-toe-bonding-bundle",product_type:"Bundles & Gifts",category:"bundles",category_label:"Prenatal & Postpartum Bundles",price:"24.99",compare_at_price:"32.49",rating:4.9,reviews_count:154,badge:"Mama & Baby Duo",short_description:"A shared ritual of love: Belly Butter & Elixir for Mama + 2-in-1 Wash & Massage Oil for Baby.",body_html:"<h3>The Harmonious Ritual for Mother and Child</h3><p>Designed to nurture both mama and baby with the purest clean botanicals. Includes Belly Butter (200ml), Mother Glow Face Elixir (30ml), Baby Wash & Shampoo (250ml), and Calming Baby Massage Oil (100ml).</p>",tags:"bundles, mother-care, baby-care, mama-mini, bonding-ritual",image:"https://img.btdmp.com/10687/10687861/products/17856583006bc2e8694a.png",images:["https://img.btdmp.com/10687/10687861/products/17856583006bc2e8694a.png","https://img.btdmp.com/10687/10687861/products/1785658300b07ab0819d.png"],variants:[{id:0x38d8370d40b8e,title:"Buy 1",price:"24.99",compare_at_price:"32.49"},{id:0x38d8370d40b8c,title:"Buy 2",price:"44.99",compare_at_price:"58.99"},{id:0x38d8370d40b8d,title:"Buy 3",price:"64.99",compare_at_price:"84.99"}],routine_step:"Daily Shared Bonding Ritual",safety_badges:["Complete Duo","Save $7.50 Today","100% Clean Ingredients"]}];q.exports={MOTHER_AND_BABY_PRODUCTS:te}});var ae={};J(ae,{EmbedApp:()=>x,mountStorefront:()=>f});var j=X(L());function A(t,e,r){let i=[{code:"USD",symbol:"$",rate:1},{code:"EUR",symbol:"\u20AC",rate:.92},{code:"GBP",symbol:"\xA3",rate:.79},{code:"INR",symbol:"\u20B9",rate:83.5},{code:"CAD",symbol:"CA$",rate:1.36},{code:"AUD",symbol:"AU$",rate:1.52}],s=e.cart.reduce((o,p)=>o+p.quantity,0);t.innerHTML=`
    <!-- Top Announcement Bar -->
    <div class="announcement-bar">
      <div class="container announcement-content">
        <span class="announcement-highlight">Exclusive</span>
        <span>\u{1F33F} Free Hospital Bag Essentials Sample Kit on orders over $50 | Use code <strong>MOMCARE15</strong> for 15% OFF</span>
      </div>
    </div>

    <!-- Main Navigation Header -->
    <div class="main-header">
      <div class="container header-inner">
        <!-- Logo -->
        <a href="#" class="brand-logo" id="logo-home-btn">
          <div class="brand-logo-icon">\u{1F33F}</div>
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
          <li class="nav-item"><a href="#routine-quiz-container" data-nav="quiz" style="color: var(--color-accent); font-weight: 700;">\u2728 Routine Finder</a></li>
          <li class="nav-item"><a href="#safety-standards-container" data-nav="safety">Clean Standards</a></li>
        </ul>

        <!-- Right Header Actions -->
        <div class="header-actions">
          <!-- Currency Dropdown -->
          <select class="currency-select" id="currency-switcher">
            ${i.map(o=>`
              <option value="${o.code}" ${e.currency===o.code?"selected":""}>
                ${o.code} (${o.symbol})
              </option>
            `).join("")}
          </select>

          <!-- Search Button -->
          <button class="search-button" id="header-search-btn" title="Search Products">
            <span>\u{1F50D}</span>
            <span style="display: none;">Search</span>
          </button>

          <!-- Live ShopBase Sync Admin Hub -->
          <button class="admin-btn" id="open-admin-hub-btn" title="ShopBase Store Sync & API Status">
            <span>\u2699\uFE0F</span>
            <span>ShopBase API</span>
          </button>

          <!-- Cart Drawer Trigger -->
          <button class="cart-trigger" id="cart-drawer-toggle-btn" aria-label="View Shopping Cart">
            <span>\u{1F6D2}</span>
            <span>Cart</span>
            <span class="cart-badge" id="cart-counter-badge">${s}</span>
          </button>
        </div>
      </div>
    </div>
  `,t.querySelector("#currency-switcher").addEventListener("change",o=>{r.setCurrency(o.target.value)}),t.querySelector("#cart-drawer-toggle-btn").addEventListener("click",()=>{r.toggleCart(!0)}),t.querySelector("#open-admin-hub-btn").addEventListener("click",()=>{r.openAdminHub()}),t.querySelector("#header-search-btn").addEventListener("click",()=>{let o=prompt("Search Mother & Baby products (e.g. belly butter, baby wash, lavender, diaper cream):");if(o!==null){r.searchProducts(o);let p=document.getElementById("product-grid-container");p&&p.scrollIntoView({behavior:"smooth"})}}),t.querySelectorAll("[data-filter]").forEach(o=>{o.addEventListener("click",p=>{p.preventDefault();let l=o.getAttribute("data-filter");r.setCategoryFilter(l);let n=document.getElementById("product-grid-container");n&&n.scrollIntoView({behavior:"smooth"})})}),t.querySelector("#logo-home-btn").addEventListener("click",o=>{o.preventDefault(),r.setCategoryFilter("all"),window.scrollTo({top:0,behavior:"smooth"})})}function S(t,e,r){t&&(t.className="storefront-layer layer-header",t.setAttribute("data-layer","header"),A(t,e,r))}function $(t,e,r){t.innerHTML=`
    <div class="hero-section">
      <div class="container hero-grid">
        <!-- Hero Text -->
        <div class="hero-text-col">
          <div class="hero-tag">
            <span>\u2728 Certified Pure & Clean Formulations</span>
          </div>
          <h1 class="hero-title">
            Gentle Care for <span>Mother's Glow</span> & Baby's Delicate Skin.
          </h1>
          <p class="hero-desc">
            Scientifically crafted with cold-pressed organic botanicals and zero harsh chemicals. Pediatrician-approved, hypoallergenic solutions supporting prenatal wellness, postpartum recovery, and tender infant skin.
          </p>

          <div class="hero-buttons">
            <button class="btn-primary" id="hero-shop-mother-btn">
              <span>\u{1F338} Shop Mother Care</span>
            </button>
            <button class="btn-secondary" id="hero-shop-baby-btn">
              <span>\u{1F476} Shop Baby Essentials</span>
            </button>
            <button class="btn-quiz" id="hero-quiz-btn">
              <span>\u2728 Find Your Routine</span>
            </button>
          </div>

          <div class="hero-stats">
            <div class="stat-item">
              <h4>100%</h4>
              <p>Organic Botanicals</p>
            </div>
            <div class="stat-item">
              <h4>4.9 \u2605</h4>
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
            <div class="floating-icon">\u{1F33F}</div>
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
          <div class="trust-icon">\u{1FA7A}</div>
          <div class="trust-text">
            <h4>Pediatrician Approved</h4>
            <p>Clinically tested for newborn skin</p>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon">\u{1F331}</div>
          <div class="trust-text">
            <h4>100% Clean & Non-Toxic</h4>
            <p>Zero parabens, sulfates, or dyes</p>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon">\u{1F4E6}</div>
          <div class="trust-text">
            <h4>Free Shipping Over $50</h4>
            <p>Fast doorstep delivery with tracking</p>
          </div>
        </div>
        <div class="trust-item">
          <div class="trust-icon">\u{1F496}</div>
          <div class="trust-text">
            <h4>30-Day Mama Guarantee</h4>
            <p>Love it or 100% money back</p>
          </div>
        </div>
      </div>
    </div>
  `,t.querySelector("#hero-shop-mother-btn").addEventListener("click",()=>{r.setCategoryFilter("mother-care");let i=document.getElementById("product-grid-container");i&&i.scrollIntoView({behavior:"smooth"})}),t.querySelector("#hero-shop-baby-btn").addEventListener("click",()=>{r.setCategoryFilter("baby-care");let i=document.getElementById("product-grid-container");i&&i.scrollIntoView({behavior:"smooth"})}),t.querySelector("#hero-quiz-btn").addEventListener("click",()=>{let i=document.getElementById("routine-quiz-container");i&&i.scrollIntoView({behavior:"smooth"})})}function F(t,e){let r=[{id:"mother-care",name:"Mother Skin Care",tagline:"Prenatal Elasticity & Postpartum Recovery",count:"7 Botanical Formulas",image:"https://images.unsplash.com/photo-1608248597359-0098f986422d?auto=format&fit=crop&w=900&q=80",actionText:"Explore Mother Care \u2192"},{id:"baby-care",name:"Pure Baby Care",tagline:"Tear-Free, Eczema-Friendly & Soothing",count:"7 Gentle Essentials",image:"https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80",actionText:"Explore Baby Care \u2192"},{id:"bundles",name:"Bundles & Gift Sets",tagline:"Curated Kits with up to 25% Savings",count:"4 Complete Ritual Sets",image:"https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80",actionText:"Shop Value Bundles \u2192"}];t.innerHTML=`
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
          ${r.map(i=>`
            <div class="category-card" data-category="${i.id}">
              <img src="${i.image}" alt="${i.name}" class="category-img" loading="lazy" />
              <div class="category-overlay">
                <span class="category-count">${i.count}</span>
                <h3 class="category-name">${i.name}</h3>
                <p style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 12px;">${i.tagline}</p>
                <div class="category-action">${i.actionText}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `,t.querySelectorAll(".category-card").forEach(i=>{i.addEventListener("click",()=>{let s=i.getAttribute("data-category");e.setCategoryFilter(s);let c=document.getElementById("product-grid-container");c&&c.scrollIntoView({behavior:"smooth"})})})}function T(t,e,r){let i=1,s={stage:"pregnant",concern:"stretch-marks",preference:"butter"},c=[{step:1,title:"Who are you shopping for today?",subtitle:"Select the stage to help us personalize safe, biocompatible ingredients.",options:[{key:"stage",value:"pregnant",title:"Expecting Mother",desc:"Trimesters 1, 2, or 3 (Prenatal Care)",icon:"\u{1F930}"},{key:"stage",value:"postpartum",title:"Postpartum Mother",desc:"4th Trimester recovery & breastfeeding",icon:"\u{1F931}"},{key:"stage",value:"newborn",title:"Newborn Infant",desc:"0 to 6 months delicate skin",icon:"\u{1F476}"},{key:"stage",value:"toddler",title:"Baby & Toddler",desc:"6 months+ active bath & play care",icon:"\u{1F37C}"}]},{step:2,title:"What is your main skin or care focus?",subtitle:"Our certified herbal formulas target specific developmental milestones.",options:[{key:"concern",value:"stretch-marks",title:"Stretch Marks & Deep Elasticity",desc:"Soothe tight, itchy stretching skin",icon:"\u2728"},{key:"concern",value:"nursing-comfort",title:"Nursing & Nipple Healing",desc:"100% Ingestion-safe, lanolin-free balm",icon:"\u{1F496}"},{key:"concern",value:"baby-eczema",title:"Baby Dryness & Eczema",desc:"Tear-free colloidal oat barrier soothing",icon:"\u{1F6C1}"},{key:"concern",value:"sleep-calm",title:"Bedtime Sleep & Colic Relief",desc:"Lavender calming massage and sleep mist",icon:"\u{1F319}"}]},{step:3,title:"What texture and finish do you prefer?",subtitle:"All products are 100% non-sticky and fast-absorbing.",options:[{key:"preference",value:"butter",title:"Rich Whipped Body Butters",desc:"Deep 24hr moisture lock",icon:"\u{1F9C8}"},{key:"preference",value:"oil",title:"Silky Cold-Pressed Oils",desc:"Fast penetration with radiant glow",icon:"\u{1F4A7}"},{key:"preference",value:"wash-lotion",title:"Gentle Foams & Daily Lotions",desc:"Lightweight everyday hydration",icon:"\u{1F9F4}"},{key:"preference",value:"full-bundle",title:"Complete Complete Care Routine",desc:"Head-to-toe bundle with 15% savings",icon:"\u{1F381}"}]}];function h(){return s.stage==="pregnant"||s.concern==="stretch-marks"?{title:"The Ultimate Prenatal Elasticity Routine",desc:"Designed to maximize skin flexibility and lock in cellular moisture from trimester 1 through postpartum.",products:[e.products.find(a=>a.id===0x38d7eccd55b1f)||e.products[0],e.products.find(a=>a.id===0x38d7ecccd8df1)||e.products[1],e.products.find(a=>a.id===0x38d7eccd55b1d)||e.products[5]]}:s.stage==="postpartum"||s.concern==="nursing-comfort"?{title:"The Fourth Trimester Mama Recovery Routine",desc:"Hospital-grade clean soothing formulas for nursing nipples, restorative firming, and perineal recovery.",products:[e.products.find(a=>a.id===0x38d7eccd55b1e)||e.products[2],e.products.find(a=>a.id===0x38d7eccd55b27)||e.products[3],e.products.find(a=>a.id===0x38d7eccd55b18)||e.products[17]]}:s.concern==="sleep-calm"?{title:"The Blissful Baby Sleep & Calming Ritual",desc:"Pediatrician-tested nighttime ritual with organic French Lavender to encourage deep, tranquil infant sleep.",products:[e.products.find(a=>a.id===0x38d7eccd55b20)||e.products[7],e.products.find(a=>a.id===0x38d7eccd55b28)||e.products[8],e.products.find(a=>a.id===0x38d7eccd55b23)||e.products[13]]}:{title:"The Pure Newborn Head-to-Toe Starter Routine",desc:"Ultra-mild, tear-free essentials to protect baby's delicate microbiome and natural moisture barrier.",products:[e.products.find(a=>a.id===0x38d7eccd55b20)||e.products[7],e.products.find(a=>a.id===0x38d7eccd55b26)||e.products[9],e.products.find(a=>a.id===0x38d7eccd55b25)||e.products[11]]}}function d(){if(i<=3){let a=c[i-1],o=i/3*100;t.innerHTML=`
        <div class="container">
          <div class="quiz-section">
            <div class="quiz-card">
              <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" style="width: ${o}%;"></div>
              </div>

              <div class="quiz-header">
                <span class="quiz-step-badge">Step ${i} of 3</span>
                <h3 class="quiz-question">${a.title}</h3>
                <p style="color: var(--color-text-muted); font-size: 0.95rem;">${a.subtitle}</p>
              </div>

              <div class="quiz-options-grid">
                ${a.options.map(n=>`
                    <div class="quiz-option ${s[n.key]===n.value?"selected":""}" data-key="${n.key}" data-value="${n.value}">
                      <span class="option-icon">${n.icon}</span>
                      <div>
                        <span class="option-title">${n.title}</span>
                        <span class="option-desc">${n.desc}</span>
                      </div>
                    </div>
                  `).join("")}
              </div>

              <div class="quiz-navigation">
                ${i>1?'<button class="btn-secondary" id="quiz-prev-btn">\u2190 Back</button>':"<div></div>"}
                <button class="btn-primary" id="quiz-next-btn">
                  ${i===3?"Get My Personalized Routine \u2728":"Continue \u2192"}
                </button>
              </div>
            </div>
          </div>
        </div>
      `,t.querySelectorAll(".quiz-option").forEach(n=>{n.addEventListener("click",()=>{let m=n.getAttribute("data-key"),v=n.getAttribute("data-value");s[m]=v,d()})}),t.querySelector("#quiz-next-btn").addEventListener("click",()=>{i++,d()});let l=t.querySelector("#quiz-prev-btn");l&&l.addEventListener("click",()=>{i--,d()})}else{let a=h(),o=a.products.reduce((l,n)=>l+parseFloat((n==null?void 0:n.price)||0),0),p=(o*.85).toFixed(2);t.innerHTML=`
        <div class="container">
          <div class="quiz-section">
            <div class="quiz-card quiz-result-box">
              <span class="quiz-result-badge">\u{1F3AF} Personalized Recommendation</span>
              <h3 class="quiz-result-title">${a.title}</h3>
              <p style="color: var(--color-text-muted); max-width: 600px; margin: 0 auto;">${a.desc}</p>

              <div class="quiz-result-products">
                ${a.products.map((l,n)=>`
                  <div class="routine-product-card">
                    <img src="${l.image}" alt="${l.title}" class="routine-product-img" />
                    <span class="routine-step-num">Step 0${n+1}</span>
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
                  <span class="bundle-price-now">${r.formatPrice(p)}</span>
                  <span class="bundle-price-was">${r.formatPrice(o)}</span>
                  <span class="bundle-discount-tag">Save 15% Today</span>
                </div>

                <div style="display: flex; gap: 12px; align-items: center;">
                  <button class="btn-secondary" id="quiz-retake-btn">Retake Quiz</button>
                  <button class="btn-primary" id="quiz-add-bundle-btn">
                    <span>\u{1F6D2} Add Full Routine to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `,t.querySelector("#quiz-retake-btn").addEventListener("click",()=>{i=1,d()}),t.querySelector("#quiz-add-bundle-btn").addEventListener("click",()=>{a.products.forEach(l=>{r.addToCart(l,1)}),r.toggleCart(!0)})}}d()}function H(t,e,r){let i=[{id:"all",label:"All Products (18)"},{id:"mother-care",label:"Mother Skin Care"},{id:"baby-care",label:"Baby Care"},{id:"bundles",label:"Bundles & Gift Sets"}],s=[...e.products];if(e.activeCategory&&e.activeCategory!=="all"&&(s=s.filter(a=>a.category===e.activeCategory)),e.searchQuery){let a=e.searchQuery.toLowerCase();s=s.filter(o=>o.title.toLowerCase().includes(a)||o.tags.toLowerCase().includes(a)||o.short_description.toLowerCase().includes(a))}e.sortBy==="price-low"?s.sort((a,o)=>parseFloat(a.price)-parseFloat(o.price)):e.sortBy==="price-high"?s.sort((a,o)=>parseFloat(o.price)-parseFloat(a.price)):e.sortBy==="rating"&&s.sort((a,o)=>o.rating-a.rating),t.innerHTML=`
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
            ${i.map(a=>`
              <button class="filter-tab ${e.activeCategory===a.id?"active":""}" data-tab="${a.id}">
                ${a.label}
              </button>
            `).join("")}
          </div>

          <div style="display: flex; align-items: center; gap: 12px;">
            ${e.searchQuery?`
              <div style="font-size: 0.85rem; background: var(--color-primary-light); color: var(--color-primary); padding: 6px 14px; border-radius: var(--radius-full); display: flex; align-items: center; gap: 6px;">
                <span>Search: "<strong>${e.searchQuery}</strong>"</span>
                <button id="clear-search-btn" style="color: var(--color-primary); font-weight: 800; font-size: 1rem;">\u2715</button>
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
            ${s.map(a=>{var l,n;let o=a.image||((l=a.images)==null?void 0:l[0]),p=((n=a.images)==null?void 0:n[1])||o;return`
                <div class="product-card" data-product-id="${a.id}">
                  <div class="product-image-box">
                    <img 
                      src="${o}" 
                      alt="${a.title}" 
                      class="product-img" 
                      loading="lazy" 
                      data-main="${o}"
                      data-hover="${p}"
                      onerror="this.src='https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80'"
                    />
                    ${a.badge?`
                      <span class="product-badge ${a.badge.toLowerCase().includes("bestseller")?"bestseller":""} ${a.badge.toLowerCase().includes("newborn")?"newborn":""}">
                        ${a.badge}
                      </span>
                    `:""}
                    <button class="quick-view-btn" data-quickview="${a.id}">
                      \u{1F441} Quick View
                    </button>
                  </div>

                  <div class="product-content">
                    <span class="product-category-tag">${a.category_label||a.product_type}</span>
                    <h3 class="product-title" title="${a.title}">${a.title}</h3>
                    
                    <div class="product-ratings">
                      <span class="stars">\u2605\u2605\u2605\u2605\u2605</span>
                      <span style="font-weight: 700; font-size: 0.85rem; color: var(--color-text-main);">${a.rating}</span>
                      <span class="reviews-num">(${a.reviews_count})</span>
                    </div>

                    <div class="product-price-row">
                      <span class="product-price">${r.formatPrice(a.price)}</span>
                      ${a.compare_at_price?`
                        <span class="product-compare-price">${r.formatPrice(a.compare_at_price)}</span>
                      `:""}
                    </div>

                    <button class="product-add-btn" data-add-to-cart="${a.id}">
                      <span>\u{1F6D2} Add to Cart</span>
                    </button>
                    ${a.shopbase_handle?`
                      <a href="https://corencore.onshopbase.com/products/${a.shopbase_handle}" 
                         target="_blank" 
                         class="shopbase-buy-link" 
                         onclick="event.stopPropagation()">
                        \u{1F6CD} Buy on Store \u2192
                      </a>
                    `:""}
                  </div>
                </div>
              `}).join("")}
          </div>
        `}
      </div>
    </div>
  `,t.querySelectorAll(".filter-tab").forEach(a=>{a.addEventListener("click",()=>{let o=a.getAttribute("data-tab");r.setCategoryFilter(o)})});let c=t.querySelector("#product-sort-select");c&&c.addEventListener("change",a=>{r.setSortBy(a.target.value)});let h=t.querySelector("#clear-search-btn");h&&h.addEventListener("click",()=>{r.searchProducts("")});let d=t.querySelector("#reset-filter-btn");d&&d.addEventListener("click",()=>{r.setCategoryFilter("all"),r.searchProducts("")}),t.querySelectorAll("[data-quickview]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation();let p=a.getAttribute("data-quickview"),l=e.products.find(n=>String(n.id)===String(p));l&&r.openProductModal(l)})}),t.querySelectorAll(".product-card").forEach(a=>{a.addEventListener("click",o=>{if(o.target.closest("[data-add-to-cart]"))return;let p=a.getAttribute("data-product-id"),l=e.products.find(n=>String(n.id)===String(p));l&&r.openProductModal(l)})}),t.querySelectorAll(".product-image-box").forEach(a=>{let o=a.querySelector(".product-img"),p=o.getAttribute("data-main"),l=o.getAttribute("data-hover");l&&l!==p&&(a.addEventListener("mouseenter",()=>{o.src=l}),a.addEventListener("mouseleave",()=>{o.src=p}))}),t.querySelectorAll("[data-add-to-cart]").forEach(a=>{a.addEventListener("click",o=>{o.stopPropagation();let p=a.getAttribute("data-add-to-cart"),l=e.products.find(n=>String(n.id)===String(p));l&&(r.addToCart(l,1),r.toggleCart(!0))})})}function R(t){t.innerHTML=`
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
              <span>\u{1F33F}</span>
              <span>What We Formulate With:</span>
            </h3>
            <ul class="safety-list">
              <li class="safety-list-item">
                <span class="safety-icon-check">\u2713</span>
                <div>
                  <strong>Cold-Pressed Organic Plant Oils:</strong> Jojoba, Sweet Almond, Apricot Kernel, and Rosehip for biocompatible nourishment.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-check">\u2713</span>
                <div>
                  <strong>Colloidal Oatmeal & Calendula:</strong> Clinically proven barrier-reinforcing and eczema-soothing active botanicals.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-check">\u2713</span>
                <div>
                  <strong>Plant-Derived Ceramides & Squalane:</strong> Biomimetic lipids that replicate skin's natural protective moisture seal.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-check">\u2713</span>
                <div>
                  <strong>100% Non-Nano Mineral Zinc Oxide:</strong> Safest physical UV and moisture barrier for delicate infant skin.
                </div>
              </li>
            </ul>
          </div>

          <!-- What We Leave Out -->
          <div class="safety-box bad">
            <h3 class="safety-box-title">
              <span>\u{1F6AB}</span>
              <span>What We NEVER Allow:</span>
            </h3>
            <ul class="safety-list">
              <li class="safety-list-item">
                <span class="safety-icon-cross">\u2715</span>
                <div>
                  <strong>0% Parabens & Phthalates:</strong> Known endocrine disruptors completely excluded from all products.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-cross">\u2715</span>
                <div>
                  <strong>0% Synthetic Fragrances & Dyes:</strong> Zero artificial perfumes that can irritate newborn airways or trigger dermatitis.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-cross">\u2715</span>
                <div>
                  <strong>0% Sulfates (SLS / SLES):</strong> Harsh foaming agents replaced with gentle plant coconut glucosides.
                </div>
              </li>
              <li class="safety-list-item">
                <span class="safety-icon-cross">\u2715</span>
                <div>
                  <strong>0% Mineral Oil & Petrolatum:</strong> Zero petroleum derivatives that clog maternal and infant pores.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `}function I(t){let e=[{author:"Elena Rostova",stage:"Mom of 2 (Baby 4mo)",avatar:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",title:"Saved my belly during pregnancy \u2014 zero stretch marks!",text:"I used the Belly Butter morning and night and the Elasticity Oil right after the shower. I am now 4 months postpartum with twin girls and my skin bounced back amazingly with zero marks!",product:"Nourishing Belly Butter & Elasticity Oil"},{author:"Sarah Jenkins, RN",stage:"Pediatric Nurse & First-Time Mom",avatar:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",title:"The only wash that cleared my son's cradle cap & eczema",text:"As a pediatric nurse, I am extremely picky with baby products. The 2-in-1 Baby Wash and Scalp Serum are game changers. Gentle, tear-free, and leaves his curls so soft without any scent chemicals.",product:"Ultra-Gentle 2-in-1 Baby Wash"},{author:"Priya Sharma",stage:"New Mom (Baby 6w)",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",title:"Lanolin-free nipple salve is a lifesaver for breastfeeding",text:"Every other cream was sticky and made nursing painful. This herbal salve melts like butter, soothes instant cracking, and I love that I don't have to wipe it off before latching baby.",product:"Organic Nipple & Nursing Salve"}];t.innerHTML=`
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
              <div class="review-stars">\u2605\u2605\u2605\u2605\u2605</div>
              <h4 class="review-title">"${r.title}"</h4>
              <p class="review-body">${r.text}</p>
              
              <div class="review-author">
                <img src="${r.avatar}" alt="${r.author}" class="author-avatar" />
                <div>
                  <div class="author-name">${r.author}</div>
                  <div class="author-meta">
                    <span>\u2713 Verified Buyer</span> \u2022 <span>${r.stage}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
  `}function w(t,e,r){if(!t)return;t.className="storefront-layer layer-body",t.setAttribute("data-layer","body"),t.querySelector("#hero-container")||(t.innerHTML=`
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
    `);let i=t.querySelector("#hero-container"),s=t.querySelector("#trust-bar-container"),c=t.querySelector("#categories-container"),h=t.querySelector("#routine-quiz-container"),d=t.querySelector("#product-grid-container"),a=t.querySelector("#safety-standards-container"),o=t.querySelector("#reviews-container");i&&s&&$(i,s,r),c&&F(c,r),h&&T(h,e,r),d&&H(d,e,r),a&&R(a),o&&I(o)}function z(t,e,r){t.innerHTML=`
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
            Get Free Guide \u{1F4D6}
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
            <h3>\u{1F33F} Core & Core</h3>
            <p>
              Dedicated to formulating pure, biocompatible skincare solutions for expecting mothers, postpartum healing, and delicate baby skin.
            </p>
            <div style="color: var(--color-gold); font-size: 0.85rem; font-weight: 700;">
              \u2713 100% Non-Toxic & Pediatrician Approved
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
              \u2699\uFE0F Manage ShopBase Sync
            </button>
          </div>
        </div>

        <div class="footer-bottom">
          <div>
            \xA9 2026 Core & Core Pure Care. Built for ShopBase Storefront. All rights reserved.
          </div>
          <div style="display: flex; gap: 20px;">
            <a href="#" data-page="privacy">Privacy Policy</a>
            <a href="#" data-page="terms">Terms of Service</a>
            <a href="#" data-page="faqs">Return & Refund Policy</a>
          </div>
        </div>
      </div>
    </div>
  `,t.querySelector("#guide-newsletter-form").addEventListener("submit",i=>{i.preventDefault(),alert("\u{1F389} Thank you! Your free Mother & Baby Care Routine Guide has been sent to your email."),i.target.reset()}),e.querySelectorAll("[data-footer-filter]").forEach(i=>{i.addEventListener("click",s=>{s.preventDefault();let c=i.getAttribute("data-footer-filter");r.setCategoryFilter(c);let h=document.getElementById("product-grid-container");h&&h.scrollIntoView({behavior:"smooth"})})}),e.querySelectorAll("[data-footer-nav]").forEach(i=>{i.addEventListener("click",s=>{s.preventDefault();let c=document.getElementById("routine-quiz-container");c&&c.scrollIntoView({behavior:"smooth"})})}),e.querySelectorAll("[data-page]").forEach(i=>{i.addEventListener("click",s=>{s.preventDefault();let c=i.getAttribute("data-page");r.openPageModal(c)})}),e.querySelector("#footer-admin-btn").addEventListener("click",()=>{r.openAdminHub()})}function D(t,e,r){if(!t)return;t.className="storefront-layer layer-footer",t.setAttribute("data-layer","footer"),t.querySelector("#footer-main-container")||(t.innerHTML=`
      <div id="footer-guide-banner-slot"></div>
      <div id="footer-main-container"></div>
    `);let i=t.querySelector("#footer-guide-banner-slot")||document.getElementById("guide-banner-container")||t,s=t.querySelector("#footer-main-container")||t;z(i,s,r)}function B(t,e,r,i){var a,o;if(!e){t.innerHTML="";return}let s=((a=e.variants)==null?void 0:a[0])||{id:1,title:"Standard",price:e.price},c=1,h=e.image||((o=e.images)==null?void 0:o[0]);function d(){t.innerHTML=`
      <div class="modal-overlay open" id="product-modal-overlay">
        <div class="modal-box">
          <button class="modal-close-btn" id="modal-close-btn" title="Close Modal">\u2715</button>

          <div class="quickview-grid">
            <!-- Gallery -->
            <div class="quickview-gallery">
              <img src="${h}" alt="${e.title}" class="quickview-main-img" id="quickview-active-img" />
              ${e.images&&e.images.length>1?`
                <div class="quickview-thumbnails">
                  ${e.images.map(m=>`
                    <img 
                      src="${m}" 
                      alt="Thumbnail" 
                      class="thumb-img ${m===h?"active":""}" 
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
                <span class="stars">\u2605\u2605\u2605\u2605\u2605</span>
                <span style="font-weight: 700; color: var(--color-text-main);">${e.rating}</span>
                <span class="reviews-num">(${e.reviews_count} Verified Mama Reviews)</span>
              </div>

              <div class="quickview-price-box">
                <span class="quickview-price">${i.formatPrice(s.price||e.price)}</span>
                ${e.compare_at_price?`
                  <span class="quickview-compare-price">${i.formatPrice(s.compare_at_price||e.compare_at_price)}</span>
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
                        class="variant-chip ${m.id===s.id?"selected":""}" 
                        data-variant-id="${m.id}"
                      >
                        ${m.title} \u2014 ${i.formatPrice(m.price)}
                      </button>
                    `).join("")}
                  </div>
                </div>
              `:""}

              <!-- Quantity & Add to Cart -->
              <div style="display: flex; gap: 14px; align-items: center; margin: 24px 0;">
                <div class="cart-qty-stepper" style="padding: 4px;">
                  <button class="qty-btn" id="modal-qty-minus">-</button>
                  <span class="qty-num" id="modal-qty-val">${c}</span>
                  <button class="qty-btn" id="modal-qty-plus">+</button>
                </div>

                <button class="btn-primary" id="modal-add-cart-btn" style="flex-grow: 1;">
                  <span>\u{1F6D2} Add to Cart \u2022 ${i.formatPrice((parseFloat(s.price||e.price)*c).toFixed(2))}</span>
                </button>
              </div>

              <!-- Safety Badges -->
              <div style="background: var(--bg-surface-secondary); padding: 16px; border-radius: var(--radius-md); margin-top: auto;">
                <h5 style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase; color: var(--color-accent); margin-bottom: 8px;">
                  \u{1F33F} Safety Guarantee:
                </h5>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                  ${(e.safety_badges||["Dermatologist Tested","100% Organic","Pediatrician Approved"]).map(m=>`
                    <span style="font-size: 0.8rem; background: #fff; padding: 4px 10px; border-radius: var(--radius-full); font-weight: 600; color: var(--color-text-main); border: 1px solid var(--color-border);">
                      \u2713 ${m}
                    </span>
                  `).join("")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;let p=t.querySelector("#product-modal-overlay"),l=t.querySelector("#modal-close-btn"),n=()=>{i.closeProductModal()};l.addEventListener("click",n),p.addEventListener("click",m=>{m.target===p&&n()}),t.querySelectorAll(".thumb-img").forEach(m=>{m.addEventListener("click",()=>{h=m.getAttribute("data-src"),d()})}),t.querySelectorAll(".variant-chip").forEach(m=>{m.addEventListener("click",()=>{let v=parseInt(m.getAttribute("data-variant-id"));s=e.variants.find(C=>C.id===v)||s,d()})}),t.querySelector("#modal-qty-minus").addEventListener("click",()=>{c>1&&(c--,d())}),t.querySelector("#modal-qty-plus").addEventListener("click",()=>{c++,d()}),t.querySelector("#modal-add-cart-btn").addEventListener("click",()=>{i.addToCart(e,c,s),i.closeProductModal(),i.toggleCart(!0)})}d()}function b(t,e,r){let i=e.isCartOpen,s=e.cart.reduce((u,g)=>u+parseFloat(g.price)*g.quantity,0),c=0;e.appliedPromo==="MOMCARE15"?c=s*.15:e.appliedPromo==="PUREBABY"&&(c=Math.min(10,s));let h=Math.max(0,s-c),d=50,a=Math.min(100,s/d*100),o=Math.max(0,d-s);t.innerHTML=`
    <!-- Overlay -->
    <div class="cart-overlay ${i?"open":""}" id="cart-drawer-overlay"></div>

    <!-- Drawer -->
    <div class="cart-drawer ${i?"open":""}">
      <!-- Header -->
      <div class="cart-header">
        <h3>Shopping Bag (${e.cart.reduce((u,g)=>u+g.quantity,0)})</h3>
        <button class="cart-close-btn" id="cart-close-btn" title="Close Bag">\u2715</button>
      </div>

      <!-- Free Shipping Tracker -->
      <div class="free-shipping-tracker">
        <div class="free-shipping-text">
          ${o===0?"\u{1F389} You have unlocked <strong>FREE Standard Shipping!</strong>":`Add <strong>${r.formatPrice(o.toFixed(2))}</strong> more for <strong>FREE Shipping!</strong>`}
        </div>
        <div class="free-shipping-bar">
          <div class="free-shipping-fill" style="width: ${a}%;"></div>
        </div>
      </div>

      <!-- Cart Items -->
      <div class="cart-items-list">
        ${e.cart.length===0?`
          <div class="cart-empty">
            <div class="cart-empty-icon">\u{1F6CD}\uFE0F</div>
            <h4>Your cart is currently empty</h4>
            <p style="font-size: 0.9rem; margin: 8px 0 20px;">Explore our pure mother and baby formulas to get started.</p>
            <button class="btn-primary" id="cart-start-shopping-btn">Start Shopping</button>
          </div>
        `:e.cart.map(u=>`
          <div class="cart-item" data-item-id="${u.cartItemId}">
            <img src="${u.image}" alt="${u.title}" class="cart-item-img" />
            <div class="cart-item-details">
              <h4 class="cart-item-title">${u.title}</h4>
              ${u.variantTitle?`<div class="cart-item-variant">${u.variantTitle}</div>`:""}
              
              <div class="cart-item-bottom">
                <div class="cart-qty-stepper">
                  <button class="qty-btn" data-cart-minus="${u.cartItemId}">-</button>
                  <span class="qty-num">${u.quantity}</span>
                  <button class="qty-btn" data-cart-plus="${u.cartItemId}">+</button>
                </div>

                <div class="cart-item-price">
                  ${r.formatPrice((parseFloat(u.price)*u.quantity).toFixed(2))}
                </div>
              </div>
            </div>
            <button class="cart-item-remove" data-cart-remove="${u.cartItemId}" style="color: var(--color-text-light); font-size: 0.9rem; margin-left: 6px;" title="Remove">\u2715</button>
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
              ${e.appliedPromo?"Applied \u2713":"Apply"}
            </button>
          </div>

          <!-- Summary -->
          <div class="cart-summary-row">
            <span>Subtotal</span>
            <span>${r.formatPrice(s.toFixed(2))}</span>
          </div>

          ${c>0?`
            <div class="cart-summary-row" style="color: var(--color-accent); font-weight: 700;">
              <span>Promo Discount (${e.appliedPromo})</span>
              <span>-${r.formatPrice(c.toFixed(2))}</span>
            </div>
          `:""}

          <div class="cart-summary-row">
            <span>Estimated Shipping</span>
            <span>${o===0?"FREE":r.formatPrice("4.99")}</span>
          </div>

          <div class="cart-total-row">
            <span>Total</span>
            <span>${r.formatPrice((h+(o===0?0:4.99)).toFixed(2))}</span>
          </div>

          <!-- Checkout Action -->
          <button class="checkout-btn" id="cart-checkout-btn">
            <span>\u{1F512} Secure Checkout on ShopBase</span>
            <span>\u2192</span>
          </button>
          
          <div style="text-align: center; margin-top: 10px; font-size: 0.75rem; color: var(--color-text-muted);">
            Guaranteed safe checkout via <strong>PlusBase / ShopBase</strong>
          </div>
        </div>
      `:""}
    </div>
  `;let p=t.querySelector("#cart-drawer-overlay"),l=t.querySelector("#cart-close-btn"),n=()=>r.toggleCart(!1);p&&p.addEventListener("click",n),l&&l.addEventListener("click",n);let m=t.querySelector("#cart-start-shopping-btn");m&&m.addEventListener("click",()=>{n();let u=document.getElementById("product-grid-container");u&&u.scrollIntoView({behavior:"smooth"})}),t.querySelectorAll("[data-cart-minus]").forEach(u=>{u.addEventListener("click",()=>{let g=u.getAttribute("data-cart-minus");r.updateCartQuantity(g,-1)})}),t.querySelectorAll("[data-cart-plus]").forEach(u=>{u.addEventListener("click",()=>{let g=u.getAttribute("data-cart-plus");r.updateCartQuantity(g,1)})}),t.querySelectorAll("[data-cart-remove]").forEach(u=>{u.addEventListener("click",()=>{let g=u.getAttribute("data-cart-remove");r.removeFromCart(g)})});let v=t.querySelector("#promo-apply-btn"),C=t.querySelector("#promo-code-input");v&&C&&v.addEventListener("click",()=>{let u=C.value.trim().toUpperCase();u==="MOMCARE15"||u==="PUREBABY"?r.applyPromo(u):u===""?r.applyPromo(""):alert("Invalid promo code. Try 'MOMCARE15' for 15% off!")});let M=t.querySelector("#cart-checkout-btn");M&&M.addEventListener("click",()=>{r.proceedToCheckout()})}function k(t,e,r){if(!e){t.innerHTML="";return}let i={"routine-guide":{title:"Mother & Baby Care Routine Guide",subtitle:"Gentle, Biocompatible Daily Rituals for Mama and Child",content:`
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
          <p><strong>Hours:</strong> Monday \u2013 Saturday, 9:00 AM \u2013 6:00 PM EST</p>
        </div>
      `}},s=i[e]||i["routine-guide"];t.innerHTML=`
    <div class="modal-overlay open" id="page-modal-overlay">
      <div class="modal-box" style="max-width: 760px; padding: 48px 40px;">
        <button class="modal-close-btn" id="page-modal-close-btn">\u2715</button>
        
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
  `;let c=t.querySelector("#page-modal-overlay"),h=t.querySelector("#page-modal-close-btn"),d=t.querySelector("#page-modal-done-btn"),a=()=>r.closePageModal();h&&h.addEventListener("click",a),d&&d.addEventListener("click",a),c&&c.addEventListener("click",o=>{o.target===c&&a()})}function P(t,e,r){if(!e.isAdminHubOpen){t.innerHTML="";return}t.innerHTML=`
    <div class="modal-overlay open" id="admin-hub-overlay">
      <div class="modal-box admin-hub-box">
        <button class="modal-close-btn" id="admin-hub-close-btn">\u2715</button>

        <div class="admin-hub-header">
          <div class="admin-hub-icon">\u2699\uFE0F</div>
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
            <h4>\u{1F4E6} Sync Product Catalog</h4>
            <p>Update all 18 store products on ShopBase with Mother & Baby Care titles, rich descriptions, and prices.</p>
            <button class="btn-primary" id="btn-sync-catalog-action" style="padding: 10px 18px; font-size: 0.85rem; width: 100%;">
              <span>\u26A1 Sync 18 Products</span>
            </button>
            <div id="sync-catalog-status" style="font-size: 0.8rem; margin-top: 8px; font-weight: 600;"></div>
          </div>

          <!-- Sync Pages Card -->
          <div class="admin-action-card">
            <h4>\u{1F4C4} Sync Content Pages</h4>
            <p>Publish Mother & Baby Care Routine Guide and Clean Safety Standards to your ShopBase store.</p>
            <button class="btn-secondary" id="btn-sync-pages-action" style="padding: 10px 18px; font-size: 0.85rem; width: 100%;">
              <span>\u{1F4DD} Sync CMS Pages</span>
            </button>
            <div id="sync-pages-status" style="font-size: 0.8rem; margin-top: 8px; font-weight: 600;"></div>
          </div>

          <div class="admin-action-card">
            <h4>\u{1F3E0} Sync Homepage Layout</h4>
            <p>Push the Corencore homepage layout into the active ShopBase theme using your admin API credentials.</p>
            <button class="btn-secondary" id="btn-sync-homepage-action" style="padding: 10px 18px; font-size: 0.85rem; width: 100%;">
              <span>\u{1F30D} Sync Homepage</span>
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
              \u{1F517} View Products in ShopBase \u2197
            </a>
            <a 
              href="https://corencore.onshopbase.com/admin/apps/private/9250" 
              target="_blank" 
              class="btn-secondary" 
              style="padding: 8px 14px; font-size: 0.85rem;"
            >
              \u{1F511} Private App Settings \u2197
            </a>
            <a 
              href="https://corencore.onshopbase.com" 
              target="_blank" 
              class="btn-secondary" 
              style="padding: 8px 14px; font-size: 0.85rem;"
            >
              \u{1F310} ShopBase Online Store \u2197
            </a>
          </div>
        </div>
      </div>
    </div>
  `;let i=t.querySelector("#admin-hub-overlay"),s=t.querySelector("#admin-hub-close-btn"),c=()=>r.closeAdminHub();s&&s.addEventListener("click",c),i&&i.addEventListener("click",n=>{n.target===i&&c()});let h=t.querySelector("#btn-sync-catalog-action"),d=t.querySelector("#sync-catalog-status");h.addEventListener("click",async()=>{h.disabled=!0,h.innerHTML="<span>\u23F3 Syncing to ShopBase...</span>",d.style.color="var(--color-primary)",d.textContent="Updating 18 products via Admin REST API...";try{let m=await(await fetch("/api/sync-catalog",{method:"POST"})).json();m.success?(d.style.color="#2E7D32",d.textContent=`\u2705 ${m.message}`,h.innerHTML="<span>\u2713 Synced Successfully</span>"):(d.style.color="#D32F2F",d.textContent=`\u274C ${m.error||"Sync failed"}`,h.innerHTML="<span>Retry Sync</span>",h.disabled=!1)}catch(n){d.style.color="#D32F2F",d.textContent=`\u274C Network Error: ${n.message}`,h.innerHTML="<span>Retry Sync</span>",h.disabled=!1}});let a=t.querySelector("#btn-sync-pages-action"),o=t.querySelector("#sync-pages-status");a.addEventListener("click",async()=>{a.disabled=!0,a.innerHTML="<span>\u23F3 Syncing Pages...</span>",o.style.color="var(--color-primary)",o.textContent="Publishing Routine Guide & Clean Safety Standards...";try{let m=await(await fetch("/api/sync-pages",{method:"POST"})).json();m.success?(o.style.color="#2E7D32",o.textContent="\u2705 Pages published to ShopBase store!",a.innerHTML="<span>\u2713 Pages Synced</span>"):(o.style.color="#D32F2F",o.textContent=`\u274C ${m.error||"Pages sync failed"}`,a.innerHTML="<span>Retry Sync</span>",a.disabled=!1)}catch(n){o.style.color="#D32F2F",o.textContent=`\u274C Network Error: ${n.message}`,a.innerHTML="<span>Retry Sync</span>",a.disabled=!1}});let p=t.querySelector("#btn-sync-homepage-action"),l=t.querySelector("#sync-homepage-status");p.addEventListener("click",async()=>{p.disabled=!0,p.innerHTML="<span>\u23F3 Syncing Homepage...</span>",l.style.color="var(--color-primary)",l.textContent="Updating homepage sections in ShopBase theme...";try{let m=await(await fetch("/api/sync-homepage",{method:"POST"})).json();m.success?(l.style.color="#2E7D32",l.textContent=`\u2705 ${m.message}`,p.innerHTML="<span>\u2713 Homepage Synced</span>"):(l.style.color="#D32F2F",l.textContent=`\u274C ${m.error||"Homepage sync failed"}`,p.innerHTML="<span>Retry Sync</span>",p.disabled=!1)}catch(n){l.style.color="#D32F2F",l.textContent=`\u274C Network Error: ${n.message}`,p.innerHTML="<span>Retry Sync</span>",p.disabled=!1}})}var O={USD:{symbol:"$",rate:1},EUR:{symbol:"\u20AC",rate:.92},GBP:{symbol:"\xA3",rate:.79},INR:{symbol:"\u20B9",rate:83.5},CAD:{symbol:"CA$",rate:1.36},AUD:{symbol:"AU$",rate:1.52}},x=class{constructor(){this.state={products:j.MOTHER_AND_BABY_PRODUCTS,activeCategory:"all",currency:"USD",searchQuery:"",sortBy:"featured",cart:JSON.parse(localStorage.getItem("corencore_cart")||"[]"),isCartOpen:!1,activeModalProduct:null,activePageKey:null,isAdminHubOpen:!1,appliedPromo:localStorage.getItem("corencore_promo")||null,quizStep:1,quizAnswers:{}},this.dom={},this.actions={setCurrency:this.setCurrency.bind(this),formatPrice:this.formatPrice.bind(this),setCategoryFilter:this.setCategoryFilter.bind(this),searchProducts:this.searchProducts.bind(this),setSortBy:this.setSortBy.bind(this),toggleCart:this.toggleCart.bind(this),addToCart:this.addToCart.bind(this),updateCartQuantity:this.updateCartQuantity.bind(this),removeFromCart:this.removeFromCart.bind(this),applyPromo:this.applyPromo.bind(this),proceedToCheckout:this.proceedToCheckout.bind(this),openProductModal:this.openProductModal.bind(this),closeProductModal:this.closeProductModal.bind(this),openPageModal:this.openPageModal.bind(this),closePageModal:this.closePageModal.bind(this),openAdminHub:this.openAdminHub.bind(this),closeAdminHub:this.closeAdminHub.bind(this)}}init(){console.log("\u{1F338} Core & Core 3-Layer Storefront Loaded on Live ShopBase"),this.bindDom(),this.render()}bindDom(){this.dom={layerHeader:document.getElementById("layer-header"),layerBody:document.getElementById("layer-body"),layerFooter:document.getElementById("layer-footer"),cartDrawer:document.getElementById("cart-drawer-root"),productModal:document.getElementById("product-modal-root"),pagesModal:document.getElementById("pages-modal-root"),adminHub:document.getElementById("admin-hub-root")}}setCurrency(e){this.state.currency=e,this.render()}formatPrice(e){let r=parseFloat(e)||0,i=O[this.state.currency]||O.USD,s=(r*i.rate).toFixed(2);return`${i.symbol}${s}`}setCategoryFilter(e){this.state.activeCategory=e,w(this.dom.layerBody,this.state,this.actions),S(this.dom.layerHeader,this.state,this.actions)}searchProducts(e){this.state.searchQuery=e,w(this.dom.layerBody,this.state,this.actions)}setSortBy(e){this.state.sortBy=e,w(this.dom.layerBody,this.state,this.actions)}toggleCart(e){this.state.isCartOpen=e,b(this.dom.cartDrawer,this.state,this.actions)}addToCart(e,r=1,i=null){var d,a;let s=i||((d=e.variants)==null?void 0:d[0])||{id:1,title:"Standard",price:e.price},c=`${e.id}-${s.id}`,h=this.state.cart.findIndex(o=>o.cartItemId===c);h>-1?this.state.cart[h].quantity+=r:this.state.cart.push({cartItemId:c,id:e.id,variantId:s.id,shopbaseHandle:e.shopbase_handle||e.handle,title:e.title,variantTitle:s.title!=="Standard"&&s.title!=="1 PC"?s.title:"",price:s.price||e.price,image:e.image||((a=e.images)==null?void 0:a[0]),quantity:r}),this.saveCart(),S(this.dom.layerHeader,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions)}updateCartQuantity(e,r){let i=this.state.cart.find(s=>s.cartItemId===e);if(i&&(i.quantity+=r,i.quantity<=0)){this.removeFromCart(e);return}this.saveCart(),S(this.dom.layerHeader,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions)}removeFromCart(e){this.state.cart=this.state.cart.filter(r=>r.cartItemId!==e),this.saveCart(),S(this.dom.layerHeader,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions)}saveCart(){localStorage.setItem("corencore_cart",JSON.stringify(this.state.cart))}applyPromo(e){this.state.appliedPromo=e,localStorage.setItem("corencore_promo",e),b(this.dom.cartDrawer,this.state,this.actions)}proceedToCheckout(){if(!this.state.cart.length)return;let e=this.state.cart[0],r=e.shopbaseHandle||e.handle;r?window.location.href=`/products/${r}`:window.location.href="/collections/all"}openProductModal(e){this.state.activeModalProduct=e,B(this.dom.productModal,e,this.state,this.actions)}closeProductModal(){this.state.activeModalProduct=null,B(this.dom.productModal,null,this.state,this.actions)}openPageModal(e){this.state.activePageKey=e,k(this.dom.pagesModal,e,this.actions)}closePageModal(){this.state.activePageKey=null,k(this.dom.pagesModal,null,this.actions)}openAdminHub(){this.state.isAdminHubOpen=!0,P(this.dom.adminHub,this.state,this.actions)}closeAdminHub(){this.state.isAdminHubOpen=!1,P(this.dom.adminHub,this.state,this.actions)}render(){S(this.dom.layerHeader,this.state,this.actions),w(this.dom.layerBody,this.state,this.actions),D(this.dom.layerFooter,this.state,this.actions),b(this.dom.cartDrawer,this.state,this.actions),B(this.dom.productModal,this.state.activeModalProduct,this.state,this.actions),k(this.dom.pagesModal,this.state.activePageKey,this.actions),P(this.dom.adminHub,this.state,this.actions)}};function W(){let t=window.location.pathname.toLowerCase().trim();return t==="/"||t===""||t==="/index.html"}function y(){if(!W())return;if(!document.getElementById("corencore-hide-default")){let e=document.createElement("style");e.id="corencore-hide-default",e.textContent=`
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
    `,document.head.appendChild(e)}let t=document.getElementById("app");t&&(t.style.display="none"),document.querySelectorAll('footer:not(#layer-footer), header:not(#layer-header), .block-footer, footer[role="contentinfo"]').forEach(e=>{e.closest("#corencore-storefront-root")||(e.style.display="none")})}var N=!1;function f(){if(!W()||(y(),N&&document.getElementById("corencore-storefront-root")))return;if(!document.getElementById("corencore-fonts")){let r=document.createElement("link");r.id="corencore-fonts",r.rel="stylesheet",r.href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..800;1,400..800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap",document.head.appendChild(r)}document.title="Core & Core \u2014 Pure Mother & Baby Care";let t=document.getElementById("corencore-storefront-root");t||(t=document.createElement("div"),t.id="corencore-storefront-root",t.className="storefront-layers-wrapper",t.innerHTML=`
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
    `,document.body.prepend(t)),new x().init(),N=!0,y()}function G(){y(),f(),setTimeout(()=>{y(),f()},300),setTimeout(()=>{y(),f()},800),setTimeout(()=>{y(),f()},2e3),window.addEventListener("popstate",()=>{y(),f()}),window.addEventListener("hashchange",()=>{y(),f()})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",G):G();return ee(ae);})();

})();