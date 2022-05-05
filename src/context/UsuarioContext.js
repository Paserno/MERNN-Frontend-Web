import { createContext, useReducer } from "react";
import { fetchConToken } from "../helpers/fetch";
import { usuarioReducer } from "../reducers/usuarioReducer";
import { types } from "../types/types";


export const UsuarioContext = createContext();


const initialState = {
    isLoading: true,
    usuarios: [],   // Todos los usuartios de la base de dato
    jardineros: []
}

export const UsuarioProvider = ({ children }) => {

    const [state, dispatch] = useReducer(usuarioReducer, initialState);

    const cargarUsuarios = async() => {
        const resp = await fetchConToken('admin', {}, 'GET');

        console.log(resp)
        if ( resp.ok ){
            const { usuarios, total } = resp;
            console.log(total);
            dispatch({
                type: types.usuariosCargados,
                payload: usuarios
            });
        }
    }


    return (
        <UsuarioContext.Provider value={{
            state,
            cargarUsuarios

        }}
        >
            { children }
        </UsuarioContext.Provider>
    )
}