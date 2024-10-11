import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
const myImg = require("./assets/mepicc.png");
const  mySelf = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <MaterialCommunityIcons name="human-greeting-variant" size={24} color="black" />
      <Image source={myImg}
      style={{width: 500, height: 500, borderRadius: 150, margin: 10,
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
