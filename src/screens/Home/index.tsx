import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';

const Home = () => {
  const data: any = useSelector(state => state.products.deneme);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>{data}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
export default Home;
