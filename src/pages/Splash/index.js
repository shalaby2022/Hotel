import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMSGES} from '../../constants/Images';

const Splash = () => {
  return <ImageBackground source={IMSGES.splash} style={styles().container} />;
};

export default Splash;
