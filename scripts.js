//NODE POSTGRESS

import { ObtenerDatosUsuarios } from './library-bbdd.js';

ObtenerDatosUsuarios().then(() => {
    console.log("hola")
})