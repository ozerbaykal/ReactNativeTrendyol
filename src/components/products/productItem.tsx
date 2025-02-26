import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Product} from '../../models/data/productsState';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {height, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../../utils/routes';

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTDETAIL)}>
      <Image
        resizeMode="contain"
        source={{uri: product.image}}
        style={styles.image}
      />
      <Text numberOfLines={2} style={styles.title}>
        {product.title}
      </Text>
      <Text style={styles.price}>${product.price}</Text>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: width * 0.4,
    minHeight: height * 0.25,
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
    marginHorizontal: 10,
    padding: 5,
    borderRadius: 10,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontSize: 18,
    color: Colors.PRIMARY,
    fontWeight: 'bold',
  },
  image: {
    width: width * 0.25,
    height: height * 0.15,
    alignSelf: 'center',
  },
});
