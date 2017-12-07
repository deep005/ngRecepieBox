import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { RecepieComponent } from './recepie/recepie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import {RecipeStartComponent} from "./recepie/recipe-start/recipe-start.component";
import {RecepiesDetailsComponent} from "./recepie/recepies-details/recepies-details.component";
import {RecipeEditComponent} from "./recepie/recipe-edit/recipe-edit.component";
import {SignupComponent} from "./auth/signup/signup.component";

const approutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecepieComponent, children:[
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent },
    {path: ':id', component: RecepiesDetailsComponent},
    {path: ':id/edit', component: RecipeEditComponent }
  ]},
  {path:'shopping-list', component: ShoppingListComponent},
  {path: 'signup', component: SignupComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {


}
