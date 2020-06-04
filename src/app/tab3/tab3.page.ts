import { Component, Input } from '@angular/core';
import { Pelicula } from '../interfaces/intefaces';
import { PeliculaService } from '../services/pelicula.service';
import {  ToastController  } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @Input() pelicula: Pelicula[];

  constructor(private _pelicula: PeliculaService,
              public toastController: ToastController) {}

  enviar(){
    this._pelicula.update(this.pelicula).subscribe(
      res=>{
        if(res['status'] == 'success'){
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
      message: 'La pelicula ha sido actualizada',
      position: 'top',
      duration: 3000
    });
    toast.present();
  }

}
