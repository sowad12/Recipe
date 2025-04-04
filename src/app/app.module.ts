import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeModule } from './recipes/recipe.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { InterceptorModule } from './_interceptor/interceptor.module';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RecipeModule,
    ShoppingModule,
    AuthModule,
    SharedModule,
    InterceptorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
