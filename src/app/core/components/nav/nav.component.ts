import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/pages/admin/services/admin.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  status: boolean = false;
  public changeIcon: boolean = true
  constructor( private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['auth/login'])
  }

  public showAndHide() {
    this.adminService.clickEvent(true);
    this.changeIcon = !this.changeIcon;
   }

}
