import { Recipe } from './recipes.model';

export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('A test recipe','this is simply a test','http://maxpixel.freegreatpicture.com/static/photo/1x/' +
      'Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
  ];

  getRecipes(){
    //not passing the refernce but a copy so that the private member
    //cannot be accessed from outside.
    return this.recipes.slice();
  }
}
