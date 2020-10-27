const request = require('request');
const { Banda } = require('./Banda');


const obtenBanda = (banda) => {
    const URL = `https://theaudiodb.com/api/v1/json/1/search.php?s=${banda}`;
    request(URL, (error, response, body) => {
        if (error) {
            console.log('Ocurrio un error')
        } else {
            const res = JSON.parse(body);
            if (res.artists !== null) {
                
                const {strArtist, strWebsite, intFormedYear, strGenre} = res.artists[0];
                const nuevaBanda = new Banda(
                    strArtist, 
                    strWebsite, 
                    intFormedYear, 
                    strGenre);
                console.log(nuevaBanda);
            } else {
                console.log(`No encontre a ${banda}, o esta mal escrito.`);
            }
        }
    });
}

obtenBanda('Juan Gabriel');
obtenBanda('Morat');
obtenBanda('Los Temerarios');
obtenBanda('The All American Rejects');