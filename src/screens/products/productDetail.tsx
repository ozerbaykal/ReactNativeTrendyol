import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

const ProductDetail: React.FC = () => {
  return (
    <View style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <Text>ProductDetail</Text>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
