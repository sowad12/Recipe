import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { RecipeManipulate } from 'src/app/_enums/recipe-manipulate.enum';
import { Recipe } from 'src/app/_models/recipe/recipe.model';
import { RecipeService } from 'src/app/_service/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes:Recipe[]=[]
RecipeManipulate=RecipeManipulate  
subscription: Subscription;
 constructor(private recipeService:RecipeService,private router:Router,private activeRoute:ActivatedRoute){}

 ngOnInit(): void {
  this.recipes=this.recipeService.getRecipes();
  this.subscription=this.recipeService.recipeChange.subscribe(
    (recipes:Recipe[])=>{
      this.recipes=recipes
    }
  )
 }
 @Output()
  recipeParentSelect=new EventEmitter<Recipe>();
//  OnRecipeSelected(recipe:Recipe){
//   console.log("parent recipe-list")
//   this.recipeParentSelect.emit(recipe);
//  }

  OnRecipeAdd(){
      this.router.navigate(['recipes/add'])
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    
  }

}
 