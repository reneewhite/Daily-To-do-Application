import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the DonePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-done',
  templateUrl: 'done.html',
})
export class DonePage {
description = " ";
priority = " ";
status = " ";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonePage');
  }

  onSlip(){
    this.navCtrl.push("DisplayPage",{variable1:this.description, variable2:this.priority, variable3:this.status});
    
  }

}
