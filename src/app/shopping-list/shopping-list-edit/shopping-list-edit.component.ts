import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppinglisteditComponent implements OnInit, OnDestroy {
  @ViewChild('f',{static: false}) slform: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex: number;
  editedItem: Ingredient;

  onAddClicked(form: NgForm) {
      const value = form.value;
      const ingredient = new Ingredient( value.name, value.amount);
      if (this.editMode) this.shoppinglistService.updateIngredient(this.editItemIndex, ingredient);
      else this.shoppinglistService.addIngredient(ingredient);
      this.editMode = false;
      form.reset();
  }
  
  onDelete() {
    this.shoppinglistService.deleteItem(this.editItemIndex);
    this.editMode = false;
  }

  onClear() {
    this.slform.reset();
    this.editMode = false;
  }
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppinglistService.startedEditing
      .subscribe(
        (index: number) => {
          this.editMode = true;
          this.editItemIndex = index;
          this.editedItem = this.shoppinglistService.getIngredient(index);
          this.slform.setValue({
            name: this.editedItem.name,
            amount: this.editedItem.amount
          })
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
