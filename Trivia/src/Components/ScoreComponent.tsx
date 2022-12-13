import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarIcon from '../assets/Star';
import {rewardStyle} from '../styles/RewardStyle';

interface ScoreProp {
  posts: any;
  correct: number;
}
export default function ScoreComponent({posts, correct}: ScoreProp) {
  return (
    <View style={rewardStyle.scoreStar}>
      {posts?.map((data: string, index: number) => {
        if (correct >= index + 1) {
          return <StarIcon fill="#FF7C7C" key={index} />;
        } else {
          return <StarIcon fill="#969CDC" key={index} />;
        }
      })}
    </View>
  );
}
