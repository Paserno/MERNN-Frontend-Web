import Swal from "sweetalert2";

const baseUrl = process.env.REACT_APP_API_URL;



const fetchSinToken = async( endpoit, data, method = 'GET' ) => {

    const url = `${ baseUrl }/${ endpoit }`;

    try {
        if ( method === 'GET'){
            const resp = await fetch(url);
            return await resp.json();
        } else {
            const resp = await fetch( url, {
                method,
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify( data )
            });
            return await resp.json();
        }
    } catch (error) {
        console.warn('No se pudo establecer conexión con el Backend');
        return false; 
    }

}

const fetchConToken = async( endpoit, data, method = 'GET') => {

    const url = `${ baseUrl }/${ endpoit }`;
    const token = localStorage.getItem('token') || '';

    try {
        if ( method === 'GET' ){
            const resp = await fetch( url, {
                headers: {
                    'x-token': token
                }
            });
            return await resp.json();
        } else {
            const resp = await fetch( url, {
                method,
                headers:{
                    'Content-type': 'application/json',
                    'x-token': token
                },
                body: JSON.stringify( data )
            });
            return await resp.json()
        }

    } catch (error) {
        const msg = 'No se pudo establecer conexión con el Servidor'
        Swal.fire('Error', msg, 'error');
        console.warn(msg);
        return false; 
    }
}


export {
    fetchSinToken,
    fetchConToken
}