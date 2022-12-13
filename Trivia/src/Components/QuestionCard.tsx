import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {rewardStyle} from '../styles/RewardStyle';
import Tick from '../assets/Tick';
import Cross from '../assets/Cross';

interface CardProp {
  backgroundColor: string;
  index: number;
  item: any;
}
export default function QuestionCard({item, backgroundColor, index}: CardProp) {
  return (
    <View style={[rewardStyle.rewardCard, {backgroundColor}]} key={index}>
      <Text style={rewardStyle.rewardQues}>{item.question}</Text>
      {item.answer ? <Tick /> : <Cross />}
    </View>
  );
}

const styles = StyleSheet.create({});
