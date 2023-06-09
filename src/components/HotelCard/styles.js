import {StyleSheet} from 'react-native';
import {
  Borders,
  FontSize,
  Margin,
  Padding,
  ScreenHeight,
  ScreenWidth,
  Sizes,
} from '../../constants/Styling';
import {Color} from '../../constants/Colors';

export default () =>
  StyleSheet.create({
    container: {
      width: ScreenWidth * 0.7,
      height: ScreenHeight * 0.5,
      marginHorizontal: Margin.m2,
      borderRadius: Borders.b3,
      overflow: 'hidden',
    },
    rateWrapper: {
      flexDirection: 'row',
      backgroundColor: ' rgba(62, 62, 62, 0.6);',
      width: 74,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      margin: Margin.m3,
      alignSelf: 'flex-end',
      borderRadius: Borders.b3,
    },
    rateImg: {
      width: Sizes.s9,
      height: Sizes.s9,
      marginEnd: Sizes.s1,
    },
    rateText: {
      fontWeight: '600',
      color: Color.white,
    },
    img: {
      width: '100%',
      height: '100%',
    },
    hotelName: {
      fontWeight: '700',
      fontSize: FontSize.h6,
      color: Color.white,
    },
    hotelInfo: {
      color: Color.white,
      paddingTop: 9,
      fontSize: FontSize.h1,
      flexShrink: 1.4,
    },
    textWrapper: {
      position: 'absolute',
      bottom: Sizes.s14,
      left: Sizes.s12,
      paddingEnd: Padding.p6,
    },
  });
