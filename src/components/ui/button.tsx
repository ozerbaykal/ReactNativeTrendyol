import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';
import {ButtonProps} from '../../models/ui/buttonProps';

const Button: React.FC<ButtonProps> = props => {
  const {title, disabled, color} = props;
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        {backgroundColor: disabled ? Colors.GRAY : Colors.PRIMARY},
        {backgroundColor: color ? color : Colors.PRIMARY},
      ]}>
      <Text style={styles.title}>{title}</Text>
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
    //backgroundColor: Colors.PRIMARY,
    padding: 10,
    borderRadius: 10,
    margin: 8,
  },
});
