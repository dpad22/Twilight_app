import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private _http: HttpClient) { }

  getFaction(id){
    return this._http.get(`/factions/${id}`);
  }

  getAllFactions(){
    return this._http.get("/factions");
  }
}
