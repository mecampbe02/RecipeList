import { Component } from '@angular/core';
import {ViewController, NavController}  from 'ionic-angular';

/*
  Generated class for the AddIngredientPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/add-ingredient/add-ingredient.html',
})
export class AddIngredientPage {

   private name = "";
    private amount = "";
private measure = "";

    constructor(private nav: NavController, private view: ViewController) {

    }

    saveItem(){

        let newRecipe = {
          name: this.name,
          amount: this.amount,
          measure: this.measure
        };

        this.view.dismiss(newIngredient);

    }

    close(){
        this.view.dismiss();
    }

}
