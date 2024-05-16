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

const initialVehicles = [
  
];

const Catalog = ({ navigation }) => {
  const [allVehicles, setAllVehicles] = useState(initialVehicles);
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const {catalog, obtenerVehiculos} = useContext(FirebaseContext);

  useEffect(() =>{
    obtenerVehiculos();
  }, []);

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
      <View style={styles.scrollView}>
        <View style={styles.componentContainer}>
          <SearchVehicles onSearch={handleSearch} />
        </View>
        <Text style={styles.title}>Vehicle Catalog</Text>
        <View  style={styles.componentContainer}>
          {catalog.map((vehicle, i) =>{
            const {image, brand, model, price, id} = vehicle
            return(
              <Fragment key={id}>
                <Vehicle
                key={id}
                urlImage = {image}
                brand  = {brand}
                model = {model}
                price = {price}/>
              </Fragment>
            )
          })}
          <Button
            style={styles.button}
            labelStyle={styles.buttonLabel}
            mode='contained'
            onPress={() => navigation.navigate('Test Drive Request')}>
            Programa un test drive
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
