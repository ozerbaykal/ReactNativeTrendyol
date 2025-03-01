import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';
import {width} from '../../utils/constants';

const Delivery: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="paper-plane" size={16} color={Colors.GREEN} />
      <Text style={styles.text}>Delivery</Text>
    </View>
  );
};

export default Delivery;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.SOFT_GREEN,
    width: width * 0.12,
    margin: 5,
    paddingVertical: 5,
    borderRadius: 5,
  },
  text: {
    fontSize: 8,
    marginTop: 5,
    textAlign: 'center',
  },
});
