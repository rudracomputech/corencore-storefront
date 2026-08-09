const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

async function buildEmbed() {
  console.log('Building standalone ShopBase embed bundle...');
  
  // 1. Read CSS
  const css = fs.readFileSync(path.join(__dirname, '../src/styles/main.css'), 'utf8');
  
  // Theme suppression CSS rules to ensure default ShopBase elements never show
  const suppressionCss = `
    #app,
    .default-layout,
    #wb-main,
    .wb-builder,
    .block-footer,
    footer[role="contentinfo"],
    body > footer:not(#layer-footer):not(#layer-footer *),
    body > header:not(#layer-header):not(#layer-header *),
    body > main:not(#layer-body):not(#layer-body *),
    body > div:not(#corencore-storefront-root):not(#cart-drawer-root):not(#product-modal-root):not(#pages-modal-root):not(#admin-hub-root) {
      display: none !important;
      visibility: hidden !important;
      height: 0 !important;
      overflow: hidden !important;
      opacity: 0 !important;
      pointer-events: none !important;
    }
    #corencore-storefront-root {
      display: block !important;
      visibility: visible !important;
      opacity: 1 !important;
      position: relative !important;
      width: 100% !important;
    }
  `;

  // Minify CSS
  const combinedCss = (suppressionCss + '\n' + css)
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\s+/g, ' ')
    .replace(/:\s+/g, ':')
    .replace(/;\s+/g, ';')
    .replace(/\{\s+/g, '{')
    .replace(/\}\s+/g, '}')
    .trim();

  // 2. Compile JS bundle with esbuild
  const result = await esbuild.build({
    entryPoints: [path.join(__dirname, '../src/embed.js')],
    bundle: true,
    minify: true,
    format: 'iife',
    globalName: 'CoreNCoreStorefront',
    write: false,
    target: ['es2020', 'chrome80', 'safari13']
  });

  const bundledJs = result.outputFiles[0].text;

  // 3. Create self-injecting script that injects CSS + executes JS
  const finalBundle = `(function() {
  // Inject Core & Core Styles immediately
  if (!document.getElementById('corencore-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'corencore-styles';
    styleEl.textContent = ${JSON.stringify(combinedCss)};
    document.head.appendChild(styleEl);
  }

  // Hide default ShopBase app immediately
  const appEl = document.getElementById('app');
  if (appEl) appEl.style.display = 'none';

  // Execute Storefront App
  ${bundledJs}
})();`;

  const outDir = path.join(__dirname, '../dist');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const outFile = path.join(outDir, 'corencore-storefront.js');
  fs.writeFileSync(outFile, finalBundle, 'utf8');

  console.log(`✅ Build Complete! Output: ${outFile}`);
  console.log(`📦 Size: ${(finalBundle.length / 1024).toFixed(1)} KB`);
}

buildEmbed().catch(console.error);
