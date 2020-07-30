import { BreadcrumbModule } from 'primeng/breadcrumb';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ModalModule } from 'app/_modal';
import { FormsModule } from '@angular/forms';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ModalModule,
    FormsModule,
    TranslateModule,
    BreadcrumbModule
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ]
})
export class ComponentsModule { }
