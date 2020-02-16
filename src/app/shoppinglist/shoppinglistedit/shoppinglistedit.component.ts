import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('nameinput',{static:false}) nameInputRef: ElementRef;
  @ViewChild('amountinput',{static:false}) amountInputRef: ElementRef;
  
  @Output() itemAdded = new EventEmitter<Ingredient>();
  
  onAddClicked() {
      const name = this.nameInputRef.nativeElement.value;
      const amount = this.amountInputRef.nativeElement.value;
      const ingredient = new Ingredient(name,amount);
      this.itemAdded.emit(ingredient);
  }
  constructor() { }

  ngOnInit() {
  }

}
