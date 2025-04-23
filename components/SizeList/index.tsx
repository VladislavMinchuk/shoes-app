import React from "react";
import { FlatList } from "react-native";
import { PoductLabel } from "../UI";
import { SizeRow, SizeOption, SizeText } from "./styles";

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