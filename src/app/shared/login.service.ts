import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
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

  autenticar(data:any){
    let headers = new HttpHeaders({
    "Content-Type" : "application/json"
    });
    return this.http.post(this.serverUrl +"/signin",data,{headers: headers});
    console.log(this.serverUrl +"/signin")

  }


/*
 //este va en el servicio de animales 
  getMascotas(){
    this.token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1Y2YxYTNhMDQ5Mzg5MzIzMTA0NDExNGYiLCJpYXQiOjE1ODU0MzI3NzEsImV4cCI6MTU4NjY0MjM3MX0.9OlDBh3gUuPgnkSzWP-pqeO9oV3QpTnRKzkUEFL51lw";
    let headers = this.crearRequestHeaders();
    return this.http.get(this.serverUrl+"articles",{headers});
  }
  */
}
