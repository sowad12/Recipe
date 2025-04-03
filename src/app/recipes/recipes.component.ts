import { Component, OnInit } from '@angular/core';
import { Recipe } from '../_models/recipe/recipe.model';
import { RecipeService } from '../_service/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipe!:Recipe;
  constructor(private recipeService:RecipeService){}
  ngOnInit(): void {
    this.recipeService.recipeSelectEmitter.subscribe(
        (recipe:Recipe)=>{
          this.recipe=recipe;
        }

    )
  }
}
