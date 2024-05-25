import React, {useReducer} from 'react'
import firebase from '../../firebaseDB'
import FirebaseContext from './firebaseContext'
import FirebaseReducer from './firebaseReducer'
import { GET_VEHICLE_SUCCESSFULLY } from '../../types'
import _ from 'lodash'

const FirebaseState = props =>{

    const initialState={
        catalog:[]
        
    }

    const[state, dispatch] = useReducer(FirebaseReducer, initialState)

    const obtenerVehiculos = () =>{
        firebase.db
            .collection('vehicles')
            .onSnapshot(manejarSnapshot)

            function manejarSnapshot(snapshot){
                let vehiculos = snapshot.docs.map( doc=>{
                    return{
                        id: doc.id,
                        ...doc.data()
                    }
                })
                vehiculos = _.sortBy(vehiculos, 'marcaScrollView')
                dispatch({
                    type: GET_VEHICLE_SUCCESSFULLY,
                    payload: vehiculos
                })
            }
    }
    return (
        <FirebaseContext.Provider   
            value={{
                catalog: state.catalog,
                firebase,
                obtenerVehiculos 
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;