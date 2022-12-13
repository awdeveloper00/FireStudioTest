import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ImageProp {
  style?: {};
  fill: string;
  onPress?: any;
}
const CrossIcon = ({style, fill, onPress}: ImageProp) => {
  return (
    <Svg
      onPress={onPress}
      width="15"
      height="16"
      viewBox="0 0 15 16"
      style={style}
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M3.14303 15.432L7.49457 11.0174L11.8488 15.432C13.5517 17.1586 16.1599 14.5606 14.4328 12.8095L10.0812 8.39754L14.4328 3.98287C16.133 2.26181 13.5463 -0.360769 11.8488 1.36303L7.49457 5.77496L3.14303 1.36303C1.44284 -0.360769 -1.14114 2.26181 0.556361 3.98287L4.91059 8.39754L0.556361 12.8095C-1.14114 14.5333 1.44284 17.1558 3.14303 15.432Z"
        fill={fill}
      />
    </Svg>
  );
};
export default CrossIcon;
