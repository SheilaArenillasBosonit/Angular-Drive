export interface Pais {
    name          : string;
    alpha3Code    : string;
    independent   : boolean;
}

export interface Usuario {
    id?           : string;
    nombre        : string;
    email        : string;
    contraseña      : string;
    contraseña2    : string;
    ofertas: boolean;
    pais          : Pais;
    ciudad        : string;
}