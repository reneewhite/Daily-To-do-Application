import { TODOWORK } from './../../mocks/todo.mocks';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-display',
  templateUrl: 'display.html',
})
export class DisplayPage {
todoList = TODOWORK;
value1 = "";
value2 = "";
value3 = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.value1 = this.navParams.get("variable1");
    this.value2 = this.navParams.get("variable2");
    this.value3 = this.navParams.get("variable3");
    console.log(this.value1);
    console.log(this.value2);
    console.log(this.value3);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad DisplayPage');
  }

  onDone(){
    this.navCtrl.push("DonePage");
  }
}
