import {Dimensions, StyleSheet} from 'react-native';
import {
  FontSize,
  Margin,
  Padding,
  ScreenWidth,
  Sizes,
} from '../../constants/Styling';
import {Color} from '../../constants/Colors';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
    },
    hotelWrapper: {
      width: ScreenWidth - 50,
      backgroundColor: '#fff',
      alignSelf: 'center',
      marginTop: 40,
      flexDirection: 'row',
      alignItems: 'center',
      padding: Sizes.s3,
      borderRadius: Sizes.s3,
    },
    hotelImgWrapper: {
      flex: 1,
    },
    hotelImg: {
      width: 105,
      height: 105,
      borderRadius: Sizes.s2,
    },
    hotelDetailsWrapper: {
      flex: 1.6,
    },
    hotelTitle: {
      fontWeight: '700',
      fontSize: FontSize.h2,
      color: Color.black,
      marginBottom: Margin.m0,
    },
    hotelLocation: {
      fontSize: FontSize.h0,
      color: Color.grey,
      marginBottom: Margin.m0,
    },
    ratingWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      width: '75%',
      justifyContent: 'space-between',
    },
    rateImg: {
      width: Sizes.s9,
      height: Sizes.s9,
    },
    rateText: {
      color: Color.orange,
      fontWeight: '600',
      fontSize: FontSize.h1,
    },
    reviews: {
      color: Color.grey,
    },
    detailTextWrapper: {
      marginTop: Margin.m10,
      paddingHorizontal: Padding.p10,
    },
    detailText: {
      lineHeight: 25,
      fontSize: FontSize.h1,
      paddingBottom: Padding.P0,
    },
  });
