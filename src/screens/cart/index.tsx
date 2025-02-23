import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Cart: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
export default Cart;
