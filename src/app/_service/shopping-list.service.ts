import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../_models/shopping/Ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
private ingredients:Ingredient[]=[
    new Ingredient("tomatto",10),
    new Ingredient("apple",20)
  ]
  ingredientsEmitter=new EventEmitter<Ingredient[]>();
  editingSubIndex=new Subject<number>();

  constructor() { }
  getIngredients(){
    //console.log(this.ingredients);
    return this.ingredients.slice();
  }
  getIngredientByIndex(index:number){
  
    return this.ingredients[index];
  }
  
  OnIngredientAdd(ingredient:Ingredient){   
    this.ingredients.push(ingredient);
    this.ingredientsEmitter.emit(this.ingredients.slice());
  }
  OnIngredientUpdate(index:number,ingredient:Ingredient){   
    this.ingredients[index]=ingredient;
    this.ingredientsEmitter.emit(this.ingredients.slice());
  }
  OnIngredientDeleteById(index:number){   
    this.ingredients.splice(index,1);
    this.ingredientsEmitter.emit(this.ingredients.slice());
  }

  OnIngredientsAdd(ingredients:Ingredient[]){   
    this.ingredients.push(...ingredients);
    this.ingredientsEmitter.emit(this.ingredients.slice());
  }
 
}
