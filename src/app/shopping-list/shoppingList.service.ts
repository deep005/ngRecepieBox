import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
export class ShoppingListService{

  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Oranges', 7)
  ];

   addIngredient(ingredient: Ingredient){
     this.ingredients.push(ingredient);
     this.ingredientsChanged.emit(this.ingredients.slice());
   }

  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredients(ingredients: Ingredient[]){
    /*
    * for(let ingredient of ingredients){
        this.addIngredient(ingredient);
       }
       */
    //push can handle a list of elements i.e. multiple elements
    //if we pass an array it will push it as an array and not seperate elements.
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
