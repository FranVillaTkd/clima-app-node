const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;
const lugar = require("./lugar/lugar.js");
const clima = require("./clima/clima.js");





const getInfo = async (direccion) => {
    
   
    
    let coord = await lugar.getLugarLatLong(direccion)
            .then()
            .catch(err =>{
                throw new Error("error al buscar direccion")
            });
    
    let temp = await clima.getClima(coord.lat,coord.long)
            .then()
            .catch(err =>{
                throw new Error("error al buscar temperatura")
            });
            
    return  `La Temperatura en ${coord.address} es de C^ ${temp}`
    


}       

getInfo(argv.direccion)
        .then(resp => {
            console.log(resp);
        }).catch(err => {
            console.log(err)
        })