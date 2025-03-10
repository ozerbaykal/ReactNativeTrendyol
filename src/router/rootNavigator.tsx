import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {AUTHNAVIGATOR, PRODUCTSNAVIGATOR, TABNAVIGATOR} from '../utils/routes';
import ProductList from '../screens/products';
import ProductDetail from '../screens/products/productDetail';
import {Colors} from '../theme/colors';
import Login from '../screens/login';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {useAppDispatch} from '../utils/hooks';
import {checkUser} from '../store/slice/authSlice';

const RootNavigator: React.FC = () => {
  const dispatch = useAppDispatch();
  const getState = async () => {
    const token = await AsyncStorage.getItem('token');
    dispatch(checkUser(token));
  };

  useEffect(() => {
    getState();
  }, []);

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: Colors.BLACK,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TABNAVIGATOR.TABNAVIGATOR}
        component={TabNavigator}
      />
      <Stack.Screen
        name={PRODUCTSNAVIGATOR.PRODUCTLIST}
        component={ProductList}
      />
      <Stack.Screen
        options={{
          headerBackTitle: 'Back',
        }}
        name={PRODUCTSNAVIGATOR.PRODUCTDETAIL}
        component={ProductDetail}
      />
      <Stack.Screen name={AUTHNAVIGATOR.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
