import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ShoppingListService } from '../shoppingList.service';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }
  addIngredients(){
    const newIngredient = new Ingredient(this.nameInput.nativeElement.value,
      this.amountInput.nativeElement.value);
    this.shoppingListService.addIngredient(newIngredient);
  }

}
