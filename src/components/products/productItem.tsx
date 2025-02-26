import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Product} from '../../models/data/productsState';
import {ProductItemProps} from '../../models/ui/productItemProps';

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <View>
      <Text>{product.title}</Text>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({});
