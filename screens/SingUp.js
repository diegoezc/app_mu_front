
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Image, Pressable } from 'react-native';
import tw, { style } from 'twrnc';
import ButtonGradient from '../components/ButtonGradient';
import HeaderViews from "../components/HeaderViews";
const {width, height} = Dimensions.get('screen')

export default function SingUp() {
 
  return (
    <>
    <View style={tw`flex justify-center items-center`}>
    <HeaderViews/>
      <View style={tw`mt-3`}>
        <Text style={tw`text-black text-base mt-2 text-gray-600`}>Sing up to your account</Text>
              <TextInput style={tw` text-gray-500 border-2 border-gray-300 rounded-3xl h-12 pl-3 w-80 mt-4 bg-white`} 
                placeholder='ingrese su correo'
              />
            <TextInput style={tw` text-gray-500 border-2 border-gray-300 rounded-3xl h-12 pl-3 w-80 mt-4 bg-white`} 
                placeholder='ingrese un nombre de usuario'
              />
              <TextInput style={tw` text-gray-500 border-2 border-gray-300 rounded-3xl h-12 pl-3 w-80 mt-4 bg-white`} 
                placeholder='ingrese su clave'
              />
              <ButtonGradient buttonName={'Registrarse'}/>
              
              <StatusBar style='auto'/>
        
      </View>
    </View>
    </>
  );
}