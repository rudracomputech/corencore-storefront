/**
 * Category Showcase Layer
 */

export function renderCategories(container, actions) {
  const categories = [
    {
      id: 'mother-care',
      name: 'Mother Skin Care',
      tagline: 'Prenatal Elasticity & Postpartum Recovery',
      count: '7 Botanical Formulas',
      image: 'https://images.unsplash.com/photo-1608248597359-0098f986422d?auto=format&fit=crop&w=900&q=80',
      actionText: 'Explore Mother Care →'
    },
    {
      id: 'baby-care',
      name: 'Pure Baby Care',
      tagline: 'Tear-Free, Eczema-Friendly & Soothing',
      count: '7 Gentle Essentials',
      image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80',
      actionText: 'Explore Baby Care →'
    },
    {
      id: 'bundles',
      name: 'Bundles & Gift Sets',
      tagline: 'Curated Kits with up to 25% Savings',
      count: '4 Complete Ritual Sets',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=80',
      actionText: 'Shop Value Bundles →'
    }
  ];

  container.innerHTML = `
    <div class="categories-section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Pure Collections</span>
          <h2 class="section-title">Formulated for Every Stage of Motherhood</h2>
          <p class="section-subtitle">
            From the first flutter to newborn cuddles and beyond, discover clean formulas crafted with dermatological precision.
          </p>
        </div>

        <div class="categories-grid">
          ${categories.map(cat => `
            <div class="category-card" data-category="${cat.id}">
              <img src="${cat.image}" alt="${cat.name}" class="category-img" loading="lazy" />
              <div class="category-overlay">
                <span class="category-count">${cat.count}</span>
                <h3 class="category-name">${cat.name}</h3>
                <p style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 12px;">${cat.tagline}</p>
                <div class="category-action">${cat.actionText}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  // Attach card click handlers
  container.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      const categoryId = card.getAttribute('data-category');
      actions.setCategoryFilter(categoryId);
      const grid = document.getElementById('product-grid-container');
      if (grid) grid.scrollIntoView({ behavior: 'smooth' });
    });
  });
}
