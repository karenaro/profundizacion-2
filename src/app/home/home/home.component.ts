import { Component, OnInit } from '@angular/core';
import { RouterExtensions} from "nativescript-angular/router";
import { Mascota } from '../../model/mascota';
import { MascotaService } from '../../shared/mascota.service';
import { RaspberryService } from '../../shared/raspberry.service'
import { getString } from 'tns-core-modules/application-settings/application-settings';
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";

@Component({
  selector: 'ns-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    isBusy: boolean = false;

  constructor(private routerExtensions:RouterExtensions,
     private mascotaService: MascotaService,
     private raspberryService: RaspberryService,
     private page:Page) { }
  mascota: Array<Mascota>;
  ngOnInit(): void {
    this.cargaincial();

  }

cargaincial(){
    this.mascotaService.getMascotas().subscribe((result:any)=>{
        console.log(result);
        this.mascota= result.articles;
      }, (error) =>{
       // console.log(error);
        this.alert(error.message);
    });
}

  salir(){
    this.routerExtensions.navigate(["/login"],{clearHistory: true});
  }

  irCamara(){
    this.routerExtensions.navigate(["/camara"],{clearHistory: true});
  }

  redOn(){
      this.isBusy=true;
      this.raspberryService.on().subscribe((result:any)=>{
          this.alert(result.respuesta);
          this.isBusy=false;
      },(error)=>{
          this.isBusy=false;
          this.alert(error.message);
      });
  }

  redOff(){
    this.isBusy=true;
    this.raspberryService.off().subscribe((result:any)=>{
        this.alert(result.respuesta);
        this.isBusy=false;
    },(error)=>{
        this.isBusy=false;
        this.alert(error.message);
    });
  }


  alert(message:string)
  {
    return alert({
      title: "Mascota",
      okButtonText: "OK",
      message: message});
  }

  onBusyChanged(args: EventData) {
    let indicator: ActivityIndicator = <ActivityIndicator>args.object;
    console.log("indicator.busy changed to: " + indicator.busy);
  }



}
