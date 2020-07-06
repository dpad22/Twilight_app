import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpService } from "./http.service";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FactionsComponent } from './factions/factions.component';
import { CompanionComponent } from './companion/companion.component';
import { ShowComponent } from './show/show.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    HomeComponent,
    FactionsComponent,
    CompanionComponent,
    ShowComponent,
    AppComponent,

    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgMultiSelectDropDownModule.forRoot()

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
