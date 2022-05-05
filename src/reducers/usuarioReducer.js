import { types } from "../types/types";



export const usuarioReducer = ( state, action) => {


    switch (action.type) {
        case types.usuariosCargados:
            return {
                ...state,
                usuarios: action.payload[0],
                total: action.payload[1],
                isLoading: false
            };
    
        default:
            return state;
    }

}