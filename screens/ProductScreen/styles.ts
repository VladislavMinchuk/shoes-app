import styled from "styled-components/native";
import { PrimaryButton } from "../../components/UI";
import { THEME } from "../../const";

export const CarouselContainer = styled.View`
  position: relative;
`;

export const HeartIcon = styled.TouchableOpacity`
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.8);
  padding: 8px;
  border-radius: 20px;
`;

export const Content = styled.View`
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 4px;
`;

export const Price = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: ${THEME.secondaryColor};
  margin-bottom: 6px;
`;

export const Status = styled.Text<{ isAvailable: boolean }>`
  color: ${(props: { isAvailable: boolean }) => (props.isAvailable ? 'green' : 'red')};
  font-weight: 500;
  margin-bottom: 16px;
`;

export const ColorList = styled.ScrollView`
  flex-direction: row;
  margin-bottom: 20px;
`;

export const ColorDot = styled.View`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  border: 1px solid #ccc;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #444;
  line-height: 20px;
`;

export const AddToCartButton = styled(PrimaryButton)`
  padding: 14px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;
