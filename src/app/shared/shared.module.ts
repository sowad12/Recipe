import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirectivesDirective } from '../_directives/dropdown-directives.directive';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    DropdownDirectivesDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownDirectivesDirective,
    LoaderComponent
  ]
})
export class SharedModule { }
