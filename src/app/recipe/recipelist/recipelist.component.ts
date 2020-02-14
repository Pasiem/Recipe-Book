import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from  './recipe.model';
@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[] = [
      new Recipe("My Recipe Test", "Describing the Recipe Test", "data:image/jpeg;base64,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")
  ];

  constructor() { }

  ngOnInit() {
  }

}
