import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../theme/colors';
import Icon from '@react-native-vector-icons/ionicons';
import {AvatarProps} from '../../models/ui/avatarProps';

const Avatar: React.FC<AvatarProps> = props => {
  const {name, size, image} = props;
  return (
    <View style={[styles.container, {width: size, height: size}]}>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 70, fontWeight: '500'}}>
          {' '}
          {name?.firstname.charAt(0).toUpperCase()}
        </Text>

        <Text
          style={{fontSize: 35, fontWeight: '600', color: Colors.SOFT_GREEN}}>
          {name?.lastname.charAt(0).toUpperCase()}
        </Text>
      </View>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,

    borderRadius: 100,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
