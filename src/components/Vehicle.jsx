import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native'

const Vehicle = ({ urlImage, brand, model, price }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: urlImage, }}
                style={styles.img}
            />
            <Text style={styles.title}> {brand} {model}</Text>
            <Text style={styles.title}>$ {price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: '#D9DEE3',
        margin: 10,
        padding: 30
    },
    title: {
        fontSize: 25,
        color: '#000000',
        textAlign: 'center',
        marginHorizontal: 15,
        marginVertical: 15
    },
    img: {
        width:300,
        height: 300
    }
})

export default Vehicle
