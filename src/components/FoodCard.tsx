import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppButton from './AppButton';

const FoodCard = ({index, price}) => {
  console.log(index);
  return (
    <View style={[styles.foodCard, {marginLeft: index ? 20 : 0}]}>
      <Image
        style={styles.foodImage}
        source={require('../assets/images/food1.png')}
      />
      <View style={styles.cardTools}>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>${price}</Text>
        </View>
        <AppButton
          style={styles.button}
          icon={<Image source={require('../assets/images/plus.png')} />}
        />
      </View>
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  foodCard: {
    marginLeft: 20,
  },
  foodImage: {
    borderRadius: 20,
  },
  cardTools: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 12,
    paddingHorizontal: 14,
  },
  priceText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  priceContainer: {
    backgroundColor: '#4E5156',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    width: 34,
    height: 34,
    backgroundColor: '#4E5156',
    borderRadius: 5,
    marginLeft: 10,
  },
});
