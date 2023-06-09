import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import {Color} from '../../constants/Colors';
import Button from '../../components/Button';
import {ScreenWidth, ScreenHeight} from '../../constants/Styling';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {NavigateToHome} from '../../Navigations/Navigators';
import auth from '@react-native-firebase/auth';
import {toaster} from '../../services/Toaster';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const HandleLogin = () => {
    if (email !== '' && password !== '') {
      setIsLoading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          setIsLoading(false);
          toaster('Login Success', Color.primary, 2500);
          NavigateToHome(navigation);
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setIsLoading(false);
            toaster('Email address is already in use!', Color.primary, 2500);
          } else if (
            error.code === 'auth/invalid-email' ||
            'auth/operation-not-allowrd'
          ) {
            setIsLoading(false);
            toaster('Invalid Email Address', Color.primary, 2500);
          }
        });
    }
  };

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <ActivityIndicator
          style={{marginTop: ScreenHeight / 1.8}}
          color={Color.primary}
          size={'large'}
        />
      ) : (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles().inputLabel}>Username or E-mail</Text>
            <TextInput
              style={styles().input}
              placeholder="Enter email"
              placeholderTextColor={Color.grey}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              autoFocus={true}
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View>
            <Text style={styles().inputLabel}>Password</Text>
            <View style={styles().passWrapper}>
              <TextInput
                placeholder="Enter password"
                placeholderTextColor={Color.grey}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={showPassword}
                textContentType="password"
                value={password}
                onChangeText={text => setPassword(text)}
                style={{color: Color.black}}
              />
              <TouchableOpacity
                onPress={toggleShowPass}
                style={styles().iconWrapper}>
                <Image
                  source={showPassword ? IMAGES.show : IMAGES.hide}
                  style={styles().icon}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles().forgetPass}>Forget Password ?</Text>

          <Button
            text={'Login'}
            size={ScreenWidth - 50}
            handlePress={HandleLogin}
            positioning={30}
          />
        </KeyboardAwareScrollView>
      )}
    </View>
  );
};

export default Login;
