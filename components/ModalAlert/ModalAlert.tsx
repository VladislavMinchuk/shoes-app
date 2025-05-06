import { View, Text } from "react-native";
import ModalWrapper from "../ModalSimple";
import { PrimaryButton, SecondaryButton, WhiteText } from "../UI";

export type ModalAlertProps = {
    title: string,
    isVisible: boolean,
    onDecline: () => void,
    onAccept: () => void,
    onClose: () => void,
};

const ModalAlert: React.FC<ModalAlertProps> = ({ title, isVisible, onClose, onAccept, onDecline }) => {
    return (
        <ModalWrapper visible={isVisible} onClose={() => onClose()}>
            <Text style={{ fontSize: 18, marginBottom: 10, textAlign: 'center' }}>{title}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <PrimaryButton onPress={() => {onAccept();}}>
                    <WhiteText>Так</WhiteText>
                </PrimaryButton>
                <SecondaryButton onPress={() => {onDecline();}}>
                    <WhiteText>Ні</WhiteText>
                </SecondaryButton>
            </View>
        </ModalWrapper>
    );
};

export default ModalAlert;