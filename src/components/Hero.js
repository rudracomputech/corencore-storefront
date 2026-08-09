/**
 * Hero Section & Trust Bar Component
 */

export function renderHero(heroContainer, trustContainer, actions) {
  heroContainer.innerHTML = `
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
  `;

  trustContainer.innerHTML = `
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
  `;

  // Attach button events
  heroContainer.querySelector('#hero-shop-mother-btn').addEventListener('click', () => {
    actions.setCategoryFilter('mother-care');
    const grid = document.getElementById('product-grid-container');
    if (grid) grid.scrollIntoView({ behavior: 'smooth' });
  });

  heroContainer.querySelector('#hero-shop-baby-btn').addEventListener('click', () => {
    actions.setCategoryFilter('baby-care');
    const grid = document.getElementById('product-grid-container');
    if (grid) grid.scrollIntoView({ behavior: 'smooth' });
  });

  heroContainer.querySelector('#hero-quiz-btn').addEventListener('click', () => {
    const quiz = document.getElementById('routine-quiz-container');
    if (quiz) quiz.scrollIntoView({ behavior: 'smooth' });
  });
}
