import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import Categories from '../../widgets/categories';
import ProductItem from '../../components/products/productItem';
import {useAppDispatch} from '../../utils/hooks';
import {getAllProducts} from '../../store/actions/productsActions';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {Colors} from '../../theme/colors';

const ProductList: React.FC = () => {
  const {popularProducts, isLoading} = useSelector(
    (state: RootState) => state.products,
  );
  const {selectedCategory} = useSelector(
    (state: RootState) => state.categories,
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts({category: selectedCategory}));
  }, [selectedCategory]);

  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size={'large'} color={Colors.PRIMARY} />
        </View>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center'}}
          numColumns={2}
          data={popularProducts}
          renderItem={({item}) => <ProductItem product={item} />}
        />
      )}
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({});
