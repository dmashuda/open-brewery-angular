import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreweriesComponent } from './breweries/breweries.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AgmCoreModule } from '@agm/core';
import { BreweryComponent } from './brewery/brewery.component';

@NgModule({
  declarations: [
    AppComponent,
    BreweriesComponent,
    BreweryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'API KEY HERE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
