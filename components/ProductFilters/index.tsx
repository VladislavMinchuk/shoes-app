import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  FilterContainer,
  Section,
  SectionTitle,
  InputRow,
  StyledInput,
  ColorsContainer,
  ColorBox,
  SizesContainer,
  SizeBox,
  InputCol,
} from './styles';

const COLORS = ['#000000', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
const SIZES = ['36', '37', '38', '39', '40', '41', '42', '43'];

const ProductFilter: React.FC = () => {
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const handleColorPress = (color: string) => {
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const handleSizePress = (size: string) => {
    setSelectedSizes(prev =>
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    );
  };

  const handlePriceChange = (value: string, setter: (val: string) => void) => {
    const numeric = value.replace(/[^0-9]/g, '');
    setter(numeric);
  };

  return (
    <FilterContainer>
      <Section>
        <SectionTitle>Ціна (₴)</SectionTitle>
        <InputRow>
          <InputCol>
            <SectionTitle>Від</SectionTitle>
            <StyledInput
              keyboardType="numeric"
              placeholder="від"
              value={minPrice}
              onChangeText={(value: string) => handlePriceChange(value, setMinPrice)}
              />
          </InputCol>
          <InputCol>
              <SectionTitle>До</SectionTitle>
              <StyledInput
                keyboardType="numeric"
                placeholder="до"
                value={maxPrice}
                onChangeText={(value: string) => handlePriceChange(value, setMaxPrice)}
              />
          </InputCol>
        </InputRow>
      </Section>

      <Section>
        <SectionTitle>Колір</SectionTitle>
        <ColorsContainer>
          {COLORS.map(color => (
            <ColorBox
              key={color}
              color={color}
              selected={selectedColors.includes(color)}
              onPress={() => handleColorPress(color)}
            />
          ))}
        </ColorsContainer>
      </Section>

      <Section>
        <SectionTitle>Розмір</SectionTitle>
        <SizesContainer>
          {SIZES.map(size => (
            <SizeBox
              key={size}
              selected={selectedSizes.includes(size)}
              onPress={() => handleSizePress(size)}
            >
              <Text>{size}</Text>
            </SizeBox>
          ))}
        </SizesContainer>
      </Section>
    </FilterContainer>
  );
};

export default ProductFilter;
