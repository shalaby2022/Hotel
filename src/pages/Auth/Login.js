import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IMSGES} from '../../constants/Images';
import {Color} from '../../constants/Colors';
import Button from '../../components/Button';
import {ScreenWidth} from '../../constants/Styling';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const toggleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const handlePress = () => {
    console.log('log in');
  };

  return (
    <View style={{flex: 1}}>
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
            />
            <TouchableOpacity
              onPress={toggleShowPass}
              style={styles().iconWrapper}>
              <Image
                source={showPassword ? IMSGES.show : IMSGES.hide}
                style={styles().icon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles().forgetPass}>Forget Password ?</Text>

        <Button
          text={'Login'}
          size={ScreenWidth - 50}
          handlePress={handlePress}
          positioning={30}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Login;