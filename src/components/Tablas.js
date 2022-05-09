import { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import { UsuarioContext } from '../context/UsuarioContext';
import { ItemTabla } from './ItemTabla' 

// FIXME: Codigo Spaghetti
export const Tablas = () => {
    const { state } = useContext(UsuarioContext);
    const { usuarios, total } = state;
   

    const {searchingUser} = useContext(SearchContext);
    const { startSearch, filterUser} = searchingUser;
    
    const [pagina, setPagina] = useState({
        num: 0,
        valor: 1
    });
    const { num, valor } = pagina

    const filtroAdmin = (usuario) => {
        if ( usuario.rol !== 'ADMIN_ROLE') return true;

    }
    
    const filtrarUsuarios = () => {
        const usuario = usuarios.filter(filtroAdmin);

        if (startSearch){
            return filterUser.slice(num, num + paginaMostrar)
        } else {
            return usuario.slice(num, num + paginaMostrar)
            
        }
    }

    let paginaMostrar = 5;
    let valorPagina = (startSearch) ? filterUser.length / paginaMostrar : total / paginaMostrar;
    const totalPaginas = Math.ceil(valorPagina);
    
    const nextPage = () => {
        if (valor !== totalPaginas ){
            setPagina({num: num + paginaMostrar, valor: valor + 1});
        }
    }
    const prePage = () => {
        if ( num > 0 && valor > 1){
            setPagina({ num: num - paginaMostrar, valor: valor - 1});
        }
    }


    return (
        <div>
            <table className="table table-striped table-dark table-hover" style={{ height: 450}}>
                <thead>
                    <tr>
                        {/* <th style={{ width: 25}} scope="col">ID</th> */}
                        <th style={{ width: 80}} scope="col">Nombre</th>
                        <th style={{ width: 80}} scope="col">Apellido</th>
                        <th style={{ width: 150}} scope="col">Correo</th>
                        <th style={{ width: 80}} scope="col">Ciudad</th>
                        <th style={{ width: 80}} scope="col">Dirección</th>
                        <th style={{ width: 80}} scope="col">Rol</th>
                        <th style={{ width: 100}} scope="col">Cambiar Rol</th>
                        <th style={{ width: 80}} scope="col">Registrar</th>
                        <th style={{ width: 80}} scope="col">Eliminar</th>
                    </tr>
                </thead>
                <tbody>

                    {

                        filtrarUsuarios().map( (usuario, index) => (
                            <ItemTabla 
                                key= { usuario.uid }
                                ids= {index}
                                { ...usuario } 
                            />
                        ) )
                    }                    
                </tbody>
            </table>
            <div className='pagination justify-content-center'>
                <button
                    type='button'
                    className='btn btn-dark ms-1'
                    onClick={ prePage }
                >
                    Previous 
                </button> 
                &nbsp;
                <button
                    type='button'
                    className='btn btn-dark'
                    onClick={ nextPage }
                >
                    Next
                </button>

            </div>
            
        </div>
    )
}
