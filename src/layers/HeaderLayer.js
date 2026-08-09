/**
 * LAYER 1: Header Layer
 * Contains Announcement Bar, Brand Identity, Navigation, Currency Converter, Search, Cart Trigger, and Admin Hub Button
 */

import { renderHeader } from '../components/Header.js';

export function renderHeaderLayer(container, state, actions) {
  if (!container) return;
  container.className = 'storefront-layer layer-header';
  container.setAttribute('data-layer', 'header');
  renderHeader(container, state, actions);
}
