import styled from 'styled-components/native';
import { COLORS, THEME } from '../../const';

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
    z-index: 10;
`;

export const FooterBlock = styled.View`
    padding: 16px;
    background-color: ${COLORS.white};
    border-top-width: 2px;
    border-top-color: ${THEME.secondaryColor};
`;
