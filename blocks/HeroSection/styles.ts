import styled from "styled-components/native";
import { COLORS, THEME } from "../../const";
import { Dimensions } from "react-native";

const screenHeight = Dimensions.get('window').height;

export const HeroTouchable = styled.Pressable`
    height: ${screenHeight - 80}px;
`;

export const HeroTitle = styled.Text`
    font-family: 'RobotoSerif_700Bold';
    font-size: 36px;
    color: ${COLORS.white};
    background-color: ${THEME.secondaryColorOutline};
    width: 100%;
    text-align: center;
    padding: 10px 0;
`;

export const HeroImage = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ButtonOutline = styled.Text`
    position: absolute;
    bottom: 120;
    padding: 10px 20px;
    background-color: ${THEME.primaryColorOutline};
    /* border: 1px solid ${THEME.secondaryColor};   */
    color: ${COLORS.white};
    font-size: 24;
    text-align: center;
`;
