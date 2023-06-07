import {StyleSheet} from 'react-native';
import {FontSize, ScreenHeight, ScreenWidth} from '../../constants/Styling';
import {Color} from '../../constants/Colors';

export default () =>
  StyleSheet.create({
    container: {
      width: 290,
      height: 435,
      backgroundColor: 'yellow',
      marginHorizontal: 15,
      borderRadius: 20,
    },
    rateWrapper: {
      flexDirection: 'row',
      backgroundColor: ' rgba(62, 62, 62, 0.6);',
      width: 74,
      height: 36,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 20,
      alignSelf: 'flex-end',
      borderRadius: 20,
    },
    rateImg: {
      width: 20,
      height: 20,
      marginEnd: 10,
    },
    rateText: {
      fontWeight: '600',
      color: Color.white,
    },
    hotelName: {
      fontWeight: '700',
      fontSize: FontSize.h4,
      color: Color.white,
    },
    hotelInfo: {
      color: Color.white,
      paddingTop: 9,
    },
    textWrapper: {
      position: 'absolute',
      bottom: 30,
      left: 35,
    },
  });
