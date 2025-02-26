import {Image, Pressable, StyleSheet} from 'react-native';
import {height, width} from '../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTSNAVIGATOR} from '../utils/routes';

const Introduction: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(PRODUCTSNAVIGATOR.PRODUCTLIST)}>
      <Image
        source={require('../assets/images/intro2.jpeg')}
        style={{
          width: width - 10,
          height: height * 0.2,
          resizeMode: 'stretch',
          borderRadius: 8,
          marginVertical: 10,
        }}
      />
    </Pressable>
  );
};

export default Introduction;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
