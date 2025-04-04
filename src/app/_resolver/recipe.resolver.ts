

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../_models/recipe/recipe.model';
import { DataStorageService } from '../_service/data-storage.service';
import { RecipeService } from '../_service/recipe.service';


@Injectable({
  providedIn: 'root',
})
export class RecipeResolver implements Resolve<Recipe[]> {
  constructor(private dataStorageService:DataStorageService,private recipeService:RecipeService) {}
  recipes:Recipe[]=[];
  resolve(route:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    
    this.recipeService.recipeChange.subscribe(
         (recipes:Recipe[])=>{
          this.recipes=recipes;
         }
    );

    if(this.recipes.length==0){
      return this.dataStorageService.getRecipes();
    }
   return this.recipes;
  }
}
