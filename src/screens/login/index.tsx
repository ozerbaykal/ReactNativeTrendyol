import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import {height} from '../../utils/constants';
import {Colors} from '../../theme/colors';

const Login: React.FC = () => {
  return (
    <View style={defaultScreenStyle.safeAreaContainer}>
      <ScrollView>
        <View style={defaultScreenStyle.container}>
          <Input title="E-Posta" />
          <Input title="Şifre" />
          <Text style={styles.forgotPassword}>Şifremi Unuttum</Text>

          <View style={styles.buttonContainer}>
            <Button title="Giriş Yap" />
          </View>
        </View>
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
