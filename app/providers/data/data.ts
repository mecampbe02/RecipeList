import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from '@angular/core';

@Injectable()
export class Data {

  private storage;
  private data;

  constructor(){
    this.storage = new Storage(SqlStorage, {name:'recipe'});
  }

  getData() {
    return this.storage.get('recipe');
  }

  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('recipe', newData);
  }
}


