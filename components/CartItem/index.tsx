import { useSelector } from "react-redux";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ButtonControls, CartProductImage, CartWrapper, LabelValueText, PriceWrapper, QuantityBox } from "./styles";
import { CartItem as CartItemInterface } from '../../store/interfaces';
import { PoductLabel, PrimaryButton, SecondaryButton, UnderlineDecor, WhiteText } from "../UI";
import { selectProductById } from "../../store/productSlice";
import { View, Text, TouchableOpacity, Button, TextInput } from "react-native";
import { parseToNum } from "../../helpers";
import { THEME } from "../../const";
import ModalWrapper from "../Modal";
import { useState } from "react";

interface CartItemProps {
    item: CartItemInterface,
    onCartIncrease: (id: string, quantity: number) => void,
    onCartDecrease: (id: string, quantity: number) => void,
    onQuantityUpdate: (id: string, quantity: number) => void,
    onCartRemove: (id: string) => void,
}

const CartItem: React.FC<CartItemProps> = ({ item, onCartIncrease, onCartDecrease, onCartRemove, onQuantityUpdate }) => {
    const [visible, setVisible] = useState(false);
    const [quantityModal, setQuantityModal] = useState(false);
    const [inputQuantity, setInputQuantity] = useState(`${item.quantity || 0}`);
    const productItem = useSelector(selectProductById(item.productId));
    const totalCalc = (price: string | number, quantity: string | number): number => {
        return parseToNum(price) * parseToNum(quantity);
    };
    const incQuantity = () => { onCartIncrease(item.id, item.quantity); };
    const decQuantity = () => {
        if (item.quantity === 1) { return setVisible(true); }
        onCartDecrease(item.id, item.quantity);
    };
    const handleRemove = () => {
        onCartRemove(item.id);
        setVisible(false);
    };
    const handleQuantityModal = () => {
        onQuantityUpdate(item.id, parseToNum(inputQuantity));
        setQuantityModal(false);
    };
    const handleQuantityInput = (value: string) => {
        const numericValue = value.replace(/[^0-9]/g, '');
        setInputQuantity(numericValue);
    };
    const openQuantiryModal = () => {
        setInputQuantity(`${item.quantity}`);
        setQuantityModal(true);
    };



    return (
        <CartWrapper>
            <CartProductImage cardSize={'sm'} source={productItem?.images[0]} />
            <View style={{ width: '100%', flexShrink: 1 }}>
                <PoductLabel numberOfLines={1} ellipsizeMode="tail">
                    <LabelValueText>{item.productName}</LabelValueText>
                </PoductLabel>
                <UnderlineDecor />
                <PoductLabel>
                    <MaterialCommunityIcons name="shoe-print" size={24} color="black" />: <LabelValueText>{item.productSize}</LabelValueText>
                </PoductLabel>
                <PoductLabel>
                    <Entypo name="price-tag" size={24} color="black" />: <LabelValueText>{`${item.productPrice} ₴`}</LabelValueText>
                </PoductLabel>
                <PoductLabel>
                    <FontAwesome6 name="hryvnia-sign" size={14} color="black" />
                    <FontAwesome6 name="hryvnia-sign" size={14} color="black" />: <LabelValueText>{`${totalCalc(item.productPrice, item.quantity)} ₴`}</LabelValueText>
                </PoductLabel>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <PriceWrapper>
                        <ButtonControls onPress={decQuantity}><AntDesign name="minussquareo" size={30} color={THEME.primaryColor} /></ButtonControls>
                        <QuantityBox onPress={() => openQuantiryModal()}><Text style={{ fontSize: 20 }}>{item.quantity}</Text></QuantityBox>
                        <ButtonControls onPress={incQuantity}><AntDesign name="plussquareo" size={30} color={THEME.primaryColor} /></ButtonControls>
                    </PriceWrapper>
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Ionicons name="trash-outline" size={30} color={THEME.secondaryColor} />
                    </TouchableOpacity>
                </View>
            </View>

            <ModalWrapper visible={visible} onClose={() => setVisible(false)}>
                <Text style={{ fontSize: 18, marginBottom: 10, textAlign: 'center' }}>Видалити?</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <PrimaryButton onPress={() => {handleRemove();}}>
                        <WhiteText>Так</WhiteText>
                    </PrimaryButton>
                    <SecondaryButton onPress={() => {setVisible(false);}}>
                        <WhiteText>Ні</WhiteText>
                    </SecondaryButton>
                </View>
            </ModalWrapper>

            <ModalWrapper visible={quantityModal} onClose={() => setQuantityModal(false)}>
                <Text style={{ fontSize: 18, marginBottom: 10, textAlign: 'center' }}>Введіть кількість</Text>
                <TextInput
                    value={inputQuantity}
                    onChangeText={handleQuantityInput}
                    placeholder="Кількість"
                    keyboardType="numeric"
                    style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        padding: 10,
                        borderRadius: 8,
                        marginBottom: 15,
                    }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <PrimaryButton onPress={() => {handleQuantityModal();}}>
                        <Entypo name="check" size={24} color="white" />
                    </PrimaryButton>
                    <SecondaryButton onPress={() => {setQuantityModal(false);}}>
                        <Entypo name="cross" size={24} color="white" />
                    </SecondaryButton>
                </View>
            </ModalWrapper>
        </CartWrapper>
    );
};

export default CartItem