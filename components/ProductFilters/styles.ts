import styled from 'styled-components/native';
import { THEME } from '../../const';

export const FilterContainer = styled.View`
  padding: 16px;
`;

export const Section = styled.View`
  margin-bottom: 16px;
`;

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  width: 100%;
`;

export const InputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 8px;
`;

export const InputCol = styled.View`
    flex: 1;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const StyledInput = styled.TextInput`
  flex: 1;
  width: 100%;
  flex-shrink: 0;
  padding: 8px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  font-size: 14px;
`;

export const ColorsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ColorBox = styled.TouchableOpacity<{ color: string; selected: boolean }>`
  width: 32px;
  height: 32px;
  background-color: ${({ color }: { color: string }) => color};
  border-width: 2px;
  border-color: ${({ selected }: {selected: boolean}) => (selected ? THEME.secondaryColor : 'transparent')};
  border-radius: 6px;
`;

export const SizesContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SizeBox = styled.TouchableOpacity<{ selected: boolean }>`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-radius: 6px;
  border-color: ${({ selected }: { selected: boolean }) => (selected ? THEME.secondaryColor : '#ccc')};
`;
