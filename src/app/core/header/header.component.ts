import {Component } from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent{
  constructor(private dsService: DataStorageService,
              private authService: AuthService,
              private router: Router){}

    onSaveData(){
      this.dsService.storeRecipes()
        .subscribe(
          (response: Response)=>{
            console.log(response);
          });
  }
  onFetchData(){
    this.dsService.getRecipes();
  }
  onLogout(){
    this.authService.loggout();
    this.router.navigate(['/signin']);
  }

}
