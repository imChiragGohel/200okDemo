import { Component, OnInit } from '@angular/core';
import { concat, random } from 'lodash';
import { LocalStorageUtils } from '../../../core/utils/localstorage-utils';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userInfo: any = null;

  items: any = [];
  constructor() { }

  ngOnInit(): void {

    this.userInfo = LocalStorageUtils.getUserData();

    this.makeMockData();
  }

  makeMockData() {
    const items: any = [];
    [1, 2, 3, 4].forEach(x => {
      const numebr = random(1, 4);
      items.push({ img: numebr, title: `Title-${numebr}`, description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.' });
    });

    this.items = concat(this.items, items);
    console.log('this.items:', this.items)
  }

}
