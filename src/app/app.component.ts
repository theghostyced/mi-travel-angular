import { Component, OnInit } from '@angular/core';
import SProgress from 'sprogress';

import { CardService } from './card.service';
import { CardItem } from './mockType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cardItems: CardItem[];
  cardItems2: CardItem[];
  

  constructor(private cardService: CardService) {
    SProgress.init({
      color: '#E8594E'
    });
  }

  ngOnInit(): void {
    this.getCardItems();
  }

  getCardItems(): void {
    this.cardItems = this.cardService.getCardItems();
    this.cardItems2 = this.cardService.getCardItems2()
  }
}
