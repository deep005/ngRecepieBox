import { Recipe } from './recipes.model';
import {Injectable} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppingList.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();
  notAuthenticated = new Subject<any>();

  constructor(private slService: ShoppingListService){}
  private recipes: Recipe[] = [
    new Recipe('A test recipe','this is simply a test','http://maxpixel.freegreatpicture.com/static/photo/1x/' +
      'Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg',
    [new  Ingredient('Meat', 1),
      new Ingredient('French Fries', 20) ]),
    new Recipe('A test recipe','this is simply a test','https://cdn.pixabay.com/photo/2017/09/30/14/00/pasta-2802156_960_720.jpg',
      [new  Ingredient('Meat', 2),
        new Ingredient('French Fries', 10) ])
  ];

  getRecipes(){
    //not passing the refernce but a copy so that the private member
    //cannot be accessed from outside.
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }
  
  notYetAuthenticated(){
    this.notAuthenticated.next();
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
}
