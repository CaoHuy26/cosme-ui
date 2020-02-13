import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { LoginScreen } from './src/screens/Auth';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LoginScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
