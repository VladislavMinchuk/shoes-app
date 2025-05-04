import React, { ReactNode } from 'react';
import { Modal, TouchableWithoutFeedback, View } from 'react-native';
import styled from 'styled-components/native';

interface ModalWrapperProps {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ visible, onClose, children }) => {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <Overlay>
          <TouchableWithoutFeedback>
            <ModalContainer>
              {children}
            </ModalContainer>
          </TouchableWithoutFeedback>
        </Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalWrapper;

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.View`
  width: 80%;
  padding: 20px;
  background-color: white;
  border-radius: 12px;
  elevation: 5;
`;