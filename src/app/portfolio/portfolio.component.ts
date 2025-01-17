import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

isClicked:boolean = false

  images = [
    { src: '/portfolio/poert1.png', alt: 'port1' },
    { src: '/portfolio/port2.png', alt: 'port2' },
    { src: '/portfolio/port3.png', alt: 'port3' },
    { src: '/portfolio/poert1.png', alt: 'port1' },
    { src: '/portfolio/port2.png', alt: 'port2' },
    { src: '/portfolio/port3.png', alt: 'port3' }
  ];

  selectedImage: string | null = null;

  ShowModal(src: string) {
    this.selectedImage = src;
    console.log( this.selectedImage);
    this.isClicked = true
    console.log(this.isClicked);
    

  }
hideModal(){
  this.isClicked = false
  
}
  
}
