/**
 * Live ShopBase API Sync & Storefront Management Hub Modal
 */

export function renderAdminHub(container, state, actions) {
  if (!state.isAdminHubOpen) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = `
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
  `;

  // Attach event handlers
  const overlay = container.querySelector('#admin-hub-overlay');
  const closeBtn = container.querySelector('#admin-hub-close-btn');

  const close = () => actions.closeAdminHub();

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay) overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });

  // Trigger sync catalog
  const syncCatBtn = container.querySelector('#btn-sync-catalog-action');
  const catStatus = container.querySelector('#sync-catalog-status');

  syncCatBtn.addEventListener('click', async () => {
    syncCatBtn.disabled = true;
    syncCatBtn.innerHTML = '<span>⏳ Syncing to ShopBase...</span>';
    catStatus.style.color = 'var(--color-primary)';
    catStatus.textContent = 'Updating 18 products via Admin REST API...';

    try {
      const res = await fetch('/api/sync-catalog', { method: 'POST' });
      const data = await res.json();

      if (data.success) {
        catStatus.style.color = '#2E7D32';
        catStatus.textContent = `✅ ${data.message}`;
        syncCatBtn.innerHTML = '<span>✓ Synced Successfully</span>';
      } else {
        catStatus.style.color = '#D32F2F';
        catStatus.textContent = `❌ ${data.error || 'Sync failed'}`;
        syncCatBtn.innerHTML = '<span>Retry Sync</span>';
        syncCatBtn.disabled = false;
      }
    } catch (err) {
      catStatus.style.color = '#D32F2F';
      catStatus.textContent = `❌ Network Error: ${err.message}`;
      syncCatBtn.innerHTML = '<span>Retry Sync</span>';
      syncCatBtn.disabled = false;
    }
  });

  // Trigger sync pages
  const syncPagesBtn = container.querySelector('#btn-sync-pages-action');
  const pagesStatus = container.querySelector('#sync-pages-status');

  syncPagesBtn.addEventListener('click', async () => {
    syncPagesBtn.disabled = true;
    syncPagesBtn.innerHTML = '<span>⏳ Syncing Pages...</span>';
    pagesStatus.style.color = 'var(--color-primary)';
    pagesStatus.textContent = 'Publishing Routine Guide & Clean Safety Standards...';

    try {
      const res = await fetch('/api/sync-pages', { method: 'POST' });
      const data = await res.json();

      if (data.success) {
        pagesStatus.style.color = '#2E7D32';
        pagesStatus.textContent = '✅ Pages published to ShopBase store!';
        syncPagesBtn.innerHTML = '<span>✓ Pages Synced</span>';
      } else {
        pagesStatus.style.color = '#D32F2F';
        pagesStatus.textContent = `❌ ${data.error || 'Pages sync failed'}`;
        syncPagesBtn.innerHTML = '<span>Retry Sync</span>';
        syncPagesBtn.disabled = false;
      }
    } catch (err) {
      pagesStatus.style.color = '#D32F2F';
      pagesStatus.textContent = `❌ Network Error: ${err.message}`;
      syncPagesBtn.innerHTML = '<span>Retry Sync</span>';
      syncPagesBtn.disabled = false;
    }
  });

  // Trigger sync homepage layout
  const syncHomepageBtn = container.querySelector('#btn-sync-homepage-action');
  const homepageStatus = container.querySelector('#sync-homepage-status');

  syncHomepageBtn.addEventListener('click', async () => {
    syncHomepageBtn.disabled = true;
    syncHomepageBtn.innerHTML = '<span>⏳ Syncing Homepage...</span>';
    homepageStatus.style.color = 'var(--color-primary)';
    homepageStatus.textContent = 'Updating homepage sections in ShopBase theme...';

    try {
      const res = await fetch('/api/sync-homepage', { method: 'POST' });
      const data = await res.json();

      if (data.success) {
        homepageStatus.style.color = '#2E7D32';
        homepageStatus.textContent = `✅ ${data.message}`;
        syncHomepageBtn.innerHTML = '<span>✓ Homepage Synced</span>';
      } else {
        homepageStatus.style.color = '#D32F2F';
        homepageStatus.textContent = `❌ ${data.error || 'Homepage sync failed'}`;
        syncHomepageBtn.innerHTML = '<span>Retry Sync</span>';
        syncHomepageBtn.disabled = false;
      }
    } catch (err) {
      homepageStatus.style.color = '#D32F2F';
      homepageStatus.textContent = `❌ Network Error: ${err.message}`;
      syncHomepageBtn.innerHTML = '<span>Retry Sync</span>';
      syncHomepageBtn.disabled = false;
    }
  });
}
