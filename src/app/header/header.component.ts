import { Component, EventEmitter, Output } from '@angular/core';
import { DataStorageService } from '../_service/data-storage.service';
import { AuthService } from '../_service/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated = false;
  sub:Subscription;
 constructor(private dataStorageService:DataStorageService,private authService:AuthService){}

  ngOnInit(): void {
    this.sub=this.authService.user$.subscribe(user=>{
      this.isAuthenticated=user?true:false;
    })
    
  }
  onSaveData(){
    this.dataStorageService.saveRecipe();
  }
  onFetchData(){
    this.dataStorageService.getRecipes().subscribe();
  }
  onLogout(){
    this.authService.logout();
  }
}
