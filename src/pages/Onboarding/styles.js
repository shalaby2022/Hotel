import {StyleSheet} from 'react-native';
import {FontSize, Margin, Padding, Sizes} from '../../constants/Styling';
import {Color} from '../../constants/Colors';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Sizes.s24,
      backgroundColor: Color.bgColor,
    },
    headerText: {
      fontWeight: '700',
      fontSize: FontSize.h5,
      color: Color.black,
      marginTop: Sizes.s26,
      paddingStart: Padding.p6,
    },
    infoText: {
      fontSize: FontSize.h1,
      color: Color.black,
      marginTop: Margin.m3,
      paddingStart: Padding.p6,
      lineHeight: Sizes.s13,
      paddingEnd: Padding.p6,
    },
  });
