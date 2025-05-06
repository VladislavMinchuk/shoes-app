import React from 'react';
import { useSelector } from 'react-redux';
import { RouteProp, useRoute } from '@react-navigation/native';
import { selectAllProducts } from '../../store/productSlice';
import ProductList from '../../components/ProductList';
import { View } from 'react-native';
import FilterSectoin from '../../blocks/FilterSection';
import { Title } from '../../components/UI';

type ProductListScreenRouteParams = {
  ProductList: {pageTitle: string},
};

const ProductListScreen: React.FC = () => {
  const route = useRoute<RouteProp<ProductListScreenRouteParams, 'ProductList'>>();
  const { pageTitle } = route.params;
  const products = useSelector(selectAllProducts);

  const Header = () => (
    <>
      <Title>{ pageTitle }</Title>
      <FilterSectoin />
    </>
  );

  return (
    <View>
      <ProductList
        products={products}
        ListHeaderComponent={Header()}
      />
    </View>
  );
};

export default ProductListScreen;