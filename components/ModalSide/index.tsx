import { ReactNode } from "react";
import { Pressable, View } from "react-native";
import Modal from "react-native-modal";

type ModalSideProps = {
    modalVisible: boolean,
    children: ReactNode,
    backgroundColor?: string,
    onclose?: () => void,
    onBackButtonPress?: () => void,
    onBackdropPress?: () => void,
    onSwipeComplete?: () => void,
    onSwipeStart?: () => void,
    onModalHide?: () => void,
};

const ModalSide: React.FC<ModalSideProps> = ({
    children,
    modalVisible,
    backgroundColor='white',
    onclose,
    onBackButtonPress,
    onBackdropPress,
    onSwipeComplete,
    onSwipeStart,
    onModalHide
}) => {
    return (
        <Modal
            isVisible={modalVisible}
            animationIn="slideInRight"
            animationOut="slideOutRight"
            onBackButtonPress={onBackButtonPress}
            onBackdropPress={onBackdropPress}
            onSwipeComplete={onSwipeComplete}
            onSwipeStart={onSwipeStart}
            onModalHide={onModalHide}
            style={{ flex: 1, backgroundColor, padding: 0, paddingTop: 40, margin: 0 }}
        >   
            {children}
        </Modal>
    );
};

export default ModalSide;