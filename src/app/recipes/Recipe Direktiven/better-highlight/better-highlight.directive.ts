import {
  Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective  implements OnInit {
  @Input()defaultColor: any = 'rgb(226, 226, 216, 0.3)';
  @Input() highlightColor: any = 'rgb(226, 226, 216)';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor( private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgb(226, 226, 216)');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'rgb(226, 226, 216, 0.3)');
    this.backgroundColor = this.defaultColor;;
  }
}
