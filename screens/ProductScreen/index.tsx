import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { StickyFooter, Title } from '../../components/UI';
import { COLORS, stikyFooterHeight } from '../../const';
import ModalImgCarousel from '../../components/ModalImgCarousel';
import SizeList from '../../components/SizeList';
import { PoductLabel } from '../../components/UI';
import { CarouselContainer, HeartIcon, Content, Price, Status, ColorList, ColorDot, Description, AddToCartButton, ButtonText } from './styles';
import { useAppDispatch } from '../../store/hooks';
import { addToCart } from '../../store/cartSlice';

const images = [
  require('../../assets/product-img-4.jpg'),
  require('../../assets/product-img-5.jpg'),
  require('../../assets/product-img-6.jpg'),
];

const colors = [`${COLORS.cyan_500}`, `${COLORS.green_700}`, `${COLORS.red_500}`];
const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45];
const disabledSizes = [37, 40, 45];

const ProductScreen = () => {
  const dispatch = useAppDispatch();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [showFullscreenCarousel, setShowFullscreenCarousel] = useState(false);
  const [fullscreenCarouselIndex, setFullscreenCarouselIndex] = useState(0);

  const toggleLike = () => setLiked(prev => !prev);

  const screenWidth = Dimensions.get('window').width;

  const zoomImages = images.map((img) => ({ url: Image.resolveAssetSource(img).uri }));

  const addToCartHandler = () => {
    // dispatch(addToCart())
  };

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
        <AddToCartButton onPress={addToCartHandler}>
          <ButtonText>До кошику</ButtonText>
        </AddToCartButton>
      </StickyFooter>
    </View>
  );
};

export default ProductScreen;
