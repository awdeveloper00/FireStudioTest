import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {Picker} from '@react-native-picker/picker';
import TophyImage from '../../assets/Trophy';
import AmountImage from '../../assets/Amount';
import TextInputComponent from '../../Components/TextInput';
import ButtonComponent from '../../Components/Button';
import {homeStyles} from '../../styles/HomeStyle';
import {DIFFICULTY} from '../../constants';
import {getAllQuestionsAction} from '../../Redux/Actions/Question';

export default function HomeScreen() {
  const [selectedValue, setSelectedValue] = useState(null);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const onPressHandeler = () => {
    if (count == 0) {
      Alert.alert('Please Enter the amount of questions');
    } else {
      const data = {value: selectedValue, amount: count};
      dispatch(getAllQuestionsAction(data));
      navigation.navigate('Question');
    }
  };

  return (
    <View style={homeStyles.parent}>
      <ImageBackground
        resizeMode="stretch"
        source={require('../../assets/Screen1.png')}
        style={{flex: 1}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'android' ? 50 : 0}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView>
              <View style={{alignItems: 'center'}}>
                <Text style={homeStyles.heading}>Welcome to the</Text>
                <Image
                  source={require('../../assets/Logo.png')}
                  resizeMode={'contain'}
                  style={homeStyles.imageLogo}
                />
                <View style={homeStyles.form}>
                  <View>
                    <View style={homeStyles.position}>
                      <TophyImage style={homeStyles.icon} />
                      <Text style={homeStyles.inp__txt}>Difficulty</Text>
                    </View>
                    <View style={homeStyles.picker_border}>
                      <Picker
                        selectedValue={selectedValue}
                        onValueChange={(itemValue, itemIndex) =>
                          setSelectedValue(itemValue)
                        }
                        style={homeStyles.picker_text}>
                        {DIFFICULTY.map((data, index) => {
                          return (
                            <Picker.Item
                              label={data.label}
                              value={data.value}
                              key={index}
                            />
                          );
                        })}
                      </Picker>
                    </View>
                  </View>
                  <View>
                    <View style={homeStyles.amountInp}>
                      <AmountImage style={homeStyles.icon} />
                      <Text style={homeStyles.inp__txt}>Amount</Text>
                    </View>

                    <TextInputComponent
                      placeholder="Enter Amount"
                      placeholderTextColor="#fff"
                      style={homeStyles.inp_border}
                      onChangeText={(e: any) => setCount(e)}
                    />
                  </View>
                  <ButtonComponent
                    buttonTextStyle={homeStyles.btnTxt}
                    radiantColor={['#FFA67A', '#FF6065']}
                    style={homeStyles.btn}
                    title={'SUBMIT'}
                    onPress={onPressHandeler}
                  />
                </View>
              </View>
            </ScrollView>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
