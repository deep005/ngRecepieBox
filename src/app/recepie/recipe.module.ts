import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";

import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecepieComponent} from "./recepie.component";
import {RecepiesDetailsComponent} from "./recepies-details/recepies-details.component";
import {RecepiesListComponent} from "./recepies-list/recepies-list.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {ItemsComponent} from "./recepies-list/items/items.component";

import {ReactiveFormsModule} from "@angular/forms";

//directives
import { DropdownDirective } from '../shared/dropdown.directive';
import {RecipesRoutingModule} from "./recipes-routing.module";


@NgModule({
  declarations: [
    RecepieComponent,
    RecipeStartComponent,
    RecepiesListComponent,
    RecepiesDetailsComponent,
    RecipeEditComponent,
    DropdownDirective,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule{

}
