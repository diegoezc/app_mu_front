import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native';
import tw from 'twrnc';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
const {width, height} = Dimensions.get('window')


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='LoginScreen'>
        <Drawer.Screen
          name="LoginScreen"
          component={LoginScreen}

          options={{statusBarColor:"#7ACFFF", title:"Login",headerStyle:{backgroundColor:"#7ACFFF"},
        headerTintColor: "#fff",
        headerTitleAlign:"center",
              headerShadowVisible: false,
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

