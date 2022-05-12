import React, { useContext, useEffect, useState } from 'react'
import { ModalComponent } from '../components/ModalComponent';
import { RegistrarJardinero } from '../components/RegistrarJardinero';
import { Tablas } from '../components/Tablas'
import { SearchContext } from '../context/SearchContext';
import { UsuarioContext } from '../context/UsuarioContext'


export const AdminScreen = () => {

  const {cargarUsuarios , state} = useContext(UsuarioContext);
  const {getUsuarioByName} = useContext(SearchContext)

  const { isLoading } = state;

  const [searchUser, setSearchUser] = useState({
    buscar: '',
  })
  const tiempoEspera =  600000
  
  useEffect(() => {
    cargarUsuarios();
  }, [])

  setTimeout(() => {
    cargarUsuarios();    
  }, tiempoEspera);

  const handleInputChange = ({target}) => {
    setSearchUser({
      ...searchUser,
      [ target.name ]: target.value
  });
  }
  
  
  const handleSearch = (e) => {
    e.preventDefault();
    getUsuarioByName(searchUser.buscar)
  }

  

  return (
    <div className='container' >
      <center>
      <h1 style={{marginBottom: '15px', marginTop: '10px'}}>Administración de Usuarios</h1>
      </center>
      <form 
        className='form-group row justify-content-end'
        onSubmit={ handleSearch }
      >
          <label className='col-form-label'>Buscar: </label>
          <div className="col-sm-3">
            <input 
              className='form-control' 
              placeholder='Buscar un Usuario' 
              name='buscar'
              value={ searchUser.buscar }
              onChange={ handleInputChange }
            />

          </div>
        </form>

    {
      (isLoading) 
          ? (<h2 className='container'>Cargando...</h2>)
          : <Tablas />
    }
      
      <ModalComponent />
      <RegistrarJardinero />
     
    </div>
  )
}
