import { useSelector } from "react-redux";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ButtonControls, CartProductImage, CartWrapper, LabelValueText, PriceWrapper, QuantityBox } from "./styles";
import { CartItem as CartItemInterface } from '../../store/interfaces';
import { PoductLabel } from "../UI";
import { selectProductById } from "../../store/productSlice";
import { View, Text, TouchableOpacity } from "react-native";
import { parseToNum } from "../../helpers";
import { THEME } from "../../const";

interface CartItemProps {
    item: CartItemInterface,
    onCartIncrease: (id: string, quantity: number) => void,
    onCartDecrease: (id: string, quantity: number) => void,
    onCartRemove: (id: string) => void,
}

const CartItem: React.FC<CartItemProps> = ({ item, onCartIncrease, onCartDecrease, onCartRemove }) => {
    const productItem = useSelector(selectProductById(item.productId));
    const totalCalc = (price: string | number, quantity: string | number): number => {
        return parseToNum(price) * parseToNum(quantity);
    };
    const incQuantity = () => { onCartIncrease(item.id, item.quantity); };
    const decQuantity = () => {
        if (item.quantity === 1) { onCartRemove(item.id) }
        onCartDecrease(item.id, item.quantity);
    };

    return (
        <CartWrapper>
            <CartProductImage cardSize={'sm'} source={productItem?.images[0]} />
            <View style={{ flexGrow: 1 }}>
                <PoductLabel>Name: <LabelValueText>{item.productName}</LabelValueText></PoductLabel>
                <PoductLabel>Size: <LabelValueText>{item.productSize}</LabelValueText></PoductLabel>
                <PoductLabel>Price: <LabelValueText>{item.productPrice}</LabelValueText></PoductLabel>
                <PoductLabel>Total: <LabelValueText>{totalCalc(item.price, item.quantity)}</LabelValueText></PoductLabel>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <PriceWrapper>
                        <ButtonControls onPress={decQuantity}><AntDesign name="minussquareo" size={30} color={THEME.primaryColor} /></ButtonControls>
                        <QuantityBox><Text style={{ fontSize: 20 }}>{item.quantity}</Text></QuantityBox>
                        <ButtonControls onPress={incQuantity}><AntDesign name="plussquareo" size={30} color={THEME.primaryColor} /></ButtonControls>
                    </PriceWrapper>
                    <TouchableOpacity onPress={() => onCartRemove(item.id)}>
                        <Ionicons name="trash-outline" size={30} color={THEME.secondaryColor} />
                    </TouchableOpacity>
                </View>
            </View>
        </CartWrapper>
    );
};

export default CartItem