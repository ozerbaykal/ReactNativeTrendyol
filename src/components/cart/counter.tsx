import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/feather';
import {CounterProps} from '../../models/ui/counterProps';
import {Colors} from '../../theme/colors';
import {useDispatch} from 'react-redux';
import {decreaseQuantity, increaseQuantity} from '../../store/slice/cartSlice';

const Counter: React.FC<CounterProps> = ({quantity, product}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatch(decreaseQuantity(product))}>
        <Icon name="minus" size={22} style={{color: Colors.BLACK}} />
      </TouchableOpacity>
      <View style={styles.quantityContainer}>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
      <TouchableOpacity onPress={() => dispatch(increaseQuantity(product))}>
        <Icon name="plus" size={22} style={{color: Colors.BLACK}} />
      </TouchableOpacity>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  quantity: {
    color: Colors.PRIMARY,
    fontSize: 18,
    fontWeight: '600',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: Colors.GRAY,
    borderRadius: 20,
    flexDirection: 'row',
    padding: 5,
    gap: 5,
  },
  quantityContainer: {
    backgroundColor: Colors.SOFT_ORANGE,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
});
