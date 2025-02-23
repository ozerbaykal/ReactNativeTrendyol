import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import TabNavigator from './tabNavigator';

const RootNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Tab" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
