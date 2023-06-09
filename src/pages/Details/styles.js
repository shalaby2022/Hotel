import {StyleSheet} from 'react-native';
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
      marginTop: Margin.m10,
      flexDirection: 'row',
      alignItems: 'center',
      padding: Sizes.s3,
      borderRadius: Sizes.s3,
    },
    hotelImgWrapper: {
      flex: 1,
    },
    hotelImg: {
      width: ScreenWidth / 3.9,
      height: ScreenWidth / 3.9,
      borderRadius: Sizes.s2,
    },
    hotelDetailsWrapper: {
      flex: 1.4,
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
      flexShrink: 1,
    },
    ratingWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      width: ScreenWidth * 0.42,
      justifyContent: 'space-between',
      alignItems: 'center',
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
      lineHeight: Sizes.s10,
      fontSize: FontSize.h1,
      paddingBottom: Padding.P0,
      color: Color.grey,
    },
  });
