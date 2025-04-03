import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../_models/shopping/Ingredient.model';
import { ShoppingListService } from '../_service/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {
  ingredients:Ingredient[]=[]
  
  // OnIngredientAdd(event:Ingredient){
  //   this.ingredients.push(event);
  // }
  constructor(private shoppingListService:ShoppingListService){
  
  }
  
  ngOnInit(): void {
    this.ingredients=this.shoppingListService.getIngredients();
     this.shoppingListService.ingredientsEmitter.subscribe(
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }

  OnEditShoppingList(index:number){
    this.shoppingListService.editingSubIndex.next(index);
  };
  ngOnDestroy(): void {
    
  }
}
