import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Button = ({text, handlePress, size, positioning}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles().wrapper(size, positioning)}>
      <Text style={styles().text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
