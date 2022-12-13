import {StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import UserIcon from '../../assets/UserIcon';
import {rewardStyle} from '../../styles/RewardStyle';
import ButtonComponent from '../../Components/Button';
import CrossIcon from '../../assets/CrossIcon';
import ScoreComponent from '../../Components/ScoreComponent';
import QuestionCard from '../../Components/QuestionCard';

export default function RewardsScreen({route}: any) {
  const navigation = useNavigation<any>();
  const _renderItem = ({item, index}: any) => {
    return (
      <QuestionCard
        index={index}
        item={item}
        backgroundColor={item.answer ? '#fff' : '#FFDBDB'}
      />
    );
  };

  const score = route.params.post.filter(
    (question: any) => question.answer === 1,
  ).length;

  return (
    <View style={rewardStyle.parent}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../../assets/Screen3.png')}
        style={{flex: 1}}>
        <View style={rewardStyle.crossAlign}>
          <CrossIcon fill="#fff" onPress={() => navigation.navigate('Home')} />
        </View>
        <View style={rewardStyle.userContainer}>
          <UserIcon />
          <Text style={rewardStyle.scoreHead}>You Scored</Text>
          <Text style={rewardStyle.textScore}>
            {score}
            <Text style={rewardStyle.textTotal}>
              /{route.params.post.length}
            </Text>
          </Text>
        </View>
        <ScoreComponent posts={route.params.post} correct={score} />
        <View style={{flex: 1}}>
          <FlatList
            data={route.params.post}
            renderItem={_renderItem}
            ListFooterComponent={() => <View style={{height: 50}}></View>}
          />
          <ButtonComponent
            title={'PLAY AGAIN'}
            buttonTextStyle={rewardStyle.btnTxt}
            onPress={() => navigation.navigate('Home')}
            radiantColor={['#FFA67A', '#FF6065']}
            style={rewardStyle.btn}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
