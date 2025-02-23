import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Search from '../screens/search';
import Favorites from '../screens/favorites';
import Cart from '../screens/cart';
import Profile from '../screens/profile';
import {TABNAVIGATOR} from '../utils/routes';
import {Colors} from '../theme/colors';
import TabIcon from '../components/router/tabIcon';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarInactiveTintColor: Colors.BLACK,
        tabBarIcon: ({size, focused, color}) => {
          return (
            <TabIcon
              route={route}
              size={size}
              focused={focused}
              color={color}
            />
          );
        },
      })}>
      <Tab.Screen name={TABNAVIGATOR.HOME} component={Home} />
      <Tab.Screen name={TABNAVIGATOR.SEARCH} component={Search} />

      <Tab.Screen name={TABNAVIGATOR.FAVORİTES} component={Favorites} />
      <Tab.Screen name={TABNAVIGATOR.CART} component={Cart} />
      <Tab.Screen name={TABNAVIGATOR.PROFİLE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
