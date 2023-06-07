import {StyleSheet} from 'react-native';
import {Color} from '../../constants/Colors';
import {FontSize, Padding, ScreenWidth} from '../../constants/Styling';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
    },
    imgWrapper: {
      width: 60,
      height: 60,
      backgroundColor: Color.primary,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: 65,
    },
    img: {
      tintColor: Color.white,
    },
    btnsWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 66,
      marginVertical: 40,
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
    },

    //////////////// Login Screen   ////////////////
    inputLabel: {
      fontSize: FontSize.h1,
      color: Color.black,
      fontWeight: '700',
      marginBottom: 20,
      paddingStart: 25,
    },
    input: {
      backgroundColor: Color.white,
      height: 55,
      width: ScreenWidth - 50,
      marginBottom: 35,
      fontSize: 16,
      borderRadius: 25,
      paddingStart: 20,
      alignSelf: 'center',
    },
    passWrapper: {
      backgroundColor: Color.white,
      height: 55,
      width: ScreenWidth - 50,
      marginBottom: 35,
      fontSize: 16,
      borderRadius: 25,
      paddingStart: 20,
      alignSelf: 'center',
      height: 55,
    },
    icon: {
      width: 20,
      height: 20,
      tintColor: Color.grey,
      position: 'relative',
      top: -39,
      left: ScreenWidth - 126,
      padding: Padding.p1,
    },
    forgetPass: {
      alignSelf: 'flex-end',
      paddingHorizontal: 25,
      color: Color.black,
    },
  });
