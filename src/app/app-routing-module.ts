import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules,  ExtraOptions} from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'
import {HomeComponent} from "./core/home/home.component";

const obj: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
};
const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recepie/recipe.module#RecipesModule'},
  {path:'shopping-list', component: ShoppingListComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, obj)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
