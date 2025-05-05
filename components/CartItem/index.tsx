import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Ionicons, AntDesign, MaterialCommunityIcons, Entypo, FontAwesome6 } from '@expo/vector-icons';
import { ButtonControls, CartProductImage, CartWrapper, LabelValueText, PriceWrapper, QuantityBox } from "./styles";
import { CartItem as CartItemInterface } from '../../store/interfaces';
import { PoductLabel, UnderlineDecor } from "../UI";
import { selectProductById } from "../../store/productSlice";
import { View, Text, TouchableOpacity } from "react-native";
import { numericStringValue, parseToNum } from "../../helpers";
import { THEME } from "../../const";
import QuantityModal from "../QuantityModal";
import ModalAlert from "../ModalAlert/ModalAlert";

interface CartItemProps {
    item: CartItemInterface,
    onCartIncrease: (id: string, quantity: number) => void,
    onCartDecrease: (id: string, quantity: number) => void,
    onQuantityUpdate: (id: string, quantity: number) => void,
    onCartRemove: (id: string) => void,
};

const CartItem: React.FC<CartItemProps> = ({ item, onCartIncrease, onCartDecrease, onCartRemove, onQuantityUpdate }) => {
    const productSelector = useMemo(() => selectProductById(item.productId), [item.productId]);
    const productItem = useSelector(productSelector);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [isQuantityModalVisible, setIsQuantityModalVisible] = useState(false);
    const [inputQuantity, setInputQuantity] = useState(`${item.quantity || 0}`);
    const totalCalc = (price: string | number, quantity: string | number): number => {
        return parseToNum(price) * parseToNum(quantity);
    };
    const incQuantity = () => { onCartIncrease(item.id, item.quantity); };
    const decQuantity = () => {
        if (item.quantity === 1) { return setIsAlertVisible(true); }
        onCartDecrease(item.id, item.quantity);
    };
    const handleRemove = () => {
        onCartRemove(item.id);
        setIsAlertVisible(false);
    };
    const handleQuantityModal = () => {
        onQuantityUpdate(item.id, parseToNum(inputQuantity));
        setIsQuantityModalVisible(false);
    };
    const handleQuantityInput = (value: string) => {
        setInputQuantity(numericStringValue(value));
    };
    const openQuantiryModal = () => {
        setInputQuantity(`${item.quantity}`);
        setIsQuantityModalVisible(true);
    };
    const closeQuantiryModal = () => {
        setInputQuantity('0');
        setIsQuantityModalVisible(false);
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
                    <TouchableOpacity onPress={() => setIsAlertVisible(true)}>
                        <Ionicons name="trash-outline" size={30} color={THEME.secondaryColor} />
                    </TouchableOpacity>
                </View>
            </View>

            <ModalAlert
                title="Видалити?"
                isVisible={isAlertVisible}
                onClose={() => setIsAlertVisible(false)}
                onAccept={() => handleRemove()}
                onDecline={() => setIsAlertVisible(false)}
            />

            <QuantityModal
                isVisible={isQuantityModalVisible}
                baseQuantity={inputQuantity}
                setBaseQuantity={handleQuantityInput}
                onDecline={() => setIsQuantityModalVisible(false)}
                onAccept={handleQuantityModal}
                onClose={closeQuantiryModal}
            />
        </CartWrapper>
    );
};

export default CartItem