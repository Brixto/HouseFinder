import { Component, OnInit } from '@angular/core';
import { ScrapeService } from 'src/app/services/scrape.service';

@Component({
  selector: 'is-home-list',
  templateUrl: './home-list.component.html',
})
export class HomeListComponent implements OnInit {

  public homes: string[];

  constructor(private _scrapeService: ScrapeService) { }

  ngOnInit() {
    this._scrapeService.loadQuokaList()
      .then(res => {
        this.homes = res;
      })
  }

}
