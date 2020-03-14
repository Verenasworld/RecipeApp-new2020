import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

 onNavigate(feature: string) {
  this.loadedFeature = feature;
 }
}
// TODO : somewhere is a mistake that jumps from shopping list to recipes
