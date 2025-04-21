import React from "react";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { COLORS, THEME } from "../const";
import { PrimaryButton } from "./UI";
import { PoductLabel } from "./UI/ProductScreen";

type SizeListProps = {
  sizes: number[];
  selectedSize: number | null;
  onSelectSize?: (item: number) => void;
  disabledSizes?: number[];
};

const SizeList: React.FC<SizeListProps> = ({
  sizes,
  selectedSize,
  onSelectSize,
  disabledSizes = [],
}) => {
  return (
    <SizeRow>
      <PoductLabel>Розміри:</PoductLabel>
      <FlatList
        data={sizes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item }) => {
          const isSelected = selectedSize === item;
          const isDisabled = disabledSizes.includes(item);

          return (
            <SizeOption
              onPress={() => !isDisabled && onSelectSize?.(item)}
              disabled={isDisabled}
              isSelected={isSelected}
            >
              <SizeText isSelected={isSelected} isDisabled={isDisabled}>
                {item}
              </SizeText>
            </SizeOption>
          );
        }}
      />
    </SizeRow>
  );
};

export default SizeList;

const SizeRow = styled.View`
  margin-bottom: 20px;
`;

const SizeOption = styled(PrimaryButton)<{ isSelected: boolean, disabled: boolean }>`
  border-width: 1px;
  padding: 8px 12px;
  margin-right: 10px;
  background-color: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? THEME.primaryColor : "transparent"};
  border-color: ${THEME.primaryColor};
  opacity: ${({ disabled }: { disabled: boolean }) => (disabled ? 0.5 : 1)};
`;

const SizeText = styled.Text<{ isSelected: boolean; isDisabled: boolean }>`
  font-size: 16px;
  color: ${({ isSelected }: { isSelected: boolean }) => (isSelected ? `${COLORS.white}` : `${COLORS.zinc_800}`)};
  opacity: ${({ isDisabled }: { isDisabled: boolean }) => (isDisabled ? 0.5 : 1)};
`;
