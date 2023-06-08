import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Button from '../../components/Button';
import DetailCard from './DetailCard';
import {IMAGES} from '../../constants/Images';
import {NavigateBack} from '../../Navigations/Navigators';

const Description = ({navigation, route}) => {
  const handlePress = () => {
    NavigateBack(navigation);
  };
  return (
    <View style={styles().container}>
      {/* hotel-card */}
      <DetailCard details={route?.params?.hotel} />

      {/* details-section */}
      <View style={styles().detailTextWrapper}>
        <Text style={styles().detailText}>
          Tropicasa De Hotel is high rated hotels with 1000+ reviews and we are
          always maintaning the quality for better rating and high attitude
          service for you.
        </Text>
        <Text style={styles().detailText}>
          Tropicasa De Hotel located in a strategic location, only 6 Km from the
          airport and 1 Km from the train station. The hotel located in the
          middle of the city so you can enjoy the city and see something nearby.
        </Text>
        <Text style={styles().detailText}>
          You will be welcomed amongst olive trees, citron trees and magnolias,
          in gardens that hide exotic plants and in a wonderful outdoor pool
          with deck chairs.
        </Text>
      </View>

      {/* button */}
      <Button
        text={'Back'}
        size={'40%'}
        positioning={90}
        handlePress={handlePress}
      />
    </View>
  );
};

export default Description;
