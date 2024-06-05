import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Dimensions, TextInput, Image,  FlatList, Text, Pressable } from 'react-native';
import { DataTable } from 'react-native-paper';
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import tw, { style } from 'twrnc';
import ButtonGradient from '../components/ButtonGradient';
import { useMemo } from 'react';
import {CustomTable} from "../components/CustomTable";
const {width, height} = Dimensions.get('screen')

export default function FarmScreen() {
    const data = useMemo(()=>({
        columns:[
            'columna 1',
            'columna 2'
        ],
        rows:[
            [{
              item:'info 1'
            }, {
            item:'info 2'
            }],
            [{
                item:'info 1'
            }, {
                item:'info 2'
            }]
        ]
    }),[])
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
        <CustomTable columns={data.columns} rows={data.rows}/>

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