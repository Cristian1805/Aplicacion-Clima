const axios = require('axios');


class Busquedas {

    historial = ['Tulua', 'Bogota', 'Madrid'];

    constructor () {
        //Leer la base de datos si existe
    }

    get paramsMapBox() {
        return {
            'access_token' : 'pk.eyJ1IjoidGhlY3JpbG9nbyIsImEiOiJjbGo0bGZlbmowMnd2M2VwYXZld2YzdmluIn0.d36axvoNFhLWZyu9aK295w',
            'limit': 5,
            'language': 'es'
        } 
    }

    async ciudad ( lugar = ''){

        try {
            //Peticion http
            const instance = axios.create({
                baseURL: `'https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapBox
            });

            const resp = await instance.get();
            console.log(resp.data);

            return []
            
        } catch (error) {
            return [];
            
        }
    }

}

module.exports = Busquedas