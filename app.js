const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


/*lugar.f_getLugarLatLng(argv.direccion)
    .then(console.log)
    .catch(console.log);

clima.f_getClima(40.750000, -74.000000)
    .then(console.log)
    .catch(err => console.log(err));*/

const getInfo = async (ciudad, pais) => {
    try {
        const resp = await lugar.f_getRespuestaCompleta(ciudad, pais);
        const coordenadas = await lugar.f_getLugarLatLng(ciudad, pais);
        const temperatura = await clima.f_getClima(coordenadas.lat, coordenadas.lng);
        return `El clima de ${coordenadas.ciudad} es de ${temperatura}ºC. Actualmente hay ${resp.data.weather[0].description}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${ciudad}`;
    }
}

getInfo(argv.ciudad, argv.pais)
    .then(console.log)
    .catch(console.log);