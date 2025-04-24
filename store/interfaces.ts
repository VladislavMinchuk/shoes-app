export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    status: 'available' | 'unavailable';
    categoryId: string;
    brandId: string;
    gender: 'male' | 'female' | 'unisex';
    images: string[];
    colors: ColorVariant[];
    sizes: SizeVariant[];
}
  
export interface ColorVariant {
    id: string;
    name: string;
    hex: string;
    productId: string;
}
  
export interface SizeVariant {
    id: string;
    size: number;
    productId: string;
}
  
export interface Category {
    id: string;
    name: string;
}
  
export interface Brand {
    id: string;
    name: string;
    logo: string;
}
  
export interface CartItem {
    id: string;
    productId: string;
    price: number;
    quantity: number;
}
  
export interface CartState {
    items: CartItem[];
}
  
export interface ProductState {
    all: Product[];
    selectedProduct: Product | null;
}
  
export interface CategoryState {
    all: Category[];
}
  
export interface BrandState {
    all: Brand[];
}
  
export interface RootState {
    products: Product[];
    categories: Category[];
    brands: Brand[];
    cart: CartItem[];
}
  