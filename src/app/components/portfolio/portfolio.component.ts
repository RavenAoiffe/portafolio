import { Component } from '@angular/core';
import { Project } from '../../Interfaces/project.interface';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

  titleSection:string = 'Portafolio';

  projectsList:Project[] = [
    {
      id:1,
      image:"imgFabrica",
      titulo:'Fábrica Editorial 2024 - Anteriores',
      descripcion:'lorem loremdssdadas',
      tecnologias:['html','css','js'],
      enlace:'https://cmm.cenart.gob.mx/Fabrica_Editorial/Anteriores/2024'
    },
      {
      id:2,
      image:"imgFabrica",
      titulo:'Escrituras digitales 2023',
      descripcion:'lorem loremdssdadas',
      tecnologias:[],
      enlace:'https://cmm.cenart.gob.mx/edigitales'
    },
      {
      id:2,
      titulo:'DiseñaLab 2023',
      descripcion:'lorem loremdssdadas',
      tecnologias:[],
      image:"imgFabrica",
      enlace:'https://cmm.cenart.gob.mx/edigitales'
    },
     {
      id:2,
      titulo:'Centro Multimedia',
      descripcion:'lorem loremdssdadas',
      tecnologias:[],
      image:"imgFabrica",
      enlace:'https://cmm.cenart.gob.mx/edigitales'
    },
    {
      id:3,
      titulo:"Eurojazz 2020",
      image:"imgFabrica",
      enlace:"https://cmm.cenart.gob.mx/Eurojazz",
      descripcion:"lorem impusummsds",
      tecnologias:["HTML","SCSS", "JAVASCRIPT","Scrollmagic"]
    },
    {
      id:4,
      titulo:"PAPIAM",
      enlace:"https://cmm.cenart.gob.mx/Eurojazz",
      image:"imgFabrica",
      descripcion:"lorem impusummsds",
      tecnologias:["HTML","SCSS", "JAVASCRIPT","gulp","NodeJs"]
    },
    {
      id:5,
      titulo:"Muestra Papiam",
      enlace:"https://cmm.cenart.gob.mx/Eurojazz",
      image:"imgEscrituras",
      descripcion:"lorem impusummsds",
      tecnologias:["HTML","SCSS", "JAVASCRIPT","gulp","NodeJs"]
    },

  ]
}
