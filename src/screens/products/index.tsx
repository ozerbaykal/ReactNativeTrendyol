import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import ProductItem from '../../components/products/productItem';

const ProductList: React.FC = () => {
  const {popularProducts} = useSelector((state: RootState) => state.products);

  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={popularProducts}
        renderItem={({item}) => <ProductItem product={item} />}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
