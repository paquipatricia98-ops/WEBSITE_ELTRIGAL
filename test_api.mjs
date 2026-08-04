import { getProducts } from './src/services/api/publicApi.ts';
async function run() {
  const { products } = await getProducts({ locale: 'es', limit: 100 });
  console.log("Total length:", products.length);
  console.log("Slugs:", products.map(p => p.slug?.es));
}
run();
