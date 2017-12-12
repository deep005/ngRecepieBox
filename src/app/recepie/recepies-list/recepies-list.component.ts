import { Component, OnInit, OnDestroy} from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs/Rx";
import { AuthService } from '../../auth/auth.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;
  authSubscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) { }

  ngOnInit() {
    this.hideDangerMessage();
    this.authSubscription = this.recipeService.notAuthenticated.subscribe(()=>{
      this.showDangerMessage();
    });
    this.subscription = this.recipeService.recipesChanged.subscribe((recipes: Recipe[])=>{
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
    if(!this.authService.isAuthenticated()){
      this.showDangerMessage();
    }
    this.router.navigate(['new'], {relativeTo: this.route})
  }
  showDangerMessage() {
    $("#danger-alert").fadeTo(5000, 500).slideUp(500, function() {
      $("#danger-alert").slideUp(500);
    });
  }

  hideDangerMessage() {
    $("#danger-alert").hide();
  }
  ngOnDestroy(){
    this.authSubscription.unsubscribe();
    this.subscription.unsubscribe();
  }

}
