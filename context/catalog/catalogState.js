import React, {useReducer} from 'react'
import CatalogContext from './catalogContext'
import CatalogReducer from './catalogReducer'

const CatalogState = props =>{

    const initialState={
        catalog:[]
    }

    const[state, dispatch] = useReducer(CatalogReducer, initialState)
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