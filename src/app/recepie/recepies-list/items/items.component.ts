import { Component, OnInit, Input} from '@angular/core';
import { RecipeService } from '../../recipe.service';
import { Recipe } from '../../recipes.model';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() recipe:Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }
  onSelected(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
