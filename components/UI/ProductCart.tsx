import styled from 'styled-components/native';
import { PrimaryButton } from "./index";
import { CARD_IMG_HEIGHT, CARD_WIDTHS, COLORS } from '../../const';
import { WidthCardType } from '../ProductCard';

interface IProductCardStyledProps {
    widthCard: WidthCardType
};

interface IProductImgStyledProps {
    heightCard: WidthCardType
};

export const ProductCardStyled = styled.View<IProductCardStyledProps>`
    width: ${({ widthCard }: IProductCardStyledProps) => CARD_WIDTHS[widthCard]};
    margin: 0 0 10px;
`;
    
export const ProductImage = styled.Image<IProductImgStyledProps>`
    height: ${({ heightCard }: IProductImgStyledProps) => CARD_IMG_HEIGHT[heightCard]};
    width: 100%;
    margin-bottom: 10px;
`;

export const ProductPriceText = styled.Text`
    font-size: 16px;
    padding: 5px 0;
    font-weight: bold;
`;

export const ProductTitleText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 auto;
    padding-bottom: 15px;
`;

export const ProductAddBtnTxt = styled.Text`
    font-size: 26px;
    color: ${COLORS.white}
`;

export const ProductAddBtn = styled(PrimaryButton)`
    font-size: 26px;
    width: 40px;
    height: 40px;
    padding: 0;
    align-items: center;
    justify-content: center;
`;
    
export const ProductCardFooter = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`;
