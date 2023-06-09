import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMAGES} from '../../constants/Images';
import {API_KEY} from '../../constants/Keys';

const DetailCard = ({details}) => {
  const Review = Math.floor(Math.random() * 10000);
  const imgUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${details?.photos[0]?.photo_reference}&key=${API_KEY}`;
  return (
    <View style={styles().hotelWrapper}>
      <View style={styles().hotelImgWrapper}>
        <Image source={{uri: imgUrl}} style={styles().hotelImg} />
      </View>
      <View style={styles().hotelDetailsWrapper}>
        <Text style={styles().hotelTitle}>{details?.name?.slice(0, 25)}</Text>
        <Text style={styles().hotelLocation}>{details.vicinity}</Text>
        <View style={styles().ratingWrapper}>
          <Image source={IMAGES.star} style={styles().rateImg} />
          <Text style={styles().rateText}>{details.rating ?? 3.5}</Text>
          <Text style={styles().reviews}>({Review} reviews)</Text>
        </View>
      </View>
    </View>
  );
};

export default DetailCard;
