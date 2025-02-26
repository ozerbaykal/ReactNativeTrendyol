import {StyleSheet, Text, View} from 'react-native';

import Categories from '../../widgets/categories';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

const Home: React.FC = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <View>
        <Categories />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Home;
