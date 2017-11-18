import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipes.model';
import { Ingredient } from '../../shared/ingredient.model';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recepies-details',
  templateUrl: './recepies-details.component.html',
  styleUrls: ['./recepies-details.component.css']
})
export class RecepiesDetailsComponent implements OnInit {

  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients); 
  }

}
