import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  slideOpt = {
    initialSlide: 0,
    slidesPerView:1,
    centeredSlides: true,
    speed: 400
  };

  slides = [
    {
    title:"Escucha tu música", 
    subTitle:"En CUALQUIER LUGAR", 
    description:"Los mejors álbumes, las mejores Canciones. Escucha y Comparte en cualquier momento, a todas horas.",
    icon:"Play",
    },
    {
      title:"Disfruta de nuestro reproductor",
      subTitle:"DE VIDEOS INCREÍBLES",
      description:"Entra al modo video de nuestro reproductor y obtén acceso a clips, documentales y making offs increbles de tus artita favorito.",
      icon:"videocam",
    }
    ,
    {
      title:"Accede al exclusivo",
      subTitle:"MODO DEPORTE",
      description:" Crea una playlist basada en tu actividad física. Ten reportes y acceso a lo que necesites, integrado con GPS!",
      icon:"bicycle",
    }]
  constructor(private router: Router, private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  close(){
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl("/home");
  }


}
