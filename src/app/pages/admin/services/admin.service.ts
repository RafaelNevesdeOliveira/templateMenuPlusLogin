import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public status: boolean = false;
  eventShowAndHideMenu = new EventEmitter<any>()

  constructor() { }

  public clickEvent(evento: any) {
    this.status = evento
    this.eventShowAndHideMenu.emit(evento)
  }
}
