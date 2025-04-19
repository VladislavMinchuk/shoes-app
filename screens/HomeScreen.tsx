import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { ScrollContainer } from '../components/UI';
import ProductCard from '../components/ProductCard';
import Fotoer from '../blocks/Footer';

const screenHeight = Dimensions.get('window').height;

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Product'>;

const HeroTouchable = styled.TouchableOpacity`
  height: ${screenHeight - 80}px;
`;

const HeroImage = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SectionTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 16px;
`;

const products = [
  { id: '4', title: 'Новий товар 4', price: 1255, image: require('../assets/product-img-3.jpg') },
  { id: '1', title: 'Новий товар 1 Новий товар Новий товар Новий товар 1', price: 980, image: require('../assets/hero-img.jpg') },
  { id: '2', title: 'Новий товар 2', price: 12254, image: require('../assets/product-img-1.jpg') },
  { id: '3', title: 'Новий товар 3', price: 155, image: require('../assets/product-img-2.jpg') },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleHeroPress = () => {
    navigation.navigate('Product', { productId: 'hero-product' });
  };

  const renderItem = ({ item }: { item: typeof products[0] }) => (
    <View style={{ marginRight: 20 }}>
      <ProductCard cardSize='lg' product={item} onPress={() => navigation.navigate('Product', { productId: item.id })} />
    </View>
  );
``
  return (
    <ScrollContainer>
      <HeroTouchable onPress={handleHeroPress}>
        <HeroImage source={require('../assets/hero-img.jpg')} resizeMode="cover" />
      </HeroTouchable>

      <SectionTitle>Нові товари</SectionTitle>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />

      <Fotoer></Fotoer>
    </ScrollContainer>
  );
}
