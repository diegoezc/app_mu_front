import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import tw from 'twrnc';

export default function ButtonGradient() {
  return (
    <Pressable onPress={()=> console.log('hola')}>
      <LinearGradient
        // Button Linear Gradient
        colors={['#25B201', '#B2B600']}
        start={{x:0, y:0}}
        end={{x:1, y:0}}
        style={styles.button}>
        <Text style={styles.text}>Iniciar Sesion</Text>
      </LinearGradient>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: '15px',
    padding: 15,
    alignItems: 'center',
    borderRadius: 50,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});