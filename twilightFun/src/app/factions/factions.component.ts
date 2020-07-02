import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.scss']
})
export class FactionsComponent implements OnInit {
factions: any = [];


  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getFactionsFromService();
    
  }

  getFactionsFromService(){
    let observable = this._httpService.getAllFactions();
    observable.subscribe((data) => {
      this.factions = data;
      console.log("*****************")
      console.log(this.factions)
      console.log("*****************")
    })
  }
}
