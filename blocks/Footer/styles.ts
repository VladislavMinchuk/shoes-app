import styled from "styled-components/native";
import { COLORS, THEME } from "../../const";

export const FooterBlock = styled.View`
    padding: 16px;
    background-color: ${COLORS.white};
    border-top-width: 2px;
    border-top-color: ${THEME.secondaryColor};
`;