import React from "react";
import { Table, TableWrapper, Row, Rows } from 'react-native-table-component';
import {StyleSheet} from "react-native";
import { DataTable } from 'react-native-paper';

export const CustomTable = ({rows,columns})=>{
    return (
        <DataTable style={styles.container}>
            <DataTable.Header style={styles.tableHeader}>
                {columns && columns.map((col,index)=><DataTable.Title key={index}>{col}</DataTable.Title>)}

            </DataTable.Header>
            {
                rows && rows.map((row,index)=>(
                    <DataTable.Row  onPress={()=> console.log('hola')}>

                        {
                            row.item && row.item.map((item,index)=>{
                                <DataTable.Cell key={index}>{item}</DataTable.Cell>

                            })
                        }
                    </DataTable.Row>
                ))
            }



        </DataTable>
    )
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