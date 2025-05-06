import React, { ReactNode } from 'react';
import { KeyboardAvoidingView, Modal, Platform, TouchableWithoutFeedback, View } from 'react-native';
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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
          <Overlay>
            <TouchableWithoutFeedback>
              <ModalContainer>
                {children}
              </ModalContainer>
            </TouchableWithoutFeedback>
          </Overlay>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default ModalWrapper;

const Overlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: flex-end;
  align-items: center;
`;

const ModalContainer = styled.View`
  width: 100%;
  padding: 20px 20px 50px;
  background-color: white;
`;