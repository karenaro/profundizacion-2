import { Component, OnInit } from '@angular/core';
import { RouterExtensions} from "nativescript-angular/router";
import { User } from "../model/user";
import { LoginService } from "../shared/login.service"


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
    /*
    this.loginService.autenticar({correo:this.user.email, password:this.user.password}).subscribe((result)=>{
      console.log(result);
      this.routerExtensions.navigate(["/home"],{clearHistory: true});
    }, (error) =>{
      //console.log(error);
      this.alert(error.error.message);
    });
    */
   this.routerExtensions.navigate(["/home"],{clearHistory: true});

  }

  alert(message:string)
  {
    return alert({
      title: "Login",
      okButtonText: "OK",
      message: message});
  }

}
