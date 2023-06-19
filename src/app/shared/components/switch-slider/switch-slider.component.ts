import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'switch-slider',
  templateUrl: './switch-slider.component.html',
  styleUrls: ['./switch-slider.component.scss']
})
export class SwitchSliderComponent {

  @Output() switchValue = new EventEmitter<boolean>();

  @Input() checkBoxValue: boolean = false



  constructor() {
   }

  newEventSend(e: any) {
    this.switchValue.emit(this.checkBoxValue)
  }


}
