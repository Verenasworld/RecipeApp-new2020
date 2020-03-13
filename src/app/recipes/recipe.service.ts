import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
   private recipes: Recipe[] = [
    new Recipe('Strawberry Cake', 'this is simply recipe for you ', 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556__480.jpg'),
    new Recipe( 'a test Recipe', 'this is simply a test', 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556__480.jpg'),
  ];

   getRecipes() {
    return  this.recipes.slice();
   }
  constructor() { }
}
