import React, {useReducer} from 'react'
import CatalogContext from './catalogContext'
import CatalogReducer from './catalogReducer'
import { SELECT_VEHICLE } from '../../types'

const CatalogState = props =>{

    const initialState={
        catalog:[],
        vehicle: null
    }

    const[state, dispatch] = useReducer(CatalogReducer, initialState)
    const selectVehicle = () =>{
        dispatch({
            type: SELECT_VEHICLE,
            payload: vehicle
        })
    }
    return (
        <CatalogContext.Provider   
            value={{
                catalog: state.catalog
            }}
        >
            {props.children}
        </CatalogContext.Provider>
    )
}

export default CatalogState;