import { createContext, useReducer } from "react";
import Swal from "sweetalert2";
import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { usuarioReducer } from "../reducers/usuarioReducer";
import { types } from "../types/types";


export const UsuarioContext = createContext();


const initialState = {
    isLoading: true,
    usuarios: [],   // Todos los usuartios de la base de dato
    jardineros: [],
    jardinero: {},
    usuario: {},   // Un Registro de la BD
    total: 0,
    modalOpen: false,
    modalOpenR: false,
    nombre: '',
    ok: false
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

    const obtenerUsuario = async( id ) => {
        Swal.fire({
            title: 'Cargando...',
            text: 'Espere por favor...',
            allowOutsideClick: false,
            backdrop: 'rgba(0,0,0,1)',
            didOpen: () => {
                Swal.showLoading();
            }
        });
        const resp = await fetchConToken(`admin/${ id }`);

        if (resp.ok){
            const { usuario } = resp;
            dispatch({
                type: types.obtenerUsuario,
                payload: usuario
            })
        }
        Swal.close();
    }

    const eliminarUsuario = async( id ) => {

        const resp = await fetchConToken(`admin/${ id }`, {}, 'DELETE')

        console.log(resp)
        if (resp.ok) {
            const { usuario } = resp;
            dispatch({
                type: types.eliminarUsuario,
                payload: usuario
            });
        }

    }

    const uiOpenModal = () => {
        dispatch({type: types.uiOpenModal})
    };
    
    const uiCloseModal = () => {
        dispatch({
            type: types.uiCloseModal
        })
    };

    const uiOpenModalRegister = () => {
        dispatch({type: types.uiOpenModalRegister})
    }
    const uiCloseModalRegister = () => {
        dispatch({type: types.uiCloseModalRegister})
    }

    const obtenerJardinero = async( id ) => {
        Swal.fire({
            title: 'Cargando...',
            text: 'Espere por favor...',
            allowOutsideClick: false,
            backdrop: 'rgba(0,0,0,1)',
            didOpen: () => {
                Swal.showLoading();
            }
        });
        const resp = await fetchConToken(`admin/jardin/${ id }`);

        if (resp.ok){
            const { jardinero } = resp;
            dispatch({
                type: types.obtenerJardinero,
                payload: jardinero
            })
            okActualizarDatos(resp.ok);
        } else {
            const jardinero = {};
            dispatch({
                type: types.obtenerJardinero,
                payload: jardinero
            })
            okActualizarDatos(resp.ok);
            console.log(resp.ok)
        }
        Swal.close();
    }

    const obtenerNombreJardinero = (nombre) => {
        dispatch({
            type: types.obtenerNombre,
            payload: nombre
        })
    } 

    const okActualizarDatos = (ok) => {
        dispatch({
            type: types.okActualizarDatos,
            payload: ok
        })
    }

    const crearJardinero = async(usuario, especialidad, descripcion,activo ) => {
        
        const resp = await fetchConToken('admin/jardinero', { usuario, especialidad, descripcion, activo}, 'POST');
       
        if ( resp.ok ) {
            const {jardinero} = resp
            dispatch({
                type: types.crearJardinero,
                payload: jardinero
            })
        }

    }
    const actualizarJardinero = async(id ,activo, descripcion, especialidad) => {

        const resp = await fetchConToken(`admin/jardinero/${id}`, { especialidad, descripcion, activo}, 'PUT');
        console.log(resp)
        if (resp.ok ){
            const {jardinero} = resp
            dispatch({
                type: types.crearJardinero,
                payload: jardinero
            })
        }
    }

    const registrarUsuario = async(nombre, correo, password, apellido, ciudad, direccion) => {
        const resp = await fetchSinToken(`admin`, {nombre, correo, password, apellido, ciudad, direccion}, 'POST');

        console.log(resp)

        if (resp.ok){
            const { usuario } = resp;
            dispatch({
                type: types.registrarUsuario,
                payload: usuario
            })
        }


    }


    return (
        <UsuarioContext.Provider value={{
            state,
            cargarUsuarios,
            cambiarRol,
            uiOpenModal,
            uiCloseModal,
            obtenerUsuario,
            uiOpenModalRegister,
            uiCloseModalRegister,
            obtenerJardinero,
            obtenerNombreJardinero,
            crearJardinero,
            actualizarJardinero,
            eliminarUsuario,
            registrarUsuario,

        }}
        >
            { children }
        </UsuarioContext.Provider>
    )
}