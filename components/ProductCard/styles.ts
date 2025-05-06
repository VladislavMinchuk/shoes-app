import styled from 'styled-components/native';
import { PrimaryButton } from "../UI/index";
import { CARD_IMG_HEIGHT, CARD_SIZE, COLORS, THEME } from '../../const';
import { SizeCardType } from '../ProductCard';

interface IProductCardStyledProps {
    cardSize: SizeCardType
};

interface IProductImgStyledProps {
    cardSize: SizeCardType
};

export const ProductCardStyled = styled.View<IProductCardStyledProps>`
    max-width: ${({ cardSize }: IProductCardStyledProps) => CARD_SIZE[cardSize].width};
    width: 100%;
    /* height: ${({ cardSize }: IProductCardStyledProps) => CARD_SIZE[cardSize].height}; */
    margin: 0 0 10px;
    border-bottom-width: 1px;
    border-bottom-color: ${THEME.primaryColor};
    padding-bottom: 20px;
`;
    
export const ProductImage = styled.Image<IProductImgStyledProps>`
    height: ${({ cardSize }: IProductImgStyledProps) => CARD_IMG_HEIGHT[cardSize]};
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
    color: ${COLORS.white};
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
    margin-top: auto;
`;
