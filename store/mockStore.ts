import { RootState } from "./interfaces";

const mockStore: RootState = {
  products: [
      {
        id: "prod-1",
        name: "Nike Air Max 90",
        description: "Популярна модель кросівок з хорошою амортизацією.",
        price: 4499,
        status: "available",
        categoryId: "cat-1",
        brandId: "brand-1",
        gender: "male",
        images: [require("../assets/product-img-1.jpg"), require("../assets/product-img-3.jpg")],
        colors: [
          { id: "color-1", name: "Black", hex: "#000000", productId: "prod-1" },
          { id: "color-2", name: "White", hex: "#FFFFFF", productId: "prod-1" },
        ],
        sizes: [
          { id: "size-1", size: 42, productId: "prod-1" },
          { id: "size-2", size: 43, productId: "prod-1" },
        ],
      },
      {
        id: "prod-12",
        name: "Nike Air Max 90",
        description: "Популярна модель кросівок з хорошою амортизацією.",
        price: 4499,
        status: "available",
        categoryId: "cat-1",
        brandId: "brand-1",
        gender: "male",
        images: [require("../assets/product-img-1.jpg"), require("../assets/product-img-3.jpg")],
        colors: [
          { id: "color-1", name: "Black", hex: "#000000", productId: "prod-1" },
          { id: "color-2", name: "White", hex: "#FFFFFF", productId: "prod-1" },
        ],
        sizes: [
          { id: "size-1", size: 42, productId: "prod-1" },
          { id: "size-2", size: 43, productId: "prod-1" },
        ],
      },
      {
        id: "prod-22",
        name: "Adidas Superstar",
        description: "Класичні шкіряні кеди.",
        price: 3599,
        status: "available",
        categoryId: "cat-1",
        brandId: "brand-2",
        gender: "unisex",
        images: [require("../assets/product-img-3.jpg"), require("../assets/product-img-2.jpg")],
        colors: [
          { id: "color-3", name: "White", hex: "#FFFFFF", productId: "prod-2" },
        ],
        sizes: [
          { id: "size-3", size: 40, productId: "prod-2" },
          { id: "size-4", size: 41, productId: "prod-2" },
        ],
      },
      {
        id: "prod-23",
        name: "Adidas Superstar",
        description: "Класичні шкіряні кеди.",
        price: 3599,
        status: "available",
        categoryId: "cat-1",
        brandId: "brand-2",
        gender: "unisex",
        images: [require("../assets/product-img-3.jpg"), require("../assets/product-img-2.jpg")],
        colors: [
          { id: "color-3", name: "White", hex: "#FFFFFF", productId: "prod-2" },
        ],
        sizes: [
          { id: "size-3", size: 40, productId: "prod-2" },
          { id: "size-4", size: 41, productId: "prod-2" },
        ],
      },
  ],
  categories: [
      { id: "cat-1", name: "Чоловіче взуття" },
      { id: "cat-2", name: "Жіноче взуття" },
  ],
  brands: [
      { id: "brand-1", name: "Nike", logo: "/logos/nike.png" },
      { id: "brand-2", name: "Adidas", logo: "/logos/adidas.png" },
  ],
  cart: [
      {
        id: 'cart-item-1',
        productName: 'Adidas Superstar',
        productId: 'prod-2',
        productPrice: 3599,
        productSize: 40,
        totalPrice: 10,
        quantity: 1,
      },
  ],
};

export default mockStore;