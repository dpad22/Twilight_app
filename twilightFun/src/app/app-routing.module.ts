import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FactionsComponent } from './factions/factions.component';
import { ArborecComponent } from './arborec/arborec.component'
import { BaronyComponent } from './barony/barony.component'
import { SarrComponent } from './sarr/sarr.component';
import { CompanionComponent } from './companion/companion.component';
import { MuaatComponent } from './muaat/muaat.component';
import { HacanComponent } from './hacan/hacan.component';
import { SolComponent } from './sol/sol.component';
import { CreussComponent } from './creuss/creuss.component';
import { MentakComponent } from './mentak/mentak.component';
import { L1z1xComponent } from './l1z1x/l1z1x.component';
import { NaaluComponent } from './naalu/naalu.component';
import { NekroComponent } from './nekro/nekro.component';
import { SardakkComponent } from './sardakk/sardakk.component';
import { JolComponent } from './jol/jol.component';
import { WinnuComponent } from './winnu/winnu.component';
import { XxchaComponent } from './xxcha/xxcha.component';
import { YinComponent } from './yin/yin.component';
import { YssarilComponent } from './yssaril/yssaril.component';

const routes: Routes = [
  { path: "",component:HomeComponent},
  { path: "factions",component:FactionsComponent},
  { path: "companion",component:CompanionComponent},
  { path: "arborec",component:ArborecComponent},
  { path: "barony",component:BaronyComponent},
  { path: "sarr",component:SarrComponent},
  { path: "muaat",component:MuaatComponent},
  { path: "hacan",component:HacanComponent},
  { path: "sol",component:SolComponent},
  { path: "creuss",component:CreussComponent},
  { path: "l1z1x",component:L1z1xComponent},
  { path: "mentak",component:MentakComponent},
  { path: "naalu",component:NaaluComponent},
  { path: "nekro",component:NekroComponent},
  { path: "sardakk",component:SardakkComponent},
  { path: "jol",component:JolComponent},
  { path: "winnu",component:WinnuComponent},
  { path: "xxcha",component:XxchaComponent},
  { path: "yin",component:YinComponent},
  { path: "yssaril",component:YssarilComponent},


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
