const express = require('express');
const cors = require('cors');
require('dotenv').config();
const {
  getShopInfo,
  getProducts,
  updateProduct,
  syncMotherAndBabyCatalog,
  getPages,
  createOrUpdatePage,
  syncHomepageTheme,
  buildCheckoutUrl,
  DOMAIN
} = require('./shopbase');
const { MOTHER_AND_BABY_PRODUCTS } = require('./catalog-data');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// In-memory cache & status
let lastSyncResult = null;
let lastSyncTime = null;

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    store: DOMAIN,
    catalog_count: MOTHER_AND_BABY_PRODUCTS.length,
    timestamp: new Date().toISOString()
  });
});

// Shop Info
app.get('/api/shop-info', async (req, res) => {
  try {
    const shop = await getShopInfo();
    res.json({ success: true, shop });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get Products from our enriched catalog (includes real variant IDs from ShopBase)
app.get('/api/products', async (req, res) => {
  try {
    const category = req.query.category;
    let products = MOTHER_AND_BABY_PRODUCTS;

    if (category && category !== 'all') {
      products = products.filter(p => p.category === category || p.product_type.toLowerCase().includes(category.toLowerCase()));
    }

    res.json({
      success: true,
      count: products.length,
      products: products
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message, products: MOTHER_AND_BABY_PRODUCTS });
  }
});

// Get LIVE products directly from ShopBase Admin API
app.get('/api/shopbase-products', async (req, res) => {
  try {
    const liveProducts = await getProducts();
    res.json({
      success: true,
      count: liveProducts.length,
      source: 'live-shopbase-api',
      products: liveProducts
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get single product
app.get('/api/products/:id', (req, res) => {
  const product = MOTHER_AND_BABY_PRODUCTS.find(p => String(p.id) === String(req.params.id) || p.handle === req.params.id);
  if (!product) {
    return res.status(404).json({ success: false, error: 'Product not found' });
  }
  res.json({ success: true, product });
});

// Trigger Catalog Sync to ShopBase
app.post('/api/sync-catalog', async (req, res) => {
  try {
    console.log('[API] Received request to sync catalog to ShopBase...');
    const results = await syncMotherAndBabyCatalog();
    lastSyncResult = results;
    lastSyncTime = new Date().toISOString();
    
    const successful = results.filter(r => r.success).length;
    res.json({
      success: true,
      message: `Successfully synchronized ${successful} of ${results.length} products to ${DOMAIN}`,
      synced_at: lastSyncTime,
      details: results
    });
  } catch (err) {
    console.error('[API] Sync error:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Get sync status
app.get('/api/sync-status', (req, res) => {
  res.json({
    last_sync_time: lastSyncTime,
    last_sync_result: lastSyncResult,
    total_products: MOTHER_AND_BABY_PRODUCTS.length,
    store_domain: DOMAIN
  });
});

// Get ShopBase Pages
app.get('/api/pages', async (req, res) => {
  try {
    const pages = await getPages();
    res.json({ success: true, pages });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Sync Mother & Baby Pages to ShopBase
app.post('/api/sync-pages', async (req, res) => {
  try {
    const pagesToSync = [
      {
        title: "Mother & Baby Care Routine Guide",
        handle: "mother-baby-care-routine-guide",
        body_html: `<h2>The Golden Rules of Mother & Baby Pure Care</h2>
<p>Nurturing delicate infant skin and supporting maternal skin healing requires clean, safe, and biocompatible ingredients.</p>
<h3>Trimester 1 & 2: Elasticity & Hydration</h3>
<p>Apply our <strong>Botanical Stretch Mark Elasticity Oil</strong> immediately following morning showers. Seal in cellular moisture with <strong>Organic Nourishing Belly Butter</strong> before sleep.</p>
<h3>Trimester 3 & Postpartum: Recovery & Comfort</h3>
<p>Keep <strong>Organic Nipple & Nursing Salve</strong> nearby. For soothing perineal discomfort, brew our <strong>Herbal Sitz Bath Postpartum Soak</strong> daily.</p>
<h3>Newborn Care: The Less Is More Philosophy</h3>
<p>Bathe baby 2-3 times per week with <strong>Ultra-Gentle 2-in-1 Baby Wash</strong> and finish with a warm <strong>Calming Bedtime Massage</strong>.</p>`
      },
      {
        title: "Our Pure & Clean Safety Standards",
        handle: "pure-clean-safety-standards",
        body_html: `<h2>Zero Harsh Chemicals. 100% Maternal Safety.</h2>
<p>Every Core & Core Pure Care formula undergoes rigorous third-party microbiological and dermatological testing.</p>
<ul>
  <li>0% Parabens, Phthalates, or Sulfates</li>
  <li>0% Artificial Fragrances or Synthetic Dyes</li>
  <li>100% Ingestion-Safe Nursing Balms</li>
  <li>Non-Nano Mineral UV Protection</li>
  <li>Cruelty-Free & Sustainable Packaging</li>
</ul>`
      }
    ];

    const results = [];
    for (const p of pagesToSync) {
      const r = await createOrUpdatePage(p.title, p.body_html, p.handle);
      results.push({ title: p.title, ...r });
    }

    res.json({ success: true, results });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/sync-homepage', async (req, res) => {
  try {
    const result = await syncHomepageTheme();
    res.json({ success: true, message: `Homepage theme synced to ShopBase theme ${result.theme.name}.`, result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Checkout Redirect Builder
app.post('/api/checkout', (req, res) => {
  const { items } = req.body;
  const checkoutUrl = buildCheckoutUrl(items);
  res.json({
    success: true,
    checkout_url: checkoutUrl
  });
});

app.listen(PORT, () => {
  console.log(`🌸 Core & Core Mother & Baby API Server running on http://localhost:${PORT}`);
  console.log(`Connected to ShopBase domain: ${DOMAIN}`);
});
