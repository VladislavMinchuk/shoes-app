import styled from 'styled-components/native';
import { COLORS, THEME } from '../../const';

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;

export const Container = styled.View`
    padding: 15px 10px;
`;

export const SectionTitle = styled.Text`
  color: ${THEME.primaryColor};
  font-size: 20px;
  font-weight: bold;
  margin: 16px;
`;


export const PrimaryButton = styled.TouchableOpacity`
    padding: 10px 20px;
    background-color: ${THEME.primaryColor};
`;

export const SecondaryButton = styled.TouchableOpacity`
    padding: 10px 20px;
    background-color: ${THEME.secondaryColor};
`;

export const WhiteButtonText = styled.Text`
    color: ${COLORS.white};
    font-size: 16px;
    text-align: center;
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    background-color: #fff;
`;

export const BackgroundImage = styled.ImageBackground`
    flex: 1;
    resize: cover;
    justify-content: center;
    align-items: center;
`;

export const FullscreenImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const CartBtnStyled = styled.TouchableOpacity`
    position: relative;
    width: 25;
    height: 25;
    color: ${COLORS.yellow_900};
`

export const CartBtnNnumber = styled.View`
    position: absolute;
    top: -10;
    right: -10;
    width: 20;
    height: 20;
    justify-content: center;
    align-items: center;
    background-color: ${THEME.secondaryColor};
    border-radius: 50%;
    overflow: hidden;
    z-index: 1;
`
