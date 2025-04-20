import { FlatList } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import type { TabParamList } from '../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Container, SectionTitle } from '../components/UI';
import { MaterialIcons } from '@expo/vector-icons';
import { THEME } from '../const';
type Props = NativeStackScreenProps<TabParamList, 'Category'>;

const categories = ['Жіноче', 'Чоловіче', 'Дитяче'];

export const CategorySetion = () => {
  return (
    <Container>
        <Container style={{ alignItems: 'center', flexDirection: 'row' }}>
            <MaterialIcons name="format-list-bulleted" size={35} color={THEME.secondaryColor} />
            <SectionTitle>Категорії взуття</SectionTitle>
        </Container>
        <FlatList
          data={categories}
          keyExtractor={(item) => item}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <CategoryCard title={item} onPress={() => {}} />
          )}
        />
    </Container>
  );
};

export default CategorySetion;