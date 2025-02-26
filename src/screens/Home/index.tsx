import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../../store';
import {getAllProducts} from '../../store/actions/productsActions';
import {useAppDispatch} from '../../utils/hooks';
import {getAllCategories} from '../../store/actions/categoriesActions';
import {SafeAreaView} from 'react-native-safe-area-context';
import Categories from '../../widgets/categories';

const Home: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Categories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
export default Home;
