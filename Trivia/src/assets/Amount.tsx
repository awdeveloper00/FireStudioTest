

import React from 'react'
import Svg,{Path,G,Defs,ClipPath,Rect} from 'react-native-svg'
interface ImageProps{
    style:{}
}
const AmountImage=({style}:ImageProps)=>{
    return(
        <Svg width="25" height="25" viewBox="0 0 25 25" style={style} fill="none" xmlns="http://www.w3.org/2000/svg">
            <G clip-path="url(#clip0_1_140)">
            <Path d="M12.5 25C19.4036 25 25 19.4036 25 12.5C25 5.59644 19.4036 0 12.5 0C5.59644 0 0 5.59644 0 12.5C0 19.4036 5.59644 25 12.5 25Z" fill="#F7A491"/>
            <Path d="M12.4999 23.1775C6.61206 23.1775 1.8457 18.3878 1.8457 12.5233C1.8457 6.65885 6.61206 1.84576 12.4999 1.84576C18.3878 1.84576 23.1541 6.63548 23.1541 12.5C23.1541 18.3645 18.3878 23.1775 12.4999 23.1775ZM12.4999 2.66352C7.07935 2.66352 2.66346 7.07941 2.66346 12.5C2.66346 17.9205 7.07935 22.3364 12.4999 22.3364C17.9205 22.3364 22.3364 17.9205 22.3364 12.5C22.3364 7.07941 17.9205 2.66352 12.4999 2.66352Z" fill="#C4886E"/>
            <Path d="M12.5 5.58411L14.042 10.3738H19.0654L15 13.3178L16.5654 18.0841L12.5 15.1402L8.43457 18.0841L9.99999 13.3178L5.93457 10.3738H10.9579L12.5 5.58411Z" fill="white"/>
            </G>
            <Defs>
            <ClipPath id="clip0_1_140">
            <Rect width="25" height="25" fill="white"/>
            </ClipPath>
            </Defs>
            </Svg>)
            
}

export default AmountImage;