import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WidgetHeaders from '../components/widgets/widgetHeaders';

const PopularProducts = () => {
  return (
    <View>
      <WidgetHeaders title="Populer Ürünler" />
      <Text>PopularProducts</Text>
    </View>
  );
};

export default PopularProducts;

const styles = StyleSheet.create({});
