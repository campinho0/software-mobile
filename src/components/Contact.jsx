import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.subtitle}>Address:</Text>
      <Text style={styles.text}>cll 123 cra 8 # 40</Text>
      <Text style={styles.subtitle}>Phone:</Text>
      <Text style={styles.text}>456-7890</Text>
      <Text style={styles.subtitle}>Email:</Text>
      <Text style={styles.text}>concesionario@correo.com</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 430,
    marginTop: 50,
    justifyContent: 'center',
    backgroundColor: '#5A5C5E',
    padding: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white'
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
    color: 'white'
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: 'white'
  },
});

export default Contact;
