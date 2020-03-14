import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable()

export class ShoppingListService {
ingredientsChanged = new EventEmitter<Ingredient[]>();
     private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, 'dag'),
    new Ingredient('Tomatoes', 10, 'kg')

  ];
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());

  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
  // for (const ingredient of ingredients) {
  //   this.addIngredient(ingredient);
  // }
  }


