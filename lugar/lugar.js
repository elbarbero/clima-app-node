const axios = require('axios');

const api_key = '1a111a3ab02c697172050abaf4d1fe7d';

const getRespuestaCompleta = async (ciudad, pais='') => {
    const encodedUrl_Ciudad = encodeURI(ciudad);
    const encodedUrl_Pais = encodeURI(pais);

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl_Ciudad},${encodedUrl_Pais}&appid=${api_key}&units=metric&lang=sp`);
    
    return resp;
}

const getLugarLatLng = async (ciudad, pais='') => {
    const encodedUrl_Ciudad = encodeURI(ciudad);
    const encodedUrl_Pais = encodeURI(pais);

    const resp = await getRespuestaCompleta(ciudad, pais);
    //console.log(resp);

    if(!resp.data || resp.data.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data;
    const direccion = data.name;
    const lat = data.coord.lat;
    const lng = data.coord.lon;

    //instance.get()
    //       .then(resp => {
    //            console.log(resp.data);
    //        })
    //        .catch(err => {
    //            console.log('ERROR!!!', err);
    //        });

    return {
        ciudad: direccion,
        lat: lat,
        lng: lng
    };
}

module.exports = {
    f_getLugarLatLng: getLugarLatLng,
    f_getRespuestaCompleta: getRespuestaCompleta
}
