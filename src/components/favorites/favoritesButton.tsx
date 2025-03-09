import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';
import {width} from '../../utils/constants';
import {ProductItemProps} from '../../models/ui/productItemProps';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {useNavigation} from '@react-navigation/native';
import {AUTHNAVIGATOR} from '../../utils/routes';
import {useAppDispatch} from '../../utils/hooks';
import {addFavorite} from '../../store/slice/favoriteSlice';

const FavoritesButton: React.FC<ProductItemProps> = ({product}) => {
  const {isLogin} = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const checkLogin = () => {
    if (!isLogin) {
      Alert.alert(
        'Giriş yapınız',
        'Favorilere eklemek için,lütfen giriş yapınız!',
        [
          {
            text: 'iptal',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Giriş Yap',
            onPress: () => navigation.navigate(AUTHNAVIGATOR.LOGIN),
          },
        ],
      );
    } else {
      dispatch(addFavorite(product));
    }
  };

  return (
    <TouchableOpacity onPress={checkLogin} style={styles.container}>
      <Icon
        name={product.isFavorite ? 'heart' : 'heart-outline'}
        size={24}
        color={Colors.PRIMARY}
      />
    </TouchableOpacity>
  );
};

export default FavoritesButton;

const styles = StyleSheet.create({
  container: {
    width: width * 0.08,
    height: width * 0.08,

    position: 'absolute',
    right: 5,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 5,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.23,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: Colors.WHITE,
  },
});
