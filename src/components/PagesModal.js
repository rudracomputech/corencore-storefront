/**
 * Content Pages Modal Component (Routine Guide, Safety, About, FAQs, Contact)
 */

export function renderPagesModal(container, pageKey, actions) {
  if (!pageKey) {
    container.innerHTML = '';
    return;
  }

  const pagesData = {
    'routine-guide': {
      title: 'Mother & Baby Care Routine Guide',
      subtitle: 'Gentle, Biocompatible Daily Rituals for Mama and Child',
      content: `
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
      `
    },
    'safety-standards': {
      title: 'Our Clean Formulation Safety Standards',
      subtitle: 'Zero Compromise on Maternal and Infant Biocompatibility',
      content: `
        <h3>Third-Party Tested & Certified Pure</h3>
        <p>Every formula developed under the Core & Core name undergoes stringent testing protocols:</p>
        <ul>
          <li><strong>Pediatrician & Dermatologist Verified:</strong> 100% hypoallergenic, non-irritating patch testing on sensitive skin panels.</li>
          <li><strong>1,600+ Banned Substances:</strong> We exceed standard US FDA cosmetic regulations by adopting European Union and Japanese safety standards.</li>
          <li><strong>100% Lanolin & Cruelty Free:</strong> We use plant-based waxes, botanical squalane, and unrefined raw seed butters.</li>
          <li><strong>Sustainable Bamboo & Glass Packaging:</strong> Biodegradable wipes and recyclable amber glass bottles to protect active botanicals from UV degradation.</li>
        </ul>
      `
    },
    'about-us': {
      title: 'About Core & Core Pure Care',
      subtitle: 'Founded by Mothers, Formulated by Pediatric Dermatologists',
      content: `
        <p>Core & Core was born out of a simple need: to provide expecting mothers and newborn babies with completely pure, uncompromised skincare that actually delivers results without exposing delicate systems to synthetic fragrances or hormone-disrupting chemicals.</p>
        <p>Operating through our official ShopBase storefront at <strong>corencore.onshopbase.com</strong>, we proudly fulfill thousands of orders each month to parents who value clean living, organic efficacy, and the peace of mind that comes with certified safe ingredients.</p>
      `
    },
    'faqs': {
      title: 'Frequently Asked Questions & Policies',
      subtitle: 'Everything You Need to Know About Shipping, Returns & Usage',
      content: `
        <h3>Is the Nipple Salve safe for my baby to ingest while breastfeeding?</h3>
        <p>Yes, absolutely! Our formula is 100% food-grade organic, lanolin-free, and contains zero synthetic preservatives. You do not need to wash or wipe it off before nursing your baby.</p>

        <h3>Are your products safe for the first trimester?</h3>
        <p>Yes. All Core & Core formulas are crafted without retinol, salicylic acid, artificial dyes, phthalates, or harmful essential oils, making them safe from day one of pregnancy.</p>

        <h3>What is your shipping policy?</h3>
        <p>We offer <strong>FREE Standard Shipping on all orders over $50</strong>. Orders are processed within 24 hours and delivered in 3-5 business days with full online tracking.</p>

        <h3>What is your 30-Day Mama Guarantee?</h3>
        <p>If you or your baby are not completely in love with any product, simply contact our support team within 30 days for a prompt, hassle-free replacement or full refund.</p>
      `
    },
    'contact-us': {
      title: 'Contact Customer Care',
      subtitle: 'Our Maternal Care Team is Here to Support You',
      content: `
        <p>Have questions about a product, routine recommendations, or your ShopBase order?</p>
        <div style="background: var(--bg-surface-secondary); padding: 20px; border-radius: var(--radius-md); margin: 20px 0;">
          <p><strong>Email:</strong> support@corencore.com</p>
          <p><strong>Store Domain:</strong> corencore.onshopbase.com</p>
          <p><strong>Hours:</strong> Monday – Saturday, 9:00 AM – 6:00 PM EST</p>
        </div>
      `
    }
  };

  const page = pagesData[pageKey] || pagesData['routine-guide'];

  container.innerHTML = `
    <div class="modal-overlay open" id="page-modal-overlay">
      <div class="modal-box" style="max-width: 760px; padding: 48px 40px;">
        <button class="modal-close-btn" id="page-modal-close-btn">✕</button>
        
        <span class="product-category-tag" style="color: var(--color-accent);">Core & Core Guide</span>
        <h2 style="font-family: var(--font-heading); font-size: 2.2rem; margin: 8px 0 6px; line-height: 1.25;">
          ${page.title}
        </h2>
        <p style="color: var(--color-text-muted); font-size: 1rem; margin-bottom: 28px;">
          ${page.subtitle}
        </p>

        <div style="color: var(--color-text-main); font-size: 0.95rem; line-height: 1.7;">
          ${page.content}
        </div>

        <div style="margin-top: 36px; padding-top: 20px; border-top: 1px solid var(--color-border); display: flex; justify-content: flex-end;">
          <button class="btn-primary" id="page-modal-done-btn">Back to Store</button>
        </div>
      </div>
    </div>
  `;

  const overlay = container.querySelector('#page-modal-overlay');
  const closeBtn = container.querySelector('#page-modal-close-btn');
  const doneBtn = container.querySelector('#page-modal-done-btn');

  const close = () => actions.closePageModal();

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (doneBtn) doneBtn.addEventListener('click', close);
  if (overlay) overlay.addEventListener('click', (e) => {
    if (e.target === overlay) close();
  });
}
