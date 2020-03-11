import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
// @HostListener hört auf ein click Event und mit
// @Hostbinding binde ich an die Eigenschaft
// des Elements in das die Direktive eingefügt wird.(class.open)

// TODO:Appdropdown direketive no working open class dont exist on bootstrap