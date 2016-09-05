import {Component} from '@angular/core';
import {ModalController, NavController, AlertController} from 'ionic-angular';
import {AddRecipePage} from '../add-recipe/add-recipe';
import {RecipeDetailPage} from '../recipe-detail/recipe-detail';
import {Data} from '../../providers/data/data';

@Component({
  templateUrl: 'build/pages/recipe-list/recipe-list.html',
})

export class RecipeListPage {

   recipes: any = [];

  constructor(private nav: NavController, private dataService: Data, private modalCtrl: ModalController, private alertCtrl: AlertController) {

    this.dataService.getData().then((todos) => {
        if(todos){
            this.recipes = JSON.parse(todos);
        }
    });
  }

//  addItem(){
//
//    let addModal = this.modalCtrl.create(AddRecipePage);
//    addModal.onDidDismiss((recipe) => {
//          if(recipe){
//            this.saveItem(recipe);
//          }
//    });
//    addModal.present();
//  }

 addItem(){

        let prompt = this.alertCtrl.create({
            title: 'Add Recipe',
            inputs: [{
                name: 'title',
                placeholder: 'Recipe Name'
            }, {
                name:'description',
                type:'textarea',
                placeholder: 'directions'
            }, {name:'ingredients',
               placeholder: 'ingredients'}],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Add',
                    handler: data => {
                        this.saveItem(data);
                       // this.notes.push(data);
                    }
                }
            ]
        });

        prompt.present();
    }

  saveItem(recipe){
    this.recipes.push(recipe);
      this.dataService.save(this.recipes);
  }

 viewItem(recipe){
  this.nav.push(RecipeDetailPage , {
    item: recipe
  });
}

editRecipe(recipe){

        let prompt = this.alertCtrl.create({
            title: 'Edit Recipe',
            inputs: [{
                name: 'title',
                placeholder: 'Recipe Name',
                value: recipe.title
            }, {
                name:'description',
                placeholder: 'directions',
                type:'textarea',
                value: recipe.description
            }, {name:'ingredients',
               placeholder: 'ingredients',
               value: recipe.ingredients}],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Save',
                    handler: data => {
                        let index = this.recipes.indexOf(recipe);

                        if(index > -1){
                          this.recipes[index] = data;
                        }
                        this.dataService.save(this.recipes);
                    }
                }
            ]
        });

        prompt.present();

    }

    deleteRecipe(recipe){

        let index = this.recipes.indexOf(recipe);

        if(index > -1){
            this.recipes.splice(index, 1);
        }
         this.dataService.save(this.recipes);
    }
}



