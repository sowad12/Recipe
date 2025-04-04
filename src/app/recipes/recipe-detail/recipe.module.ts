import { NgModule } from '@angular/core';
import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipesComponent } from '../recipes.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeItemComponent } from '../recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent

  ],
  imports: [
    RecipeRoutingModule,
    SharedModule
  ]
})
export class RecipeModule { }
