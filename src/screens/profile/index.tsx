import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store';
import {useAppDispatch} from '../../utils/hooks';
import {getUserInfo} from '../../store/actions/userActions';
import Avatar from '../../components/user/avatar';
import {Colors} from '../../theme/colors';
import Button from '../../components/ui/button';
import {width} from '../../utils/constants';

const Profile: React.FC = () => {
  const {user, isLoading} = useSelector((state: RootState) => state.user);
  console.log(user);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserInfo({id: 4}));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Avatar name={user?.name} size={150} />

        <View style={styles.nameContainer}>
          <Text style={styles.name}>
            {user?.name.firstname} {user?.name.lastname}
          </Text>
          <Text style={styles.mail}>{user?.email}</Text>
        </View>

        <View style={{padding: 20, width: width * 0.9}}>
          <Button
            title="Log out"
            color={Colors.GREEN}
            onPress={() => {}}></Button>
          <Button title="Edit Profile" onPress={() => {}}></Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  nameContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },

  name: {
    fontSize: 30,
    fontWeight: '500',
  },
  mail: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: '500',
    color: Colors.BLACK,
    opacity: 0.75,
  },
});

export default Profile;
