import { GET_VEHICLE_SUCCESSFULLY } from "../../types";
export default (state,action) =>{
    switch(action.type){
        case GET_VEHICLE_SUCCESSFULLY:
            return{
                ...state,
                catalog: action.payload
            }
        default:
            return state;
    }
}