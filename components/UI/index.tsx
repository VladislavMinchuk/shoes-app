import styled from 'styled-components/native';
import { stylesVar } from '../../const';

export const Title = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
`;

export const PrimaryButton = styled.TouchableOpacity`
    padding: 10px 20px;
    background-color: ${stylesVar.color.yellow_600};
`;

export const SecondaryButton = styled.TouchableOpacity`
    padding: 10px 20px;
    background-color: ${stylesVar.color.cyan_800};
`;
    
export const WhiteButtonText = styled.Text`
    color: ${stylesVar.color.white};
    font-size: 16px;
    text-align: center;
`;

export const ScrollContainer = styled.ScrollView`
    flex: 1;
    background-color: #fff;
`;

export const BackgroundImage = styled.ImageBackground`
    flex: 1;
    resize-mode: cover;
    justify-content: center;
    align-items: center;
`;

export const FullscreenImage = styled.Image`
    width: 100%;
    height: 100%;
`;

export const ProductImage = styled.Image`
    width: 100%;
    height: 150px;
    margin-bottom: 10px;
`;

export const ProductPriceText = styled.Text`
    font-size: 16px;
    padding: 5px 0;
`;

export const ProductTitleText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 auto;
`;