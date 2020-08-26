//import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalModule } from 'app/_modal';
import { FormsModule } from '@angular/forms';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalModule,
    FormsModule,
    TranslateModule
    //BreadcrumbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ScrollTopComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ScrollTopComponent
  ]
})
export class ComponentsModule { }
