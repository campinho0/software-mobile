import React from 'react'
import {  View } from 'react-native'
import { Text, PaperProvider, TextInput, Button } from 'react-native-paper'

const Appointment = () => {
  return (
    <PaperProvider>
        <View>
            <Text>Appointment</Text>
            <TextInput>

            </TextInput>
            <Button mode='contained'>submit</Button>
        </View>
    </PaperProvider>
  )
}

export default Appointment
