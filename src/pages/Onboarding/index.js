import {View, Text, Image} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {IMAGES} from '../../constants/Images';
import Button from '../../components/Button';
import styles from './styles';
import {ScreenHeight, ScreenWidth} from '../../constants/Styling';
import {NavigateToAuth, NavigateToHome} from '../../Navigations/Navigators';
import {AuthenticatedUserContext} from '../../Context/AuthContext';
import auth from '@react-native-firebase/auth';

const Onboarding = ({navigation}) => {
  const {user, setUser, setIsLoading} = useContext(AuthenticatedUserContext);

  const onAuthStateChanged = user => {
    setIsLoading(true);
    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const handlePress = () => {
    if (user) {
      NavigateToHome(navigation);
    } else {
      NavigateToAuth(navigation);
    }
  };

  return (
    <View style={styles().container}>
      <Image
        source={IMAGES.OnBoard}
        style={{width: '80%', height: ScreenHeight * (349 / 772)}}
      />
      <Text style={styles().headerText}>Travel with no worry</Text>
      <Text style={styles().infoText}>
        You can now experience the next level travel experience for hotel
        bookings.
      </Text>
      <Button
        text={'Next'}
        handlePress={handlePress}
        size={ScreenWidth * (155 / 375)}
        positioning={96}
      />
    </View>
  );
};

export default Onboarding;
