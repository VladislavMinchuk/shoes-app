import styled from 'styled-components/native';
import { COLORS } from '../../const';

export const HeaderBlock = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 16px;
    background-color: transparent;
`;

export const FooterBlock = styled.View`
    padding: 16px;
    background-color: ${COLORS.zinc_500}
`;
