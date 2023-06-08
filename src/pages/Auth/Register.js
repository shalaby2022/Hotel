import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import {Color} from '../../constants/Colors';
import Button from '../../components/Button';
import {ScreenWidth} from '../../constants/Styling';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const toggleShowPass = () => {
    setShowPassword(!showPassword);
  };

  const handlePress = () => {
    console.log('Sign Up');
  };
  return (
    <View style={{flex: 1}}>
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
          handlePress={handlePress}
          positioning={40}
        />
      </KeyboardAwareScrollView>
    </View>
  );
};

export default SignUp;
