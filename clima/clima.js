const axios = require('axios');

const api_key = '1a111a3ab02c697172050abaf4d1fe7d';

const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${api_key}`);

    return resp.data.main.temp
}

module.exports = {
    f_getClima: getClima
}