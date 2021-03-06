import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../services/pelicula.service';
import {  Pelicula } from '../interfaces/intefaces';
import { AlertController, ToastController, ModalController  } from '@ionic/angular';
import { Tab2Page } from '../tab2/tab2.page';
import { Tab3Page } from '../tab3/tab3.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculas: Pelicula[];

  constructor(private _pelicula: PeliculaService,
              public alertController: AlertController,
              public toastController: ToastController,
              public modalController: ModalController) {
    this.peliculas = [];
  }

  ngOnInit(){
    this.getAll();
  }

  getAll(){
    this._pelicula.getAll().subscribe(
      res =>{
        console.log(res);
        this.peliculas.push(...res.pelicula);
      },
      error =>{
        console.log(error);
        
      },
      () =>{
        console.log();
        
      }
    );
  }

  async delete(pelicula: Pelicula){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Elimar pelicula',
      message: '¿Esta seguro que desea eliminar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancelar',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sí, Eliminar!',
          handler: () => {
            this._pelicula.delete(pelicula.id).subscribe(
              res=>{
                if(res['status']== "success"){
                  this.presentToast();
                }
              },
                error =>{
                  console.log(error);
                  
                },
                () => {
        
                }
            );
          }
        }
      ]
    });

    await alert.present();
   }

   async presentToast() {
    const toast = await this.toastController.create({
      message: 'La pelicula ha sido eliminada',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }

  async crear() {
    const modal = await this.modalController.create({
      component: Tab2Page,
      cssClass: 'my-custom-class',
      componentProps: {

      }
    });
    return await modal.present();
  }


  async editar(pelicula: Pelicula) {
    const modal = await this.modalController.create({
      component: Tab3Page,
      cssClass: 'my-custom-class',
      componentProps: {
        pelicula: pelicula
      }
    });
    return await modal.present();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

}
