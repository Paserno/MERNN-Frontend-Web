import { types } from "../types/types";



export const usuarioReducer = ( state, action) => {


    switch (action.type) {
        case types.usuariosCargados:
            return {
                ...state,
                usuarios: [...action.payload],
                isLoading: false
            };
    
        default:
            return state;
    }

}