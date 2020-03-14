import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
ingredientPush = new EventEmitter<Ingredient>();
     private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5, 'dag'),
    new Ingredient('Tomatoes', 10, 'kg')

  ];
  getIngredient() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);

  }
  constructor() { }
}

