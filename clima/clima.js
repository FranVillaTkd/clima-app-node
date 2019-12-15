const axios = require('axios');



const getClima = async (lat,long) =>{

    const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f3801ea50bcf8325cf6f364900b6ee2a&units=metric`)

    return respuesta.data.main.temp

}

module.exports = {
    getClima
}