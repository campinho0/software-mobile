import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Contact from './Contact';

const Main = ({ navigation }) => {
  return (
    <View>
      <ScrollView >
        <View style={styles.scrollView}>
      <View style={styles.container}>
          <Image source={require('../resources/logo.png')} style={styles.logo} />
          </View>
        <View style={styles.containerSlogan}>
          <Text style={styles.tittle}>Encuentra tu camino con nosotros: donde cada viaje comienza con el auto perfecto.</Text>
        </View>
        <View style={styles.container}>
          <View style={styles.container}>
            <Image source={require('../resources/blue_car.png')} style={styles.blueCar} />
          </View>
          <Button
            style={styles.button}
            labelStyle={styles.buttonLabel}
            mode='contained'
            onPress={() => navigation.navigate('Catalog')}>
            Ver vehiculos
          </Button>
          <Button
            style={styles.button}
            labelStyle={styles.buttonLabel}
            mode='contained'
            onPress={() => navigation.navigate('Test Drive Request')}>
            Test drive
          </Button>
          <Button
            style={styles.button}
            labelStyle={styles.buttonLabel}
            mode='contained'
            onPress={() => navigation.navigate('Service Appointment')}>
            Servicio mecanico
          </Button>
        </View>
        <Contact/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300
  },
  containerSlogan: {
    flex: 1,
    height: 300,
    width: 250,
    justifyContent: 'center',
    margin: 60,
    backgroundColor: '#5A5C5E',
    borderRadius: 30
  },
  logo: {
    maxWidth : 250,
    height: 180,
    margin: 10,
  },
  blueCar: {
    maxWidth : 400,
    height: 200
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
  tittle: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center'
  },

});

export default Main;
