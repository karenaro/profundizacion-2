import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private serverUrl= "https://controlmascota.herokuapp.com";
  private token:string;

  constructor( private http: HttpClient) { }

  private crearRequestHeaders(){
    let headers = new HttpHeaders({
      "Authorization": "Bearer" + this.token,
      "Content-Type" : "application/json"
    });
    return headers;
  }

  autenticar(data:any){
    let headers = new HttpHeaders({
    "Content-Type" : "application/json"
    });

    return this.http.post(this.serverUrl +"/signin",data,{headers: headers});
    console.log(this.serverUrl +"/signin")

  }
}
