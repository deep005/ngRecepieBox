import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import {HomeComponent} from "./home/home.component";

const approutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recepie/recipe.module#RecipesModule'},
  {path:'shopping-list', component: ShoppingListComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {

}
