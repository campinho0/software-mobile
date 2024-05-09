import React, {useReducer} from 'react'
import firebase from '../../firebaseDB'
import FirebaseContext from './firebaseContext'
import FirebaseReducer from './firebaseReducer'
import { OBTENER_VEHICULOS_EXITO } from '../../types'
import _ from 'lodash'

const FirebaseState = props =>{

    const initialState={
        menu:[]
        
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
                    type: OBTENER_VEHICULOS_EXITO,
                    payload: vehiculos
                })
            }
    }
    return (
        <FirebaseContext.Provider   
            value={{
                menu: state.menu,
                firebase
                
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}

export default FirebaseState;