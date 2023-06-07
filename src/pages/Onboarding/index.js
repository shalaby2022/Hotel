import {View, Text, Image} from 'react-native';
import React from 'react';
import {IMSGES} from '../../constants/Images';
import Button from '../../components/Button';
import styles from './styles';
import {ScreenHeight, ScreenWidth} from '../../constants/Styling';

const Onboarding = () => {
  const handlePress = () => {
    console.log('Next');
  };
  return (
    <View style={styles().container}>
      <Image
        source={IMSGES.OnBoard}
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
