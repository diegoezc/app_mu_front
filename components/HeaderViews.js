import * as React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';
const {width, height} = Dimensions.get('window')



export default function HeaderViews() {
  return (
    <View style={tw`w-full flex justify-center items-center h-55 bg-[#25B201] `}>
    <Image 
        style={{width: 120, height: 120, marginTop: 40}}
        source={require('../assets/logo-mu.png')
        }></Image>
               <Image
    style={{width: width, height: 80}}
    source={require('../assets/wavesOpacity.png')
    }
    ></Image>
    </View>
  );
}

