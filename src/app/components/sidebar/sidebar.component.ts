import { Component, OnInit } from '@angular/core';
import { EnviromentVariableServiceService } from 'app/core/service/enviroment-variable-service.service';
import { ConfigServiceService } from 'app/core/service/config-service.service';
import { environment } from 'environments/environment';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
// export const ROUTES: RouteInfo[] = [
//     { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
//     { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
//     { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
//     { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
//     { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
//     { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
//     { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
//     { path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
// ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor(
    public enviromentVariables: EnviromentVariableServiceService,
    public config: ConfigServiceService
  ) { 
    console.log(enviromentVariables.sections)
  }

  ngOnInit(): void {
  }

  setSection(section:any) {
    this.enviromentVariables.setSection(section);
  }

  getSection(){
    let data:any = this.enviromentVariables.getSection()
    if(data == 0){
        return 0
    }
    return JSON.parse(data);
  }
  
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
