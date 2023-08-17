import {Category} from './Category';

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  version: string;
  category: Category;
  imageUrl: string;
}
