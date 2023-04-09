import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
//Interface
import { ResponseI } from './models/response.interface';
import { LoginI } from './models/login.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService{

  private url = "http://127.0.0.1:5000"; 
  private _refresh$ = new Subject<void>();
   
  constructor(public http:HttpClient){}

  get refresh$(){
    return this._refresh$;
  }
  
  public getPositions():Observable<any>{
    return this.http.get(this.url)
  }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion =this.url + "/api/login";
    return this.http.post<ResponseI>(direccion, form);
  }


  
}
