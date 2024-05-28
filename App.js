import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native';
import tw from 'twrnc';
import ButtonGradient from './components/ButtonGradient';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
const {width, height} = Dimensions.get('window')


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{statusBarColor:"#7ACFFF", title:"Login",headerStyle:{backgroundColor:"#7ACFFF"},
        headerTintColor: "#fff",
        headerTitleAlign:"center",
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

