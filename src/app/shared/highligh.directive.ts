import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighligh]'
})
export class HighlighDirective {

  element: ElementRef;
  constructor(el: ElementRef) { 
    this.element = el;
    
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.background = "red";
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.background = "";
  }

}
