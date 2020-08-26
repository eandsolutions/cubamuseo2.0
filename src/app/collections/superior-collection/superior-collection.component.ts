import { Ng7MatBreadcrumbService } from 'ng7-mat-breadcrumb';
import { Component, OnInit } from '@angular/core';
//import { ConfigServiceService } from 'src/app/core/service/config-service.service';
import { ActivatedRoute } from '@angular/router';
//import { EnviromentVariableServiceService } from 'src/app/core/service/enviroment-variable-service.service';
import { ConfigServiceService } from 'app/core/service/config-service.service';
import { CollectionServiceService } from 'app/core/service/collection-service.service';
import { EnviromentVariableServiceService } from 'app/core/service/enviroment-variable-service.service';
//import { CollectionServiceService } from 'src/app/core/service/collection-service.service';

@Component({
  selector: 'app-superior-collection',
  templateUrl: './superior-collection.component.html',
  styleUrls: ['./superior-collection.component.scss']
})
export class SuperiorCollectionComponent implements OnInit {

  collection: any;
  gallery: any[];
  galleryXX: any[];
  constructor(
    public config: ConfigServiceService,
    private activateRoute: ActivatedRoute,
    public enviromentVariable: EnviromentVariableServiceService,
    private collectionService: CollectionServiceService,
    private ng7MatBreadcrumbService: Ng7MatBreadcrumbService
    ) {
    this.collection = {
      descripcion: '',
      titulo: '',
      imagen: '',
      nombre: '',
      id: ''
    }
    this.gallery = [];
    this.galleryXX = [];

    if (this.enviromentVariable.sections.length == 0)
      this.initSections()
    activateRoute.params.subscribe(
      data => {
        if (data.id)
          this.collectionService.getSectionById(data.id).subscribe(
            (data: any) => {
              this.collection = {
                descripcion: data.descripcion,
                titulo: data.titulo,
                imagen: data.imagen,
                nombre: data.nombre,
                id: data.idSeccion
              }

              this.initGalery()
              this.updateBreadcrumb();
              console.log(this.collection.nombre);
            }, err => {

            }
          )
      }
    )
  }

  updateBreadcrumb(): void {
    const breadcrumbs  =  [
      {
        label: 'Inicio',
        url: '/home'
      },
      {
        label: '{{this.collection.nombre}}',
        url: ''
      }
    ];
    this.ng7MatBreadcrumbService.updateBreadcrumb(breadcrumbs);
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

  initGalery() {
    this.gallery = [];
    this.galleryXX = [];
    this.collectionService.getSectionCategory(this.collection.id).subscribe(
      (data: any[]) => {
        data.forEach(element => {
          if(element.sigloXIX.data[0] == 1){
            this.gallery.push(element)
          }else{
            this.galleryXX.push(element)
          }
        });
        
      }, err => {

      }
    )
  }

  getSection() {
    let data:any = this.enviromentVariable.getSection()
    if(data == 0){
      return 0
    }else{
      return JSON.parse(data).nombre
    }
    
  }

  ngOnInit(): void {
    this.enviromentVariable.actualPage = 'collection'
  }

}
