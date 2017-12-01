import {Component, OnInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { ShoppingListService } from '../shoppingList.service';
import {Ingredient} from '../../shared/ingredient.model';
import { NgForm, NgModel } from '@angular/forms';
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  subscription: Subscription;
  editMode: boolean = false;
  editedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editedItemIndex = index;
      this.editMode = true; 
    });
  }
  onAddItem(form : NgForm){
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(newIngredient);

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
