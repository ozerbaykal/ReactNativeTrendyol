import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';
import {width} from '../../utils/constants';
import {ProductItemProps} from '../../models/ui/productItemProps';

const FavoritesButton: React.FC<ProductItemProps> = ({product}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Icon
        name={product.isFavorite ? 'heart' : 'heart-outline'}
        size={24}
        color={Colors.PRIMARY}
      />
    </TouchableOpacity>
  );
};

export default FavoritesButton;

const styles = StyleSheet.create({
  container: {
    width: width * 0.08,
    height: width * 0.08,

    position: 'absolute',
    right: 5,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 5,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.WHITE,
  },
});
