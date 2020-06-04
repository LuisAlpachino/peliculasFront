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

    update(pelicula: Pelicula){
     return this._http.put(ApiUrl+this.pathUpdate+pelicula.id,{
       pelicula
     },{
       headers:this.headers
     });
   } 

   delete(id: number){
     return this._http.delete(ApiUrl+this.pathDelete+id,{
       headers:this.headers
     });
   }

   create(pelicula: ResponsePeliculas){
     return this._http.post(ApiUrl+this.pathCreate,{
       pelicula
     },{
       headers:this.headers
     });
   }
  /*  private executeQuery<T>(query: string){
     query = ApiUrl + query;
     return this._http.get
   } */
}
