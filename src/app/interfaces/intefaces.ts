import {Provider} from '@angular/core';

export interface ResponsePeliculas {
  id: number;
  titulo: string;
  lanzamiento: string;
  longitud: number;
  descripcion: string;
  fkcompany: number;
}