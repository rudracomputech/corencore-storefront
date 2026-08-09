/**
 * LAYER 2: Body Layer
 * Contains the primary storefront experiences: Hero Banner, Trust Guarantees, Category Gateway,
 * Interactive Routine Finder Quiz, Curated Product Grid, Clean Safety Standards, Reviews, and Routine Guide Banner.
 */

import { renderHero } from '../components/Hero.js';
import { renderCategories } from '../components/Categories.js';
import { renderRoutineQuiz } from '../components/RoutineQuiz.js';
import { renderProductGrid } from '../components/ProductGrid.js';
import { renderSafetyStandards } from '../components/SafetyStandards.js';
import { renderReviews } from '../components/Reviews.js';

export function renderBodyLayer(container, state, actions) {
  if (!container) return;
  container.className = 'storefront-layer layer-body';
  container.setAttribute('data-layer', 'body');

  // If container doesn't have the section slots yet, initialize them
  if (!container.querySelector('#hero-container')) {
    container.innerHTML = `
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
    `;
  }

  const heroContainer = container.querySelector('#hero-container');
  const trustBarContainer = container.querySelector('#trust-bar-container');
  const categoriesContainer = container.querySelector('#categories-container');
  const routineQuizContainer = container.querySelector('#routine-quiz-container');
  const productGridContainer = container.querySelector('#product-grid-container');
  const safetyStandardsContainer = container.querySelector('#safety-standards-container');
  const reviewsContainer = container.querySelector('#reviews-container');

  if (heroContainer && trustBarContainer) {
    renderHero(heroContainer, trustBarContainer, actions);
  }
  if (categoriesContainer) {
    renderCategories(categoriesContainer, actions);
  }
  if (routineQuizContainer) {
    renderRoutineQuiz(routineQuizContainer, state, actions);
  }
  if (productGridContainer) {
    renderProductGrid(productGridContainer, state, actions);
  }
  if (safetyStandardsContainer) {
    renderSafetyStandards(safetyStandardsContainer);
  }
  if (reviewsContainer) {
    renderReviews(reviewsContainer);
  }
}
