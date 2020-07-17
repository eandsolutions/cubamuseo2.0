import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperiorCollectionComponent } from './superior-collection/superior-collection.component';
import { InferiorCollectionComponent } from './inferior-collection/inferior-collection.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'app/_modal/modal.module';

@NgModule({
  declarations: [SuperiorCollectionComponent, InferiorCollectionComponent],
  imports: [
    CommonModule,
    RouterModule,
    ModalModule
  ]
})
export class CollectionsModule { }
