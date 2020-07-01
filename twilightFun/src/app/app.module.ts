import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FactionsComponent } from './factions/factions.component';
import { ArborecComponent } from './arborec/arborec.component';
import { BaronyComponent } from './barony/barony.component';
import { SarrComponent } from './sarr/sarr.component';
import { CompanionComponent } from './companion/companion.component';
import { MuaatComponent } from './muaat/muaat.component';
import { HacanComponent } from './hacan/hacan.component';
import { SolComponent } from './sol/sol.component';
import { CreussComponent } from './creuss/creuss.component';
import { L1z1xComponent } from './l1z1x/l1z1x.component';
import { MentakComponent } from './mentak/mentak.component';
import { NaaluComponent } from './naalu/naalu.component';
import { NekroComponent } from './nekro/nekro.component';
import { SardakkComponent } from './sardakk/sardakk.component';
import { JolComponent } from './jol/jol.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FactionsComponent,
    ArborecComponent,
    BaronyComponent,
    SarrComponent,
    CompanionComponent,
    MuaatComponent,
    HacanComponent,
    SolComponent,
    CreussComponent,
    L1z1xComponent,
    MentakComponent,
    NaaluComponent,
    NekroComponent,
    SardakkComponent,
    JolComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
