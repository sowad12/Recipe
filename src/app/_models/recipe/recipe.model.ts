import { Ingredient } from "../shopping/Ingredient.model";

export class Recipe{
    public id:number;
    public name:string;
    public description:string;
    public imagePath:string; 
    public ingredients:Ingredient[];

    constructor(id:number=0,name:string=null,description:string=null,imagePath:string=null,ingredients:Ingredient[]=null){
     this.id=id;
     this.name=name;
     this.description=description;
     this.imagePath=imagePath;
     this.ingredients=ingredients;
    }
}