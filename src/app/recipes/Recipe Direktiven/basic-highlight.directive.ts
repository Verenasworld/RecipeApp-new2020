import {Directive, ElementRef, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'

})
export class BasicHighlightDirective implements OnInit {
 constructor( private elementRef: ElementRef) {
 }
 ngOnInit(): void {
 }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.elementRef.nativeElement.style.backgroundColor = 'rgb(210, 232, 255)';
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.elementRef.nativeElement.style.backgroundColor = 'rgb(210, 232, 255, 0.5)';
  }
}

