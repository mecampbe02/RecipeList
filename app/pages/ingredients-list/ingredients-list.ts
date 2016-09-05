import { Component } from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {AddIngredientPage} from '../add-ingredient/add-ingredient';
import {IngredientDetailPage} from '../ingredient-detail/ingredient-detail';
import {Data} from '../../providers/data/data';

@Component({
  templateUrl: 'build/pages/ingredients-list/ingredients-list.html',
})
export class IngredientsListPage {
 private ingredients = [];
  constructor(private nav: NavController, private dataService: Data, private modalCtrl: ModalController) {

    this.dataService.getData().then((todos) => {
        if(todos){
            this.ingredients= JSON.parse(todos);
        }

    });

  }

  addItem(){

    let addModal = this.modalCtrl.create(AddIngredientPage);

    addModal.onDidDismiss((item) => {

          if(item){
            this.saveItem(item);
          }

    });

    addModal.present();

  }

  saveItem(item){
    this.items.push(item);
      this.dataService.save(this.items);
  }

 viewItem(item){
  this.nav.push(IngredientDetailPage , {
    item: item
  });

}



