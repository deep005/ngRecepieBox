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
import {RecipesRoutingModule} from "./recipes-routing.module";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    RecepieComponent,
    RecipeStartComponent,
    RecepiesListComponent,
    RecepiesDetailsComponent,
    RecipeEditComponent,
    ItemsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule{

}
