import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NoticiaService } from '../../services/noticias.services';
import { Noticia } from '../../model/noticias';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  noticias : Noticia[];

  constructor(public navCtrl: NavController, 
  public navParams: NavParams,
  public noticiaService : NoticiaService) {
  }

  ionViewDidLoad() { 
    this.noticiaService.getNoticias().subscribe(response => {
      this.noticias = response;
    });
  }

  profilePage(){
    this.navCtrl.push("ProfilePage");
  }

}
