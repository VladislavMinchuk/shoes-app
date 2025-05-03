import styled from "styled-components/native";
import { SizeCardType } from "../ProductCard";
import { CARD_IMG_HEIGHT, THEME } from "../../const";
import { PrimaryButton } from "../UI";

interface IProductImgStyledProps {
    cardSize: SizeCardType
};

export const CartWrapper = styled.View`
    flex: 1;
    padding: 10px;
    flex-wrap: nowrap;
    flex-direction: row;
    margin: 0 0 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${THEME.primaryColor};
    padding-bottom: 20px;
`;

export const PriceWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: auto;
`;

export const LabelValueText = styled.Text`
    color: ${THEME.primaryColor};
`;

export const ImageWrapper = styled.ImageBackground`
    flex: 1;
    justify-content: center;
`;

export const CartProductImage = styled.Image<IProductImgStyledProps>`
    height: ${({ cardSize }: IProductImgStyledProps) => CARD_IMG_HEIGHT[cardSize]};
    width: 150px;
    margin-right: 10px;
`;

export const ButtonControls = styled.TouchableOpacity`
`;

export const QuantityBox = styled.TouchableOpacity`
    width: 30px;
    justify-content: center;
    align-items: center;
`;