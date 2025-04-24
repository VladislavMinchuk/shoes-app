import { RootState } from "./interfaces";

const initialState: RootState = {
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
          images: ["/images/nike1.jpg", "/images/nike2.jpg"],
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
          id: "prod-2",
          name: "Adidas Superstar",
          description: "Класичні шкіряні кеди.",
          price: 3599,
          status: "available",
          categoryId: "cat-1",
          brandId: "brand-2",
          gender: "unisex",
          images: ["/images/adidas1.jpg"],
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
          productId: "prod-1",
          price: 10,
          quantity: 1,
        },
    ],
  };
  