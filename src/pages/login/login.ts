import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController  } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MenuController } from 'ionic-angular/components/app/menu-controller'


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

    public user: any;
  @ViewChild('usuario') email;
  @ViewChild('senha') password;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public firebaseauth: AngularFireAuth,
    public menu: MenuController) {

  }

public login(): void {
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(() => {
        this.exibirToast('Login efetuado com sucesso');
      })
      .catch((erro: any) => {
        this.exibirToast(erro);
      });
  }

  private exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({ duration: 4000, position: 'botton' });
    toast.setMessage(mensagem);
    toast.present();
  }

  ionViewDidLoad() {
    this.menu.swipeEnable(false);
  }

  ionViewDidLeave() {
    this.menu.swipeEnable(true);
  }

}