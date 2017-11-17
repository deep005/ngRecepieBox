import {Component, OnInit, DoCheck} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, DoCheck {
  ingredients: Ingredient[];
  constructor(private slService: ShoppingListService) {
    console.log("Hello");
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
    (ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }

  ngDoCheck(){
    console.log("hello");
  }
}
