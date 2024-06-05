import React from "react";
import { StyleSheet, Text, View, TextInput, Dimensions, Image, Pressable, ImageBackground} from 'react-native';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';
const { width, height } = Dimensions.get("screen")


export default function Home(){
    return(
        <ImageBackground source={require('../assets/fondo2.png')} style={{width: width, height: height}}>
            <View style={tw`items-center mt-15`}>
            <Text style={tw`text-3xl text-white `}>Welcome to</Text>
            <Text style={tw`text-5xl text-white pt-2`}>AgroTech</Text>
                <Image source={require('../assets/logo-mu.png')} style={{width: 150, height: 150, marginTop: 20}}></Image>
            </View>


          <View  style={tw`flex-1 justify-center items-center mt-10`}>

            <Pressable onPress={()=> console.log('hola')} style={tw`mt-10 p-3 items-center rounded-lg w-50 rounded-3xl bg-[#01880F]`}>
                    <Text style={tw`bg-transparent	text-lg text-[#fff]`}>Registrate</Text>
            </Pressable>
            <Text style={tw` text-white mt-5 text-gray-300`}>Ya tienes una cuenta?</Text>
        </View>
        </ImageBackground>
    )
}

