import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  ImageBackground,
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';
import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, googleLogin} = useContext(AuthContext);

  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      style={styles.imageBackground}>
      <View style={styles.container}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />

        <FormInput
          labelValue={email}
          onChangeText={(userEmail) => setEmail(userEmail)}
          placeholderText="User name"
          iconType="user"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />

        <FormInput
          labelValue={password}
          onChangeText={(userPassword) => setPassword(userPassword)}
          placeholderText="Password"
          iconType="lock"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
          <Text style={styles.navButtonText}>Forgot Password?</Text>
        </TouchableOpacity>

        <FormButton
          buttonTitle="Login"
          onPress={() => login(email, password)}
        />

        {Platform.OS === 'android' ? (
          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => {
              googleLogin();
            }}
          />
        ) : null}

        <View style={styles.navButton}>
          <Text style={styles.navButtonText}>Don't have an acount? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={[styles.navButtonText, {color: '#e88832'}]}>
              Create here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  imageBackground: {
    width: '100%',
    height: '100%',
  },
  logo: {
    height: 100,
    width: 220,
    alignSelf: 'center',
    margin: 60,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  forgotButton: {
    bottom: 50,
    marginVertical: 8,
    marginHorizontal: 30,
    alignSelf: 'flex-end',
  },
  createLink: {
    marginVertical: 35,
    bottom: 10,
    fontSize: 12,
  },
  navButtonText: {
    fontSize: 16,
    borderRadius: 27,
    fontWeight: '500',
    color: '#FFFFFF',
    fontFamily: 'Lato-Regular',
  },
});
