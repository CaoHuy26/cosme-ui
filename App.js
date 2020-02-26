import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './src/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/sagas';

import AppNavigator from './src/navigators/AppNavigator';

import currentTime from './src/utils/getCurrentTime';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default function App() {
  console.log(`\n🚀 App is running at: ${currentTime}`);
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
