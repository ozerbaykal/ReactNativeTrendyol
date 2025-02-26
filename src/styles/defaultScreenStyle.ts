import {StyleSheet} from 'react-native';
import {Colors} from '../theme/colors';

export const defaultScreenStyle = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  container: {
    padding: 10,
  },
});
