import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
interface ButtonProps {
  style?: {};
  buttonTextStyle?: {};
  title: string;
  onPress: any;
  radiantColor?: string[];
}
const ButtonComponent = ({
  style,
  title,
  onPress,
  buttonTextStyle,
  radiantColor,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        style={style}
        colors={radiantColor || ['transparent', 'transparent']}
        useAngle={true}
        angle={90}>
        <Text style={buttonTextStyle}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default ButtonComponent;
