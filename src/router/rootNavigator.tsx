import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabNavigator';
import {TABNAVIGATOR} from '../utils/routes';

const RootNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={TABNAVIGATOR.TABNAVIGATOR} component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
