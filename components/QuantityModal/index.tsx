import { TextInput, View, Text, KeyboardAvoidingView, Platform } from "react-native";
import ModalWrapper from "../Modal";
import { PrimaryButton, SecondaryButton } from "../UI";
import { Entypo } from "@expo/vector-icons";

export type QuantityModalProps = {
    isVisible: boolean,
    baseQuantity: string,
    setBaseQuantity: (value: string) => void,
    onDecline: () => void,
    onAccept: () => void,
    onClose: () => void,
};

const QuantityModal: React.FC<QuantityModalProps> = ({ isVisible, baseQuantity, setBaseQuantity, onClose, onDecline, onAccept }) => {
    
    return (
        <>
            <ModalWrapper visible={isVisible} onClose={() => onClose()}>
                <Text style={{ fontSize: 18, marginBottom: 10, textAlign: 'center' }}>Введіть кількість</Text>
                <TextInput
                    value={baseQuantity}
                    onChangeText={setBaseQuantity}
                    placeholder="Кількість"
                    keyboardType="number-pad"
                    style={{
                        borderWidth: 1,
                        borderColor: '#ccc',
                        padding: 10,
                        borderRadius: 8,
                        marginBottom: 15,
                    }}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <PrimaryButton onPress={() => {onAccept();}}>
                        <Entypo name="check" size={24} color="white" />
                    </PrimaryButton>
                    <SecondaryButton onPress={() => {onDecline();}}>
                        <Entypo name="cross" size={24} color="white" />
                    </SecondaryButton>
                </View>
            </ModalWrapper>
        </>
    )
};

export default QuantityModal;