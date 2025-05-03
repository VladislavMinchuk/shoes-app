import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFromCart, clearCart, updateQuantity } from '../../store/cartSlice';
import CartItem from '../../components/CartItem';
import { useAppDispatch } from '../../store/hooks';
import { parseToNum } from '../../helpers';
import { THEME } from '../../const';

export default function CartScreen() {
  const dispatch = useAppDispatch();
  const items = useSelector((state: RootState) => state.cart);
  const incQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity: parseToNum(quantity) + 1 }));
  };
  const decQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity: parseToNum(quantity) - 1 }));
  };
  const removeCartItem = (id: string) => {
    dispatch(removeFromCart({ id }))
  };

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CartItem
            item={item}
            onCartDecrease={decQuantity}
            onCartIncrease={incQuantity}
            onCartRemove={removeCartItem}
          ></CartItem>
        )}
      />

      { items.length ?
        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => dispatch(clearCart())}>
          <Text style={{ fontSize: 18, color: THEME.secondaryColor }}>Очистити кошик</Text>
        </TouchableOpacity> :
        <Text>Empty cart</Text>
      }
    </View>
  );
}