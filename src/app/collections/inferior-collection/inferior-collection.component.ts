import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from 'app/core/service/config-service.service';
import { ActivatedRoute } from '@angular/router';
import { EnviromentVariableServiceService } from 'app/core/service/enviroment-variable-service.service';
import { CollectionServiceService } from 'app/core/service/collection-service.service';
import { ModalService } from 'app/_modal/modal.service';
import { decode } from 'punycode';

@Component({
  selector: 'app-inferior-collection',
  templateUrl: './inferior-collection.component.html',
  styleUrls: ['./inferior-collection.component.scss']
})
export class InferiorCollectionComponent implements OnInit {

  collection: any;
  gallery: any[];
  actualItem: any;
  isHide: boolean;
  widht: string = '900px'
  
  constructor(
    public config: ConfigServiceService,
    private activateRoute: ActivatedRoute,
    public enviromentVariable: EnviromentVariableServiceService,
    private collectionService: CollectionServiceService,
    private modalService: ModalService
  ) {
    console.log(decodeURIComponent(encodeURIComponent('AquÃ­')))
    this.isHide = false;
    this.gallery = [];
    this.actualItem = {
      imagen: '',
      descripcion: '',
      emision: '',
      color: '',
      material: '',
      impresion: '',
      dimension: '',
      procedencia: '',
      precio: ''
    }

    this.collection = {
      descripcion: '',
      titulo: '',
      imagen: '',
      nombre: '',
      carpeta: null,
      id: ''
    }

    activateRoute.params.subscribe(
      data => {
        if (data.id)
          this.collectionService.getCategoryById(data.id).subscribe(
            (data: any) => {
              this.collection = {
                descripcion: data.descripcion,
                titulo: data.titulo,
                imagen: data.imagen,
                nombre: data.nombre,
                carpeta: data.carpeta,
                id: data.idCategoria
              }

              this.initGalery()
            }, err => {

            }
          )
      }
    )
  }

  initGalery() {
    this.collectionService.getCollectionItemByCategory(this.collection.id).subscribe(
      (data: any[]) => {
        this.gallery = data;
      }, err => {

      }
    )
  }

  initSections() {

    this.collectionService.getCollectionsSections().subscribe(
      (data: any[]) => {
        this.enviromentVariable.sections = [];
        this.enviromentVariable.sections = data;
        this.enviromentVariable.link = { path: '/superior-collection' }
      }, err => {
        console.log(err)
      }
    )
  }

  ngOnInit(): void {
    this.enviromentVariable.actualPage = 'collection'
    this.initSections()
  }

  getSection() {
    let data:any = this.enviromentVariable.getSection()
    if(data == 0){
      return 0
    }else{
      return JSON.parse(data).nombre
    }
    
  }

  openModal(id: string, actual: any) {
    if (actual) {
      this.actualItem = actual;
      this.modalService.widht = '900px'
    } else {
      this.modalService.widht = null
    }
    this.modalService.open(id);
  }

  next() {
    for (let i = 0; i < this.gallery.length; i++) {
      const element = this.gallery[i];
      if (element.idItem == this.actualItem.idItem) {
        if (i+1 < this.gallery.length)
          this.actualItem = this.gallery[i + 1];
        else {
          this.actualItem = this.gallery[0]
        }
        break;
      }
    }
  }

  prev() {
    for (let i = 0; i < this.gallery.length; i++) {
      const element = this.gallery[i];
      if (element.idItem == this.actualItem.idItem) {
        if (i > 0)
          this.actualItem = this.gallery[i - 1];
        else {
          this.actualItem = this.gallery[this.gallery.length -1]
        }
        break
      }
    }
  }

  checkIfIsEmpty(elementToCheck: string) {
    let isEmpty: boolean;
    isEmpty = false;
    elementToCheck = elementToCheck.trim()
    if (elementToCheck.length == 0) {
      isEmpty = true;
    }
    return isEmpty;
  }

  closeModal(id: string) {
    if (!this.modalService.widht)
      this.modalService.widht = '900px';
    this.modalService.close(id);
  }

  checkLenght(elementToCheck: string) {
    let isLarge: boolean;
    isLarge = false;
    elementToCheck = elementToCheck.trim()
    if (elementToCheck.length > 500) {
      isLarge = true;
    }
    return isLarge;
  }

  sliceDescription(description: string) {
    let res = description.slice(0, 500) + " ...";
    return res;
  }

  see_more() {
    this.isHide = !this.isHide;
    return this.isHide;
  }

}
