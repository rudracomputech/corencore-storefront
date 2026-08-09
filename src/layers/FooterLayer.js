/**
 * LAYER 3: Footer Layer
 * Contains the Routine Guide Download Banner, Brand Story, Collection Links, Policy Pages,
 * Live ShopBase Sync Management, and Copyright.
 */

import { renderFooter } from '../components/Footer.js';

export function renderFooterLayer(container, state, actions) {
  if (!container) return;
  container.className = 'storefront-layer layer-footer';
  container.setAttribute('data-layer', 'footer');

  if (!container.querySelector('#footer-main-container')) {
    container.innerHTML = `
      <div id="footer-guide-banner-slot"></div>
      <div id="footer-main-container"></div>
    `;
  }

  const guideSlot = container.querySelector('#footer-guide-banner-slot') || document.getElementById('guide-banner-container') || container;
  const footerSlot = container.querySelector('#footer-main-container') || container;

  renderFooter(guideSlot, footerSlot, actions);
}
