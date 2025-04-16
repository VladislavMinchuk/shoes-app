import { View, FlatList } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import type { RootStackParamList, TabParamList } from '../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<TabParamList, 'Category'>;

const categories = ['Одяг', 'Електроніка', 'Аксесуари'];

export default function CategoryScreen({ navigation }: Props) {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <CategoryCard title={item} onPress={() => navigation.navigate('Home')} />
      )}
    />
  );
}