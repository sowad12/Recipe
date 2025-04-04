import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../_models/recipe/recipe.model';
import { Ingredient } from '../_models/shopping/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
recipeChange=new Subject<Recipe[]>();

  private recipes:Recipe[]=[]
  recipeSelectEmitter=new EventEmitter<Recipe>();
  
  constructor(private shoppingListService:ShoppingListService) { }
  getRecipes(){
    return this.recipes.slice();
  }
  setRecipes(recipes:Recipe[]){
   this.recipes=recipes;
   this.recipeChange.next(this.recipes.slice());
  }
  getRecipeById(id:number){
    let recipe:Recipe;
    recipe=this.recipes.find(x=>x.id===id);
    if(recipe){
      return recipe;
    }
    return new Recipe();
  }
  addIngredientsShoppingList(ingredients:Ingredient[]){
   this.shoppingListService.OnIngredientsAdd(ingredients)
  }
  addNewRecipe(recipe:Recipe){
    recipe.id=this.recipes.length+1;
    this.recipes.push(recipe);
    this.recipeChange.next(this.recipes);
  }
  updateRecipeById(id:number,recipe:Recipe){
    let Ind=this.recipes.findIndex(x=>x.id===id);
    recipe.id=id;
    this.recipes[Ind]=recipe;
    this.recipeChange.next(this.recipes);
  }
  deleteRecipe(id:number){
    let Ind=this.recipes.findIndex(x=>x.id===id);
    this.recipes.splice(Ind,1);
    this.recipeChange.next(this.recipes);
  }
}
