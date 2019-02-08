import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasNacionaisPage } from './noticias-nacionais';

@NgModule({
  declarations: [
    NoticiasNacionaisPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasNacionaisPage),
  ],
})
export class NoticiasNacionaisPageModule {}
