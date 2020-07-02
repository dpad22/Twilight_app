import { Component, OnInit } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.scss']
})
export class CompanionComponent implements OnInit {
  
  factions:any;
  faction:any;
  image: String;
  abilities: any;
  promissory_note: any;
  technologies: any;
  unit_upgrades: any;
  flagship: any;
  government: any;
  quote: String;
  lore: String;

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this._httpService.getFactions().subscribe((data) => {
      this.factions = data;
      console.log(this.factions)
      this.image = data['image']
      this.abilities = data['abilities']
      this.promissory_note = data['promissory_note']
      this.technologies = data['technologies']
      this.unit_upgrades = data['unit_upgrades']
      this.flagship = data['flagship']
      this.government = data['government']
      this.quote = data['quote']
    })
  }

}
