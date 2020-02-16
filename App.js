import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import allReducers from './src/reducers';
import createSagaMiddleware from 'redux-saga';

import { LoginScreen, RegisterScreen } from './src/screens/Auth';

import rootSaga from './src/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RegisterScreen />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
