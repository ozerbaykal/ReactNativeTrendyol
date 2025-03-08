import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';

export const defaultScreenStyle = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    //backgroundColor: 'red',
  },
  container: {
    //padding: 15,
    backgroundColor: Colors.WHITE,
    padding: 15,

    flex: 1,
  },
});
