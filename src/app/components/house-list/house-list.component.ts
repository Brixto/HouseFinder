import { Component, OnInit } from '@angular/core';
import { ScrapeService } from 'src/app/services/scrape.service';

@Component({
  selector: 'hf-house-list',
  templateUrl: './house-list.component.html',
  providers: [ScrapeService],
})
export class HouseListComponent implements OnInit {

  public houses: string[];

  constructor(private _scrapeService: ScrapeService) { }

  ngOnInit() {
    this.getHouses();
  }

  private getHouses() {
    this._scrapeService.quoka()
      .subscribe(res => {
        this.houses = res;
      })
  }
}
