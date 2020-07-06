import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-companion',
  templateUrl: './companion.component.html',
  styleUrls: ['./companion.component.scss']
})
export class CompanionComponent implements OnInit {
  factions: any;
  faction: "";
  selectedFactions: any = [];
  wasClicked: boolean = false;
  
  

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

  displayFaction(faction, event) {
    console.log("display factions")
    console.log(faction)
    console.log(event)
      if(event.target.checked == true){
        this.selectedFactions.push(faction)

      }
      else{
        this.selectedFactions.splice(this.selectedFactions.indexOf(faction),1);

      }
    console.log("display factions array")
    console.log(this.selectedFactions)
    return this.selectedFactions

  }

}

