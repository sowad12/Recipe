import { Component } from '@angular/core';
import { AuthService } from './_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe';
  pageView='recipe';
  constructor(private authService:AuthService){}
  // onChangePage(event:string){
  //   this.pageView=event;
  // }
  ngOnInit(): void {
    this.authService.autoLogin();
    
  }
}
