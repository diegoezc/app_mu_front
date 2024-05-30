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

          options={{statusBarColor:"#25B201", title:"",headerStyle:{backgroundColor:"#25B201"},
        headerTintColor: "#fff",
        headerTitleAlign:"center",
        headerShadowVisible: false,
        headerRight: () => (
          <View>
            <Image
          style={{width: 50, height: 50, marginRight: 170}}
          source={require('./assets/vaca-logo.png')} 
          ></Image>
          </View>
          )
        }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

