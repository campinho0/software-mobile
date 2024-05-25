import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button } from 'react-native-paper';


const TestDriveRequest = () => {
  const [name, setName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = () => {
    console.log('Nombre:', name);
    console.log('Número de identificación:', idNumber);
    console.log('Número de celular:', phoneNumber);
    console.log('Fecha de cita:', date);
  };
  const showRequest = () =>
    Alert.alert(
      'Confirmacion de solicitud',
      'Nombre: ' + name + '\n'+
      'Número de identificación: ' + idNumber + '\n'+
      'Número de celular: ' + phoneNumber + '\n' +
      'Fecha de cita: '+ date + '\n',
      [
        {
          text: 'Confirmar',
          onPress: () => Alert.alert('Test Drive agendado'),
          style: 'ok',
        },
      ],
      {
        cancelable: true,
        onDismiss: () =>
          Alert.alert(
            '¿Quiere cancelar su solicitud?',
          ),
      },
    );

  return (
    <ScrollView>
      <View style={styles.scrollView}>
        <Text style={styles.title}>Solicitud de Test drive</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Numero de identificacion"
          value={idNumber}
          onChangeText={text => setIdNumber(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Numero de telefono"
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Fecha(YYYY-MM-DD)"
          value={date}
          onChangeText={text => setDate(text)}
        />
        <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              mode='contained'
              onPress={showRequest}>
              Programa un test drive
            </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    color: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#C8CFD8',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#0F6FC4',
    margin: 10,
    padding: 10,
    width:250
  },
  buttonLabel: {
    fontSize: 20
  },
});

export default TestDriveRequest;
