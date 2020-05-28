import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getString } from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private serverUrl= "https://controlmascota.herokuapp.com";


  constructor( private http: HttpClient) { }

  private crearRequestHeaders(){
    let headers = new HttpHeaders({
      "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Y2YyYjE0M2U4YzAxMTFmYTAzY2FiNjYiLCJpYXQiOjE1OTA2MzQ2NjcsImV4cCI6MTU5MTg0NDI2N30.O0c54mm0utFkgs4yBF-VU62OiTknl14fSkEI7NuCMkE" ,
      "Content-Type" : "application/json"
    });
    return headers;
  }

  getMascotas(){
    console.log(getString("token"))
    let url = this.serverUrl + "/articles";
    return this.http.get(url,{headers : this.crearRequestHeaders()});
  }

}
