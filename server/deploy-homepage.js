/**
 * Deploy the built Mother & Baby Vite storefront to the active ShopBase theme.
 *
 * This script:
 *  1. Reads the built CSS + JS from dist/assets
 *  2. Uploads them as theme assets (assets/corencore-app.css, assets/corencore-app.js)
 *  3. Replaces templates/index.liquid with a Liquid template that loads the
 *     fonts + CSS + JS and emits the exact container structure from index.html
 *
 * Run:  node server/deploy-homepage.js
 */
const fs = require('fs');
const path = require('path');
const {
  shopbaseRequest,
  getPublishedTheme,
  updateThemeAsset,
  getThemes,
  DOMAIN
} = require('./shopbase');

const DIST_DIR = path.join(__dirname, '..', 'dist');
const ASSETS_DIR = path.join(DIST_DIR, 'assets');

function readAssetFiles() {
  const files = fs.readdirSync(ASSETS_DIR);
  const cssFile = files.find(f => f.endsWith('.css'));
  const jsFile = files.find(f => f.endsWith('.js'));
  if (!cssFile || !jsFile) {
    throw new Error(`Could not find built CSS/JS in ${ASSETS_DIR}. Run 'npm run build' first.`);
  }
  return {
    cssFileName: cssFile,
    jsFileName: jsFile,
    css: fs.readFileSync(path.join(ASSETS_DIR, cssFile), 'utf8'),
    js: fs.readFileSync(path.join(ASSETS_DIR, jsFile), 'utf8')
  };
}

function buildIndexTemplate() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Core & Core — Pure Mother & Baby Care</title>
  <meta name="description" content="Pediatrician-approved and certified organic skincare crafted for pregnant mothers, postpartum recovery, and delicate baby skin. Zero toxins, pure nourishment.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..800;1,400..800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://{{ shop.domain }}/assets/corencore-app.css">
</head>
<body>
  <header id="header-container"></header>

  <main id="main-content">
    <section id="hero-container"></section>
    <section id="trust-bar-container"></section>
    <section id="categories-container"></section>
    <section id="routine-quiz-container"></section>
    <section id="product-grid-container"></section>
    <section id="safety-standards-container"></section>
    <section id="reviews-container"></section>
    <section id="guide-banner-container"></section>
  </main>

  <footer id="footer-container"></footer>

  <div id="cart-drawer-root"></div>
  <div id="product-modal-root"></div>
  <div id="pages-modal-root"></div>
  <div id="admin-hub-root"></div>

  <script src="https://{{ shop.domain }}/assets/corencore-app.js"></script>
</body>
</html>
`;
}

async function deploy() {
  console.log('==================================================');
  console.log('🌸 Deploying Mother & Baby Storefront to ShopBase');
  console.log(`   Store: ${DOMAIN}`);
  console.log('==================================================');

  const { cssFileName, jsFileName, css, js } = readAssetFiles();
  console.log(`\n📦 Built assets detected:`);
  console.log(`   CSS: ${cssFileName} (${(css.length / 1024).toFixed(1)} KB)`);
  console.log(`   JS:  ${jsFileName} (${(js.length / 1024).toFixed(1)} KB)`);

  const theme = await getPublishedTheme();
  if (!theme) {
    throw new Error('No active ShopBase theme found.');
  }
  console.log(`\n🎨 Active theme: "${theme.name}" (id: ${theme.id})`);

  // 1. Upload CSS asset
  console.log('\n⬆️  Uploading corencore-app.css ...');
  const cssUpload = await updateThemeAsset(theme.id, {
    key: 'assets/corencore-app.css',
    value: css
  });
  console.log(`   CSS upload HTTP ${cssUpload.status}`);

  // 2. Upload JS asset
  console.log('⬆️  Uploading corencore-app.js ...');
  const jsUpload = await updateThemeAsset(theme.id, {
    key: 'assets/corencore-app.js',
    value: js
  });
  console.log(`   JS upload HTTP ${jsUpload.status}`);

  // 3. Upload index.liquid template
  console.log('⬆️  Uploading templates/index.liquid ...');
  const indexTemplate = buildIndexTemplate();
  const indexUpload = await updateThemeAsset(theme.id, {
    key: 'templates/index.liquid',
    value: indexTemplate
  });
  console.log(`   index.liquid upload HTTP ${indexUpload.status}`);

  console.log('\n==================================================');
  console.log('✅ Deployment complete!');
  console.log(`   Visit https://${DOMAIN} to view the Mother & Baby storefront.`);
  console.log('   (Allow a few minutes for ShopBase CDN cache to refresh.)');
  console.log('==================================================');
}

deploy().catch(err => {
  console.error('\n❌ Deployment failed:', err.message);
  process.exit(1);
});
