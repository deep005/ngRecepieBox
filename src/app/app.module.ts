import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecepieComponent } from './recepie/recepie.component';
import { RecepiesListComponent } from './recepie/recepies-list/recepies-list.component';
import { RecepiesDetailsComponent } from './recepie/recepies-details/recepies-details.component';
import { ItemsComponent } from './recepie/recepies-list/items/items.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

//directives
import { DropdownDirective } from './shared/dropdown.directive';

//services
import { RecipeService } from './recepie/recipe.service';
import { DataStorageService } from './shared/data-storage.service';
import { ShoppingListService } from './shopping-list/shoppingList.service';
import {AppRoutingModule} from "./app-routing-module";
import { RecipeStartComponent } from './recepie/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recepie/recipe-edit/recipe-edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepieComponent,
    RecepiesListComponent,
    RecepiesDetailsComponent,
    ItemsComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [RecipeService, ShoppingListService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
