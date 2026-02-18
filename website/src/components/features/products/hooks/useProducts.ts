// src/features/products/hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/productsApi';  // ឬ mock data

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
    staleTime: 5 * 60 * 1000, // 5 នាទី
  });
}