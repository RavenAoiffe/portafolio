import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {

  sticky: boolean = false;
  elementPosition: any;
  
  @ViewChild('stickyMenu') menuElement!: ElementRef;  

   ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }


  @HostListener('window:scroll')  
    handleScroll(){
      const windowScroll = window.pageYOffset;
      if(windowScroll >= this.elementPosition){
        this.sticky = true;
      } else {
        this.sticky = false;
      }
    }
}
