import { useState } from 'react';


export const usePagination = ( initialState = {} ) => {

    const [pagina, setPagina] = useState({
        num: 0,
        valor: 1
    });

}