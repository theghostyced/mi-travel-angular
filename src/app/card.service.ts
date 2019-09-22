import { Injectable } from '@angular/core';

import { CardItem } from './mockType';
import { MockData, MockData2 } from './mock';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  getCardItems(): CardItem[] {
    return MockData;
  }

  getCardItems2(): CardItem[] {
    return MockData2;
  }
}
