import { Component } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';
import { Pelicula } from '../interfaces/intefaces';
import {  ToastController  } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  pelicula: Pelicula[];

  constructor(private _peliculas: PeliculaService,
              public toastController: ToastController) {
    this.pelicula = [];
  }

  create(event: any){
    console.log(this.pelicula);
    this._peliculas.create(this.pelicula).subscribe(
      res =>{
        if(res['status']== 'success'){
          this.presentToast();
        }
      }, 
      error =>{
        console.log(error);
        
      },
      () =>{
        setTimeout(() =>{ location.reload() }, 3000);
      }
    );
    
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'La pelicula ha sido creada',
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

}
