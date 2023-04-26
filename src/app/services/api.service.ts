import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
//Interface
import { ResponseI } from 'src/app/models/response.interface';
import { ResponseInterfacePoints } from '../models/responsePoints.interface';
import { LoginI } from '../models/login.interface';
import { PointsI } from '../models/points.interface';
import { ModFormI } from '../models/mod-form.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService{

  private url = "https://srv76158-15190.vps.etecsa.cu";
  private _refresh$ = new Subject<void>();

  constructor(public http:HttpClient){}

  get refresh$(){
    return this._refresh$;
  }

  public getPositions():Observable<any>{
    return this.http.get(this.url)
  }

  loginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion =this.url + "/api/auth/login";
    return this.http.post<ResponseI>(direccion, form);
  }
  sendPointsRoutes(app:ModFormI):Observable<ResponseInterfacePoints>{
    let direccion =this.url + "/api/routes/add";
    return this.http.post<ResponseInterfacePoints>(direccion, app);
  }



}
