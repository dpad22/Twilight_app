import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-factions',
  templateUrl: './factions.component.html',
  styleUrls: ['./factions.component.scss']
})
export class FactionsComponent implements OnInit {
factions: any;
faction: String;
image: String;
quote: String;


  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this._httpService.getFactions().subscribe((data)=> {
      this.factions = data;
      console.log("*****************")
      console.log(this.factions)
      console.log("*****************")


    });
  }
}
