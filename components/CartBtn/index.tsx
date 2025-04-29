import React from "react";
import { CartBtnNnumber, CartBtnStyled } from "../UI";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { THEME } from "../../const";
import { Text } from 'react-native';


export type CartBtnProps = {
    quantity?: string | number
};

const CartBtn: React.FC<CartBtnProps> = ({ quantity }) => {
    return (
        <CartBtnStyled>
            { !!quantity && <CartBtnNnumber><Text style={{ color: 'white' }}>{quantity}</Text></CartBtnNnumber>}
            <MaterialCommunityIcons name="cart-variant" size={24} color={THEME.primaryColor} />
        </CartBtnStyled>
    );
};

export default CartBtn;