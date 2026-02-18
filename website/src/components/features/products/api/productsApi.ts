import {products} from '../../products/data/product'
import { Product } from '../types';
export async function getProducts():Promise <Product[]> {
    await new Promise(resolve=>setTimeout(resolve,800))
    return products
    
}