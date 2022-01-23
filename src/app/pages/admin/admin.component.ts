import { Component, OnInit } from '@angular/core';
import { AdminService } from './services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  status: boolean = false;
  mostrarMenu: boolean = false;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.eventShowAndHideMenu.subscribe(evento =>
      this.clickEvent(evento)
    );
  }

  public clickEvent(res: any) {
    this.status = !this.status;
  }

}
