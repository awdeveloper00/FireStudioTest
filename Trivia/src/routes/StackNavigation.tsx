import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {  createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import QuestionScreen from '../Screens/QuestionsScreen/QuestionScreen';
import RewardsScreen from '../Screens/RewardsScreen/RewardsScreen';

const Stack = createNativeStackNavigator();
function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Question" component={QuestionScreen} />
      <Stack.Screen name="Rewards" component={RewardsScreen} />
    </Stack.Navigator>
  );
}
export default StackNavigation