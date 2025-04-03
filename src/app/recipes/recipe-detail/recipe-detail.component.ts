import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { RecipeManipulate } from 'src/app/_enums/recipe-manipulate.enum';
import { Recipe } from 'src/app/_models/recipe/recipe.model';
import { RecipeService } from 'src/app/_service/recipe.service';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  RecipeManipulate=RecipeManipulate
  constructor(private recipeService:RecipeService,private router:Router,private activateRoute:ActivatedRoute,){}
  @Input()
  recipe!:Recipe
  ngOnInit(): void {

    this.recipe=this.recipeService.getRecipeById(+this.activateRoute.snapshot.params['id'])
    this.activateRoute.params.subscribe(
      (x:Params)=>{
        // console.log(x['id']);
        this.recipe=this.recipeService.getRecipeById(+x['id'])
      }
    )
    // console.log(this.recipe)
  }
  onAddToShoppingList(){
     this.recipeService.addIngredientsShoppingList(this.recipe.ingredients);
  }
  OnEdit(id:number){
     this.router.navigate(['edit'],{relativeTo:this.activateRoute})
  }
  OnDelete(id:number){
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['recipes']);
  }
}
