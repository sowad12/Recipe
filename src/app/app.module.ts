import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { RecipeModule } from './recipes/recipe-detail/recipe.module';
import { ShoppingModule } from './shopping-list/shopping.module';
import { SharedModule } from './shared/shared.module';
import { InterceptorModule } from './_interceptor/interceptor.module';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    LoaderComponent
  ],
  imports: [
    AppRoutingModule,
    RecipeModule,
    ShoppingModule,
    SharedModule,
    InterceptorModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
