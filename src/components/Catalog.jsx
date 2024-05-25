import React, { Fragment, useContext, useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import SearchVehicles from './SearchVehicles';
import Contact from './Contact';
import Vehicle from './Vehicle';
import firebase from 'firebase/compat/app';
import FirebaseContext from '../../context/firebase/firebaseContext';
import CatalogContext from '../../context/catalog/catalogContext';
import { useNavigation } from '@react-navigation/native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const initialVehicles = [
  
];

const Catalog = ({ navigation }) => {
  const { catalog, obtenerVehiculos } = useContext(FirebaseContext);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  useEffect(() => {
  
  
    console.log("filteredVehicles");
    const catalogoObtenido = obtenerVehiculos();
    setFilteredVehicles(catalogoObtenido);
     
    console.log(filteredVehicles);
    obtenerVehiculos();
  }, []);

  const handleSearch = (filter) => {
    console.log(filter)
    const filtered = allVehicles.filter(vehicle => {
      const brandMatches = vehicle.description.toLowerCase().includes(filter.brand.toLowerCase());
      const priceMatches = vehicle.price == filter.price;
      return priceMatches || brandMatches;
    });
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
        <View style={styles.scrollView}>
          <View style={styles.componentContainer}>
            <SearchVehicles onSearch={handleSearch} />
          </View>
          <Text style={styles.title}>Catalogo</Text>
          <View style={styles.componentContainer}>
            {catalog.length > 0 ? (
              catalog.map((vehicle, i) => {
                const { image, brand, model, price, id } = vehicle
              return (
                <TouchableHighlight onPress = {() => navigation.navigate('Vehicle Detail', { vehicleId: vehicle.id })}>
                <Fragment key={id}>
                  <Vehicle
                    key={id}
                    urlImage={image}
                    brand={brand}
                    model={model}
                    price={price} />
                </Fragment>
                </TouchableHighlight>
              )
              })
            ) : (
              <Text>No se encontraron vehiculos.</Text> 
            )}
            <Button
              style={styles.button}
              labelStyle={styles.buttonLabel}
              mode='contained'
              onPress={() => navigation.navigate('Test Drive Request')}>
              Programa un test drive
            </Button>
          </View>
          <Contact />
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
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  componentContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
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

export default Catalog;
