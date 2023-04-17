/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
const Ass = () => {
    return (
        <View style={
            styles.backround
        } >
            <TouchableOpacity> 
                <Image style={{marginLeft:20,width:22,height:22,marginTop:23, marginVertical:10,}} source={require('./image/Menu.png')}/></TouchableOpacity>
            <TouchableOpacity> 
                 <Image style={{marginLeft:300,width:22,height:22, marginTop:-36}} source={require('./image/search.png')}/></TouchableOpacity>
            <TouchableOpacity> 
                 <Image style={{marginLeft:360,width:22,height:22, marginTop:-25,}} source={require('./image/magaza.png')}/></TouchableOpacity>
            <Text style={
                styles.textstile

            }>
                DELICIOUS FOOD
            </Text>
               <Text style={{ fontSize: 22,
        color: '#333333',
        fontWeight: '300',
        marginLeft:16,
    fontFamily:'SofiaPro-Bold',}}>AT YOUR DOOR STEPS</Text>
<TouchableOpacity>
     <Image style={{  height: 66,
width: 66,
marginLeft: 10,
marginTop: 5,
}} source={require('./image/17.png')}/></TouchableOpacity>
    <TouchableOpacity>
    <Image style={{  height: 66,
width: 66,
marginLeft: 110,
marginTop: -65,

}} source={require('./image/bowl.png')}/></TouchableOpacity>
   <TouchableOpacity> 
    <Image style={{ height: 66,
width: 66,
marginTop :-70,
marginLeft:220

}} source={require('./image/doner.png')}/></TouchableOpacity>
  <TouchableOpacity>
     <Image
     style={{height: 66,
width: 66,
marginLeft: 320,
marginTop: -70,

}} source={require('./image/marojna.png')}/></TouchableOpacity>
    
            <Image  style={{ position: 'absolute',
            
width: 200,
height: 250,
marginLeft:50,
left: -40,
top: 335,}} source={require('./image/2.png')} />
             <Image style={styles.imagestyle} source={require('./image/3.png')}/>
       
             <Image style={{marginTop:530,marginLeft:25,position: 'absolute'}} source={require('./image/Orice.png')}/> 
         
             <Image style={{marginTop:530,marginLeft:160,position: 'absolute'}} source={require('./image/buton.png')}/> 
          <Image style={{marginTop:530,marginLeft:260,position: 'absolute'}} source={require('./image/Oric1.png')}/> 
          
<Image style={{marginTop:400,marginLeft:25}} source={require('./image/now.png')}/>
<Image style={{marginTop:18,marginLeft:25}} source={require('./image/11.png')}/>
<Image style={{marginTop:-68,marginLeft:145}} source={require('./image/yazi.png')}/>
<Text style={{position: 'absolute',
width: 177,
height: 33,
color:'#828282',
marginLeft: 150,
marginTop: 700,
}}>Chinese Cuisine</Text>
<Text style={{position: 'absolute',
width: 177,
height: 33,
color:'#333333',
marginLeft: 150,
marginTop: 725,
}}>$110.50</Text>
<TouchableOpacity>
<Image style={{marginTop:7,marginLeft:340}} source={require('./image/isaresiz.png')}/></TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    backround: {
        backgroundColor: '#E5E5E5',
        flex: 1

    },
    textstile: {
        fontSize: 40,
        color: '#333333',
        fontWeight: '700',
        marginRight:5,
    fontFamily:'SofiaPro-Bold',
        marginTop: 50,
        marginLeft: 16,
    },
    imagestyle: {
       position:'absolute',
       marginLeft:260,
        width: 180,
        height: 250,
        left: -40,
        top: 335,
    }
})

export default Ass;