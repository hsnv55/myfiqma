import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

const AppButton = ({style, icon}) => {
  return (
    <TouchableOpacity style={[styles.button, style]}>{icon}</TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: 70,
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
