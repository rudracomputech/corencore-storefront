/**
 * Clean Standards & Ingredients Transparency Layer
 */

export function renderSafetyStandards(container) {
  container.innerHTML = `
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
  `;
}
