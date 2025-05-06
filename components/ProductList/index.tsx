import { FlatList, View, Dimensions, StyleSheet } from 'react-native';
import ProductCard from '../../components/ProductCard';
import { Product } from '../../store/interfaces';

type ProductListProps = {
  products: Product[],
  ListHeaderComponent?: React.ReactElement,
};

const screenWidth = Dimensions.get('window').width;

const getNumColumns = () => {
  if (screenWidth >= 1024) return 4; // landscape
  if (screenWidth >= 768) return 3;  // portrait
  return 2; // mobile
};

const ProductList: React.FC<ProductListProps> = ({ products, ListHeaderComponent }) => {
  const numColumns = getNumColumns();
  const itemSpacing = 16;
  const totalSpacing = itemSpacing * (numColumns + 1);
  const itemWidth = (screenWidth - totalSpacing) / numColumns;

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      ListHeaderComponent={ListHeaderComponent}
      contentContainerStyle={styles.container}
      columnWrapperStyle={{ gap: itemSpacing, marginBottom: itemSpacing }}
      renderItem={({ item }) => (
        <View style={{ width: itemWidth }}>
          <ProductCard product={item} cardSize='md' onPress={() =>{}} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});

export default ProductList;