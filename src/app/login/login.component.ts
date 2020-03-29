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
  }

  ingresar(){

    if(!this.user.email || !this.user.password){
      this.alert("correo y/o contraseña incorrectos");
      return
    }
    //console.log(this.user)
    this.loginService.autenticar({email:this.user.email, password:this.user.password})
    .subscribe((result: any)=>{
      //console.log(result);
      //console.log(result.token.access_token);
      //console.log(JSON.parse(result.toString()).token.access_token);
      setString("token", result.token.access_token);
      this.routerExtensions.navigate(["/home"],{clearHistory: true});
    }, (error) =>{
      //console.log(error);
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
