import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

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
      <Text style={styles.title}>Search Vehicles</Text>
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
      <Button title="Search" onPress={searchVehicles} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
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
  
});

export default SearchVehicles;