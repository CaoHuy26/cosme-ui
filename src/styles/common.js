import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  imageThumbnail: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  },
  textTitle: {
    fontSize: 24,
    fontWeight: "500"
  },
  button: {
    width: width - 40,
    height: 50,
    backgroundColor: 'pink',
    borderRadius: 10
  }
});