import { FlatList } from 'react-native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
import CategoryCard from '../../components/CategoryCard';
import { Container, SectionTitle } from '../../components/UI';
import { THEME } from '../../const';
import { RootStackParamList, TabParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<TabParamList, 'Category'>;
type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProductList'>;

const categories = [
    {
        title: 'Жіноче взуття',
        img: require('../../assets/product-img-5.jpg'),

    },
    {
        title: 'Чоловіче взуття',
        img: require('../../assets/product-img-6.jpg'),
    },
    {
        title: 'Дитяче взуття',
        img: require('../../assets/product-img-4.jpg'),
    }
];

export const CategorySetion = () => {
  const navigation = useNavigation<NavigationProp>();
  const goToList = (title: string) => {
    navigation.navigate('ProductList', { pageTitle: title });
  };
  
  return (
    <Container>
        <Container style={{ alignItems: 'center', flexDirection: 'row' }}>
            <MaterialIcons name="format-list-bulleted" size={35} color={THEME.secondaryColor} />
            <SectionTitle>Категорії взуття</SectionTitle>
        </Container>
        <FlatList
          data={categories}
          keyExtractor={({ title, img }) => title}
          scrollEnabled={false}
          renderItem={({item}) => (
            <CategoryCard title={item.title} image={item.img} onPress={() => goToList(item.title)} />
          )}
        />
    </Container>
  );
};

export default CategorySetion;