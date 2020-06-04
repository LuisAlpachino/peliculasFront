import {Provider} from '@angular/core';


export interface ResponsePeliculas {
  pelicula: Pelicula[];
}

export interface Pelicula {
  descripcion: string;
  fkcompany: number;
  longitud: number;
  titulo: string;
  lanzamiento: string;
  id: number;
}

