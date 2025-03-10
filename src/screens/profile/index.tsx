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
import {logout} from '../../store/slice/authSlice';
import {useNavigation} from '@react-navigation/native';
import {AUTHNAVIGATOR} from '../../utils/routes';

const Profile: React.FC = () => {
  const {user, isLoading} = useSelector((state: RootState) => state.user);
  const {isLogin} = useSelector((state: RootState) => state.auth);
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserInfo({id: 4}));
  }, []);

  return (
    <ScrollView>
      {isLoading ? (
        <View style={{padding: 10}}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>Yükleniyor..</Text>
        </View>
      ) : isLogin ? (
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
              onPress={() => dispatch(logout())}></Button>
            <Button title="Edit Profile" onPress={() => {}}></Button>
          </View>
        </View>
      ) : (
        <View style={{padding: 10}}>
          <Text style={{fontSize: 25, marginVertical: 20, fontStyle: 'italic'}}>
            Lütfen Giriş yapınız..{' '}
          </Text>
          <Button
            title="Giriş Yap"
            color="blue"
            onPress={() => navigation.navigate(AUTHNAVIGATOR.LOGIN)}
          />
        </View>
      )}
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
