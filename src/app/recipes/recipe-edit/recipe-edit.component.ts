import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from 'src/app/_service/recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {
id:number;
isEdit:boolean;
recipeform:FormGroup;

constructor(private activeRoute:ActivatedRoute,
             private router:Router,
             private recipeService:RecipeService){}


ngOnInit(): void {
  this.activeRoute.params.subscribe((params:Params)=>{
    this.id=+params['id'];
    this.isEdit=params['id']!=null;
    this.intiliazeForm();
  })
 }

 intiliazeForm(){
  const recipe=this.recipeService.getRecipeById(this.id);
  const recipeIngredits=new FormArray([]);
  if(recipe["ingredients"] && recipe.ingredients.length>0){
    for(let item of recipe.ingredients){
      recipeIngredits.push(
       new FormGroup({
        "name": new FormControl(item.name,[Validators.required]),
        "amount":new FormControl(item.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
      )
    }
  };
  this.recipeform=new FormGroup({
    "name":new FormControl(recipe.name,[Validators.required]),
    "imagePath":new FormControl(recipe.imagePath,[Validators.required]),
    "description":new FormControl(recipe.description,[Validators.required]),
    "ingredients":recipeIngredits
  })
 }

 onAddIngredient(){
  let ingredientFormGroup:FormGroup;
  ingredientFormGroup=new FormGroup({
  "name": new FormControl(null,[Validators.required]),
  "amount":new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
  });
  (<FormArray>this.recipeform.get('ingredients')).push(ingredientFormGroup);
 }

 onDeleteIngredient(index:number){
  (<FormArray>this.recipeform.get('ingredients')).removeAt(index);
 }
 onSubmit(){
   if(this.isEdit){   
    this.recipeService.updateRecipeById(this.id,this.recipeform.value);
   }
   else{
    this.recipeService.addNewRecipe(this.recipeform.value);
     
   }
 }
 onCancel(){
  this.router.navigate(['../'], {relativeTo: this.activeRoute});
 }
get recipeControls() {
  return (this.recipeform.get('ingredients') as FormArray).controls
}

}
