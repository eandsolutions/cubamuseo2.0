import { Component, OnInit } from '@angular/core';
import { ModalService } from 'app/_modal';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  test : Date = new Date();
  
  
  constructor(
    private modalService:ModalService
  ) { }

  ngOnInit() {
  }

  openModal(id: string, actual: any) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    if (!this.modalService.widht)
      this.modalService.widht = '900px';
    this.modalService.close(id);
  }

  send(){

  }

}
