import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FactionsComponent } from './factions/factions.component';
import { ShowComponent } from './show/show.component';
import { CompanionComponent } from './companion/companion.component';

const routes: Routes = [
  { path: "",component:HomeComponent},
  { path: "factions",component:FactionsComponent},
  { path: "factions/:id", component:ShowComponent},
  { path: "companion",component:CompanionComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
