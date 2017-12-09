import { Injectable } from '@angular/core';
import { Recipe } from '../recepie/recipes.model';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { RecipeService } from '../recepie/recipe.service';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService{
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService){}

  storeRecipes(){
    return this.http.put('https://ng-recipe-book-1ce3e.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }
  getRecipes(){
    const token = this.authService.getToken();
      this.http.get('https://ng-recipe-book-1ce3e.firebaseio.com/recipes.json?auth=' + token)
        .map((response: Response)=>{
          const recipes: Recipe[] = response.json();
          for(let recipe of recipes){
            if(!recipe['ingredients']){
              Object.defineProperty(recipe,"ingredients",{
                value: []
              });
              console.log(recipe);
            }
          }
          return recipes;
        })
        .subscribe(
          (recipes: Recipe[])=>{
            this.recipeService.setRecipes(recipes);
          }
        );
  }
}
