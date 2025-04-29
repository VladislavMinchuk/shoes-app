import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IProduct } from '../../types';
import { useDispatch } from 'react-redux';
import { ProductAddBtn, ProductAddBtnTxt, ProductCardFooter, ProductCardStyled, ProductImage, ProductPriceText, ProductTitleText } from './styles';
import { CARD_IMG_HEIGHT, CARD_SIZE } from '../../const';
import { addToCart } from '../../store/cartSlice';
import { CartItem, CartItemPayload, Product } from '../../store/interfaces';

export interface IProductCardProps {
  product: Product;
  cardSize: SizeCardType;
  onPress: () => void;
};

export type SizeCardType = keyof typeof CARD_SIZE;
export type HeightImgType = keyof typeof CARD_IMG_HEIGHT;

const ProductCard = ({ product, cardSize = 'md', onPress }: IProductCardProps) => {
  const dispatch = useDispatch();
  const cartItem: CartItemPayload = {
    productId: product.id,
    price: product.price,
    quantity: 1
  };
  const productImg = product.images[0];

  return (
    <ProductCardStyled cardSize={cardSize}>
      <TouchableOpacity onPress={onPress}>
        <ProductImage cardSize={cardSize} source={productImg} />
        <ProductTitleText numberOfLines={2} ellipsizeMode="tail">{product.name}</ProductTitleText>
      </TouchableOpacity>
      <ProductCardFooter>
        <ProductPriceText>$ {product.price}</ProductPriceText>
        <ProductAddBtn onPress={() => dispatch(addToCart(cartItem))}>
          <ProductAddBtnTxt>+</ProductAddBtnTxt>
        </ProductAddBtn>
      </ProductCardFooter>
    </ProductCardStyled>
  );
};


export default ProductCard;