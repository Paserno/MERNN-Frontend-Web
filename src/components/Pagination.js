import React, { useContext } from 'react'
import { UsuarioContext } from '../context/UsuarioContext'

export const Pagination = () => {
    const {state} = useContext(UsuarioContext)
    const { total } = state;

    const pagina = 5;
    let valorPagina = total / pagina;

    const valor = Math.ceil(valorPagina);
    let arreglo = []

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                
            </ul>
        </nav>
    )
}
