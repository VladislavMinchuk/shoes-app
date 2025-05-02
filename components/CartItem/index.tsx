import { CartProductImage, CartWrapper, PriceWrapper } from "./styles";
import { CartItem as CartItemInterface } from '../../store/interfaces';
import { PoductLabel, PrimaryButton, WhiteText } from "../UI";
import { useSelector } from "react-redux";
import { selectProductById } from "../../store/productSlice";
import { View, Text } from "react-native";
import { parseToNum } from "../../helpers";
import { useAppDispatch } from "../../store/hooks";
import { updateQuantity } from "../../store/cartSlice";

interface CartItemProps extends CartItemInterface {}

const CartItem: React.FC<CartItemProps> = ({ id, productId, productName, productPrice, productSize, price, quantity }) => {
    const dispatch = useAppDispatch();
    const productItem = useSelector(selectProductById(productId));
    const totalCalc = (price: string | number, quantity: string | number): number => {
        return parseToNum(price) * parseToNum(quantity);
    };
    const incQuantity = () => {
        dispatch(updateQuantity({ id, quantity: parseToNum(quantity) + 1 }));
    };
    const decQuantity = () => {
        dispatch(updateQuantity({ id, quantity: parseToNum(quantity) - 1 }));
    };

    return (
        <CartWrapper>
            <CartProductImage cardSize={'sm'} source={productItem?.images[0]} />
            <View>
                <PoductLabel>Name: {productName}</PoductLabel>
                <PoductLabel>Size: {productSize}</PoductLabel>
                <PoductLabel>Product price: {productPrice}</PoductLabel>
                <PoductLabel>Total: {totalCalc(price, quantity)}</PoductLabel>
                <PriceWrapper>
                    <PrimaryButton onPress={decQuantity}><WhiteText>-</WhiteText></PrimaryButton>
                    <Text>{quantity}</Text>
                    <PrimaryButton onPress={incQuantity}><WhiteText>+</WhiteText></PrimaryButton>
                </PriceWrapper>
            </View>
        </CartWrapper>
    );
};

export default CartItem