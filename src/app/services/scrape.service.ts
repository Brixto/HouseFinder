import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ScrapeService {

  private _url = 'http://localhost:3000/quoka';

  constructor(private _http: HttpClient) { }

  public quoka() {
    return this._http.get<string[]>(this._url);
  }
}
