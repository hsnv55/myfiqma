/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
const App = () => {
    return (
        <View style={
            styles.backround
        } >
            <Text style={
                styles.textstile

            }>
                ENJOY FRIED RICE - {'\n'}
                THE BEST {'\n'}MEAL
            </Text>
            <Image source={require('./image/Fried.png')} />

            <Image source={require('./image/Group18.png')}
            style={[styles.imagestyle,{position:'absolute', top:250 ,left:200}]}
           
            />

        </View>
    )
}
const styles = StyleSheet.create({
    backround: {
        backgroundColor: '#E5E5E5',
        flex: 1

    },
    textstile: {
        fontSize: 47,
        color: '#333333',
        fontWeight: '700',
    fontFamily:'SofiaPro-Bold',

        marginTop: 100,
        marginLeft: 16,
    },
    imagestyle: {
        marginLeft: 70,
        marginTop: 70,
    }
})

export default App;
