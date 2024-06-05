import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';



export default function ButtonGradient({buttonName}) {
  return (
    <Pressable onPress={()=> console.log('hola')}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#25B201', '#B2B600']}
        start={{x:0, y:0}}
        end={{x:1, y:0}}
        style={tw`mt-4 p-3 items-center rounded-lg w-80 rounded-3xl`}>
        <Text style={tw`bg-transparent	text-lg text-[#fff]`}>{buttonName}</Text>
      </LinearGradient>
    </Pressable>
  );
}

