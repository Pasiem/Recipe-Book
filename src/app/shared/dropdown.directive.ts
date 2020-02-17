import { Directive, Input, HostBinding, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit{

  @HostBinding('class.open') isOpen: boolean;
  
  @HostListener('click') toggleOpen(eventData: Event) {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(){
    this.isOpen = false;
  }
  constructor() { }

}
