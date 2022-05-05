import React, { useEffect, useState } from 'react'

export const ItemTabla = ({
    uid,
    nombre,
    apellido,
    correo,
    ciudad = '',
    direccion = '',
    rol,
    ids
    
}) => {

    const contador = ids + 1;
    
    const onClick = async() => {
      console.log('hola: ', uid)
    }

  return (
    <tr
      onClick={onClick }
    >
        <th scope="row">{contador}</th>
        <td>{ nombre }</td>
        <td>{ apellido }</td>
        <td>{ correo }</td>
        <td>{ ciudad }</td>
        <td>{ direccion }</td>
        <td>{ rol }</td>
    </tr>
  )
}
