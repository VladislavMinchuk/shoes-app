import styled from "styled-components/native";
import { COLORS, THEME } from "../../const";
import { PrimaryButton, PrimaryButtonOutline, SecondaryButton, SecondaryButtonOutline } from "../../components/UI";

export const FilterWrapper = styled.View`
    flex: 1;
    background-color: ${COLORS.white};
    padding: 20px;
`;

export const CloseButton = styled.Pressable`
    margin-left: auto;
    margin-bottom: 20px;
`;

export const FilterButton = styled(SecondaryButton)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100px;
    padding: 5px;
    margin-left: auto;
`;

export const ApplyButton = styled(PrimaryButton)`
    align-items: center;
`;
