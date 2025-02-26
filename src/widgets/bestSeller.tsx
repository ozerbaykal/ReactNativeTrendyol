import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import WidgetHeaders from '../components/widgets/widgetHeaders';
import {useAppDispatch} from '../utils/hooks';
import {getBestSellerProducts} from '../store/actions/productsActions';
import {useSelector} from 'react-redux';
import {RootState} from '../store';
import ProductItem from '../components/products/productItem';

const BestSeller: React.FC = () => {
  const bestSeller = useSelector(
    (state: RootState) => state.products.bestSellerProducts,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBestSellerProducts({}));
  }, []);

  return (
    <View>
      <WidgetHeaders title="Çok Satan Ürünler" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={bestSeller}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default BestSeller;

const styles = StyleSheet.create({});
