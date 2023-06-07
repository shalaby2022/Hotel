import {StyleSheet} from 'react-native';
import {Borders, FontSize, Height} from '../../constants/Styling';
import {Color} from '../../constants/Colors';

export default () =>
  StyleSheet.create({
    wrapper: (size, positioning) => ({
      width: size,
      height: Height.height_1,
      backgroundColor: Color.primary,
      borderRadius: Borders.b7,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: positioning,
    }),
    text: {
      color: Color.white,
      fontSize: FontSize.h2,
      fontWeight: '700',
    },
  });
