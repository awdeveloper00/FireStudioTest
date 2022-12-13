import {
  ActivityIndicator,
  Alert,
  ImageBackground,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import CrossIcon from '../../assets/CrossIcon';
import {quesStyle} from '../../styles/QuestionStyle';
import {useNavigation} from '@react-navigation/native';
import ButtonComponent from '../../Components/Button';
import ProgressBar from '../../Components/ProgressBar';

const QuestionScreen: React.FC = () => {
  const navigation = useNavigation<any>();
  const [count, setCount] = useState(0);
  const [result, setResult] = useState<any[]>([]);
  const state = useSelector(state => state);
  const questions = state?.QuestionReducer?.questions;
  const testVar: any = [];

  const onPressHandeler = (value: string) => {
    const data = {
      question: questions[count].question,
      answer: questions[count].correct_answer == value ? 1 : 0,
    };
    setResult([...result, data]);
    testVar.push(...result, data);
    setCount(count + 1);
    if (questions.length == count + 1) {
      navigation.navigate('Rewards', {post: testVar});
    }
  };

  const progressHandeler = (Number(count + 1) / questions.length) * 100;

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../../assets/Screen2.png')}
        style={{flex: 1}}>
        {questions.length > 0 ? (
          <>
            <View style={quesStyle.parent}>
              <CrossIcon
                fill="#4953BE"
                style={quesStyle.icon}
                onPress={() => navigation.navigate('Home')}
              />
              <Text style={quesStyle.title}>{questions[count]?.category}</Text>
              <Text style={quesStyle.subtitle}>level 1</Text>
              <View style={{flexDirection: 'row'}}>
                <Text>{count + 1}</Text>
                <Text>/{questions.length}</Text>
              </View>
              <ProgressBar progressHandeler={progressHandeler} />
              <Text style={quesStyle.question}>
                {questions[count]?.question}
              </Text>
            </View>
            <View>
              <ButtonComponent
                buttonTextStyle={quesStyle.btnTextTrue}
                style={quesStyle.trueBtn}
                title="TRUE"
                onPress={() => onPressHandeler('True')}
              />
              <ButtonComponent
                buttonTextStyle={quesStyle.btnTextFalse}
                style={quesStyle.falseBtn}
                title="FALSE"
                onPress={() => onPressHandeler('False')}
              />
            </View>
          </>
        ) : (
          <View style={quesStyle.loader}>
            <ActivityIndicator color={'#4953BE'} size={'large'} />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default QuestionScreen;
