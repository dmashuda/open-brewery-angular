import {Component, OnInit} from '@angular/core';
import {BreweryService} from "../brewery.service";
import {Brewery} from "../brewery";

@Component({
  selector: 'app-breweries',
  templateUrl: './breweries.component.html'
})
export class BreweriesComponent implements OnInit {
  breweries: Brewery[];

  constructor(private breweryService: BreweryService) {
  }

  ngOnInit() {
    this.getBreweries();
  }

  getBreweries(): void {
    this.breweryService.getBreweries().subscribe((data: Brewery[]) => this.breweries = data);
  }


}
