import { Component, OnInit } from '@angular/core';
import { RouterExtensions} from "nativescript-angular/router";
import { User } from "../model/user";
import { LoginService } from "../shared/login.service"
import { setString } from "tns-core-modules/application-settings";


@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  constructor(private routerExtensions:RouterExtensions, private loginService: LoginService) { 
    this.user = new User();
  }

  ngOnInit(): void {
    this.user.email ="itaangel35@hotmail.com";
    this.user.password = "123456789";
  }

  ingresar(){

    if(!this.user.email || !this.user.password){
      this.alert("correo y/o contraseña incorrectos");
      return;
    }    
    
    this.loginService.autenticar({email: this.user.email,password: this.user.password})
    .subscribe((result:any)=>{
      //console.log(result);      
      setString("token", result.token);
      this.alert(result.token);
      this.routerExtensions.navigate(["/home"],{clearHistory: true});
    }, (error) =>{
      console.log(error)
      this.alert(error.error.message);
      //this.routerExtensions.navigate(["/login"],{clearHistory: true});
    });
    
   //this.routerExtensions.navigate(["/home"],{clearHistory: true});

  }

  alert(message:string)
  {
    return alert({
      title: "Login",
      okButtonText: "OK",
      message: message});
  }

}
