import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {IMSGES} from '../../constants/Images';

const HotelCard = ({item}) => {
  return (
    <View style={styles().container}>
      <View style={styles().rateWrapper}>
        <Image source={IMSGES.star} style={styles().rateImg} />
        <Text style={styles().rateText}>{item.rate}</Text>
      </View>
      {/* <View>
        <Image source={item.img} style={styles().img} />
      </View> */}
      <View style={styles().textWrapper}>
        <Text style={styles().hotelName}>{item.header}</Text>
        <Text style={styles().hotelInfo}>{item.title}</Text>
      </View>
    </View>
  );
};

export default HotelCard;
