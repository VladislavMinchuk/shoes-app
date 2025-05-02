import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFromCart, clearCart } from '../../store/cartSlice';
import CartItem from '../../components/CartItem';

export default function CartScreen() {
  const items = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <CartItem { ...item } ></CartItem>
            <Button title="Видалити" onPress={() => dispatch(removeFromCart({ id: item.id }))} />
          </View>
        )}
      />
      <Button title="Очистити кошик" onPress={() => dispatch(clearCart())} />
    </View>
  );
}