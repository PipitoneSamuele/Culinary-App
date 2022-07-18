import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "src/model/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    imageUrl: string = "https://thumbs.dreamstime.com/b/recipe-word-text-green-leaf-logo-icon-design-white-background-suitable-card-typography-143638205.jpg";

    private recipes: Recipe[] = [
        new Recipe("Test recipe",
         "Simply a test",
          this.imageUrl,
          [
            new Ingredient('meat', 1),
            new Ingredient('potatoes', 10),
            new Ingredient('mayo', 1)
          ]),
        new Recipe("Sex",
         "Simply a test",
          this.imageUrl,
          [
            new Ingredient('balls', 2),
            new Ingredient('potatoes', 10),
            new Ingredient('chicken', 17)
          ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice(); //importante per ritornare una copia dell'array array invece di passare quello reale, che vogliamo solo passare e non far modificare
      }

      addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }

}