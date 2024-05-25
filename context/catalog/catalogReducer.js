import Vehicle from "../../src/components/Vehicle";
import { SELECT_VEHICLE } from "../../types";

export default (state,action) =>{
    switch(action.type){
        case SELECT_VEHICLE:
            return{
                ...state,
                Vehicle: action.payload
            }
        default:
            return state;
    }
}