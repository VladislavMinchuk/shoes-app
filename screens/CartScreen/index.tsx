import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { removeFromCart, clearCart, updateQuantity, selectCartTotal } from '../../store/cartSlice';
import CartItem from '../../components/CartItem';
import { useAppDispatch } from '../../store/hooks';
import { parseToNum } from '../../helpers';
import { THEME } from '../../const';
import { Title } from '../../components/UI';

export default function CartScreen() {
  const dispatch = useAppDispatch();
  const totalPrice = useSelector((state: RootState) => selectCartTotal(state));
  const items = useSelector((state: RootState) => state.cart);
  const incQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity: parseToNum(quantity) + 1 }));
  };
  const decQuantity = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity: parseToNum(quantity) - 1 }));
  };
  const updateQuantityItem = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity: parseToNum(quantity)}));
  };
  const removeCartItem = (id: string) => {
    dispatch(removeFromCart({ id }))
  };

  return (
    <View style={{ height: '100%' }}>

      { items.length ?
      <>
        <FlatList
            style={{}}
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CartItem
                item={item}
                onCartDecrease={decQuantity}
                onCartIncrease={incQuantity}
                onCartRemove={removeCartItem}
                onQuantityUpdate={updateQuantityItem}
              ></CartItem>
            )}
            />
          <View style={{ marginTop: 'auto' }}>
            <Text>Total: { totalPrice }</Text>
          </View>
        </>
        :
        <>
          <View style={{ paddingTop: 20, paddingBottom: 20 }}>
            <Title style={{ alignSelf: 'center' }}>Кошик порожній</Title>
          </View>
        </>
      }
    </View>
  );
}