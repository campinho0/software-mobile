import React, { useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import SearchVehicles from './SearchVehicles';
import Contact from './Contact';
import Vehicle from './Vehicle';
import firebase from 'firebase/compat/app';

const initialVehicles = [
  {
    id: 1,
    urlImagen: 'https://cdn.motor1.com/images/mgl/AkBE9P/s3/new-honda-civic-e-hev-hybrid-europe.jpg',
    description: 'Honda Civic, 2024',
    price: 25000,
  },
  {
    id: 2,
    urlImagen: 'https://hips.hearstapps.com/hmg-prod/images/ford-f-150-raptor-2024-1-6502f263a6cce.jpg',
    description: 'Ford F150 raptor',
    price: 30000,
  },
  {
    id: 3,
    urlImagen: 'https://cdn.motor1.com/images/mgl/x60VP/s3/lanzamiento-ford-mustang-2020.jpg',
    description: 'Ford Mustang 2020 ',
    price: 40000,
  },
  {
    id: 4,
    urlImagen: 'https://cdn.motor1.com/images/mgl/x60VP/s3/lanzamiento-ford-mustang-2020.jpg',
    description: 'Honda Civic, 2025',
    price: 25000,
  }
];

const Catalog = ({ navigation }) => {
  const [allVehicles, setAllVehicles] = useState(initialVehicles);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  const handleSearch = (filter) => {
    console.log(filter)
    const filtered = allVehicles.filter(vehicle => {
      const brandMatches = vehicle.description.toLowerCase().includes(filter.brand.toLowerCase());
      const priceMatches = vehicle.price == filter.price;
      return  priceMatches || brandMatches ;
    });
    console.log(firebase)
    setFilteredVehicles(filtered);
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.urlImagen }} style={styles.image} />
      <Text style={styles.name}>{item.description}</Text>
      <Text style={styles.description}>Price: ${item.price}</Text>
    </View>
  );

  return (
    <View>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.componentContainer}>
          <SearchVehicles onSearch={handleSearch} />
        </View>
        <Text style={styles.title}>Vehicle Catalog</Text>
        <View  style={styles.componentContainer}>
          {allVehicles.map((vehicle) =>(
            <Vehicle
                key={vehicle.id}
                urlImagen = {vehicle.urlImagen}
                description  = {vehicle.description}
                price = {vehicle.price}
            />
        ))}
          <Button
            style={styles.button}
            labelStyle={styles.buttonLabel}
            mode='contained'
            onPress={() => navigation.navigate('Test Drive Request')}>
            Programa un test drive
          </Button>
        </View >
      </View> 
      <Contact/>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  componentContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Catalog;
