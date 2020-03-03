import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
import {hostReportError} from 'rxjs/internal-compatibility';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 recipes: Recipe[] = [
   new Recipe( 'a test Recipe', 'this is simply a test', 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556__480.jpg'),
   new Recipe( 'a test Recipe', 'this is simply a test', 'https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971556__480.jpg')
 ];
 constructor() { }

  ngOnInit() {
  }

}

