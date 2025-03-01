import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/ionicons';
import {Colors} from '../../theme/colors';

const FreeCargo: React.FC = () => {
  return (
    <View style={styles.container}>
      <Icon name="cube-sharp" size={16} color={Colors.GRAY} />
      <Text style={styles.text}>Kargo Bedava</Text>
    </View>
  );
};

export default FreeCargo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f8ff',
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
