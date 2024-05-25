import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const SearchVehicles = ({ onSearch }) => {
  const [priceInput, setPriceInput] = useState(0);
  const [brandInput, setBrandInput] = useState("");
  const [modelInput, setModelInput] = useState("");

  const searchVehicles = () => {
    const filter = {
      brand: brandInput.trim(),
      model: modelInput.trim(),
      price: priceInput,
    };
    onSearch(filter);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar vehiculos</Text>
      <TextInput
        onChangeText={(value) => setBrandInput(value)}
        value={brandInput}
        style={styles.input}
        placeholder="Marca"
      />
      <TextInput
        onChangeText={(value) => setModelInput(value)}
        value={modelInput}
        style={styles.input}
        placeholder="Modelo"
      />
      <TextInput
        onChangeText={(value) => setPriceInput(Number(value))}
        value={priceInput}
        style={styles.input}
        placeholder="Precio"
        keyboardType="numeric"
      />
      <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              mode='contained'
              onPress={searchVehicles}>
              Buscar
            </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
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

export default SearchVehicles;