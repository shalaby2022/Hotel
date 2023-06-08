import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import Login from './Login';
import SignUp from './Register';

const Auth = () => {
  const [screen, setScreen] = useState(true);
  return (
    <View style={styles().container}>
      {/* Logo */}
      <View style={styles().imgWrapper}>
        <Image source={IMAGES.logo} style={styles().img} />
      </View>
      {/* screenBtns */}
      <View style={styles().btnsWrapper}>
        <TouchableOpacity
          style={screen ? styles().btnWrapperUnderlined : styles().btnWrapper}
          onPress={() => setScreen(!screen)}>
          <Text style={styles().btnText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setScreen(!screen)}
          style={screen ? styles().btnWrapper : styles().btnWrapperUnderlined}>
          <Text style={styles().btnText}>Sigin Up</Text>
        </TouchableOpacity>
      </View>
      {/* screens */}
      {screen == 1 ? <Login /> : <SignUp />}
    </View>
  );
};

export default Auth;
