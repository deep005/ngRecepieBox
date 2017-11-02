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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecepieComponent,
    RecepiesListComponent,
    RecepiesDetailsComponent,
    ItemsComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
