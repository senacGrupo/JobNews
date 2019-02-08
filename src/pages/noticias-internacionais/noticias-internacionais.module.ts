import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NoticiasInternacionaisPage } from './noticias-internacionais';

@NgModule({
  declarations: [
    NoticiasInternacionaisPage,
  ],
  imports: [
    IonicPageModule.forChild(NoticiasInternacionaisPage),
  ],
})
export class NoticiasInternacionaisPageModule {}
