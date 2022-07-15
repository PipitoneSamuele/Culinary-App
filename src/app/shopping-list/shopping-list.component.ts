import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/model/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Pasta", 5),
    new Ingredient("Pomodori", 0.2)
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

}
