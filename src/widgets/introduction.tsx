import {Image, Pressable, StyleSheet} from 'react-native';
import {height, width} from '../utils/constants';

const Introduction: React.FC = () => {
  return (
    <Pressable style={styles.container}>
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
