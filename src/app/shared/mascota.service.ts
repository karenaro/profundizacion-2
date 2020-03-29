import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getString } from "tns-core-modules/application-settings";

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private serverUrl= "https://controlmascota.herokuapp.com"; 
  private token : string;

  constructor( private http: HttpClient) { }

  private crearRequestHeaders(){ 
    let headers = new HttpHeaders({
      "Authorization": "Bearer" + this.token,
      "Content-Type" : "application/json"
    });
    return headers;
  }

  getMascotas(){
    this.token = getString("token");
    let headers = this.crearRequestHeaders();
    return this.http.get(this.serverUrl+"/article",{headers});
  }
  
}
 