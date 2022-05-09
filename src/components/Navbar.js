import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {

    const navigate = useNavigate();
    const {logout, auth} = useContext(AuthContext)

    const handleLogout = () => {
        logout();
        localStorage.removeItem('token');
        navigate('/auth', {
            replace: true
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Inicio
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? ' active ' : '') }
                        to="/"
                    >
                        Administrar
                    </NavLink>

                    <NavLink
                        className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? ' active ' : '') }
                        to="/rol" style={{ width: '120px'}}
                    >
                        Cambio de Rol
                    </NavLink> 
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        { auth.name } 
                    </span>
                    <button
                        className="nav-item nav-link btn"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}