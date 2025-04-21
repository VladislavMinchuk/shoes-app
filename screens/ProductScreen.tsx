import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Dimensions, Image, FlatList, Modal } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { PrimaryButton, StickyFooter } from '../components/UI';
import { COLORS, stikyFooterHeight, stikyHeaderHeight, THEME } from '../const';
import ModalImgCarousel from '../components/ModalImgCarousel';
import SizeList from '../components/SizeList';
import { PoductLabel } from '../components/UI/ProductScreen';

const images = [
  require('../assets/product-img-4.jpg'),
  require('../assets/product-img-5.jpg'),
  require('../assets/product-img-6.jpg'),
];

const colors = [`${COLORS.cyan_500}`, `${COLORS.green_700}`, `${COLORS.red_500}`];
const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const disabledSizes = [37, 40, 45];

const ProductScreen = () => {
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [showFullscreenCarousel, setShowFullscreenCarousel] = useState(false);
  const [fullscreenCarouselIndex, setFullscreenCarouselIndex] = useState(0);

  const toggleLike = () => setLiked(prev => !prev);

  const screenWidth = Dimensions.get('window').width;

  const zoomImages = images.map((img) => ({ url: Image.resolveAssetSource(img).uri }));

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: stikyFooterHeight }}>
        <CarouselContainer>
          <ScrollView horizontal pagingEnabled>
            {images.map((img, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => {
                  setFullscreenCarouselIndex(0);
                  setShowFullscreenCarousel(true);
                }}
              >
                <Image source={img} style={{ width: screenWidth, height: 350 }} resizeMode="cover" />
              </TouchableOpacity>
            ))}
          </ScrollView>
          <HeartIcon onPress={toggleLike}>
            <AntDesign name={liked ? 'heart' : 'hearto'} size={24} color="red" />
          </HeartIcon>
        </CarouselContainer>

        <Content>
          <Title>Назва товару</Title>
          <Price>2 499 ₴</Price>
          <Status isAvailable={true}>В наявності</Status>

          <PoductLabel>Колір:</PoductLabel>
          <ColorList horizontal showsHorizontalScrollIndicator={false}>
            {colors.map((color, i) => (
              <TouchableOpacity key={i} onPress={() => {}}>
                <ColorDot style={{ backgroundColor: color }} />
              </TouchableOpacity>
            ))}
          </ColorList>

          <SizeList
            sizes={sizes}
            selectedSize={selectedSize}
            onSelectSize={(size) => setSelectedSize(size)}
            disabledSizes={disabledSizes}
          />

          <PoductLabel>Опис:</PoductLabel>
          <Description>
            Це зручне та стильне жіноче взуття, ідеальне для щоденного використання. Модель має зносостійку підошву та добре тримає форму.
          </Description>
        </Content>
      </ScrollView>

      <ModalImgCarousel
        visible={showFullscreenCarousel}
        images={zoomImages}
        initialIndex={fullscreenCarouselIndex}
        onClose={() => setShowFullscreenCarousel(false)}
      />

      <StickyFooter>
        <AddToCartButton>
          <ButtonText>До кошику</ButtonText>
        </AddToCartButton>
      </StickyFooter>
    </View>
  );
};

export default ProductScreen;

const CarouselContainer = styled.View`
  position: relative;
`;

const HeartIcon = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.8);
  padding: 8px;
  border-radius: 20px;
`;

const Content = styled.View`
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Price = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${THEME.secondaryColor};
  margin-bottom: 6px;
`;

const Status = styled.Text<{ isAvailable: boolean }>`
  color: ${(props: { isAvailable: boolean }) => (props.isAvailable ? 'green' : 'red')};
  font-weight: 500;
  margin-bottom: 16px;
`;

const ColorList = styled.ScrollView`
  flex-direction: row;
  margin-bottom: 20px;
`;

const ColorDot = styled.View`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border: 1px solid #ccc;
`;

const Description = styled.Text`
  font-size: 15px;
  color: #444;
  line-height: 20px;
`;

const AddToCartButton = styled(PrimaryButton)`
  padding: 14px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
