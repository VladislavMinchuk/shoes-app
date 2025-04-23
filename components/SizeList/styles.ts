import styled from "styled-components/native";
import { THEME, COLORS } from "../../const";
import { PrimaryButton } from "../UI";

export const SizeRow = styled.View`
  margin-bottom: 20px;
`;

export const SizeOption = styled(PrimaryButton)<{ isSelected: boolean, disabled: boolean }>`
  border-width: 1px;
  padding: 8px 12px;
  margin-right: 10px;
  background-color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? THEME.primaryColor : "transparent"};
  border-color: ${THEME.primaryColor};
  opacity: ${({ disabled }: { disabled: boolean }) => (disabled ? 0.5 : 1)};
`;

export const SizeText = styled.Text<{ isSelected: boolean; isDisabled: boolean }>`
  font-size: 16px;
  color: ${({ isSelected }: { isSelected: boolean }) => (isSelected ? `${COLORS.white}` : `${COLORS.zinc_800}`)};
  opacity: ${({ isDisabled }: { isDisabled: boolean }) => (isDisabled ? 0.5 : 1)};
`;
