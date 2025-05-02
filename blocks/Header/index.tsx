import { HeaderBlock } from './styles';
import CartBtn from '../../components/CartBtn';
import React, {  } from 'react';
import { Text } from 'react-native';
import SearchBtn from '../../components/SearchBtn';
import { useAppSelector } from '../../store/hooks';
import { selectCartLength } from '../../store/cartSlice';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Header: React.FC = () => {
    const cartLength = useAppSelector(selectCartLength); // mock data
    const navigation = useNavigation<NavigationProp>();
    const toCartPage = () => {
        navigation.navigate('Tabs', { screen: 'Cart' });
    };
    
    return (
        <HeaderBlock>
            <SearchBtn></SearchBtn>
            <Text>Logo</Text>
            <CartBtn quantity={cartLength} onCartPress={toCartPage}></CartBtn>
        </HeaderBlock>
    );
};

export default Header;