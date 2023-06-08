import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import {API_KEY} from '../../constants/Keys';
import {NavigateToDescription} from '../../Navigations/Navigators';

const HotelCard = ({item, navigation}) => {
  const imgUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${item?.photos[0]?.photo_reference}&key=${API_KEY}`;

  const handleNavigation = (navigation, item) => {
    NavigateToDescription(navigation, item);
  };

  return (
    <TouchableOpacity onPress={() => handleNavigation(navigation, item)}>
      <ImageBackground style={styles().container} source={{uri: imgUrl}}>
        <View style={styles().rateWrapper}>
          <Image source={IMAGES.star} style={styles().rateImg} />
          <Text style={styles().rateText}>{item?.rating ?? 3.5}</Text>
        </View>
        <View style={styles().textWrapper}>
          <Text style={styles().hotelName}>{item?.name}</Text>
          <Text style={styles().hotelInfo}>{item?.vicinity}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default HotelCard;
