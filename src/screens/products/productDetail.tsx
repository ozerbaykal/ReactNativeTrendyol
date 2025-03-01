import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useAppDispatch} from '../../utils/hooks';
import {getProductDetail} from '../../store/actions/productsActions';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {height, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import Button from '../../components/ui/button';
import Rate from '../../components/products/rate';
import FavoritesButton from '../../components/favorites/favoritesButton';

const ProductDetail: React.FC = ({route}) => {
  const dispatch = useAppDispatch();
  const {productId} = route.params;
  const {product} = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProductDetail({id: productId}));
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <View style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <FavoritesButton product={product} />
            <Image
              source={{uri: product?.image}}
              style={styles.image}
              resizeMode="center"
            />
          </View>
          <Text style={styles.category}>{product.category?.toUpperCase()}</Text>

          <Text style={styles.title}>{product?.title}</Text>
          {product.rating && <Rate rating={product.rating} />}
          <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
      </View>

      <View style={styles.priceContainer}>
        <View style={{flex: 1}}>
          <Text style={styles.price}>${product?.price}</Text>
          <Text style={styles.cargo}>Kargo Bedava</Text>
        </View>
        <View style={{flex: 2, justifyContent: 'center'}}>
          <Button />
        </View>
      </View>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  image: {
    width: width * 0.5,
    height: height * 0.3,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    lineHeight: 25,
  },
  description: {
    fontSize: 16,
  },
  category: {
    fontSize: 18,
    color: Colors.PRIMARY,
    marginVertical: 10,
    fontWeight: '600',
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
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
});
