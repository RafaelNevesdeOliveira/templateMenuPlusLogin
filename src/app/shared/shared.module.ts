import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './components/campo-control-erro/campo-control-erro.component';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';



@NgModule({
  declarations: [
    CampoControlErroComponent,
    SpinnerLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CampoControlErroComponent,
    SpinnerLoaderComponent
  ]
})
export class SharedModule { }
