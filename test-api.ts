import { fetchApi } from './src/services/api/client';
import { z } from 'zod';

const run = async () => {
  console.log('Testing API...');
  const res = await fetchApi('public/products/local', z.any(), { query: { limit: 1 } });
  console.log('Response:', JSON.stringify(res, null, 2));
};
run();
