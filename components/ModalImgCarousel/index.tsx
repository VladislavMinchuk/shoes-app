import React from 'react';
import { Modal, Dimensions } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import { AntDesign } from '@expo/vector-icons';
import { CloseButton } from './styles';

interface ModalImgCarouselProps {
  visible: boolean;
  images: any[];
  initialIndex: number;
  onClose: () => void;
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const ModalImgCarousel: React.FC<ModalImgCarouselProps> = ({
  visible,
  images,
  initialIndex,
  onClose,
}) => {
  return (
    <Modal visible={visible} transparent={true}>
      <ImageViewer
        saveToLocalByLongPress={false}
        imageUrls={images}
        index={initialIndex}
        enableSwipeDown
        onSwipeDown={onClose}
        renderHeader={() => (
          <CloseButton onPress={onClose}>
            <AntDesign name="close" size={30} color="#fff" />
          </CloseButton>
        )}
        backgroundColor="black"
        enablePreload
      />
    </Modal>
  );
};

export default ModalImgCarousel;