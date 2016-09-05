import { Component } from '@angular/core';
import {ViewController, NavController} from 'ionic-angular';
import {IngredientDetailPage} from '../ingredient-detail/ingredient-detail';
/*
  Generated class for the AddRecipePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/add-recipe/add-recipe.html',
})
export class AddRecipePage {

  private title = "";
    private description = "";
private ingredients = "";

    constructor(private nav: NavController, private view: ViewController) {

    }

    saveItem(){

        let newRecipe = {
          title: this.title,
          description: this.description,
          ingredients: this.ingredients
        };

        this.view.dismiss(newRecipe);

    }

    close(){
        this.view.dismiss();
    }
  viewItem(ingredients){
  this.nav.push(IngredientDetailPage , {
    ingredients: ingredients
  });
}

}
