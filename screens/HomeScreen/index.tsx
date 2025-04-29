import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { RootStackParamList } from '../../navigation/types';
import { Container, ScrollContainer, SectionTitle } from '../../components/UI';
import ProductCard from '../../components/ProductCard';
import Fotoer from '../../blocks/Footer';
import HeroSection from '../../blocks/HeroSection';
import { THEME } from '../../const';
import CategorySetion from '../../blocks/CategorySection';
import { selectAllProducts, setProducts } from '../../store/productSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import type { RootState } from '../../store/store';
import mockStore from '../../store/mockStore';


type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Product'>;

// const products = [
//   { id: '2', title: 'Новий товар 2', price: 12254, image: require('../../assets/product-img-1.jpg') },
//   { id: '4', title: 'Новий товар 4', price: 1255, image: require('../../assets/product-img-3.jpg') },
//   { id: '1', title: 'Новий товар 1 Новий товар Новий товар Новий товар товар товар 1', price: 980, image: require('../../assets/hero-img.jpg') },
//   { id: '3', title: 'Новий товар 3', price: 155, image: require('../../assets/product-img-2.jpg') },
// ];


export default function HomeScreen() {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state: RootState) => state.products); // mock data
  const navigation = useNavigation<NavigationProp>();

  const handleHeroPress = () => {
    navigation.navigate('Product', { productId: 'hero-product' });
  };

  const renderItem = ({ item }: { item: typeof products[0] }) => (
    <View style={{ marginRight: 20 }}>
      <ProductCard cardSize='md' product={item} onPress={() => navigation.navigate('Product', { productId: item.id })} />
    </View>
  );

  useEffect(() => {
    dispatch(setProducts(mockStore.products));
  }, [])
  return (
    <ScrollContainer>

      <HeroSection onPress={handleHeroPress} title='Main hero title'></HeroSection>

      <Container style={{ alignItems: 'center', flexDirection: 'row' }}>
        <MaterialIcons name="fiber-new" size={35} color={THEME.secondaryColor} />
        <SectionTitle>Нові товари</SectionTitle>
      </Container>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />

      <CategorySetion />

      <Fotoer></Fotoer>
    </ScrollContainer>
  );
}
