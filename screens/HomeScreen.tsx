// import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from "react-native";
// import { TabParamList } from "../navigation/types";
// import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
// import { BackgroundImage, FullscreenImage, FullscreenTouchable, PrimaryButton, PrimaryButtonText } from "../components/UI";
// import { Link } from "@react-navigation/native";

// type Props = BottomTabScreenProps<TabParamList, 'Home'>;

// export default function HomeScreen({ navigation  }: Props) {

//     const goToProductScreen = () => {
//         const rootNavigator = navigation.getParent();
        
//         if (rootNavigator) {
//             rootNavigator.navigate('Product', { productId: '1' });
//         }
//     };
//     return (
//         <ScrollView contentContainerStyle ={{ flex: 1, justifyContent: "center" }}>
//             <FullscreenTouchable onPress={goToProductScreen}>
//                 <ImageBackground style={{width: '100%', height: '100%',flex: 1,} } resizeMode='cover' source={require('../assets/hero-img.jpg')}>
//                     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//                         <PrimaryButton>
//                             <PrimaryButtonText>На продукт</PrimaryButtonText>
//                         </PrimaryButton>
//                     </View>
//                 </ImageBackground>
//             </FullscreenTouchable>
//             <Text >🏠 Головна</Text>
//             <Text >🏠 Головна</Text>
//             <Text >🏠 Головна</Text>
//             <Text >🏠 Головна</Text>
//             <Text >🏠 Головна</Text>
//             <Text >🏠 Головна</Text>
//         </ScrollView>
//     );
// }
import React from 'react';
import styled from 'styled-components/native';
import { Dimensions, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { ScrollContainer } from '../components/UI';
import ProductCard from '../components/ProductCard';

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

const ProductCardTouchable = styled.TouchableOpacity`
  width: 150px;
  margin-right: 12px;
`;

const ProductName = styled.Text`
  font-size: 14px;
  margin-top: 8px;
`;

const products = [
  { id: '1', title: 'Новий товар 1 Новий товар 1', price: 10, image: require('../assets/hero-img.jpg') },
  { id: '2', title: 'Новий товар 2', price: 12, image: require('../assets/hero-img.jpg') },
  { id: '3', title: 'Новий товар 3', price: 15, image: require('../assets/hero-img.jpg') },
];

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleHeroPress = () => {
    navigation.navigate('Product', { productId: 'hero-product' });
  };

  const renderItem = ({ item }: { item: typeof products[0] }) => (
    <ProductCard product={item} onPress={() => navigation.navigate('Product', { productId: item.id })} />
  );

  return (
    <ScrollContainer>
      <HeroTouchable onPress={handleHeroPress}>
        <HeroImage source={require('../assets/hero-img.jpg')} resizeMode="cover" />
      </HeroTouchable>

      <SectionTitle>🆕 Нові товари</SectionTitle>

      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </ScrollContainer>
  );
}
