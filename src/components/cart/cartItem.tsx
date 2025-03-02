import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CartItemProps} from '../../models/ui/cartItemProps';
import {height, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import Delivery from '../badges/delivery';
import FreeCargo from '../badges/freeCargo';
import Discount from '../badges/discount';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../../utils/routes';
import Counter from './counter';

const CartItem: React.FC<CartItemProps> = ({product}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTDETAIL, {
          productId: product.id,
        })
      }>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: product.image}}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={{flex: 1, paddingHorizontal: 10}}>
        <View>
          <Text style={styles.title}>{product.title}</Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 10}}>
          <Delivery />
          <FreeCargo />
          <Discount />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Counter product={product} quantity={product.quantity} />
          </View>
          <View>
            <Text style={styles.price}>${product.price}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  image: {
    width: width * 0.2,
    height: height * 0.1,
    alignSelf: 'center',
  },
  container: {
    flexDirection: 'row',
    padding: 5,
    borderBottomWidth: 0.5,
    borderBottomColor: Colors.GRAY,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    color: Colors.PRIMARY,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 20,
    fontWeight: '600',
  },
});
