import React from 'react';
import { TouchableOpacity } from 'react-native';
import { IProduct } from '../types';
import { useDispatch } from 'react-redux';
import { ProductAddBtn, ProductAddBtnTxt, ProductCardFooter, ProductCardStyled, ProductImage, ProductPriceText, ProductTitleText } from './UI/ProductCart';
import { CARD_IMG_HEIGHT, CARD_WIDTHS } from '../const';
import { addToCart } from '../store/cartSlice';

export interface IProductCardProps {
  product: IProduct;
  cardSize: WidthCardType;
  onPress: () => void;
};

export type WidthCardType = keyof typeof CARD_WIDTHS;
export type HeightImgType = keyof typeof CARD_IMG_HEIGHT;

const ProductCard = ({ product, cardSize = 'md', onPress }: IProductCardProps) => {
  const dispatch = useDispatch();

  return (
    <ProductCardStyled widthCard={cardSize}>
      <TouchableOpacity onPress={onPress}>
        <ProductImage heightCard={cardSize} source={product.image} />
        <ProductTitleText>{product.title}</ProductTitleText>
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