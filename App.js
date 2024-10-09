import React from 'react'

import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
const myImg = require("./assets/mepicc.png");
const  mySelf = () => {
  return (
    <SafeAreaView style={{
      backgroundColor: '#F9F89B',
      flex: 1,
      //justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Image source={myImg}
      style={{width: 500, height: 500, borderRadius: 50, margin: 20,
      justifyContent: 'center'}}/>
      <Text style={{
        color: 'black',
        align: "center",
        fontSize: 20,
        fontWeight: 'bold'
        
      }}
      >My  name is Emmanuel</Text>
      <Text>Educational Backround:  Bsc in Computer Science</Text>
      <Text>Work Experience:  Software Developer</Text>
      <Text>Skills:  C++, Python, JavaScript, HTML/CSS</Text>
      <Text>Interests: Basketball, Debugging code.</Text>
    </SafeAreaView>
    );
}
export default mySelf
