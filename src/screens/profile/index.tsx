import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

const Profile: React.FC = () => {
  const {token} = useSelector((state: RootState) => state.auth);

  return (
    <View
      style={{
        flex: 1,
        //backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          padding: 20,
          fontSize: 30,
          backgroundColor: 'blue',
        }}>
        UserId:{token}
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
