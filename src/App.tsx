import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <DetailsScreen /> */}
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F3F8',
  },
});
