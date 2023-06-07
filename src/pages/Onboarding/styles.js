import {StyleSheet} from 'react-native';
import {FontSize} from '../../constants/Styling';
import {Color} from '../../constants/Colors';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 51,
      backgroundColor: Color.bgColor,
    },
    headerText: {
      fontWeight: '700',
      fontSize: FontSize.h5,
      color: Color.black,
      marginTop: 66,
      paddingStart: 26,
    },
    infoText: {
      fontSize: FontSize.h1,
      color: Color.black,
      marginTop: 20,
      paddingStart: 26,
      lineHeight: 28,
    },
  });
