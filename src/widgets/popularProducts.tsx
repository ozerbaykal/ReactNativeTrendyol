import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import WidgetHeaders from '../components/widgets/widgetHeaders';
import {useAppDispatch} from '../utils/hooks';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import {getAllProducts} from '../store/actions/productsActions';
import ProductItem from '../components/products/productItem';

const PopularProducts = () => {
  const popularProducts = useSelector(
    (state: RootState) => state.products.popularProducts,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts({}));
  }, []);

  return (
    <View>
      <WidgetHeaders title="Populer Ürünler" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={popularProducts}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default PopularProducts;

const styles = StyleSheet.create({});
