import {StyleSheet} from 'react-native';
import {FontSize, ScreenWidth} from '../../constants/Styling';
import {Color} from '../../constants/Colors';

export default () =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingVertical: 20,
    },
    img: {
      width: 30,
      height: 30,
      alignSelf: 'flex-end',
      marginHorizontal: 37,
      marginTop: 25,
    },
    headerWrapper: {
      marginStart: 25,
      width: ScreenWidth * (190 / 375),
    },
    Header: {
      fontWeight: '700',
      fontSize: FontSize.h7,
      lineHeight: 50,
      marginTop: 40,
    },
    btnsWrapper: {
      flexDirection: 'row',
      marginTop: 50,
      marginBottom: 65,
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
      width: 14,
      height: 14,
      borderRadius: 7,
      marginVertical: 7,
      backgroundColor: buttonId === selected ? Color.primary : 'transparent',
    }),
  });
