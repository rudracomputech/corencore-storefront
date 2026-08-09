/**
 * Guide Banner & Footer Component
 */

export function renderFooter(guideContainer, footerContainer, actions) {
  guideContainer.innerHTML = `
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
  `;

  footerContainer.innerHTML = `
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
  `;

  // Newsletter submit
  guideContainer.querySelector('#guide-newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("🎉 Thank you! Your free Mother & Baby Care Routine Guide has been sent to your email.");
    e.target.reset();
  });

  // Footer navigation
  footerContainer.querySelectorAll('[data-footer-filter]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const filter = link.getAttribute('data-footer-filter');
      actions.setCategoryFilter(filter);
      const grid = document.getElementById('product-grid-container');
      if (grid) grid.scrollIntoView({ behavior: 'smooth' });
    });
  });

  footerContainer.querySelectorAll('[data-footer-nav]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const quiz = document.getElementById('routine-quiz-container');
      if (quiz) quiz.scrollIntoView({ behavior: 'smooth' });
    });
  });

  footerContainer.querySelectorAll('[data-page]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const pageKey = link.getAttribute('data-page');
      actions.openPageModal(pageKey);
    });
  });

  footerContainer.querySelector('#footer-admin-btn').addEventListener('click', () => {
    actions.openAdminHub();
  });
}
