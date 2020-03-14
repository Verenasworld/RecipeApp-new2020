import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
   private recipes: Recipe[] = [
    new Recipe('Strawberry Cake',
      'this is simply recipe for you ',
      'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556__480.jpg',
      [
          new Ingredient('strawberry', 300, 'dag'),
          new Ingredient('obers', 300, 'g')
      ]),
    new Recipe(
      'Big Burger',
      'this is a cool recipe for you',
      'https://cdn.pixabay.com/photo/2017/10/16/09/01/hamburger-2856548__480.jpg',
      [
        new Ingredient('meet', 1, 'kg'),
        new Ingredient('bread', 6, 'stk')
      ]),
  ];
   constructor( private slsService: ShoppingListService) {
   }
   getRecipes() {
    return this.recipes.slice();
   }
   addIngredientsToShoppingList(ingredients: Ingredient[]) {
     this.slsService.addIngredients(ingredients);

   }
}
