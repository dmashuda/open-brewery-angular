import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BreweriesComponent} from "./breweries/breweries.component";
import {BreweryComponent} from "./brewery/brewery.component";


const routes: Routes = [
  {path: '', component: BreweriesComponent},
  {path: 'breweries', component: BreweriesComponent},
  {path: 'breweries/:breweryId', component: BreweryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
