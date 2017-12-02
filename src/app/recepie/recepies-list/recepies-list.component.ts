import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {

  recipes: Recipe[];

  constructor(private recipeService: RecipeService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[])=>{
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
