import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 30,
          backgroundColor: 'blue',
        }}>
        Profile{' '}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default Profile;
