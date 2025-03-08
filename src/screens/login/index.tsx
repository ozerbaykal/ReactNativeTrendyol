import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {height, width} from '../../utils/constants';
import {Colors} from '../../theme/colors';
import {Formik} from 'formik';
import {LoginForm} from '../../models/ui/loginForm';

const Login: React.FC = () => {
  const initialValues: LoginForm = {
    email: 'ozer@baykal',
    password: ' 1234',
  };
  return (
    <View style={defaultScreenStyle.safeAreaContainer}>
      <ScrollView>
        <Formik
          initialValues={initialValues}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View style={defaultScreenStyle.container}>
              <Input
                onChangeText={handleChange('email')}
                onBlur={handleBlur}
                //onSubmit={() => console.log(values)}
                value={values.email}
                title="E-Posta"
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
