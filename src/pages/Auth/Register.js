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
import {ScreenHeight, ScreenWidth} from '../../constants/Styling';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth, {firebase} from '@react-native-firebase/auth';
import {NavigateToHome} from '../../Navigations/Navigators';
import {toaster} from '../../services/Toaster';

const SignUp = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const HandleSignup = () => {
    if (email !== '' && password !== '' && userName !== '') {
      setIsLoading(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          NavigateToHome(navigation);
          setIsLoading(false);
          toaster('Register Success', Color.primary, 2500);
        })
        .then(() =>
          firebase.auth().currentUser.updateProfile({
            displayName: userName,
          }),
        )
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            setIsLoading(false);
            toaster('Email-already-in-use', Color.primary, 2500);
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
          style={{marginTop: ScreenHeight / 2.3}}
          color={Color.primary}
        />
      ) : (
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text style={styles().inputLabel}>Username</Text>
            <TextInput
              style={styles().input}
              placeholder="Create your username "
              placeholderTextColor={Color.grey}
              autoCapitalize="none"
              keyboardType="name-phone-pad"
              textContentType="givenName"
              autoFocus={true}
              value={userName}
              onChangeText={text => setUserName(text)}
            />
          </View>

          <View>
            <Text style={styles().inputLabel}>E-mail</Text>
            <TextInput
              style={styles().input}
              placeholder="Enter your e-mail"
              placeholderTextColor={Color.grey}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>

          <View>
            <Text style={styles().inputLabel}>Password</Text>
            <View style={styles().passWrapper}>
              <TextInput
                placeholder="Create your password"
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
          <Button
            text={'Sign Up'}
            size={ScreenWidth - 50}
            handlePress={HandleSignup}
            positioning={20}
          />
        </KeyboardAwareScrollView>
      )}
    </View>
  );
};

export default SignUp;
