import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' }, // Fixed empty path and added pathMatch
   { path: 'recipes', loadChildren:()=>import('./recipes/recipe.module').then(m=>m.RecipeModule)},
   { path: 'shopping-list', loadChildren:()=>import('./shopping-list/shopping.module').then(m=>m.ShoppingModule)},
   { path: 'auth', loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
