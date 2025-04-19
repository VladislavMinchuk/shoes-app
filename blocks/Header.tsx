import { HeaderBlock } from '../components/UI/Blocks';
import CartBtn from '../components/CartBtn';
import React, {  } from 'react';
import { Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchBtn from '../components/SearchBtn';

const Header: React.FC = () => {
    const insets = useSafeAreaInsets();

    return (
        <HeaderBlock>
            <SearchBtn></SearchBtn>
            <Text>Logo</Text>
            <CartBtn quantity={10}></CartBtn>
        </HeaderBlock>
    );
};

export default Header;