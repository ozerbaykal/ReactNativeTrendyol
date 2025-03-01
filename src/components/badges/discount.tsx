import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';

const Discount: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="gift" size={16} color={Colors.PRIMARY} />
      <Text style={styles.text}>Eksta indirim</Text>
    </View>
  );
};

export default Discount;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.SOFT_ORANGE,
    width: '25%',
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
