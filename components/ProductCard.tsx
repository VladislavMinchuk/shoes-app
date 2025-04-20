import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IProduct } from '../types';
import { useDispatch } from 'react-redux';
import { ProductAddBtn, ProductAddBtnTxt, ProductCardFooter, ProductCardStyled, ProductImage, ProductPriceText, ProductTitleText } from './UI/ProductCart';
import { CARD_IMG_HEIGHT, CARD_SIZE } from '../const';
import { addToCart } from '../store/cartSlice';

export interface IProductCardProps {
  product: IProduct;
  cardSize: SizeCardType;
  onPress: () => void;
};

export type SizeCardType = keyof typeof CARD_SIZE;
export type HeightImgType = keyof typeof CARD_IMG_HEIGHT;

const ProductCard = ({ product, cardSize = 'md', onPress }: IProductCardProps) => {
  const dispatch = useDispatch();

  return (
    <ProductCardStyled cardSize={cardSize}>
      <TouchableOpacity onPress={onPress}>
        <ProductImage cardSize={cardSize} source={product.image} />
        <ProductTitleText numberOfLines={2} ellipsizeMode="tail">{product.title}</ProductTitleText>
      </TouchableOpacity>
      <ProductCardFooter>
        <ProductPriceText>$ {product.price}</ProductPriceText>
        <ProductAddBtn onPress={() => dispatch(addToCart(product))}>
          <ProductAddBtnTxt>+</ProductAddBtnTxt>
        </ProductAddBtn>
      </ProductCardFooter>
    </ProductCardStyled>
  );
};


export default ProductCard;