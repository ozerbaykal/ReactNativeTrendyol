import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import type {RootState} from '../store';
import {getAllProducts} from '../store/actions/productsActions';
import {useAppDispatch} from '../utils/hooks';
import {getAllCategories} from '../store/actions/categoriesActions';

const Categories: React.FC = () => {
  const {categories}: any = useSelector<RootState>(state => state.categories);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories({}));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={categories}
        renderItem={({item}) => <Text>{item}</Text>}></FlatList>
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
export default Categories;
