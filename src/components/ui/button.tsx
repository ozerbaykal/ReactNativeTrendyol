import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';

const Button: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>Sepete Ekle</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 10,
  },
});
