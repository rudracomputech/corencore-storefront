/**
 * Interactive Mother & Baby Routine Quiz / Finder Component
 */

export function renderRoutineQuiz(container, state, actions) {
  let currentStep = 1;
  let answers = {
    stage: 'pregnant',
    concern: 'stretch-marks',
    preference: 'butter'
  };

  const stepsData = [
    {
      step: 1,
      title: "Who are you shopping for today?",
      subtitle: "Select the stage to help us personalize safe, biocompatible ingredients.",
      options: [
        { key: 'stage', value: 'pregnant', title: 'Expecting Mother', desc: 'Trimesters 1, 2, or 3 (Prenatal Care)', icon: '🤰' },
        { key: 'stage', value: 'postpartum', title: 'Postpartum Mother', desc: '4th Trimester recovery & breastfeeding', icon: '🤱' },
        { key: 'stage', value: 'newborn', title: 'Newborn Infant', desc: '0 to 6 months delicate skin', icon: '👶' },
        { key: 'stage', value: 'toddler', title: 'Baby & Toddler', desc: '6 months+ active bath & play care', icon: '🍼' }
      ]
    },
    {
      step: 2,
      title: "What is your main skin or care focus?",
      subtitle: "Our certified herbal formulas target specific developmental milestones.",
      options: [
        { key: 'concern', value: 'stretch-marks', title: 'Stretch Marks & Deep Elasticity', desc: 'Soothe tight, itchy stretching skin', icon: '✨' },
        { key: 'concern', value: 'nursing-comfort', title: 'Nursing & Nipple Healing', desc: '100% Ingestion-safe, lanolin-free balm', icon: '💖' },
        { key: 'concern', value: 'baby-eczema', title: 'Baby Dryness & Eczema', desc: 'Tear-free colloidal oat barrier soothing', icon: '🛁' },
        { key: 'concern', value: 'sleep-calm', title: 'Bedtime Sleep & Colic Relief', desc: 'Lavender calming massage and sleep mist', icon: '🌙' }
      ]
    },
    {
      step: 3,
      title: "What texture and finish do you prefer?",
      subtitle: "All products are 100% non-sticky and fast-absorbing.",
      options: [
        { key: 'preference', value: 'butter', title: 'Rich Whipped Body Butters', desc: 'Deep 24hr moisture lock', icon: '🧈' },
        { key: 'preference', value: 'oil', title: 'Silky Cold-Pressed Oils', desc: 'Fast penetration with radiant glow', icon: '💧' },
        { key: 'preference', value: 'wash-lotion', title: 'Gentle Foams & Daily Lotions', desc: 'Lightweight everyday hydration', icon: '🧴' },
        { key: 'preference', value: 'full-bundle', title: 'Complete Complete Care Routine', desc: 'Head-to-toe bundle with 15% savings', icon: '🎁' }
      ]
    }
  ];

  function getRecommendations() {
    if (answers.stage === 'pregnant' || answers.concern === 'stretch-marks') {
      return {
        title: "The Ultimate Prenatal Elasticity Routine",
        desc: "Designed to maximize skin flexibility and lock in cellular moisture from trimester 1 through postpartum.",
        products: [
          state.products.find(p => p.id === 1000000672062239) || state.products[0],
          state.products.find(p => p.id === 1000000671550961) || state.products[1],
          state.products.find(p => p.id === 1000000672062237) || state.products[5]
        ]
      };
    } else if (answers.stage === 'postpartum' || answers.concern === 'nursing-comfort') {
      return {
        title: "The Fourth Trimester Mama Recovery Routine",
        desc: "Hospital-grade clean soothing formulas for nursing nipples, restorative firming, and perineal recovery.",
        products: [
          state.products.find(p => p.id === 1000000672062238) || state.products[2],
          state.products.find(p => p.id === 1000000672062247) || state.products[3],
          state.products.find(p => p.id === 1000000672062232) || state.products[17]
        ]
      };
    } else if (answers.concern === 'sleep-calm') {
      return {
        title: "The Blissful Baby Sleep & Calming Ritual",
        desc: "Pediatrician-tested nighttime ritual with organic French Lavender to encourage deep, tranquil infant sleep.",
        products: [
          state.products.find(p => p.id === 1000000672062240) || state.products[7],
          state.products.find(p => p.id === 1000000672062248) || state.products[8],
          state.products.find(p => p.id === 1000000672062243) || state.products[13]
        ]
      };
    } else {
      return {
        title: "The Pure Newborn Head-to-Toe Starter Routine",
        desc: "Ultra-mild, tear-free essentials to protect baby's delicate microbiome and natural moisture barrier.",
        products: [
          state.products.find(p => p.id === 1000000672062240) || state.products[7],
          state.products.find(p => p.id === 1000000672062246) || state.products[9],
          state.products.find(p => p.id === 1000000672062245) || state.products[11]
        ]
      };
    }
  }

  function updateView() {
    if (currentStep <= 3) {
      const stepData = stepsData[currentStep - 1];
      const progressPercent = (currentStep / 3) * 100;

      container.innerHTML = `
        <div class="container">
          <div class="quiz-section">
            <div class="quiz-card">
              <div class="quiz-progress-bar">
                <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
              </div>

              <div class="quiz-header">
                <span class="quiz-step-badge">Step ${currentStep} of 3</span>
                <h3 class="quiz-question">${stepData.title}</h3>
                <p style="color: var(--color-text-muted); font-size: 0.95rem;">${stepData.subtitle}</p>
              </div>

              <div class="quiz-options-grid">
                ${stepData.options.map(opt => {
                  const isSelected = answers[opt.key] === opt.value;
                  return `
                    <div class="quiz-option ${isSelected ? 'selected' : ''}" data-key="${opt.key}" data-value="${opt.value}">
                      <span class="option-icon">${opt.icon}</span>
                      <div>
                        <span class="option-title">${opt.title}</span>
                        <span class="option-desc">${opt.desc}</span>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>

              <div class="quiz-navigation">
                ${currentStep > 1 ? `<button class="btn-secondary" id="quiz-prev-btn">← Back</button>` : `<div></div>`}
                <button class="btn-primary" id="quiz-next-btn">
                  ${currentStep === 3 ? 'Get My Personalized Routine ✨' : 'Continue →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      `;

      // Option click events
      container.querySelectorAll('.quiz-option').forEach(opt => {
        opt.addEventListener('click', () => {
          const key = opt.getAttribute('data-key');
          const value = opt.getAttribute('data-value');
          answers[key] = value;
          updateView();
        });
      });

      const nextBtn = container.querySelector('#quiz-next-btn');
      nextBtn.addEventListener('click', () => {
        currentStep++;
        updateView();
      });

      const prevBtn = container.querySelector('#quiz-prev-btn');
      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          currentStep--;
          updateView();
        });
      }
    } else {
      // Results View
      const recommendation = getRecommendations();
      const rawTotal = recommendation.products.reduce((sum, p) => sum + parseFloat(p?.price || 0), 0);
      const discountedTotal = (rawTotal * 0.85).toFixed(2);

      container.innerHTML = `
        <div class="container">
          <div class="quiz-section">
            <div class="quiz-card quiz-result-box">
              <span class="quiz-result-badge">🎯 Personalized Recommendation</span>
              <h3 class="quiz-result-title">${recommendation.title}</h3>
              <p style="color: var(--color-text-muted); max-width: 600px; margin: 0 auto;">${recommendation.desc}</p>

              <div class="quiz-result-products">
                ${recommendation.products.map((p, idx) => `
                  <div class="routine-product-card">
                    <img src="${p.image}" alt="${p.title}" class="routine-product-img" />
                    <span class="routine-step-num">Step 0${idx + 1}</span>
                    <h5 class="routine-prod-name">${p.title}</h5>
                    <div style="font-weight: 700; color: var(--color-text-main); font-size: 1rem;">
                      ${actions.formatPrice(p.price)}
                    </div>
                  </div>
                `).join('')}
              </div>

              <div class="quiz-bundle-action">
                <div class="bundle-pricing">
                  <span style="font-size: 0.85rem; color: var(--color-text-muted); display: block; font-weight: 600;">Personalized Routine Bundle (3 Items):</span>
                  <span class="bundle-price-now">${actions.formatPrice(discountedTotal)}</span>
                  <span class="bundle-price-was">${actions.formatPrice(rawTotal)}</span>
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
      `;

      container.querySelector('#quiz-retake-btn').addEventListener('click', () => {
        currentStep = 1;
        updateView();
      });

      container.querySelector('#quiz-add-bundle-btn').addEventListener('click', () => {
        recommendation.products.forEach(p => {
          actions.addToCart(p, 1);
        });
        actions.toggleCart(true);
      });
    }
  }

  updateView();
}
