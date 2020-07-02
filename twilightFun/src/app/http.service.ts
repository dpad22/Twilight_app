import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private _http: HttpClient) { }

  getFaction(id){
    return this._http.get(`/faction/${id}`);
  }

  getAllFactions(){
    return this._http.get("/factions");
  }
}

  // public getFactions(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/factions.json");
  // }
  // public getArborecApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/arborec.json");
  // }

  // public getBaronyApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/barony.json");
  // }

  // public getSarrApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/sarr.json");
  // }

  // public getMuaatApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/muaat.json");
  // }

  // public getHacanApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/hacan.json");
  // }

  // public getSolApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/sol.json");
  // }

  // public getCreussApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/creuss.json");
  // }

  // public getL1Z1XApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/l1z1x.json");
  // }

  // public getMentakApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/mentak.json");
  // }

  // public getNaaluApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/naalu.json");
  // }

  // public getNekroApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/nekro.json");
  // }

  // public getSardakkApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/sardakk.json");
  // }

  // public getJolApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/jol_nar.json");
  // }

  // public getWinnuApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/winnu.json");
  // }

  // public getXxchaApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/xxcha.json");
  // }

  // public getYinApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/yin.json");
  // }

  // public getYssarilApi(){
  //   return this._httpClient.get("https://raw.githubusercontent.com/dpad22/Twilight_app/master/faction_JSON/yssaril.json");
  // }

