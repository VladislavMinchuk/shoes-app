import { CartWrapper } from "./styles";
import { CartItem as CartItemInterface } from '../../store/interfaces';
import { PoductLabel } from "../UI";

interface CartItemProps extends CartItemInterface {}

const CartItem: React.FC<CartItemProps> = ({ id, productId, price, quantity }) => {
    return (
        <CartWrapper>
            <PoductLabel>ID: {id}</PoductLabel>
            <PoductLabel>Product id: {productId}</PoductLabel>
            <PoductLabel>Price: {price}</PoductLabel>
            <PoductLabel>Quantity: {quantity}</PoductLabel>
        </CartWrapper>
    );
};

export default CartItem