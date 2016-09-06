import {Component} from '@angular/core';
import {NavParams} from 'ionic-angular';

/*
  Generated class for the RecipeDetailPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/recipe-detail/recipe-detail.html',
})
export class RecipeDetailPage {

   private title;
  private description;
   private ingredients = [];

  constructor(private navParams: NavParams) {

    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
      this.ingredients = this.navParams.get('item').ingredients;

  }

}
