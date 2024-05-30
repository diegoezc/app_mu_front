
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native';
import tw from 'twrnc';
import ButtonGradient from '../components/ButtonGradient';
const {width, height} = Dimensions.get('screen')

export default function LoginScreen() {
 
  return (
    <View style={tw`flex justify-center items-center`}>
    <View style={tw`w-full items-center pb-7 bg-[#25B201] rounded-br-[3rem]`}>
        <Text style={tw`text-black  text-7xl  font-bold mt-3 text-white`}>Login</Text>
    </View>
          
          <Text style={tw`text-black text-base mt-2 text-gray-600`}>Sing in to your account</Text>
            <TextInput style={tw` text-gray-500 border-2 border-gray-300 rounded-3xl h-10 pl-3 w-80 mt-4 bg-white`} 
              placeholder='ingrese su correo'
            />
            <TextInput style={tw` text-gray-500 border-2 border-gray-300 rounded-3xl h-10 pl-3 w-80 mt-4 bg-white`} 
              placeholder='ingrese su clave'
            />
            <ButtonGradient/>
            <StatusBar style='auto'/>
      
    </View>
  );
}