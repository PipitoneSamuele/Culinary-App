import { EventEmitter } from "@angular/core";
import { Ingredient } from "src/model/ingredient.model";

export class ShoppingListService {
    
   private ingredients: Ingredient[] = [
        new Ingredient("Pasta", 5),
        new Ingredient("Pomodori", 0.2)
    ];

    ingredientsChanged = new EventEmitter<Ingredient[]> ();

    getIngredients() {
        return this.ingredients;
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]) {
       /* for(let ingredient of ingredients) {
            this.addIngredient(ingredient);
        } */
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

}