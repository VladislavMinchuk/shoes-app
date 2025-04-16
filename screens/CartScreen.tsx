import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, clearCart } from '../store/cartSlice';

export default function CartScreen() {
  const items = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title} x{item.quantity}</Text>
            <Button title="Видалити" onPress={() => dispatch(removeFromCart(item.id))} />
          </View>
        )}
      />
      <Button title="Очистити кошик" onPress={() => dispatch(clearCart())} />
    </View>
  );
}