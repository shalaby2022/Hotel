import Toast from 'react-native-root-toast';
import {Color} from '../constants/Colors';

export const toaster = (message, color, duration) => {
  Toast.show(message, {
    visible: true,
    backgroundColor: color || Color.primary,
    duration: duration || 2500,
    position: 20,
    shadow: true,
    shadowColor: Color.primary,
    animation: true,
    hideOnPress: true,
    delay: 0,
    textColor: '#fff',
  });
};
