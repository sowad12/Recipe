import { NgModule } from '@angular/core';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [
    ShoppingRoutingModule,
    SharedModule
  ]
})
export class ShoppingModule { }
