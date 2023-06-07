import {View, TextInput} from 'react-native';
import React from 'react';

const InputButton = ({value, setValue, secureTextEntry}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={setValue}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default InputButton;
