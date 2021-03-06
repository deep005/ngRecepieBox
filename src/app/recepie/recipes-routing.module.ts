import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import { RecepieComponent } from './recepie.component';
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecepiesDetailsComponent} from "./recepies-details/recepies-details.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import { AuthGuard } from "../auth/auth-guard-service";

const recipesRoutes: Routes = [
  {path: '', component: RecepieComponent, children:[
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate: [AuthGuard]},
    {path: ':id', component: RecepiesDetailsComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate: [AuthGuard]}
  ]},
];
@NgModule({
  imports: [
    RouterModule.forChild(recipesRoutes)
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})

export class  RecipesRoutingModule {}
