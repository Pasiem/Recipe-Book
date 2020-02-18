import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() headerSelection = new EventEmitter<boolean>();
  
  constructor() { }
//TODO: implement more concise header logic
  onHeaderClicked(headerInput: HTMLInputElement) {
    var selection = headerInput.name;
    if (selection == "recipe") this.headerSelection.emit(true);
    else this.headerSelection.emit(false);
  }

  ngOnInit() {
  }

}
