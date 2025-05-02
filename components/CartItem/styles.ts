import styled from "styled-components/native";
import { SizeCardType } from "../ProductCard";
import { CARD_IMG_HEIGHT } from "../../const";

interface IProductImgStyledProps {
    cardSize: SizeCardType
};

export const CartWrapper = styled.View`
    flex: 1;
    padding: 10px;
    flex-wrap: nowrap;
    flex-direction: row;
`;

export const PriceWrapper = styled.View`
    flex-direction: row;
    align-items: center;
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