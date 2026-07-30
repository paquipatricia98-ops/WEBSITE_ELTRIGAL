import { getCategories, getProducts } from './src/services/api/publicApi';

const run = async () => {
  const cats = await getCategories('es', 'local');
  const prodsRes = await getProducts({ locale: 'es', limit: 150, type: 'local' });
  console.log('Categories count:', cats.length);
  console.log('Categories:', cats.map(c => ({ id: c.id, name: c.name.es, slug: c.slug.es })));
  console.log('Products count:', prodsRes.products.length);
  console.log('Products:', prodsRes.products.map(p => ({
    name: p.name.es,
    primaryCategory: p.primaryCategory
  })));
};
run();
