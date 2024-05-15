import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={require('../resources/logo.png')} style={styles.image} />
        </View>
        <View style={styles.containerSlogan}>
          <Text style={styles.tittle}>Eslogan</Text>
        </View>
        <View>
          
            <Button
              style={styles.button}
              labelStyle= {styles.buttonLabel}
              mode='contained'
              onPress={() => navigation.navigate('Catalog')}>
              Ver vehiculos
            </Button>
            <Button
              style={styles.button}
              mode='contained'
              onPress={() => navigation.navigate('Catalog')}>
              Test drive
            </Button>
            <Button
              style={styles.button}
              mode='contained'
              onPress={() => navigation.navigate('Catalog')}>
              Servicio mecanico
            </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    width:500
  },
  containerSlogan: {
    height:500
  },
  image: {
    width: 300,
    height: 300,
    backgroundColor: 'white'
  },
  button: {
    borderRadius: 50,
    backgroundColor: 'black',
    margin: 10,
    padding: 10
  },
  buttonLabel: {
    fontSize: 20
  },
  tittle: {
    fontSize: 50,
    color: 'black'
  },

});

export default Main;
