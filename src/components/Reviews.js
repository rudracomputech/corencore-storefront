/**
 * Customer Reviews & Social Proof Component
 */

export function renderReviews(container) {
  const reviews = [
    {
      author: "Elena Rostova",
      stage: "Mom of 2 (Baby 4mo)",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      title: "Saved my belly during pregnancy — zero stretch marks!",
      text: "I used the Belly Butter morning and night and the Elasticity Oil right after the shower. I am now 4 months postpartum with twin girls and my skin bounced back amazingly with zero marks!",
      product: "Nourishing Belly Butter & Elasticity Oil"
    },
    {
      author: "Sarah Jenkins, RN",
      stage: "Pediatric Nurse & First-Time Mom",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      title: "The only wash that cleared my son's cradle cap & eczema",
      text: "As a pediatric nurse, I am extremely picky with baby products. The 2-in-1 Baby Wash and Scalp Serum are game changers. Gentle, tear-free, and leaves his curls so soft without any scent chemicals.",
      product: "Ultra-Gentle 2-in-1 Baby Wash"
    },
    {
      author: "Priya Sharma",
      stage: "New Mom (Baby 6w)",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      title: "Lanolin-free nipple salve is a lifesaver for breastfeeding",
      text: "Every other cream was sticky and made nursing painful. This herbal salve melts like butter, soothes instant cracking, and I love that I don't have to wipe it off before latching baby.",
      product: "Organic Nipple & Nursing Salve"
    }
  ];

  container.innerHTML = `
    <div class="reviews-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Real Mama Experiences</span>
          <h2 class="section-title">Loved by Over 25,000 Mothers & Newborns</h2>
          <p class="section-subtitle">
            Read how our clean botanical formulations bring comfort and peace of mind to families worldwide.
          </p>
        </div>

        <div class="reviews-grid">
          ${reviews.map(rev => `
            <div class="review-card">
              <div class="review-stars">★★★★★</div>
              <h4 class="review-title">"${rev.title}"</h4>
              <p class="review-body">${rev.text}</p>
              
              <div class="review-author">
                <img src="${rev.avatar}" alt="${rev.author}" class="author-avatar" />
                <div>
                  <div class="author-name">${rev.author}</div>
                  <div class="author-meta">
                    <span>✓ Verified Buyer</span> • <span>${rev.stage}</span>
                  </div>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}
