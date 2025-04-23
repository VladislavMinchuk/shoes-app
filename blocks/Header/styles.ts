import styled from "styled-components/native";
import { COLORS, stikyHeaderHeight } from "../../const";

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
    height: ${stikyHeaderHeight};
    z-index: 10;
`;