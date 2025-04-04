import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from '../_models/recipe/recipe.model';
import { map,Observable,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http:HttpClient,private recipeService:RecipeService) { }
  
  saveRecipe(){
    const recipes=this.recipeService.getRecipes();
    return this.http.put("https://angular-recipe-94b55-default-rtdb.firebaseio.com/recipes.json",recipes)
           .subscribe((recipe:Recipe[])=>{
             console.log(recipe)
           })
  }
  getRecipes():Observable<Recipe[]>{
    return this.http.get<Recipe[]>("https://angular-recipe-94b55-default-rtdb.firebaseio.com/recipes.json")
          .pipe(
            map(recipes=>{
              return recipes.map(recipe=>{
                 return{
                  ...recipe,
                  ingredients: recipe.ingredients?recipe.ingredients:[]
                 }
              })
            }),
            tap((recipes:Recipe[])=>{
              this.recipeService.setRecipes(recipes);
          })
          )
        
          // .subscribe((recipes:Recipe[])=>{
          //     this.recipeService.setRecipes(recipes);
          // })
  }
}
