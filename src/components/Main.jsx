import React from 'react';
import { Button, View, Image, Text, StyleSheet } from 'react-native';

const Main = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../resources/logo.jpg')} style={styles.image} />
      <Button
            title="See vehicles"
            onPress={() => navigation.navigate('Catalog')}
            />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F3135',
        justifyContent: 'center',
        alignItems: 'center'
      },
    image: {
        width: 500,
        height: 300,
        backgroundColor: 'gray'
      },

});

export default Main;
