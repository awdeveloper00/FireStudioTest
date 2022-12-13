import {Path, Svg} from 'react-native-svg';
interface IconProp {
  fill?: string;
}
export default function StarIcon({fill}: IconProp) {
  return (
    <Svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M11 0L14.5044 6.17664L21.4616 7.60081L16.6702 12.8424L17.4656 19.8992L11 16.962L4.53436 19.8992L5.3298 12.8424L0.538379 7.60081L7.49562 6.17664L11 0Z"
        fill={fill}
      />
    </Svg>
  );
}
