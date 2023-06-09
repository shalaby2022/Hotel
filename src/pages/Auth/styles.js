import {StyleSheet} from 'react-native';
import {Color} from '../../constants/Colors';
import {
  Borders,
  FontSize,
  Margin,
  Padding,
  ScreenWidth,
  Sizes,
} from '../../constants/Styling';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    imgWrapper: {
      width: Sizes.s25,
      height: Sizes.s25,
      backgroundColor: Color.primary,
      borderRadius: Sizes.s0,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: Sizes.s26,
    },
    img: {
      tintColor: Color.white,
    },
    btnsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: Sizes.s26,
      marginVertical: Sizes.s19,
    },
    btnWrapper: {
      width: '50%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Color.white,
    },
    btnWrapperUnderlined: {
      width: '50%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: Color.primary,
      backgroundColor: Color.white,
    },
    btnText: {
      fontSize: FontSize.h3,
      fontWeight: '700',
      color: Color.black,
    },

    //////////////// Login Screen   ////////////////
    inputLabel: {
      fontSize: FontSize.h1,
      color: Color.black,
      fontWeight: '700',
      marginBottom: Margin.m3,
      paddingStart: Padding.p6,
    },
    input: {
      backgroundColor: Color.white,
      height: 55,
      width: ScreenWidth - 50,
      marginBottom: 35,
      fontSize: FontSize.h1,
      borderRadius: Borders.b5,
      paddingStart: Padding.p3,
      alignSelf: 'center',
      color: Color.black,
    },
    passWrapper: {
      backgroundColor: Color.white,
      height: Sizes.s24,
      width: ScreenWidth - 50,
      marginBottom: Margin.m10,
      fontSize: FontSize.h1,
      borderRadius: Borders.b5,
      paddingStart: Padding.p3,
      alignSelf: 'center',
    },
    icon: {
      width: Sizes.s9,
      height: Sizes.s9,
      tintColor: Color.grey,
      position: 'relative',
      top: -Sizes.s19,
      left: ScreenWidth - 126,
      padding: Padding.p1,
    },
    forgetPass: {
      alignSelf: 'flex-end',
      paddingHorizontal: Padding.p6,
      color: Color.black,
    },
  });
