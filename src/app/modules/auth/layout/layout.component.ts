import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTE_CONFIG } from '../../../core/constants/route-config.constant';
import { LocalStorageUtils } from '../../../core/utils/localstorage-utils';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  ROUTE_CONFIG = ROUTE_CONFIG;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    LocalStorageUtils.logout();
    this.router.navigate([ROUTE_CONFIG.LOGIN]);
  }

  profile() {

  }
}
