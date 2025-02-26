import {FlatList, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import type {RootState} from '../store';
import {getAllProducts} from '../store/actions/productsActions';
import {useAppDispatch} from '../utils/hooks';
import {getAllCategories} from '../store/actions/categoriesActions';
import CategoryItem from '../components/categories/categoryItem';

const Categories: React.FC = () => {
  const {categories}: any = useSelector<RootState>(state => state.categories);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories({}));
  }, []);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={categories}
      renderItem={({item}) => <CategoryItem category={item} />}
    />
  );
};

export default Categories;
