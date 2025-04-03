import { Component,ElementRef,EventEmitter,OnDestroy,OnInit,Output,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from 'src/app/_models/shopping/Ingredient.model';
import { ShoppingListService } from 'src/app/_service/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
 editMode:boolean=false;
 editIndex:number;
 editItem:Ingredient;
 @ViewChild('nameInput') nameInput:ElementRef;
 @ViewChild('amountInput') amountInput:ElementRef;
 @ViewChild('f') formData:NgForm
 @Output()
 ingredient=new EventEmitter<Ingredient>();
 constructor(private shoppingListService:ShoppingListService){}

 ngOnInit(): void {
   this.shoppingListService.editingSubIndex.subscribe(
    (index:number)=>{
    this.editIndex=index;
    this.editMode=true;
    this.editItem=this.shoppingListService.getIngredientByIndex(index);
    this.formData.form.patchValue({
      name:this.editItem.name,
      amount:this.editItem.amount
    })
   })
 }


 onAdd(event:any){
  event.preventDefault();
   this.shoppingListService.OnIngredientAdd(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
 }
 onSubmit(){
  if(this.editMode){
    this.shoppingListService.OnIngredientUpdate(this.editIndex,new Ingredient(this.formData.value.name,this.formData.value.amount));
  }
  else{
    this.shoppingListService.OnIngredientAdd(new Ingredient(this.formData.value.name,this.formData.value.amount));
  }
  this.editMode=false;
  this.formData.reset();
 }
 OnClear(){
  this.formData.reset();
  this.editMode=false;
 }
 OnDelete(){
  this.shoppingListService.OnIngredientDeleteById(this.editIndex);
  this.OnClear();
 }

 ngOnDestroy(): void {
   
 }
}
