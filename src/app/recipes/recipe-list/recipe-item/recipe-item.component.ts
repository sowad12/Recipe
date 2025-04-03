import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/_models/recipe/recipe.model';
import { RecipeService } from 'src/app/_service/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input()
  recipe!:Recipe;

  // @Output()
  // recipeSelect=new EventEmitter<void>();
  // constructor(private recipeService:RecipeService){}
  // onSelectItem(){
  // //   console.log("child recipe-item")
  // //  this.recipeSelect.emit();
  //    this.recipeService.recipeSelectEmitter.emit(this.recipe);
  // }
}
