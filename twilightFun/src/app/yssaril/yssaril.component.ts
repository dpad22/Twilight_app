import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-yssaril',
  templateUrl: './yssaril.component.html',
  styleUrls: ['./yssaril.component.scss']
})
export class YssarilComponent implements OnInit {

  faction:any;
  image: String;
  abilities: any;
  promissory_note: String;
  technologies: String;
  unit_upgrades: any;
  flagship: any;
  government: any;
  quote: String;
  lore: String;

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this._httpService.getYssarilApi().subscribe((data) => {
      this.faction = data;
      console.log('Yssaril Data')
      console.log(this.faction)
      this.image = data['image']
      this.abilities = data['abilities']
      this.promissory_note = data['promissory_note']
      this.technologies = data['technologies']
      this.unit_upgrades = data['unit_upgrades']
      this.flagship = data['flagship']
      this.government = data['government']
      this.quote = data['quote']
      this.lore = data['lore']
    })
  }

}