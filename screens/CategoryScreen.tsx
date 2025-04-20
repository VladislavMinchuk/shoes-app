import type { TabParamList } from '../navigation/types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import CategorySetion from '../blocks/CategorySection';
type Props = NativeStackScreenProps<TabParamList, 'Category'>;

export default function CategoryScreen({ navigation }: Props) {
  return (
    <CategorySetion />
  );
}