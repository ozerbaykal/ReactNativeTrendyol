import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';
import {InputProps} from '../../models/ui/inputProps';

const Input: React.FC<InputProps> = props => {
  const {title} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  input: {
    padding: 3,
    height: 40,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.GRAY,
  },

  title: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
});
