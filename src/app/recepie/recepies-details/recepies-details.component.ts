import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipes.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-recepies-details',
  templateUrl: './recepies-details.component.html',
  styleUrls: ['./recepies-details.component.css']
})
export class RecepiesDetailsComponent implements OnInit {
 recipe: Recipe;
  id: number;
  constructor(private recipeService: RecipeService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route}); 
  }

}
