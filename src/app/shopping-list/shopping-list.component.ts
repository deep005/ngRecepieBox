import {Component, OnInit, OnDestroy} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;
  constructor(private slService: ShoppingListService) {
    console.log("Hello");
  }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription=this.slService.ingredientsChanged.subscribe(
    (ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
