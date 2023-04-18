import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppButton from './components/AppButton';

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          ENJOY FRIED{'\n'}RICE -{'\n'}THE BEST{'\n'}MEAL
        </Text>
      </View>
      <View style={styles.footer}>
        <Image source={require('./assets/images/fried.png')} />
        <AppButton
          style={styles.button}
          icon={<Image source={require('./assets/images/dots.png')} />}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F8',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 18,
  },
  title: {
    color: '#333333',
    fontWeight: 'bold',
    fontSize: 47,
  },
  footer: {
    flexDirection: 'row',
  },
  button: {
    right: 18,
    position: 'absolute',
    borderRadius: 15,
    backgroundColor: '#4E5156',
  },
});
