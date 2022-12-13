import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, legacy_createStore} from 'redux';
import StackNavigation from './src/routes/StackNavigation';
import reducers from './src/Redux/Reducers/index';

const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
