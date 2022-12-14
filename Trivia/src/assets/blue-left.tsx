import React from 'react'
import Svg,{Path} from 'react-native-svg'

interface ImageProps{
    width:number,
    height:number
}


const BlueLeftImage=({width,height}:ImageProps)=>{
    return(
<Svg width={width} height={height} viewBox="0 0 52 345" fill="red" xmlns="http://www.w3.org/2000/svg">
    <Path opacity="0.4" d="M18.2273 165.949C-8.40843 250.991 69.9469 231.512 26.6941 302.727C-45.619 386.274 -63.1432 243.016 -153.311 69.052C-243.478 -104.912 -110.312 -15.115 -21.3272 49.9152C-33.1184 61.9076 44.2011 83.0214 18.2273 165.949Z" fill="#A1A7E3" />
</Svg>)
}

export default BlueLeftImage;