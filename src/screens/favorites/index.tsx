import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import ProductItem from '../../components/products/productItem';

const Favorites: React.FC = () => {
  const {favorites} = useSelector((state: RootState) => state.favorites);

  return (
    <View style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={favorites}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      </View>
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
export default Favorites;
