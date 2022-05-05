import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

export const Navbar = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
       
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
                Administación
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    {/* <NavLink
                        className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? ' active ' : '') }
                        to="/marvel"
                    >
                        Marvel
                    </NavLink> */}

                    <NavLink
                        className={ ({isActive}) => 'nav-item nav-link' + ( isActive ? ' active ' : '') }
                        to="/jardin"
                    >
                        Jardinero
                    </NavLink> 
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        Diego
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