import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CartItem from '../../components/cart/cartItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

const Cart: React.FC = () => {
  const {cart} = useSelector((state: RootState) => state.cart);
  console.log(cart);
  return (
    <View style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cart}
          renderItem={({item}) => <CartItem product={item} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Cart;
