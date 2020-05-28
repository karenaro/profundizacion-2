import { Component, OnInit } from '@angular/core';
import { RouterExtensions} from "nativescript-angular/router";
import { User } from "../model/user";
import { LoginService } from "../shared/login.service"
import { setString } from "tns-core-modules/application-settings";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";


@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  isBusy: boolean = false;

  constructor(private routerExtensions:RouterExtensions, private loginService: LoginService,
    private page:Page) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.user.email ="itaangel35@hotmail.com";
    this.user.password = "123456789";
    this.page.actionBarHidden = true;
  }

  ingresar(){

    this.isBusy=true;
    if(!this.user.email || !this.user.password){
      this.alert("correo y/o contraseña incorrectos");
      return;
    }

    this.loginService.autenticar({email: this.user.email,password: this.user.password})
    .subscribe((result:any)=>{
      console.log(result.token);
      setString("token", result.token);
      //this.alert(result.token);
      this.isBusy=false;
      this.routerExtensions.navigate(["/home"],{clearHistory: true});
    }, (error) =>{
      this.alert(error.error.message);
      this.isBusy=false;

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

  onBusyChanged(args: EventData) {
    let indicator: ActivityIndicator = <ActivityIndicator>args.object;
    console.log("indicator.busy changed to: " + indicator.busy);
  }

}
