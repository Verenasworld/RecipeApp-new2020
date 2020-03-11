import {
  Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit {
  @Input()defaultColor: any = 'black';
  @Input('appBetterHighlight') highlightColor: any = '´white';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor( private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.backgroundColor = this.defaultColor;
  }
}
