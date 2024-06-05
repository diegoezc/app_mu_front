import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Dimensions, TextInput, Image,  FlatList, Text, Pressable } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import tw, { style } from 'twrnc';
import ButtonGradient from '../components/ButtonGradient';
import { useMemo } from 'react';
const {width, height} = Dimensions.get('screen')

export default function FarmScreen() {
  return (
    <View>
        <View style={tw`w-full flex justify-center items-center h-45 bg-[#25B201] `}>
            <TextInput
                placeholder='Buscar Finca'
                style={tw` text-gray-500 border-2 border-gray-300 rounded-3xl h-12 pl-3 w-80 mt-4 bg-white my-8`}
            />
        <Image 
        style={{width: width, height: 80}}
        source={require('../assets/wavesOpacity.png')
        }
        ></Image>
        </View>
    <DataTable style={styles.container}> 
      <DataTable.Header style={styles.tableHeader}> 
        <DataTable.Title>Name</DataTable.Title> 
        <DataTable.Title>Favourite Food</DataTable.Title> 
        <DataTable.Title>Age</DataTable.Title> 
      </DataTable.Header> 
      <DataTable.Row  onPress={()=> console.log('hola')}> 
        <DataTable.Cell>Radhika</DataTable.Cell> 
        <DataTable.Cell>Dosa</DataTable.Cell> 
        <DataTable.Cell>23</DataTable.Cell> 
      </DataTable.Row> 
  
      <DataTable.Row onPress={()=> console.log('hola')}> 
        <DataTable.Cell>Krishna</DataTable.Cell> 
        <DataTable.Cell>Uttapam</DataTable.Cell> 
        <DataTable.Cell>26</DataTable.Cell> 
      </DataTable.Row> 
      <DataTable.Row onPress={()=> console.log('hola')}> 
        <DataTable.Cell>Vanshika</DataTable.Cell> 
        <DataTable.Cell>Brownie</DataTable.Cell> 
        <DataTable.Cell>20</DataTable.Cell> 
      </DataTable.Row> 
      <DataTable.Row onPress={()=> console.log('hola')}> 
        <DataTable.Cell>Teena</DataTable.Cell> 
        <DataTable.Cell>Pizza</DataTable.Cell> 
        <DataTable.Cell>24</DataTable.Cell> 
      </DataTable.Row> 
    </DataTable> 
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
    },
    header: {
      flexDirection: 'row',
      backgroundColor: '#f4f4f4',
      padding: 10,
    },
    row: {
      flexDirection: 'row',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    cell: {
      flex: 1,
      textAlign: 'center',
    },
  });