import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TabIconProps} from '../../models/ui/tabIconProps';
import Icon from '@react-native-vector-icons/ionicons';

const HeaderRight: React.FC = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.button}>
        <Icon name="mail-outline" size={30} />
      </Pressable>
      <Pressable style={styles.button}>
        <Icon name="notifications-outline" size={30} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  button: {
    margin: 5,
  },
});

export default HeaderRight;
