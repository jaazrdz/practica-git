class Banda {
    constructor(nombre, website, anio, genero) {
        this.nombre = nombre ? nombre : 'No encontrado';
        this.website = website ? website : 'Web no encontrado';
        this.anio = anio ? anio : 'Fundación no encontrada';
        this.genero = genero ? genero : 'Género no encontrado';
    }
}

module.exports = { Banda };
