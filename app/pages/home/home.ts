import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/home/home.html',
})

export class HomePage {

  private items;

  constructor(private nav: NavController) {

    this.items = [
        {title: 'hi1', description: 'test1'},
        {title: 'hi2', description: 'test2'},
        {title: 'hi3', description: 'test3'},
    ];

  }

  addItem(){

  }

  viewItem(){

  }
}

