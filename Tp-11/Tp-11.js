var listaPersonasEjemplo = [
    {
        "apellido": "Perez",
        "nombre": "Juan",
        "edad": 20,
        "documento": 12345
    },
    {
        "apellido": "Lopez",
        "nombre": "Luis",
        "edad": 20,
        "documento": 23456
    },
    {
        "apellido": "Zapata",
        "nombre": "Pablo",
        "edad": 10,
        "documento": 34567
    },
    {
        "apellido": "Acuña",
        "nombre": "Ana",
        "edad": 30,
        "documento": 45678
    },
];

/**
 * 01 - ordenarPorApellido
 */
function ordenarPorApellido(listaDePersonas) {
    return listaDePersonas.sort((a, b) => a.apellido.localeCompare(b.apellido));
}
console.log("ordenarPorApellido()", ordenarPorApellido(listaPersonasEjemplo));

/**
 * 02 - soloNombres
 */
function soloNombres(listaDePersonas) {
    return listaDePersonas.map(persona => persona.nombre);
}
console.log("soloNombres()", soloNombres(listaPersonasEjemplo));

/**
 * 03 - promedioEdades
 */
function promedioEdades(listaDePersonas) {
    if (listaDePersonas.length === 0) return 0;
    const suma = listaDePersonas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    return suma / listaDePersonas.length;
}
console.log("promedioEdades()", promedioEdades(listaPersonasEjemplo));

/**
 * 04 - cumplirAños
 */
function cumplirAños(listaDePersonas) {
    return listaDePersonas.map(persona => ({
        ...persona,
        edad: persona.edad + 1
    }));
}
console.log("cumplirAños()", cumplirAños(listaPersonasEjemplo));

/**
 * 05 - soloMayoresDeEdad
 */
function soloMayoresDeEdad(listaDePersonas) {
    return listaDePersonas.filter(persona => persona.edad > 18);
}
console.log("soloMayoresDeEdad()", soloMayoresDeEdad(listaPersonasEjemplo));

/**
 * 06 - laPersonaMayor
 */
function laPersonaMayor(listaDePersonas) {
    if (listaDePersonas.length === 0) return null;
    return listaDePersonas.reduce((mayor, personaActual) => {
        return (personaActual.edad > mayor.edad) ? personaActual : mayor;
    });
}
console.log("laPersonaMayor()", laPersonaMayor(listaPersonasEjemplo));

/**
 * 07 - agregarHeladoFavorito
 */
function agregarHeladoFavorito(listaDePersonas, listaDeHelados) {
    return listaDePersonas.map((persona, i) => {
        const gustos = listaDeHelados || [];
        const helado = gustos[i] !== undefined ? gustos[i] : "vainilla";
        return {
            ...persona,
            heladoFavorito: helado
        };
    });
}
console.log("agregarHeladoFavorito()", agregarHeladoFavorito(listaPersonasEjemplo, ["chocolate", "limon", "frutilla"]));
