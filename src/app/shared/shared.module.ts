import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampoControlErroComponent } from './components/campo-control-erro/campo-control-erro.component';
import { SpinnerLoaderComponent } from './components/spinner-loader/spinner-loader.component';
import { FormDebugComponent } from './components/form-debug/form-debug.component';
import { SpinnerLoaderPageComponent } from './components/spinner-loader-page/spinner-loader-page.component';
import { SwitchSliderComponent } from './components/switch-slider/switch-slider.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CampoControlErroComponent,
    SpinnerLoaderComponent,
    FormDebugComponent,
    SpinnerLoaderPageComponent,
    SwitchSliderComponent,
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    CampoControlErroComponent,
    SpinnerLoaderComponent,
    FormDebugComponent,
    SpinnerLoaderPageComponent,
    SwitchSliderComponent,
  ]
})
export class SharedModule { }
