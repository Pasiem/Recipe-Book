import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('nameinput',{static:false}) nameInputRef: ElementRef;
  @ViewChild('amountinput',{static:false}) amountInputRef: ElementRef;
  
  onAddClicked() {
      const name = this.nameInputRef.nativeElement.value;
      const amount = this.amountInputRef.nativeElement.value;
      const ingredient = new Ingredient(name,amount);
      this.shoppinglistService.ingredientAddRequest.emit(ingredient);
  }
  
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
  }

}
