import { useContext } from 'react';
import { UsuarioContext } from '../context/UsuarioContext';
import { ItemTabla } from './ItemTabla' 

export const Tablas = () => {
    const { state } = useContext(UsuarioContext)
    const { usuarios } = state;
    const i = 0;
    return (
        <div>
            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Correo</th>
                        <th scope="col">Ciudad</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map( (usuario, index) => (
                            <ItemTabla 
                                key= { usuario.uid }
                                ids= {index}
                                { ...usuario } 
                            />
                        ) )
                    }
                {/* {
                    heroes.map( hero => (
                        <HeroCard 
                            key={ hero.id }
                            {...hero }
                        />
                    ))
                } */}
                {/* <ItemTabla /> */}
                    
                </tbody>
            </table>
        </div>
    )
}
