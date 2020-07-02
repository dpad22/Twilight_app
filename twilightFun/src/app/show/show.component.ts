import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
factionData:any;
id:any;
factionId:any;
faction:any;


  constructor(
    private router: Router, 
    private route: ActivatedRoute, 
    private httpService: HttpService
  ) { }

  ngOnInit() {
    this.factionId = this.route.snapshot.paramMap.get("id");
    this.getOneFaction();
  }

  getOneFaction(){
    let observable = this.httpService.getFaction(this.factionId);
    observable.subscribe((data)=> {
      this.factionData = data;
      console.log("-------show component---------")
      console.log(this.factionData)
    })
  }
}
