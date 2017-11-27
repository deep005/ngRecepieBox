import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css'],
  providers: [RecipeService]
})
export class RecepieComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
