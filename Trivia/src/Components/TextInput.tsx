import React from 'react';
import {TextInput} from 'react-native';
interface InputProps {
  style: {};
  placeholder: string;
  placeholderTextColor: string;
  onChangeText?: any;
}
const TextInputComponent = ({
  style,
  placeholder,
  placeholderTextColor,
  onChangeText,
}: InputProps) => {
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
    />
  );
};
export default TextInputComponent;
