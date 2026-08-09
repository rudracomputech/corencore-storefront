const { syncMotherAndBabyCatalog } = require('./shopbase');

async function run() {
  console.log("==================================================");
  console.log("🌸 Core & Core - Mother & Baby Catalog Sync to ShopBase");
  console.log("==================================================");
  
  const results = await syncMotherAndBabyCatalog();
  const successful = results.filter(r => r.success).length;
  
  console.log("--------------------------------------------------");
  console.log(`✅ Finished: ${successful}/${results.length} products updated on corencore.onshopbase.com`);
  console.log("==================================================");
  process.exit(0);
}

run().catch(err => {
  console.error("❌ Sync failed:", err);
  process.exit(1);
});
