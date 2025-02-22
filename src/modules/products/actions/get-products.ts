import { tesloApi } from '@/api/tesloApi';

export const getProducts = async (page: number = 1, limit: number = 10) => {
  try {
    const { data } = await tesloApi.get('/products');
    return data;
  } catch (error) {
    throw new Error('Error fetching products');
  }
};
