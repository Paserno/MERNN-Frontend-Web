import { createContext, useReducer } from "react";
import { fetchConToken } from "../helpers/fetch";
import { usuarioReducer } from "../reducers/usuarioReducer";
import { types } from "../types/types";


export const UsuarioContext = createContext();


const initialState = {
    isLoading: true,
    usuarios: [],   // Todos los usuartios de la base de dato
    jardineros: [],
    total: 0
}

export const UsuarioProvider = ({ children }) => {

    const [state, dispatch] = useReducer(usuarioReducer, initialState);

    const cargarUsuarios = async() => {
        const resp = await fetchConToken('admin/?limite=100', {}, 'GET');

        if ( resp.ok ){
            const { usuarios, total } = resp;
            dispatch({
                type: types.usuariosCargados,
                payload: [usuarios, total]
            });
        }
    }

    const cambiarRol = async(id, rol) => {
        const resp = await fetchConToken(`admin/${id}`, {rol}, 'PUT');

        if (resp.ok){
            const { usuario } = resp
            dispatch({
                type: types.cambiarRol,
                payload: usuario
            })
        }

    }



    return (
        <UsuarioContext.Provider value={{
            state,
            cargarUsuarios,
            cambiarRol

        }}
        >
            { children }
        </UsuarioContext.Provider>
    )
}