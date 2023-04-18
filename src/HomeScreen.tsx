/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppButton from './components/AppButton';
import FoodCard from './components/FoodCard';

const FOOD_CARD = [
  {
    price: 180,
  },
  {
    price: 200,
  },
  {
    price: 185,
  },
  {
    price: 134.75,
  },
  {
    price: 90,
  },
  {
    price: 32.65,
  },
  {
    price: 78.05,
  },
];

const HomeScreen = () => {
  console.log(Array(10));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require('./assets/images/menu.png')} />
        </TouchableOpacity>
        <View style={styles.headerTools}>
          <TouchableOpacity>
            <Image source={require('./assets/images/search.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={{marginLeft: 24}}>
            <Image source={require('./assets/images/basket.png')} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>DELICIOUS FOOD</Text>
      <Text style={styles.description}>AT YOUR DOOR STEPS</Text>
      <View style={styles.categoryContainer}>
        <AppButton
          style={styles.categoryButton}
          icon={<Image source={require('./assets/images/window.png')} />}
        />
        <AppButton
          style={{...styles.categoryButton, backgroundColor: '#4E5156'}}
          icon={<Image source={require('./assets/images/bowl.png')} />}
        />
        <AppButton
          style={styles.categoryButton}
          icon={<Image source={require('./assets/images/burger.png')} />}
        />
        <AppButton
          style={styles.categoryButton}
          icon={<Image source={require('./assets/images/cocktail.png')} />}
        />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollStyle}>
        {FOOD_CARD.map((item, index) => (
          <FoodCard key={index} index={index} price={item.price} />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#F2F3F8',
  },
  scrollStyle: {
    flexGrow: 0,
  },
  header: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTools: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 34,
    color: '#333333',
    fontWeight: 'bold',
    marginTop: 40,
  },
  description: {
    fontSize: 20,
    color: '#333333',
    fontWeight: '500',
    marginBottom: 40,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  categoryButton: {
    width: 66,
    height: 66,
    borderRadius: 11,
  },
});
