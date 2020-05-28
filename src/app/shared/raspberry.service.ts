import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getString } from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class RaspberryService {
    private dataplicityUrl= "https://smearier-baboon-9098.dataplicity.io";


  constructor(private http: HttpClient) { }

  private crearRequestHeaders(){
    let headers = new HttpHeaders({
      "Content-Type" : "application/json"
    });
    return headers;
  }

  public on(){
      let url = this.dataplicityUrl + "/led/red"
      return this.http.post(url,{"state":"1"},{headers: this.crearRequestHeaders()})
  }

  public off(){
    let url = this.dataplicityUrl + "/led/red"
    return this.http.post(url,{"state":"1"},{headers: this.crearRequestHeaders()})
}



}
