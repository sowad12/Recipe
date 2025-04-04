import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from '../recipes.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { RecipeResolver } from 'src/app/_resolver/recipe.resolver';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
const routes: Routes = [
  { path: 'recipes', component: RecipesComponent,children:[
       {path:'',component:RecipeStartComponent,resolve:[RecipeResolver]},
       {path:'add',component:RecipeEditComponent},
       {path:':id',component:RecipeDetailComponent,resolve:[RecipeResolver]},
       {path:':id/edit',component:RecipeEditComponent,resolve:[RecipeResolver]},
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule { }
