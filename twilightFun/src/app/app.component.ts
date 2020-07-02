import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  title = 'twilightFun';
  factions: any = [];


  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this._httpService.getAllFactions().subscribe((data)=> {
      this.factions = data;
      console.log("*****************")
      console.log(this.factions)
      console.log("*****************")


    });
  }
}