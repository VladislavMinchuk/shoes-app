import { HeaderBlock } from './styles';
import CartBtn from '../../components/CartBtn';
import React, {  } from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchBtn from '../../components/SearchBtn';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/interfaces';
import { selectCartLength } from '../../store/cartSlice';

const Header: React.FC = () => {
    const cartLength = useAppSelector(selectCartLength); // mock data
    

    return (
        <HeaderBlock>
            <SearchBtn></SearchBtn>
            <Text>Logo</Text>
            <CartBtn quantity={cartLength}></CartBtn>
        </HeaderBlock>
    );
};

export default Header;