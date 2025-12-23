import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  title:string = 'Acerca de mí'; 

  texto_1:string =` Soy una desarrolladora frontend con un fuerte interés en el diseño UI/UX, apasionada por crear experiencias digitales claras, funcionales y centradas en las personas. Encuentro en la programación web un espacio donde la lógica, la estética y la creatividad convergen.`;
  texto_2:string =`Además de la tecnología, la literatura es una parte fundamental de mi vida; en especial la ciencia ficción, género que inspira mi curiosidad por los futuros posibles y las narrativas no convencionales. Los miserables de Victor Hugo es uno de mis libros favoritos, por su profundidad humana y su mirada crítica sobre la sociedad.`;
  texto_3:string =`En cada proyecto pongo un alto nivel de dedicación, buscando siempre la calidad, la eficacia y la mejora continua. Aprender, actualizarme y seguir creciendo tanto a nivel técnico como creativo es un valor central en mi desarrollo profesional.`;
}
