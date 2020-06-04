import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiUrl, contentType, AppJSON } from 'src/environments/environment';
import { ResponsePeliculas, Pelicula } from '../interfaces/intefaces';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  //paths URI
  pathCreate="create";
  pathUpdate="update/";
  pathDelete="delete/";
  pathGetAll="all";
  pathFindById="findById";

  //headers  
  headers;

  constructor(private _http: HttpClient) {
    this.headers = new HttpHeaders().set(contentType, AppJSON);
   }

   getAll(){
     return this._http.get<ResponsePeliculas>(ApiUrl+this.pathGetAll,
      {
        headers:this.headers
      });
   }

    update(pelicula: any){
     return this._http.put(ApiUrl+this.pathUpdate+pelicula.id,{
      descripcion: pelicula.descripcion,
      fkcompany: pelicula.fkcompany,
      longitud: pelicula.longitud,
      titulo: pelicula.titulo,
      lanzamiento: pelicula.lanzamiento
     },{
       headers:this.headers
     });
   } 

   delete(id: number){
     return this._http.delete(ApiUrl+this.pathDelete+id,{
       headers:this.headers
     });
   }

   create(pelicula: any){
     return this._http.post(ApiUrl+this.pathCreate,{
      descripcion: pelicula.descripcion,
      fkcompany: pelicula.fkcompany,
      longitud: pelicula.longitud,
      titulo: pelicula.titulo,
      lanzamiento: pelicula.lanzamiento
     },{
       headers:this.headers
     });
   }

}
