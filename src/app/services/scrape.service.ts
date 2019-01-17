import { Injectable } from '@angular/core';
import * as pup from "puppeteer";

@Injectable({
  providedIn: 'root'
})
export class ScrapeService {

  public async loadQuokaList(): Promise<string[]> {
    const browser = await pup.launch()
    const page = await browser.newPage()
    await page.goto('https://www.quoka.de/')

    await page.evaluate(() => {
      const searchDescription = document.querySelector('#search1') as HTMLInputElement
      searchDescription.value = '3 Zimmerwohnung'

      const searchPLZ = document.querySelector('#city') as HTMLInputElement
      searchPLZ.value = 'Coburg'

      const searchButton = document.querySelector('#searchbutton') as HTMLButtonElement
      searchButton.click()
    })

    await page.waitForNavigation()

    const result = await page.evaluate(() =>
      Array.from(document.querySelectorAll('div.q-col div.description'))
        .map(x => x.innerHTML.trim()))

    await browser.close()

    return result;
  }
}
