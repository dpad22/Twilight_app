import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../http.service';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
factionData:any;
id:any;
private factionId:String;
faction:any;
currentURL: string;


  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private httpService: HttpService
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.factionId = params.get("id")
    this.getOneFaction();
  });
  }

  getOneFaction(){
    let observable = this.httpService.getFaction(this.factionId);
    observable.subscribe((data)=> {
      this.factionData = data;
      console.log("-------show component---------")
      console.log(this.factionData)
      console.log(this.factionId)
    })
  }
}
