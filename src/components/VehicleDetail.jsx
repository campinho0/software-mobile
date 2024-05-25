import React, { Fragment, useContext, useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import FirebaseContext from '../../context/firebase/firebaseContext';
import { Button } from 'react-native-paper';
import Vehicle from './Vehicle';
import Contact from './Contact';


const VehicleDetail = ({ route , navigation}) => {
    const { vehicleId } = route.params;
    const { catalog, obtenerVehiculos } = useContext(FirebaseContext);
    useEffect(() => {
        obtenerVehiculos();
    }, []);

    return (
        <View>
            <ScrollView>
                <View style={styles.scrollView}>

                    <Text style={styles.title}>Vehiculo</Text>
                    <View style={styles.componentContainer}>
                        {catalog.length > 0 ? (
                            catalog.map((vehicle, i) => {
                                const { image, brand, model, price, id, description } = vehicle
                                if (vehicle.id == vehicleId) {
                                    return (
                                        <Fragment key={id}>
                                            <Vehicle
                                                key={id}
                                                urlImage={image}
                                                brand={brand}
                                                model={model}
                                                price={price} />
                                            <View style={styles.containerDescription}>
                                                <Text style={styles.description} >{description}</Text>
                                            </View>
                                        </Fragment>

                                    )
                                } else {
                                    <Text>No se encontro el vehiculo seleccionado.</Text>
                                }
                            })
                        ) : (
                            <Text>No se encontro el vehiculo seleccionado.</Text>
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
        color: 'black'
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
        width: 250
    },
    buttonLabel: {
        fontSize: 20
    },
    description: {
        fontSize: 20,
        color: 'black',
        textAlign: 'justify'
    },
    containerDescription:{
        padding: 20,
        justifyContent:'center'
    }
});

export default VehicleDetail;
