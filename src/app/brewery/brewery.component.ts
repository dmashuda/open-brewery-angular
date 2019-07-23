import {Component, OnInit} from '@angular/core';
import {BreweryService} from "../brewery.service";
import {Brewery} from "../brewery";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-brewery',
  templateUrl: './brewery.component.html',
  styleUrls: ['./brewery.component.scss']
})
export class BreweryComponent implements OnInit {
  brewery: Brewery;
  zoom: number = 12;

  constructor(private breweryService: BreweryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.brewery = null;
    this.route.paramMap.subscribe(params => {
      const id = +params.get('breweryId');
      this.getBrewery(id);
    });
  }

  getBrewery(id: number) {
    this.breweryService.getBrewery(id).subscribe((data: Brewery) => {
        this.brewery = data;
      }
    );
  }
}
