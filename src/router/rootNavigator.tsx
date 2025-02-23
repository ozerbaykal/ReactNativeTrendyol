import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';


const RootNavigator: React.FC = () => {

  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default RootNavigator;
