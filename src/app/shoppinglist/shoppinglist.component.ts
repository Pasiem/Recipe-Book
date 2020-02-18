import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.shoppingListUpdated.subscribe(
      () => {
        this.ingredients = this.shoppinglistService.getIngredients();
      }
    );
  }

}
