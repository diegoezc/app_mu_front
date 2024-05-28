import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import Svg, {G, Path,Defs,Stop,LinearGradient} from "react-native-svg";
const {width, height} = Dimensions.get('window')
import tw from 'twrnc';
import ButtonGradient from './components/ButtonGradient';



export  function SvgTop(){
  return(
    <Svg
  xmlns="http://www.w3.org/2000/svg"
  width={367}
  height={322}
  fill="none"
>
  <Path
    fill="url(#a)"
    d="M0 0h367v249c0 40.317-32.683 73-73 73H73c-40.317 0-73-32.683-73-73V0Z"
  />
  <Defs>
    <LinearGradient
      id="a"
      x1={239.665}
      x2={88.303}
      y1={322}
      y2={19.532}
      gradientUnits="userSpaceOnUse"
    >
      <Stop stopColor="#25B301" />
      <Stop offset={1} stopColor="#B2B600" />
    </LinearGradient>
  </Defs>
</Svg>
  )
}

export default function App() {
 
  return (
    <View style={tw`flex flex-col items-center`}>
    <View style={tw`flex-1`}>
        <SvgTop/>
    </View>
    <View>
        
          <Text style={tw`text-black  text-7xl  font-bold mt-3`}>Hello</Text>
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
    </View>
  );
}

const styles = StyleSheet.create({

});
