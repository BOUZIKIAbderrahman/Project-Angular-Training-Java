import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginSubscription : Subscription | any ;
  isLoginSuccessful: boolean | null = null   ;

  constructor(
    private loginService : LoginService ,
    private tokenService : TokenStorageService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  loginAction(login : any){
    const loginValues = {
      username  : login.form.value.username ,
      password : login.form.value.password
    }
    this.loginSubscription = this.loginService.login(loginValues.username,loginValues.password).subscribe(
      (value : any) =>{
        this.tokenService.saveToken(value.token) ;
        const userConnected =  { username : loginValues.username }
        this.tokenService.saveUser(userConnected)
        this.isLoginSuccessful = true ;
        setTimeout(() => {
          this.router.navigateByUrl('');
        }, 2000);
      },
      (error : any) =>{
        this.isLoginSuccessful = false ;
      }
    )
  }

}
