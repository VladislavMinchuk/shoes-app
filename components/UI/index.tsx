import styled from 'styled-components/native';
import { COLORS, stikyFooterHeight, stikyHeaderHeight, THEME } from '../../const';

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
    margin-top: -100px;
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
export const StickyFooter = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    padding: 16px;
    border-top-width: 1px;
    border-color: #eee;
    height: ${stikyFooterHeight};
`;

export const HeaderBlock = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 16px;
    background-color: ${COLORS.while_opacity};
    height: ${stikyHeaderHeight};
    z-index: 10;
`;

export const FooterBlock = styled.View`
    padding: 16px;
    background-color: ${COLORS.white};
    border-top-width: 2px;
    border-top-color: ${THEME.secondaryColor};
`;
