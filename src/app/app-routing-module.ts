import { NgModule } from '@angular/core';
import { Routes,RouterModule} from '@angular/router';
import { RecepieComponent } from './recepie/recepie.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component'

const approutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecepieComponent},
  {path:'shopping-list', component: ShoppingListComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})


export class AppRoutingModule {


}
