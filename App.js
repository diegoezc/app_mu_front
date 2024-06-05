import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, TextInput, Dimensions, Image } from 'react-native';
import tw from 'twrnc';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import SingUp from './screens/SingUp';
import Home from './screens/Home';
import ForgotPassword from './screens/ForgotPassword';
import FarmScreen from './screens/FarmScreen';
const {width, height} = Dimensions.get('window')


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen
          name="Home"
          component={Home}

          options={{statusBarColor:"#5BB600", title:"Home",headerStyle:{backgroundColor:"#5BB600"},
        headerTintColor: "#fff",
        headerTitleAlign:"center",
        headerShadowVisible: false,
        }}
        />
        <Drawer.Screen
          name="LoginScreen"
          component={LoginScreen}

          options={{statusBarColor:"#25B201", title:"Log In",headerStyle:{backgroundColor:"#25B201"},
        headerTintColor: "#fff",
        headerTitleAlign:"center",
        headerShadowVisible: false,
        }}
        />
        <Drawer.Screen
          name='SingUp'
          component={SingUp}

          options={{statusBarColor:"#25B201", title:"Sing Up",headerStyle:{backgroundColor:"#25B201"},
          headerTintColor: "#fff",
          headerTitleAlign:"center",
          headerShadowVisible: false,

          }}
        />
        <Drawer.Screen
          name='ForgotPassword'
          component={ForgotPassword}
           
          options={{statusBarColor:"#25B201", title:"ForgotPassword",drawerItemStyle:{ display: 'none' } ,headerStyle:{backgroundColor:"#25B201"},
          headerTintColor: "#fff",
          headerTitleAlign:"center",
          headerShadowVisible: false,

          }}
        />
         <Drawer.Screen
          name='FarmScreen'
          component={FarmScreen}

          options={{statusBarColor:"#25B201", title:"FarmScreen",headerStyle:{backgroundColor:"#25B201"},
          headerTintColor: "#fff",
          headerTitleAlign:"center",
          headerShadowVisible: false,

          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

