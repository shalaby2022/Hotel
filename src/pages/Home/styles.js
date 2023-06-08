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
      paddingVertical: Padding.p3,
    },
    img: {
      width: Sizes.s14,
      height: Sizes.s14,
      alignSelf: 'flex-end',
      marginHorizontal: 37,
      marginTop: Margin.m5,
    },
    headerWrapper: {
      marginStart: Margin.m5,
      width: ScreenWidth * (190 / 375),
    },
    Header: {
      fontWeight: '700',
      fontSize: FontSize.h7,
      lineHeight: Sizes.s24,
      marginTop: Sizes.s19,
    },
    btnsWrapper: {
      flexDirection: 'row',
      marginTop: Sizes.s24,
      marginBottom: Sizes.s25,
    },
    btnWrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedBtn: (buttonId, selected) => ({
      color: buttonId === selected ? Color.black : Color.grey,
      fontWeight: buttonId === selected ? '700' : '400',
      fontSize: FontSize.h2,
    }),
    circle: (buttonId, selected) => ({
      width: Sizes.s3,
      height: Sizes.s3,
      borderRadius: Sizes.s0,
      marginVertical: Sizes.s0,
      backgroundColor: buttonId === selected ? Color.primary : 'transparent',
    }),
    errorWrapper: {
      flex: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    errorText: {
      fontWeight: '600',
      fontSize: FontSize.h3,
      marginBottom: 140,
      color: Color.primary,
    },
  });
