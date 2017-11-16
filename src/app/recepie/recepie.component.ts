import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css'],
  providers: [RecipeService]
})
export class RecepieComponent implements OnInit {

  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
