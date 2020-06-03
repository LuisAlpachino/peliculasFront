import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';
import { ResponsePeliculas } from '../interfaces/intefaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculas: ResponsePeliculas;

  constructor(private _pelicula: PeliculaService) {
    this.peliculas = null;
  }

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this._pelicula.getAll().subscribe(
      res =>{
        console.log(res); 
      },
      error =>{
        console.log(error);
        
      },
      () =>{
        console.log();
        
      }
    );
  }
}
