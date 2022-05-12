import { createContext, useContext, useState } from 'react';
import { UsuarioContext } from './UsuarioContext';



export const SearchContext = createContext();


export const SearchProvider = ({ children }) => {

    const [searchingUser, setSearchingUser] = useState({
        startSearch: false,
        valueSearch: '',
        filterUser: []
    });
    let { filterUser } = searchingUser;
    const { state } = useContext(UsuarioContext);

     const getUsuarioByName = ( name = '') => {

        const { usuarios } = state;
      
        if( name.length === 0 ){
            setSearchingUser({
                ...searchingUser,
                startSearch: false
            });
            return []
        }
        name = name.toLowerCase();
        filterUser = usuarios.filter( usuario => usuario.nombre.toLowerCase().includes(name) || usuario.correo.toLowerCase().includes(name));

        setSearchingUser({
            ...searchingUser,
            startSearch: true,
            valueSearch: name,
            filterUser
        })
        return true;
    }

    

    return (
        <SearchContext.Provider value={{
            searchingUser,
            getUsuarioByName,
        }}
        >
            { children }
        </SearchContext.Provider>
    )
}
