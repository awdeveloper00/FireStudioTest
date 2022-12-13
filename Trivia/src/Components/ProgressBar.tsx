import { Animated, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { quesStyle } from '../styles/QuestionStyle'
interface ProgressBarProps{
    progressHandeler:any
}
export default function ProgressBar({progressHandeler}:ProgressBarProps) {
  return (
    <View style={quesStyle.progressBar} >
    <Animated.View style={[quesStyle.progress,{width:`${progressHandeler}%`}]}/>
    </View>
  )
}

const styles = StyleSheet.create({})