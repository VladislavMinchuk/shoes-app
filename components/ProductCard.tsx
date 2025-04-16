import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { IProduct } from '../types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { PrimaryButton, ProductImage, ProductPriceText, ProductTitleText, SecondaryButton, WhiteButtonText } from './UI';

interface Props {
  product: IProduct;
  onPress: () => void;
}

const ProductCard = ({ product, onPress }: Props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.card}>
      <ProductImage source={product.image} style={styles.image} />
      <ProductTitleText>{product.title}</ProductTitleText>
      <ProductPriceText>$ {product.price}</ProductPriceText>
      <View style={{marginBottom: 10}}>
        <PrimaryButton onPress={onPress}>
          <WhiteButtonText>Детальніше</WhiteButtonText>
        </PrimaryButton>
      </View>
      <SecondaryButton>
        <WhiteButtonText>+</WhiteButtonText>
      </SecondaryButton>
      {/* <Button title="До кошика" onPress={() => dispatch(addToCart(product))} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: { width: 170, margin: 10 },
  image: { width: '100%', height: 220, resizeMode: 'cover' },
});

export default ProductCard;