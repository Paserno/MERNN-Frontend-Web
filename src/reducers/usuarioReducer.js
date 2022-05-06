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

        case types.cambiarRol: 
            return {
                ...state,
                usuarios: state.usuarios.map(
                    e => ( e.uid === action.payload.uid)
                            ? action.payload
                            : e

                )
            }

            case types.obtenerUsuario:
                return {
                    ...state,
                    usuario: action.payload
                }

            case types.uiOpenModal:
                return {
                    ...state,
                    modalOpen: true
                }
    
            case types.uiCloseModal:
                return {
                    ...state,
                    modalOpen: false
                }
    
        default:
            return state;
    }

}