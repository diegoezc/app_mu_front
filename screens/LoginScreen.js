
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Image, Pressable } from 'react-native';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import ButtonGradient from '../components/ButtonGradient';
import { useRoute } from '@react-navigation/native';
const {width, height} = Dimensions.get('screen')



export default function LoginScreen() {
 
  const navigation = useNavigation();

  return (
    <>
    <View style={tw`flex justify-center items-center`}>
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

      <View style={tw`mt-3`}>
        <Text style={tw`text-black text-base mt-2 text-gray-600`}>Sing in to your account</Text>
              <TextInput style={tw` text-gray-500 border-2 border-gray-300 rounded-3xl h-12 pl-3 w-80 mt-4 bg-white`} 
                placeholder='ingrese su correo'
              />
              <TextInput style={tw` text-gray-500 border-2 border-gray-300 rounded-3xl h-12 pl-3 w-80 mt-4 bg-white`} 
                placeholder='ingrese su clave'
              />
             <Pressable onPress={()=>navigation.navigate('ForgotPassword')} style={tw`self-end pr-10 text-neutral-500 py-2`}>
                <Text style={tw`text-neutral-500`}>Forgot Password</Text>
              </Pressable>
              <ButtonGradient buttonName={'Iniciar Sesion'}/>
              
              <StatusBar style='auto'/>
        
      </View>
    </View>
    </>
  
  );
}