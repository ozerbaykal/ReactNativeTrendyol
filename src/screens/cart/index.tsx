import {Alert, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import CartItem from '../../components/cart/cartItem';
import {SafeAreaView} from 'react-native-safe-area-context';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Button from '../../components/ui/button';
import {Colors} from '../../theme/colors';
import {height} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {AUTHNAVIGATOR} from '../../utils/routes';

const Cart: React.FC = () => {
  const {cart, totalPrice} = useSelector((state: RootState) => state.cart);
  console.log(cart);
  const {isLogin} = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation<any>();

  const checkLogin = () => {
    if (!isLogin) {
      Alert.alert('Giriş yapınız', 'Satın Almak için,lütfen giriş yapınız', [
        {
          text: 'Çıkış',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Giriş Yap',
          onPress: () => navigation.navigate(AUTHNAVIGATOR.LOGIN),
        },
      ]);
    }
  };

  return (
    <View style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          ListEmptyComponent={
            <Text style={styles.ListEmptyComponent}>
              Sepete henüz Ürün eklemediniz !
            </Text>
          }
          showsVerticalScrollIndicator={false}
          data={cart}
          renderItem={({item}) => <CartItem product={item} />}
        />
        {cart.length == 0 ? null : (
          <View style={styles.priceContainer}>
            <View style={{flex: 1}}>
              <Text style={styles.total}>Total :</Text>
              <Text style={styles.price}>$ {totalPrice.toFixed(2)}</Text>
              <Text style={styles.cargo}>Kargo Bedava</Text>
            </View>
            <View style={{flex: 2, justifyContent: 'center'}}>
              <Button onPress={() => checkLogin()} title="Satın Al" />
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  priceContainer: {
    height: height * 0.1,
    borderTopWidth: 0.5,
    borderBlockColor: Colors.GRAY,
    padding: 15,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 19,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    textDecorationStyle: 'solid',
  },
  cargo: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.GREEN,
    textDecorationStyle: 'solid',
  },
  total: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  ListEmptyComponent: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
  },
});
export default Cart;
