import React, { useReducer, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import TestDriveRequest from './TestDriveRequest'

const Testdriverlist = props =>{

    const initialList={
        handleSubmit:[],
        appointment: null
    }


    const[state,dispatch] = useReducer(TestDriveRequest)
    const selectinfo = ()=>{
        dispatch({
            type: SELET_INFO,
            payload: appointment

        })
    }
    return(
        <TestdriveContex.Procider
            value={{
                testdrive: state.testdrive
            }}
        >
            {props.children}
        </TestdriveContex.Procider>
    )
}

export default Testdriverlist;