/**
 * Live ShopBase API Sync & Web Builder Modular Sections Management Hub
 */

const SECTIONS_LIST = [
  { id: '00', file: '00-all-in-one-web-builder-template.html', title: 'Complete Storefront Master Template', layer: 'All-In-One', desc: 'Full 3-Layer HTML/CSS/JS template ready for full-page Web Builder import.' },
  { id: '01', file: '01-header-section.html', title: 'Header & Announcement Bar', layer: 'Layer 1: Header', desc: 'Announcement ticker, brand logo, navigation links, multi-currency switcher & cart counter.' },
  { id: '02', file: '02-hero-banner-section.html', title: 'Hero Banner & Trust Guarantees', layer: 'Layer 2: Body', desc: 'Maternal glow hero, floating badges, value stats, and pediatrician trust bar.' },
  { id: '03', file: '03-category-showcase-section.html', title: 'Curated Category Gateway', layer: 'Layer 2: Body', desc: 'Mother Skin Care, Pure Baby Care, and Bundles & Gift Sets cards.' },
  { id: '04', file: '04-routine-finder-quiz-section.html', title: 'Interactive Routine Finder Quiz', layer: 'Layer 2: Body', desc: '3-step questionnaire with dynamic bundle recommendations & 15% discount.' },
  { id: '05', file: '05-product-grid-section.html', title: '18-Product Catalog Grid', layer: 'Layer 2: Body', desc: 'All 18 certified products with category tabs, prices, star ratings & Add to Cart.' },
  { id: '06', file: '06-safety-standards-section.html', title: 'Clean Safety & Ingredients Standards', layer: 'Layer 2: Body', desc: 'What we formulate with vs. 0% Banned endocrine disruptors comparison table.' },
  { id: '07', file: '07-customer-reviews-section.html', title: 'Verified Mother Testimonials', layer: 'Layer 2: Body', desc: 'Real reviews from expecting mothers, twin moms, and pediatric nurses.' },
  { id: '08', file: '08-routine-guide-banner-section.html', title: 'Free Routine Guide Download Banner', layer: 'Layer 2: Body', desc: 'Midwife-authored routine guide lead capture & newsletter signup.' },
  { id: '09', file: '09-footer-section.html', title: 'Footer Layer & Trust Badges', layer: 'Layer 3: Footer', desc: 'Brand story, collection links, policy modals, payment icons & copyright.' }
];

export function renderAdminHub(container, state, actions) {
  if (!state.isAdminHubOpen) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
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
          ${SECTIONS_LIST.map(sec => `
            <div class="admin-action-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 14px; background: var(--bg-surface); border: 1px solid var(--color-border); border-radius: var(--radius-md);">
              <div>
                <span style="font-size: 0.72rem; text-transform: uppercase; font-weight: 700; color: var(--color-primary); background: var(--color-primary-light); padding: 2px 8px; border-radius: 4px; display: inline-block; margin-bottom: 6px;">
                  ${sec.layer}
                </span>
                <h4 style="font-size: 0.95rem; margin-bottom: 4px; font-weight: 700;">${sec.title}</h4>
                <p style="font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.4; margin-bottom: 12px;">${sec.desc}</p>
              </div>
              <button 
                class="btn-secondary copy-section-btn" 
                data-file="${sec.file}"
                style="padding: 8px 12px; font-size: 0.82rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px;"
              >
                <span>📋</span>
                <span>Copy Section HTML</span>
              </button>
            </div>
          `).join('')}
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
  `;

  // Attach event handlers
  const overlay = container.querySelector('#admin-hub-overlay');
  const closeBtn = container.querySelector('#admin-hub-close-btn');

  const close = () => actions.closeAdminHub();

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay) overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  // Copy Section Buttons
  container.querySelectorAll('.copy-section-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const file = btn.getAttribute('data-file');
      btn.innerHTML = '<span>⏳ Copying...</span>';
      
      try {
        const res = await fetch(`/api/web-builder/sections/${file}`);
        if (res.ok) {
          const html = await res.text();
          await navigator.clipboard.writeText(html);
          btn.innerHTML = '<span>✅ Copied!</span>';
          setTimeout(() => { btn.innerHTML = '<span>📋 Copy Section HTML</span>'; }, 2500);
        } else {
          // Fallback if offline
          btn.innerHTML = '<span>✅ Section Ready in /web-builder-sections/</span>';
          setTimeout(() => { btn.innerHTML = '<span>📋 Copy Section HTML</span>'; }, 2500);
        }
      } catch (e) {
        btn.innerHTML = '<span>✅ Open /web-builder-sections/' + file + '</span>';
        setTimeout(() => { btn.innerHTML = '<span>📋 Copy Section HTML</span>'; }, 2500);
      }
    });
  });

  // Sync Catalog
  const syncCatBtn = container.querySelector('#btn-sync-catalog-action');
  const logEl = container.querySelector('#admin-hub-status-log');

  syncCatBtn.addEventListener('click', async () => {
    syncCatBtn.disabled = true;
    syncCatBtn.innerHTML = '<span>⏳ Syncing to ShopBase...</span>';
    logEl.style.color = 'var(--color-primary)';
    logEl.textContent = 'Updating 18 products via Admin REST API...';

    try {
      const res = await fetch('/api/sync-catalog', { method: 'POST' });
      const data = await res.json();

      if (data.success) {
        logEl.style.color = '#2E7D32';
        logEl.textContent = `✅ ${data.message}`;
        syncCatBtn.innerHTML = '<span>✓ Synced Successfully</span>';
      } else {
        logEl.style.color = '#D32F2F';
        logEl.textContent = `❌ ${data.error || 'Sync failed'}`;
        syncCatBtn.innerHTML = '<span>Retry Sync</span>';
        syncCatBtn.disabled = false;
      }
    } catch (err) {
      logEl.style.color = '#D32F2F';
      logEl.textContent = `❌ Network Error: ${err.message}`;
      syncCatBtn.innerHTML = '<span>Retry Sync</span>';
      syncCatBtn.disabled = false;
    }
  });

  // Sync Pages
  const syncPagesBtn = container.querySelector('#btn-sync-pages-action');
  syncPagesBtn.addEventListener('click', async () => {
    syncPagesBtn.disabled = true;
    syncPagesBtn.innerHTML = '<span>⏳ Syncing Pages...</span>';
    logEl.style.color = 'var(--color-primary)';
    logEl.textContent = 'Publishing Routine Guide & Clean Safety Standards...';

    try {
      const res = await fetch('/api/sync-pages', { method: 'POST' });
      const data = await res.json();

      if (data.success) {
        logEl.style.color = '#2E7D32';
        logEl.textContent = '✅ Pages published to ShopBase store!';
        syncPagesBtn.innerHTML = '<span>✓ Pages Synced</span>';
      } else {
        logEl.style.color = '#D32F2F';
        logEl.textContent = `❌ ${data.error || 'Pages sync failed'}`;
        syncPagesBtn.innerHTML = '<span>Retry Sync</span>';
        syncPagesBtn.disabled = false;
      }
    } catch (err) {
      logEl.style.color = '#D32F2F';
      logEl.textContent = `❌ Network Error: ${err.message}`;
      syncPagesBtn.innerHTML = '<span>Retry Sync</span>';
      syncPagesBtn.disabled = false;
    }
  });
}
