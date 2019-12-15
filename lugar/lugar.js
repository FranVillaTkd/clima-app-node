const axios = require('axios');



const getLugarLatLong = async (direccion) =>{

    const encodedUrl = encodeURI(direccion);
 
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        timeout: 3000,
        headers: {'x-rapidapi-key': '1c189ead62mshaf75d1bc3b4fc5ep1b45e6jsn3e46fdec7beb'}
    });

    const response = await instance.get();
    
    if(response.data.Results.length == 0){
        throw new Error("no encontre nada")
    }

    const data = response.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const long = data.lon;

    return{
        address,
        lat,
        long
    }

}

module.exports = {
    getLugarLatLong
}