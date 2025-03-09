import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {height, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {Formik} from 'formik';
import {LoginForm} from '../../models/ui/loginForm';
import getUserLogin from '../../store/actions/authAction';
import {useAppDispatch} from '../../utils/hooks';

const Login: React.FC = () => {
  const initialValues: LoginForm = {
    username: 'johnd',
    password: 'm38rmF$',
  };
  const dispatch = useAppDispatch();

  return (
    <View style={defaultScreenStyle.safeAreaContainer}>
      <ScrollView>
        <Formik
          initialValues={initialValues}
          onSubmit={values => dispatch(getUserLogin(values))}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={defaultScreenStyle.container}>
              <Input
                onChangeText={handleChange('email')}
                onBlur={handleBlur}
                //onSubmit={() => console.log(values)}
                value={values.username}
                title="Kullanıcı Adı"
              />
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                //onSubmit={handleSubmit}
                secureTextEntry
                value={values.password}
                title="Şifre"
              />
              <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>

              <View style={styles.buttonContainer}>
                <Button onPress={handleSubmit} title="Giriş Yap" />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: height * 0.05,
  },

  forgotPassword: {
    textAlign: 'right',
    marginTop: 10,
    color: Colors.PRIMARY,
  },
});
