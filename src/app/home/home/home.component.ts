import { Component, OnInit } from '@angular/core';
import { RouterExtensions} from "nativescript-angular/router";
import { Mascota } from '../../model/mascota';
import { MascotaService } from '../../shared/mascota.service';

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routerExtensions:RouterExtensions, private mascotaService: MascotaService) { }
  mascota: Array<Mascota>;
  ngOnInit(): void {
    /*
    this.mascotaService.getMascotas().subscribe((result:any)=>{
      console.log(result);
      this.mascota= result.mascota;
    }, (error) =>{
      //console.log(error);
      this.alert(error.error.message);
    });
    */
  }

  salir(){
    this.routerExtensions.navigate(["/login"],{clearHistory: true});
  }

  irCamara(){
    this.routerExtensions.navigate(["/camara"],{clearHistory: true});
  }

  alert(message:string)
  {
    return alert({
      title: "Login",
      okButtonText: "OK",
      message: message});
  }

  

}
