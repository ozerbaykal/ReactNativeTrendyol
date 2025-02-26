import {ScrollView, StyleSheet, Text, View} from 'react-native';

import Categories from '../../widgets/categories';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Introduction from '../../widgets/introduction';
import BestSeller from '../../widgets/bestSeller';
import PopularProducts from '../../widgets/popularProducts';

const Home: React.FC = () => {
  return (
    <View style={defaultScreenStyle.safeAreaContainer}>
      <View style={defaultScreenStyle.container}>
        <Categories />
        <Introduction />
        <BestSeller />
        <PopularProducts />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Home;
