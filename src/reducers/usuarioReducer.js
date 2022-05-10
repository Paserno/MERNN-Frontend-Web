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


            case types.eliminarUsuario: 
            return {
                ...state,
                usuarios: state.usuarios.filter(
                    e => ( e.uid === action.payload.uid)
                            ? false
                            : true

                )
            }

            case types.obtenerUsuario:
                return {
                    ...state,
                    usuario: action.payload
                }

            case types.obtenerJardinero:
                return {
                    ...state,
                    jardinero: action.payload
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
    

            case types.uiOpenModalRegister:
                return {
                    ...state,
                    modalOpenR: true
                }
    
            case types.uiCloseModalRegister:
                return {
                    ...state,
                    modalOpenR: false
                }

            case types.obtenerNombre:
                return {
                    ...state,
                    nombre: action.payload
                }
            
            case types.okActualizarDatos:
                return {
                    ...state,
                    ok: action.payload
                }

            case types.crearJardinero:
                return {
                    ...state,
                    jardinero: action.payload
                }

            case types.actualizarJardinero:
                return {
                    ...state,
                    jardinero: action.payload
                }

            case types.registrarUsuario:
                return {
                    ...state,
                    usuarios: [...state.usuarios, action.payload]
                }

        default:
            return state;
    }

}