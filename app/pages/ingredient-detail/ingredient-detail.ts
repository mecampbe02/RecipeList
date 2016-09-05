import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

/*
  Generated class for the IngredientDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/ingredient-detail/ingredient-detail.html',
})
export class IngredientDetailPage {

    private name;
  private amount;
    private measure;


  constructor(private navParams: NavParams) {

    this.name = this.navParams.get('item').name;
    this.amount = this.navParams.get('item').amount;
      this.measure = this.navParams.get('item').measure;

  }

}
