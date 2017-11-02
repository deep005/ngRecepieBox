import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {

    recipes: Recipe[] = [
      new Recipe('A test recipe','this is simply a test','http://maxpixel.freegreatpicture.com/static/photo/1x/' +
        'Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
    ];

  constructor() { }

  ngOnInit() {
  }

}
