import {ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import {NavigateToOnboarding} from '../../Navigations/Navigators';

const Splash = ({navigation}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      NavigateToOnboarding(navigation);
    }, 2000);

    return () => clearInterval(timer);
  });

  return <ImageBackground source={IMAGES.splash} style={styles().container} />;
};

export default Splash;
