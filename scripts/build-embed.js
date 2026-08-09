const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

async function buildEmbed() {
  console.log('Building standalone ShopBase embed bundle...');
  
  // 1. Read CSS
  const css = fs.readFileSync(path.join(__dirname, '../src/styles/main.css'), 'utf8');
  
  // Minify CSS slightly
  const minifiedCss = css
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
  // Inject Core & Core Styles
  if (!document.getElementById('corencore-styles')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'corencore-styles';
    styleEl.textContent = ${JSON.stringify(minifiedCss)};
    document.head.appendChild(styleEl);
  }
  
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
