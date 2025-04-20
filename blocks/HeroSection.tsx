import styled from "styled-components/native";
import { Dimensions } from 'react-native';
import { COLORS, THEME } from "../const";

const screenHeight = Dimensions.get('window').height;

type HeroSectionProps = {
    onPress: () => void,
    title: string
};

const HeroTouchable = styled.TouchableOpacity`
    height: ${screenHeight - 80}px;
`;

const HeroTitle = styled.Text`
    font-family: 'RobotoSerif_700Bold';
    font-size: 36px;
    color: ${COLORS.white};
    background-color: ${THEME.secondaryColorOutline};
    width: 100%;
    text-align: center;
    padding: 10px 0;
`;

const HeroImage = styled.ImageBackground`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const ButtonOutline = styled.Text`
    position: absolute;
    bottom: 150;
    padding: 10px 20px;
    background-color: ${THEME.primaryColorOutline};
    /* border: 1px solid ${THEME.secondaryColor};   */
    color: ${COLORS.white};
    font-size: 24;
    text-align: center;
`;

const HeroSection: React.FC<HeroSectionProps> = ({ onPress, title }) => {
    return (
        <HeroTouchable onPress={onPress}>
            <HeroImage source={require('../assets/product-img-4.jpg')} resizeMode="cover">
                <HeroTitle>{ title } </HeroTitle>
                <ButtonOutline>Переглянути</ButtonOutline>
            </HeroImage>
        </HeroTouchable>
    );
};

export default HeroSection;