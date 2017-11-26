import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { RecepieComponent } from './recepie/recepie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import {RecipeStartComponent} from "./recepie/recipe-start/recipe-start.component";
import {RecepiesDetailsComponent} from "./recepie/recepies-details/recepies-details.component";
const approutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecepieComponent, children:[
    {path: '', component: RecipeStartComponent},
    {path: ':id', component: RecepiesDetailsComponent}
  ]},
  {path:'shopping-list', component: ShoppingListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {


}
